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

  document.getElementById('hidd').value = count;
  document.getElementById('content').appendChild(div);
}

function removeRow(input) {
  document.getElementById('content').removeChild(input.parentNode);
  count--;
}

function CreateTableFromJSON() {
  var myBooks = [
    {
      'Doctor ID': '1',
      'Doctor Name': 'Suresh',
      'Specialized in': 'Heart',
      Att: 'True'
    },
    {
      'Doctor ID': '2',
      'Doctor Name': 'Ramesh',
      'Specialized in': 'Heart',
      Att: 'False'
    },
    {
      'Doctor ID': '3',
      'Doctor Name': 'Umesh',
      'Specialized in': 'Brain',
      Att: 'False'
    }
  ];

  // EXTRACT VALUE FOR HTML HEADER.
  // ('Book ID', 'Book Name', 'Category' and 'Price')
  var col = [];
  for (var i = 0; i < myBooks.length; i++) {
    for (var key in myBooks[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  // CREATE DYNAMIC TABLE.
  var table = document.createElement('table');

  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  var tr = table.insertRow(-1); // TABLE ROW.

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement('th'); // TABLE HEADER.
    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < myBooks.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = myBooks[i][col[j]];
    }
  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  var divContainer = document.getElementById('showData');
  divContainer.innerHTML = '';
  divContainer.appendChild(table);
}
