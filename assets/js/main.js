/* Aurix Technologies — shared interactions. No dependencies. */
(function () {
  'use strict';

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Header dropdowns (click support for touch; hover handled in CSS)
  document.querySelectorAll('.dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 1023) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  // Generic tabs: [data-tabs] container with buttons [data-tab] and panels [data-panel]
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var btns = group.querySelectorAll('[data-tab]');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
        btn.setAttribute('aria-selected', 'true');
        group.querySelectorAll('[data-panel]').forEach(function (p) { p.classList.remove('active'); });
        var panel = group.querySelector('[data-panel="' + btn.getAttribute('data-tab') + '"]');
        if (panel) panel.classList.add('active');
      });
    });
  });

  // Accordions (FAQ + plugin deep-dives)
  document.querySelectorAll('.acc-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.acc-item');
      var group = btn.closest('.acc');
      var single = group && group.getAttribute('data-single') === 'true';
      if (single) {
        group.querySelectorAll('.acc-item').forEach(function (i) {
          if (i !== item) { i.classList.remove('open'); i.querySelector('.acc-btn').setAttribute('aria-expanded', 'false'); }
        });
      }
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  // Carousels: [data-carousel] with [data-track] slides and prev/next buttons
  document.querySelectorAll('[data-carousel]').forEach(function (car) {
    var track = car.querySelector('[data-track]');
    if (!track) return;
    var slides = track.children.length;
    var idx = 0;
    function go(i) {
      idx = (i + slides) % slides;
      track.scrollTo({ left: track.clientWidth * idx, behavior: 'smooth' });
    }
    var prev = car.querySelector('[data-prev]');
    var next = car.querySelector('[data-next]');
    if (prev) prev.addEventListener('click', function () { go(idx - 1); });
    if (next) next.addEventListener('click', function () { go(idx + 1); });
    // Testimonial auto-advance, pauses on hover/focus
    if (car.getAttribute('data-auto') === 'true') {
      var timer = setInterval(function () { go(idx + 1); }, 6000);
      car.addEventListener('mouseenter', function () { clearInterval(timer); });
      car.addEventListener('focusin', function () { clearInterval(timer); });
    }
  });

  // Leaderboard rank-by filter
  var rankSelect = document.getElementById('rankBy');
  var lbBody = document.getElementById('leaderboardBody');
  if (rankSelect && lbBody) {
    var rows = Array.prototype.slice.call(lbBody.querySelectorAll('tr'));
    rankSelect.addEventListener('change', function () {
      var key = rankSelect.value; // gain | followers | winrate
      var sorted = rows.slice().sort(function (a, b) {
        return parseFloat(b.dataset[key]) - parseFloat(a.dataset[key]);
      });
      sorted.forEach(function (r, i) {
        r.querySelector('.rank-cell').textContent = '#' + (i + 1);
        lbBody.appendChild(r);
      });
    });
  }

  // Challenge picker (prop firm)
  document.querySelectorAll('[data-challenge]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('[data-challenge]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      btn.setAttribute('aria-pressed', 'true');
      var out = document.getElementById('challengeSummary');
      if (out) out.textContent = btn.getAttribute('data-summary') || '';
    });
  });

  // Animated counters
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / 1200, 1);
          el.textContent = Math.round(target * p).toLocaleString() + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { io.observe(c); });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); rio.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (r) { rio.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add('visible'); });
  }

  // Contact form — front-end only, no backend
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = document.getElementById('formOk');
      if (ok) ok.style.display = 'block';
      form.reset();
    });
  }
})();
