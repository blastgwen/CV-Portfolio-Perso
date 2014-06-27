<?php 
$gmail = "gmail.com";
$TO = "gwenael.bec" . "@" . $gmail; 
$subject = "Contact - SiteWeb"; 
$h = "From: " . "blastgwen" . "@" . $gmail; 
$location ="../index.htm";
$message = "Un e-mail vient de t'être envoyé par le formulaire contact du site"; 
while (list($key, $val) = each($_POST)) { 	
	if ($key == "language"){
		if ($val == "fr"){
			$location="Location:../fr/Contact.html?send=true";
		} else {
			$location="Location:../en/Contact.html?send=true";
		}
	} else {
		$message .= "$key : $val\n";
	} 
} 
mail($TO, $subject, $message, $h); 
header($location); 
?> 