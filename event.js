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
