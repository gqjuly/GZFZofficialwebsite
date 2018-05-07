<?php 
	class plode{
		private $file;
		private $src;
		public function __construct($x,$y){
			$this->file=$x;
			$this->src=$y;
		}
		// 进行文件数据分离
		private function bianLi(){
				$files=$this->file['file'];
				$array=array();
				foreach($files['name'] as $k=>$v){
					if($v){
						$fileSon=array();
						$fileSon['name']=$v;
						$fileSon['type']=$files['type'][$k];
						$fileSon['tmp_name']=$files['tmp_name'][$k];
						$fileSon['error']=$files['error'][$k];
						array_push($array,$fileSon);
					}
				}
				$this->file=$array;
				return true;
		}
		// 验证文件类型
		private function flieType(){
			foreach($this->file as $k=>$v){
				if($v['type']!="image/jpeg"){
					unset($this->file[$k]);
					echo "<script>alert('第{$k}张图片格式错误，请重新上传jpg格式图片');</script>";
				}
			}
		}
		// 进行文件移动
		private function filePlode(){
			$files=$this->file;
			$shuZhi=0;
			foreach($files as $k=>$v){
				if(is_uploaded_file($v['tmp_name'])){
					if(move_uploaded_file($v['tmp_name'],$this->src.$v['name'])){
							$shuZhi++;
							if($shuZhi==count($files)){
								echo "<script>alert('所有微信更换上传成功');location.href='./gh.php?mvc=abc'</script>";
							}
						}else{
							echo "<script>alert('第{$k}张图片上传失败，请重新上传');</script>";
						}
			}
		}
	}
	// 运动
	public function Go(){
			if($this->bianLi()){
				$this->flieType();
				$this->filePlode();
			}
		}
}

 ?>