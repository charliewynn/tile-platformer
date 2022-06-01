function Tileset()
{	
  this.tiles = [];
  var div = 127;
  for(var r=0; r<255; r+=div)
    for(var g=0; g<255; g+=div)
      for(var b=0; b<255; b+=div)
        this.tiles.push(new Tile("rgba("+r+","+g+","+b+",1)", true, r+g+b < 400));
  for(var r=0; r<255; r+=div)
    for(var g=0; g<255; g+=div)
      for(var b=0; b<255; b+=div)
        this.tiles.push(new Tile("rgba("+r+","+g+","+b+",1)", false, r+g+b < 400));
  
  this.selected = this.tiles[0];
}

var tileSize = 45;
function Tile(color, isSolid, isDark)
{
  this.color = color;
  this.isSolid = isSolid;
  this.isDark = isDark;
  this.size = new Vector(tileSize,tileSize);
}

Tile.prototype.draw = function(pos)
{
  if(tileset.selected == this)
    drawRect(pos.add(new Vector(-2,-2)), this.size.add(new Vector(4,4)), blueFill);
  drawRect(pos, this.size, this.color)
  if(this.isSolid)
    drawText(pos.add(new Vector(3, tileSize/2-8)), "Solid", this.isDark ? whiteFill : blackFill);
}

Tile.prototype.drawOnMap = function(pos)
{
  drawRect(pos, this.size.scale(.5), this.color)
  if(this.isSolid)
    drawText(pos.add(new Vector(5,5)), "S", this.isDark ? whiteFill : blackFill);
}