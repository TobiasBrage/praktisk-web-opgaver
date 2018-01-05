var btnPress = 0;

document.addEventListener('DOMContentLoaded', () => { // content loaded
    document.querySelector('#btn1').addEventListener('click', () => { // event click on #btn1
        buttonClick(); // run buttonClick
    });
}, false);

buttonClick = () => { // function buttonClick
    btnPress ++; // btnPress add 1
    if(btnPress == 1) { // btnPress 1
        document.getElementById('btnPar').innerHTML = 'Dette er første gang du trykker på knappen. Du har trykket på knappen '+btnPress+' gang.';
    } else if(btnPress == 2) { // btnPress 2
        document.getElementById('btnPar').innerHTML = 'Du har trykket på knappen igen. Du har trykket på knappen '+btnPress+' gang.';
    } else { // btnPress else
        document.getElementById('btnPar').innerHTML = 'Du har trykket på knappen '+btnPress+' gang.';
    }
};