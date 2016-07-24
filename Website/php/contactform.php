<?php	
	$c=0;
	
	while (list($key[$c], $val[$c]) = each($_GET))
	{
		$c++;
	}
	
	mail("geriatrition@gmail.com", $val[0], $val[1], "From: $val[2]");
	
	echo "Your message has been sent."
?>