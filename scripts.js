document.addEventListener('DOMContentLoaded', function() {
    let _item = document.querySelectorAll("a.item");

    [].forEach.call(_item, function(_item) {

const mainHover = () => {

        _item.addEventListener('mouseenter', (e) => {
           let $current = $(e.currentTarget);
           let $overlay = $('.overlay-image');
           let backgroundUrl = $current.data('large-img');
           $current.toggleClass('active');
           $overlay.css( 'background-image','url(' + backgroundUrl + ')' );
           $overlay.toggleClass('active');
        });
 };
        	_item.addEventListener('mouseleave', (e) => {
           let $current_2 = $(e.currentTarget);
           let $overlay_2 = $('.overlay-image');
 
           $current_2.removeClass('active');
           $overlay_2.removeClass('active');
		 });
		 
		 mainHover();
	});
	

});

//Fade out after click
const mainOutro = () => {
	
	let outroStyles = `
    position:fixed;
    width:100%;
	height:100%;
	z-index:9999;
	top:0;
	left:0;
	`;
	let _item = document.querySelectorAll("a.item");

	[].forEach.call(_item, function(_item) {
	_item.addEventListener('click', function (e) {
	e.preventDefault();  

	let goTo = this.getAttribute("href"); 
	this.style = outroStyles;
	
		
    setTimeout( () => {
         window.location = goTo;
    	},2000); 
	
	document.querySelector("#hero").classList.add( "outro");
	document.querySelector("#loading-overlay").classList.add( "loader");
	let outro_Overlay =  document.querySelector(".outro .overlay-image");

	_item.addEventListener('mouseleave', () => {
		outro_Overlay.classList.add("active");
	});
	_item.addEventListener('mouseenter', () => {
		outro_Overlay.classList.add("active");
	});

});  //click event
	}); // foreach
		}; // main outro
		
mainOutro();

// document.addEventListener('DOMContentLoaded', function() {

// 	let item = $(".item");
	
// 	 function mainHover() {

//    		item.mouseenter( (e) => {

// 		  let $current = $(e.currentTarget);
// 		  let $overlay = $('.overlay-image');
// 		  let backgroundUrl = $current.data('large-img');

// 		  $current.toggleClass('active');
// 		  $overlay.css( 'background-image','url(' + backgroundUrl + ')' );
// 		  $overlay.toggleClass('active');

// 		});
// }
//    		item.hover( (e) => {
// 		  let $current_2 = $(e.currentTarget);
// 		  let $overlay_2 = $('.overlay-image');

// 		  $current_2.removeClass('active');
// 		  $overlay_2.removeClass('active');

// 		});
	
// 		mainHover();
// }), false;


//          item.hover( () => {
//             this.classList.remove('active');
//            	this.classList.add('active');
// });

//  		item.mouseleave( () => {
//    			 this.classList.remove('active');
// });

// const _meOutro = (function () {
// 	let _item = document.querySelectorAll('.item');
// 	[].forEach.call(_item, (_item) => {		
// 		_item.addEventListener('mouseleave', () => {
// 			let _outro =  document.querySelector(".outro .overlay-image");
// 			_outro.classList.add("active");
// 		});
// 	});
// });
// _meOutro();


// $(function () {

// 	$(".item").mouseleave( () => {
// 		$(".outro .overlay-image").addClass('active');
// 	});
	
// });

	// $(".back-title").css("display", "none");
	// $(".front-title").css("display", "none");
	// $(".item").find('img').css("visibility", "hidden");
	// $(".item").find('p').css("display", "none");

 














