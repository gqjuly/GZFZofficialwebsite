<?php 
	$YZ="75df7476631eeebf9e8bf4360683a18e9161bb1c";
	header("Content-Type:text/html;charset=utf-8");
	if(!empty($_POST)){
		$PSD=sha1(md5($_POST["PSD"]));
		if($PSD==$YZ){
			echo "<script>window.location.href='./gh.php?mvc=abc'</script>";
		}else{
			echo "<script>alert('密码错误')</script>";
		}
	}
	require_once("./DH.html");
?>