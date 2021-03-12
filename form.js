const form=  document.getElementById('survey-form');
const username=  document.getElementById('name');
const emailid=  document.getElementById('email');
const pass=  document.getElementById('password');
const cpass=  document.getElementById('cpassword');
const mobile=  document.getElementById('number');
const datetime=  document.getElementById('date-time');
const country=  document.getElementById('dropdown');
const tbody=  document.getElementById('table');


var offset=[];
var data=[];

const validate_name =() => {
		var name = username.value.trim();
		console.log(name.toUpperCase());
		if(name=="" || name=="undefined" || name=="null")
		{
			username.setCustomValidity("Name should not be empty");
			
			return false;
		}
		else if(name!=name.toUpperCase())
		{
			username.setCustomValidity("Name should be in UpperCase");
			
			return false;
		}
		else{
			
			username.setCustomValidity('');
			return true;
		}
		
}
const validate_email =()=> {
	 var regex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
	 var email= emailid.value.trim();
	 if(email=="" || email=="undefined" || email=="null")
	 {
	 	emailid.setCustomValidity("Email should not be empty");
			
			return false;

	 }
	 else if(!regex.test(email))
	 {
	 	   emailid.setCustomValidity("Email should be valid");
			
			return false;
	 }
	 else{
	 	emailid.setCustomValidity('');
			return true;
	 }
}



const validate_password =()=> {
	 var passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
	 var password= pass.value.trim();
	 if(password=="" || password=="undefined" || password=="null")
	 {
	 	pass.setCustomValidity("Password should not be empty");
			
			return false;

	 }
	 else if(!passregex.test(password))
	 {
	 	   pass.setCustomValidity("Password must beat least one number, one lowercase and one uppercase letter,at least six characters");
			
			return false;
	 }
	 else{
	 	pass.setCustomValidity('');
			return true;
	 }
}

const validate_number =()=> {
	 var numregex = /^[6-9]\d{9}$/;
	 var number= mobile.value.trim();
	 if(number=="" || number=="undefined" || number=="null")
	 {
	 	mobile.setCustomValidity("Mobile number should not be empty");
			
			return false;

	 }
	 else if(!numregex.test(number))
	 {
	 	   mobile.setCustomValidity("Mobile no. should be valid");
			
			return false;
	 }
	 else{
	 	mobile.setCustomValidity('');
			return true;
	 }
}

const validate_cpassword =()=> {
	 
	 var cpassword= cpass.value.trim();
	 if(cpassword=="" || cpassword=="undefined" || cpassword=="null")
	 {
	 	cpass.setCustomValidity("Password should not be empty");
			
			return false;

	 }
	 else if(cpassword!=pass.value)
	 {
	 	   cpass.setCustomValidity("Confirm Password should be same");
			
			return false;
	 }
	 else{
	 	cpass.setCustomValidity('');
			return true;
	 }
}
const changecountry=() =>{
	const date=country.value;
	offset.push(date);

}

form.addEventListener("submit", function(event){
  event.preventDefault()
});

const submit_form=()=>{
	if(validate_name() && validate_email() && validate_password() && validate_cpassword() && validate_number())
	{
		
		var info=
		{
			name: username.value,
			email: emailid.value,
            countrychange: offset,
			number:mobile.value,
			"date time": datetime.value,
			"country name":country.value
		}
		data.push(info);
var tr1="";
for(var i=0;i<offset.length-1;i++)
{
	tr1+=offset[i];
}
	
    var tr = "<tr>";

    tr += "<td>" + info.name + "</td>"+
     "<td>"+info.number+"</td>"+
     "</td>" +"<td>"+info["date time"] +
     "</td>" + "<td>"+ info["country name"]+"<td>" + info.email + "<td>"+
     "</td>"+"<td>"+tr1+"</td>"+"</tr>";

    /* We add the table row to the table body */
    tbody.innerHTML += tr;

   }
 }


