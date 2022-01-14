$(document).ready(function(){
  let valueTotal = 0
  //name page form
  $("#form1").submit(function(event){
    const name = $("#name").val();
    event.preventDefault();
    $(".page").hide();
    $(".page1").show();
    $(".insertName").text(name.toUpperCase() + "!!" );
  });
//page1
  $("#form2").submit(function(event){
    const weapon = parseInt($("#weapon").val());
    event.preventDefault();
    $(".page1").hide();
    if (weapon === 1){
          valueTotal +=10
          $(".page2-1").show();
        } else if(weapon === 2){
          valueTotal += 30
          $(".page2-2").show();
        } else {
          valueTotal +=50
          $(".page2-3").show();
        };
  })
  //page2-1
  $("#form2-1").submit(function(event){
    const choice1 = parseInt($("#p2-1").val());
    event.preventDefault();
    $(".page2-1").hide();
    if (choice1 === 1){
          valueTotal +=10;
          $(".page3-1").show();
        } else {
          valueTotal +=50;
          $(".page3-2").show();
        };
  })
  //page2-2
  $("#form2-2").submit(function(event){
    const choice2 = parseInt($("#p2-2").val());
    event.preventDefault();
    $(".page2-2").hide();
    if (choice2 === 1){
          valueTotal +=10
          $(".page3-3").show();
        } else {
          valueTotal +=50
          $(".page3-4").show();
        };
  })
  //page2-3
  $("#form2-3").submit(function(event){
    const choice3 = parseInt($("#p2-3").val());
    event.preventDefault();
    $(".page2-3").hide();
    if (choice3 === 1){
          valueTotal +=10
          $(".page3-5").show();
        } else {
          valueTotal +=50
          $(".page3-6").show();
        };
  })
  //page3-1
  $("#form3-1").submit(function(event){
    const choice4 = parseInt($("#p3-1").val());
    event.preventDefault();
    $(".page3-1").hide();
    if (choice4 === 1){
          valueTotal +=10
          $(".page4-1").show();
        } else {
          valueTotal +=50
          $(".page4-2").show();
        };
  })
  //page3-2
  $("#form3-2").submit(function(event){
    const choice5 = parseInt($("#p3-2").val());
    event.preventDefault();
    $(".page3-2").hide();
    if (choice5 === 1){
          valueTotal +=10
          $(".page4-3").show();
        } else {
          valueTotal +=50
          $(".page4-4").show();
        };
  })
  //page3-3
  $("#form3-3").submit(function(event){
    const choice6 = parseInt($("#p3-3").val());
    event.preventDefault();
    $(".page3-3").hide();
    if (choice6 === 1){
          valueTotal +=10
          $(".page4-1").show();
        } else {
          valueTotal +=50
          $(".page4-2").show();
        };
  })
  //page3-4
  $("#form3-4").submit(function(event){
    const choice7 = parseInt($("#p3-4").val());
    event.preventDefault();
    $(".page3-4").hide();
    if (choice7 === 1){
          valueTotal +=10
          $(".page4-3").show();
        } else {
          valueTotal +=50
          $(".page4-4").show();
        };
  })
  //page3-5
  $("#form3-5").submit(function(event){
    const choice8 = parseInt($("#p3-5").val());
    event.preventDefault();
    $(".page3-5").hide();
    if (choice8 === 1){
          valueTotal +=10
          $(".page4-1").show();
        } else {
          valueTotal +=50
          $(".page4-2").show();
        };
  })
  //page3-6
  $("#form3-6").submit(function(event){
    const choice9 = parseInt($("#p3-6").val());
    event.preventDefault();
    $(".page3-6").hide();
    if (choice9 === 1){
          valueTotal +=10
          $(".page4-3").show();
        } else {
          valueTotal +=50
          $(".page4-4").show();
        };
  })
  // page 4-1
  $("#form4-1").submit(function(event){
    event.preventDefault();
    const choice10 = parseInt($("#p4-1").val());
    $(".page4-1").hide();
    if (choice10 === 1){
      valueTotal +=10
      if (valueTotal <=45){
        return $(".java").show()
      }else if (valueTotal <= 95){
        return $(".ruby").show();
      } else {
        return $(".python").show();
      }
    }else {
      valueTotal +=50
      if (valueTotal <=45){
        return $(".java").show()
      }else if (valueTotal <= 95){
        return $(".ruby").show();
      } else {
        return $(".python").show();
      } 
    }    
  })
  // page 4-2
  $("#form4-2").submit(function(event){
    event.preventDefault();
    const choice11 = parseInt($("#p4-2").val());
    $(".page4-2").hide();
    if (choice11 === 1){
      valueTotal +=10
      if (valueTotal <=45){
        return $(".java").show()
      }else if (valueTotal <= 95){
        return $(".ruby").show();
      } else {
        return $(".python").show();
      }
    }else {
      valueTotal +=50
      if (valueTotal <=45){
        return $(".java").show()
      }else if (valueTotal <= 95){
        return $(".ruby").show();
      } else {
        return $(".python").show();
      } 
    }     
  })
  // page 4-3
  $("#form4-3").submit(function(event){
    event.preventDefault();
    const choice12 = parseInt($("#p4-3").val());
    $(".page4-3").hide();
    if (choice12 === 1){
      valueTotal +=10
      if (valueTotal <=45){
        return $(".java").show()
      }else if (valueTotal <= 95){
        return $(".ruby").show();
      } else {
        return $(".python").show();
      }
    }else {
      valueTotal +=50
      if (valueTotal <=45){
        return $(".java").show()
      }else if (valueTotal <= 95){
        return $(".ruby").show();
      } else {
        return $(".python").show();
      } 
    }        
  })
  // page 4-4
  $("#form4-4").submit(function(event){
    event.preventDefault();
    const choice13 = parseInt($("#p4-4").val());
    $(".page4-4").hide();
    if (choice13 === 1){
      valueTotal +=10
      if (valueTotal <=45){
        return $(".java").show()
      }else if (valueTotal <= 95){
        return $(".ruby").show();
      } else {
        return $(".python").show();
      }
    }else {
      valueTotal +=50
      if (valueTotal <=45){
        console.log(valueTotal)
        return $(".java").show()
      }else if (valueTotal <= 95){
        return $(".ruby").show();
      } else {
        return $(".python").show();
      } 
    }    
  })
  
  
})