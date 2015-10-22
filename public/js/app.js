console.log("app.js connected")

$('.nav-sidebar').on('click', 'li', function(event){
  $('li').removeClass('active')
  var $selected = event.target
  $(this).addClass('active')
})

function carouselNormalization() {
  var items = $('#myCarousel .slide-image'), //grab all slides
      heights = [], //create empty array to store height values
      tallest; //create variable to make note of the tallest slide
  var maxWidth = $(document).innerWidth()

  if (items.length) {
      function normalizeHeights() {
          items.each(function() { //add heights to array
              heights.push($(this).height()); 
          });
          var tallest = Math.max.apply(null, heights); //cache largest value
          
          items.each(function() {
              var width = $(this).width()
              var leftShift = (maxWidth - width) / 4
              $(this).css('min-height',tallest + 'px');
              // $(this).css('padding-left',leftShift + 'px');
          });
      };
      normalizeHeights();

      $(window).on('resize orientationchange', function () {
          tallest = 0, heights.length = 0; 
          maxWidth = $(document).innerWidth()
          items.each(function() {
              $(this).css('min-height','0'); //reset min-height
              // $(this).css('padding-left','0');
          }); 
          normalizeHeights(); //run it again 
      });
  }
}


function initializeMap() {
  var latLong = new google.maps.LatLng(40.77547, -73.474712)
  
  var mapProp = {
    center: latLong,
    zoom: 12,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker = new google.maps.Marker({
    position: latLong,
    title: "1 Carol Place, Plainview, NY"
  });

  marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initializeMap);

$(document).ready(carouselNormalization())



// carouselNormalization()