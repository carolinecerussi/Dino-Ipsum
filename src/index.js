import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './dinoService.js';
// User Interface Logic

$(document).ready(function () {
  $('#generateInput').click(function(event) {
    let paragraphs = $('#paragraphInput').val();
    let words = $("#wordInput").val();
    let promise = DinoService.getText(paragraphs,words);
    promise.then(function(response) {
      const output = JSON.parse(response);
      // $('#dinoText').text(`${output}`);
      clearDinoText();
      output.forEach(function(paragraph) {
        const newP = document.createElement('p');
        let words = "";
        paragraph.forEach(function(word) {
          words += word + " ";
        })
        newP.innerText = words;
        $('#dinoText').append(newP);
      });
    });
  });

  function clearDinoText() {
    $('#dinoText').html("");
  }
});


/*

function WordInput (letter) {
  this.letter = letter;
}
--define letter --

wordInput= new ArrayInput 

wordInput  = [];
let guess =  [];
for (i = 0,i >= wordInput.length, i++) {
if (wordInput [i] = guess [i] ) {
  (true) 
  ().append($(letter). to specific index of guess input location
  
}
(if true - append the index varible when it is the same as the inputword )
if false - append wrong! try again +  function for  showing specific hidden image each false click







*/