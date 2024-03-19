const itemEls = document.querySelectorAll('.item')
const btnEl = document.querySelector('.btn')
const colors = ['royalblue', 'orange', 'tomato']

btnEl.addEventListener('click', function(){
  itemEls.forEach(function(itemEl, index){
    console.log(index, itemEl)
    itemEl.style.backgroundColor = colors[index]
  })
  btnEl.innerHTML = '<span>클릭했어요!</span>'
})