function main() {
	$('img').hide();
	$('p').hide();
	
	$('#post1').on('click', function(){
    $('.p1 img').show();
    $('#describe1').show();

    $('.p2 img').hide();
    $('.p3 img').hide();
    $('.p4 img').hide();

    $('#describe2').hide();
    $('#describe3').hide();
    $('#describe4').hide();

  });

	$('#post2').on('click', function(){
    $('.p2 img').show();
     $('#describe2').show();

    $('.p1 img').hide();
    $('.p3 img').hide();
    $('.p4 img').hide();

     $('#describe3').hide();
    $('#describe4').hide();
    $('#describe1').hide();
  });

	$('#post3').on('click', function(){
    $('.p3 img').show();
     $('#describe3').show();

    $('.p2 img').hide();
    $('.p1 img').hide();
    $('.p4 img').hide();

     $('#describe1').hide();
    $('#describe2').hide();
    $('#describe4').hide();
  });

	$('#post4').on('click', function(){
    $('.p4 img').show();
     $('#describe4').show();

    $('.p2 img').hide();
    $('.p1 img').hide();
    $('.p3 img').hide();

     $('#describe2').hide();
    $('#describe3').hide();
    $('#describe1').hide();
  });


}

$(document).ready(main);