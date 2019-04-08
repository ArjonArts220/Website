<html>
	<head>
		<title>Title</title>
		<link href="jqueryUiLibrary/jquery-ui.css" rel="stylesheet">
		<style> 
			#accordion h3 {
				color: black;
			}
	
		
		</style>
	</head>
	

	<body>
		<div class="wrapper">
			<div id="title">
				title
			</div>
		</div>
		<div class="wrapper">
			<div id="main-content">
				main content
				<p>
					aabb
				</p>
			</div>
		</div>
		
		<div id="animate" style="width:200px;height:200px;background-color:green;border-radius:50%;"></div>
		
		<!-- JQuery UI -->
		<h2 class="demoHeaders">Accordion</h2>
		<div id="accordion">
			<h3 id="test">First</h3>
			<div>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</div>
			<h3>Second</h3>
			<div>Phasellus mattis tincidunt nibh.</div>
			<h3>Third</h3>
			<div>Nam dui erat, auctor a, dignissim quis.</div>
		</div>
		
		
		<script src="jquery-3.3.1.min.js"></script>
		<script src="jqueryUiLibrary/jquery-ui.js"></script>
		<script src="app.js"></script>
	</body>
</html>