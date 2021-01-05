const filterSelection = (term) => {
    if (term == 'all') term = '';
    const filterDiv = document.getElementsByClassName('filterDiv');   
    const filterDivValues = Object.values(filterDiv);
    filterDivValues.forEach((div) => {       
        div.className.indexOf(term) > -1 ? addClass(div, 'show') : removeClass(div, 'show');
    });
}

const addClass = (elem, name) => {
    const arr1 = elem.className.split(' ');
    const arr2 = name.split(' ');
    arr2.forEach((arr) => {
        arr1.indexOf(arr) == -1 ? elem.className += ' ' + arr : arr;
    });
}

const removeClass = (elem, name) => {
    const arr1 = elem.className.split(' ');
    const arr2 = name.split(' ');
    arr2.forEach((arr) => {
        arr1.indexOf(arr) > -1 ? arr1.splice(arr1.indexOf(arr), 1) : arr;
    });
    elem.className = arr1.join(' ');
}

const btnContainer = document.getElementById('myBtnContainer');
const btns = btnContainer.getElementsByClassName('btn');

btnsVal = Object.values(btns);
btnsVal.forEach((btnVal) => {
    btnVal.addEventListener('click', function() {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        btnVal.className += " active";
      });
});

filterSelection('all');