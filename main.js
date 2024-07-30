// change count on load
let number = document.getElementById("number");
let count = 0;

let number2 = document.getElementById("number2");
let count2 = 0;

let number3 = document.getElementById("number3");
let count3 = 0;

let number4 = document.getElementById("number4");
let count4 = 0;

let number5 = document.getElementById("number5");
let count5 = 0;

let number6 = document.getElementById("number6");
let count6 = 0;

let number7 = document.getElementById("number7");
let count7 = 0;

// Menu Toggle

const menu = document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("left-6");
  document.querySelector("nav").classList.toggle("-left-24");
  document.querySelector(".menu").classList.toggle("fa-angle-left");
});

// window onscroll

window.onscroll = () => {
  if (scrollY < 600) {
    document.querySelector(".left-nav").classList.add("remove");
    document.querySelectorAll(".navItem")[0].classList.add("active");
    document.querySelectorAll(".navItem")[1].classList.remove("active");
    document.querySelector(".upButton").style.display = "none";
  } else if (scrollY >= 600) {
    document.querySelector(".upButton").style.display = "block";
    document.querySelector(".upButton").addEventListener("click", () => {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    document.querySelector(".left-nav").classList.remove("remove");

    document.querySelectorAll(".navItem")[0].classList.remove("active");

    if (scrollY >= 600 && scrollY < 1000) {
      document.querySelector(".fa-circle-info").classList.add("text-blue-600");
      document.querySelectorAll(".navItem")[1].classList.add("active");
    } else {
      document
        .querySelector(".fa-circle-info")
        .classList.remove("text-blue-600");
      document.querySelectorAll(".navItem")[1].classList.remove("active");
    }

    if (scrollY >= 1000 && scrollY < 2800) {
      document.querySelectorAll("circle").forEach((element) => {
        element.classList.add("active");
        document.querySelectorAll(".navItem")[2].classList.add("active");
      });
    } else {
      document.querySelectorAll("circle").forEach((element) => {
        element.classList.remove("active");
        document.querySelectorAll(".navItem")[2].classList.remove("active");
      });
      document.querySelector(".fa-icons").classList.remove("text-blue-600");
    }
    if (scrollY >= 1000 && scrollY < 1900) {
      document.querySelector(".fa-icons").classList.add("text-blue-600");
    } else {
      document.querySelector(".fa-icons").classList.remove("text-blue-600");
    }

    if (scrollY >= 2800 && scrollY < 4200) {
      document.querySelectorAll(".navItem")[3].classList.add("active");
    } else {
      document.querySelectorAll(".navItem")[3].classList.remove("active");
    }

    if (scrollY >= 1900 && scrollY < 3200) {
      document
        .querySelector(".fa-wand-magic-sparkles")
        .classList.add("text-blue-600");
    } else {
      document
        .querySelector(".fa-wand-magic-sparkles")
        .classList.remove("text-blue-600");
    }

    if (scrollY < 800) {
      count = 0;
      count2 = 0;
      count3 = 0;
      count4 = 0;
      count5 = 0;
      count6 = 0;
      count7 = 0;
      clearInterval();
    }
  }

  console.log(scrollY);
};
if (scrollY < 600) {
  document.querySelector(".left-nav").classList.add("remove");
} else if (scrollY >= 600) {
  document.querySelector(".left-nav").classList.remove("remove");

  if (scrollY >= 600 && scrollY < 1200) {
    document.querySelector(".fa-circle-info").classList.add("text-blue-600");
  } else {
    document.querySelector(".fa-circle-info").classList.remove("text-blue-600");
  }

  if (scrollY >= 1200 && scrollY < 2900) {
    document.querySelector(".fa-icons").classList.add("text-blue-600");
    document.querySelectorAll("circle").forEach((element) => {
      element.classList.add("active");
    });
    // change count on load
  } else {
    count = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count5 = 0;
    count6 = 0;
    count7 = 0;
    document.querySelectorAll("circle").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelector(".fa-icons").classList.remove("text-blue-600");
  }
}

setInterval(() => {
  if (count == 95) {
    clearInterval();
  } else {
    count += 1;
    number.innerHTML = count + "%";
  }
  if (count2 == 90) {
    clearInterval();
  } else {
    count2 += 1;
    number2.innerHTML = count2 + "%";
  }

  if (count3 == 70) {
    clearInterval();
  } else {
    count3 += 1;
    number3.innerHTML = count3 + "%";
  }

  if (count4 == 85) {
    clearInterval();
  } else {
    count4 += 1;
    number4.innerHTML = count4 + "%";
  }
  if (count5 == 60) {
    clearInterval();
  } else {
    count5 += 1;
    number5.innerHTML = count5 + "%";
  }

  if (count6 == 50) {
    clearInterval();
  } else {
    count6 += 1;
    number6.innerHTML = count6 + "%";
  }
  if (count7 == 65) {
    clearInterval();
  } else {
    count7 += 1;
    number7.innerHTML = count7 + "%";
  }
}, 20);
