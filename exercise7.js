//No 1
var row = 5;
var Luar = 0;

while (Luar < row) {
  Luar++
  console.log('*')

}

//No 2
var baris = 5;
var Luar = 0;

while (Luar < baris) {
var Dalam = 0;
var bintang = '';

while (Dalam < baris) {
bintang = bintang + '*';
Dalam++;
}
console.log(bintang);
Luar++;
}

//No 3
var row = 5;
var Luar = 0;

while (Luar < row) {
var Dalam = 0;
var bintang = '';

while (Dalam < Luar+1) {
bintang = bintang + '*';
Dalam++;
}
console.log(bintang);
Luar++;
}
