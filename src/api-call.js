import $ from 'jquery';

class Api {
  call(character) {
    return $.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${character}&apikey=${process.env.API_KEY}`);
  }

  getRandomComic(character) {
  return $.get(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${character}&apikey=${process.env.API_KEY}`);
  }
}

export { Api };
