var nama ='nina';
var peran ='ksatria';
if(nama ==='nina' && peran ==='ksatria' ){
  console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + nama + ', kamu dapat menyerang dengan senjatamu')
}
else if(nama ==='danu' && peran ==='tabib'){
  console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka')
}
else if(nama ==='zero' && peran ==='penyihir'){
   console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu');
}
else if(nama ==='mikael' && peran===''){
  console.log('Hello ' + nama + ', Pilih peranmu untuk memilih game');
}
else{
  console.log('nama harus diisi');
}
