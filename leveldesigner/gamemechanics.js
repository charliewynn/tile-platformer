function didload()
{			
	canvas = document.getElementById("theCanvas");
	context = canvas.getContext("2d");
	document.onkeydown = keydown;
	document.onkeyup = keyup;
	canvas.addEventListener('mousedown', mouseDown, false);
	canvas.addEventListener('mousemove', mouseMove, false);
	canvas.addEventListener('mouseup',   mouseUp, false);
	
  tileset = new Tileset();
  map = new Map();
  
  updateGame();
}

function updateGame()
{
  redraw();
  setTimeout( function(){	updateGame();}, 25);
}


function mouseDown(e)
{
	var pt = getCursorPosition(e);
  clickDown = true;
  if(pt.isInside(tileSetPos, tileSetSize))
  {              
    //alert("TileSet");
    selectTileFromClickPoint(pt);
  }
  else if(pt.isInside(mapPos, mapSize))
  {
    var rc = map.getRowColFromClick(pt);
    if(rc != new Vector(-1,-1))
    {
      map.placeTile(rc.x, rc.y, tileset.selected);
    }
  }
}

function selectTileFromClickPoint(pt)
{
  var numTiles = tileset.tiles.length;
  var beginVec = new Vector(5, 20);
  
  for(var i=0; i<Math.floor(numTiles/5)+1; i++)
  {
    for(var j=0; j<5; j++)
    {
      if(tileset.tiles[i*5+j] == undefined)
        break;
      if(pt.isInside(new Vector(j*tileSize+j*3+1, i*tileSize+i*3+1).add(beginVec), new Vector(tileSize, tileSize)))
      {
        tileset.selected = tileset.tiles[i*5+j];
        return;
      }
    }
  }
}

function mouseMove(e)
{
	var pt = getCursorPosition(e);
  if(pt.isInside(mapPos, mapSize) && clickDown)
  {
    var rc = map.getRowColFromClick(pt);
    if(rc != new Vector(-1,-1))
    {
      map.placeTile(rc.x, rc.y, tileset.selected);
    }
  }
}

function mouseUp(e)
{
  clickDown = false;
}

function getCursorPosition(e) {
	var x, y;
	if (e.pageX || e.pageY)
	{
	  x = e.pageX;
	  y = e.pageY;
	}
	else {
	  x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	  y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	
	x -= document.getElementById("theCanvas").offsetLeft;
	y -= document.getElementById("theCanvas").offsetTop;
	return new Vector(x,y);
}

function keydown(e)
{
  if(e.keyCode == 82) //r
    map.addRow();
  if(e.keyCode == 67) //c
    map.addCol();
  if(e.keyCode == 69) //e
    map.getData();
    
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