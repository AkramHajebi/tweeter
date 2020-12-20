//const { text } = require("body-parser");

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {
  console.log( "ready!" );




  // Test / driver code (temporary). Eventually will get this from the server.
 /*  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

 */
const createTweetElement = function(tweet) {
  
  let days = Math.round((Date.now()-tweet.created_at)/ (24*60*60*1000));
  //return $tweet;
  return $(
    `<article>
    <header>
    <div>
      <div id='image'> <img src=${tweet.user.avatars}></div> 
      <span id='name'>${tweet.user.name}</span>
    </div>
    <span id='handle'>${tweet.user.handle}</span> 
  </header>
  <br>

  <article>
    <label for="tweet-text">Hello word</label>
    <textarea name="text" id="tweet-text">${tweet.content.text}</textarea>
  </article>

  <footer> 
      <div><span> ${days} days ago</span></div> 
      <div><img src="/images/profile-hex.png" width="50pxl" height="50pxl"> <br></div>
  </footer>  
</article>`
  )
}

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  for (const tweet of tweets) {

    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  
  }
  
}

//renderTweets(data);

const url = "http://localhost:8080/tweets";
//Function to load the tweets from url
const loadTweets = function() {
  $.ajax({
    url: url,
    method: 'GET'
  })
  .then((result) => {
    renderTweets(result);
    //console.log('hahhh')
  });
};

loadTweets();



  $('#tweetForm').on('submit', function(event){
  event.preventDefault();

  let messageTweet = $(this).serialize();

  $.ajax('/tweets', {method: 'POST', data: messageTweet})
    
  .then(function (data) {
    console.log($('#tweet-text').val());
  });



})


});
