const axios = require('axios');

const defaultConfig = {
    /* Your settings here like Accept / Headers etc. */
	headers: {
		"User-Agent": "axios-app"
	}
}

const get = (url, config) => axios.get(url, {...defaultConfig, ...config});

module.exports = {
	get,
};