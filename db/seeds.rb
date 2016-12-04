# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Doughnut.create([
  {
    name: "Chef's Pick 6",
    description: "Chocolate Ganache, Nutella, S'mores, Maple Bacon, Glaze, & Cinnamon Sugar",
    regular: true,
    cost: 20,
    for_online: true,
    for_menu: false
  },
  {
    name: "Chef's Pick 12",
    description: "Chocolate Ganache, Nutella, S'mores, Maple Bacon, Glaze, Cinnamon Sugar, Red Velvet, ",
    regular: true,
    cost: 40,
    for_online: true,
    for_menu: false
  },
  {
    name: 'Maple Bacon',
    description: 'Maple Glaze & Sprinkled with Bacon Pieces',
    regular: true,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'Cannoli',
    description: 'Cannoli Filling, Sprinkled with Powdered Sugar',
    regular: false,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'Chocolate Ganache',
    description: 'Chocolate Ganache',
    regular: true,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'The King',
    description: 'Whipped Peanut Butter & Grape Jelly, Sprinkled with Powered Sugar, & Piece of Bacon',
    regular: false,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: "S'mores",
    description: 'Marshmallow Filling, Chocolate Ganache Topped, & Sprinkled Marshmallows with Graham Crackers',
    regular: false,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'Red Velvet',
    description: 'Cream Cheese Icing & Red Velvet Ganache, Sprinkled with Red Velvet Cake Pieces',
    regular: true,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'Carrot Cake',
    description: 'Carrots mixed with Cream Cheese Icing, & Sprinkled with Walnuts',
    regular: true,
    cost: 4,
    for_online: false,
    for_menu: true
  },
  {
    name: 'Nutella',
    description: 'Nutella Filled & Sprinkled with Powdered Sugar',
    regular: false,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'Cappucinno',
    description: 'Real Espresso Glaze, topped with Meringue',
    regular: true,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'Mocha',
    description: 'Real Espresso Glaze, topped with grated Chocolate',
    regular: true,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'Creme Brulee',
    description: 'Pastry Cream Filled, Sprinkled with Powdered Sugar, & a Piece of Hard Caramel',
    regular: false,
    cost: 4,
    for_online: false,
    for_menu: true
  },
  {
    name: 'Cotton Candy',
    description: 'Pink Vanilla & Raspberry Flavored Cotton Candy Glaze',
    regular: true,
    cost: 4,
    for_online: false,
    for_menu: true
  },
  {
    name: 'Cinnamon Sugar',
    description: 'Tossed in a Mix of Cinnamon & Sugar',
    regular: true,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'Banana Cream',
    description: 'Banana Cream Filled, Sprinkled with Powdered Sugar',
    regular: false,
    cost: 4,
    for_online: false,
    for_menu: true
  },
  {
    name: 'Peanut Butter & Jelly',
    description: 'Creamed Peanut Butter & Grape Jelly. Sprinkled with Powered Sugar',
    regular: false,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'Bubble Gum',
    description: 'Bubble Gum Glaze',
    regular: true,
    cost: 4,
    for_online: false,
    for_menu: true
  },
  {
    name: 'Moon Pie',
    description: 'Layer of light marshmellow filing covered with chocolate ganache',
    regular: true,
    cost: 4,
    for_online: false,
    for_menu: true
  },
  {
    name: 'Shakaka',
    description: 'White chocolate glaze topped with cheyenne pepper candied bacon pieces',
    regular: true,
    cost: 4,
    for_online: false,
    for_menu: true
  },
  {
    name: 'White Chocolate Mocha',
    description: 'White choclate glaze, drizzled with espresso, topped with cookie crumbs',
    regular: true,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'Cinmamon Roll',
    description: 'Cinnamon Sugar Glaze topped with Cream Cheese Swirls',
    regular: true,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'FlufferNutter',
    description: 'Whipped Peanut Butter & Fluffy Marshmallow Filling, Sprinkled with Powdered Sugar',
    regular: false,
    cost: 4,
    for_online: true,
    for_menu: true
  },
  {
    name: 'Glaze',
    description: 'Sugar Glazed',
    regular: false,
    cost: 4,
    for_online: true,
    for_menu: true
  }
])
