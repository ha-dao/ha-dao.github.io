(function($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");

  toggle.addEventListener("click", function(e) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  });

  close.addEventListener("click", function(e) {
    menu.classList.remove("open");
  });

  // Close menu after click on smaller screens
  $(window).on("resize", function() {
    if ($(window).width() < 846) {
      $(".main-menu a").on("click", function() {
        menu.classList.remove("open");
      });
    }
  });





	// Add class to mailto link
	// Needed to separate the disabling of the default action AND copy email to clipboard
	$('a[href^=mailto]').addClass('mailto-link');

  var mailto = $('.mailto-link');
	var messageCopy = 'Click to copy email address';
	var messageSuccess = 'Email address copied to clipboard';

// Disable opening your email client
$('a[href^=mailto]').click(function() {
  return false; 
})

// On click, get href and remove 'mailto:' from value
// Store email address in a variable.
mailto.click(function() {
  var href = $(this).attr('href');
  var email = href.replace('mailto:', '');
  copyToClipboard(email);
  $('.mailto-message').empty().append(messageSuccess);
  setTimeout(function() {
  $('.mailto-message').empty().append(messageCopy);}, 2000); 
});

// Copies the email variable to clipboard
function copyToClipboard(text) {
    var contactdata = document.createElement("input");
    document.body.appendChild(contactdata);
    contactdata.setAttribute('value', text);
    contactdata.select();
    document.execCommand('copy');
    document.body.removeChild(contactdata);
}


  $(".owl-carousel").owlCarousel({
    items: 4,
    lazyLoad: true,
    loop: true,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  $(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });
})(jQuery);
