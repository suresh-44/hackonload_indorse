function add_doct() {
    
    var x = document.getElementById("add_click");
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }


  function addRow() {
    var div = document.createElement('div');

    div.className = 'row';

    div.innerHTML =
        ' <input type="text" id="text" name="text-input" placeholder="Doctor Specialization" class="form-control">\
        <input type="button" value="-" onclick="removeRow(this)">';

    document.getElementById('content').appendChild(div);
}

function removeRow(input) {
  document.getElementById('content').removeChild(input.parentNode);
}