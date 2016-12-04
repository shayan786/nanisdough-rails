function rotateMenuImages() {
  const doughnuts = [
    {
      name: "Maple Bacon",
      url: 'url(/assets/doughnuts/maple_bacon.jpg)'
    },
    {
      name: "Cannoli",
      url: 'url(/assets/doughnuts/cannoli.jpg)'
    },
    {
      name: "Chocolate Ganache",
      url: 'url(/assets/doughnuts/chocolate_ganache.jpg)'
    },
    {
      name: "The King",
      url: 'url(/assets/doughnuts/king.jpg)'
    },
    {
      name: "S'mores",
      url: 'url(/assets/doughnuts/smores.jpg)'
    },
    {
      name: "Red Velvet",
      url: 'url(/assets/doughnuts/red_velvet.jpg)'
    },
    {
      name: "Carrot Cake",
      url: 'url(/assets/doughnuts/carrot_cake.jpg)'
    },
    {
      name: "Nutella",
      url: 'url(/assets/doughnuts/nutella.jpg)'
    },
    {
      name: "Cappucinno",
      url: 'url(/assets/doughnuts/cappucinno.jpg)'
    },
    {
      name: "Mocha",
      url: 'url(/assets/doughnuts/mocha.jpg)'
    },
    {
      name: "Creme Brulee",
      url: 'url(/assets/doughnuts/creme_brulee.jpg)'
    },
    {
      name: "Cotton Candy",
      url: 'url(/assets/doughnuts/cotton_candy.jpg)'
    },
    {
      name: "Cinnamon Sugar",
      url: 'url(/assets/doughnuts/cinnamon_sugar.jpg)'
    },
    {
      name: "Peanut Butter & Jelly",
      url: 'url(/assets/doughnuts/peanut_butter_jelly.jpg)'
    },
    {
      name: "Bubble Gum",
      url: 'url(/assets/doughnuts/bubble_gum.jpg)'
    },
    {
      name: "Moon Pie",
      url: 'url(/assets/doughnuts/moon_pie.jpg)'
    },
    {
      name: "Shakaka",
      url: 'url(/assets/doughnuts/shakaka.jpg)'
    },
    {
      name: "White Chocolate Mocha",
      url: 'url(/assets/doughnuts/white_chocolate_mocha.jpg)'
    },
    {
      name: "Cinnamon Roll",
      url: 'url(/assets/doughnuts/cinnamon_roll.jpg)'
    },
    {
      name: "FlufferNutter",
      url: 'url(/assets/doughnuts/fluffer_nutter.jpg)'
    },
    {
      name: "Glaze",
      url: 'url(/assets/doughnuts/glaze.jpg)'
    }
  ];

  $.each($('.menu__item_name'), function (i, item) {
    const name = $.trim($(item).text());

    doughnuts.forEach(function (d) {
      if (d.name === name) {
        $(item).parent().find('.menu__item_img').css({
          backgroundImage: d.url
        });
      }
    });
  });
}

function menuInit() {
  $(document).ready(function () {
    rotateMenuImages();
  })
}