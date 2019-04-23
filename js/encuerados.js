window.onscroll = function() {navstick()};
function navstick(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {document.getElementById("myNav").className = "headerjs";
    }
    else{
        document.getElementById("myNav").className = "naveg";
    }
}
