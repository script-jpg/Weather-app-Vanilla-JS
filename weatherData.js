const request = require('request');

const options = {
	method: 'GET',
	url: 'https://api.aerisapi.com/observations/43.879840,-78.942210?&format=json&filter=allstations&limit=1&client_id=ZwhAdDamx0kRV4cYygGzX&client_secret=TNK5gDBsqEqECUp2tcuZa9xsbU41QC51Ni3X1Z1o'
};
		
request(options, function (error, response, body) {
	const json = JSON.parse(body);
		
	if (!json.success) {
		console.error('Oh no!')
	} else {
		console.log(body)
	}
});