const tweet = document.getElementById("tweet");
const btnTweet = document.getElementById("btnTweet");
const tweetLists = document.getElementById("tweetLists");

btnTweet.addEventListener("click", () => {
  const tweetValue = tweet.value;

  const tweetContainer = document.createElement("div");
  const newTweet = document.createElement("p");
  const user = document.createElement("p");

  newTweet.textContent = tweetValue;
  user.textContent = "@rzkyalmf";

  tweetContainer.classList.add(["tweetContainer"]);
  user.classList.add(["username"]);

  tweetContainer.append(newTweet, user);
  tweetLists.prepend(tweetContainer);

  tweet.value = "";
});
