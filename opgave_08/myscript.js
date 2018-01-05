document.addEventListener('DOMContentLoaded', () => { // content loaded
    udskrivProdukter();
}, false);

function hentAlleUrlParametre (url = "") {
	if (url == "") url = window.location.href;
	url = url + "";
	var urlParams = {};
	url.replace (
		new RegExp("([^?=&]+)(=([^&]*))?", "g"),
		function ($0, $1, $2, $3) {
			urlParams[$1] = $3;
		}
	);
	return urlParams;
}

function udskrivProdukter () {
	var alleUrlParametre = hentAlleUrlParametre();
	if (alleUrlParametre.key !== undefined) {
        let key = alleUrlParametre.key;
		if(key == 'valg') {
            let value = alleUrlParametre.value;
            if(value == 'GrumpyBear') {
                document.getElementById('namePar').innerHTML = 'Du har valgt Grumpy Bear';
            } else if(value == 'WishBear') {
                document.getElementById('namePar').innerHTML = 'Du har valgt Wish Bear';
            } else {
                document.getElementById('namePar').innerHTML = 'Du har valgt Cheer Bear';
            }
        } else {
            document.getElementById('namePar').innerHTML = 'Vælg én af mine yndlings Care Bears';
        }
	}
	else {
		document.getElementById('namePar').innerHTML = 'Vælg én af mine yndlings Care Bears';
	}
}