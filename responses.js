function getBotResponse(input) {
  //Bobs Responses
  
  if (input == "No message sent") {
    return "Whatever";
  } else if (input == "Bob") {
    return "Fine. Be that way";
  } else if (input.toUpperCase() == input && input.includes('?')){
    return "Calm down, I know what I'm doing!";
  } else if (input.toUpperCase() == input){
    return "Woah,chill out!";
  } else if (input.includes('?')){
    return "Sure";
  }
}
  
  
