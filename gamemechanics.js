function keydown(e)
{	
  if(e.keyCode ==  37)
		leftArrowPressed = true;
	if(e.keyCode ==  38)
		upArrowPressed = true;
	if(e.keyCode ==  39)
		rightArrowPressed = true;
	if(e.keyCode ==  40)
		downArrowPressed = true;
}

function keyup(e)
{
	if(e.keyCode ==  37)
		leftArrowPressed = false;
	if(e.keyCode ==  38)
		upArrowPressed = false;
	if(e.keyCode ==  39)
		rightArrowPressed = false;
	if(e.keyCode ==  40)
		downArrowPressed = false;
}



function didload()
{			
	canvas = document.getElementById("theCanvas");
	context = canvas.getContext("2d");
	document.onkeydown = keydown;
	document.onkeyup = keyup;
  
  //map = new Map("10#15#rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^");
  //map = new Map("10#15#rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,127,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,127,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,127,0,1)|false|true^rgba(0,0,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(0,254,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(0,254,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,127,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(0,254,0,1)|false|true^rgba(0,254,0,1)|false|true^rgba(0,254,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,127,127,1)|true|true^rgba(127,127,127,1)|true|true^rgba(127,127,127,1)|true|true^rgba(127,127,127,1)|true|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(0,254,0,1)|false|true^rgba(0,254,0,1)|false|true^rgba(0,254,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,127,127,1)|true|true^rgba(127,127,127,1)|true|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(0,254,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^");
  //map = new Map("10#15#rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(0,0,0,1)|true|true^rgba(0,0,0,1)|true|true^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^rgba(255,255,255,1)|false|false^");
  //map = new Map("12#26#rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(0,254,0,1)|true|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,127,0,1)|false|true^rgba(0,0,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,127,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,127,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(0,127,0,1)|false|true^rgba(127,127,0,1)|false|true^rgba(0,127,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,127,127,1)|true|true^rgba(127,127,127,1)|true|true^rgba(127,127,127,1)|true|true^rgba(127,127,127,1)|true|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(0,127,0,1)|false|true^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(254,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|true|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^rgba(127,254,254,1)|false|false^");
  map = new Map("10#15#rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,127,0,1)|true|true^rgba(0,127,0,1)|true|true^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(254,254,0,1)|true|false^rgba(254,254,0,1)|true|false^rgba(254,254,0,1)|true|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(254,254,0,1)|true|false^rgba(254,254,0,1)|true|false^rgba(254,254,0,1)|true|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(254,254,0,1)|true|false^rgba(254,254,0,1)|true|false^rgba(254,254,0,1)|true|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^rgba(0,254,254,1)|false|false^");
  player = new Player(tileSize/2, height-2*tileSize-20);
	updateGame();
};

//this is called for every frame to update the location of the objects in the game
function updateGame()
{
	player.update();
  
  
  redraw();
  
	setTimeout( function(){	updateGame(); }, 25);
};