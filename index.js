// let vel = document.getElementById('drop');
// // let option = vel.options[0]

// console.log(vel.options[0].innerText);



// let promise = new Promise((resolve,reject)=>{
//     let n = 70;
//     let factor =0;
//     for(i=1;i<=n;i++){
//       if(n%i===0){
//         factor++;
//       }
//     }
//     if(factor==2){
//         resolve(`${n} is prime`);
//     }
//     else{
//         reject(`${n} not prime`);
//     }

// })
// promise
// .then((prime)=>console.log(prime))
// .catch((err)=>console.log(err));


// count=1;
// for(i=0;i>7;i++){
//     console.log(i);
// }

// const API = 'c073c5dc3c99f3f41f048a6663aaeca6';
// function checkWeather(){ 
//     let cityInput = document.getElementById('name_city').value;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API}`

// fetch(url)
// .then(response => response.json())
// .then((data) => console.log(`${data.main.temp}`))
// .catch((err) => console.log(err))
// }


function clko(){
    let add = document.getElementById("boxre");
    let child = "";
    add.innerText = child;
    
}