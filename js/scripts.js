$(document).ready(function(){
  let valueTotal = 0
  //name page form
  $("#form1").submit(function(event){
    const name = $("#name").val();
    event.preventDefault();
    $(".page").hide();
    $(".page1").show();

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
    const p2 = parseInt($("#p2-1").val());
    event.preventDefault();
    console.log(valueTotal)
    $(".page2-1").hide();
    if (p2 === 1){
          valueTotal +=50;
          $(".page3-1").show();
        } else {
          valueTotal +=25;
          $(".page3-2").show();
        };
  })
  //page2-2
  $("#form2-2").submit(function(event){
    const weapon = parseInt($("#weapon").val());
    event.preventDefault();
    console.log(valueTotal)
    $(".page2-2").hide();
    if (weapon === 1){
          valueTotal +=25
          $(".page3-3").show();
        } else {
          valueTotal +=50
          $(".page3-4").show();
        };
  })
  //page2-3
  $("#form2-3").submit(function(event){
    const weapon = parseInt($("#weapon").val());
    event.preventDefault();
    console.log(valueTotal)
    $(".page2-3").hide();
    if (weapon === 1){
          valueTotal +=10
          $(".page3-5").show();
        } else {
          valueTotal +=50
          $(".page3-6").show();
        };
  })
  //page3-1
  $("#form3-1").submit(function(event){
    const weapon = parseInt($("#weapon").val());
    event.preventDefault();
    $(".page3-1").hide();
    if (weapon === 1){
          valueTotal +=10
          $(".page4-1").show();
        } else {
          valueTotal +=50
          $(".page4-2").show();
        };
  })
  //page3-2
  $("#form3-2").submit(function(event){
    const weapon = parseInt($("#weapon").val());
    event.preventDefault();
    $(".page3-2").hide();
    if (weapon === 1){
          valueTotal +=10
          $(".page4-3").show();
        } else {
          valueTotal +=50
          $(".page4-4").show();
        };
  })
  //page3-3
  $("#form3-3").submit(function(event){
    const weapon = parseInt($("#weapon").val());
    event.preventDefault();
    $(".page3-3").hide();
    if (weapon === 1){
          valueTotal +=10
          $(".page4-1").show();
        } else {
          valueTotal +=50
          $(".page4-2").show();
        };
  })
  //page3-4
  $("#form3-4").submit(function(event){
    const weapon = parseInt($("#weapon").val());
    event.preventDefault();
    $(".page3-4").hide();
    if (weapon === 1){
          valueTotal +=10
          $(".page4-3").show();
        } else {
          valueTotal +=50
          $(".page4-4").show();
        };
  })
  //page3-5
  $("#form3-5").submit(function(event){
    const weapon = parseInt($("#weapon").val());
    event.preventDefault();
    $(".page3-5").hide();
    if (weapon === 1){
          valueTotal +=10
          $(".page4-1").show();
        } else {
          valueTotal +=50
          $(".page4-2").show();
        };
  })
  //page3-6
  $("#form3-6").submit(function(event){
    const weapon = parseInt($("#weapon").val());
    event.preventDefault();
    $(".page3-6").hide();
    if (weapon === 1){
          valueTotal +=10
          $(".page4-3").show();
        } else {
          valueTotal +=50
          $(".page4-4").show();
        };
  })
  //page 4-1
  // $("#form4-1").submit(function(event){
  //   event.preventDefault();
  //   const question2 = parseInt($("#option2").val());
  //   $(".page4-1").hide();
  //   if (question2 === 3){
  //     valueTotal +=5
  //     if (valueTotal <=10){
  //       return $(".java").text("it works")
  //     }else if (valueTotal <= 10){
  //       return $(".ruby").text();
  //     } else {
  //       return $(".python").text("it still works")
  //     }
  //   }else {
  //     total +=10
  //     if (total <=10 && total > 0){
  //       return $(".output").text("it works")
  //     }else {
  //       return $(".output").text("it still works")
  //     }
  //   }       
  // })
  //page 4-2
  // $("#form2").submit(function(event){
  //   event.preventDefault();
  //   const question2 = parseInt($("#option2").val());
  //   $(".output").show();
  //   $(".page2").hide();
  //   if (question2 === 3){
  //     total +=5
  //     if (total <=10 && total > 0){
  //       return $(".output").text("it works")
  //     }else {
  //       return $(".output").text("it still works")
  //     }
  //   }else {
  //     total +=10
  //     if (total <=10 && total > 0){
  //       return $(".output").text("it works")
  //     }else {
  //       return $(".output").text("it still works")
  //     }
  //   }       
  // })
  //page 4-3
  // $("#form2").submit(function(event){
  //   event.preventDefault();
  //   const question2 = parseInt($("#option2").val());
  //   $(".output").show();
  //   $(".page2").hide();
  //   if (question2 === 3){
  //     total +=5
  //     if (total <=10 && total > 0){
  //       return $(".output").text("it works")
  //     }else {
  //       return $(".output").text("it still works")
  //     }
  //   }else {
  //     total +=10
  //     if (total <=10 && total > 0){
  //       return $(".output").text("it works")
  //     }else {
  //       return $(".output").text("it still works")
  //     }
  //   }       
  // })
  
  
})