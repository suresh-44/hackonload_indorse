function add_doct() {
  var x = document.getElementById('add_click');

  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
count = 0;

function addRow() {
  var div = document.createElement('div');

  div.className = 'row';

  count++;

  div.innerHTML =
    '<input type="text" id="text" name="doctor_' +
    count +
    '" placeholder="Doctor Specialization" class="form-control">\
        <input type="button" value="remove" onclick="removeRow(this)"> <br>';

  document.getElementById('content').appendChild(div);
}

function removeRow(input) {
  document.getElementById('content').removeChild(input.parentNode);
}

document.getElementById('hidd').value = count;
// console.log(count);

function LoadData() {
  var rows_count = 10;
  var rowNum = Math.ceil(parseFloat(rows_count));
  console.log(rows_count);
  var resultHtml = '';

  resultHtml +=
    "<table style = 'width:100%;' border='0' colspan='2' id='tbl_user'>";
  for (var i = 1; i <= rowNum; i++) {
    resultHtml += '<tr>';
    resultHtml +=
      '<td border = 1><input type="name" placeholder="text goes here..."></td>';
    resultHtml += '</tr>';
  }

  resultHtml += '</table>';
}

$('#submit').click(function() {
  $.post('/admin/create', function(data, status) {
    alert('Data: ' + data + '\nStatus: ' + status);
  });
});

function subform() {
  document.getElementById('myForm').submit();
}
