
 $(document).ready(function() {
$('.Starter_Screen').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    autoplay:true,
   });
   setTimeout(function() {
    $('.loader_overlay').hide(); // smooth hide
  }, 1000);

  $(function(){
  $('#FromDate').datepicker();
});
  $(function(){
  $('#ToDate').datepicker();
});
 });

 jQuery(document).ready(function($){
  new DataTable('#example');
  $(".dropdown_link").click(function(){
    $(".dropdown_nav").not($(this).next()).slideUp("fast");

    // Remove active class from all other links
    $(".dropdown_link").not(this).removeClass("is_active");

    // Toggle the clicked dropdown
    $(this).toggleClass("is_active");
    $(this).next(".dropdown_nav").slideToggle("fast"); 

  });

 
  $(".chat-list a").click(function() {
    $(".chatbox").addClass('showbox');
    return false;
  });
    
    $(".chat-icon").click(function() {
    $(".chatbox").removeClass('showbox');
  });

  $('#Togger_Aside').click(function(){
    $(".right").toggleClass('is_active');
    $(".left").toggleClass('is_active');
    $(this).toggleClass('is_active');
  });
  $(document).on('change', '.image-input', function(event) {
    const input = event.target;
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Find the corresponding image in the same group
            $(input).closest('.image-upload-group').find('.preview-image').attr('src', e.target.result);
        };
        reader.readAsDataURL(file);
    }
});
});
