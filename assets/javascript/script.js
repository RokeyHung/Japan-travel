var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 10) {
    counter = 1;
  }
}, 3000);

$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
      breakpoint: 825,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
    ]
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});

$(document).ready(function () {
  $(".JPGovInfo__slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
      breakpoint: 825,
      settings: {
        arrows: false,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    }
    ]
  });
});