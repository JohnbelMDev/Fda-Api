var input =document.querySelector('input');
var p =document.querySelector('p');
var span =document.querySelector('span');
var button =document.querySelector('button');
let firstInput

button.addEventListener('click',description)

function description(){

fetch(`https://owlbot.info/api/v4/dictionary/${input.value}`, {
    headers: {
      Authorization: 'Token c5d876ce890785effcd7b80c519b2d3b9c9547b9'
    }
  })
  .then(response => response.json())
  .then( data => {

    console.log(data);
    input=data.definitions[0];
    console.log(data.definitions[0]);
    p.innerHTML = data.definitions[0].definition;
    // console.log(input);
    // Medical(input)
    // console.log(data[0].shortdef[0]);
  })
let answer = input
  fetch(`https://api.fda.gov/drug/event.json?search=patient.reaction.reactionmeddrapt:${answer.value}+AND+occurcountry:"ca"&limit=1`)
    .then(responce => responce.json())
    .then(data => {
      console.log(data);
      var i=0;
      for(i in data){
      console.log(data.results[i].patient.reaction);
    }
      span.innerHTML = data.results[0].patient.reaction[0].reactionmeddrapt;
    })


}


// var input =document.querySelector('input');
// var p =document.querySelector('p');
// var button =document.querySelector('button');
// // let input ="Anxiety"
// button.addEventListener('click',testApi)

// function Medical(){
//
// fetch(`https://api.fda.gov/drug/event.json?search=patient.reaction.reactionmeddrapt:${input.value}+AND+occurcountry:"ca"&limit=1`)
//   .then(responce => responce.json())
//   .then(data => {
//     console.log(data);
//     console.log(data.results[0].patient.reaction);
//   })
// }
