import { Api } from './api-call.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#search").click(function() {
    let character = $("#character").val();
    let api = new Api();
    api.call(character);
  });
});
