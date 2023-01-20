const fname=document.getElementById('fname') 
const mname=document.getElementById('mname') 
const lname=document.getElementById('lname') 
const rno=document.getElementById('rno')
const age=document.getElementById('age')
const email=document.getElementById('email')
const add=document.getElementById('add')
const form=document.getElementById('form')
const errorElement=document.getElementById('error')

form.addEventListener('submit', (e)=>
{
let messages = []
//validating correct name can't be empty 
    if(fname.value =='' || fname.value == null) {
        messages.push('First name cannot be empty') 
    }

    if(mname.value =='' || mname.value == null){
        messages.push('Middle name cannot be empty') 
    }

    if(lname.value =='' || lname.value == null){
        messages.push('Last name cannot be empty')
    }
        // Validate roll number 
        if(rno.value == "") {
        messages.push("Please enter your roll number") 
    } 

    else {
        var regex = /^[1-9]\d{9}$/ 
        if(regex.test(rno.value) === false) {
        messages.push("Please enter a valid 10 digit roll number") 
        }
}
    // Validate email address 
    if(email.value == "") {
    messages.push("Please enter your email address") 
} else {
    // Regular expression for basic email validation
    var regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/
    if(regex.test(email.value) === false) {
    messages.push("Please enter a valid email address") }
    }
    // Validate age b/w 16-22 
    if(age.value == "") {
        messages.push("Please enter your age") 
    }
    else if((age.value)<16 ||(age.value)>22){ 
            messages.push('Age must be between 16-22')
    }
    // Address area also can't be empty 
    if(add.value =='' || add.value == null)
    {
    messages.push('Address field required!!') }
    if(messages.length>0)
{
    e.preventDefault() 
    errorElement.innerText=messages.join(', ') }
})