console.log("Starting");


setTimeout(() => {
    console.log("after two seconds");
}, 2000);

setTimeout(() => {
    console.log("after zero seconds");
}, 0);
console.log("Stopping");