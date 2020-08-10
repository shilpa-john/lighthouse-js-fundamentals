const move = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(move) 
{
  let finalcord = [0,0]; //initialise it to zero first
  for (let i = 0; i < move.length; i++) //for loop for co-ordinates
  {
    if (move[i] === "north") //comparing values if euqal to north co-ordinate
    {
      finalcord[1] += 1;
    } 
    else if (move[i] === 'south') //comparing values if euqal to south co-ordinate
    {
      finalcord[1] -= 1;
    } 
    else if (move[i] === 'west') //comparing values if euqal to west co-ordinate
    {
      finalcord[0] -= 1;
    } 
    else if (move[i] === 'east') //comparing values if euqal to east co-ordinate
    {
      finalcord[0] += 1;
    }
  }
  return finalcord; //return final co-ordinates if above conditions are not met
}

console.log(finalPosition(move));
