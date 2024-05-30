// Method 1 - when js link is at the head
// $(document).ready(
//     function () {
//         $("h1").css("color","red");
//     }
// );

// Method 2 - when js link is in at end of body
$("h1").css("color","red");




// ****Selecting Elements****
// Selecting One Element with Normal JS
document.querySelector("h1");
// Selecting One Element with jQuery
$("h1"); // we can also select by telling like  (h1.class) or (#divName h1) same as normal JS
// Selecting All elements
$("button");// both are same way.





// ****Manipulating Styles of element with JQuery****
$("h1").css("color","aqua");
// fetching the values of css propery value by JQuery
console.log($("body").css("color"));
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));
console.log($("h1").css("padding"));

// Adding Class to element because it not good to modify style in JS.
// add design to class and then add class to element by jQuery.
$("button").addClass("clickMe");

// Add Multiple Classes at same , separate names with blank spaces.
$("h1").addClass("big-title addBoxShadow");

// Method to remove class
// $("h1").removeClass("big-title");

// Enquire if a particular class is present in a particular element or not
console.log($("h1").hasClass("addBoxShadow"));// it will return true if present else false.

// ****Change Text Using jQuery****

$("h1").text("The JQuery Tutorial");
$("button").text("Please Click Me");

// ****Change html content****
// it changes the entire innerHtml of the element.
$("button").html("<em>Click Me Again Now</>");

// ****Changing the Attributes of elements using jQuery****

//fetching the value of attribute href
console.log($("a").attr("href"));

// setting the value of href
$("a").attr("href", "https://www.youtube.com") 
$("a").html("youtube");// also update inner html