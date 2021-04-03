const name = document.getElementById('name')
const contact = document.getElementById('contact')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
// const phoneno = /^\d{10}$/;

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null){
   messages.push('Name is required') 
  }

  if (contact.value.length < 8){
    messages.push("Contact must be filled and should be valid")
  }

  // if (contact.value != phoneno){
  //   messages.push("Contact number should be in numerals")
  // }

  if (messages.length > 0){
  e.preventDefault()
  errorElement.innerText = message.join(', ')
  }
})