//
// const geoCode = (address, callback) => {
//
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         };
//
//         callback(data);
//
//     }, 3000);
// };
//
//
// geoCode("maadi", (data) => {
//     console.log(data);
// });


const add = (a, b, sumCallback) => {
   setTimeout(() => {
       sumCallback(a + b);
   }, 2000);
};

add(10, 25, (sum) => {
    console.log(sum);
});