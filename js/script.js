
var count = 0;
const h = document.querySelector('.h');
const body = document.querySelector('body');

function incre() {
  count++;
  document.getElementById('tnum').innerHTML = count;
  
  if(count == 33){
      h.innerHTML = 'Alhamdulillah الْحَمْدُ لِلَّهِ';
      body.style = 'background:url(https://data.whicdn.com/images/309138422/original.jpg) no-repeat center center / cover';
      
      
  }else if(count == 66){
    h.innerHTML = 'Allohu Akbar  الله أكبر';
    body.style = 'background:url(https://cdn.hipwallpaper.com/i/84/50/JNygaX.jpg) no-repeat center center / cover';
  }else if(count == 99){
    h.innerHTML = 'Tugadi';
    location.reload();
  }
}

function reset() {
  location.reload();
}
