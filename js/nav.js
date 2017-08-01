window.onload=function(){
    var navusername=document.getElementById("nav-username"); 
	var out=document.getElementById("out"); 
	var loginuser=localStorage.getItem("loginuser");
	if(loginuser!=null){
		navusername.innerHTML=loginuser;
		localStorage.removeItem("loginuser");
		out.innerHTML="退出";

	}else{
		 navusername.innerHTML="登录/注册";
	}
}


