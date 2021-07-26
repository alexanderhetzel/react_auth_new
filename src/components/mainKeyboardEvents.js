//const  MAINSEARCH = document.querySelector("idsearch");
/*
var tempname= "Alexander";
console.log(tempname);

window.onkeyup = ($keyboardEvent) => {

    console.log($keyboardEvent);
    console.log(tryToOpenSearchbar($keyboardEvent));




    if(tryToOpenSearchbar($keyboardEvent)){
        MAINSEARCH.focus();
    }

    if(tryToCloseSearchbar($keyboardEvent)){
        MAINSEARCH.focus();
        closeSearchbar();
        clearList();

    }


    if (trytoSearch($keyboardEvent)){
        tempname = document.querySelector("#idsearch").value;
        window.open("userProperties.html", "_blank","width=400,height=240, resizable=no");

        console.log(tempname);


    }
}

const closeSearchbar = () => {
    MAINSEARCH.value= '';
    document.activeElement.blur();
}



const tryToCloseSearchbar= (keyboardEvent) => {
    return keyboardEvent.code === 'Escape';
}


const tryToOpenSearchbar= (keyboardEvent) => {
    return keyboardEvent.code === 'KeyS' && keyboardEvent.target === document.body;
}

const trytoSearch= (keyboardEvent) => {
    return keyboardEvent.code === 'Enter';

}

 */


import Ele from "./Ele";

window.onkeyup = ($keyboardEvent) => {

    if (trytoSearch($keyboardEvent)){
        //tempname = document.querySelector("#idsearch").value;

        Ele.style.display = "block";
        //console.log(tempname);


    }
}

const trytoSearch= (keyboardEvent) => {
    return keyboardEvent.code === 'Enter';

}