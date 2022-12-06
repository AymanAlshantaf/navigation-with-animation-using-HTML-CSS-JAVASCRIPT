let list = document.querySelectorAll('.navigation ul li');
list.forEach(function (item){
    item.addEventListener('click',activeLink)
})
function activeLink(){
    list.forEach(function (item){
        item.classList.remove('active');
    })
    this.classList.add('active');
}