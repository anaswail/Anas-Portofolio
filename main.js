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
  } else if (scrollY >= 600) {
    document.querySelector(".left-nav").classList.remove("remove");

    if (scrollY >= 600 && scrollY < 1000) {
      document.querySelector(".fa-circle-info").classList.add("text-[#b6b5ca]");
    } else {
      document
        .querySelector(".fa-circle-info")
        .classList.remove("text-[#b6b5ca]");
    }

    if (scrollY >= 1000 && scrollY < 2000) {
      document.querySelector(".fa-icons").classList.add("text-[#ff6f00]");
      document.querySelectorAll("circle").forEach((element) => {
        element.classList.add("active");
      });

    } else {
      document.querySelectorAll("circle").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelector(".fa-icons").classList.remove("text-[#ff6f00]");
    }

    if(scrollY < 800){
        count = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0;
        count5 = 0;
        count6 = 0;
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
    document.querySelector(".fa-circle-info").classList.add("text-[#b6b5ca]");
  } else {
    document
      .querySelector(".fa-circle-info")
      .classList.remove("text-[#b6b5ca]");
  }

  if (scrollY >= 1200 && scrollY < 1800) {
    document.querySelector(".fa-icons").classList.add("text-[#ff6f00]");
    document.querySelectorAll("circle").forEach((element) => {
      element.classList.add("active");
    });
    // change count on load
  } else {
    count = 0;
    count2 = 0;
    count3 = 0;
    document.querySelectorAll("circle").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelector(".fa-icons").classList.remove("text-[#ff6f00]");
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
}, 20);
