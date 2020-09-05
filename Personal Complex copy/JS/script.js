var input =document.querySelector('input');
var p =document.querySelector('p');
var span =document.querySelector('span');
var button =document.querySelector('button');
let firstInput

button.addEventListener('click',description)

function description(){
  p.innerHTML = '';

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
      // console.log(data);
      var i=0;
      for(i in data.results[0].patient.reaction){
        console.log(data.results[0].patient.reaction[i]);
        // console.log(data.results[0].patient.reaction[i].reactionoutcome.reactionmeddrapt[i]);
        
        span.innerHTML += data.results[0].patient.reaction[i].reactionmeddrapt;
        // let table = document.querySelector('tableID');
        // let tr = document.createElement('tr')
        // let td = document.createElement('tr')
        // tr.appendChild('tr')
        // table.appendChild('tr')
        // td.innerHTML=data.results[0].patient.reaction[i].reactionmeddrapt;
        //

      // console.log(data.results[i].);
    }


      // span.innerHTML = data.results[0].patient.reaction[0].reactionmeddrapt;
    })
    // .catch(err => {
    //   alert("error")
    // })
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
