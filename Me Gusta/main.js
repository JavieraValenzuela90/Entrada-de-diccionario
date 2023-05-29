

var likeCount = document.getElementById("likeCount");
var count = 0;
function addLikes() {
    count++;
    likeCount.innerHTML = count;
}