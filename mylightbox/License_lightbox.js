var License_img = document.querySelector("#License_img")
var License_prev = document.querySelector(".License_prev")
var License_next = document.querySelector(".License_next")
var License_numbertext = document.querySelector(".License_numbertext")
// var License_slide = document.querySelector(".License_slide")
var License_lightbox = document.querySelector(".License_lightbox")
var License_close= document.querySelector(".License_close")
var License_swiper= document.querySelector("#License_swiper")



License_swiper.onclick = function () {
    License_lightbox.style ="display:block;"
    var n = 1;
    License_prev.onclick = function () {
        n--;
        plusSubtract();

    }
    License_next.onclick = function () {
        n++;
        plusSubtract();
    }
    function plusSubtract() {
        if (n < 1) {
            n = n +10
            License_numbertext.innerHTML = n + "/10";
            License_img.src = "img/證照/" + n + ".jpg";

        } else if (n > 10) {
            n = n - 10;
            License_numbertext.innerHTML = n + "/10";
            License_img.src = "img/證照/" + n + ".jpg";

        }
        else {
            License_img.src = "img/證照/" + n + ".jpg";
            console.log(n)
            License_numbertext.innerHTML = n + "/10";
        }
    }
    License_close.onclick = function () {
        License_lightbox.style.display = "none";
    
    }
}
