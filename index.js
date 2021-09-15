function scuberGreetingForFeet(someValue){
  let result;
  if (someValue <= 400){
    result = 'This one is on me!';
  }
  else if (someValue >=2000 && someValue <= 2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500){
    result = 'No can do.';
  }
  return result;
  // Write your code here!
}

function ternaryCheckCity(someValue){
  let result;

  someValue === 'NYC' ? result = "Ok, sounds good." : result= "No go."

  return result;

  // Write your code here!
}

function switchOnCharmFromTip(someValue){
  // Write your code here!

let result;

switch(someValue){
  case 'generous':
    result = "Thank you so much."
    break;
  case 'not as generous':
    result = "Thank you."
    break;
  default:
    result = "Bye."
    break;
}
return result;

}