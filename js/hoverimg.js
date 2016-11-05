$(function(){
  $(#'idimg').hover(function(){
    $('#idimg').attr('src', 'photo.jpg');
  },
  function(){
    $('#idimg').attr('src', 'selfpic.jpg');
  }
}
