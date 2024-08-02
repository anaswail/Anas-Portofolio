// change count on load
let number = document.getElementById("number");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let number4 = document.getElementById("number4");
let number5 = document.getElementById("number5");
let number6 = document.getElementById("number6");
let number7 = document.getElementById("number7");

let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;

// Menu Toggle

const menu = document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("left-6");
  document.querySelector("nav").classList.toggle("-left-24");
  document.querySelector(".menu").classList.toggle("fa-angle-left");
});

// window onscroll
let navLeft = document.querySelector('.left-nav');
let upButton = document.querySelector(".upButton");
let navItems = document.querySelectorAll('.navItem');
let info = document.querySelector('.info')
let prograssBar = document.querySelectorAll('circle')
let skills = document.querySelector(".skills-icon");
let services = document.querySelector('.services-icon');
let projects = document.querySelector('.projects-icon');
let contact = document.querySelector('.fa-phone-volume');
let animateSec = document.querySelectorAll('.animateSec');

// Default on Scroll

if (scrollY < 600) {
  navLeft.classList.add("remove");
  upButton.style.display = "none";

} else if (scrollY >= 600) {
  navLeft.classList.remove("remove");
  upButton.style.display = "block";
  navItems[0].classList.remove("active");

  if (scrollY >= 600 && scrollY < 1200) {
    info.classList.add("text-blue-600");
  } else {
    info.classList.remove("text-blue-600");
  }

  if (scrollY >= 1200 && scrollY < 2900) {
    skills.classList.add("text-blue-600");
    prograssBar.forEach((element) => {
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
    clearInterval();
    prograssBar.forEach((element) => {
      element.classList.remove("active");
    });
    skills.classList.remove("text-blue-600");
  }

  // section Active 
  if (scrollY >= 600 & scrollY < 1000) {
    navItems[1].classList.add("active");
  } else {
    navItems[1].classList.remove("active");
  }

  if (scrollY >= 1000 & screenY < 2800) {
    navItems[2].classList.add("active");
  } else {
    navItems[2].classList.remove("active");
  }

  if (scrollY >= 2800 & scrollY < 4600) {
    navItems[3].classList.add("active");
  } else {
    navItems[3].classList.remove("active");
  }

  if (scrollY >= 4600 && scrollY < 9000) {
    navItems[4].classList.add("active");
  } else {
    navItems[4].classList.remove("active");
  }


  let contactSection = document.getElementById('contact');
    if(scrollY >= contactSection.offsetTop - 200) {
      upButton.classList.add('active');
      contact.classList.add("text-blue-600");
      navItems[4].classList.add("active");

    } 
    else{
      upButton.classList.remove('active');
      contact.classList.remove("text-blue-600");
      navItems[4].classList.remove("active");
    }

}

window.onscroll = () => {
  // animation when window scroll
  animateSec.forEach((el)=>{
    let top = window.scrollY;
    let offset = el.offsetTop - 250;
    let height = el.offsetHeight;

    if(top >= offset && top < offset + 500 + height) {
      el.classList.add('animate');
    }
    else{
      el.classList.remove('animate');
    }
  })

  if (scrollY < 600) {
    navLeft.classList.add("remove");
    upButton.style.display = "none";
    
    // home
    navItems[0].classList.add("active");
    // info
    navItems[1].classList.remove("active");

  } else if (scrollY >= 600) {
    upButton.style.display = "block";
    upButton.addEventListener("click", () => {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    navLeft.classList.remove("remove");

    // home
    navItems[0].classList.remove("active");

    // info active onscroll
    if (scrollY >= 600 && scrollY < 1000) {
      info.classList.add("text-blue-600");
      navItems[1].classList.add("active");

    } else {
      info.classList.remove("text-blue-600");
      navItems[1].classList.remove("active");
    }

    // skills on scroll animation
    if (scrollY >= 800 && scrollY < 4000) {
      prograssBar.forEach((element) => {
        element.classList.add("active");
      });
    }
    else{
      prograssBar.forEach((element) => {
        element.classList.remove("active");
      });
    }

    // skills on scroll active 
    if (scrollY >= 1000 && scrollY < 2800) {
      navItems[2].classList.add("active");
    } else {
      navItems[2].classList.remove("active");
      skills.classList.remove("text-blue-600");
    }
    if (scrollY >= 1000 && scrollY < 1700) {
      skills.classList.add("text-blue-600");
    } else {
      skills.classList.remove("text-blue-600");
    }

    // services active on scroll
    if (scrollY >= 2800 && scrollY < 4600) {
      navItems[3].classList.add("active");
    } else {
      navItems[3].classList.remove("active");
    }
    // services active on scroll
    if (scrollY >= 1700 && scrollY < 2200) {
      services.classList.add("text-blue-600");
    } else {
      services.classList.remove("text-blue-600");
    }

    // projects active on scroll

    let projectSection = document.getElementById('projects');
    if(scrollY >= projectSection.offsetTop - 200){
      projects.classList.add("text-blue-600");
      navItems[4].classList.add("active");

    }
    else{
      projects.classList.remove("text-blue-600");
      navItems[4].classList.remove("active");

    }

    let contactSection = document.getElementById('contact');
    if(scrollY >= contactSection.offsetTop - 200) {
      upButton.classList.add('active');
      contact.classList.add("text-blue-600");
      navItems[5].classList.add("active");
      projects.classList.remove("text-blue-600");

    } 
    else{
      upButton.classList.remove('active');
      contact.classList.remove("text-blue-600");
      navItems[5].classList.remove("active");
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


// send massage to whatsapp

function sendWhatsapp () {
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phoneNumber').value;
  let mail = document.getElementById('email').value;
  let msg = document.getElementById('msg').value;
  let send = document.querySelector('.submitButton');
  let myNumber = "+201050305754";

  var url = "https://wa.me/" + myNumber + "?text="
  + "Name : " +name+ "%0a"
  + "=============" + "%0a"
  + "Phone : " +phone+ "%0a"
  + "=============" + "%0a"
  + "Email : " +mail+ "%0a"
  + "=============" + "%0a"
  + "Massage : " +msg+ "%0a%0a";
  name = "";
  phone = "";
  mail = "";
  msg = "";
  window.open(url, "_blank").focus();
  location.reload();

}
