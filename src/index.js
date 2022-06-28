import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './dinoService.js';
// User Interface Logic

$(document).ready(function () {
  $('#generateInput').click(function(event) {
    console.log("You clicked generate button");
    let paragraphs = $('#paragraphInput').val();
    let words = $("#wordInput").val();
    let promise = DinoService.getText(paragraphs,words);
    promise.then(function(response) {
      const output = JSON.parse(response);
      console.log(output);
      $('#dinoText').text(`${output}`);
    });
  });
});


