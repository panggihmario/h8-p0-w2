function balikKata(kata) {
  var i = kata.length,
      o = '';
  while (i > 0) {
    o += kata.substring(i - 1, i);
    i--;
  }
  return o;
}
console.log(balikKata('halo world'));
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super')); 
