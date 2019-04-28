const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)},+CA&key=AIzaSyAVD3WFJyIEVbMJAfRoRmJTXWi_827JHIw`;

axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address.')    
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/ef4f010e9fe2c4301bb870da418d9733/${lat},${lng}`;
    //console.log(response);
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response)=>{
    console.log(response.data.currently);
}).catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to the API server.');
    }
    else{
        console.log(e.message);
    } 
});