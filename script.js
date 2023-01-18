const hestehov = "hestehov.jpg"
const pasjonsblomst = "pasjonsblomst.jpg"
const engletrompet = "engletrompet.jpg"


function showPic(img, index) {
    let random = Math.random(); 
    random = Math.floor(random * 3);
    if (random == 0){
        img.innerHTML = "<img id=\"image_" + index + "\" class=\"box\" src=\"" + hestehov + "\">";
    }else if (random == 1) {
        img.innerHTML = "<img id=\"image_" + index + "\" class=\"box\" src=\"" + pasjonsblomst + "\">";
    }else if (random == 2) {
        img.innerHTML = "<img id=\"image_" + index + "\" class=\"box\" src=\"" + engletrompet + "\">";
    }

}

function bildeNavn() {    
    let image_1 = document.getElementById("image_1")
    let image_2 = document.getElementById("image_2")
    let image_3 = document.getElementById("image_3")
    let navn = document.getElementById("navn")
    
    navn.innerHTML = ""
    
    if (image_1) {
        navn.innerHTML = image_1.getAttribute("src") + "<br>"
    }
    if (image_2) {
        navn.innerHTML += image_2.getAttribute("src") + "<br>"
    }
    if (image_3) {
        navn.innerHTML += image_3.getAttribute("src") + "<br>"
    }
}