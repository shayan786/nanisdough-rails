# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Doughnut.create([
  {
    name: 'Chocolate Ganache',
    description: 'Chocolate Ganache',
    regular: true,
    cost: 4
  },
  {
    name: 'The King',
    description: 'Whipped Peanut Butter & Grape Jelly, Sprinkled with Powered Sugar, & Piece of Bacon',
    regular: false,
    cost: 4
  },
  {
    name: "S'mores",
    description: 'Marshmallow Filling, Chocolate Ganache Topped, & Sprinkled Marshmallows with Graham Crackers',
    regular: false,
    cost: 4
  }
])
