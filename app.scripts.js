function askDate(){
  const dateField = document.getElementById('grad-date-div');
  const degreeValue = document.getElementById('conferreddegree').value;
  if(degreeValue === 'yes'){
      dateField.hidden = true;
  }
  else{
      dateField.hidden = false;
  }
  
}