var config = {
	mode: "fixed_servers",
	rules: {
		proxyForHttp: {
			scheme: "http",
			host: "198.7.58.81"
		}
	}
};

var proxyOff = {
	mode: "direct"
}

function setCookie () {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			chrome.cookies.remove({url: "http://crunchyroll.com/", name: "sess_id"});
			chrome.cookies.set({url: "http://.crunchyroll.com/", name: "sess_id", value: xhr.responseText})
			alert(xhr.responseText);
		}
	}
	xhr.open('GET', 'http://www.crunblocker.com/sess_id.php', true);
	xhr.send(null);
}

chrome.browserAction.onClicked.addListener(function(tab) {
	setCookie ();
});