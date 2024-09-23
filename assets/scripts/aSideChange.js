var SideChange = window.jsnamespace || {}

SideChange.SideChangeById = (
    function (element_id, display = 'block') {
        let elem = document.getElementById(element_id);
        if (elem != null) {
            if (elem.style.display != display) {
                elem.style.display = display;
            }
            else
                elem.style.display = 'none';
        }
    }
)
SideChange.SideChangeByClass = (
    function (element_class, display = 'block') {
        let elems = document.getElementsByClassName(element_class);
        for (let elem_index = 0; elem_index < elems.length; ++elem_index) {
            let elem = elems[elem_index];
            if (elem.style.display != display) {
                elem.style.display = display;
            }
            else
                elem.style.display = 'none';
        }
    }
)