const sortList = (arg) => {
    const list = document.getElementById('id01');
    let switching = true;
    let shouldSwitch = false;
    let switchCount = 0;

    while (switching) {
        switching = false;
        const b = list.getElementsByTagName('li');  
        
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;

            if (arg === 'desc' && (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase())) {
                shouldSwitch = true;
                break;
            }

            if(arg === 'asc' && (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase())) {
                shouldSwitch = true;
                break;
            }          
        }

        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
            switchCount ++;
        } else {
            if (switchCount === 0 && arg === 'desc') {
                arg = 'asc';
                switching = true;
            }
        }
    }
}