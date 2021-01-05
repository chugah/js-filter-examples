const filterDropdown = () => {
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const div = document.getElementById('myDropdown');
    const a = div.getElementsByTagName('a');
    const aObj = Object.values(a);
    let txtValue = '';

    aObj.forEach((elem) => {
        txtValue = elem.textContent || elem.innerText;
        txtValue.toUpperCase().indexOf(filter) > -1 ? 
            elem.style.display = 'block' : elem.style.display = 'none';
    });
}
  