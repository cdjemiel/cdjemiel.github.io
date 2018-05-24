// A $( document ).ready() block.
$( document ).ready(function() {
  // console.log($(this).closest('td').prev('.gsc_rsb_std').text());
  // console.log('test');
  $.get('https://scholar.google.fr/citations?user=Nm3Y4T0AAAAJ&hl=fr', function(data){
      var username = $('.gsc_rsb_std', data).text();
      console.log(username);
  });
});
