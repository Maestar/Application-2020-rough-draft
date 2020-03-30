function askDate(){
  const dateField = document.getElementById('grad-date-div');
  const degreeValue = document.getElementById('conferreddegree').value;
  if(degreeValue === 'yes'){
      dateField.style.visibility = 'hidden';
  }
  else{
      dateField.style.visibility = 'visible';
  }
  
}