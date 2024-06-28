document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            var spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();


    // Fixed Navbar
    window.addEventListener('scroll', function () {
        if (window.innerWidth < 992) {
            if (window.scrollY > 55) {
                document.querySelector('.fixed-top').classList.add('shadow');
            } else {
                document.querySelector('.fixed-top').classList.remove('shadow');
            }
        } else {
            var fixedTop = document.querySelector('.fixed-top');
            if (window.scrollY > 55) {
                fixedTop.classList.add('shadow');
                fixedTop.style.top = '-55px';
            } else {
                fixedTop.classList.remove('shadow');
                fixedTop.style.top = '0';
            }
        }
    });


    // Back to top button
    window.addEventListener('scroll', function () {
        var backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    document.querySelector('.back-to-top').addEventListener('click', function () {
        var scrollTopDuration = 1500;
        var easing = 'easeInOutExpo';
        var scrollStep = -window.scrollY / (scrollTopDuration / 15);
        var scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    });


    // Testimonial carousel
    var testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
        new window.OwlCarousel(testimonialCarousel, {
            autoplay: true,
            smartSpeed: 2000,
            center: false,
            dots: true,
            loop: true,
            margin: 25,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0: { items: 1 },
                576: { items: 1 },
                768: { items: 1 },
                992: { items: 2 },
                1200: { items: 2 }
            }
        });
    }


    // Modal Video
    var videoSrc;
    var btnPlay = document.querySelectorAll('.btn-play');
    btnPlay.forEach(function (btn) {
        btn.addEventListener('click', function () {
            videoSrc = btn.getAttribute('data-src');
        });
    });

    var videoModal = document.getElementById('videoModal');
    if (videoModal) {
        videoModal.addEventListener('shown.bs.modal', function () {
            var videoFrame = document.getElementById('video');
            videoFrame.src = videoSrc + "?autoplay=1&modestbranding=1&showinfo=0";
        });

        videoModal.addEventListener('hide.bs.modal', function () {
            var videoFrame = document.getElementById('video');
            videoFrame.src = videoSrc;
        });
    }


    // Product Quantity
    var quantityButtons = document.querySelectorAll('.quantity button');
    quantityButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var input = button.parentElement.querySelector('input');
            var oldValue = parseFloat(input.value);
            var newVal;
            if (button.classList.contains('btn-plus')) {
                newVal = oldValue + 1;
            } else {
                newVal = (oldValue > 0) ? oldValue - 1 : 0;
            }
            input.value = newVal;
        });
    });

});
