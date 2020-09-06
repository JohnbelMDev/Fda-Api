var input = document.querySelector('input');
var p = document.querySelector('p');
var span = document.querySelector('span');
var button = document.querySelector('button');
var tableID = document.getElementById('tableID');
//set listener for submit button
button.addEventListener('click', description)
// tabledata.innerHTML=''
function description() {
  // resetting span and the tableID
  span.innerHTML = '';
  tableID.innerHTML='';
// *************************************/
// fetching the dictionary data from owlbot
  fetch(`https://owlbot.info/api/v4/dictionary/${input.value}`, {
    // setting the headers for the access keys
      headers: {
      /* setting my access keys for my authorization properties */
        Authorization: 'Token  c5d876ce890785effcd7b80c519b2d3b9c9547b9'
      }
    })
    .then(response => response.json())
    .then(data => { //get data back
      console.log(input);
      p.innerHTML = "Definition: " + data.definitions[0].definition;
    })
    // setting answer to input for grabbing the input of the first fetch to the second fetch
  let answer = input
  /* fetching data from the fda */
  fetch(`https://api.fda.gov/drug/event.json?search=patient.reaction.reactionmeddrapt:${/* this will be determined by the first input to show the Symptons */answer.value}+AND+occurcountry:"ca"&limit=1`)
    .then(responce => responce.json())
    .then(data => {
      console.log(data);
   /* creating a table row elements for the table */
    let tr = document.createElement('tr');
    /* creating table data elements for the table */
    let td = document.createElement('td');
    // let h3 = document.getElementsByTagName('h3')
    // creating the h3 elements via javascript rather than the dom
    let h3 = document.createElement('h3');
    // display the h3 headers
    h3.innerHTML= 'Symptons';
    // display the h3 header to the span
    span.appendChild(h3)

      // looping through the reaction
      for (var i in data.results[0].patient.reaction) {
        let tablerow = document.createElement('tr')
        let tabledata= document.createElement('td')
        tablerow.appendChild(tabledata);
        tableID.appendChild(tablerow)
        tabledata.innerHTML = data.results[0].patient.reaction[i].reactionmeddrapt;
      }
    })
}
