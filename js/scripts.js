$(document).ready(function(){
  $("#formOne").submit(function(event){
  event.preventDefault();

  var q1Result = $("input[name=question1]:checked", "#formOne").val();
  var q2Result = $("input[name=question2]:checked", "#formOne").val();
  var q3Result = $("input[name=question3]:checked", "#formOne").val();

    if (q1Result === "option3")
    {
      $("#notEpicodusDiv").show();
    }
    else if (q2Result === "option1" && q3Result !== "option1")
    {
      $("#track1").show();
    }
    else if (q2Result === "option2" && q3Result !== "option2")
    {
      $("#track2").show();
    }
    else if (q2Result === "option3" && q3Result !== "option3")
    {
      $("#track3").show();
    }
  // everything above is a perfect schedule and fit.  Below is a good fit with a schedule conflict.
    else if (q2Result === "option1" && q3Result === "option1")
    {
      $("#java-schedule-issue").show();
    }
    else if (q2Result === "option2" && q3Result === "option2")
    {
      $("#csharp-schedule-issue").show();
    }
    else if (q2Result === "option3" && q3Result === "option3")
    {
      $("#ruby-schedule-issue").show();
    }
  });
});
