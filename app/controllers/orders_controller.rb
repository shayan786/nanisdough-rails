class OrdersController < ApplicationController
  
  def new
    access_token = ENV['SQUARE_ACCESS_TOKEN']
    location_id = "CBASEF3KUk1CiSaJXLiFjRa-SD0"

    @doughnuts = Doughnut.where(for_online: true)
    @available_dates = get_available_dates
    @available_times = get_available_times

    if current_user && !current_user.square_customer_id.blank?
      customer_api = SquareConnect::CustomerApi.new()

      request_body = {
        :customer_id => current_user.square_customer_id
      }

      begin
        resp = customer_api.retrieve_customer(access_token, request_body)
        
        @customer_info = resp.customer
      rescue SquareConnect::ApiError => e
        puts 'Error encountered while retrieving custoemr:'
        puts e.message

        respond_to do |format|
          format.json {render json: {status: 400}}
        end
      end      
    end
  end

  def create
    access_token = ENV['SQUARE_ACCESS_TOKEN']
    location_id = "CBASEF3KUk1CiSaJXLiFjRa-SD0"

    # Create order
    @order = Order.create()

    if current_user && current_user.square_customer_id.blank?
      @order.user_id = current_user.id
      nonce = params['order']['nonce']

      customer_api = SquareConnect::CustomerApi.new()

      request_body = {
        :email_address => current_user.email
      }

      begin
        resp = customer_api.create_customer(access_token, request_body)

        current_user.update(square_customer_id: resp.customer.id)

      rescue SquareConnect::ApiError => e
        puts 'Error encountered while retrieving customer:'
        puts e.message

        respond_to do |format|
          format.json {render json: {status: 400}}
        end
      end 
    elsif current_user && current_user.square_customer_id
      @order.user_id = current_user.id
    else
      @order.user_id = nil
      @order.name = params['order']['name']
      @order.email = params['order']['email']
      nonce = params['order']['nonce']
    end

    puts '***'
    puts @order.id
    puts '***'

    # Calculate amounts & store doughnuts
    tax_rate = 0.06
    pre_amount = 0
    tax_amount = 0
    total_amount = 0

    params['order']['items'].each do |k, v|
      pre_amount += (v['cost'].to_f * v['count'].to_i)

      doughnut = Doughnut.find(v['id'].to_i)

      Doughnut.create!(
        order_id: @order.id,
        name: doughnut.name,
        description: doughnut.description,
        cost: doughnut.cost,
        for_menu: false,
        for_online: false,
        regular: doughnut.regular
      )
    end

    tax_amount = pre_amount * tax_rate
    total_amount = pre_amount + tax_amount

    @order.pre_amount = pre_amount
    @order.tax_amount = tax_amount
    @order.total_amount = total_amount

    # Pickup or Delivery
    if params['order']['type'] === 'Pickup'
      @order.pickup = true
      @order.delivery = false
    else
      @order.pickup = false
      @order.delivery = true
    end

    # Date & Time
    @order.date = Date.parse(params['order']['date'])
    @order.time = params['order']['time']

    # Charge them (Square)
    amount = total_amount * 100

    transaction_api = SquareConnect::TransactionApi.new()
    

    if nonce
      request_body = {
        :card_nonce => nonce,

        # Monetary amounts are specified in the smallest unit of the applicable currency.
        # This amount is in cents. It's also hard-coded for $1, which is not very useful.
        :amount_money => {
          :amount => amount.to_i,
          :currency => 'USD'
        },

        # Every payment you process for a given business have a unique idempotency key.
        # If you're unsure whether a particular payment succeeded, you can reattempt
        # it with the same idempotency key without worrying about double charging
        # the buyer.
        :idempotency_key => SecureRandom.uuid
      }
    else
      customer_api = SquareConnect::CustomerApi.new()

      request_body = {
        :customer_id => current_user.square_customer_id
      }

      begin
        resp = customer_api.retrieve_customer(access_token, request_body)
      rescue SquareConnect::ApiError => e
        puts 'Error encountered while retrieving custoemr:'
        puts e.message

        respond_to do |format|
          format.json {render json: {status: 400}}
        end
      end 

      request_body = {
        :customer_id => current_user.square_customer_id,
        :customer_card_id => resp.customer.cards.first.id,

        # Monetary amounts are specified in the smallest unit of the applicable currency.
        # This amount is in cents. It's also hard-coded for $1, which is not very useful.
        :amount_money => {
          :amount => amount.to_i,
          :currency => 'USD'
        },

        # Every payment you process for a given business have a unique idempotency key.
        # If you're unsure whether a particular payment succeeded, you can reattempt
        # it with the same idempotency key without worrying about double charging
        # the buyer.
        :idempotency_key => SecureRandom.uuid
      }
    end

    # The SDK throws an exception if a Connect endpoint responds with anything besides 200 (success).
    # This block catches any exceptions that occur from the request.
    begin
      resp = transaction_api.charge(access_token, location_id, request_body)
      
      @order.transaction_uuid = resp.transaction.id
    rescue SquareConnect::ApiError => e
      puts 'Error encountered while charging card:'
      puts e.message

      respond_to do |format|
        format.json {render json: {status: 400}}
      end
    end

    @order.save!

    if @order.save
      # Send Email
      NanisdoughMailer.send_order_email(@order).deliver

      respond_to do |format|
        format.json {render json: {status: 200}}
      end
    else
      respond_to do |format|
        format.json {render json: {status: 400}}
      end
    end
  end


  private

  def get_available_dates
    now = DateTime.now.in_time_zone('Eastern Time (US & Canada)')

    available_dates = []

    [1,2,3,4,5,6,7].each do |d|
      available_dates << now.advance(days: d)
    end

    return available_dates
  end

  def get_available_times
    available_times = ['8A', '9A', '10A', '11A', '12P', '1P', '2P']
  end

  def order_params
    params.required(:order).permit(:user_id, :email, :pre_amount, :tax_amount, :total_amount, :pickup, :delivery, :date, :time, :name, :transaction_uuid)
  end

  def doughnut_params
    params.required(:doughnut).permit(:order_id, :name, :description, :reguar, :cost, :for_online, :for_menu, :order_id);
  end

end
