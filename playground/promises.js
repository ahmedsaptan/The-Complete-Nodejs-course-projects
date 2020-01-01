const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 2, 3, 4, 5, 6]);
        reject("Error");
    }, 2000);
});


doWorkPromise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});