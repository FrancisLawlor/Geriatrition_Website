function nothover(image, pic) 
	{
		pic.src = image ;
	}
	
function hover(image, pic) 
	{
		pic.src = image;
	}
	
function makebigger()
	{	
		var array1 = document.getElementsByClassName('text');
		
		for(var i = 0; i < array1.length; i++) 
			{
				array1[i].style.cssText = 'font-size: 24px';
			}
		
		var array2 = document.getElementsByClassName('heading');
		
		for(var i = 0; i < array2.length; i++) 
			{
				array2[i].style.cssText = 'font-size: 27px';
			}
	}

function makesmaller()
	{
		var array1 = document.getElementsByClassName('text');
		
		for(var i = 0; i < array1.length; i++) 
			{
				array1[i].style.cssText = 'font-size: 17px';
			}
		
		var array2 = document.getElementsByClassName('heading');
		
		for(var i = 0; i < array2.length; i++) 
			{
				array2[i].style.cssText = 'font-size: 20px;';
			}
	}

function preloadSlideshow() 
	{
		imageList = [
			"slideshow/gympic2.png",
			"slideshow/gympic3.png",
			"slideshow/gympic4.png",
			"slideshow/gympic5.png",
			"slideshow/gympic1.png"
		];
		for(var i = 0; i < imageList.length; i++ ) 
		{
			var imageObject = new Image();
			imageObject.src = imageList[i];
		}
	}

function playMP3()
	{
		document.getElementById("mp3").play();
	}

function pauseMP3()
	{
		document.getElementById("mp3").pause();
	}