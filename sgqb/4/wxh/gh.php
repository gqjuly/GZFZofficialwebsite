<?php 
	$YZ=$_GET['mvc'];
	if($YZ!='abc'){
		die('404');
	}
	header("Content-Type:text/html;charset=utf-8");
	require("./plode.php");
	// 读取文件内容
	$txt=file_get_contents('./weixin.txt');
	// 文件内容字符串化
	$txt=strval($txt);
	// 分割成数组
	$txt=preg_split("/,/",$txt);
	// 提交内容
	if(!empty($_POST)){
		$weixin=$_POST['weixin'];
		// 去除空白格
		foreach($weixin as $k=>$v){
			$weixin[$k]=trim($v);
		}
		$newTxt=implode(",",$weixin);
		if(file_put_contents("./weixin.txt",$newTxt)){
			$txt_OK=true;
		}
		if(!empty($_FILES)){
			// var_dump($_FILES);
			$plode=new plode($_FILES,'./opc/');
			$plode->Go();
		}
		if($txt_OK){
			echo "<script>alert('微信更换成功');location.href='./gh.php?mvc=abc'</script>";
		}
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<link rel="stylesheet" href="./bootstrap.min.css" />
	<script src="https://unpkg.com/vue"></script>
	<style>
		body{
			width: 100%;
			height: 100%;
			background: #5AA549;
		}
		#content{
			position: fixed;
			top: 0px;
			bottom: 0px;
			left: 0px;
			right: 0px;
			background: #fff;
			width: 720px;
			height: 100%;
			margin: auto;
			animation: DH 1.5s linear infinite;
			box-shadow: 1px 1px 2px;
			overflow: auto;
		}
		input{
			margin: 10px;
		}
	</style>
	<title>微信后台</title>
</head>
<body>
	<div id="content" class="container">
		<h1>当此页面的微信号</h1>
		<form action="" method="POST" enctype="multipart/form-data" class="form-inline">
			<?php foreach($txt as $k=>$b){?>
			<div class="container-fluid" style="border:1px solid #858583;border-radius: 5px;padding-top: 8px;padding-bottom: 8px;margin: 3px;" id="<?php echo "div".$k?>" >
				<div class="col-sm-2">
					<img src="./opc/<?php echo $b?>.jpg" alt="还没上传微信二维码" width="100%" />
				</div>
				<input type="text" name="weixin[]" id="weixin" class="col-sm-3 form-control" value="<?php echo $b?>" required="require" style="color:black;"/>
				<span class="col-sm-2 btn btn-primary" style="position: relative;margin: 10px;">上传二维码<input type="file" name="file[]" id="" style="opacity: 0;position: absolute;top: 0px;left: 0px;" /></span>
				<input type="button" value="删除" class="col-sm-2 btn btn-danger" onclick="del('#<?php echo 'div'.$k?>')"/>
			</div>
			<?php }?>
			<div id="push" style="width: 100%;">

			</div>
			<input type="button" value="增加二维码" class="btn btn-primary col-sm-11" style="margin-bottom: 10px;" onclick="zj()" />
			<input type="submit" value="提交修改" class="btn btn-success col-sm-11" style="margin-bottom: 50px;" />
		</form>
	</div>
	<script src="./jquery-3.2.1.min.js"></script>
	<script>
		var ac=0;
		function del(x){
			$(x).remove();
			// console.log($(this).parent().css('background','red'));
		}
		function zj(){
			$("#push").append("<div class='container-fluid' style='border:1px solid #858583;border-radius: 5px;padding-top: 8px;padding-bottom: 8px;margin: 3px;' id='ab"+ac+"' ><div class='col-sm-2'><img src='' alt='还没上传微信二维码' width='100%' /></div><input type='text' name='weixin[]' id='weixin' class='col-sm-3 form-control' value='' required='require' style='color:black;'/><span class='col-sm-2 btn btn-primary' style='position: relative;margin: 10px;'>上传二维码<input type='file' name='file[]' id='' style='opacity: 0;position: absolute;top: 0px;left: 0px;' /></span><input type='button' value='删除' class='col-sm-2 btn btn-danger' onclick='fz("+ac+")' /></div>");
			ac++;
		}
		function fz(ad){
			del("#ab"+ad+"")
		}
	</script>
</body>
</html>