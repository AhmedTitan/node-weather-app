const request = require('request');

var geocodeAddress = (address, callback) => {
    var addressEncoded = encodeURIComponent(address);    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded},+CA&key=AIzaSyAVD3WFJyIEVbMJAfRoRmJTXWi_827JHIw`,
        json: true
    },(error, response, body) => {
        if(error){
            callback('Unable to connect to google servers.');
        }
        else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find that address.');
        }
        else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    });
};


module.exports.geocodeAddress = geocodeAddress;

//ef4f010e9fe2c4301bb870da418d9733
