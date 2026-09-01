/* ============================================================
   TALA INVITES — main.js
   talainvites@gmail.com · talainvites.co
   ============================================================
   TABLE OF CONTENTS
   1. Active Nav Link
   2. Portfolio Filter
   3. FAQ Accordion
   ============================================================ */


/* ============================================================
   1. ACTIVE NAV LINK
   Reads the current page filename and adds .active to the
   matching nav link automatically on every page.
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
   2. PORTFOLIO FILTER
   Filters portfolio cards by event category.
   Called from onclick on each filter button in portfolio.html
   ============================================================ */
function filterPortfolio(cat, btn) {
  // Update active button state
  document.querySelectorAll('.filter-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  // Show or hide cards based on data-cat attribute
  document.querySelectorAll('.port-card').forEach(function (card) {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}


/* ============================================================
   3. FAQ ACCORDION
   Opens and closes FAQ items on pricing.html
   Called from onclick on each .faq-q element
   ============================================================ */
function toggleFaq(el) {
  var item    = el.parentElement;
  var wasOpen = item.classList.contains('open');

  // Close all open items first
  document.querySelectorAll('.faq-item').forEach(function (i) {
    i.classList.remove('open');
  });

  // Re-open if it was previously closed
  if (!wasOpen) {
    item.classList.add('open');
  }
}
