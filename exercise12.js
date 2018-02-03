function konversiMenit(menit){
  var i=Math.floor(menit/60);
  var j=menit%60;
  if(String(j).length === 1){
    j='0' +j
  }
   var hasil=i+':'+j
  return String(hasil)

}
console.log(konversiMenit(123))
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));
