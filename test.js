document.addEventListener('DOMContentLoaded', function() {
	let item = $(".item");	
	 function mainHover() {
   		item.mouseenter( (e) => {
		  let $current = $(e.currentTarget);
		  let $overlay = $('.overlay-image');
		  let backgroundUrl = $current.data('large-img');
		  $current.toggleClass('active');
		  $overlay.css( 'background-image','url(' + backgroundUrl + ')' );
		  $overlay.toggleClass('active');
		});
}
   		item.hover( (e) => {
		  let $current_2 = $(e.currentTarget);
		  let $overlay_2 = $('.overlay-image');

		  $current_2.removeClass('active');
		  $overlay_2.removeClass('active');
		});
		mainHover();
}), false;
//==============================================
document.addEventListener('DOMContentLoaded', function() {

    let _item2 = document.querySelectorAll("a.item");

    [].forEach.call(_item2, function(_item2) {

        function mainHover() {

            _item2.addEventListener('mouseenter', (e) => {
                
           let $current = $(e.currentTarget);
           let $overlay = $('.overlay-image');
           let backgroundUrl = $current.data('large-img');
           $current.toggleClass('active');
           $overlay.css( 'background-image','url(' + backgroundUrl + ')' );
           $overlay.toggleClass('active');

         });
 }
            _item2.addEventListener('mouseleave', (e) => {
           let $current_2 = $(e.currentTarget);
           let $overlay_2 = $('.overlay-image');
 
           $current_2.removeClass('active');
           $overlay_2.removeClass('active');
         });
		 mainHover();
	});
	

}), false;