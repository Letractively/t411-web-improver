(function() {

// Ajout checkbox individuelle
var allTorrents= document.querySelectorAll("table.results>tbody>tr");
for (var i=0; i<allTorrents.length; i++) {
	var nfoImg = new Image();
	nfoImg.src = "http://www.t411.me/images/icon_nfo.gif";
	var nfoLink = allTorrents[i].querySelector("a.nfo");
	nfoLink.classList.remove("nfo");
	nfoLink.appendChild(nfoImg);
	
	var tId = /\d+$/.exec(nfoLink.href)[0];
	var dlLink = document.createElement("a");
	dlLink.href = "http://www.t411.me/torrents/download/?id="+tId;
	var dlImg = new Image();
	dlImg.src = chrome.extension.getURL("Download-64.png");
	dlImg.width="16";
	dlLink.appendChild(dlImg);
	nfoLink.parentElement.appendChild(dlLink);
}

})();