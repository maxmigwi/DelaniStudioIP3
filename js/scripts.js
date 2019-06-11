
$(document).ready(function(){
    $("form#show").submit(function(event) {
  
      event.preventDefault();
      var name = $.trim($('#name').val());
      var email = $.trim($('#email').val());
      if ((name === '') || (email === '')) {
        alert('If you submit,you should enter at least name and email.');//checks if either field is empty and alerts user
        return false;
      } else {
        alert("We have received your message.Thank you for reaching out for us");
        $("#show")[0].reset();
      }
    });
  
    $("#do1").click(function() {
      $(".designimage").toggle();
      
      $(".designdesc").show();
      //this shows description. Happens the same way to the below funtions
    });
  
  
    $("#do1").mousedown(function() {
      $(".designdesc").fadeOut(100);
    });
  
  
  
    $("#do2").click(function() {
      $(".devimage").toggle();
      $(".developdesc").show();
    });
  
    $("#do2").mousedown(function() {
      $(".developdesc").fadeOut(100);
    });
  
    $("#do3").click(function() {
      $(".productimage").toggle();
      $(".productdesc").show();
    });
    $("#do3").mousedown(function() {
      $(".productdesc").fadeOut(100);
    });
  
  
  
  
  
  });
  $(document).ready(function () {
    $(".card1").mouseenter(function () { 
      $(".crd1").show();
    });
    $(".card1").mouseleave(function () { 
      $(".crd1").hide();
    });
  });



$(document).ready(function () {
  $(".card2").mouseenter(function () { 
    $(".crd2").show();
  });
  $(".card2").mouseleave(function () { 
    $(".crd2").hide();
  });
});



$(document).ready(function () {
  $(".card3").mouseenter(function () { 
    $(".crd3").show();
  });
  $(".card3").mouseleave(function () { 
    $(".crd3").hide();
  });
});



$(document).ready(function () {
  $(".card4").mouseenter(function () { 
    $(".crd4").show();
  });
  $(".card4").mouseleave(function () { 
    $(".crd4").hide();
  });
});



$(document).ready(function () {
  $(".card5").mouseenter(function () { 
    $(".crd5").show();
  });
  $(".card5").mouseleave(function () { 
    $(".crd5").hide();
  });
});



$(document).ready(function () {
  $(".card6").mouseenter(function () { 
    $(".crd6").show();
  });
  $(".card6").mouseleave(function () { 
    $(".crd6").hide();
  });
});



$(document).ready(function () {
  $(".card7").mouseenter(function () { 
    $(".crd7").show();
  });
  $(".card7").mouseleave(function () { 
    $(".crd7").hide();
  });
});



$(document).ready(function () {
  $(".card8").mouseenter(function () { 
    $(".crd8").show();
  });
  $(".card8").mouseleave(function () { 
    $(".crd8").hide();
  });
});
