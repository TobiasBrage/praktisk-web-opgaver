document.addEventListener('DOMContentLoaded', () => { // content loaded
    console.log('Side indlæst!');
    document.querySelector('#btn1').addEventListener('click', () => { // event click on #btn1
        console.log('Knap trykket!');
    });
    test(); // run test
    udskriv('Tobias', 22); // run udskriv
}, false);

test = () => { console.log('Funktion kørt!'); }; // function test
udskriv = (navn = 'Torben', alder = 20) => { console.log('Jeg hedder '+navn+' og jeg er '+alder+' år gammel.'); }; // function udskriv