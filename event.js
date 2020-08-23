var re = document.querySelector("#but");
var sq = document.querySelectorAll('td');
function changemaker(){
  if (this.textContent==='') {
    this.textContent='X';
  }
  else if (this.textContent==='X') {
    this.textContent='O';
  }
  else {
    this.textContent='';
  }
}
for (var i = 0; i < sq.length; i++) {
 sq[i].addEventListener('click',changemaker)
}
re.addEventListener('click',function(){
 for(var i = 0; i < sq.length;  i++)
 sq[i].textContent = '';
})
function complete(){
  var c=0;
  for(var i=0;i<9;i++){
    sq[i].textContent='';
    c = c+1;
  }
  if(c==0){
    return true;
  }
  else {
    return false;
  }
}
function check(){
  if(sq[0]===sq[1] || sq[1]===sq[2])
  {return sq[1];}
  if(sq[0]===sq[3] || sq[3]===sq[6])
  {return sq[3];}
  if (sq[2]===sq[5] || sq[5]===sq[8]) {
    return sq[5];
  }
  if(sq[6]===sq[7] || sq[7]===sq[8])
  {return sq[7];}
  if (sq[2]===sq[4] || sq[4]===sq[6]) {
    return sq[4];
  }
  if(sq[0]===sq[4] || sq[4]===sq[8])
  {return sq[4];}
}
var r = check();
if(complete){
  alert(r+"WINS");
}

