function add_doct() {
    
    var x = document.getElementById("add_click");
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }
  count=0;

  function addRow() {
    var div = document.createElement('div');

    div.className = 'row';

   count++;

   
    
    div.innerHTML =
        '<input type="text" id="text" name="doctor_'+count+'" placeholder="Doctor Specialization" class="form-control">\
        <input type="button" value="remove" onclick="removeRow(this)"> <br>';
        

    document.getElementById('content').appendChild(div);
    
}

function removeRow(input) {
  document.getElementById('content').removeChild(input.parentNode);
}

document.getElementById('hidd').value = count;
console.log(count);