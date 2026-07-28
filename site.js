/* OXUS HOME — shared site script */
(function () {
  // Mobile menu
  var burger = document.querySelector('.burger');
  var mobile = document.querySelector('.mobile-menu');
  if (burger && mobile) {
    burger.addEventListener('click', function () {
      mobile.classList.toggle('open');
    });
  }

  // Dropdown: tap support on touch devices
  document.querySelectorAll('.dd > a').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      if (window.matchMedia('(hover: none)').matches) {
        e.preventDefault();
        trigger.parentElement.classList.toggle('open');
      }
    });
  });

  // Scroll reveal
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Accordion
  document.querySelectorAll('.acc-item button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.parentElement.classList.toggle('open');
    });
  });

  // RFQ form: sector pre-fill from ?sector= and product pre-fill from ?range=
  var params = new URLSearchParams(window.location.search);
  var sectorField = document.getElementById('f-sector');
  if (sectorField && params.get('sector')) {
    var map = { hotel: 'Hotel & Hospitality', care: 'Care Home', trade: 'Interior Designer & Trade' };
    var val = map[params.get('sector')];
    if (val) sectorField.value = val;
  }
  var needField = document.getElementById('f-need');
  if (needField && params.get('range')) {
    needField.value = 'Range of interest: ' + params.get('range') + '\n';
  }

  // RFQ form submit — sent via Web3Forms (https://web3forms.com), no backend required.
  var form = document.querySelector('form.rfq');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalLabel = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form)
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            var success = document.createElement('div');
            success.className = 'form-success';
            success.innerHTML =
              '<h3>Received — thank you.</h3>' +
              '<p>A real person will reply within one business day.</p>';
            form.parentNode.replaceChild(success, form);
            success.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } else {
            throw new Error(data.message || 'Submission failed');
          }
        })
        .catch(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
          var errorNote = form.querySelector('.form-error');
          if (!errorNote) {
            errorNote = document.createElement('p');
            errorNote.className = 'form-error';
            errorNote.style.cssText = 'grid-column:1/-1;color:#B3261E;font-size:14px;';
            form.appendChild(errorNote);
          }
          errorNote.textContent = 'Something went wrong sending this — please email hello@oxushome.co.uk instead, or try again in a moment.';
        });
    });
  }

  // Footer year
  document.querySelectorAll('.year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
