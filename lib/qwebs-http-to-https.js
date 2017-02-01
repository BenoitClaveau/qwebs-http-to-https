/*!
 * qwebs-http-to-https
 * Copyright(c) 2017 Benoît Claveau
 * MIT Licensed
 */
"use strict";

const DataError = require("qwebs").DataError;
const http = require("http");

class HttpServer {
  constructor($config, $qwebs) {
		if (!$config) throw new DataError({ message: "[HttpServer] Qwebs config is not defined."});
		if (!$config.https) throw new DataError({ message: "Https section is not defined in qwebs config."});
		if (!$config.https.host) throw new DataError({ message: "Https host is not defined in qwebs config."});
		
		this.$config = $config;
		this.$qwebs = $qwebs;
			
		http.createServer((request, response) => {
				return response.redirect({ url: this.$config.https.host + request.url });
		}).listen(this.$config.https.port)
	};
};

exports = module.exports = HttpServer;
