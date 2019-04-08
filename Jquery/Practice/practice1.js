$('#submitButton').click(function(){
	
	console.log("yo");
	if(checkEmail($('#email').val())){
		$('#errMessage').html("valid email");
	}else{
		$('#errMessage').html("invalid email");
	}
});

function checkEmail(email){
	if(email == "arjon"){
		return true;
	}
	return false;
}