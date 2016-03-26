window.onload = function () {
	
		//搜索框selecte
	var selected_index = 1;
	var selected_box = document.getElementsByClassName('select_box')[0].children;
	var a = document.getElementById('selected');
	var span = document.getElementById('selected').children[0];
	function selected() {
		var text = this.innerHTML;
		span.innerHTML = text;
		console.log(1);
	}
	for (var i=0;i<selected_box.length;i++) {
		selected_box[i].onclick = selected;
	}

	//顶部中层小轮播
	var btn_left = document.getElementById('btn_left');
	var btn_right= document.getElementById('btn_right');
	head_lb();

	//设置定时器自动切图
	var timer = null;
	var box =document.getElementById('head_lb_box');
	function head_lb() {
		// body...
		
		timer = setInterval(function () {
			//定时向右
			right_lb();
			
		},4000);

	}

	// 向左
	
	function left_lb(){
		var current_left = box.style.left;
		if (current_left+230>0) {
			box.style.transition = 'all 1s ease';
			console.log(getComputedStyle(box).transition);
			current_left = -920;
			box.style.left = current_left+'px';
			box.style.transition = '';
		}
		else{
			
			current_left = current_left+230;
			box.style.left = current_left+'px';
			
		}
	}
	btn_left.onclick = left_lb;
	//向右
	function right_lb(){
		var current_left = parseInt(getComputedStyle(box).left.slice(0,-2));
		if (current_left-230<-920) {
			console.log(getComputedStyle(box).transition);
			current_left = -230;
			box.style.left = current_left+'px';
		}

		if(current_left-230>=-920){
			box.style.transition = 'all 1s ease';
			current_left = current_left-230;
			box.style.left = current_left+'px';
			box.style.transition = '';
		}
	}	
	btn_right.onclick = right_lb;


		// **************************banner条浮动样式设置
	//引入添加删除指定类的方法

	//hasClass:判断样式是否存在
	function hasClass(obj, cls) {  
	    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
	}  
	//addClass:为指定的dom元素添加样式
	function addClass(obj, cls) {  
    if (!hasClass(obj, cls)) obj.className += " " + cls;  
	}  
	//removeClass:删除指定dom元素的样式 
	function removeClass(obj, cls) {  
	    if (hasClass(obj, cls)) {  
	        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
	        obj.className = obj.className.replace(reg, ' ');  
	    }  
	}  

	//为菜单设置浮动监听事件
	// var lis = document.getElementsByClassName('has_secondMenu');
	// for (var i = 0; i < lis.length; i++) {
	// 	lis[i].onmouseover = function () {
	// 		addClass(this,'menu_hover');
	// 	}
	// 	lis[i].onmouseout = function () {
	// 		removeClass(this,'menu_hover');
	// 	}
	// }

	// **********************************************************************************contain开始

	//表单按钮
	var lis = document.getElementsByClassName("con_tlBox_tab")[0].children[0].children;
	//获得三角形
	var b = document.getElementById('con_tlBox_b');
	//获得输入框
	var input = document.getElementById('sq_form').children[0];
	input.focus();
	for (var i = 0; i < lis.length; i++) {
		lis[i].setAttribute('index',i);
		lis[i].onclick = function(){
			for (var j = 0; j < lis.length; j++) {
				removeClass(lis[j],'oning');
			}
			addClass(this,'oning');
			var index = this.getAttribute('index');
			b.style.left = (26+index*75)+'px';
			//获得表单title
			var tits = document.getElementsByClassName('form_title')[0].children[0].children;
			for (var k = 0; k < tits.length; k++) {
				tits[k].style.display = 'none';
			}
			tits[index].style.display = 'block';
			//表单获取焦点
			input.focus();
		}
	}

	//表单省市区见selec.js


}


