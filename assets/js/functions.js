$(document).ready(function() {
    //     $('.bxslider').bxSlider({
    //         mode: 'fade',
    //         auto: true,
    //         stopAutoOnClick: true,
    //         pause: 5000,
    //     });
    //     //responsive menu
    //     $(".menu-bottom").on("click", function() {
    //         $("html").toggleClass("menu-open")
    //     });
    //     $(".menu-bottom").click(function() {
    //         $(this).toggleClass("click")
    //     });
    
    
    $('#list-btn').click(function(){
    
        document.getElementById('list-btn').style.display="none";
        document.getElementById('cross').style.display="block";
        document.getElementById('menu-list').style.display="block";  
        
    });
    $('#cross').click(function(){
    
        document.getElementById('list-btn').style.display="block";
        document.getElementById('cross').style.display="none";
        document.getElementById('menu-list').style.display="none";  
            
    });
    
    
    
    
    
    
    
    
    //     /*PORTFOLIO*/
    //     $('.various').click(function() {
    //         var leadprice = $(this).attr('name');
    //         $(".popupform .leadprice").val(leadprice)
    //     });
    //     var str = location.href.toLowerCase();
    //     $(".navbar-nav li a").each(function() {
    //         if (str.indexOf(this.href.toLowerCase()) > -1) {
    //             $("li.active").removeClass("active");
    //             $(this).parent().addClass("active");
    //         }
    //     });
    //     // init Isotope
    //     var $container = $('.grid').isotope({
    //         itemSelector: '.element-item',
    //         layoutMode: 'fitRows',
    //     });
    //     // bind filter button click
    //     $('#filters').on('click', 'button', function() {
    //         var filterValue = $(this).attr('data-filter');
    //         // use filterFn if matches value
    //         filterValue = filterValue;
    //         $container.isotope({
    //             filter: filterValue
    //         });
    //     });
    //     // change is-checked class on buttons
    //     $('.button-group').each(function(i, buttonGroup) {
    //         var $buttonGroup = $(buttonGroup);
    //         $buttonGroup.on('click', 'button', function() {
    //             $buttonGroup.find('.is-checked').removeClass('is-checked');
    //             $(this).addClass('is-checked');
    //         });
    //     });
    //     //****************************
    //     // Isotope Load more button
    //     //****************************
    //     var initShow = 6; //number of items loaded on init & onclick load more button
    //     var counter = initShow; //counter for load more button
    //     var iso = $container.data('isotope'); // get Isotope instance
    //     $('#showMore ').on('click', function (e) {
    //         e.preventDefault();
    //         showNextItems(next_items);
    //     });
    //     loadMore(initShow); //execute function onload
    //     function loadMore(toShow) {
    //         $container.find(".hidden").removeClass("hidden");
    
    //         var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
    //             return item.element;
    //         });
    //         $(hiddenElems).addClass('hidden');
    //         $container.isotope('layout');
    
    //         //when no more to load, hide show more button
    //         if (hiddenElems.length == 0) {
    //             jQuery("#showMore").hide();
    //         } else {
    //             jQuery("#showMore").show();
    //         };
    
    //     }
    //     //append load more button
    //     $container.after('<button id="showMore"></button>');
    //     //when load more button clicked
    //     $("#showMore").click(function() {
    //         if ($('#filters').data('clicked')) {
    //             //when filter button clicked, set initial value for counter
    //             counter = initShow;
    //             $('#filters').data('clicked', false);
    //         } else {
    //             counter = counter;
    //         };
    
    //         counter = counter + initShow;
    
    //         loadMore(counter);
    //     });
    //     //when filter button clicked
    //     $("#filters").click(function() {
    //         $(this).data('clicked', true);
    
    //         loadMore(initShow);
    //     });
    //     $('.lazy').lazy();
    
    // FAQS Start    
    // var acc = document.getElementsByClassName("accordion");
    // var i;
    
    // for (i = 0; i < acc.length; i++) {
    //   acc[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var panel = this.nextElementSibling;
    //     if (panel.style.display === "block") {
    //       panel.style.display = "none";
    //     } else {
    //       panel.style.display = "block";
    //     }
    //   });
    // }

    
    // //owlcarousel
        // $('.banner-test').owlCarousel({
        //     loop:false,
        //     nav:true,
        //     dots:false,
        //     margin:10,
        //     responsiveClass:true,
        //     autoplay:true,
        //     autoplayTimeout:8000,
        //     autoplaySpeed: 800,
        //     responsive:{
        //         0:{
        //             items:1,
        //         },
        //         600:{
        //             items:1,
        //         },
        //         1000:{
        //             items:1,
        //         },
        //         360:{
        //             items:1
        //         }
        //     }
        // });
        $('.banner-test').owlCarousel({
            loop:true,
            dots:true,
            nav: false,
            margin:0,
            responsiveClass:true,
            autoplay:true,
            autoplayTimeout:8000,
            autoplaySpeed: 800,
            // lazyLoad: true,
            // navText : ["<i class='fas fa-arrow-circle-left'></i>","<i class='fas fa-arrow-circle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:1,
                },
                360:{
                    items:1
                }
            }
        });
    });
    
    // $(window).on("load",function(){
    //     $(".content").mCustomScrollbar({
    //         autoHideScrollbar:true,
    //     });
 
    
    /*FAQs*/
    