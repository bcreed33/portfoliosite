//console log the scroll position
$(window).scroll( function() {
   console.log( $(this).scrollTop());
});




//Pre-loaded the social media images ///////////////////////////////////////////
<!--//--><![CDATA[//><!--

if (document.images) {
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();
    var img4 = new Image();
    var img5 = new Image();
    img1.src = "http://letsreedesign.com/img/newHero1.png";
    img2.src = "http://letsreedesign.com/img/svgicons/008-github-logo-ornage.svg";
    img3.src = "http://letsreedesign.com/img/twitter-logo-orange.svg";
    img4.src = "http://letsreedesign.com/img/svgicons/007-linkedin-logo-orange.svg";
    img5.src = "http://letsreedesign.com/img/smugmug-logo-orange.svg";

}

//--><!]]>



//A work around for closing the moblie (bootstrap) nav when a menu link is selected.///////
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
    $(this).collapse('hide');
}
});





//sticky Nav effect////////////////////////////////////////////////////////////
/*var navBar = $('.navbar');
var stickyNav = navBar.offset().top;
    $(window).scroll(function(){
        //var topscroll =650;
        if($(window).scrollTop() >= stickyNav){
            $(navBar).addClass("navbar-fixed-top");
            $(navBar).addClass("navbar2");
            $('.navBarLogo').addClass("slimNavBarLogo")
        }
        else{
            $(navBar).removeClass("navbar-fixed-top");
            $(navBar).removeClass("navbar2");
            $('.navBarLogo').removeClass("slimNavBarLogo")
        }
    });

*/




/*
///Nav active states////////////////////////////////////////////////////////////
//$(document).ready(function(){
    $(window).scroll(function(){
        // home nav link
        var homeActive =0;
        var homeUnactive =500;
        if($(window).scrollTop() >= homeActive && $(window).scrollTop() <= homeUnactive ){
            $('.homeLink').addClass("activeNavLink");
        }
        else {
            $('.homeLink').removeClass("activeNavLink");
        };
        //var homeUnactive =500;
        //if($(window).scrollTop() >= homeUnactive){
        //    $('.homeLink').removeClass("activeNavLink");
        //}
        var skillActive =501;
        var skillUnactive =1550;
        if($(window).scrollTop() >= skillActive && $(window).scrollTop() <= skillUnactive){
            $('.skillLink').addClass("activeNavLink");
        }
        else {
            $('.skillLink').removeClass("activeNavLink");
        };
      //  var skillUnactive =1200;
      //  if($(window).scrollTop() >= skillUnactive){
      //      $('.skillLink').removeClass("activeNavLink");
      //  };
        var portfolioActive =1551;
        var portfolioUnactive =3272;
        if($(window).scrollTop() >= portfolioActive && $(window).scrollTop() <= portfolioUnactive){
            $('.portfolioLink').addClass("activeNavLink");
        }
        else{
            $('.portfolioLink').removeClass("activeNavLink");
        };
        //var portfolioUnactive =1950;
        //if($(window).scrollTop() >= portfolioUnactive){
        //    $('.portfolioLink').removeClass("activeNavLink");
        //};


        var contactActive =3273;
        if($(window).scrollTop() >= contactActive){
            $('.contactLink').addClass("activeNavLink");
        }
        else{
            $('.contactLink').removeClass("activeNavLink");
        }
    });
//});


*/





//open portfolio peices action/////////////////////////////////////////////////
//$(document).ready(function($){
$('.cd-team').find('button').on('click', function(){
    var selected_member = $(this).attr('data-type');
    $('main').addClass('slide-out');
    $('.cd-member-bio.'+ selected_member +'').addClass('slide-in');
    $('.cd-member-bio-close').addClass('is-visible');
    $('body').addClass('overflow-hidden');
});



document.getElementsByClassName(cd-team).find('button').addEventListener("click",function(){
    console.log(document.getSelection(this).attr('data-type'));
});













    $('.cd-team').find('ul a').on('click', function(){
        var selected_member = $(this).attr('data-type');
        $('main').addClass('slide-out');
        $('.cd-member-bio.'+selected_member+'').addClass('slide-in');
        $('.cd-member-bio-close').addClass('is-visible');
   $('body').addClass('overflow-hidden');
    });

//close team-member bio/////////////////////////////////////////////////////////
    $(document).on('click', '.cd-overlay, .cd-member-bio-close', function(){
        $('main').removeClass('slide-out');
        $('.cd-member-bio').removeClass('slide-in');
        $('.cd-member-bio-close').removeClass('is-visible');
        $('body').removeClass('overflow-hidden');
    });
//});


