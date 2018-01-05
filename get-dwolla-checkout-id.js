var request = require('request');

var production = false;



module.exports = function getCheckoutId(context, callback) {

//return function (context, callback) {
  console.log('Sending new message to bot... ');

  var destinationId = context.data.destinationId;
  var total = context.data.total;
  var url;
  var client_id;
  var client_secret;
  
  if (production === true) {
    //destinationId = '8128397947';
    //destinationId = '812-839-7947';
    //destinationId = 8128397947;
    
    url = 'https://www.dwolla.com/oauth/rest/offsitegateway/checkouts';
    client_id = 'NSU22hMNAGkXH2EYhzXyNs79l2shmG5xF5dqrAzJi6GyV6EmPt';
    client_secret = 'i1yZrjd3KT1Qjrd9FqeM9kT6UvwPCx0SbIV9vC6owCqrZCOLcq';
  } else { //sandbox
    //destinationId = '8127418252';
    destinationId = '812-741-8252';
    //url = 'https://uat.dwolla.com/payment/request';
    url = 'https://sandbox.dwolla.com/oauth/rest/offsitegateway/checkouts';
    //url = 'https://api-sandbox.dwolla.com/payment/request';
	
    client_id = 'ExMSSngBJDkF9sp4Wjlu1OL4uPnR2Q7eMNHdFfQIriGYNmhS8p';
    client_secret = '3xelP0cXIxjOSezm0GTEarExukwk6oSaH5kT6xaITOb0AsGfv3';
  }

  
  var payload = {
    url: url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'//;charset=utf-8'
    },
    json: true,
    body: {
      'client_id' : client_id,
      'client_secret' : client_secret,
      'allowFundingSources' : true,
      'allowGuestCheckout' : true,
      'redirect' : "https://wt-4be0c38760dbec5e388b02b801f4a631-0.run.webtask.io/hello",
      'callback' : "https://wt-4be0c38760dbec5e388b02b801f4a631-0.run.webtask.io/hello",
      'purchaseOrder' : {
        'destinationId' : destinationId,
        'total' : 2207,
        'notes' : ''
      }
    }
  };

  /*request(payload, function (error, res, body) {
    if (error) console.log('ERROR: ', error);
    else  console.log('SUCCESS');
    
    //res.writeHead(200, { 'Content-Type': 'text/html '});
    //res.end('Hello ABBIE TTITIE');
    callback(error, function(body) {
      console.log(body);
    });
  });*/
  
  
  request(payload, function (error, res, body) {
    if (error) console.log('ERROR: ', error);
    else  console.log('SUCCESS');
    
    //res.writeHead(200, { 'Content-Type': 'text/html '});
    //res.end('Hello ABBIE TTITIE');
    callback(error, body);
    console.log(callback.toString());
  });
  
  
  
  
};
