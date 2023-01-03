function validateEmail(email) {
    var formatoEmail = /\S+@\S+\.\S+/;
    return  formatoEmail.test(email)
   
  }
      
let f = document.getElementById('exampleInputEmail1')

f.addEventListener("change",() => {
  let validacao = validateEmail(f.value)
  if (validacao == false){
    const msg = document.querySelector('.alert').innerText = 'Please provade a valid email';
    f.style.background = url('./images/icon-error.svg'), no-repeat, left
    
    console.log(f.value)
  } else {
    console.log(f.value)
  }
})






