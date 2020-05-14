console.clear()

/*Loading script */
function hideLoader() {
    $('#loading').hide();
}

$(window).ready(hideLoader);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 20 * 1000);



/*Nav background user change */
const x = document.querySelector("nav")
const bgnav = getComputedStyle(x, null).getPropertyValue("background-color")

x.style.backgroundColor = "transparent"

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
        $('.fixed-top').css('background', "transparent");
    } else {
        $('.fixed-top').css('background', bgnav);
    }
});


/* nav highlighter */
const home = document.querySelector("#h")
const about = document.querySelector("#a")
const news = document.querySelector("#n")
const portfolio = document.querySelector("#p")
const contact = document.querySelector("#c")


home.onclick = function () {

    if ("active" == home.classList[1]) {
        // Pass
    } else {
        home.classList.add("active")
    }

    let all = [about, news, portfolio, contact]
    for (let i = 0; i <= 3; i++) {
        try {
            all[i].classList.remove("active")
        } catch (e) {
            console.log(e)
        }

    }

}
about.onclick = function () {

    if ("active" == about.classList[1]) {
        // Pass
    } else {
        about.classList.add("active")
    }

    let all = [home, news, portfolio, contact]
    for (let i = 0; i <= 3; i++) {
        try {
            all[i].classList.remove("active")
        } catch (e) {
            console.log(e)
        }

    }

}
news.onclick = function () {

    if ("active" == news.classList[1]) {
        // Pass
    } else {
        news.classList.add("active")
    }

    let all = [home, about, portfolio, contact]
    for (let i = 0; i <= 3; i++) {
        try {
            all[i].classList.remove("active")
        } catch (e) {
            console.log(e)
        }

    }

}
portfolio.onclick = function () {

    if ("active" == portfolio.classList[1]) {
        // Pass
    } else {
        portfolio.classList.add("active")
    }

    let all = [home, about, news, contact]
    for (let i = 0; i <= 3; i++) {
        try {
            all[i].classList.remove("active")
        } catch (e) {
            console.log(e)
        }

    }

}
contact.onclick = function () {

    if ("active" == contact.classList[1]) {
        // Pass
    } else {
        contact.classList.add("active")
    }

    let all = [home, about, news, portfolio]
    for (let i = 0; i <= 3; i++) {
        try {
            all[i].classList.remove("active")
        } catch (e) {
            console.log(e)
        }

    }

}

/* /nav highlighter */

/* /nav menu */
const ico = document.querySelector("#menuico")
const func1 = () => {
    console.log(ico.classList)
    if (ico.classList[1] == "fa-caret-down") {
        ico.classList.remove("fa-caret-down")
        ico.classList.add("fa-caret-up")
    } else {
        ico.classList.remove("fa-caret-up")
        ico.classList.add("fa-caret-down")
    }
}
ico.addEventListener("click", func1)
/* /nav menu */


/* Drops */
$(document).ready(function () {
    $("#home").ripples();
})
/* /Drops */


/* port and skill exchange */
const portfolioLink = document.querySelector(".gotoskill")
const skillLink = document.querySelector(".gotoport")


portfolioLink.onmouseover = function () {
    portfolioLink.style.opacity = 0;

    setTimeout(() => {
        portfolioLink.innerHTML = `View My Skills &ensp; <i class="fa fa-angle-double-right animated infinite shake slower"></i>`
        portfolioLink.style.opacity = 1;
    }, 500);
    portfolioLink.style.color = "#1E6ADD";
}
portfolioLink.onmouseout = function () {
    portfolioLink.style.opacity = 0;
    setTimeout(() => {
        portfolioLink.innerHTML = `Portfolio &emsp; <i class="fa fa-angle-double-right animated infinite shake slower"></i>`
        portfolioLink.style.opacity = 1;
    }, 500);
    portfolioLink.style.color = "#212529";

}

skillLink.onmouseover = function () {
    skillLink.style.opacity = 0;

    setTimeout(() => {
        skillLink.innerHTML = `<i class="fa fa-angle-double-left animated infinite shake slower"></i> &ensp;View My Portfolio`
        skillLink.style.opacity = 1;
    }, 500);
    skillLink.style.color = "#1E6ADD";
}
skillLink.onmouseout = function () {
    skillLink.style.opacity = 0;
    setTimeout(() => {
        skillLink.innerHTML = `<i class="fa fa-angle-double-left animated infinite shake slower"></i> &emsp; My Skills</a>`
        skillLink.style.opacity = 1;
    }, 500);
    skillLink.style.color = "#212529";

}

/* / port and skill exchange */