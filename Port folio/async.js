let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holders: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
 }
// console.log('I want')
// console.log('to eat')
// setTimeout(() => {
//     console.log("ice cream")
// }, 2000);
// //console.log( "ice-cream")
// console.log('with')
// console.log('a spoon')


//---------PROCESSES ------//
//1. order from the customer
//2. fetch ingredients
//3. start production
//4. serve

//-----TIME-------//
// place order -2
 //cut the fruit - 2
 //add water and ice - 1
 //start the machine - 1
 //select container - 2
 //select toppings - 3
 //serve the ice-cream - 2

//  setTimeout( function(){
//     console.log('order placed')
//     setTimeout( function() {
//         console.log('cut the fruit')
//         setTimeout( function() {
//             console.log('add water and fruit')
//             setTimeout( function() {
//                 console.log('start the machine')
//                 setTimeout( function() {
//                     console.log('select container')
//                     setTimeout( function() {
//                         console.log('select toppings')
//                         setTimeout( function() {
//                             console.log('ice-cream served')
//                          },2000)
//                      },3000)
//                  },2000)
//              },1000)
//          },1000)
//      },2000)
//  },2000)

// let is_shop_open= true;
// function order(time,work){
//  return new Promise( function(resolve, reject){
//  if(is_shop_open) {
//     setTimeout(()=>{
//       resolve(work())
//     },time);
//  } else{
//     setTimeout (reject('shop is closed'),
//     10000);
//  }
//  })
// }
//  order(2000,function() {
//    console.log('order placed')
//  })
 
//  .then(function(value){
//     return order(2000, function (){
//       console.log('cut the fruits')
//     })
   
//  })
 
//  .then(function(value) {
//    return order(1000,function (){
//       console.log (`add ${stocks.liquid[0]} and ${stocks.liquid[1]}`)
//    })
// })
       
// .then(function(value) {
//    return order(1000,function (){
//       console.log(` ${stocks.holders[1]} was selected `)
//    })
// })
// .then(function(value) {
//    return order(1000,function (){
//       console.log(((` select machine`)))
//    })
// })
// .then(function(value) {
//    return order(1000,function (){
//       console.log(` I love ${stocks.toppings[1]} `)
//    })
// })
// .then(function(value) {
//    return order(2000,function (){
//       console.log("serve ice cream")
//    })
// })
//  .catch(function(error){
//  console.log('error')
//  });



let is_shop_open= true;
 function tim_e (time,x) {
   return new Promise(function (resolve, reject){
      if (is_shop_open) {
         setTimeout(() => {
            resolve(console.log(x))
         },time);
      } else {
         reject('shop is closed');
      }
   })
 }
 
 async function kitchen() {
   try{
      console.log('order placed')
      await tim_e(4000, "strawberry was selected")
      console.log('d')
      await tim_e(2000, "peanuts was selected")
      console.log('f')
   } catch(error){ 
   console.log(error)
 } finally{
   console.log('come home')
 }
 }
 kitchen()
