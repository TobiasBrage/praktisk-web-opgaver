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
	let alleUrlParametre = hentAlleUrlParametre();
	if (alleUrlParametre.page !== undefined) {
		let pageNum = alleUrlParametre.page;
		console.log(pageNum);
		if(pageNum == 2) {
			document.getElementById('showP2').style.fontWeight = 'bold';
			document.getElementById('underside2').style.display = 'block';
			document.getElementById('underside1').style.display = 'none';
		} else {
			document.getElementById('showP1').style.fontWeight = 'bold';
			document.getElementById('underside1').style.display = 'block';
			document.getElementById('underside2').style.display = 'none';
		}
	}
	else {
		document.getElementById('showP1').style.fontWeight = 'bold';
		document.getElementById('underside1').style.display = 'block';
		document.getElementById('underside2').style.display = 'none';
	}
}