// Initialize and add map
function initmap () {
  // Your Location
  const loc = { lat: 6.858130, lng: 7.396800};

  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });

  //The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map});
}

// Sticky Menu Background
window.addEventListener('scroll', function() {
  if (window.scroll > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 75
      },
      800
    );
  }
});