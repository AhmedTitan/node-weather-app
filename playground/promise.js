var somePromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('Successful');
        reject('Fail');
    }, 2500);
});

somePromise.then((message) =>{
    console.log(message);
}, (errorMessage) =>{
    console.log(errorMessage);
});