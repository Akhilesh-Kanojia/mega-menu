function hideSubmenu() {
	$(".menu > li.has-submenu > a.submenu-show")
      .removeClass("submenu-show")
      .next(".submenu-wrapper")
      .css("display", "block")
      .fadeOut(500);
	$(".mega-menu").removeClass("submenu-open");
}

$(document).ready(function() {
  if($(window).width() <= 1024) {

    $(".menu-container .mega-menu ul > li").each(function() {
      if ($(this).find("ul").length > 0) {
        $(this).addClass("has-submenu");
      }
    });
  
  
    $(".hamburger").click(function() {
      hideSubmenu();
      $('.mega-menu-wrapper').toggleClass('open');
      $(this).toggleClass("change");
    });
    
   $('.menu > li > a').click(function(){
      var activeMenu = $(this).text();
       $('.selected-menu').text(activeMenu);
   });
  
   $('.selected-menu-heading').prepend(` <a href="#" class="go-back"><i class="fa fa-arrow-left"></i><span>Back</span></a><h3 class="selected-menu"></h3>`);
   
   $(".go-back").click(function(){
    hideSubmenu();
    $('.sub-menu-container > .menu-item > ul > li ul').css('display', 'none');
    $('.menu-container .mega-menu-wrapper .mega-menu ul>li>.submenu-wrapper> .sub-menu-container >.menu-item>ul>li>a').removeClass('open');
  });
  
    $(".menu > li.has-submenu > a").on("click", function(e) {
      $(".menu > li.has-submenu > a").removeClass("submenu-show");
      $(this).addClass("submenu-show");
      $(".mega-menu").addClass("submenu-open");
    });
  
    $(".menu .submenu-wrapper li.has-submenu > a").on("click", function(e) {
      e.preventDefault();
      var isOpened = $(this).hasClass("open");
      var $allLi = $(this).closest("ul").children("li");
  
      $allLi.children(".submenu-wrapper, ul").stop().slideUp(350);
      $allLi.children("a").removeClass("open");
      if (!isOpened) {
  
        $(this).next(".submenu-wrapper, ul").stop().slideDown(350);
        $(this).addClass("open");
      }
    });

  };


  // Gear container
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".gear-wrapper .tab_content").hide();
    $(".gear-wrapper .tab_content:first").show();

  /* if in tab mode */
    $(".gear-wrapper ul.tabs1 li").click(function() {
		
      $(".gear-wrapper .tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $(".gear-wrapper ul.tabs1 li").removeClass("active");
      $(this).addClass("active");

	  $(".gear-wrapper .accordian").removeClass("d_active");
	  $(".gear-wrapper .accordian[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".gear-wrapper .accordian").click(function() {
      
      $(".gear-wrapper .tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".gear-wrapper .accordian").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $(".gear-wrapper ul.tabs1 li").removeClass("active");
	  $(".gear-wrapper ul.tabs1 li[rel^='"+d_activeTab+"']").addClass("active");
    });


 // Designer container
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".design-container .tab_content").hide();
    $(".design-container .tab_content:first").show();

  /* if in tab mode */
    $(".design-container ul.tabs2 li").click(function() {
		
      $(".design-container .tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $(".design-container ul.tabs2 li").removeClass("active");
      $(this).addClass("active");

	  $(".design-container .accordian2").removeClass("d_active");
	  $(".design-container .accordian2[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".design-container .accordian2").click(function() {
      
      $(".design-container .tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".design-container .accordian2").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $(".design-container ul.tabs2 li").removeClass("active");
	  $(".design-container ul.tabs2 li[rel^='"+d_activeTab+"']").addClass("active");
    });
	


})

