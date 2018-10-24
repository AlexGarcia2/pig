
function myFunc(inputSentence) {
  var vowels = ["a","e","i","o","u"];
  var eachWord = inputSentence.split(" ");

  var theWord = eachWord[0].split("");

  var resultWord = [];



    theWord.forEach(function(letter,i) {
      vowels.forEach(function(vLetter) {
        if (letter === vLetter) {
          resultWord.push('-')
        } else {
          resultWord.push(letter)
        }
    })

    })

    console.log(resultWord)

  // var inputArray = inputWord.indexOf();

  // if (inputArray  === "a"){
  //   inputArray.push(inputArray + "way")
  //
  //
  // }
  // return inputArray
  // console.log(eachWord)
}



// function vowelInspect(){
//   return inputWord[0]
//
// }


// split string so it's an array
// check to see if first character is a vowel
// do something if first character is vowel


// $(document).ready(function(){
//
//
//
//
//

// var input =
//
// for (var i = 0; i < input.length; i++)
//   for()
//  // debugger;
//
//  if (input === "apple") {
//  input.concat("way");
//
//  }
// })
// // $("#input").val();
