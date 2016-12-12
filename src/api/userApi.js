import 'whatwg-fetch'; // what working group fetch is a polyfill for unsupported browsers

export function getUsers() {
	return get('users');
}

function get(url) {
	return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
	return response.json();
}

function onError(error) {
	return console.log(error); // eslint-disable-line no-console
}