


gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline()

tl.from('header img', .8, {
  x: -300,
  ease: 'back.out(2)'
}).from('nav', .5, {
  x: 1000,
  ease: 'back.out(2)'
}).from('.content .left',.8, {
  x: -600,
  ease: 'back.out(2.7)'
}).from('.content .right',.8, {
  x: 700,
  ease: 'back.out(3)'
})


gsap.from('section h2',1, {
  x: 1200,
  ease: 'back.out(2)',
  scrollTrigger: {
    trigger: 'section h2',
    start: 'top 50%',
    end: 'top top',
    toggleActions: 'restart none restart none'
  }
})

gsap.from('section .searching',1, {
  x: -1200,
  ease: 'back.out(2)',
  scrollTrigger: {
    trigger: 'section .searching',
    start: 'top 50%',
    end: 'top top',
    toggleActions: 'restart none restart none'
  }
})

gsap.from('section .search-domin',1, {
  scale: 0,
  ease: 'back.out(2)',
  scrollTrigger: {
    trigger: 'section .search-domin',
    start: 'top 50%',
    end: 'top top',
    toggleActions: 'restart none restart none'
  }
})

gsap.from('.section-btn',1, {
  opacity: 0,
  ease: 'back.out(2)',
  scrollTrigger: {
    start: 570
  }
})

gsap.from('.quality .q-one',1, {
  x: -1500,
  stagger: .4,
  ease: 'back.out(2)',
  scrollTrigger: {
    start: 1150
  }
})

gsap.from('.checkout .head',.5, {
  opacity: 0,
  rotation: 180,
  stagger: .4,
  ease: 'back.out(2)',
  scrollTrigger: {
    start: 1900
  }
})

gsap.from('.checkout .boxes',1, {
  scale: 0,
  stagger: .4,
  ease: 'back.out(2)',
  scrollTrigger: {
    start: 2020
  }
})