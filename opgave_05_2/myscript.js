document.addEventListener('DOMContentLoaded', () => { // content loaded
    document.querySelector('#olatBtn').addEventListener('click', () => { // event click on #olatBtn
        udskriv('Olaf', 70, 'm'); // run udskriv
    });
    document.querySelector('#gertrudBtn').addEventListener('click', () => { // event click on #gertrudBtn
        udskriv('Gertrud', 65, 'k'); // run udskriv
    });
}, false);

udskriv = (navn = 'Olaf', alder = 70, kon = 'm') => { 
    if(kon == 'm') {  // kon m
        console.log('Jeg hedder '+navn+' og jeg er '+alder+' år gammel.'); // opgave 05 2
        document.getElementById('namePar').innerHTML = 'Jeg hedder '+navn+' og jeg er '+alder+' år gammel.'; // opgave 7
    } else { // kon k
        console.log('Jeg hedder '+navn+'.'); // opgave 05 2
        document.getElementById('namePar').innerHTML = 'Jeg hedder '+navn+'.'; // opgave 7
    } 
}; // function udskriv