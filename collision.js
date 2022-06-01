//My collision only check for collision between two rectangles
  //it checks the each corner of rectangle A to see if it is within rectangle B
  //this is a problem if B is entirely inside A...
    //for instance if a bullet goes from not colliding to inside the rectangle of an enemy inbetween frames
	
  //I could remedy this by also checking each corner of B, if it is inside A
  //but as long as I put the smaller object first then it should always work
  //since I know before hand the size of my objects that are intersecting it's not a problem to just put the smaller one first, less computation that way

function areIntersecting(objA, objB)
{	
  
}