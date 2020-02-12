// https://github.com/alvarotrigo/fullpage.js
// new fullpage('#container');

// https://github.com/Mobius1/Pageable
new Pageable('#container', {
  animation: 700,
  events: {
    wheel: true,
    mouse: true,
    touch: true,
    keydown: true,
  },
});
