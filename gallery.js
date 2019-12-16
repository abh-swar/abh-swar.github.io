$(document).ready(function () {
  // Initially hide the lightbox
  $('#gallery-lightbox-container').hide();
  // Exit lightbox button
  $('#exit-lightbox').click(function () {
    $('#gallery-lightbox-container').slideUp(200);
  });
  // Lightbox function #1
  function openLightbox1() {
    $('#lightbox-text').html('<p>Annual Conference Branding &amp; Collateral</p>');
    $('#lightbox-image').attr('src', '../images/gallery/2018-conference-display.jpg');
    $('#gallery-lightbox-container').slideDown(200);
  }
  // Lightbox function #2
  function openLightbox2() {
    $('#lightbox-text').html('<p>RER Solar Energy Full Website Redesign</p>');
    $('#lightbox-image').attr('src', '../images/gallery/rer-web-design-display.jpg');
    $('#gallery-lightbox-container').slideDown(200);
  }
  // Lightbox function #3
  function openLightbox3() {
    $('#lightbox-text').html('<p>The heART of Social Work, Social Event Branding &amp; Logo</p>');
    $('#lightbox-image').attr('src', '../images/gallery/heart-of-social-work-display.jpg');
    $('#gallery-lightbox-container').slideDown(200);
  }
  // Lightbox function #4
  function openLightbox4() {
    $('#lightbox-text').html('<p>Annual Legislative Education &amp; Advocacy Day, Event Branding &amp; Collateral</p>');
    $('#lightbox-image').attr('src', '../images/gallery/lead-program-display.jpg');
    $('#gallery-lightbox-container').slideDown(200);
  }
  // Lightbox function #5
  function openLightbox5() {
    $('#lightbox-text').html("<p>Check Out My Design Assets &amp; Products on <a target='_blank' style='color: #fff;' href='https://creativemarket.com/LinepupDesignCo'>Creative Market!</a></p>");
    $('#lightbox-image').attr('src', '../images/gallery/masking-tape-mega-pack-display.jpg');
    $('#gallery-lightbox-container').slideDown(200);
  }
  // Lightbox function #6
  function openLightbox6() {
    $('#lightbox-text').html("<p>Rad Ralph's Surf and Skate Logo Design</p>");
    $('#lightbox-image').attr('src', '../images/gallery/rad-ralphs-display.jpg');
    $('#gallery-lightbox-container').slideDown(200);
  }
  // Lightbox function #7
  function openLightbox7() {
    $('#lightbox-text').html("<p>Grow Through What You Go Through, Teeshirt Design</p>");
    $('#lightbox-image').attr('src', '../images/gallery/grow-through-display.jpg');
    $('#gallery-lightbox-container').slideDown(200);
  }
  // Lightbox function #8
  function openLightbox8() {
    $('#lightbox-text').html("<p>Business Card Design for Scratch Studios</p>");
    $('#lightbox-image').attr('src', '../images/gallery/scratch-business-cards-display.jpg');
    $('#gallery-lightbox-container').slideDown(200);
  }
  // Lightbox function #9
  function openLightbox9() {
    $('#lightbox-text').html("<p>24-32 page newsletter shipped tri-annually to over 5,00 recipients. I was proud to be designer and editor of the Pennsylvania Social Worker for roughly 3 years.</p>");
    $('#lightbox-image').attr('src', '../images/gallery/newsletter-display.jpg');
    $('#gallery-lightbox-container').slideDown(200);
  }
});