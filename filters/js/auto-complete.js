const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

const removeActive = (x) => {
    const xElem = Object.values(x);
    xElem.forEach((elem) => {
        elem.classList.remove("autocomplete-active");
    });
}

const addActive = (x, currentFocus) => {
    if (!x) return false;
    removeActive(x);
    if (currentFocus < 0) currentFocus = 0;
    if (currentFocus > x.length) currentFocus = x.length;
    if (currentFocus > x.length - 1) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
}

const closeAllLists = (inp, elmnt) => {
    const x = document.getElementsByClassName("autocomplete-items");
    const xVal = Object.values(x);
    xVal.forEach((val) => {
        (elmnt !== val && elmnt !== inp) ? val.parentNode.removeChild(val) : val;
    });
}

const keydownFunc = (inp) => {
    let currentFocus = -1;
    inp.addEventListener('keydown', function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("DIV");
        if (e.which === 40) {
            currentFocus > x.length - 1 ? currentFocus = x.length - 1 : currentFocus++;                       
            addActive(x, currentFocus);             
        } else if (e.which === 38) { 
            currentFocus < 0 ? currentFocus = 0 : currentFocus--;
            addActive(x, currentFocus);
        } else if (e.which === 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
}

const lookup = (inp, arr) => {
    inp.addEventListener('input', function(e) {
        const val = this.value;
        let a = {};
        let b = {};
        
        closeAllLists(inp, e.target.innerHTML);
        if (!val) { return false;}
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);

        arr.forEach((elem) => {
            if(elem.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + elem.substr(0, val.length) + "</strong>";
                b.innerHTML += elem.substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + elem + "'>";
                b.addEventListener('click', function(e) {
                    inp.value = this.getElementsByTagName('input')[0].value;
                    closeAllLists(inp, e.target);
                });
                a.appendChild(b);
            }
        });
    });
}

const autocomplete = (inp, arr) => {
    lookup(inp, arr);
    keydownFunc(inp);
}

autocomplete(document.getElementById('myInput'), countries);