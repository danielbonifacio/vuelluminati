'use strict'

const Cookie = new Object

Cookie.get = cookieName => {
	var name = cookieName + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

Cookie.check = cookie => {
	var username = Cookie.get(cookie);
	if (username != "") {
		return true
	} else {
		return false
	}
}

Cookie.set = (name, value, time) => {
	let date = new Date
	date.setTime(date.getTime() + (time * 60 * 60 * 1000))
	let expires = "expires=" + date.toUTCString()
	document.cookie = name + '=' + value + ";" + expires + ";path=/"
}

export default Cookie
