function Map(data)
{
  this.pos = new Vector(0, height);
  
  data = data.split('#');
  
  this.numRows = parseInt(data[0]);
  this.numCols = parseInt(data[1]);
  
  var map = data[2];
  map = map.split('^');
  
  this.rows = new Array(this.numRows);
  
  for(var i=0; i<this.rows.length; i++)
    this.rows[i] = new Array(this.numCols);
    
  
  for(var i=0; i<map.length-1; i++)
  {
    var tile = map[i].split('|');
    var row = Math.floor(i/this.numCols);
    var col = i%this.numCols;
    
    if(i == this.numRows * this.numCols)
      return;
    
    this.rows[row][col] = new Tile(tile[0], tile[1] == "true", tile[2] == "true");
  }
}

Map.prototype.getTileFromPoint = function(pt)
{
  for(var i=0; i<=this.rows.length; i++)
  {
    for(var j=0; j<=this.rows[0].length; j++)
    {
      if(pt.isInside(this.pos.add(new Vector(j*(tileSize), -(i+1)*(tileSize))), new Vector(tileSize, tileSize)))
        return new Vector(i,j);
    }
  }
  return new Vector(-1, -1);
};

Map.prototype.draw = function()
{
  for(var i=0; i<this.numRows; i++)
  {
    for(var j=0; j<this.numCols; j++)
    {      
      this.rows[i][j].drawOnMap(this.pos.add(new Vector(j*(tileSize), -(i+1)*(tileSize))));
    }
  }
}

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