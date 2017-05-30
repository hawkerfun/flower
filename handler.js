'use strict';

var request_couter = 0;

module.exports.display = (event, context, callback) => {

  /*fs.readFile('views/hello.html', 'utf8', function (err,data) {
    if (err) {

      const response_test = {
        statusCode: 200,
        headers : {
          "content-type" : "text/html; charset=UTF-8"
        },
        body: "<html><head></head><body>" + err + "</body></html>"
      };

    }
    console.log(data);

    const response_test = {
      statusCode: 200,
      headers : {
        "content-type" : "text/html; charset=UTF-8"
      },
      body: data
    };

    callback(null, response_test);


  });*/

  request_couter++;

  const response_test = {
    statusCode: 200,
    headers : {
      "content-type" : "text/html; charset=UTF-8"
    },
    body: "<html><head></head><body>" +
    "Number of request: " + request_couter +
    "</body></html>"
  };

  callback(null, response_test);


};
