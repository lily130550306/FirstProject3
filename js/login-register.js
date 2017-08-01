function $(id){
	 return document.getElementById(id);
		}

function checkInput(){
	if(checkPhone()&&checkCode()&&checkPassword()&&checkRepassword()){
		localStorage.setItem( $("phoneInput").value,$("pswInput").value);
        return true;
    }else{
    	return false;
    }
}
// 注册界面的用户名
function  checkPhone(){
	var regPhone= /^[1][0-9]{10}$/;
	var phoneInput= $("phoneInput").value.trim();
	if(phoneInput == ""){
		  $("phoneInfo").innerHTML = "用户名不能为空!";
		  $("phoneInfo").className = "error";
		  $("phoneInfo").style.color = "#a94442";
          $("phnoeli1").className = "icon-error";
          $("phnoeIcon").style.color="#a94442";
          $("phnoeIcon").style.fontSize="30px";
          $("phoneInput").style.border="1px solid #a94442";
		  return false;
	}else{
		  if(!regPhone.test(phoneInput)){
			  $("phoneInfo").innerHTML = "用户名输入有误!";
			  $("phoneInfo").className = "error";
			  $("phoneInfo").style.color = "#a94442";
	          $("phnoeli1").className = "icon-error";
	          $("phnoeIcon").style.color="#a94442";
	          $("phnoeIcon").style.fontSize="30px";
	          $("phoneInput").style.border="1px solid #a94442";
			   return false;
		  }else if(localStorage.getItem($("phoneInput").value)){
                $("phoneInfo").innerHTML = "该用户已注册!";
                return false;
	    }else{	
			  $("phoneInfo").innerHTML = "OK!";
			  $("phoneInfo").className = "correct";
			  $("phoneInfo").style.color = "green";
	          $("phnoeli1").className = "icon-correct";
	          $("phnoeIcon").style.color="green";
	          $("phnoeIcon").style.fontSize="30px";
	          $("phoneInput").style.border="1px solid green";
			  return true;
	    }
	}
}




//注册界面的验证码
// 设置4位数的随机验证码
function createCode(){
	//首先默认code为空字符串
     var code = '';
    //设置验证码长度为4
    var codeLength = 4;
    //设置随机字符
    var randomArra= new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
    //循环codeLength 我设置的4就是循环4次
    for(var i = 0; i < codeLength; i++){
        //设置随机数范围,这设置为0 ~ 36
        var index = Math.floor(Math.random()*36);
        //字符串拼接 将每次随机的字符 进行拼接
        code += randomArra[index]; 
    }
    //将拼接好的字符串赋值给展示的Value
    $("randomcode").innerHTML=code;   
}

// 获取验证码按钮的点击事件函数
function getCode(){

	createCode();	
    //设置倒计时
    var i=11; 
    var timer;
    function countTime(){   
	   i--;
	   if(i>0){
	   	  $("codeBtn").value=i+"秒后重新获取";
	   	  $("codeBtn").disabled=true ;  	 
	   }else if(i<=0){
	   	  $("codeBtn").value="点击获取验证码";
	   	  $("codeBtn").disabled=false; 
	   	  clearInterval(timer);
	   }	   
    }
    timer=setInterval(countTime,1000);
}
//验证用户输入的验证码与随机产生的验证码是否一致
function checkCode(){
	var codeInput= $("codeInput").value.trim();
	      if(codeInput == ""){
				 $("codeInfo").innerHTML = "验证码不能为空!";
				 $("codeInfo").className = "error";
				 $("codeInfo").style.color = "#a94442";
            	 $("codeli1").className = "icon-error";
            	 $("codeIcon").style.color="#a94442";
            	 $("codeIcon").style.fontSize="30px";
            	 $("codeInput").style.border="1px solid #a94442";
				 return false;
	       }else{
		       	if($("codeInput").value.trim()!=$("randomcode").innerHTML){
					$("codeInfo").innerHTML = "验证码输入有误！";
					$("codeInfo").className = "error";
					$("phoneInfo").style.color = "#a94442";
	                $("codeli1").className = "icon-error";
	                $("codeIcon").style.color="#a94442";
	                $("codeIcon").style.fontSize="30px";
	                $("codeInput").style.border="1px solid #a94442";
					return false;
				}else{
					$("codeInfo").innerHTML = "OK";
					$("codeInfo").className = "correct";
					$("codeInfo").style.color = "green";
	                $("codeli1").className = "icon-correct";
	                $("codeIcon").style.color="green";
	                $("codeIcon").style.fontSize="30px";
	                $("codeInput").style.border="1px solid green";
					return true;
				}
	       } 	       
		}

// 注册界面密码
function  checkPassword(){
	var regPassword = /^[\da-z]{6,14}$/i;
	var pswInput= $("pswInput").value.trim();
	if(pswInput == ""){
		  $("pswInfo").innerHTML = "密码不能为空!";
		  $("pswInfo").className = "error";
		  $("pswInfo").style.color = "#a94442";
          $("pswli1").className = "icon-error";
          $("pswIcon").style.color="#a94442";
          $("pswIcon").style.fontSize="30px";
          $("pswInput").style.border="1px solid #a94442";
		  return false;
	}else if(!regPassword.test(pswInput)){
		   $("pswInfo").innerHTML = "密码输入有误!";
		   $("pswInfo").className = "error";
		   $("pswInfo").style.color = "#a94442";
           $("pswli1").className = "icon-error";
           $("pswIcon").style.color="#a94442";
           $("pswIcon").style.fontSize="30px";
           $("pswInput").style.border="1px solid #a94442";
		   return false;
	}else{	
		    $("pswInfo").innerHTML = "OK!";
		    $("pswInfo").className = "correct";
		    $("pswInfo").style.color = "green";		    
            $("pswli1").className = "icon-correct";
            $("pswIcon").style.color="green";
            $("pswIcon").style.fontSize="30px";
            $("pswInput").style.border="1px solid green";
		    return true;
	}
}

// 两次输入的密码必须相同
		function checkRepassword(){
			var repswInput= $("repswInput").value.trim();
			if(pswInput == ""){
				$("repswInfo").innerHTML = "密码不能为空!";
				$("repswInfo").className = "error";
				$("repswInfo").style.color = "#a94442";
                $("repswli1").className = "icon-error";
                $("repswIcon").style.color="#a94442";
                $("repswIcon").style.fontSize="30px";
                $("repswInput").style.border="1px solid #a94442";
				return false;
	        }else if($("pswInput").value!=$("repswInput").value){
				$("repswInfo").innerHTML = "两次密码必须一致！";
				$("repswInfo").className = "error";
				$("repswInfo").style.color = "#a94442";
                $("repswli1").className = "icon-error";
                $("repswIcon").style.color="#a94442";
                $("repswIcon").style.fontSize="30px";
                $("repswInput").style.border="1px solid #a94442";
				return false;
			}else{
				$("repswInfo").innerHTML = "OK";
				$("repswInfo").className = "correct";
				$("repswInfo").style.color = "green";
                $("repswli1").className = "icon-correct";
                $("repswIcon").style.color="green";
                $("repswIcon").style.fontSize="30px";
                $("repswInput").style.border="1px solid green";
				return true;
			}
		}




// 登录界面
function checklogin(){
	if(checkUsername()&&checkUserpsw()&&checkCode()) {
	localStorage.setItem("loginuser",$("usernameInput").value);
	return true;
    }else{
    	return false;
    }
}





//登录界面用户名
function  checkUsername(){
     if($("usernameInput").value==""){
     	        $("usernameInfo").innerHTML = "用户名不能为空!";
				$("usernameInfo").className = "error";
				$("usernameInfo").style.color = "#a94442";
                $("usernameli1").className = "icon-error";
                $("usernameIcon").style.color="#a94442";
                $("usernameIcon").style.fontSize="30px";
                $("usernameInput").style.border="1px solid #a94442";
                return false;
     }else {
     	if(localStorage.getItem($("usernameInput").value)==null){
     	        $("usernameInfo").innerHTML = "用户名不存在";
     	        $("usernameInfo").className = "error";
				$("usernameInfo").style.color = "#a94442";
                $("usernameli1").className = "icon-error";
                $("usernameIcon").style.color="#a94442";
                $("usernameIcon").style.fontSize="30px";
                $("usernameInput").style.border="1px solid #a94442";
                return false;                
        }else {
                $("usernameInfo").innerHTML = "OK";
                $("usernameInfo").className = "correct";
				$("usernameInfo").style.color = "green";
                $("usernameli1").className = "icon-correct";
                $("usernameIcon").style.color="green";
                $("usernameIcon").style.fontSize="30px";
                $("usernameInput").style.border="1px solid green";
                return true;
        }
    }
}

// 登录界面密码
function  checkUserpsw(){
     if($("userpswInput").value==""){
     	        $("userpswInfo").innerHTML = "密码不能为空!";
				$("userpswInfo").className = "error";
				$("userpswInfo").style.color = "#a94442";
                $("userpswli1").className = "icon-error";
                $("userpswIcon").style.color="#a94442";
                $("userpswIcon").style.fontSize="30px";
                $("userpswInput").style.border="1px solid #a94442";
                return false;
     }else {
     	if(localStorage.getItem($("usernameInput").value)!=$("userpswInput").value){
     	        $("userpswInfo").innerHTML = "密码有误";
     	        $("userpswInfo").className = "error";
				$("userpswInfo").style.color = "#a94442";
                $("userpswli1").className = "icon-error";
                $("userpswIcon").style.color="#a94442";
                $("userpswIcon").style.fontSize="30px";
                $("userpswInput").style.border="1px solid #a94442";
                return false;
        }else {
               $("userpswInfo").innerHTML = "Ok";
     	        $("userpswInfo").className = "correct";
				$("userpswInfo").style.color = "green";
                $("userpswli1").className = "icon-correct";
                $("userpswIcon").style.color="green";
                $("userpswIcon").style.fontSize="30px";
                $("userpswInput").style.border="1px solid green";
                return true;
        }
    }
}





