 <html>
	<head>
		<title>Title</title>
		<link rel="stylesheet" type="text/css" href="practice1.css">
	</head>
	<body>
		<div id="formValidator">
            
			<div id="errMessage"></div>
			
            <div class="form-element">
        
                <label for="email">Email</label>
                <input type="text" name="email" id="email" placeholder="eg. yourname@gmail.com"/>
                
                </div>
            
            <div class="form-element">
            
                <label for="phone">Telephone</label>
                <input type="text" name="phone" id="phone" placeholder="eg. 0123456789">

            </div>
            
            <div class="form-element">
            
                <label for="password">Password</label>
                <input type="password" name="password" id="password">

            </div>
            
            <div class="form-element">
            
                <label for="passwordConfirm">Confirm Password</label>
                <input type="password" name="passwordConfirm" id="passwordConfirm">

            </div>
            
             <div class="form-element">
            
                <input type="submit" id="submitButton" value="Sign Up"/>
            
			</div>
		</div>
		
		<script src="jquery-3.3.1.min.js"></script>
		<script src="practice1.js"></script>
	</body>
</html>