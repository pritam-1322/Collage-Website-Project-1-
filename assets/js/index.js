$(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
            {
              breakpoint: 864,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 530,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
  });





  $(".recruiter").slick({
    dots: false,
    infinite: true,
    slidesToShow: 7,
    autoplay: true,
    speed:2000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToScroll: 1,
    arrows: false,
    responsive: [
            {
              breakpoint: 864,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 530,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
        ]
  });




// for toast activity 

var toastTrigger = document.getElementById('liveToastBtn')
  var toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
      var toast = new bootstrap.Toast(toastLiveExample)
  
      toast.show()
    })
  }
