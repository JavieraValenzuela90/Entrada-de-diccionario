function increaseLikes(index) {
var likeCount = document.querySelectorAll(".likeCount")[index];
var count = parseInt(likeCount.innerHTML);
count++;
likeCount.innerHTML = count;
}
