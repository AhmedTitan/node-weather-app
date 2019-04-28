const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.a, (error, results) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        weather.currentWeather(`${results.latitude},${results.longitude}`,(errorMessage, weatherResult)=>{
            if(error){
                console.log(errorMessage);
            }
            else{
                console.log(weatherResult);
            }
        });
    }
});



