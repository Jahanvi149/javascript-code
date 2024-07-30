'use strict';

var $ = jQuery;


// -------------------Responsive Menu--------------------

(function ($){
    jQuery(document).ready(function() {
        jQuery(".hamburger-menu").click(function(){
            jQuery(".menu-container").slideToggle(),
            jQuery("body").toggleClass("active")
        }),
        jQuery(".hamburger-menu").on("click", function() {
            jQuery(this).hasClass("active") ? jQuery(this).removeClass("active") : jQuery(this).addClass("active")
        })

        startAnimation();
        function startAnimation() {
            jQuery('.progressbar-wrap').each(function () {
                jQuery(this).find('.progress').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2000);
            });
        }

        jQuery('.tab-item').click(function(){  
            jQuery(".tab-item, .tab-content").removeClass('tab-active');
            jQuery(this).addClass('tab-active');
            jQuery(".tab-content[data-id='"+jQuery(this).attr('data-id')+"']").addClass("tab-active");
        });

        jQuery('.subscribe a').click(function() {
            jQuery('body').addClass('popup-active');
        });
        jQuery('.popup-close').click(function() {
            jQuery('body').removeClass('popup-active');
        });
    });

    jQuery('.list > list-item:not(.active) > .body').hide();
    jQuery(document).on("click",".list > list-item .heading",function() {
        if (jQuery(this).parents('list-item').hasClass("active")) {
            jQuery(this).parents('list-item').removeClass("active").find(".body").slideUp(300);
        } else {
            jQuery(".list > list-item.active .body").slideUp();
            jQuery(".list > list-item.active").removeClass("active");
            jQuery(this).parents('list-item').addClass("active").find(".body").slideDown();
        }
    });

    


})(jQuery);





    // jQuery('.list > .list-item:not(.active) > .body').hide();
	// jQuery(document).on("click",".list > .list-item .heading",function() {
	//     if (jQuery(this).parents('.list-item').hasClass("active")) {
	//       jQuery(this).parents('.list-item').removeClass("active").find(".body").slideUp();
	//     } else {
	//       jQuery(".list > .list-item.active .body").slideUp();
	//       jQuery(".list > .list-item.active").removeClass("active");
	//       jQuery(this).parents('.list-item').addClass("active").find(".body").slideDown();
	//     }
	// });

