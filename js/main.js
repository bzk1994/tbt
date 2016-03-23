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
}