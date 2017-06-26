var clicks = 1;
$(document).ready(function() {
  console.log('js sourced2');

  $('#generate').on('click', function() {
    $('#container').append('<div class="newDiv"></div>');
    $('#container p').text((clicks));
    $('.newDiv').append('<p></p>',);
    $('p').append(clicks);
    $('p').append('<button id="swap">Swap</button>',
                '<button id="delete">Delete</button>');
    clicks +=1;
    console.log(clicks);
  })

  $('.newDiv #swap').on('click', function() {
    $(this).css({backgroundColor: 'yellow'});
  });
  $('#delete').on('click',function() {
    $(this).remove();
  });


});
