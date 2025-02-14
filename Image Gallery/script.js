let fullImgBox= document.getElementById("fullImgBox")
let fullImg= document.getElementById("fullImg")
let Rotate= document.getElementsById("cancelBtn")
function openFullImg(pic){
    fullImgBox.style.display= "flex"
    fullImg.src = pic
}
function closeFullImg(){
fullImgBox.style.display= "none"
}

