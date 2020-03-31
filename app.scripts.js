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

function interestArea(){
    const stateField = document.getElementById('certstate').value;
    const certField = document.getElementById('certtype').value;

    const programArea = document.getElementById('program-area');
    const contentArea = document.getElementById('content-area');

    if(stateField === 'texas' && certField === 'teacher'){
        programArea.style.display = 'none';
        contentArea.style.display = 'block';
    }
    else if(stateField === 'nevada' && certField === 'teacher'){
        contentArea.style.display = 'none';
        programArea.style.display = 'block';
    }
    else{
        contentArea.style.display = 'none';
        programArea.style.display = 'none';
    }
}