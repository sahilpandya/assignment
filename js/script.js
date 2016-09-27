import * as tweets from '../json/dump_data.json'
const tweetList = Object.assign({
   tweet: tweets
})

let data = tweetList.tweet.tweets;
let content = '';
let parentElement = document.getElementsByClassName('tweets-list')[0];
let collectionArray = [];
data.map((item) => {
  showTweetView(item);
});

function showTweetView(item) {
    content = `<div class="clearfix bg-white border-bottom tweets p2">
        <div class="col md-col-2">
          <a href="#">
            <img class="circle" src=${item.userImg} width="60" height="60" />
          </a>
        </div>
        <div class="col md-col-10">
            <div class="h3 inline name">
              <span>${item.markGreen ? `<i class="fa fa-retweet" aria-hidden="true"></i>` :'' }</span> ${item.name}
            </div>
            <div class="inline tweet-id">${item.id}</div>
            <div class="inline right tweet-time-before">2m</div>
            <p class="block clearfix tweet-detail">
                ${item.imgContentUrl !=="" ? `<a href="#"><img src=${item.imgContentUrl} class="fit"/></a>` : item.detail}
            </p>
            <p class="block clearfix tweet-share">
                <a href="#" class="inline mr1 text-decoration-none">
                    <i class="fa fa-share" aria-hidden="true"></i>
                </a>
                <a href="#" class="inline mr1 ml1 text-decoration-none">
                    <i class="fa fa-star" aria-hidden="true"></i>
                </a>
                <a href="#" class="inline mr1 ml1 text-decoration-none">
                  <i class="fa fa-retweet" aria-hidden="true"></i>
                  <span class="tweet-number">${item.retweetCount}</span>
                </a>
                <a href="#" class="inline mr1 ml1 text-decoration-none">
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                </a>
                <a href="#" class="inline right text-decoration-none">
                  <i class="fa fa-expand" aria-hidden="true"></i>
                </a>
            </p>
        </div>
    </div>`;
    var newdiv = document.createElement('div');
    newdiv.innerHTML = content;
    parentElement.appendChild(newdiv);
}
