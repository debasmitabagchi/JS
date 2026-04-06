// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// let myCreatedDate = new Date('2026-3-17')
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2026, 6 , 4 , 4 , 30 , 25)
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date('03-25-2026')
// console.log(myCreatedDate3.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); //in
// console.log(myCreatedDate3.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+ 1);
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());

// `${newDate.getDate()} and the time`

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    year: "numeric",
    timeZone: "UTC"
}));



