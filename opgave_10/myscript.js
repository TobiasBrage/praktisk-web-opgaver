document.addEventListener('DOMContentLoaded', () => { // content loaded
	document.querySelector('#messageSubmit').addEventListener('click', () => {
		let mesName = document.getElementById("messageName").value;
		let mesContent = document.getElementById("messageContent").value;
        besked(mesName, mesContent);
	});
}, false);

besked = (navn = 'Tobias', besked = '') => { // function besked
	let messageContainer = document.getElementById("messageContainer");
	let curMessages = messageContainer.innerHTML;
	let curDate = new Date();
	let curTime = curDate.getHours()+':'+curDate.getMinutes();;
	if(navn.length > 1) {
		if(besked.length > 0) {
			document.getElementById("messageContainer").innerHTML = curMessages+'<span class="messageSpan"><p class="messageName">'+navn+'</p><p class="messageTime">'+curTime+'</p><p class="messageName">:</p>'+besked+'</span>';
			messageContainer.scrollTop = messageContainer.scrollHeight;
			document.getElementById("messageName").value = '';
			document.getElementById("messageContent").value = '';
		} else {
			alert('Din besked er tom.');
		}
	} else {
		alert('Dit navn er for kort.');
	}
};