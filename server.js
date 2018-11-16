var express = require('express');
var app = express();
var url = require('url');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views/pages');
app.set('view engine', 'ejs');

var port = app.get('port');

app.get('/index', (req, res) => res.send('<h1>Hello World</h1>'));

app.listen(app.get('port'), () => console.log(`Example app listening on port ${port}!`));


app.get('/rate', function(request, response) {	
	calculateRate(request, response);
});


function calculateRate (request, response) {
  var requestUrl = url.parse(request.url, true);

  console.log("Query parameters: " + JSON.stringify(requestUrl.query));

  // TODO: Here we should check to make sure we have all the correct parameters

  var mailType = requestUrl.query.mailType;
  var weight = Number(requestUrl.query.weight); 

  computeRate(response, mailType, weight);
};

 function computeRate(response, mailType, weight) {        
    var result = 0;

    if (mailType === "Letters (Stamped)") {
        if (weight <= 1) {
            result = 0.49;
        } else if (weight > 1 && weight <= 2) {
            result = 0.70;
        } else if (weight > 2 && weight <= 3) {
            result = 0.91;
        } else {
            result = 1.12;
        }
    } else if (mailType === "Letters (Metered)") {
        if (weight <= 1) {
            result = 0.46;
        } else if (weight > 1 && weight <= 2) {
            result = 0.67;
        } else if (weight > 2 && weight <= 3) {
            result = 0.88;
        } else {
            result = 1.09;
        }
    } else if (mailType === "Large Envelopes (Flats)") {
        if (weight <= 1) {
            result = 0.98;
        } else if (weight > 1 && weight <= 2) {
            result = 1.19;
        } else if (weight > 2 && weight <= 3) {
            result = 1.40;
        } else if (weight > 3 && weight <= 4) {
            result = 1.61;
        } else if (weight > 4 && weight <= 5) {
            result = 1.82;
        } else if (weight > 5 && weight <= 6) {
            result = 2.03;
        } else if (weight > 6 && weight <= 7) {
            result = 2.24;
        } else if (weight > 7 && weight <= 8) {
            result = 2.45;
        } else if (weight > 8 && weight <= 9) {
            result = 2.66;
        } else if (weight > 9 && weight <= 10) {
            result = 2.87;
        } else if (weight > 10 && weight <= 11) {
            result = 3.08;
        } else if (weight > 11 && weight <= 12) {
            result = 3.29;
        } else {
            result = 3.50;
        }
    } else {
        if (weight <= 1) {
            result = 6.65;
        } else if (weight > 1 && weight <= 2) {
            result = 7.20;
        } else if (weight > 2 && weight <= 3) {
            result = 7.80;
        } else if (weight > 3 && weight <= 4) {
            result = 8.50;
        } else if (weight > 4 && weight <= 5) {
            result = 9.85;
        } else if (weight > 5 && weight <= 6) {
            result = 10.40;
        } else if (weight > 6 && weight <= 7) {
            result = 11.05;
        } else if (weight > 7 && weight <= 8) {
            result = 11.40;
        } else if (weight > 8 && weight <= 9) {
            result = 11.90;
        } else if (weight > 9 && weight <= 10) {
            result = 12.65;
        } else if (weight > 10 && weight <= 11) {
            result = 13.50;
        } else if (weight > 11 && weight <= 12) {
            result = 14.25;
        } else if (weight > 12 && weight <= 13) {
            result = 15.10;
        } else if (weight > 13 && weight <= 14) {
            result = 16.00;
        } else if (weight > 14 && weight <= 15) {
            result = 16.70;
        } else if (weight > 15 && weight <= 16) {
            result = 17.20;
        } else if (weight > 16 && weight <= 17) {
            result = 17.95;
        } else if (weight > 17 && weight <= 18) {
            result = 18.30;
        } else if (weight > 18 && weight <= 19) {
            result = 18.80;
        } else if (weight > 19 && weight <= 20) {
            result = 19.60;
        } else if (weight > 20 && weight <= 21) {
            result = 20.25;
        } else if (weight > 21 && weight <= 22) {
            result = 20.75;
        } else if (weight > 22 && weight <= 23) {
            result = 21.20;
        } else if (weight > 23 && weight <= 24) {
            result = 21.70;
        } else if (weight > 24 && weight <= 25) {
            result = 22.55;
        } else if (weight > 25 && weight <= 26) {
            result = 23.50;
        } else if (weight > 26 && weight <= 27) {
            result = 24.20;
        } else if (weight > 27 && weight <= 28) {
            result = 24.95;
        } else if (weight > 28 && weight <= 29) {
            result = 25.70;
        } else if (weight > 29 && weight <= 30) {
            result = 26.45;
        } else if (weight > 30 && weight <= 31) {
            result = 27.25;
        } else if (weight > 31 && weight <= 32) {
            result = 27.55;
        } else if (weight > 32 && weight <= 33) {
            result = 28.00;
        } else if (weight > 33 && weight <= 34) {
            result = 28.25;
        } else if (weight > 34 && weight <= 35) {
            result = 28.55;
        } else if (weight > 35 && weight <= 36) {
            result = 28.85;
        } else if (weight > 36 && weight <= 37) {
            result = 29.15;
        } else if (weight > 37 && weight <= 38) {
            result = 29.45;
        } else if (weight > 38 && weight <= 39) {
            result = 29.75;
        } else {
            result = 30.10;
        }
    }
    var params = {mailType: mailType , weight:weight , result:result};
	response.render ('result', params);
}