document.addEventListener('DOMContentLoaded', () => { // content loaded
    document.querySelector('#showP1').addEventListener('click', () => {
		document.getElementById('underside1').style.display = 'block';
		document.getElementById('underside2').style.display = 'none';
	});
	document.querySelector('#showP2').addEventListener('click', () => {
        document.getElementById('underside2').style.display = 'block';
		document.getElementById('underside1').style.display = 'none';
    });
}, false);