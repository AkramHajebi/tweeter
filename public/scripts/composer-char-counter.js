$(document).ready(function() {
  // --- our code goes here ---
  //console.log('heloooooo');
  const newTweet=$('#tweet-text');
  let counter= $(".counter");
  console.log(counter.val);
  
  newTweet.on('keyup',function() {
    //console.log(this);
    //console.log($(this));
    //console.log('heloooooo');
    let textLength = $(this).val().length;
    console.log(textLength);
    /*if(textLength > 15){
    alert('Length is exceeded');
    //Do ur stuff;

  } */
  let leftChar = 140 - textLength;
  counter.val(leftChar);
  if (leftChar < 0) {
    counter.css('color','red');
   }
   else {
    counter.css('color','black');
   }
  
  });
});
