// JavaScript Document
		//页头登陆键位
window.onload = function(){
		var oDl = document.getElementById('Dl');
    	var oCk = document.getElementById('Ck');
		var oClose = document.getElementById('close');
		oDl.onmouseover = function (){
				oCk.style.display = 'block';
			}
		oClose.onclick = function (){
				oCk.style.display = 'none';
		   }
		//第一部右侧选项卡   
		var oNav = document.getElementById('dh1');
		var uli = oNav.getElementsByTagName('li');
		var oContent = document.getElementById('nr1');
		var oli = oContent.getElementsByTagName('li')
		for(var i=0;i<uli.length;i++){
			uli[i].index = i;
				
			uli[i].onclick = function(){

				for(var j=0;j<uli.length;j++){
					uli[j].className = "";
					oli[j].style.display = 'none';}
				
				this.className = 'active';
				
				oli[this.index].style.display = 'block';}
				}
				
		//第一部中间第一个选项卡
		
		var oNav1 = document.getElementById('dh2');
		var uli1 = oNav1.getElementsByTagName('li');
		var oContent1 = document.getElementById('nr2');
		var oli1 = oContent1.getElementsByTagName('li');
		
		for(var i=0;i<uli1.length;i++){
			uli1[i].index = i;
				
			uli1[i].onclick = function(){

				for(var j=0;j<uli1.length;j++){
					uli1[j].className = "";
					oli1[j].style.display = 'none';}
				
				this.className = 'active';
				
				oli1[this.index].style.display = 'block';}
				}
		//第一部中间第二个选项卡
		
		var oNav2 = document.getElementById('dh3');
		var uli2 = oNav2.getElementsByTagName('li');
		var oContent2 = document.getElementById('nr3');
		var oli2 = oContent2.getElementsByTagName('li');
		
		for(var i=0;i<uli2.length;i++){
			uli2[i].index = i;
				
			uli2[i].onclick = function(){

				for(var j=0;j<uli2.length;j++){
					uli2[j].className = "";
					oli2[j].style.display = 'none';}
				
				this.className = 'active';
				
				oli2[this.index].style.display = 'block';}
				}
				
		//第一部中间第三个选项卡
		
		var oNav3 = document.getElementById('dh4');
		var uli3 = oNav3.getElementsByTagName('li');
		var oContent3 = document.getElementById('nr4');
		var oli3 = oContent3.getElementsByTagName('li');
		
		for(var i=0;i<uli3.length;i++){
			uli3[i].index = i;
				
			uli3[i].onclick = function(){

				for(var j=0;j<uli3.length;j++){
					uli3[j].className = "";
					oli3[j].style.display = 'none';}
				
				this.className = 'active';
				
				oli3[this.index].style.display = 'block';}
				}
				
		//第一部分右侧第一个选项卡
		
		var oNav4 = document.getElementById('dh5');
		var uli4 = oNav4.getElementsByTagName('li');
		var oContent4 = document.getElementById('nr5');
		var oli4 = oContent4.getElementsByTagName('li');
		
		for(var i=0;i<uli4.length;i++){
			uli4[i].index = i;
				
			uli4[i].onclick = function(){

				for(var j=0;j<uli4.length;j++){
					uli4[j].className = "";
					oli4[j].style.display = 'none';}
				
				this.className = 'active';
				
				oli4[this.index].style.display = 'block';}
				}
				
		//第一部分右侧第二个选项卡
		
		var oNav5 = document.getElementById('dh6');
		var uli5 = oNav5.getElementsByTagName('li');
		var oContent5 = document.getElementById('nr6');
		var oli5 = oContent5.getElementsByTagName('li');
		
		for(var i=0;i<uli5.length;i++){
			uli5[i].index = i;
				
			uli5[i].onclick = function(){

				for(var j=0;j<uli5.length;j++){
					uli5[j].className = "";
					oli5[j].style.display = 'none';}
				
				this.className = 'active';
				
				oli5[this.index].style.display = 'block';}
				}
		
		//第二部分中间选项卡
		
		var oNav6 = document.getElementById('dh7');
		var uli6 = oNav6.getElementsByTagName('li');
		var oContent6 = document.getElementById('nr7');
		var oli6 = oContent6.getElementsByTagName('li');
		
		for(var i=0;i<uli6.length;i++){
			uli6[i].index = i;
				
			uli6[i].onclick = function(){

				for(var j=0;j<uli6.length;j++){
					uli6[j].className = "";
					oli6[j].style.display = 'none';}
				
				this.className = 'active';
				
				oli6[this.index].style.display = 'block';}
				}
				
		//第二部分右侧选项卡
		
		var oNav7 = document.getElementById('dh8');
		var uli7 = oNav7.getElementsByTagName('li');
		var oContent7 = document.getElementById('nr8');
		var oli7 = oContent7.getElementsByTagName('li');
		
		for(var i=0;i<uli7.length;i++){
			uli7[i].index = i;
				
			uli7[i].onclick = function(){

				for(var j=0;j<uli7.length;j++){
					uli7[j].className = "";
					oli7[j].style.display = 'none';}
				
				this.className = 'active';
				
				oli7[this.index].style.display = 'block';}
				}

		//轮播图
		var olist = document.getElementById('list');
 		var oli = olist.getElementsByTagName('li');
		var odian = document.getElementById('dian');
 		var oem = odian.getElementsByTagName('em');
		var oprev = document.getElementById('prev');
		var onext = document.getElementById('next');
		var obox = document.getElementById('lunbo');

	var timer = null;
 		var num = 0;
 	function tab(){
 		olist.style.left = -num*oli[0].offsetWidth+'px';
 			for(var i=0;i<oem.length;i++){
 				oem[i].className = '';
 			}	
 			oem[num].className = 'active';
 	}  
 	for(var i=0;i<oem.length;i++){
 		oem[i].index = i;
 		oem[i].onclick = function (){
 			
 			num = this.index;
 			tab();
 			
 		}
 		onext.onclick = function (){
 			num++;
 			if(num==oem.length){
 				num=0;
 			}
 			tab();	
 		}
 		oprev.onclick = function (){
 			num--;
 			if(num==-1){
 				num=oem.length-1;
 			}
 			tab();
 		}

 	}

 		timer=setInterval(function(){

 			num++;
 			if(num==oem.length){
 				num=0;
 			}
 			tab();
		},1000)
 		obox.onmouseover = function (){
 			clearInterval(timer)
 		}
 		obox.onmouseout = function (){
 			clearInterval(timer);
 			timer=setInterval(function(){
 			num++;
 			if(num==oem.length){
 				num=0;
 			}
 			tab();
 		},1000)
		}
		
		//第三部分右侧选项卡
		
		var oNav8 = document.getElementById('dh9');
		var uli8 = oNav8.getElementsByTagName('li');
		var oContent8 = document.getElementById('nr9');
		var oli8 = oContent8.getElementsByTagName('li');
		
		for(var i=0;i<uli8.length;i++){
			uli8[i].index = i;
				
			uli8[i].onclick = function(){

				for(var j=0;j<uli8.length;j++){
					uli8[j].className = "";
					oli8[j].style.display = 'none';}
				
				this.className = 'active';
				
				oli8[this.index].style.display = 'block';}
				}
				
				//第四部分中间第一个选项卡
				var oNav9 = document.getElementById('dh10');
				var uli9 = oNav9.getElementsByTagName('li');
				var oContent9 = document.getElementById('nr10');
				var oli9 = oContent9.getElementsByTagName('li');
		
				for(var i=0;i<uli9.length;i++){
					uli9[i].index = i;
				
					uli9[i].onclick = function(){

					for(var j=0;j<uli9.length;j++){
						uli9[j].className = "";
						oli9[j].style.display = 'none';}
				
					this.className = 'active';
				
					oli9[this.index].style.display = 'block';}
				}
				
				//第四部分中间第二个选项卡
				var oNav10 = document.getElementById('dh11');
				var uli10 = oNav10.getElementsByTagName('li');
				var oContent10 = document.getElementById('nr11');
				var oli10 = oContent10.getElementsByTagName('li');
		
				for(var i=0;i<uli10.length;i++){
					uli10[i].index = i;
				
					uli10[i].onclick = function(){

					for(var j=0;j<uli10.length;j++){
						uli10[j].className = "";
						oli10[j].style.display = 'none';}
				
					this.className = 'active';
				
					oli10[this.index].style.display = 'block';}
				}
				
				//第四部分中间三个选项卡
				var oNav11 = document.getElementById('dh12');
				var uli11 = oNav11.getElementsByTagName('li');
				var oContent11 = document.getElementById('nr12');
				var oli11 = oContent11.getElementsByTagName('li');
		
				for(var i=0;i<uli11.length;i++){
					uli11[i].index = i;
				
					uli11[i].onclick = function(){

					for(var j=0;j<uli11.length;j++){
						uli11[j].className = "";
						oli11[j].style.display = 'none';}
				
					this.className = 'active';
				
					oli11[this.index].style.display = 'block';}
				}
				
				//第四部分中间四个选项卡
				var oNav12 = document.getElementById('dh13');
				var uli12 = oNav12.getElementsByTagName('li');
				var oContent12 = document.getElementById('nr13');
				var oli12 = oContent12.getElementsByTagName('li');
		
				for(var i=0;i<uli12.length;i++){
					uli12[i].index = i;
				
					uli12[i].onclick = function(){

					for(var j=0;j<uli12.length;j++){
						uli12[j].className = "";
						oli12[j].style.display = 'none';}
				
					this.className = 'active';
				
					oli12[this.index].style.display = 'block';}
				}
				
				
			//第四部分右侧第一个选项卡
				var oNav13 = document.getElementById('dh14');
				var uli13 = oNav13.getElementsByTagName('li');
				var oContent13 = document.getElementById('nr14');
				var oli13 = oContent13.getElementsByTagName('li');
		
				for(var i=0;i<uli13.length;i++){
					uli13[i].index = i;
				
					uli13[i].onclick = function(){

					for(var j=0;j<uli13.length;j++){
						uli13[j].className = "";
						oli13[j].style.display = 'none';}
				
					this.className = 'active';
				
					oli13[this.index].style.display = 'block';}
				}
				
				//第四部右侧间第二个选项卡
				var oNav14 = document.getElementById('dh15');
				var uli14= oNav14.getElementsByTagName('li');
				var oContent14 = document.getElementById('nr15');
				var oli14 = oContent14.getElementsByTagName('li');
		
				for(var i=0;i<uli14.length;i++){
					uli14[i].index = i;
				
					uli14[i].onclick = function(){

					for(var j=0;j<uli14.length;j++){
						uli14[j].className = "";
						oli14[j].style.display = 'none';}
				
					this.className = 'active';
				
					oli14[this.index].style.display = 'block';}
				}
				
				//第四部分右侧三个选项卡
				var oNav15 = document.getElementById('dh16');
				var uli15 = oNav15.getElementsByTagName('li');
				var oContent15 = document.getElementById('nr16');
				var oli15 = oContent15.getElementsByTagName('li');
		
				for(var i=0;i<uli15.length;i++){
					uli15[i].index = i;
				
					uli15[i].onclick = function(){

					for(var j=0;j<uli15.length;j++){
						uli15[j].className = "";
						oli15[j].style.display = 'none';}
				
					this.className = 'active';
				
					oli15[this.index].style.display = 'block';}
				}
				
				//第四部分右侧四个选项卡
				var oNav16 = document.getElementById('dh17');
				var uli16 = oNav16.getElementsByTagName('li');
				var oContent16 = document.getElementById('nr17');
				var oli16 = oContent16.getElementsByTagName('li');
		
				for(var i=0;i<uli16.length;i++){
					uli16[i].index = i;
				
					uli16[i].onclick = function(){

					for(var j=0;j<uli16.length;j++){
						uli16[j].className = "";
						oli16[j].style.display = 'none';}
				
					this.className = 'active';
				
					oli16[this.index].style.display = 'block';}
				}
				
				//第五部分中间第一个选项卡
				var oNav17 = document.getElementById('dh18');
				var uli17 = oNav17.getElementsByTagName('li');
				var oContent17 = document.getElementById('nr18');
				var oli17 = oContent17.getElementsByTagName('li');
		
				for(var i=0;i<uli17.length;i++){
					uli17[i].index = i;
				
					uli17[i].onclick = function(){

					for(var j=0;j<uli17.length;j++){
						uli17[j].className = "";
						oli17[j].style.display = 'none';}
				
					this.className = 'active';
				
					oli17[this.index].style.display = 'block';}
				}
				
				//第五部分中间二一个选项卡
				var oNav18 = document.getElementById('dh19');
				var uli18 = oNav18.getElementsByTagName('li');
				var oContent18 = document.getElementById('nr19');
				var oli18 = oContent18.getElementsByTagName('li');
		
				for(var i=0;i<uli18.length;i++){
					uli18[i].index = i;
				
					uli18[i].onclick = function(){

					for(var j=0;j<uli18.length;j++){
						uli18[j].className = "";
						oli18[j].style.display = 'none';}
				
					this.className = 'active';
				
					oli18[this.index].style.display = 'block';}
				}
				
				//第五部分右侧第一个选项卡
				var oNav19 = document.getElementById('dh20');
				var uli19 = oNav19.getElementsByTagName('li');
				var oContent19 = document.getElementById('nr20');
				var oli19 = oContent19.getElementsByTagName('li');
		
				for(var i=0;i<uli19.length;i++){
					uli19[i].index = i;
				
					uli19[i].onclick = function(){

					for(var j=0;j<uli19.length;j++){
						uli19[j].className = "";
						oli19[j].style.display = 'none';}
				
					this.className = 'active';
				
					oli19[this.index].style.display = 'block';}
				}



























}