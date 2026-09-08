/* ============================================================
   TALA INVITES — main.js
   talainvites@gmail.com · talainvites.com
   ============================================================
   TABLE OF CONTENTS
   1. Active Nav Link
   2. Mobile Hamburger Menu
   3. Portfolio Filter
   4. FAQ Accordion
   ============================================================ */


/* ============================================================
   1. ACTIVE NAV LINK
   ============================================================ */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
})();


/* ============================================================
   2. MOBILE HAMBURGER MENU
   Toggles the mobile nav drawer open/closed.
   Called from onclick on .nav-hamburger button.
   ============================================================ */
function toggleMobileMenu() {
  var btn    = document.querySelector('.nav-hamburger');
  var drawer = document.querySelector('.nav-mobile-drawer');
  if (!btn || !drawer) return;
  var isOpen = drawer.classList.contains('open');
  btn.classList.toggle('open', !isOpen);
  drawer.classList.toggle('open', !isOpen);
  /* Prevent body scroll when drawer is open */
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMobileMenu() {
  var btn    = document.querySelector('.nav-hamburger');
  var drawer = document.querySelector('.nav-mobile-drawer');
  if (!btn || !drawer) return;
  btn.classList.remove('open');
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}


/* ============================================================
   3. PORTFOLIO FILTER
   ============================================================ */
function filterPortfolio(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  document.querySelectorAll('.port-card').forEach(function (card) {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}


/* ============================================================
   4. FAQ ACCORDION
   ============================================================ */
function toggleFaq(el) {
  var item    = el.parentElement;
  var wasOpen = item.classList.contains('open');

  document.querySelectorAll('.faq-item').forEach(function (i) {
    i.classList.remove('open');
  });

  if (!wasOpen) {
    item.classList.add('open');
  }
}
