gsap.registerPlugin(ScrollTrigger)

//LANGUAGES SECTION SETTINGS
//TITLE ANIM
gsap.to('.title', {
  scrollTrigger: {
    trigger: '.home',
    start: 'bottom 500px',
    end: 'bottom 200px ',
    scrub: 1
  },
  x: 0,

  duration: 6,
  ease: 0.2
})

//TITLE UNDERLINE ANIM
gsap.to('.title-ul', {
  scrollTrigger: {
    trigger: '.first-section',
    start: 'top center',
    end: 'top 200 ',
    scrub: 1
  },
  x: 0,
  opacity: 1,

  duration: 12,
  ease: 0.2
})

//SEEN LANGUAGES ANIM
gsap.to('.seen', {
  scrollTrigger: {
    trigger: '.languages',
    start: 'top 300px',
    end: 'top 100px',
    scrub: 1
  },
  x: -400
})

//CURRENT LANGUAGE ANIM
gsap.to('.current', {
  scrollTrigger: {
    trigger: '.current',
    start: 'top 450px',
    end: 'top 190px',
    scrub: 1
  },
  x: 0,
  y: 10,
  scale: 1.3
})


//SCROLL REVEAL STANDARDS

ScrollReveal({ reset: true })

var slideUp = {
  distance: '150%',
  origin: 'bottom',
  opacity: null
}

var appear = {
  opacity: 0
}

var scrollHighlight = {
  opacity: 1
}

var slideRight = {
  distance: '200%',
  origin: 'left',
  opacity: 1
}
//WELCOME TO MY PORTIFOLIO REVEAL
ScrollReveal().reveal('.welcome', { delay: 1400 }, slideUp)

//STICKY PROJECTS SECTION

//SHOW STICKY PROJECTS SECTION ANIM
gsap.to('.projects', {
  scrollTrigger: {
    trigger: '.projects',
    start: 'top bottom-=100',
    end: 'top 200px',
   
    scrub: 1
  },
  opacity: 1
})

//HIDE STICKY PROJECTS SECTION ANIM
gsap.to('.projects', {
  scrollTrigger: {
    trigger: '.projects',
    start: 'bottom bottom-=200',
    end: 'bottom-=50 200px',
    scrub: true
  },
  opacity: 0
})
/*gsap.to('.projects', {
  scrollTrigger: {
    trigger: '.third-content',
    start: 'bottom-=500 center',
    end: 'bottom top',
    endTrigger: '.social',
    scrub: 1,
    markers: true
  },
  opacity: 0
}) */


//SHOW FIRST HEADER TAB
gsap.to('.sticky-first', {
  scrollTrigger: {
    trigger: '.first-content',
    start: 'bottom 550px',
    end: 'top 300px',
    scrub: 1
  },
  opacity: 1
})

//SHOW SECOND HEADER TAB
gsap.to('.sticky-second', {
  scrollTrigger: {
    trigger: '.second-content',
    start: 'bottom 550px',
    end: 'top 300px',
    scrub: 1
  },
  opacity: 1
})

//SHOW THIRD HEADER TAB
gsap.to('.sticky-third', {
  scrollTrigger: {
    trigger: '.third-project',
    start: 'bottom 580px',
    end: 'top 350px',
    scrub: 1
  },
  opacity: 1
})




// keep at bottom
ScrollTrigger.create({
  trigger: '.sticky-first',
  start: 'top bottom-=123',
  endTrigger: '.first-content',
  end: 'bottom bottom-=85',
  pin: true,
  pinSpacing: false
})

//first header handling
// keep at top
ScrollTrigger.create({
  trigger: '.sticky-first',
  start: 'top top+=80',
  endTrigger: '.social',
  end: 'bottom bottom',
  pin: true,
  pinSpacing: false
})

// Second header handling
// keep at bottom

ScrollTrigger.create({
  trigger: '.sticky-second',
  start: 'top bottom-=62',
  endTrigger: '.second-content',
  end: 'bottom bottom-=60',
  pin: true,
  pinSpacing: false
})

// keep at top
ScrollTrigger.create({
  trigger: '.sticky-second',
  start: 'top top+=138',
  endTrigger: '.social',
  end: 'bottom bottom',
  pin: true,
  pinSpacing: false
})

ScrollTrigger.create({
  trigger: '.sticky-third',
  start: 'top bottom',
  endTrigger: '.third-project',
  end: 'bottom bottom+=30',
  pin: true,
  pinSpacing: false
})

// keep at top
ScrollTrigger.create({
  trigger: '.sticky-third',
  start: 'top top+=190',
  endTrigger: 'html',
  end: 'bottom bottom',
  pin: true,
  pinSpacing: false
})


//FIRST PROJECT ANIM 
gsap.to('.fp-text', {
  scrollTrigger: {
    trigger: '.first-content',
    start: 'top center',
    end: 'top top',
    scrub: 1
  },
  y:120,
})

gsap.to('.fp-img', {
  scrollTrigger: {
    trigger: '.first-content',
    start: 'top center',
    end: 'top top',
    scrub: 1
  },
  y:120,
})

//SECOND PROJECT ANIM

gsap.to('.sp-text', {
  scrollTrigger: {
    trigger: '.second-content',
    start: 'top 350px',
    end: 'top 80px',
    scrub: 1
  },
  rotation: 90,
  y:-10
})

gsap.to('.tp-text', {
  scrollTrigger: {
    trigger: '.tp-text',
    start: 'top 450px',
    end: 'top 80px',
    markers: true,
    scrub: 1
  },
  rotation: 0,
  opacity: 1
})

 /*
///////////////MAIL///////////////////
 
const form = document.querySelector('.contact_form'),
      name = document.querySelector('.contact_name'),
      email = document.querySelector('.contact_email'),
      msg = document.querySelector('.contact_msg')

///////////// FUNCTION SEND //////////////

Email.send({
  
  SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
  To : 'them@website.com',
  From : "you@isp.com",
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(
message => alert(message)
);*/