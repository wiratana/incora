// Progress bar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var progressBar = $("#progressBar");
  progressBar.css('width', scrolled + "%");
  if (scrolled == 100) {
      progressBar.css('border-radius', '0px');
  }else{
      progressBar.css('border-radius', '0 5px 5px 0');
  }
}

// end progress bar


// wow plugin
new WOW().init();
// end wow plugin

// hide navbar
// Hide Header on on scroll down
// end hide navbar

// swiper plugin
var mySwiper = new Swiper('#swiperBanner', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
})

var swiper = new Swiper('#swiperTips', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// swiper plugin end

// match height
var option = {
  byRow: true,
  property: 'height',
  target: null,
  remove: false
};

$(function() {
  $('.data-image-container').matchHeight();
  $('.news-text-container').matchHeight();
  $('.news-title').matchHeight();
});
// match height end

// chartist plugin
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [{
            label: 'Positif',
            data: [500, 2000, 5000, 10000, 33000, 35000, 60000, 100000, 120000, 250000, 380000],
            backgroundColor: 'rgba(239, 119, 0, 0.4)',
            borderColor: '#EF7700',
            borderWidth: 2
        }, 
      {
        label: 'Dirawat',
        data: [0, 50, 1000, 4030, 9003,10300, 20000, 45000, 60123, 115994, 150672],
        backgroundColor: 'rgba(239, 0, 3, 0.61)',
        borderColor: '#EF0000',
        borderWidth: 2
    }
    , {
      label: 'Sembuh',
      data: [0, 100, 2500, 8030, 18003,20300, 40000, 90000, 112123, 232994, 317672],
      backgroundColor: 'rgba(0, 239, 0, 0.4)',
      borderColor: '#00EF00',
      borderWidth: 2
  }, 
        {
          label: 'Meninggal',
          data: [0, 50, 500, 3030, 5003,8300, 11000, 12000, 13123, 15994, 18672],
          backgroundColor: 'rgba(3, 0, 239, 0.6)',
          borderColor: '#0700EF',
          borderWidth: 2
      }
      ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
// chartist plugin end

// smooth scroll

// smooth scroll end