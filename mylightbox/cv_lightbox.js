var cv_img = document.querySelector("#cv_img")
var cv_prev = document.querySelector(".cv_prev")
var cv_next = document.querySelector(".cv_next")
var numbertext = document.querySelector(".numbertext")
// var License_slide = document.querySelector(".License_slide")
var cv_lightbox = document.querySelector(".cv_lightbox")
var cv_close= document.querySelector(".cv_close")
var cv_wrapper= document.querySelector(".cv-wrapper")



cv_wrapper.onclick = function () {
    cv_lightbox.style ="display:block;"
    var n = 1;
    cv_prev.onclick = function () {
        n--;
        plusSubtract();

    }
    cv_next.onclick = function () {
        n++;
        plusSubtract();
    }
    function plusSubtract() {
        if (n < 1) {
            n = n + 10
            numbertext.innerHTML = n + "/10";
            cv_img.src = "img/履歷/" + n + ".jpg";

        } else if (n > 10) {
            n = n - 10;
            numbertext.innerHTML = n + "/10";
            cv_img.src = "img/履歷/" + n + ".jpg";

        }
        else {
            cv_img.src = "img/履歷/" + n + ".jpg";
            console.log(n)
            numbertext.innerHTML = n + "/10";
        }
    }
    cv_close.onclick = function () {
        cv_lightbox.style.display = "none";
    
    }
}
