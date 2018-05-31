// function longestSubString(str) {

//   var hash = {};
//   var maxLength = 0;

//   for(var i = 0; i < str.length; i++) {

//     if(!hash[str[i]]) { 
//       hash[str[i]] = 1; // {a: 1, b: 1, c: 1};
//       maxLength++;  // maxLength = 3;
//     } else {
//       hash = {}; // {a: 0, b: 0, c: 0};
//       maxLength = 0;
//     }

//   }

//   return maxLength;

// }

// //longestSubString("abcabcbb")