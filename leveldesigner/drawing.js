function redraw()
{
  //context.width = width;
  drawRect(new Vector(0,0), new Vector(width, height), blackFill);
  
  drawTileSet();
  drawMap();
  drawNav();
  
}

//dimensions for tileset area
var tileSetPos = new Vector(0,0);
var tileSetSize = new Vector(width/4-1, height);

function drawTileSet()
{
  drawRect(tileSetPos, tileSetSize, lightgreyFill);
  drawText(new Vector(0, 2), "Tile Set", whiteFill);
  
  var numTiles = tileset.tiles.length;
  var beginVec = new Vector(5, 20);
  
  for(var i=0; i<Math.floor(numTiles/5)+1; i++)
  {
    for(var j=0; j<5; j++)
    {
      if(tileset.tiles[i*5+j] == undefined)
        break;
      tileset.tiles[i*5+j].draw(beginVec.add(new Vector(j*tileSize+j*3+1, i*tileSize+i*3+1)));
    }
  }
}

//dimensions for map area
var mapPos = new Vector(width/4+1, 0);
var mapSize = new Vector(3*width/4, height-201);
function drawMap()
{
  drawRect(mapPos, mapSize, lightgreyFill);
  drawText(new Vector(width/4+2, 2), "Map", whiteFill);
  
  map.draw();

}
function drawNav()
{
  drawRect(new Vector(width/4+1,height-199), new Vector(width, height), lightgreyFill);
  drawText(new Vector(width/4+2, height-197), "Navigation", whiteFill);
  drawText(new Vector(width/4+2, height-160), "r to add Row", whiteFill);
  drawText(new Vector(width/4+2, height-140), "c to add Column", whiteFill);
}

function drawLine(fromVec, toVec, fill){
	context.beginPath()
	context.lineWidth = 2;
	context.strokeStyle = fill;
  context.moveTo(fromVec.x, fromVec.y);
  context.lineTo(toVec.x, toVec.y);
	context.stroke();
}

function drawText(vec, text, color, font)
{
	context.fillStyle = color;
	context.font = typeof font == 'undefined' ? 'bold 15px sans-serif' : font;
	context.textBaseline = 'bottom';
	context.fillText(text, vec.x, vec.y+15);
}

function strokeText(x, y, text, color, font)
{
	context.strokeStyle = color;
	context.font = typeof font == 'undefined' ? 'bold 15px sans-serif' : font;
	context.lineWidth = 9;
	context.textBaseline = 'bottom';

	context.fillStyle = whiteFill;
	context.lineWidth = 3;
	context.fillText(text, x, y);
	
	context.strokeText(text, x, y);
	
}

function drawRect(pos,size,color)
{
	context.beginPath();
	context.fillStyle = color;
	context.fillRect(pos.x, pos.y, size.x, size.y);
	context.closePath();
	context.fill();
}