<?php 
	/* If it is April 1st, we show a quote */
	if (date('md' == '0401')) {
		$greeting = 'A bookstore is one of the only pieces of evidence we have that people are still thinking. <i>Jerry Seinfeld</i>';
	} else {
		$greeting = 'Good morning!';
	}
?>
<!doctype html>
<html>
	<head>
		<title>Example 1</title>
	</head>
	<body>
		<?= $greeting; ?>
	</body>
</html>