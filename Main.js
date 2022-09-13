// ------------ List numbers 1 to 100 (100 inclusive) ------------//
for (var i = 1; i < 101; i++) {

    if (i % 3 == 0 && i % 5 == 0){
      $('div').append('<li class="red">' + 'CracklePop' + '</li>');
    }
    else if (i % 5 == 0){
      $('div').append('<li class="green">' + 'Pop' + '</li>');
    }
    else if (i % 3 == 0){
      $('div').append('<li class="green">' + 'Crackle' + '</li>'); 
    }
    else {
      $('div').append('<li class="blue">' + i + '</li>');
    }
    
    console.log('we are in business');
}  