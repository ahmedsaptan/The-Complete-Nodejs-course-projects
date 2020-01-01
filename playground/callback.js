const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('this is my error', undefined);
        callback(undefined, [1, 2, 3, 4])
    }, 3000);

};


doWorkCallback((error, result) => {
   if(error) {
       return console.log(error);
   }
    console.log(result);
});