const request = require('request');

var geocodeAddress = (address) => {
    var addressEncoded = encodeURIComponent(address);  
    return new Promise((resolve, reject)=>{
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded},+CA&key=AIzaSyAVD3WFJyIEVbMJAfRoRmJTXWi_827JHIw`,
            json: true
        },(error, response, body) => {
            if(error){
                reject('Unable to connect to google servers.');
            }
            else if (body.status === 'ZERO_RESULTS'){
                reject('Invalid location.');
            }
            else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
        });
    })  
    
};

geocodeAddress('xxxx').then((result) =>{
    console.log(result);
}, (errorMessage) => {
    console.log(errorMessage);
});