function printPersonDetails() {
  const personName = document.getElementById('person_name').value
  const personEmail = document.getElementById('person_email').value

  if (personName === '' || personEmail === '') {
    document.getElementById('output').innerHTML = 'Pleaes fill in all details'
    return
  }

  const outputMessage = "Name: " + personName + "<br>Email: " + personEmail

  document.getElementById('output').innerHTML = outputMessage

}