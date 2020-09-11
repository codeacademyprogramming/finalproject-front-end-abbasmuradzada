$(document).ready(function(){
    $(".oc3").owlCarousel({
        items: 3,
        nav: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 500,
        navText:[`<i class="fas fa-arrow-left"></i>`,`<i class="fas fa-arrow-right"></i>`],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
            }
        }
    });

    $(".popular-blog").owlCarousel({
        items: 2,
        nav: true,
        margin: 15,
        // autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 500,
        navText:[`<i class="fas fa-arrow-left"></i>`,`<i class="fas fa-arrow-right"></i>`]
    });

    $(".oc6").owlCarousel({
        items: 6,
        nav: true,
        margin: 15,
        autoplayTimeout: 4000,
        autoplaySpeed: 500,
        navText:[`<i class="fas fa-arrow-left"></i>`,`<i class="fas fa-arrow-right"></i>`],
        responsive:{
            0:{
                items:3,
                nav:true
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:6,
                nav:true,
                loop:false
            }
        }
    });
    

    function changeCourseSec(navBtn, navSec){
        navBtn.click(function(){
            $(".active-course-nav").removeClass("active-course-nav");
            $(this).addClass("active-course-nav");
            $(".course-active-section").removeClass("course-active-section");
            navSec.addClass("course-active-section");
        })
    }

    changeCourseSec($(".overview-nav"),$(".course-overview"));
    changeCourseSec($(".curriculum-nav"),$(".course-curriculum"));
    changeCourseSec($(".instructor-nav"),$(".course-intructor"));
    changeCourseSec($(".review-nav"),$(".course-review"));
});