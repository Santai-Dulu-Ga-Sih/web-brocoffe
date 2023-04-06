$(document).ready(function(){
  // saat tombol plus di klik
  $('.btn-plus').click(function(){
      // ambil nilai input
      var value = parseInt($('input[name="quantity"]').val());
      // tambahkan 1 ke nilai input
      value = isNaN(value) ? 0 : value;
      value++;
      $('input[name="quantity"]').val(value);
  });
  
  // saat tombol minus di klik
  $('.btn-minus').click(function(){
      // ambil nilai input
      var value = parseInt($('input[name="quantity"]').val());
      // kurangi 1 dari nilai input
      value = isNaN(value) ? 0 : value;
      if(value > 1){
          value--;
      }
      $('input[name="quantity"]').val(value);
  });
});

