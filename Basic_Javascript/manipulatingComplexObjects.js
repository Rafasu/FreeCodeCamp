/*
Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. 
They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
//Example
*/
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP" ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CS", 
      "8T", 
      "LP" ],
    "gold": true
  },
];
/*
This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested "formats" array. 
If you want to add more album records, you can do this by adding records to the top level array.

*/
