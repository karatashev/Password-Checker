let userPassword = prompt('Please enter your password');

if (userPassword.length === 0) {
alert('You did not enter a password');
} else (document.getElementById('your-password').innerText = userPassword); //to render the password from prompt
// alert('Your password is set');


if (userPassword.length <= 6) {
  console.log('Your password is weak')
  document.getElementById('box1').classList.add('red');
} else if (userPassword.length <= 11) {
  console.log('Your password is strong')
  document.getElementById('box2').classList.add('yellow');
} else {
  console.log('Your password is very strong')
  document.getElementById('box3').classList.add('green');
} 

  
