document.addEventListener('DOMContentLoaded', () => { // content loaded
    document.querySelector('#olatBtn').addEventListener('click', () => { // event click on #btn1
        udskriv('Olaf', 70); // run udskriv
    });
    document.querySelector('#gertrudBtn').addEventListener('click', () => { // event click on #btn2
        udskriv('Gertrud', 65); // run udskriv
    });
}, false);

udskriv = (navn = 'Olaf', alder = 70) => { console.log('Jeg hedder '+navn+' og jeg er '+alder+' år gammel.'); }; // function udskriv