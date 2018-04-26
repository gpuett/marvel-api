import { Api } from './api-call.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#search").submit(function(event) {
    event.preventDefault();
    let character = $("#character").val();
    let api = new Api();
    let foundCharacter = api.call(character);
    foundCharacter.then(function(response) {
      $('.character').html(`<div><img src="${response.data.results[0].thumbnail.path}.jpg"><p>${response.data.results[0].description}</p></div>`);
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
    let randomComic = api.getRandomComic(character);
    randomComic.then(function(response) {
      let random = Math.floor(Math.random() * (20 - 0));
      $('.comic').html(`<div><img src="${response.data.results[random].thumbnail.path}.jpg"><p>${response.data.results[random].description}</p></div>`);
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
