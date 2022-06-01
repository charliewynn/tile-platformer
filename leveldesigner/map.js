function Map()
{
  this.numRows = 10;
  this.numCols = 15;
  
  //this will be the position it draws from bottom right
  this.pos = new Vector(mapPos.x + 30, mapPos.add(mapSize).y - 30);
  
  //I want to think of this from the bottom left to top right 
  this.rows = new Array(this.numRows);
  
  for(var i=0; i<this.rows.length; i++)
    this.rows[i] = new Array(this.numCols);

  for(var i=0; i<this.numRows; ++i)
    for(var j=0; j<this.numCols; ++j)
      this.placeTile(i,j,new Tile(whiteFill, false, false));
}

Map.prototype.draw = function()
{
  for(var i=0; i<=this.numRows; i++)
  {
    //draw row
    drawLine(this.pos.add(new Vector(0, -i*(tileSize/2+1))), this.pos.add(new Vector((this.numCols)*(tileSize/2+1), -i*(tileSize/2+1))), blackFill);
    for(var j=0; j<=this.numCols; j++)
    {
      //draw Col
      drawLine(this.pos.add(new Vector(j*(tileSize/2+1), 0)), this.pos.add(new Vector(j*(tileSize/2+1), -(this.numRows)*(tileSize/2+1))), blackFill);
      
      //if tile is there, draw tile
      if(this.rows[i] != undefined)
        if(this.rows[i][j] != undefined)
        {
          this.rows[i][j].drawOnMap(this.pos.add(new Vector(j*(tileSize/2+1), -(i+1)*(tileSize/2+1))));
        }
    }
  }
}

Map.prototype.addRow = function()
{
  this.numRows++;
  this.rows.push(new Array(this.numCols));
  for(var j=0; j<this.numCols; ++j)
    this.placeTile(this.numRows-1, j, tileset.selected);
};

Map.prototype.addCol = function()
{
  this.numCols++;
  for(var i=0; i<this.rows.length; i++)
  {
    this.rows[i].push(undefined);
    this.placeTile(i, this.numCols-1,  tileset.selected);
  }
};

Map.prototype.getRowColFromClick = function(pt)
{
  for(var i=0; i<=this.rows.length; i++)
  {
    for(var j=0; j<=this.rows[0].length; j++)
    {
      if(pt.isInside(this.pos.add(new Vector(j*(tileSize/2+1), -(i+1)*(tileSize/2+1))), new Vector(tileSize/2, tileSize/2)))
        return new Vector(i,j);
    }
  }
  return new Vector(-1, -1);
};

Map.prototype.placeTile = function(r,c, tile)
{
  if(r >= 0 && c >= 0)
  {
    if(this.numRows > r && this.numCols > c)
    {
      this.rows[r][c] = new Tile(tile.color, tile.isSolid, tile.isDark);
    }
  }
};

Map.prototype.getData = function()
{
  var mapdata = this.numRows + '#' + this.numCols + '#';
  for(var i=0; i<this.numRows; i++)
  {
    for(var j=0; j<this.numCols; j++)
    {
      mapdata += this.rows[i][j].color + '|' + this.rows[i][j].isSolid + '|' + this.rows[i][j].isDark + '^';
    }
  }
  
}