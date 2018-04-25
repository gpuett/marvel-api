import $ from 'jquery';

class Api {
  call(character) {
    $.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${character}&apikey=${process.env.API_KEY}`).then(function(response) {
      $('.character').html(`<div><img src="${response.data.results[0].thumbnail.path}.jpg"><p>${response.data.results[0].description}</p></div>`);
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
    let random = Math.floor(Math.random() * (20 - 0));
    $.get(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${character}&apikey=${process.env.API_KEY}`).then(function(response) {
      $('.comic').html(`<div><img src="${response.data.results[random].thumbnail.path}.jpg"><p>${response.data.results[random].description}</p></div>`);
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }
}

export { Api };
