const showErrMsg = () => {
  document.getElementById('err-msg').style.display = 'block';
  return;
}

const hideErrMsg = () => {
  document.getElementById('err-msg').style.display = 'none';
}

const errMsg = (len) => {
  len === 0 ? showErrMsg() : hideErrMsg();
}

const filterTable = (term) => {
  const input1 = document.getElementById('myInput1');
  const filter1 = input1.value.toUpperCase();
  const input2 = document.getElementById('myInput2');
  const filter2 = input2.value.toUpperCase();
  const table = document.getElementById('myTable');
  const tr = table.getElementsByTagName('tr');
  const trArr = [];
  let txtValue = '';

  const trVal = Object.values(tr);
  trVal.forEach((val) => { 
    let td = '';
    let filter = '';
    term === 'name' ?  td = val.getElementsByTagName('td')[0] : td = val.getElementsByTagName('td')[1];
    term === 'name' ?  filter = filter1 : filter = filter2;
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        val.style.display = '';
        trArr.push(txtValue);
      } else {
        val.style.display = 'none';
      }
    } 
  });
  errMsg(trArr.length);
}