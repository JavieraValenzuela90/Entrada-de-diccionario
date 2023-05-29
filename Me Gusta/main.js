

var likeCount = document.getElementById("likeCountOne");
var count = 0;
function addLikes() {
    count++;
    likeCount.innerHTML = count;
}