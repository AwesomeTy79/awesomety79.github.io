/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
function getParameterByName(name, url) {
    if (!url) {url = window.location.href;}
    var name = name.replace('/[\[\]]/g', "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) {return null;}
    if (!results[2]) {return '';}
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
(function () { var sayhi = getParameterByName('sayhi'); if (sayhi != null) { alert('hi'); } }());
