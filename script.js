var $doc = $(document),
    			$win = $(window),
  			    $svg = $('#base').drawsvg(),
  			    $svg_pencil = $('.wrapper2>svg').drawsvg(),
  			    $svg2 = $('.wrapper3>svg').drawsvg(),
  			    $svg2_pencil = $('.wrapper5>svg').drawsvg(),
  			    $svg_move= $('.wrapper4>svg').drawsvg(),
  			   
  			    $one = $('#one'),
  			    $two = $('#two'),
  			    $three = $('#three'),
  			    $four = $('#four'),
  			    $five = $('#five'),
  			    $six = $('#six'),
  			    $seven = $('#seven'),
  			    $eight = $('#eight'),
  			    $nine = $('#nine'),
  			    $ten = $('#ten'),
  			    $twelve = $('#twelve'),
  			    $video =$('video'),
  			    $map=$('#map'),
  			    $loaderAnim = $('#js-loader'),
  			    $cover = $('.cover'),
  			    story=0;
  			    $svglen=$("#pencil").get(0).getTotalLength(),
  			    $svg2len=$(".wrapper5>svg>path").get(0).getTotalLength(),
  			    $scrollTop=0,
   			    max = $doc.height() - $win.height(),
   			    story=0,
   			    popup=0,
   			    day=0,
   			    tog=false,
   			    toggle=false;

const moonpath="M535.241 39.3278C548.958 54.4734 573.05 55.0035 573.05 55.0035C557.904 68.7214 534.505 67.5639 520.788 52.4182C507.07 37.2726 508.227 13.8741 523.373 0.15625C523.373 0.15625 521.523 24.1821 535.241 39.3278Z";
const sunpath="M590 64C590 84.4345 573.435 101 553 101C532.565 101 516 84.4345 516 64C516 43.5655 532.565 27 553 27C573.435 27 590 43.5655 590 64Z";
const sky2="M35.4997 327.501C9.00029 259.001 -3.20068 180.5 19.0011 126.001C35.4997 85.5 35.4997 71.8826 66.0012 40.5007C118.001 -13.0002 275.735 -18.9474 364 56.0016C480 154.5 573.5 97.9996 634 140C691.867 180.173 663 303.501 619.5 368.001C593.542 406.491 513.301 389.127 480 376.001C411.5 349.001 293 407 264 392C238.842 378.987 231 343 135 353.001C106.661 361.598 56.8118 382.592 35.4997 327.501Z";
const sky1="M39.4989 350.001C12.9995 281.501 -2.36263 209.18 12.999 163.502C31.9999 107.001 64.9999 74.0013 101.5 46.5013C146.5 12.5971 246 95.4986 308.5 75.4996C356 44.9986 423.5 -3.49911 488 8.50123C570.163 23.7879 580.861 50 616.861 86C652.861 122 663.425 286.506 616.861 392.501C578.862 479.001 430.163 491.627 396.862 478.501C328.362 451.501 299.362 407.501 270.362 392.501C209.999 377.501 216.499 365.501 127.499 392.501C98.8901 401.183 60.6661 404.718 39.4989 350.001Z";


//when document is ready this plays a loading animation for the specified time
   			    
$doc.ready(function(){
	$('.loader>p').animate({"opacity":"1"},1500);
	 setTimeout(function(){

	 	$cover.remove();
	 	$('.enter').animate({"opacity":"1"},1000);
		$(window).scrollTop(0);


		//setting dimension
		$('.story>.background#b1').css('transform', 'translate(20vw, 10vh)  scale('+($win.width()/2)/900+')');
		$('.story>.background#b7').css('transform', 'translate(8vw, 10vh)  scale('+($win.width()/2)/900+')');

},7000);	

//SCROLL MAGIC. defining scenes for animating on scroll
    const controller2 = new ScrollMagic.Controller();

    const scene_a = new ScrollMagic.Scene({
    	 duration:$win.height()*7,
    	 triggerElemnt:$('#story'),
    	 //offset:0,
    	triggerHook:0.9
    })
    //.addIndicators()
    .addTo(controller2);
  




//SCROLL MAGIC. defining scenes for animating on scroll
    const controller = new ScrollMagic.Controller();
    
    const scene1 = new ScrollMagic.Scene({
    	 duration:$win.height(),
    	 triggerElemnt:$one,
    	 //offset:0,
    	triggerHook:0.9
    })
    //.addIndicators()
    .addTo(controller);
    
    const scene2 = new ScrollMagic.Scene({
    	 duration:$win.height(),
    	 triggerElemnt:$two,
    	offset:$win.height(),
    	triggerHook:0.9
    })
    //.addIndicators()
    .addTo(controller);


	const scene3 = new ScrollMagic.Scene({
    	 duration:800,
    	 triggerElemnt:$three,
    	  offset:$win.height()*2,
    	 triggerHook:0
    })
    //.addIndicators()
    .addTo(controller);

    const scene4 = new ScrollMagic.Scene({
    	 duration:800,
    	 triggerElemnt:$four,
    	 offset:$win.height()*3,
    	 triggerHook:0
    	// triggerHook:2400
    })
    //.addIndicators()
    .addTo(controller);

     const scene5 = new ScrollMagic.Scene({
    	 duration:800,
    	 triggerElemnt:$five,
    	 offset:$win.height()*4,
    	 triggerHook:0
    })
    //.addIndicators()
    .addTo(controller);

    const scene6 = new ScrollMagic.Scene({
    	 duration:800,
    	 triggerElemnt:$six,
    	 offset:$win.height()*5,
    	 triggerHook:0
    })
    //.addIndicators()
    .addTo(controller);

	  const scene7 = new ScrollMagic.Scene({
	    	 duration:800,
	    	 triggerElemnt:$seven,
	    	 offset:$win.height()*6,
	    	 triggerHook:0
    })
    //.addIndicators()
    .addTo(controller);

	const scene8 = new ScrollMagic.Scene({
	    	 duration:800,
	    	 triggerElemnt:$eight,
	    	 offset:$win.height()*7,
	    	 triggerHook:0
    })
    //.addIndicators()
    .addTo(controller);

	const scene9 = new ScrollMagic.Scene({
	    	 duration:800,
	    	 triggerElemnt:$nine,
	    	 offset:$win.height()*8,
	    	 triggerHook:0
    })
    //.addIndicators()
    .addTo(controller);

	const scene10 = new ScrollMagic.Scene({
	    	 duration:800,
	    	 triggerElemnt:$ten,
	    	 offset:$win.height()*9,
	    	 triggerHook:0
    })
    //.addIndicators()
    .addTo(controller);

    const scene12 = new ScrollMagic.Scene({
	    	 duration:$win.height()*3,
	    	 triggerElemnt:$twelve,
	    	 offset:$win.height()*10.5,
	    	 triggerHook:0
    })
    .setPin("#map")
    //.addIndicators()
    .addTo(controller);

   






    var revealElements1 = $(".text");
    for (var i=0; i<revealElements1.length; i++) {
    	new ScrollMagic.Scene({
				triggerElement: revealElements1[i], // y value not modified, so we can use element as trigger as well
				offset: 50,												 // start a little later
				triggerHook: 0.8,
			})
			.setClassToggle(revealElements1[i], "visible") // add class toggle
			//.addIndicators({name: "text " + (i+1) }) // add indicators (requires plugin)
			.addTo(controller2);
	}







//creating scenes for various text elements

	var revealElements1 = $(".text");
    for (var i=0; i<revealElements1.length; i++) {
    	new ScrollMagic.Scene({
				triggerElement: revealElements1[i], // y value not modified, so we can use element as trigger as well
				offset: 50,												 // start a little later
				triggerHook: 0.8,
			})
			.setClassToggle(revealElements1[i], "visible") // add class toggle
			//.addIndicators({name: "text " + (i+1) }) // add indicators (requires plugin)
			.addTo(controller);
	}

	//for centre aligned text with class align-c
	var revealElements2 = $(".text2");
    for (var i=0; i<revealElements2.length; i++) {
    	new ScrollMagic.Scene({
				triggerElement: revealElements2[i], // y value not modified, so we can use element as trigger as well
				offset: 50,												 // start a little later
				triggerHook: 0.8,
			})
			.setClassToggle(revealElements2[i], "visible") // add class toggle
			//.addIndicators({name: "text " + (i+1) }) // add indicators (requires plugin)
			.addTo(controller);
	}


//end of creating auto scenes

   			    


//animations in scenes

		/* various breakups for svg1
		drawing 1: 0 - 0.09	  covid
	    drawing 2: 0.09 - 0.22	  locked
	    drawing 3: 0.22 - 0.31	  services
	    drawing 4: 0.31 - 0.44    tools
	    drawing 5: 0.44 - 0.60    go home
	    drawing 6: 0.60 - 0.81   map of india

	    drawing 7: 0-0.12   		#2
	    drawing 8: 0.12-0.21 	timeline starts at 0.15
	    drawing 9: 0.21- 1   	train
	    */

	    //Formula	
	    	/*0.5----1
									(x-0.5)/(1-0.5)=(y-0.22)/(0.31-0.22)
									(x-0.5)*(0.31-0.22)/(1-0.5)+0.22=y
			0.22----0.31
			*/

	    
		//variables for assigning position of svgs
	    let accelamount=0.1,
	    pos =0,           //position for first svg
	    pos_pencil=0,    //position for darwing svg
	    pos2=0,
	    pos_mov=0, 		  //position for second svg
	    delay=0,
	    map_opacity=0
	    viz_toggle=0;
	    delay2=0,
	    delay3=0,
	    start=0;

	    scene1.on("progress", e=>{
	        			
		    if(e.progress>=0.3)
			{
				pos=(e.progress-0.3)*0.115/0.7+0.085; 
			}
			else if(e.progress>=0.1 && e.progress<0.3){
				pos=(e.progress-0.1)*0.02/0.2+0.065; 
				
			}
			else{
				pos=0.065;
			}
		    								
			//console.log(pos);

	    })

	    scene2.on("progress", e=>{
	  
			if(e.progress>=0.5)
			{
				pos=(e.progress-0.5)*0.08/0.5+0.22; 
			}
			else{
				pos=(e.progress)*0.02/0.5+0.20; 
			}
		    	//console.log(pos);
		    	
	    })

	    scene3.on("progress", e=>{               
	 
			if(e.progress>=0.5)
			{
				pos=(e.progress-0.5)*0.09/0.5+0.32; 
			}
			else{
				pos=(e.progress)*0.02/0.5+0.30;
			}
		    	//console.log(pos);
		    	
	    })

	    scene4.on("progress", e=>{
	    	
	    	//$("#pencil").css({'stroke-dasharray':$svglen*0.007+","+$svglen*0.99});
	    
			if(e.progress>=0.5)
			{
				pos=(e.progress-0.5)*0.13/0.5+0.46; 
			}
			else{
				pos=(e.progress)*0.05/0.5+0.41;
			}
		    	
		    	//console.log(pos);
	    	
	    })


	    scene5.on("progress", e=>{
	    	
	    	
			if(e.progress>=0.5)
			{
				pos=(e.progress-0.5)*0.19/0.5+0.62; 
			}
			else{
				pos=(e.progress)*0.03/0.5+0.59;
			}
		    	//console.log(pos);
		    	
	    	
	    })


	    scene6.on("progress", e=>{
	    	
	    	if(e.progress>=0.5)
			{
				pos2=(e.progress-0.5)*0.12/0.5+0; 

			}
			else{
				pos2=0;
				
			}

	   			pos_mov=(e.progress)/4;
	    	
	    })

	    scene6.on("enter", function (event) {
		   
		    $('.wrapper4').css('display','block');
		});
		

	    scene7.on("progress", e=>{
	    	
	    	if(e.progress>=0.5)
			{
				pos2=(e.progress-0.5)*0.06/0.5+0.14; 
			}
			else{
				pos2=(e.progress)*0.02/0.5+0.12;
			}

	   
	    	
	    })
	    scene8.on("progress", e=>{
	    	
	    	if(e.progress>=0.5)
			{
				pos2=(e.progress-0.5)*0.4/0.5+0.23; 
			}
			else{
				pos2=(e.progress)*0.03/0.5+0.2;
			}

	   
	    	
	    })

	    scene9.on("progress", e=>{
	    	
	    	if(e.progress>=0.3)
			{
				pos2=1; 
			}
			else{
				pos2=(e.progress)*0.38/0.3+0.62;
			}

	   
	    	
	    })

	    

	    //Formula	
	    	/*0.5----1
									(x-0.5)/(1-0.5)=(y-0.22)/(0.31-0.22)
									(x-0.5)*(0.31-0.22)/(1-0.5)+0.22=y
			0.22----0.31
			*/


	    scene12.on("progress", e=>{
	    	var a=[0,0.33,0.38,0.48,0.6,0.7,0.8,1];
	    	
	    	
	    	if(e.progress>=a[6] && e.progress<a[7])
	    	{
	    		map_opacity=0;
	    		if(viz_toggle!=5)
	    		{
	    			viz_toggle=5;
	    			viz1(viz_toggle);
	    		
	    		}
	    	}
	    	else if(e.progress>=a[5] && e.progress<a[6])
	    	{
	    		map_opacity=0;
	    		if(viz_toggle!=4)
	    		{
	    			viz_toggle=4;
	    			viz1(viz_toggle);
	    		
	    		}
	    	}
	    	else if(e.progress>=a[4] && e.progress<a[5])
	    	{
	    		map_opacity=0;
	    		if(viz_toggle!=3)
	    		{
	    			viz_toggle=3;
	    			viz1(viz_toggle);
	    		
	    		}
	    	}
	    	else if(e.progress>=a[3] && e.progress<a[4])
	    	{
	    		map_opacity=0;
	    		if(viz_toggle!=2)
	    		{
	    			viz_toggle=2;
	    			viz1(viz_toggle);
	    		
	    		}

	    	}
	    	else if(e.progress>=a[2] && e.progress<a[3])
	    	{
	    		//states go to their positions
	    		$map.css('fill','rgba(0,0,0,0)');
	    		if(viz_toggle!=1)
	    		{
	    			viz_toggle=1;
	    			viz1(viz_toggle);
	    		}

				var rotate = ((e.progress-a[2])*(45-0)/(a[3]-a[2])+0);

	    		var lower_mh_left=0,
	    		higher_mh_left=1;

	    		var lower_mh_top=0,
	    		higher_mh_top=39;

	    		var mh_left=0,
	    		mh_top=0;

	    		mh_left=((e.progress-a[2])*(higher_mh_left-lower_mh_left)/(a[3]-a[2])+lower_mh_left);
	    		mh_top=((e.progress-a[2])*(higher_mh_top-lower_mh_top)/(a[3]-a[2])+lower_mh_top);

	    		$('#IN-MH').css('transform','translate('+mh_left+'vw,'+mh_top+'vh) rotate3d(1, 0, 0,'+rotate+'deg ) ');

	    		var lower_up_left=0,
	    		higher_up_left=46;

	    		var lower_up_top=0,
	    		higher_up_top=58;

	    		var up_left=0,
	    		up_top=0;

	    		up_left=((e.progress-a[2])*(higher_up_left-lower_up_left)/(a[3]-a[2])+lower_up_left);
	    		up_top=((e.progress-a[2])*(higher_up_top-lower_up_top)/(a[3]-a[2])+lower_up_top);

	    		$('#IN-UP').css('transform','translate('+up_left+'vw,'+up_top+'vh) rotate3d(1, 0, 0,'+rotate+'deg )' );

	    		var lower_gj_left=0,
	    		higher_gj_left=26;

	    		var lower_gj_top=0,
	    		higher_gj_top=45;

	    		var gj_left=0,
	    		gj_top=0;

	    		gj_left=((e.progress-a[2])*(higher_gj_left-lower_gj_left)/(a[3]-a[2])+lower_gj_left);
	    		gj_top=((e.progress-a[2])*(higher_gj_top-lower_gj_top)/(a[3]-a[2])+lower_gj_top);

	    		$('#IN-GJ').css('transform','translate('+gj_left+'vw,'+gj_top+'vh)  rotate3d(1, 0, 0,'+rotate+'deg ) ');

	    		var lower_pb_left=0,
	    		higher_pb_left=36;

	    		var lower_pb_top=0,
	    		higher_pb_top=63;

	    		var pb_left=0,
	    		pb_top=0;

	    		pb_left=((e.progress-a[2])*(higher_pb_left-lower_pb_left)/(a[3]-a[2])+lower_pb_left);
	    		pb_top=((e.progress-a[2])*(higher_pb_top-lower_pb_top)/(a[3]-a[2])+lower_pb_top);

	    		$('#IN-PB').css('transform','translate('+pb_left+'vw,'+pb_top+'vh)  rotate3d(1, 0, 0,'+rotate+'deg )');

	    		var lower_dl_left=0,
	    		higher_dl_left=59;

	    		var lower_dl_top=0,
	    		higher_dl_top=47;

	    		var dl_left=0,
	    		dl_top=0,
	    		dl_scale=0;

	    		dl_left=((e.progress-a[2])*(higher_dl_left-lower_dl_left)/(a[3]-a[2])+lower_dl_left);
	    		dl_top=((e.progress-a[2])*(higher_dl_top-lower_dl_top)/(a[3]-a[2])+lower_dl_top);
	    		dl_scale=((e.progress-a[2])*(1.5-1)/(a[3]-a[2])+1);
	    		$('#IN-DL').css('transform','translate('+dl_left+'vw,'+dl_top+'vh)  rotate3d(1, 0, 0,'+rotate+'deg) scale('+dl_scale+' )');



	    		
	    		

	    	}
	    	else if(e.progress>=a[1] && e.progress<a[2]){
	    		var lower=0;
	    		var higher=1;
	    		//map is disappearing leaving the important states
	    		map_opacity=1-((e.progress-a[1])*(higher-lower)/(a[2]-a[1])+lower);  //subtracted by 1 to get a value form 1 -0;
	    		$map.css({'fill':'rgba(255,255,255,'+map_opacity+')'});
	    		
	    		if(viz_toggle!=0)
	    		{
	    			viz_toggle=0;
	    			viz1(viz_toggle);
	    		
	    		}
	    	}
	    	else {
	    		$map.css({'fill':'#fff', 'opacity':'1'});
	    		$('#IN-DL').css('transform','translate(0,0)  rotate3d(1, 0, 0, 0deg) scale(1)');
	    		$('#IN-PB').css('transform','translate(0,0)  rotate3d(1, 0, 0, 0deg) scale(1)');
	    		$('#IN-MH').css('transform','translate(0,0)  rotate3d(1, 0, 0, 0deg) scale(1)');
	    		$('#IN-UP').css('transform','translate(0,0)  rotate3d(1, 0, 0, 0deg) scale(1)');
	    		$('#IN-GJ').css('transform','translate(0,0)  rotate3d(1, 0, 0, 0deg) scale(1)');
	    		if(viz_toggle!=0)
	    		{
	    			viz_toggle=0;
	    			viz1(viz_toggle);
	    		
	    		}

	    	}

	    	
	    	
	    })

	    
	/*
	    
   			 scene_a.on("progress", e=>{
		    	var a=[0,0.05,0.38,0.58,0.7,0.8,0.99,1];
		    	
		    	if ($('.story').hasClass('up'))  ///if story is active
	    		{ 
			    	//console.log(e.progress);
			    	if(e.progress>=a[0] && e.progress<a[1]){
			    		
			    		$('#overlay1').fadeIn('slow');
			    		$('.story>.background').removeClass('auto');
			    		$('.story>.background').css('transform', 'translate(20vw, 10vh)  scale('+($win.width()/2)/900+')');
			    		
			    	} else if (e.progress>=a[1] && e.progress<a[2]){
			    		
			    		if(story!=1)
			    		{
			    			$('#overlay1').fadeOut('slow');
			    		
			    			$('.story>.background').css('transform', 'translate(8vw, 10vh)  scale('+($win.width()/2)/900+')');

			    			story=1;
			    		}
			    	}
			    	else if (e.progress>=a[2] && e.progress<a[3]){
			    		
			    		if(story!=2)
			    		{
				    		$('.story>.background').addClass('auto');
				    		changeDay();
				    		$('.story>.background').removeClass('death');
				    		story=2;
			    		}
			    	}
			    	else if (e.progress>=a[3] && e.progress<a[4]){
			    		var topofpopup=givepos($('.story>.background'));
			    		
			    		if(story!=3)
			    		{
				    		$('.story>.truck').addClass('hit');
				    		setTimeout(function(){
					    		if($('.clk').length==0)
					    		{
						    		$('body').append("<div class='clk'></div>");
						    		$('.clk').offset({left:topofpopup[0], top:(topofpopup[1])+$('.background').height()});
						    		$('.clk').addClass('black');
						    		$('.clk').addClass('do');
						    		$('.story').addClass('black');
						    	}
						    },300);
				    		setTimeout(function(){
						    	
							    $('.story>.truck').removeClass('hit');
							    $('.story>.background').removeClass('auto');
							    
						    	
						    },800);
						   
						    setTimeout(function(){
						    	$('.clk').fadeOut('slow');
						    	 //$('.clk').removeClass('do');
						    	$('.story>.background').addClass('death');	
						    },2000);

						    story=3;
					   
					    }
						


			    		
			    	}
			    	else if (e.progress>=a[4] && e.progress<a[5]){
			    		$('#overlay1').fadeOut('slow');

			    		$('.story>.background').removeClass('death');
			    		$('.story>.background').addClass('dialog');
			    		$('.story>.background').css('transform', 'translate(20vw, 10vh)  scale('+($win.width()/2)/900+')');
			    	}
			    	else if (e.progress>=a[5] && e.progress<a[6]){
			    		$('#overlay1').fadeOut('slow');
			    		$('.story').addClass('z-up');
			    		$('.story').addClass('shrink');
			    		$('.overview').removeClass('hide');
			    	}

		    	}


	   	 	});
		
		*/


//scrolling action in story

				scene_a.on("progress", e=>{
		    		var a=[0,0.05,0.16,0.23,0.32,0.44,0.55,0.6,0.63,0.67,0.82,0.84,0.88,0.90,1];
		    		// Family introduction  
	    			// moving family to center  0.05
	    			// works in factory  0.16
	    			// buys thela 0.23
	    			// buys tuk tuk  0.32 - 0.41
	    			// lockdown introduction  0.41-0.55
	    			// journey map  0.55
	    			// 	tuktuk ride 0.6-0.63
	    			// day and night 0.63-0.67 //remove backgroud post this
	    			// truck accident 0.82
	    			// fade scene empty chair 0.84 0.88   
	    			// hug and dialogs 
		    		if ($('.story').hasClass('up'))  ///if story is active
	    			{ 
	    				if(e.progress>=a[0] && e.progress<a[1]){

	    					$('.story>.background#b1').css('transform', 'translate(20vw, 10vh)  scale('+($win.width()/2)/900+')');
	    				}
	    				else if(e.progress>=a[1] && e.progress<a[2]){

	    					//move family to center
	    					$('.story>.background#b1').css('transform', 'translate(8vw, 10vh)  scale('+($win.width()/2)/900+')');
	    					$('.background#b2').addClass('hide');
	    					$('.background#b1').removeClass('hide');
	    				}

	    				else if(e.progress>=a[2] && e.progress<a[3]){

	    					//show working in factory animation
	    					$('.background#b1').addClass('hide');
	    					$('.background#b2').removeClass('hide');
	    					$('.background#b3').addClass('hide');
	    				}

	    				else if(e.progress>=a[3] && e.progress<a[4]){

	    					//show thela background
	    					$('.background#b2').addClass('hide');
	    					$('.background#b3').removeClass('hide');
	    				}

	    				else if(e.progress>=a[4] && e.progress<a[5]){
	    					$('.background#b3').removeClass('hide');
	    					$('.background#b4').removeClass('hide');
	    					$('.background#b3').css('left','0');
	    					//buys tuk tuk
	    					//introduce back shot and pan between thela and auto on scroll
	    					var b3backleft=(e.progress-a[4])*(-750)/(a[5]-a[4]);
	    					var b4left=18-(e.progress-a[4])*(18)/(a[5]-a[4])+(-5);
	    					
	    					$('.background#b3').css({'background-position':b3backleft+'px 0px'});
	    					$('.background#b4').css({'left':b4left+'vw'});
	    					$('.background#b9').addClass('hide');
	    					
	    				}

	    				else if(e.progress>=a[5] && e.progress<a[6]){

	    					//some graphic for lockdown introduction

	    					$('.background#b4').addClass('hide');
	    					$('.background#b3').addClass('hide');
	    					$('.background#b5').addClass('hide');

	    					$('.background#b9').removeClass('hide');
	    					var diff=a[6]-a[5]

	    					if(e.progress>=a[5]+diff/4 && e.progress<a[5]+diff/2){
	    						$('.background#b9').css('background-position','-900px 0');
	    					}
	    					else if (e.progress>=a[5]+diff/2 && e.progress<a[5]+3*diff/4)
	    					{
	    						$('.background#b9').css('background-position','-1800px 0');
	    					}
	    					else if (e.progress>=a[5]+3*diff/4)
	    					{
	    						$('.background#b9').css('background-position','-2700px 0');
	    					}
	    					else{
	    						$('.background#b9').css('background-position','0 0');
	    					}




	    				}

	    				else if(e.progress>=a[6] && e.progress<a[7]){

	    					//show journey map introduction
	    					$('.background#b5').removeClass('hide');
	    					$('.background#b6').addClass('hide');
	    					$('.blob1').addClass('hide');
	    					$('.background#b9').addClass('hide');
	    				}
	    				else if(e.progress>=a[7] && e.progress<a[8]){

	    					//show them riding
	    					$('.background#b5').addClass('hide');
	    					$('.background#b6').removeClass('hide');
	    					$('.blob1').removeClass('hide');
	    					day=0;
	    				}
	    				else if(e.progress>=a[8] && e.progress<a[9]){

	    					//show day and night
	    					
	    					changeDay();

	    				}
	    				else if(e.progress>=a[9] && e.progress<a[10]){
	    					
	    					day=0;
	    					//show just the auto
	    					$('.story>.back').removeClass('white');
	    					
	    				}
	    				else if(e.progress>=a[10] && e.progress<a[11]){
	    					
	    					var topofpopup=givepos($('.background#b6'));
	    					$('.blob1').addClass('hide');
	    					if($('.clk').length==0)
	    					{
	    						$('body').append("<div class='clk black'></div>");
	    						$('.clk').offset({left:topofpopup[0], top:(topofpopup[1])+$('.background#b6').height()});
	    					}
	    					
	    					//accident();
	    					$('.truck').addClass('hit');
	    					setTimeout(function(){
	    						$('.clk').addClass('do');
	    					},200)
	    					
	    					setTimeout(function(){
	    						$('.truck').fadeOut('fast');
	    						$('.story').css('background','black');
	    						$('.story-txt').addClass('white');
	    						$('.background#b6').addClass('hide');
	    						$('.story>.back').addClass('white');
	    					},700);

	    					setTimeout(function(){
	    						$('.clk').fadeOut('slow');
	    					},1000);
	    					


	    					//the accident animation with blank black screen
	    					$('.background#b7').addClass('hide');
	    				}
	    				else if(e.progress>=a[11] && e.progress<a[12]){
							$('.background#b1').removeClass('hide');
							var opacity=(e.progress-a[11])*(1)/(a[12]-a[11]);
	    					//fade empty chair animation
	    					
	    					$('.background#b1').css('opacity',1-opacity);
	    					$('.background#b7').css('opacity',opacity*3);


	    					$('.background#b8').addClass('hide');
	    					day=0;
	    				}
	    				else if(e.progress>=a[12] && e.progress<a[13]){
	    					
	    					
	    				}
	    				else if(e.progress>=a[13] && e.progress<a[14]){
	    					$('.background#b7').css('opacity',0);
	    					$('.background#b8').removeClass('hide');
	    					//fade hug animation and show all the other texts as dialogs
	    				}











	    			


	    			}
	    			
	    		});



//Scroll


				$win.on('scroll', function(e) {
	  				var p = $win.scrollTop() / max;
	  				//console.log(p);
	  				//$svg.drawsvg('progress',p);
	  				$scrollTop=$win.scrollTop();

	  				console.log($scrollTop);

	  				if($scrollTop>10)
			   		{
			   			$('#section10').css('opacity','0');
			   		}
			   		
			   		  
			   		if($scrollTop>11550)
			   		{
			   			$(".intro").fadeOut('fast');
			   			menuSwitch("3");
			   		}



			   		if($scrollTop>givepos($('#pre-end'))[1] && $scrollTop<givepos($('#end'))[1]){
			   			$('.background#b8').css('background',"url('rajan.jpg') no-repeat center");
			   		}else if ($scrollTop>givepos($('#end'))[1])
			   		{	

			   		}


	  				setInterval(() => {
	   			    		
	   			    		pos_pencil=pos+0.004*start;
	   			    		pos_pencil2=pos2+0.004*start;

	   			    		delay +=(pos- delay)*accelamount;
	   			    		delay2 +=(pos2- delay2)*accelamount;
	   			    		delay3 +=(pos_mov- delay3)*accelamount;
	   			    		$svg.drawsvg('progress',delay);
	   			    		$svg2.drawsvg('progress',delay2);
	   			    		$svg_move.drawsvg('progress',delay3);
	   			    		
	   			    		
	   			    		$svg_pencil.drawsvg('progress',pos_pencil);

	   			    		$svg2_pencil.drawsvg('progress',pos_pencil2);
	   
	   			    }, 30);

			   		
  				
				});


/*click events*/

				//onclick of enter button
				$('.enter').on('click',function(){
					$loaderAnim.animate({"opacity":"0"},400);
					//$(document).scrollTop(0);
					setTimeout(function(){

						 $loaderAnim.remove();
					},4000);
					
					$video.get(0).play();   //playvideo on button click

					
					//$svg.drawsvg('progress',0);
				//	$svg_pencil.drawsvg('progress',0);
					pos=0;
					delay=0;
					delay2=0;
					delay3=0;

					
				});



				$('.menu>.item').on('click',function(){
					if($(this).hasClass('active'))
					{

					} else {
						$('.menu>.item').removeClass('active');
						$(this).addClass('active');

					}

					switch($(this).index()){
						case 0: $('.intro').fadeIn('slow');
								$win.scrollTop(0); break;
						case 1: $('.intro').fadeIn('fast');
								$win.scrollTop('7600'); 
								$('#map').fadeIn('fast',function(){});
								$('#map').css('fill','#fff');
								$('#text1').addClass('hide');
								$('#text2').addClass('hide');
								$('#text3').addClass('hide');
								$('#text4').addClass('hide');

								break;
						case 2: /*open overview*/break;
						case 3: $('.about').fadeIn('slow'); break;
						default: break
					}

				});



				$('.skip').on('click',function(){
					$('html, body').animate(
						{scrollTop:11200},
						{duration: 1500,specialEasing: { scrollTop: "swing"},complete: function() 
							{
						      $('.intro').fadeOut('fast');
						    }
						},
					);
					$video.fadeOut('fast');
					
				});


				$('.switch-z').click(function(){
					if($('.switch-z>input:checked').length>0){
						$('input.slider').prop('disabled',false);
						$('input.slider').removeClass('disable');
					}
					else{
						$('input.slider').prop('disabled',true);
						$('input.slider').addClass('disable');
					}
				});



				$('.switch-l').click(function(){
					if($('.switch-l>input:checked').length>0){
						$('.drawer').removeClass('hide');
					}
					else{
						$('.drawer').addClass('hide');
					}


				});


				$(".story>.back").click(function(){
					if($('.story').hasClass('up'))
					{	
						resetStory();
						$('.story').removeClass('up');
						$('.overview').removeClass('hide');
						
					}
				});
				$(".about>.back").click(function(){
					if($('.about').length>0)
					{
						$('.about').fadeOut('slow');
					}
					menuSwitch(3);

				});


//Hover events



	//hover map
				
			   			$( "#map>path" ).hover(
						  function() {
						  	if($win.scrollTop()>$twelve.offset().top && $win.scrollTop()<$twelve.offset().top+$twelve.height()*0.33)
			   				{  var a=this.id;
							     $(this).css({"stroke":"yellow","stroke-width":"3"});
							    $twelve.append("<div class='temp'></div>");
							    drawMapData(a);
							    
							    var topofpopup=givepos($('#'+a))[1]-180;
							   
							   console.log(topofpopup+" , "+$scrollTop);

							    $('#twelve>.temp').offset({left:givepos($('#'+a))[0], top:(topofpopup)<$scrollTop? $scrollTop: topofpopup});
							    
						    }
						  }, function() {
						    $( this ).css( {"stroke":"","stroke-width":""});
						    
						    $twelve.find(".temp").last().remove();
						  }
						);



						/*$("#timeline>path").hover(
							function(){
								
								var a=this.id;
								
								$(this).css({"stroke":"white","stroke-width":"3"});
								drawDeathData(a);
								var topofpopup=givepos($('#scale>#'+a))[1]-$('#timelline>.temp').height()-50;
								console.log(topofpopup);
								$('#timelline>.temp').offset({left:givepos($('#timelline>#'+a))[0], top:(topofpopup)<$scrollTop? $scrollTop: topofpopup});
							}, function(){
								$(this).css({"stroke":"","stroke-width":""});
								$(".edge_viz").find(".temp").last().remove();

							});
			   	
						*/


						//hover on names

						$("#viz>g").hover(function(){
							var id=this.id.split("_");
							
							switch (id[1])
							{
								case "name": highlightState(id[0],1);  break;
								case "in": highlightLines(id[0],'in',1);  break;
								case "out":  highlightLines(id[0],'out',1);  break;
								//case "weeks": highlightWeek(id[0],1);  break;
								default : ;  break;


							}


						},function(){
							var id=this.id.split("_");
							
							switch(id[1])
							{	
								case "name": highlightState(id[0],0); break;
								case "in": highlightLines(id[0],'in',0);  break;
								case "out": highlightLines(id[0],'out',0); break;
								//case "weeks": highlightWeek(id[0],0);  break;
								default:  break;

							}


						});





						//hover on death and clashes and weeks

						$("#viz>g>path").hover(function(){
							var id=$(this).parent()[0].id.split("_");
							
							$(".edge_viz").find(".temp").last().remove();
							if(id[1]=="deaths" || id[1]=="clashes")
							{	//$(this).parent()[0].appendChild(this);
								$(this).css({"stroke":"white","stroke-width":"2px"});
								var finaldata=fillData(this.id);
								$('.edge_viz').append("<div class='temp'><p>"+finaldata[0]+"</p><a href='"+finaldata[1]+"' class='cusbut' target='_blank'>Read More</a><button>View Story</button> </div>");
								
								
								var topofpopup=givepos($(this))[1]-$('.edge_viz>.temp').height()-30;
								$('.edge_viz>.temp').offset({left:givepos($(this))[0], top:(topofpopup)<$scrollTop? $scrollTop: topofpopup});
							}
							else if (id[1]=="weeks"){
								var cid=this.id
								highlightWeek(cid,1);
							}

						}, function(){

							var id=$(this).parent()[0].id.split("_");
							if(id[1]=="deaths" || id[1]=="clashes")
							{	
								$(this).css({"stroke":"","stroke-width":""});
								
								setTimeout(function(){
									if(popup==0)
									{	
										$(".edge_viz").find(".temp").last().remove();
									}
								},500);
								}
							else if (id[1]=="weeks"){
								var cid=this.id
								highlightWeek(cid,0);
							}
							
							
							//$(this).parent().find('path').last().remove();

						});



						$(document).on('mouseover','.edge_viz>.temp', function(){ 
							popup=1; 
					
						});

						$(document).on('mouseleave','.edge_viz>.temp', function(){
							$(".edge_viz").find(".temp").last().remove(); 
							popup=0; 
						});


						$("#viz>g>path").click(function(){
							var id=$(this).parent()[0].id.split("_");
							if(id[1]=="deaths")
							{	var topofpopup=givepos($(this));
								transit(topofpopup, 'white');
								/*$('body').append("<div class='clk'></div>");
								$('.clk').offset({left:topofpopup[0], top:(topofpopup)<$scrollTop? $scrollTop: topofpopup});
								$('.clk').addClass('do');*/
								setTimeout(function(){ 
									$('.overview').addClass('hide');
									$('.clk').addClass('hide');
									$('.clk').removeClass('do');
									$('.loading').addClass('hide');
									
									$win.scrollTop(0);
									$('.intro').addClass('hide');
									$('.story').addClass('up');

									$('.clk').remove();
								 }, 1000);
								//
								
								
								//$('body').find('.story').addClass('up');
							}
							
						});








						$('.edge_viz').mousemove(function(event){
							
							if($('.switch-z>input:checked').length>0){
								

																	
									//console.log(event.pageX+", "+event.pageY);
									var x=givepos($('.edge_viz'));
									var h=$(this).height();
									var w=$(this).width();
									var movx=0;

									var mousedisx=(event.pageX-x[0]);
									var mousedisy=(event.pageY-x[1]);

									movx=(40*mousedisx/w)-22;
									movy=(40*mousedisy/w)-20;
									
									
									if(mousedisx<w/2 && mousedisy<w/2)
									{
										$('.edge_viz>svg').css({'transform':'translate('+Math.abs(movx)+'%,'+(movy)*(-1)+'%) scale(1.5)'});
									}
									else if(mousedisx>w/2 && mousedisy<w/2)
									{
										$('.edge_viz>svg').css({'transform':'translate(-'+movx+'%,'+(movy)*(-1)+'%) scale(1.5)'});
									}
									else if(mousedisx<w/2 && mousedisy>w/2){
										
										$('.edge_viz>svg').css({'transform':'translate('+Math.abs(movx)+'%, -'+movy+'%) scale(1.5)'});
									
									}
									else{
										
										$('.edge_viz>svg').css({'transform':'translate(-'+movx+'%, -'+movy+'%) scale(1.5)'});
									}
							
							}
							
							$(".flo_txt").offset({left:givepos($('svg'))[0]+$('svg').width()*0.42,top:givepos($('svg'))[1]+$('svg').height()*0.62});
							$(".flo_txt").css({'height':$('svg').width()*0.15,'width':$('svg').width()*0.16});

						});
						$('.edge_viz').mouseleave(function(event){
							$('.edge_viz>svg').css({'transform':'scale(1)'});
						});




//video events
				
				//when video approaches end, the text and the grpahic appears
				$video.on('playing',function(){
					setTimeout(function(){ 
						$('#one>p').animate({"opacity":"1"},100);
						$video.animate({"opacity":"0.2"},4000,"swing");
					 }, 23000);

				})



				
			/*	//without video play
					//$svg.drawsvg('progress',0.065);
					$("#pencil").css({'stroke-dasharray':$svglen*0.007+","+$svglen*0.98});
					$(".wrapper5>svg>path").css({'stroke-dasharray':$svg2len*0.01+","+$svg2len*0.98});
					$('body').css({"overflow-y":"scroll"});
					$('#one>p').animate({"opacity":"1"},100);
					$('#section10').css('opacity','1');
					start=1;
			*/	
				//video play
				$video.on('ended',function(){
					$video.animate({"opacity":"0s"},23000,"swing");
					$('#one>p').animate({"opacity":"1"},100);
       			   		//delay +=(0.09- delay)*accelamount;
   			    		//$svg.drawsvg('progress',delay);
   			 		//$svg.drawsvg('progress',0.065);
   			 		$("#pencil").css({'stroke-dasharray':$svglen*0.007+","+$svglen*0.98});
					$(".wrapper5>svg>path").css({'stroke-dasharray':$svg2len*0.01+","+$svg2len*0.98});
					//$svg_pencil.drawsvg('progress',0);
       			 	$('#section10').css('opacity','1');
   			    	//$("#pencil").css({'stroke-dasharray':"10,"+$svglen});
   			     	$('body').css({"overflow-y":"scroll"});
   			     	start=1;
    			});
    			
    			

   			 });


//other function

	function viz1(a){
		if (a==1)
		{		
			
			
			//if($("#map").is(":hidden")){
                $('#map').fadeIn('fast',function(){});
				$('.circle').fadeOut('fast');
				$('.cone').fadeOut('fast');
				$('#text-4').removeClass('hide');
				$('#text-1').addClass('hide');
				$('#text-2').addClass('hide');
				$('#text-3').addClass('hide');
            //} 
			//draw viz
			
			
			/*
			   if($('.mh').length==0 && a==1)
				{	
					$twelve.append("<div class='cone mh'></div>");
					$twelve.append("<div class='circle mh'></div>");
					$('.mh').offset({left:givepos($('#IN-MH'))[0]+$('#IN-MH')[0].getBBox().width/2});
				}
				if($('.up').length==0 && a==1)
				{	
					$twelve.append("<div class='cone up'></div>");
					$twelve.append("<div class='circle up'></div>");
					$('.up').offset({left:givepos($('#IN-UP'))[0]+$('#IN-UP')[0].getBBox().width/2});
				}
				if($('.gj').length==0 && a==1)
				{	
					$twelve.append("<div class='cone gj'></div>");
					$twelve.append("<div class='circle gj'></div>");
					$('.gj').offset({left:givepos($('#IN-GJ'))[0]+$('#IN-GJ')[0].getBBox().width/2});
				}
				if($('.dl').length==0 && a==1)
				{	
					$twelve.append("<div class='cone dl'></div>");
					$twelve.append("<div class='circle dl'></div>");
					$('.dl').offset({left:(givepos($('#IN-DL'))[0]+$('#IN-DL')[0].getBBox().width/2)});
				}
				if($('.pb').length==0 && a==1)
				{	
					$twelve.append("<div class='cone pb'></div>");
					$twelve.append("<div class='circle pb'></div>");
					$('.pb').offset({left:(givepos($('#IN-PB'))[0]+$('#IN-PB')[0].getBBox().width/2)});
				}
				$('.cone').show('slow');
				$('.circle').show('slow');
				$twelve.find(".circle1").remove();
			*/


		
				
			 	
			/*
			setTimeout(function(){ 
				if($('.cone.gj').length==0)
				{	
					$twelve.append("<div class='cone gj'></div>");
					$twelve.append("<div class='circle gj'></div>");
					$('.gj').offset({left:givepos($('#IN-GJ'))[0]});
				}
				if($('.cone.up').length==0)
				{	
					$twelve.append("<div class='cone up'></div>");
					$twelve.append("<div class='circle up'></div>");
					$('.up').offset({left:givepos($('#IN-UP'))[0]});
				}
				if($('.cone.or').length==0)
				{	
					$twelve.append("<div class='cone or'></div>");
					$twelve.append("<div class='circle or'></div>");
					$('.or').offset({left:givepos($('#IN-OR'))[0]});
				}
				if($('.br').length==0)
				{	
					$twelve.append("<div class='cone br'></div>");
					$twelve.append("<div class='circle br'></div>");
					$('.br').offset({left:givepos($('#IN-BR'))[0]});
				}
				if($('.mh').length==0)
				{	
					$twelve.append("<div class='cone mh'></div>");
					$twelve.append("<div class='circle mh'></div>");
					$('.mh').offset({left:givepos($('#IN-MH'))[0]});
				}
			},3000);
			*/
		}
		else if(a==2)
		{			
					$('.fixed-top#text-1').removeClass('hide');
					$('#text-4').addClass('hide');
					$('.fixed-top#text-2').addClass('hide');
					
					$('#IN-MH').css('transform','translate(1vw, 39vh) rotate3d(1, 0, 0, 45deg)');
					$('#IN-GJ').css('transform','translate(26vw, 45vh) rotate3d(1, 0, 0, 45deg)');
					$('#IN-PB').css('transform','translate(36vw, 63vh) rotate3d(1, 0, 0, 45deg)');
					$('#IN-UP').css('transform','translate(46vw, 58vh) rotate3d(1, 0, 0, 45deg)');
					$('#IN-DL').css('transform',' translate(59vw, 47vh) rotate3d(1, 0, 0, 45deg) scale(1.5)');
				
				   
					if($('.mh').length==0)
					{	$twelve.append("<div class='cone mh'></div>");
						$twelve.append("<div class='circle mh show'></div>");
						
						$('.mh').offset({left:givepos($('#IN-MH'))[0]+$('#IN-MH')[0].getBBox().width/2});
					}
					if($('.up').length==0 )
					{	$twelve.append("<div class='cone up'></div>");
						$twelve.append("<div class='circle up show'></div>");
						
						$('.up').offset({left:givepos($('#IN-UP'))[0]+$('#IN-UP')[0].getBBox().width/2});
					}
					if($('.gj').length==0 )
					{	$twelve.append("<div class='cone gj'></div>");
						$twelve.append("<div class='circle gj show'></div>");
						
						$('.gj').offset({left:givepos($('#IN-GJ'))[0]+$('#IN-GJ')[0].getBBox().width/2});
					}
					if($('.dl').length==0 )
					{	$twelve.append("<div class='cone dl'></div>");
						$twelve.append("<div class='circle dl show'></div>");
						
						$('.dl').offset({left:(givepos($('#IN-DL'))[0]+$('#IN-DL')[0].getBBox().width/2)});
					}
					if($('.pb').length==0 )
					{	$twelve.append("<div class='cone pb'></div>");
						$twelve.append("<div class='circle pb show'></div>");
						
						$('.pb').offset({left:(givepos($('#IN-PB'))[0]+$('#IN-PB')[0].getBBox().width/2)});
					}
					$twelve.find('.circle.mh').removeClass('inv');
					$twelve.find('.circle.up').removeClass('inv');
					$twelve.find('.circle.gj').removeClass('inv');
					$twelve.find('.circle.dl').removeClass('inv');
					$twelve.find('.circle.pb').removeClass('inv');
					$('.circle').fadeIn('slow');
					$('.cone').fadeIn('slow');
					$('.circle1').fadeOut('slow');	
					$('.circle').remove('move');
					
					if($('.mh-txt').length==0)
					{	$twelve.append("<div class='mh-txt'><span id='name'>"+"Maharashtra"+"<br></span><span id='total'>"+"Total Migrants:  5,73,76,776"+"</span><div class='det'><span id='small'> Inter-state migrants </span><span id='small'>"+"90,87,380"+"</span></div></div>");	
						$('.mh-txt').offset({left:givepos($('#IN-MH'))[0]});
					}
					if($('.gj-txt').length==0)
					{	$twelve.append("<div class='gj-txt'><span id='name'>"+"Gujarat"+"<br></span><span id='total'>"+"Total Migrants:  2,68,98,286"+"</span><div class='det'><span id='small'> Inter-state migrants </span><span id='small'>"+"39,16,075"+"</span></div></div>");	
						$('.gj-txt').offset({left:givepos($('#IN-GJ'))[0]});
					}
					if($('.up-txt').length==0)
					{	$twelve.append("<div class='up-txt'><span id='name'>"+"Uttar Pradesh"+"<br></span><span id='total'>"+"Total Migrants:  5,64,52,083"+"</span><div class='det'><span id='small'> Inter-state migrants </span><span id='small'>"+"40,61,933"+"</span></div></div>");	
						$('.up-txt').offset({left:givepos($('#IN-UP'))[0]});
					}
					if($('.pb-txt').length==0)
					{	$twelve.append("<div class='pb-txt'><span id='name'>"+"Punjab"+"<br></span><span id='total'>"+"Total Migrants:  1,37,35,616"+"</span><div class='det'><span id='small'> Inter-state migrants </span><span id='small'>"+"24,88,299"+"</span></div></div>");	
						$('.pb-txt').offset({left:givepos($('#IN-PB'))[0]});
					}
					if($('.dl-txt').length==0)
					{	$twelve.append("<div class='dl-txt'><span id='name'>"+"Delhi"+"<br></span><span id='total'>"+"Total Migrants:  72,24,514"+"</span><div class='det'><span id='small'> Inter-state migrants </span><span id='small'>"+"63,30,065"+"</span></div></div>");	
						$('.dl-txt').offset({left:givepos($('#IN-DL'))[0]});
					}
					$('.mh-txt').fadeIn('slow');
					$('.gj-txt').fadeIn('slow');
					$('.up-txt').fadeIn('slow');
					$('.pb-txt').fadeIn('slow');
					$('.dl-txt').fadeIn('slow');




		}
		else if(a==3){
			
			$('.fixed-top#text-1').addClass('hide');
			$('.fixed-top#text-2').removeClass('hide');
			$('.fixed-top#text-3').addClass('hide');
			$('.circle1').fadeIn('slow');
			$('.circle').addClass('move');
			


				if($('.mh-ext').length==0)
				{
					$twelve.append("<div class='circle1 mh-ext'></div>");
					$twelve.find('.circle.mh').addClass('inv');
					$('.mh-ext').offset({left:givepos($('.circle.mh'))[0]+$('.circle.mh').width()/2, top:givepos($('.circle.mh'))[1]+$('.circle.mh').height()/2});
				}
				if($('.up-ext').length==0)
				{
					$twelve.append("<div class='circle1 up-ext'></div>");
					$twelve.find('.circle.up').addClass('inv');
					$('.up-ext').offset({left:givepos($('.circle.up'))[0]+$('.circle.up').width()/2, top:givepos($('.circle.up'))[1]+$('.circle.up').height()/2});
				}
				if($('.gj-ext').length==0)
				{
					$twelve.append("<div class='circle1 gj-ext'></div>");
					$twelve.find('.circle.gj').addClass('inv');
					$('.gj-ext').offset({left:givepos($('.circle.gj'))[0]+$('.circle.gj').width()/2, top:givepos($('.circle.gj'))[1]+$('.circle.gj').height()/2});
				}
				if($('.dl-ext').length==0)
				{	
					$twelve.append("<div class='circle1 dl-ext'></div>");
					$twelve.find('.circle.dl').addClass('inv');
					$('.dl-ext').offset({left:givepos($('.circle.dl'))[0]+$('.circle.dl').width()/2, top:givepos($('.circle.dl'))[1]+$('.circle.dl').height()/2});
				}
				if($('.pb-ext').length==0)
				{	
					$twelve.append("<div class='circle1 pb-ext'></div>");
					$twelve.find('.circle.pb').addClass('inv');
					$('.pb-ext').offset({left:givepos($('.circle.pb'))[0]+$('.circle.pb').width()/2, top:givepos($('.circle.pb'))[1]+$('.circle.pb').height()/2});
				}
				if($('.circle.mh').length==0)
				{	
					$twelve.append("<div class='circle mh'></div>");
					$twelve.find('.circle.mh').addClass('inv');
					$('.mh').offset({left:givepos($('#IN-MH'))[0]+$('#IN-MH')[0].getBBox().width/2});
				}
				if($('.circle.up').length==0 )
				{	
					$twelve.append("<div class='circle up'></div>");
					$twelve.find('.circle.up').addClass('inv');
					$('.up').offset({left:givepos($('#IN-UP'))[0]+$('#IN-UP')[0].getBBox().width/2});
				}
				if($('.circle.gj').length==0 )
				{	
					$twelve.append("<div class='circle gj'></div>");
					$twelve.find('.circle.gj').addClass('inv');
					$('.gj').offset({left:givepos($('#IN-GJ'))[0]+$('#IN-GJ')[0].getBBox().width/2});
				}
				if($('.circle.dl').length==0 )
				{	
					$twelve.append("<div class='circle dl'></div>");
					$twelve.find('.circle.dl').addClass('inv');
					$('.dl').offset({left:(givepos($('#IN-DL'))[0]+$('#IN-DL')[0].getBBox().width/2)});
				}
				if($('.circle.pb').length==0 )
				{	
					$twelve.append("<div class='circle pb'></div>");
					$twelve.find('.circle.pb').addClass('inv');
					$('.pb').offset({left:(givepos($('#IN-PB'))[0]+$('#IN-PB')[0].getBBox().width/2)});
				}
				
				


			
			$twelve.find(".circle1").fadeIn('slow');
			$twelve.find(".circle").fadeIn('slow');
			$twelve.find(".circle1").removeClass('show');
			$twelve.find(".cone").remove();
			//$twelve.find("#map").last().remove();
			
		}
		else if(a==4){

			$('.fixed-top#text-2').addClass('hide');
			$('.fixed-top#text-3').removeClass('hide');

			if($('.mh').length==0)
			{	$twelve.append("<div class='cone mh'></div>");
				$twelve.append("<div class='circle mh'></div>");
				$('.mh').offset({left:givepos($('#IN-MH'))[0]+$('#IN-MH')[0].getBBox().width/2});
			}
			if($('.up').length==0 )
			{	$twelve.append("<div class='cone up'></div>");
				$twelve.append("<div class='circle up'></div>");
				$('.up').offset({left:givepos($('#IN-UP'))[0]+$('#IN-UP')[0].getBBox().width/2});
			}
			if($('.gj').length==0 )
			{	$twelve.append("<div class='cone gj'></div>");
				$twelve.append("<div class='circle gj'></div>");
				$('.gj').offset({left:givepos($('#IN-GJ'))[0]+$('#IN-GJ')[0].getBBox().width/2});
			}
			if($('.dl').length==0 )
			{	$twelve.append("<div class='cone dl'></div>");
				$twelve.append("<div class='circle dl'></div>");
				$('.dl').offset({left:(givepos($('#IN-DL'))[0]+$('#IN-DL')[0].getBBox().width/2)});
			}
			if($('.pb').length==0 )
			{	$twelve.append("<div class='cone pb'></div>");
				$twelve.append("<div class='circle pb'></div>");
				$('.pb').offset({left:(givepos($('#IN-PB'))[0]+$('#IN-PB')[0].getBBox().width/2)});
			}


			
			$twelve.find(".circle1").css("transform","translate(-50%, -50%) scale(1.5)");
			$twelve.find(".circle1").addClass('show');

			$('#map').fadeIn('slow',function(){});
			
			$twelve.find(".circle").remove();
			//$twelve.find("#map").last().remove();

			if($('.mh-txt').length==0)
			{	$twelve.append("<div class='mh-txt'><span id='name'>"+"Maharashtra"+"<br></span><span id='total'>"+"Total Migrants:  5,73,76,776"+"</span><div><span id='small'> Inter-state migrants </span><span id='small'>"+"90,87,380"+"</span></div></div>");	
				$('.mh-txt').offset({left:givepos($('#IN-MH'))[0]});
			}
			if($('.gj-txt').length==0)
			{	$twelve.append("<div class='gj-txt'><span id='name'>"+"Gujarat"+"<br></span><span id='total'>"+"Total Migrants:  2,68,98,286"+"</span><div><span id='small'> Inter-state migrants </span><span id='small'>"+"39,16,075"+"</span></div></div>");	
				$('.gj-txt').offset({left:givepos($('#IN-GJ'))[0]});
			}
			if($('.up-txt').length==0)
			{	$twelve.append("<div class='up-txt'><span id='name'>"+"Uttar Pradesh"+"<br></span><span id='total'>"+"Total Migrants:  5,64,52,083"+"</span><div><span id='small'> Inter-state migrants </span><span id='small'>"+"40,61,933"+"</span></div></div>");	
				$('.up-txt').offset({left:givepos($('#IN-UP'))[0]});
			}
			if($('.pb-txt').length==0)
			{	$twelve.append("<div class='pb-txt'><span id='name'>"+"Punjab"+"<br></span><span id='total'>"+"Total Migrants:  1,37,35,616"+"</span><div><span id='small'> Inter-state migrants </span><span id='small'>"+"24,88,299"+"</span></div></div>");	
				$('.pb-txt').offset({left:givepos($('#IN-PB'))[0]});
			}
			if($('.dl-txt').length==0)
			{	$twelve.append("<div class='dl-txt'><span id='name'>"+"Delhi"+"<br></span><span id='total'>"+"Total Migrants:  72,24,514"+"</span><div><span id='small'> Inter-state migrants </span><span id='small'>"+"63,30,065"+"</span></div></div>");	
				$('.dl-txt').offset({left:givepos($('#IN-DL'))[0]});
			}
			
			
		}
		else if(a==5){

			$('.fixed-top#text-3').addClass('hide');
			if($('.mh-ext').length==0)
			{
				$twelve.append("<div class='circle1 mh-ext'></div>");
				$twelve.find('.circle.mh').addClass('inv');
				$('.mh-ext').offset({left:givepos($('.circle.mh'))[0]+$('.circle.mh').width()/2, top:givepos($('.circle.mh'))[1]+$('.circle.mh').height()/2});
			}
			if($('.up-ext').length==0)
			{
				$twelve.append("<div class='circle1 up-ext'></div>");
				$twelve.find('.circle.up').addClass('inv');
				$('.up-ext').offset({left:givepos($('.circle.up'))[0]+$('.circle.up').width()/2, top:givepos($('.circle.up'))[1]+$('.circle.up').height()/2});
			}
			if($('.gj-ext').length==0)
			{
				$twelve.append("<div class='circle1 gj-ext'></div>");
				$twelve.find('.circle.gj').addClass('inv');
				$('.gj-ext').offset({left:givepos($('.circle.gj'))[0]+$('.circle.gj').width()/2, top:givepos($('.circle.gj'))[1]+$('.circle.gj').height()/2});
			}
			if($('.dl-ext').length==0)
			{	
				$twelve.append("<div class='circle1 dl-ext'></div>");
				$twelve.find('.circle.dl').addClass('inv');
				$('.dl-ext').offset({left:givepos($('.circle.dl'))[0]+$('.circle.dl').width()/2, top:givepos($('.circle.dl'))[1]+$('.circle.dl').height()/2});
			}
			if($('.pb-ext').length==0)
			{	
				$twelve.append("<div class='circle1 pb-ext'></div>");
				$twelve.find('.circle.pb').addClass('inv');
				$('.pb-ext').offset({left:givepos($('.circle.pb'))[0]+$('.circle.pb').width()/2, top:givepos($('.circle.pb'))[1]+$('.circle.pb').height()/2});
			}

			$twelve.find(".circle").fadeOut('slow');
			$twelve.find(".circle1").css("transform","translate(-50%, -50%) scale(1.5)");
			$twelve.find(".circle1").addClass('show');

			$('#map').fadeOut('slow',function(){});
			$('.mh-txt').remove();
			$('.gj-txt').remove();
			$('.up-txt').remove();
			$('.pb-txt').remove();
			$('.dl-txt').remove();
			console.log('chala');
			$twelve.find(".cone").remove();
			$twelve.find(".circle").remove();
			//$twelve.find("#map").last().remove();
			
		}
		else {
			
			//$('#map').fadeOut('slow',function(){});
			$twelve.find(".cone").remove();
			$twelve.find(".circle").remove();
			$twelve.find(".circle1").remove();
			$('#map').fadeIn('fast',function(){});
			$('.fixed-top#text-4').addClass('hide');
			
			
		}

	}

    function givepos(a){
    	var c=[a.offset().left,a.offset().top];
    	
    	return c;
    }



    function drawMapData(a){
    	var 
    	name=0,
    	total=0,
    	external=0,
    	state1=0,
    	state2=0,
    	state3=0,
    	state1_value=0,
    	state2_value=0,
    	state3_value=0;


    	 
    	switch(a){
    		case "IN-MH" :  name="Maharashtra";
    						total="5,73,76,776"; 
    						external="90,87,380"; 
    						state1="Karnataka";
    						state1_value="13,99,591";
    						state2="Gujarat";
    						state2_value="9,83,653";
    						state3="Rajasthan";
    						state3_value="5,70,233";	break;
    		case "IN-UP" :  name="Uttar Pradesh";
    						total="5,64,52,083"; 
    						external="40,61,933"; 
    						state1="Bihar";
    						state1_value="10,72,739";
    						state2="Madhya Pradesh";
    						state2_value="6,68,537";
    						state3="Delhi";
    						state3_value="5,66,210";	break;
    		case "IN-AP" :  name="Andhra Pradesh";
    						total="3,83,60,644"; 
    						external="15,91,890"; 
    						state1="Karnataka";
    						state1_value="4,66,951";
    						state2="Tamil Nadu";
    						state2_value="2,66,720";
    						state3="Maharashtra";
    						state3_value="2,63,216";	break;

    		case "IN-WB" : name="West Bengal";
    						total="3,34,48,472"; 
    						external="23,81,045"; 
    						state1="Bihar";
    						state1_value="11,03,757";
    						state2="Jharkhand";
    						state2_value="4,59,436";
    						state3="Uttar Pradesh";
    						state3_value="2,38,819";	break;

    		case "IN-TN" : name="Tamil Nadu";
    						total="3,12,74,107"; 
    						external="16,50,771"; 
    						state1="Kerela";
    						state1_value="4,47,701";
    						state2="Karnataka";
    						state2_value="2,89,302";
    						state3="Andhra Pradesh";
    						state3_value="2,86,427";	break;				

			case "IN-BR" : name="Bihar";
    						total="2,72,44,869"; 
    						external="11,11,954"; 
    						state1="Jharkhand";
    						state1_value="4,33,696";
    						state2="Uttar Pradesh";
    						state2_value="3,19,887";
    						state3="West Bengal";
    						state3_value="2,27,809";	break;


    		case "IN-GJ" : name="Gujarat";
    						total="2,68,98,286"; 
    						external="39,16,075"; 
    						state1="Maharashtra";
    						state1_value="9,71,975";
    						state2="Uttar Pradesh";
    						state2_value="9,29,411";
    						state3="Rajasthan";
    						state3_value="7,47,445";	break;


    		case "IN-KA" : name="Karnataka";
    						total="2,64,63,170"; 
    						external="32,47,660"; 
    						state1="Andhra Pradesh";
    						state1_value="8,90,697";
    						state2="Tamil Nadu";
    						state2_value="7,36,821";
    						state3="Maharashtra";
    						state3_value="5,86,864";	break;


    		case "IN-MP" : name="Madhya Pradesh";
    						total="2,47,35,119"; 
    						external="27,44,332"; 
    						state1="Uttar Pradesh";
    						state1_value="10,90,881";
    						state2="Rajasthan";
    						state2_value="5,00,481";
    						state3="Maharashtra";
    						state3_value="4,94,312";	break;


    		case "IN-RJ" : name="Rajasthan";
    						total="2,20,71,482"; 
    						external="26,04,298"; 
    						state1="Uttar Pradesh";
    						state1_value="5,85,982";
    						state2="Madhya Pradesh";
    						state2_value="5,54,058";
    						state3="Haryana";
    						state3_value="5,33,963";	break;
				
    		case "IN-KL" : name="Kerela";
    						total="1,78,63,419"; 
    						external="6,54,423"; 
    						state1="Tamil Nadu";
    						state1_value="3,11,347";
    						state2="Karnataka";
    						state2_value="1,10,833";
    						state3="Maharashtra";
    						state3_value="47,464";	break;

    		case "IN-OR" : name="Odisha";
    						total="1,54,21,793"; 
    						external="8,55,096"; 
    						state1="Jharkhand";
    						state1_value="1,67,377";
    						state2="West Bengal";
    						state2_value="1,64,699";
    						state3="Chattisgarh";
    						state3_value="1,29,371";	break;


    		case "IN-PB" : name="Punjab";
    						total="1,37,35,616"; 
    						external="24,88,299"; 
    						state1="Uttar Pradesh";
    						state1_value="6,49,557";
    						state2="Haryana";
    						state2_value="5,45,584";
    						state3="Bihar";
    						state3_value="3,52,537";	break;

			case "IN-AS" : name="Assam";
    						total="1,06,44,234"; 
    						external="4,95,699"; 
    						state1="Bihar";
    						state1_value="1,47,742";
    						state2="West Bengal";
    						state2_value="94,724";
    						state3="Uttar Pradesh";
    						state3_value="35,441";	break;


    		case "IN-HR" : name="Haryana";
    						total="1,05,85,460"; 
    						external="36,26,318"; 
    						state1="Uttar Pradesh";
    						state1_value="11,13,535";
    						state2="Rajasthan";
    						state2_value="6,11,160";
    						state3="Punjab";
    						state3_value="5,38,328";	break;

    		case "IN-JH" : name="Jharkhand";
    						total="96,59,702"; 
    						external="21,95,521"; 
    						state1="Bihar";
    						state1_value="13,36,048";
    						state2="West Bengal";
    						state2_value="4,94,609";
    						state3="Odisha";
    						state3_value="1,26,320";	break;


    		case "IN-CT" : name="Chattisgarh";
    						total="88,88,075"; 
    						external="12,67,668"; 
    						state1="Madhya Pradesh";
    						state1_value="2,76,527";
    						state2="Odisha";
    						state2_value="2,42,404";
    						state3="Uttar Pradesh";
    						state3_value="1,68,385";	break;    		

    		case "IN-DL" : name="Delhi";
    						total="72,24,514"; 
    						external="63,30,065"; 
    						state1="Bihar";
    						state1_value="11,06,629";
    						state2="Haryana";
    						state2_value="6,66,331";
    						state3="Rajasthan";
    						state3_value="3,15,238";	break;  


    		case "IN-UT" : name="Uttarakhand";
    						total="43,17,454"; 
    						external="12,50,575"; 
    						state1="Uttar Pradesh";
    						state1_value="8,90,663";
    						state2="Bihar";
    						state2_value="76,116";
    						state3="Delhi";
    						state3_value="52,002";	break;  


    		case "IN-JK" : name="Jammu & Kashmir";
    						total="28,09,629"; 
    						external="1,55,187"; 
    						state1="Punjab";
    						state1_value="43,938";
    						state2="Uttar Pradesh";
    						state2_value="20,190";
    						state3="Bihar";
    						state3_value="13,200";	break;    		

    		case "IN-HP" : name="Himachal Pradesh";
    						total="26,47,067"; 
    						external="3,95,504"; 
    						state1="Punjab";
    						state1_value="1,30,851";
    						state2="Uttar Pradesh";
    						state2_value="66,005";
    						state3="Bihar";
    						state3_value="37,600";	break;   


    		case "IN-GA" : name="Goa";
    						total="11,40,690"; 
    						external="2,69,689"; 
    						state1="Karnataka";
    						state1_value="1,16,865";
    						state2="Maharashtra";
    						state2_value="71,943";
    						state3="Uttar Pradesh";
    						state3_value="20,136";	break;     						    										


    		case "IN-AR" : name="Arunachal Pradesh";
    						total="630,831"; 
    						external="1,36,010"; 
    						state1="Assam";
    						state1_value="88,963";
    						state2="Bihar";
    						state2_value="18,811";
    						state3="West Bengal";
    						state3_value="6,966";	break;     	


    		default: 		total="no value"; 
    						external="no value"; 
    						state1="no value";
    						state1_value="no value";
    						state2="no value";
    						state2_value="no value";
    						state3="no value";
    						state3_value="no value";  break;;
    	}

    	$twelve.find('.temp').append("<div><span id='name'>"+name+"</span><span id='total'>"+total+"</span><div><span id='small'> Other States </span><span id='small'>"+external+"</span></div></div><div><span id='small'>"+state1+"</span><span id='small'>"+state1_value+"</span></div><div><span id='small'>"+state2+"</span><span id='small'>"+state2_value+"</span></div><div><span id='small'>"+state3+"</span><span id='small'>"+state3_value+"</span></div>");



    }

    function stateColor(a){
    	var rang='#ffffff';
    	switch(a)
    	{	case "IN-UP": rang="#845EC2"; break;
    		case "IN-MH": rang="#D65DB1"; break;
    		case "IN-GJ": rang="#FF9671"; break;
    		case "IN-BR": rang="#FFC75F"; break;
    		case "IN-OR": rang="#FFFE74"; break;
    		case "IN-KA": rang= "#9BDE7E"; break;
    		case "IN-RJ": rang="#4BBC8E"; break;
    		case "IN-WB": rang="#A9A2D5"; break;
    		case "IN-MP": rang="#92CFD2"; break;
    		case "IN-TG": rang="#FF6F91"; break;
    		case "IN-CT": rang="#E8AAF2"; break;
    		case "IN-JH": rang="#DD8080"; break;
    		default : break;
    		
    	}
    		return rang;
    }


    function drawDeathData(a){
    	$('.edge_viz').append("<div class='temp'>"+a+"</div>");

    }


    function highlightState(a,status){
    	
    	if(status==1){

    		$("#overview_viz>#viz>g").css({"opacity":"0.1"});
    		$("#overview_viz>#viz>g#Lines").css({"opacity":"1"});
    		$("#overview_viz>#viz>#"+a+"_weeks").css({"stroke-width":"0.2","stroke":"white","opacity":"1"});
    		$("#overview_viz>#viz>#"+a+"_in").css({"opacity":"1"});
    		$("#overview_viz>#viz>#"+a+"_out").css({"opacity":"1"});
    		$("#overview_viz>#viz>#"+a+"_name").css({"opacity":"1"});
    		
    		$("#overview_viz>#viz>#"+a+"_clashes").css({"opacity":"1"});
    		$("#overview_viz>#viz>#"+a+"_deaths").css({"opacity":"1"});
    		$("#overview_viz>#viz>#"+a+"_in>path").css({"stroke-width":"0.2","stroke":"white"});
    		$("#overview_viz>#viz>#"+a+"_out>path").css({"stroke-width":"0.2","stroke":"white"});


    		$('#overview_viz>#viz>g#Lines').children('path').each(function () {
			   var id=this.id.split("_");
			   //console.log(this.id+" , "+a);
			   if(id[1]==a || id[2]==a){
			   		$(this).css("opacity","1");
			   		
			   }else{
			   		$(this).css("opacity","0.11");
			   }
			});


    	}
    	else{
    		$("#overview_viz>#viz>#"+a+"_weeks").css({"stroke-width":"","stroke":""});
    		$("#overview_viz>#viz>#"+a+"_in>path").css({"stroke-width":"","stroke":""});
    		$("#overview_viz>#viz>#"+a+"_out>path").css({"stroke-width":"","stroke":""});
    		$("#overview_viz>#viz>g").css({"opacity":""});
    		
    	}
    }

    function highlightWeek(a,status){
    	var i=a.split("_");

    	if(status==1){
    		//$(this).css('opacity','1');
    		
    		$("#viz>g>path").each(function(){
    			var id=this.id.split("_");
    			 if (id[1]==i[1] || id[3]==i[1] || id[2]==i[1] || id[0]==i[1]){
    			 
    			 	$(this).css('opacity','1');
    			 	$('.flo_txt').text(i[1]);
    			 }
    			 else{
    			 	$(this).css('opacity','0.11');
    			 }

    		});
    	}
    	else{
    		
    		$("#viz>g>path").each(function(){$(this).css('opacity','1')});
    		$('.flo_txt').text("");
    	}
    }



    function highlightLines(a,which,status){
    	if(status==1 && which=="out"){
    		
    		//$("#overview_viz>#viz>g").css({"opacity":"0.1"});
    		/*$("#overview_viz>#viz>#"+a+"_out").css({"opacity":"1"});
    		$("#overview_viz>#viz>#"+a+"_lines").css({"stroke-width":"","stroke":"","opacity":"1"});
    		$("#overview_viz>#viz>#"+a+"_out>path").css({"stroke-width":"0","stroke":"white","opacity":"1"});
    		*/
    		$('#overview_viz>#viz>g#Lines').children('path').each(function () {
			   var id=this.id.split("_");
			   //console.log(this.id+" , "+a);
			   if(id[1]==a && id[0]=="lines"){
			   		$(this).css("opacity","1");
			   		
			   }else{
			   		$(this).css("opacity","0.11");
			   }
			});
			
    		
    	}
    	else if(status==1 && which=="in"){
    		//$("#overview_viz>#viz>g").css({"opacity":"0.1"});

    		/*$("#overview_viz>#viz>#"+a+"_in").css({"opacity":"1"});
    		$("#overview_viz>#viz>#"+a+"_in>path").css({"stroke-width":"0","stroke":"white","opacity":"1"});
    		*/
    		$('#overview_viz>#viz>g#Lines').children('path').each(function () {
			   var id=this.id.split("_");
			   if(id[2]==a && id[0]=="lines"){
			   		$(this).css("opacity","1");
			   	
			   }else{
			   		$(this).css("opacity","0.11");
			   }
			});
    		
    	}else{

    		
    		$("#overview_viz>#viz>#"+a+"_in>path").css({"stroke-width":"","stroke":""});
    		$("#overview_viz>#viz>#"+a+"_out>path").css({"stroke-width":"","stroke":""});
    		$("#overview_viz>#viz>g#Lines").css({"stroke-width":"","stroke":""});
    		$("#overview_viz>#viz>g#Lines>path").css("opacity","1");
    		$("#overview_viz>#viz>g").css({"opacity":""});

    		
    	}
    }
    
    
    function changeDay(){

    	if(day==0)
    	{
	    	const timeline=anime.timeline({
	    		duration:5000,
	    		easing:"easeOutExpo"
	    	});

	    	//Add animations ot teh timelne
	    	timeline
	    	.add({
	    		targets:"#sky",
	    		fill: toggle? "#efefef":"#252525" , 
	    		d:[{value: toggle ? sky1:sky2}]
	    	})
	    	.add({
	    		targets:"#ground",
	    		fill: toggle? "#BDBDBD": "#d8d4d4" 


	    	},"-=350").add({
	    		targets:"#sun",
	    		d:[{value: toggle ? sunpath:moonpath}],
	    		rotate: toggle? '-360':'0',
	    		fill: toggle? "#ebd79b": "#e3e3e3" 
	    	},"-=9000")
	    	

	    	if(!toggle){
	    		toggle=true;
	    	}
	    	else{
	    		toggle=false;
	    	}

	    	day=1;
	    }
    }

    function accident(){

    	if(day==0)
    	{	
	    	const acci=anime.timeline({
		    		duration:1000,
		    		easing:"easeOutExpo"
		    });

		    acci
		    .add({
		    	target:'.truck',
		    	left:tog?'-32': '-83',
		    })
		    .add({
		    	target:'.clk',
		    	opacity: tog?'1':'0',
		    	scale: tog?	'1':'0',
		    });
		   /* .add({
		    	target:'.clk',
		    	opacity: tog?'0':'1',
		    });*/


		    if(!tog){
	    		tog=true;
	    	}
	    	else{
	    		tog=false;
	    	}

	    	day=2;
		}

    }

    function transit(pos, color)
    {	

    	if($('.clk').length>0)
    	{
    		$('.clk').remove();
    	}
    	
		$('body').append("<div class='clk "+color+"'></div>");
		$('.clk').offset({left:pos[0], top:(pos[1])});
		//$('.clk').addClass('color');
		$('.clk').addClass('do');
    	
    	
    	
    }

    function resetStory(){
    	$(".story>.background").addClass('hide');
    	$(".blob1>.background").addClass('hide');
    	$('.story>.background#b1').css('transform', 'translate(20vw, 10vh)  scale('+($win.width()/2)/900+')');
		$('.story>.background#b7').css('transform', 'translate(8vw, 10vh)  scale('+($win.width()/2)/900+')');
		$('.story>#b1').removeClass('hide');
    }

    function fillData(a){
    	var br=a.split("_");
    	var week=br[2];
    	var ind=br[3];
    	var state=br[0];
    	var final=0;
    	if(br[1]=="deaths")
    	{
	    	switch(br[0])
	    	{
	    		case "WB": final=WestBengal(week,ind); break;
	    		case "MH": final=Maharashtra(week,ind);break;
	    		case "OR": final=Odisha(week,ind);break;
	    		case "GJ": final=Gujarat(week,ind);break;
	    		case "UP": final=UttarPradesh(week,ind);break;
	    		case "KA": final=Karnataka(week,ind);break;
	    		case "BR": final=Bihar(week,ind);break;
	    		case "TG": final=Telangana(week,ind);break;
	    		case "JH": final=Jharkhand(week,ind);break;
	    		case "RJ": final=Rajasthan(week,ind);break;
	    		default: break;
	    	}
    	}
    	else{
    		switch(br[0])
	    	{
	    		case "WB": final=WestBengalc(week,ind); break;
	    		case "MH": final=Maharashtrac(week,ind);break;
	    		case "OR": final=Odishac(week,ind);break;
	    		case "GJ": final=Gujaratc(week,ind);break;
	    		case "UP": final=UttarPradeshc(week,ind);break;
	    		case "KA": final=Karnatakac(week,ind);break;
	    		case "BR": final=Biharc(week,ind);break;
	    		case "TG": final=Telanganac(week,ind);break;
	    		case "JH": final=Jharkhandc(week,ind);break;
	    		case "RJ": final=Rajasthanc(week,ind);break;
	    		default: break;
	    	}
    	}
    	return final;
    }

    function WestBengal(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		case "week1": 	if (index==1)
			    			{	headline="Lal Swami (32) died in lathicharge";
			    				link="https://www.indiatoday.in/india/story/bengal-man-who-was-out-to-buy-milk-dies-after-being-beaten-up-by-police-1659842-2020-03-26";
			    			}else{
			    				headline="No Data Found";
			    				link='#';
			    			} break;

    		
    		case "week7": if (index==1)
			    			{	headline="Fuldev Bhuiya (35) died in a road accident";
			    				link="https://indianexpress.com/article/india/india-lockdown-migrant-walking-home-to-jharkhand-run-over-in-bengal-6403615/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		

    		case "week11": if (index==1)
			    			{	headline="Dilip Pandit (60) died in quarantine center due to snake bite";
			    				link="https://www.anandabazar.com/state/migrant-labour-died-by-snake-bite-in-a-quarantine-center-in-balurghat-1.1159897";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week12": if (index==1)
			    			{	headline="Sheikh Khatip (30) Shramik train detah, vomiting and suffered from dysentery";
			    				link="https://www.theweek.in/wire-updates/national/2020/06/10/cal38-wb-train-death.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }


    function Gujarat(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{	case "week1":  if (index==1)
			    			{	headline="2 migrant workers died in a road accident";
			    				link="https://timesofindia.indiatimes.com/city/surat/speeding-goods-train-kills-two-women-labourers-at-vapi/articleshow/74867702.cms";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;

			case "week5":  if (index==1)
			    			{	headline="Parvez Ansari (19) died due to denial of timely care";
			    				link="https://indianexpress.com/article/cities/ahmedabad/ahmedabad-ailing-teen-cops-rescued-after-sos-video-passes-away-in-hospital-6376586/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week8":  if (index==1)
			    			{	headline="Sudhir Singh (28) committed suicide due to financial distress and unable to go home";
			    				link="https://www.bhaskar.com/local/gujarat/news/three-workers-hanged-no-one-had-any-food-and-no-one-was-worried-about-going-home-127313551.html";
			    			}else if(index==2){
			    					headline="Rohidas Ligale (55) committed suicide due to financial distress";
			    					link="https://www.bhaskar.com/local/gujarat/news/three-workers-hanged-no-one-had-any-food-and-no-one-was-worried-about-going-home-127313551.html";
			    			}else if(index==3){
			    					headline="Subhas Prajapati (60) committed suicide due to financial distress";
			    					link="https://www.bhaskar.com/local/gujarat/news/three-workers-hanged-no-one-had-any-food-and-no-one-was-worried-about-going-home-127313551.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week9": if (index==1)
			    			{	headline="Sunil Rijajagan Maheli (20) committed suicide due to financial distress and inability to go home";
			    				link="https://www.newindianexpress.com/nation/2020/may/20/lockdown-impact-20-year-old-migrant-worker-from-assam-commits-suicide-over-job-loss-in-surat-2145812.html";
			    			}else if(index==2){
			    					headline="Kanubhai (42) committed suicide due to financial distress";
			    					link="https://ahmedabadmirror.indiatimes.com/ahmedabad/crime/daily-wager-commits-suicide-in-ahmedabad/articleshow/75906075.cms";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }

   function Gujaratc(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		
    		case "week2":  if (index==1)
			    			{	headline="Police fire tear gas on migrant workers for defying coronavirus lockdown, over 90 arrested";
			    				link="https://scroll.in/latest/957723/gujarat-police-fire-tear-gas-on-migrant-workers-for-defying-coronavirus-lockdown-over-90-arrested";
			    			}else if(index==2){
			    					headline="Lathicharge by police in Surat on migrant workers from Uttar Pradesh, Bihar and Madhya Pradesh trying to go home";
			    					link="https://www.patrika.com/miscellenous-india/gujarat-police-lathi-charge-on-workers-during-lockdown-5951483/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week3": if (index==1)
			    			{	headline="Migrant workers in Gujarat’s Surat block roads over fears of extended lockdown";
			    				link="https://scroll.in/latest/958877/coronavirus-migrant-workers-in-gujarats-surat-resort-to-violence-over-fears-of-extended-lockdown";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week7": if (index==1)
			    			{	headline="Migrant workers, waiting to return home, clash with police in Surat";
			    				link="https://www.theweek.in/news/india/2020/05/04/gujarat-migrant-workers-waiting-to-return-home-clash-with-police-in-surat.html";
			    			}else if(index==2){
			    					headline="Police Rain Lathis On Migrants Walking Home To UP, Gujarat";
			    					link="https://www.mid-day.com/articles/lockdown-police-rain-lathis-on-migrants-walking-home-to-up-gujarat/22772237";
			    			}else if(index==3){
			    				headline="Five police personnel were injured in the stone pelting in Nagoriwad area of Shahpur in old city Ahmedabad, which has been declared as a containment zone";
			    				link="https://indianexpress.com/article/cities/ahmedabad/ahmedabad-15-detained-after-mob-pelts-stones-at-police-in-shahpur-6400842/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;

    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }

  function UttarPradeshc(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		
    		case "week1":  if (index==1)
			    			{	headline="In Maharajganj, Gorakhpur, people who had gone to the vegetable market, were lathicharged.";
			    				link="https://www.livehindustan.com/uttar-pradesh/story-police-lathi-charge-on-public-gathering-in-vegetable-market-of-mahrajganj-during-lock-down-3107003.html";
			    			}else if(index==2){
			    					headline="Lathicharge by police on people vialoating social distancing norms in Sabzi Mandi, Deoria";
			    					link="https://www.livehindustan.com/uttar-pradesh/story-police-lathicharge-on-public-gathering-in-deoria-during-lockdown-due-to-corona-3108859.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week2": if (index==1)
			    			{	headline="Bleach Sprayed On Migrants returning to UP";
			    				link="https://www.ndtv.com/india-news/coronavirus-india-lockdown-disinfectant-sprayed-on-migrants-on-return-to-up-shows-shocking-video-2202916";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week8": if (index==1)
			    			{	headline="police lathi-charge on migrant labourers in Chakghat area bordering Madhya Pradesh and Uttar Pradesh.";
			    				link="https://timesofindia.indiatimes.com/city/bhopal/mp-bjp-mla-narayan-tripathi-condemns-police-lathi-charge-on-migrant-workers-demands-action/articleshow/75792373.cms";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;

    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }

  function Karnatakac(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		
    		case "week1":  if (index==1)
			    			{	headline="Police resort to mild lathicharge in Chittoor";
			    				link="https://www.thehindu.com/news/national/andhra-pradesh/police-resort-to-mild-lathicharge-in-chittoor/article31157652.ece";
			    			}else if(index==2){
			    					headline="Police lathicharge people gathered at Mosque amid lockdown in Belgaum";
			    					link="https://economictimes.indiatimes.com/news/politics-and-nation/watch-police-lathicharge-people-gathered-at-mosque-amid-lockdown-in-belgaum/videoshow/74836414.cms";
			    			}else if(index==3){
			    					headline="Despite coronavirus lockdown, people visit Masjid in Karnataka’s Gokak; get lathicharged...";
			    					link="https://newsable.asianetnews.com/video/coronavirus-india/despite-coronavirus-lockdown-people-visit-masjid-in-karnataka-s-gokak-get-lathicharged-q7ueir";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week2": if (index==1)
			    			{	headline="2 Incidents of Stone Pelting at Police Personnel Reported from Hubbali and Dakshin Kannada";
			    				link="https://www.news18.com/news/india/cops-stop-gathering-for-friday-prayers-pelted-with-stones-in-karnataka-town-2563733.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week6": if (index==1)
			    			{	headline="Karnataka Police resort to lathi-charge on people found violating Covid-19 lockdown in Kalaburagi";
			    				link="https://www.timesnownews.com/india/article/karnataka-police-resort-to-lathi-charge-on-people-found-violating-covid-19-lockdown-in-kalaburagi-video/585125";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;

    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }

  function Telanganac(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		
    		
    		case "week6": if (index==1)
			    			{	headline="Hundreds of migrant workers gather in Hyderabad, demanding to be sent back home";
			    				link="https://www.thenewsminute.com/article/hundreds-migrant-workers-gather-hyderabad-demanding-be-sent-back-home-123854";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;

    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }


    function UttarPradesh(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		case "week1" :  if (index==1)
			    			{	headline="Gajendra Kumar (20) died in a road accident";
			    				link="https://www.jagran.com/uttar-pradesh/hathras-an-unknown-vehicle-was-thrashed-the-laborer-coming-from-noida-outraged-by-death-20145590.html";
			    			}else if(index==2){
			    					headline="Gaffar (40) committed suicide";
			    					link="http://janwani.in/epaper_1_3_71_2020-3-28_a.html";
			    			}else if(index==3){
			    					headline="Ranveer Singh (39) died";
			    					link="https://m.timesofindia.com/city/agra/food-delivery-boy-dies-after-walking-200-kms-to-agra-from-delhi/amp_articleshow/74864379.cms?__twitter_impression=true";
			    			}else if(index==4){
			    					headline="Nitin Kumar (26) died in a aroad accident while migration";
			    					link="http://thewirehindi.com/115435/coronavirus-lockdown-factory-worker-died-on-the-way-to-home/";
			    			}else if(index==5){
			    					headline=" Yasin died in a road accident";
			    					link="https://beyondheadlines.in/2020/03/deaths-due-to-lockdown/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week2" :  if (index==1)
			    			{	headline="Roshan Lal (27) died due to police brutality";
			    				link="https://www.nationalheraldindia.com/india/uttar-pradesh-dalit-youth-kills-self-after-being-tortured-by-police-for-breaking-quarantine-rule";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week3" :  if (index==1)
			    			{	headline="Tole Shah (56) committed suicide in quarantine center";
			    				link="https://www.telegraphindia.com/india/coronavirus-link-in-uttarakhand-suicide/cid/1762992";
			    			}else if(index==2){
			    					headline="One person (32) committed suicide in quarantine center";
			    					link="https://www.outlookindia.com/newsscroll/covid19-suspect-jumps-to-death-at-quarantine-facility-in-greater-noida/1800333";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week4" :  if (index==1)
			    			{	headline="Shameem Bano died while standing in line for ration";
			    				link="https://www.bbc.com/hindi/india-52338267?at_custom4=8E01F2F2-817C-11EA-A80E-42A64744363C&at_campaign=64&at_custom2=twitter&at_custom1=%5Bpost+type%5D&at_medium=custom7&at_custom3=BBC+Hindi";
			    			}else if(index==2){
			    					headline="Ramji Mahto (45) died due to exhaustion while walking";
			    					link="https://www.telegraphindia.com/amp/india/coronavirus-lockdown-migrant-falls-and-dies-on-pm-modis-turf/cid/1765839?__twitter_impression=true";
			    			}else if(index==3){
			    					headline="Rizwan Ahmed (22) died due to police beating";
			    					link="https://www.thehindu.com/news/national/other-states/coronavirus-youth-dies-after-being-beaten-up-by-police-in-uttar-pradesh/article31375836.ece";
			    			}else if(index==4){
			    					headline="Luvkush (18) died due to police beating";
			    					link="https://www.theweek.in/wire-updates/national/2020/04/23/des8-up-protest-policemen.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week5" :   if (index==1)
			    			{	headline="Ranjit singh (44), Dinesh (37), San kumari (35) died in a road accident";
			    				link="https://ia801503.us.archive.org/26/items/NonVirusDeaths/hindi-2020-05-01.jpeg";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week6" :   if (index==1)
			    			{	headline="Dharamveer Kumar (28) died due to exhaustion while walking";
			    				link="https://indianexpress.com/article/india/migrant-worker-on-way-home-in-bihar-on-bicycle-dies-in-ups-shahjahanpur-6390068/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week7" :  if (index==1)
			    			{	headline="Ram Sakhi (33), daughters (14, 5), relative kailash (20), Shivaran (17), Ruchi (8), Madan Mohan died in a road accident";
			    				link="https://timesofindia.indiatimes.com/city/agra/6-migrants-among-7-killed-as-truck-collide-with-auto-in-mathura/articleshow/75564283.cms";
			    			}else if(index==2){
			    					headline="Krishna Sahu,Pramila died in a road accident";
			    					link="https://www.newindianexpress.com/nation/2020/may/08/lockdown-30-road-accident-kills-migrant-couple-cycling-from-up-to-chhattisgarh-kids-injured-2140771.html";
			    			}else if(index==3){
			    					headline="Sagheer Ansari (26) died in a road accident";
			    					link="https://www.ndtv.com/lucknow-news/coronavirus-migrant-cycling-1-000-km-home-takes-meal-break-hit-by-car-in-up-dies-2226513";
			    			}else if(index==4){
			    					headline="Kanhaiya lal (29); Hiralala Mahajan (32) Shramik train death";
			    					link="https://www.hindustantimes.com/india-news/railway-protection-force-reports-80-deaths-on-shramik-trains/story-psJl3EenY4B0uUYMRvkChL.html";
			    			}else if(index==5){
			    					headline="Faisal abbas (38)Suraj Ku mar (32) died in a road accident";
			    					link="https://www.livehindustan.com/uttar-pradesh/story-two-youth-fasal-abbas-and-suraj-kumar-moved-for-basti-and-azamgarh-on-bike-both-died-in-accident-in-basti-3208227.html";
			    			}else if(index==6){
			    					headline=" Atar Singh died due to exhaustion";
			    					link="https://khabar.ndtv.com/news/india/11-laborers-reached-300-km-from-gangotri-on-foot-one-dies-2227347";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;

    		case "week8":  if (index==3)
			    			{	headline="Parshuram (42), Rahul (22) died in a road accident";
			    				link="https://timesofindia.indiatimes.com/city/varanasi/two-killed-7-injured-after-truck-carrying-migrants-overturns/articleshow/75682487.cms";
			    			}else if(index==8){
			    					headline="Aarti Singh died due to exhaustion while migration";
			    					link="https://timesofindia.indiatimes.com/city/meerut/girl-walking-back-home-from-greater-noida-dies-in-bulandshahr/articleshow/75705269.cms";
			    			}else if(index==11){
			    					headline="Shivkumar Das (25) died in a road accident";
			    					link="https://khabar.ndtv.com/news/india/2-migrants-killed-in-haryana-and-up-run-over-by-car-amid-corona-lockdown-2227218";
			    			}else if(index==7){
			    					headline="Ram Kripal (65) died due to exhaustion";
			    					link="https://www.news18.com/news/india/migrant-worker-walks-hitch-hikes-over-1500-kms-from-mumbai-to-up-dies-of-exhaustion-after-reaching-home-2617269.html";
			    			}else if(index==5){
			    					headline="Mohan (40) died in a road accident";
			    					link="https://thewire.in/labour/lockdown-uttar-pradesh-migrant-workers-killed";
			    			}else if(index==6){
			    					headline=" Manisha (25)died due to exhaustion while walking";
			    					link="http://www.jhansitimes.com/death-of-pregnant-woman-reached-home-on-foot-from-jharkhand-questions-raised-on-government-claims";
			    			}else if(index==4){
			    					headline="Sundari, Sher Bahadur Gautam died in a road accident";
			    					link="https://thewire.in/labour/six-migrant-workers-killed-road-accident";
			    			}else if(index==2){
			    					headline="Shishupal (32), his brother Jeetendra (30) and uncle Mohan Nishad (40) died in a road accident";
			    					link="https://thewire.in/labour/six-migrant-workers-killed-road-accident";
			    			}else if(index==9){
			    					headline="1 migrant worker (16) died in quarantine center due to snake bite";
			    					link="http://hindi.catchnews.com/india/coronavirus-snake-bites-a-young-man-in-quarantine-center-and-he-dies-in-gonda-up-191220.html";
			    			}else if(index==10){
			    					headline="Ashok Chaudhary (45),Choti (36) died in a road accident";
			    					link="https://timesofindia.indiatimes.com/city/kanpur/migrant-couple-dies-in-mishap-son-survives/articleshow/75782956.cms";
			    			}else if(index==1){
			    					headline=" 27 migrant workers died in a road accident";
			    					link="https://www.deccanherald.com/national/north-and-central/auraiya-tragedy-death-toll-climbs-to-27-as-man-succumbs-to-injuries-839114.html";
			    			}else if(index==12){
			    					headline="Vikram(60) died due to starvation while migration";
			    					link="https://khabar.ndtv.com/news/india/after-3-days-of-journey-home-60-year-old-migrant-dies-of-hunger-in-uttar-pradesh-amid-covid-19-lockdown-2230318?fbclid=IwAR06Q4-f7KrNjAY6S9KBKHctOiQdlRl3BL9H1ZVI1TJx3IsAFzjDV2FGAgI";
			    			}else if(index==13){
			    					headline="Saurabh Saini (22) committed suicide due to financial distress";
			    					link="https://www.amarujala.com/uttar-pradesh/agra/young-man-commits-suicide-due-to-financial-crisis-in-mathura-amid-lockdown";
			    			}else if(index==14){
			    					headline="Vinod Kumar (40) committed suicide due to financial distress";
			    					link="https://www.livehindustan.com/uttar-pradesh/etawah-auraiya/story-when-the-factory-closed-in-lockdown-committing-suicide-in-the-village-3221440.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week9": if (index==7)
			    			{	headline=" Vipin Kumar (19) died due to exhaustion while walking";
			    				link="https://timesofindia.indiatimes.com/city/lucknow/walking-from-ludhiana-to-hardoi-migrant-dies/articleshow/75863677.cms";
			    			}else if(index==3){
			    					headline="Ramji, 28, and Surendra Kumar Anchal, 40. died in a road accident";
			    					link="https://www.ndtv.com/india-news/two-migrant-workers-killed-20-injured-in-accident-on-agra-lucknow-expressway-in-uttar-pradesh-police-2231106";
			    			}else if(index==1){
			    					headline="3 migrant workers died in a road accident";
			    					link="https://timesofindia.indiatimes.com/city/kanpur/uttar-pradesh-three-migrant-workers-killed-as-truck-carrying-them-overturns-in-mahoba/articleshow/75818555.cms";
			    			}else if(index==6){
			    					headline="Liban Miyan (5) died in a road accident";
			    					link="https://www.jagran.com/uttar-pradesh/kanpur-city-truck-and-troller-clash-with-migrant-workers-child-dead-20286446.html";
			    			}else if(index==5){
			    					headline="Ibrar Ahmed (33) Shramik train death, dehydration, exhaustion, lack of timely medical care";
			    					link="https://www.news18.com/news/india/death-in-shramik-special-for-the-next-three-hours-i-sat-next-to-ibrars-corpse-2643109.html";
			    			}else if(index==4){
			    					headline="Nizammudin, Intezaar died in a road accident";
			    					link="https://navbharattimes.indiatimes.com/state/uttar-pradesh/bulandshahr/two-migrants-workers-killed-in-road-accident-near-bulandshahr/articleshow/75887848.cms";
			    			}else if(index==2){
			    					headline="Raju Singh (26), Saurav Kumar (23) and Amit Singh (26) died in a road accident";
			    					link="https://www.newindianexpress.com/nation/2020/may/22/3-migrant-workers-from-bihars-gopalganj-killed-1-seriously-hurt-in-road-accident-in-ups-mirzapur-2146686.html";
			    			}else if(index==8){
			    					headline="Sunil (19) committed suicide due to financial distress";
			    					link="https://www.news18.com/news/india/ran-out-of-cash-19-year-old-migrant-worker-kills-self-in-ups-banda-days-after-returning-from-mumbai-2632153.html";
			    			}else if(index==9){
			    					headline="Jasdhir Singh (32) died in quarantine center";
			    					link="https://english.khabarhub.com/2020/23/98706/";
			    			}else if(index==10){
			    					headline="Jokhan Yadav (46) died in Shramik train";
			    					link="https://www.telegraphindia.com/india/coronavirus-lockdown-migrant-labourer-on-shramik-express-dies-hungry/cid/1775560?utm_source=twitter&utm_medium=social&utm_campaign=tt_daily_twits";
			    			}else if(index==11){
			    					headline=" Raunak (10 months) died in Shramik train";
			    					link="https://www.thequint.com/news/india/10-month-old-baby-and-migrant-labourer-die-on-shramik-express";
			    			}else if(index==12){
			    					headline="Nchineileu Disung (23) Shramik train death, vomitted blood";
			    					link="https://www.livehindustan.com/uttar-pradesh/story-three-person-died-in-shramik-special-trains-samples-of-all-have-taken-for-the-corona-testing-in-kanpur-3233893.html";
			    			}else if(index==13){
			    					headline="Mohan Sharma (38) Shramik train deatth, Blood sugar related ailment, Body found dead in train toilet";
			    					link="https://www.livehindustan.com/uttar-pradesh/story-dead-body-of-migrant-laborer-lying-in-the-toilet-of-a-shramik-special-train-for-five-days-revealed-while-sanitizing-the-train-3246328.html";
			    			}else if(index==14){
			    					headline="Rajendra Prasad (48) Shramik train death, dizziness";
			    					link="https://www.livehindustan.com/uttar-pradesh/story-three-person-died-in-shramik-special-trains-samples-of-all-have-taken-for-the-corona-testing-in-kanpur-3233893.html";
			    			}else if(index==15){
			    					headline="Lalmani Devi (70) Shramik train death, Dehydration - vomitting";
			    					link="https://www.livehindustan.com/uttar-pradesh/story-three-person-died-in-shramik-special-trains-samples-of-all-have-taken-for-the-corona-testing-in-kanpur-3233893.html";
			    			}else if(index==16){
			    					headline="baby (1 month) Shramik train death, heat and dehydration";
			    					link="telegraphindia.com/india/coronavirus-lockdown-baby-dies-on-migrant-train/cid/1776104";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;

			case "week10" :  if (index==1)
			    			{	headline="Ram Awadh Chauhan (45) Shramik train death, lack of food and water, heat, lack of timely care";
			    				link="https://janjwar.com/post/laborer-has-been-sitting-with-the-fathers-body-for-three-days-for-postmortem-in-azamgarh-in-up";
			    			}else if(index==2){
			    					headline="Wahid committed suicide due to financial distress";
			    					link="https://www.livehindustan.com/uttar-pradesh/mau/story-youth-commits-suicide-by-hanging-3242356.html";
			    			}else if(index==3){
			    					headline="Suresh (22), Manoj (20) committed suicide due to financial distress";
			    					link="https://www.asianage.com/india/crime/280520/uttar-pradesh-two-guest-workers-commit-suicide-after-returning-to-their-villages.html";
			    			}else if(index==4){
			    					headline="Dashrath Prajapati (27), Ramratan Gaund (63) Shramik train death, illness";
			    					link="https://mumbaimirror.indiatimes.com/mumbai/cover-story/two-mumbai-men-die-on-train-to-up/articleshow/76049194.cms";
			    			}else if(index==5){
			    					headline="Kipa Sherpa (51) Shramik train death, heat, lack of timely care";
			    					link="https://www.telegraphindia.com/states/west-bengal/coronavirus-lockdown-kalimpong-woman-dies-on-train/cid/1776605";
			    			}else if(index==6){
			    					headline="Mohammad Tariq Shramik train death, collapsed on platform, reason unclear";
			    					link="https://www.jagran.com/bihar/katihar-labour-dead-news-20331210.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
			
			case "week11" :  if (index==1)
			    			{	headline="Arjun Chauhan (19) died in a road accident on his way back home in the back of a crowded truck";
			    				link="https://www.hindustantimes.com/analysis/migrant-workers-the-emergence-of-invisible-india/story-NfDyNBSpOxI45KjxnSNXML.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }

    function Telangana(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		case "week1" : if (index==1)
			    			{	headline="8 Migrant workers died in a road accident";
			    				link="https://indianexpress.com/article/cities/hyderabad/india-lockdown-hyderabad-migrant-labourers-accident-6335807/?fbclid=IwAR3cSta5cPjibyt52giqm76vJRx9_Thuxjo39SmdBPkYnQmvbyYWTjEAN2M";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week2" : if (index==1)
			    			{	headline="Logesh Balasubramani (23) died due to exhaustion";
			    				link="https://www.ndtv.com/india-news/coronavirus-covid-19-lockdown-tamil-nadu-mans-500-km-walk-amid-lockdown-becomes-his-last-2205155";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		
    		case "week4" :  if (index==1)
			    			{	headline="Mohd Aamir(24) committed suicide due to financial distress and inability to go home";
			    				link="https://www.newindianexpress.com/cities/hyderabad/2020/apr/14/bihar-migrant-worker-commits-suicide-2129875.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		
    		case "week6" :   if (index==1)
			    			{	headline="Abdul Aziz (35), died due to dehydration and fatigue";
			    				link="https://www.newindianexpress.com/cities/hyderabad/2020/may/01/migrant-dies-in-hyderbad-while-on-his-way-home-to-tamil-nadu-2137651.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		

    		case "week8":  if (index==1)
			    			{	headline="1 Migrant worker (32) died in a road accident";
			    				link="https://www.indiatoday.in/india/story/lockdown-one-migrant-worker-dies-20-injured-in-road-accident-telangana-1677315-2020-05-12";
			    			}else if(index==2){
			    					headline="Kasa Madakami (21) died due to starvation";
			    					link="https://www.hindustantimes.com/india-news/telangana-21-year-old-migrant-worker-from-odisha-dies-of-dehydration-hunger-pangs/story-pWwp3oj3j1FAImawuDFXeL.html";
			    			}else if(index==3){
			    					headline="Anil (22) committed suicide due to financial distress";
			    					link="https://telanganatoday.com/no-work-due-to-lockdown-idol-maker-commits-suicide-in-mahabubnagar";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    	
    		
    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }

 function Jharkhand(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		
    		
    		case "week4" :  if (index==1)
			    			{	headline="x(62) died waiting in line for Jan dhan money";
			    				link="https://m.hindustantimes.com/india-news/jharkhand-woman-dies-waiting-in-a-bank-queue-to-withdraw-rs-500-from-jan-dhan-account-rural-areas-see-big-rush/story-AK17D75HOAYHXBNYu7jKoO_amp.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		
    		case "week7" :   if (index==1)
			    			{	headline="Alok Mandal committed suicide due to financial distress";
			    				link="https://www.jagran.com/jharkhand/jamshedpur-tent-worker-committed-suicide-in-novamundi-westsinghbhum-20255917.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		

    		case "week8":  if (index==1)
			    			{	headline="6 Migrant workers died in a road accident";
			    				link="https://ia601503.us.archive.org/26/items/NonVirusDeaths/IMG-20200511-WA0001.jpg.jpg";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    	
    		case "week9":  if (index==1)
			    			{	headline="Sudhir Soren (40) committed suicide due to financial distress";
			    				link="https://www.jagran.com/jharkhand/dhanbad-sudhir-soren-death-due-to-lack-of-money-for-treatment-in-dhanbad-20291779.html";
			    			}else if(index==2){
			    				headline="Balvindar Gupta (42) committed suicide due to financial distress";
			    				link="https://www.bhaskar.com/local/jharkhand/news/worker-upset-due-to-lockdown-commit-suicide-in-panki-palamu-127335228.html";

			    			}
			    			else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }

 function Rajasthan(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		
    		
    		

    	
    		case "week7":  if (index==1)
			    			{	headline="Devaram (30) committed suicide in the quarantine center";
			    				link="https://timesofindia.indiatimes.com/city/jaipur/migrant-ends-life-at-quarantine-centre/articleshow/75611885.cms";
			    			}else if(index==2){
			    				headline="Nisar Khan(30) committed suicide due to financial distress";
			    				link="https://english.newstracklive.com/news/man-committed-suicide-jodhpur-sc103-nu612-ta294-1091140-1.html";
			    				
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }

    function Bihar(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		
    		case "week2" :  if (index==1)
			    			{	headline="Bablu died due to assault while migration";
			    				link="https://www.indiatoday.in/india/story/covid-19-migrants-kill-resident-in-bihar-village-for-informing-officials-about-their-arrival-1661626-2020-03-31";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week3" :  if (index==1)
			    			{	headline="Vilas Mahto (40) died due to exhaustion";
			    				link="https://www.telegraphindia.com/india/coronavirus-lockdown-migrant-dies-on-walk-home/cid/1761591";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week4" :  if (index==1)
			    			{	headline="vinod kumar (50) committed  suicide in quarantine center";
			    				link="https://newsd.in/quarantined-man-commits-suicide-in-bihar-police/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week6" :   if (index==3)
			    			{	headline="1 migrant worker died by falling in to river while walking on rail bridge";
			    				link="https://ia601503.us.archive.org/26/items/NonVirusDeaths/english-2020-05-01.jpeg";
			    			}else if(index==2){
			    					headline="Bajinath kumar yadav (22), Subodh Kumar Sao (25) hit by train while walking";
			    					link="https://ia601503.us.archive.org/26/items/NonVirusDeaths/english-2020-05-01.jpeg";
			    			}else if(index==1){
			    					headline="Gopal Pandey, Usha Devi, Gunjan, Sunil died in a road accident";
			    					link="https://www.ndtv.com/cities/jharkhand-ranchi-couple-cycling-to-patna-hitches-ride-on-truck-killed-in-accident-2222283";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week7" : if (index==1)
			    			{	headline="Sundar Rai (21), Budhhinath Rai (23) died in a road accident";
			    				link="https://indianexpress.com/article/india/coronavirus-lockdown-two-killed-in-mishap-on-way-home-to-jharkhand-6408790/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;

    		case "week8":  if (index==1)
			    			{	headline="1 migrant worker died in a road accident";
			    				link="https://sanmarglive.com/news/%E0%A4%95%E0%A5%88%E0%A4%AE%E0%A5%82%E0%A4%B0-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AC%E0%A5%8B%E0%A4%B2%E0%A5%87%E0%A4%B0%E0%A5%8B-%E0%A4%94%E0%A4%B0-%E0%A4%95%E0%A4%82%E0%A4%9F%E0%A5%87%E0%A4%A8/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week9": if (index==1)
			    			{	headline="9 migrant workers died in a road accident";
			    				link="https://www.timesnownews.com/mirror-now/civic-issues/article/bhagalpur-truck-carrying-migrants-rams-into-bus-9-killed-5-other-injured/594028";
			    			}else if(index==2){
			    					headline="Ankush Raj (5) died in quarantine center due to snake bite";
			    					link="https://www.abplive.com/news/india/snake-bites-to-death-while-sleeping-on-quarantine-center-ann-1404622";
			    			}else if(index==3){
			    					headline="1 Migrant Worker Shramik train death, Hunger, Exhaustion due to heat";
			    					link="https://www.livehindustan.com/bihar/sasaram/story-sitamarhi-migrant-laborer-dies-during-treatment-in-sasaram-shramik-special-train-gujarat-surat-gaya-bihar-3241786.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;

			case "week10" :  if (index==1)
			    			{	headline=" 1 Migrant Worker (23) died in Shramik train";
			    				link="https://www.ndtv.com/india-news/coronavirus-a-baby-and-its-dead-mother-at-bihar-station-in-continuing-migrant-tragedy-2235852?pfrom=home-topscroll";
			    			}else if(index==2){
			    					headline="Mohammad Irshad (45)  Shramik train death, lack of food, heat, delayed journey";
			    					link="https://www.hindustantimes.com/india-news/railway-protection-force-reports-80-deaths-on-shramik-trains/story-psJl3EenY4B0uUYMRvkChL.html";
			    			}else if(index==3){
			    					headline="1 old woman Shramik train death, unspecified";
			    					link="https://www.livehindustan.com/bihar/sasaram/story-sitamarhi-migrant-laborer-dies-during-treatment-in-sasaram-shramik-special-train-gujarat-surat-gaya-bihar-3241786.html";
			    			}else if(index==4){
			    					headline="Parbina Khatun (23)Shramik train death, hunger and exhaustion";
			    					link="https://www.hindustantimes.com/india-news/railway-protection-force-reports-80-deaths-on-shramik-trains/story-psJl3EenY4B0uUYMRvkChL.html";
			    			}else if(index==5){
			    					headline="Mohammad Anwar (45) Shramik train death, hunger and exhaustion";
			    					link="https://www.hindustantimes.com/india-news/railway-protection-force-reports-80-deaths-on-shramik-trains/story-psJl3EenY4B0uUYMRvkChL.html";
			    			}else if(index==6){
			    					headline="Mohammed Saied Ansari (45) died in quarantine center";
			    					link="https://www.newsclick.in/Several-Migrant-Workers-Die-Quarantine-Centres-Bihar-Covid-19";
			    			}else if(index==7){
			    					headline="Ramsevak Thakur (45) Shramik train death, Hunger, Exhaustion due to heat";
			    					link="https://www.livehindustan.com/bihar/sasaram/story-sitamarhi-migrant-laborer-dies-during-treatment-in-sasaram-shramik-special-train-gujarat-surat-gaya-bihar-3241786.html";
			    			}else if(index==8){
			    					headline="Saroj Kumar (45) Shramik train death, lack of food and water, exhaustion";
			    					link="https://www.hindustantimes.com/india-news/railway-protection-force-reports-80-deaths-on-shramik-trains/story-psJl3EenY4B0uUYMRvkChL.html";
			    			}else if(index==9){
			    					headline="Lal Babu Kamat (45) Shramik train death, lack of water, illness";
			    					link="https://www.newindianexpress.com/nation/2020/may/29/avreena-khatoon-to-vinod-kumar-the-16-migrants-on-trains-wholl-never-make-it-home-2149385.html";
			    			}else if(index==10){
			    					headline="Ishaaq Alam (4.5) Shramik train death, heat";
			    					link="https://www.hindustantimes.com/india-news/migrants-kid-dies-as-father-hunts-for-milk-at-railway-station/story-k16TMTqCjg1Bnsm2rXzZJL.html";
			    			}else if(index==11){
			    					headline=" Mohd. Musa (40) Shramik train death, unspecified";
			    					link="https://www.livehindustan.com/bihar/sasaram/story-sitamarhi-migrant-laborer-dies-during-treatment-in-sasaram-shramik-special-train-gujarat-surat-gaya-bihar-3241786.html";
			    			}else if(index==12){
			    					headline="Pappu Ram (mid-30s) died in quarantine center";
			    					link="https://www.newsclick.in/Several-Migrant-Workers-Die-Quarantine-Centres-Bihar-Covid-19";
			    			}else if(index==13){
			    					headline="Mohammad Tayyab (50) died in quarantine center";
			    					link="https://www.newsclick.in/Several-Migrant-Workers-Die-Quarantine-Centres-Bihar-Covid-19";
			    			}else if(index==14){
			    					headline="Virendar Yadav died in quarantine center";
			    					link="https://www.newsclick.in/Several-Migrant-Workers-Die-Quarantine-Centres-Bihar-Covid-19";
			    			}else if(index==15){
			    					headline="unspecified (51) Shramik train death, Diarrhoea, Chest pain and fever";
			    					link="https://www.livehindustan.com/bihar/bhagalpur/story-one-more-bihar-resident-labour-died-in-train-migrant-laborer-returning-from-haryana-to-bihar-died-in-labor-special-train-near-begusarai-but-dead-body-stripped-down-in-mansi-3244483.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }



    function Maharashtra(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		case "week1": 	if (index==1)
			    			{	headline="Naresh Shinde(59) died in lathicharge";
			    				link="https://www.hindustantimes.com/cities/covid-19-probe-ordered-into-ambulance-driver-s-death-after-assault-by-policeman/story-45pj0d8MHMh4uudCnribWP.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;

    		case "week2": if (index==1)
			    			{	headline="Ramesh Bhatt (55), Nikhil Pandya (32), Naresh Kalasuva (18) and Kaluram Bhagora (18) died in a road accident";
			    				link="https://indianexpress.com/article/cities/mumbai/four-migrants-run-over-by-a-truck-in-virar-6336120/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week3": break;
    		case "week4": if (index==1)
			    			{	headline="Motiram Jadhav (43)";
			    				link="https://mumbaimirror.indiatimes.com/coronavirus/news/another-migrant-dies-on-the-way-home/articleshow/75767449.cms";
			    			}else if(index==2){
			    					headline="Harish Chander Shankarlal (45)";
			    					link="https://indianexpress.com/article/cities/mumbai/maharashtra-carpenter-dies-after-walking-30-km-to-enquire-about-train-to-home-state-6412078/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week5":  if (index==1)
			    			{	headline="Prashant Mangal Thackeray (24) committed suicide due to financial distress";
			    				link="https://www.loksatta.com/maharashtra-news/suicide-of-two-youths-due-to-lack-of-employment-zws-70-2142682/";
			    			}else if(index==2){
			    					headline="Bharti Arun Kuntalwar (30) died due to exhaustion";
			    					link="https://www.loksatta.com/maharashtra-news/suicide-of-two-youths-due-to-lack-of-employment-zws-70-2142682/";
			    			}else if(index==3){
			    					headline="Motilal Sahu (38) died due to exhaustion while walking";
			    					link="https://timesofindia.indiatimes.com/city/thane/migrant-dies-after-60km-walk-on-empty-stomach/articleshow/75385591.cms";
			    			}else if(index==4){
			    					headline="Ganesh Shriram Jambhure (35) committed suicide due to financial distress";
			    					link="https://www.loksatta.com/maharashtra-news/suicide-of-two-youths-due-to-lack-of-employment-zws-70-2142682/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;  		
    		case "week6": if (index==1)
			    			{	headline="Amarsingh Madavi commited suicide while migrating";
			    				link="https://www.tv9marathi.com/maharashtra/migrant-worker-commits-suicide-after-tired-due-to-walking-450-km-from-hyderabad-214188.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week7":  if (index==1)
			    			{	headline="16 migrant workers died in a train accident";
			    				link="https://m.timesofindia.com/city/aurangabad/maharashtra-train-runs-over-a-dozen-migrant-workers-in-aurangabad/amp_articleshow/75614987.cms?__twitter_impression=true";
			    			}else if(index==2){
			    					headline="Kamalashankar Yadav (age 32) died in a road accident";
			    					link="https://www.loksatta.com/maharashtra-news/migrant-worker-death-in-the-road-accident-scj-81-2155973/";
			    			}else if(index==3){
			    					headline="1 Migrant worker (40) died in a road accident";
			    					link="https://www.loksatta.com/maharashtra-news/40-year-old-man-died-walking-on-highway-accident-jud-87-2155955/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break; 
    		case "week8": if (index==1)
			    			{	headline="Anita Khemchand Chavan (17) committed suicide due to financial distress";
			    				link="https://www.newindianexpress.com/nation/2020/may/12/left-starving-for-two-days-17-year-old-migrant-girl-commits-suicide-in-maharashtra-2142503.html";
			    			}else if(index==2){
			    					headline="Mohmmed Javed died in a road accident";
			    					link="https://www.ndtv.com/mumbai-news/coronavirus-lockdown-mumbai-witnesses-reverse-migration-migrants-leave-mumbai-in-hordes-2227447";
			    			}else if(index==3){
			    					headline="Raju Babhulkar (40) committed suicide due to financial distress";
			    					link="https://www.lokmat.com/nanded/lockdown-victim-after-600-km-walking-survive-they-saw-fathers-death-incident-nanded/";
			    			}else if(index==4){
			    					headline="Pintu Pawar (40), died due to dehydration and exhaustion";
			    					link="https://www.firstpost.com/health/coronavirus-lockdown-migrant-labourer-walking-home-to-maharashtras-parbhani-district-dies-of-hunger-dehydration-8389211.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week9": if (index==1)
			    			{	headline="4 migrant workers died in a road accident";
			    				link="https://www.hindustantimes.com/india-news/four-killed-16-injured-after-bus-carrying-migrant-workers-crashes-into-truck-at-yavatmal/story-VAo6QCr7a5nebmdDlWv0wI.html";
			    			}else if(index==2){
			    					headline="Dnyaneshwar Kashinath Angare (32) committed suicide in quarantine center";
			    					link="https://www.lokmat.com/amravati/suicide-quarantine-person-incidents-morshi-taluka-amravati-district/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week10": if (index==1)
			    			{	headline="Vidyottama Shukla (58), died while waiting in line for train";
			    				link="https://www.abplive.com/news/states/the-58-old-year-old-woman-lost-his-life-waiting-for-train-token-1410334";
			    			}else if(index==2){
			    					headline="Sunil Tekam (35) committed suicide due to financial distress";
			    					link="https://www.lokmat.com/yavatmal/one-person-suicide-due-constant-lockdown-wage-earning-family-subsistence-mac/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		default: break;

    	}

    	return [headline,link];
    }

function Maharashtrac(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		
    		case "week4": if (index==1)
			    			{	headline="Thane police lathi charge labourers in Mumbra, who were hoping to return to their native places, in anticipation that the nation-wide lockdown to contain the spread of COVID-19 would end on Tuesday.";
			    				link="https://www.freepressjournal.in/mumbai/mumbai-thane-police-lathi-charge-labourers-in-mumbra";
			    			}else if(index==2){
			    					headline="Migrant workers gather in hundreds in Mumbai, say they want to go home";
			    					link="https://www.business-standard.com/article/current-affairs/migrant-workers-gather-in-large-numbers-defy-covid-19-lockdown-in-mumbai-120041401123_1.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week7":  if (index==1)
			    			{	headline="At some places in the state, including Kolhapur and Pune, police resorted to mild lathicharge to disperse people gathered outside liquor outlets.";
			    				link="https://www.moneycontrol.com/news/india/liquor-shops-open-amid-coronavirus-lockdown-from-corona-fee-to-lathicharge-heres-how-states-manage-rush-of-buyers-5230191.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break; 
    		case "week8": if (index==1)
			    			{	headline="Police lathi charge protesting migrants, mainly from Uttar Pradesh and Bihar, who gathered near the Ripon Hotel in Mumbai Central,demanding that they be put on trains to their native places";
			    				link="https://www.thehindu.com/news/cities/mumbai/police-lathi-charge-protesting-migrants-arrange-trains-to-send-them-home/article31578138.ece";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week9": if (index==1)
			    			{	headline="Police used lathi-charge to disperse the thousands of migrants workers assembled at Bandra station after they violating the social distancing norm. ";
			    				link="https://www.newindianexpress.com/cities/mumbai/2020/may/19/police-lathi-charge-migrant-workers-assembled-at-bandra-station-2145460.html";
			    			}else if(index==2){
			    					headline="Thousands of migrants gather at grounds in Mumbai's Kandivali in hope of boarding trains";
			    					link="https://www.newindianexpress.com/cities/mumbai/2020/may/21/thousands-of-migrants-gather-at-grounds-in-mumbais-kandivali-in-hope-of-boarding-trains-2146246.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		
    		default: break;

    	}

    	return [headline,link];
    }

    function Odisha(week,index)
    {
    	var headline=0;
    	var link=0;

    	switch(week)
    	{
    		case "week1": if (index==1)
			    			{	headline="A migrant worker died in  a road accident";
			    				link="https://beyondheadlines.in/2020/03/deaths-due-to-lockdown/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
			case "week2": if (index==1)
			    			{	headline="Sagar Deoria(38) committed suicide due to financial and food crisis";
			    				link="https://www.orissapost.com/man-commits-suicide-owing-to-financial-crisis-amid-21-day-lockdown/";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
			case "week6": if (index==1)
			    			{	headline="1 migrant worker died in a road accident";
			    				link="https://economictimes.indiatimes.com/news/politics-and-nation/1-killed-as-bus-ferrying-odia-migrants-from-gujarat-meets-with-accident/articleshow/75511733.cms?from=mdr";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		case "week8": if (index==1)
			    			{	headline="Surendra Behera (35) committed suicide in quarantine center";
			    				link="https://odishabytes.com/tamil-nadu-returnee-commits-suicide-at-quarantine-centre-in-odisha/";
			    			}else if(index==2){
			    					headline="Dhubei Charan Mohanty (56) died due to dehydration while walking";
			    					link="https://www.hindustantimes.com/india-news/56-year-old-migrant-worker-on-his-way-to-home-dies-on-road-28-year-old-migrant-dies-in-police-lathicharge-in-surat/story-O1NI1kDAWYRAAQOg4dkT6M.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week10": if (index==1)
			    			{	headline="Sahdev Ram (53) Shramik train death, Diarrhoea followed by death";
			    				link="https://www.hindustantimes.com/india-news/railway-protection-force-reports-80-deaths-on-shramik-trains/story-psJl3EenY4B0uUYMRvkChL.html";
			    			}else if(index==2){
			    					headline="Hayar Mohamad(60) died due to exhaustion while walking";
			    					link="https://www.newindianexpress.com/states/odisha/2020/may/29/migrant-worker-returning-to-bengal-from-hyderabad-on-foot-dies-in-odisha-2149669.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		
    		case "week12": if (index==1)
			    			{	headline="Rajiya Khatun (18 days) Shramik train death";
			    				link="https://www.timesnownews.com/mirror-now/in-focus/article/18-day-old-new-born-dies-on-board-shramik-train-bengal-migrant-alleges-apathy-from-railways/604576";
			    			}else if(index==2){
			    					headline="Radhashyam Pani (65) died in quarantine center";
			    					link="https://www.deccanherald.com/national/east-and-northeast/elderly-migrant-dies-in-odishas-quarantine-centre-847913.html";
			    			}else{
			    				headline="No Data Found";
			    				link="#";
			    			} break;
    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }
     function Karnataka(week,index)
    {
    	var headline=0;
    	var link=0;
    	
    	switch(week)
    	{
    		case "week2": 	if (index==1)
			    			{	headline="Gangamma(29) died due to starvation during migration";
			    				link="https://vijaykarnataka.com/news/bellary/lockdown-in-karnataka-29-year-old-sindhanur-woman-dies-after-try-to-reach-home-by-walk-from-bengaluru/articleshow/75020447.cms";
			    				
			    			}else{
			    				headline="No Data Found";
			    				link=0;
			    			} break;

    		case "week7": if (index==1)
			    			{	headline="Babulal Singh(46) died due to exhaustion";
			    				link="https://timesofindia.indiatimes.com/city/hubballi/jkhand-bound-worker-dies-after-walking-for-100km/articleshow/75611691.cms";
			    			
			    			}else{
			    				headline="No Data Found";
			    				link=0;
			    			} break;
    		
    		case "week9": if (index==1)
			    			{	headline="Dayanand Poojary (55) committed suicide in quarantine center due to fear of virus";
			    				link="https://indianexpress.com/article/india/man-in-quarantine-commits-suicide-in-karnataka-6421286/";
			    				
			    			}else if(index==2) 
			    			{
			    				headline="1 migrant worker (53) committed suicide in quarantine center";
			    				link="https://in.news.yahoo.com/man-karnataka-covid-19-quarantine-051459289.html";
			    			} else{
			    				headline="No Data Found";
			    				link="#";
			    			}
			    			break;
    		default: 			headline="No Data Found";
			    				link=0; break;

    	}

    	return [headline,link];
    }

    function menuSwitch(a)

    {
    	if($('.menu>.item:nth-child('+a+')').hasClass('active'))
    	{

    	}
    	else{
    		for(i=1;i<=4;i++)
	    	{
	    		if(i==a)
	    		{
	    			$('.menu>.item:nth-child('+i+')').addClass('active');
	    			console.log("ident");
	    		}
	    		else{
	    			$('.menu>.item:nth-child('+i+')').removeClass('active');
	    		}
	    	}
    	}
    	
    }