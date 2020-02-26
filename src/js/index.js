// https://github.com/alvarotrigo/fullpage.js
new fullpage('#container');

// https://github.com/Mobius1/Pageable
// new Pageable('#container', {
//   animation: 700,
//   events: {
//     wheel: true,
//     mouse: false,
//     touch: true,
//     keydown: true,
//   },
// });


// Toggle active class
function toggleClass(trigger, toggleClassName) {
  const items = document.querySelectorAll(trigger);

  if (items && items.length) {
    for (let link of items) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const tClass = this.dataset.toggleClass;
        const wrapIdentify = this.dataset.toggleWrap;
        let wrapToggleClass = 'active';

        if (toggleClassName && toggleClassName.length) {
          wrapToggleClass = toggleClassName;
        } else if (tClass && tClass.length) {
          wrapToggleClass = tClass;
        }

        this.classList.toggle(wrapToggleClass);

        if (wrapIdentify) {
          const wrap = document.querySelector(wrapIdentify);

          if (wrap) {
            wrap.classList.toggle(wrapToggleClass);
          }
        }
      });
    }
  }
}

function scrollInBlock() {
  const wrap = document.getElementById('blockWithScroll');
  const prev = document.getElementById('scrollBtnPrev');
  const next = document.getElementById('scrollBtnNext');

  next.addEventListener('click', function () {
    wrap.scrollBy(0, 100);
  });

  prev.addEventListener('click', function () {
    wrap.scrollBy(0, -100);
  });
}

// Document ready function
document.addEventListener("DOMContentLoaded", function() {
  toggleClass('[data-toggle-wrap]');
  toggleClass('[data-toggle-class]');
  scrollInBlock();
});
