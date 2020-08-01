(function ($) {
/* Josandi start */

    $( document ).ready(function() {
    /* Single Product Page start */
        $(".woocommerce-product-gallery__image a").on("click", function(event) {
            event.preventDefault();
            
            if ($('.non-360-image').length) {
                $('.non-360-image').remove();
            }

            if ($(this).hasClass('image-360')) {
                $('.product-image-view-contaner .images').show();
                $('.product-image-view-contaner .selected-image-view').hide();
            } else {
                $('.product-image-view-contaner .images').hide();
                $('.product-image-view-contaner .selected-image-view').show();
                var productImage = $(this).attr("href");
                var tempImageHtml = $('<img class="non-360-image" id="myimage" />').attr('src', productImage);
                $( tempImageHtml ).appendTo('.product-image-column .selected-image-view');
            }
            
        });
    /* Single Product Page end */
    });

/* Josandi end */
})(jQuery);