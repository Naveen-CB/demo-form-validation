const form = document.querySelector('.form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const warnMsg = document.querySelector('.warn-1')
const warnMsgTwo = document.querySelector('.warn-2')
const warnMsgThree = document.querySelector('.warn-3')
const warnMsgFour = document.querySelector('.warn-4')
const password = document.getElementById('password')
const passBtn = document.querySelector('.pass-btn')
const eyeImg = document.querySelector('.eye-img')
const input = document.querySelectorAll('input')
const overlay = document.querySelector('.overlay')
const modalBtn = document.querySelector('.modal-btn')
const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-', '_'
];
const emailChar = /^[a-zA-Z0-9+-_%^!]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/i



form.addEventListener('submit', e => {
  e.preventDefault()
  let firstNameValue = firstName.value.toLowerCase()
  let lastNameValue = lastName.value.toLowerCase()
  let emailValue = email.value
  let passwordValue = password.value
  
  
  // first name validation
  
  if(firstNameValue === ''){
    firstName.classList.add('wrong')
    warnMsg.textContent = 'first name cannot be empty'
    
  } else {
    firstName.classList.remove('wrong')
    warnMsg.textContent = ''
  }

  for(let letter of firstNameValue){
    if(!alphabet.includes(letter)){
      warnMsg.textContent = 'alphabets only allowed'
      firstName.classList.add('wrong')
      firstNameValue.style.color = 'red'
    } else  {
      firstName.classList.remove('wrong')
      warnMsgTwo.textContent = ''
    } 
  }

  // last name validation

  if(lastNameValue === ''){
    lastName.classList.add('wrong')
    warnMsgTwo.textContent = 'last name cannot be empty'
    
  } else {
    lastName.classList.remove('wrong')
    warnMsgTwo.textContent = ''
  }

  for(let letter of lastNameValue){
    if(!alphabet.includes(letter)){
      warnMsgTwo.textContent = 'alphabets only allowed'
      lastName.classList.add('wrong')
      lastNameValue.style.color = 'red'
    } else  {
      lastName.classList.remove('wrong')
      warnMsgTwo.textContent = ''
    }
  }

// email validation

if(emailValue === ''){
  email.classList.add('wrong')
  warnMsgThree.textContent = 'email cannot be empty'
} else if(!emailChar.test(emailValue)){
  email.classList.add('wrong')
  warnMsgThree.textContent = 'invalid email'
} 
else{
  email.classList.remove('wrong')
  warnMsgThree.textContent = ''
}

// password

if(passwordValue === ''){
  password.classList.add('wrong')
  eyeImg.style.display = 'none'
   warnMsgFour.textContent = 'password cannot be empty'
} else if(passwordValue.length < 8){
   password.classList.add('wrong')
   eyeImg.style.display = 'none'
   warnMsgFour.textContent = 'password must be atleast 8 characters'
} else{
  password.classList.remove('wrong')
  eyeImg.style.display = 'block'
   warnMsgFour.textContent = ''
}

let hasError = false

input.forEach(item => {
  if(item.classList.contains('wrong')){
    form.submit()
    item.value = ''
   
    hasError = true
  }
})

if(!hasError){
  overlay.style.display = 'flex'
}

})


passBtn.addEventListener('click', () => {
  if(password.type === 'password'){
    password.type = 'text'
    eyeImg.src = './images/bxs-hide.svg'
  }else{
    password.type = 'password'
    eyeImg.src = './images/bx-show.svg'
  }
})

password.addEventListener('click', () => {
  password.classList.remove('wrong')
  warnMsgFour.textContent = ''
  eyeImg.style.display = 'block'
})


modalBtn.addEventListener('click', () => {
  overlay.style.display = 'none'
})

