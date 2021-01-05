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

const filterList = () => {   
    let txtValue = '';
    let input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('myUL');
    const items = document.querySelectorAll('li');
    const itemsArr = [];

    ul.style.display = 'block';

    items.forEach((item) => {
        txtValue = item.textContent || item.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = 'block';
            itemsArr.push(txtValue);
        } else {
            item.style.display = 'none';
        }
        item.addEventListener('click', (evt) => {
            input.value = evt.target.innerText;
            ul.style.display = 'none';
        });
    }); 
    errMsg(itemsArr.length)
}