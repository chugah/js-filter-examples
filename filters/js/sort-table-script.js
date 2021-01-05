const sortTable = (n) => {
  const table = document.getElementById('myTable');
  const rows = table.rows;
  let switching = true;
  let dir = 'asc';
  let switchcount = 0;
  let i = 0;
  let shouldSwitch = false;
  let x = {};
  let y = {};
  
  while (switching) {
    switching = false;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('TD')[n];
      y = rows[i + 1].getElementsByTagName('TD')[n];

      if (dir === 'asc' && (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())) {
        shouldSwitch = true;
        break;
      }  
      
      if (dir === 'desc' && (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount === 0 && dir === 'asc') {
        dir = 'desc';
        switching = true;
      }
    }
  }
}