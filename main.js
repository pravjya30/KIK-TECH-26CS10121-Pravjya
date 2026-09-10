document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
const nameVal = document.getElementById('name').value.trim();
const emailVal = document.getElementById('email').value.trim();
const roll_numberVal = document.getElementById('roll_number').value.trim();

if( !nameVal|| !emailVal|| !roll_numberVal) {
    alert("Please fill all the details");

}  else if(roll_numberVal.length !== 9) {
    alert("Invalid Roll Number");
}else{

document.getElementById('form-container').style.display = 'none';
document.getElementById('success-message').style.display = 'block';
}
}); 