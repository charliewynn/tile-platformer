function Player(x,y)
{
  this.pos = new Vector(x,y);
  this.size = new Vector(tileSize-2, -2*tileSize+2);
  this.moveAmt = 4;
  this.inJump = false;
  this.jumpNDX = 0;
  this.onGround = false;
}

Player.prototype.update = function()
{
    
  
  if(leftArrowPressed) this.move(new Vector(-4,0));
  if(rightArrowPressed) this.move(new Vector(4,0));
  //if(upArrowPressed) this.move(new Vector(0,-1));
  if(downArrowPressed) this.size = new Vector(tileSize-2, -1*tileSize+2);
  else this.size = new Vector(tileSize-2, -2*tileSize+2);
  
  this.jumpNDX = Math.max(this.jumpNDX-1, 0);
  
  
  //gravity
  this.onGround = false;
  this.move(new Vector(0, 10));
  
  if(this.inJump)
  {
    this.move(new Vector(0, -22));
    if(this.jumpNDX <= 0)
      this.inJump = false;
  }
    
    
  if(upArrowPressed && this.onGround) this.jump();
};

Player.prototype.jump = function()
{
  this.inJump = true;
  this.jumpNDX = 10;
}

Player.prototype.move = function(dir)
{
  var nextPos = this.pos.add(dir);
  
  var minX = Math.floor(nextPos.x/tileSize);
  var maxX = Math.floor(nextPos.add(this.size).x/tileSize);
  var minY = Math.floor((height-nextPos.y)/tileSize);
  var maxY = Math.floor((height-nextPos.add(this.size).y)/tileSize);
  
  var tilesTouching = [];
  
  for(var mx = minX; mx <= maxX; mx++)
    for(var my = minY; my <= maxY; my++)
    {
      if(mx >= 0 && mx < map.numCols && my >= 0 && my < map.numRows)
        tilesTouching.push({tile:map.rows[my][mx], row:my, col:mx});
    }
  for(t in tilesTouching)
  {
    var ti = tilesTouching[t].tile;
    if(ti.isSolid)
    {
      //now need to find out which part of the tile we hit so we can 'hug' it
      
      //tile bottom
      var tb = height-tilesTouching[t].row*tileSize;
      var tt = tb - tileSize;
      var tl = tilesTouching[t].col*tileSize;
      var tr = tl + tileSize;
      
      //player bottom
      var pb = this.pos.y;
      var pt = this.pos.add(this.size).y;
      var pl = this.pos.x;
      var pr = this.pos.add(this.size).x;
      
      var nb = nextPos.y;
      var nt = nextPos.add(this.size).y;
      var nl = nextPos.x;
      var nr = nextPos.add(this.size).x;
      
      if(!this.onGround)
        var i = 1;
      
      if(pb < tt && nb > tt)//player tried to drop through tile
      {
        this.onGround = true;
        nextPos.y = tt - 1; //set it to one above tile
      }
      else if(pt > tb && nt < tb)//player tried to jump into tile
      {
        nextPos.y = tb + 1 - this.size.y; //set it to one below tile
        this.inJump = false;
      }
      
      if(pr < tl && nr > tl)//player tried run into tile's left side
      {
        nextPos.x = tl - this.size.x - 1; //set it to one left of tile
      }
      else if(pl > tr && nl < tr)//player tried run into tile's right side
      {
        nextPos.x = tr + 1; //set it to one left of tile
      }
    }
  }
  
  this.pos = nextPos;
  
}

Player.prototype.draw = function()
{
  drawRect(this.pos, this.size, redFill);
};