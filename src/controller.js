const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);
    req.method = 'POST';
    // GET Endpoint
    if (reqUrl.pathname == '/sample' && req.method === 'GET') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.sampleRequest(req, res);

        // POST Endpoint
    } else if (reqUrl.pathname == '/test' && req.method === 'POST') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);
        json = {"name" : "Abortion","psource":{"resourceType": "Bundle","id": "example1","meta": {"versionId": "1","lastUpdated": "2014-08-18T01:43:30Z"},"base": "http://example.com/base","entry" : {"resource": {"id" : "1","meta" :{ "profile" : ["patient-qicore-qicore-patient"]},"resourceType" : "Patient","identifier": [{ "value": "1" }],"name": {"given":["John"], "family": ["Smith"]},"gender": "M","birthDate" : "1980-02-17T06:15"}}}};
        myjson = JSON.stringify(json);          
        service.testRequest(req, res, myjson );

    } else {
        console.log('Request Type:' +
            req.method + ' Invalid Endpoint: ' +
            reqUrl.pathname);

        service.invalidRequest(req, res);

    }
});