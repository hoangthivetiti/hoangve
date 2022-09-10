const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
//console.log(adressbtn)
adressbtn.addEventListener("click", function(){
document.querySelector('.adress-form').classList.add('active-btn')
})
adressclose.addEventListener("click", function(){
document.querySelector('.adress-form').classList.remove('active-btn')
})