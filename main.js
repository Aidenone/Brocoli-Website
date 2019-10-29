(function() {
	console.log("init");

	window.onbeforeunload = function () {
  		window.scrollTo(0, 0);
	}

	window.onscroll = function (e) {

		if(window.scrollY > 0) {
			document.getElementById("agency").classList.remove("hidden");
		}
		if(window.scrollY == 0) {
			document.getElementById("agency").classList.add("hidden");
		}
		if(window.scrollY > 60) {
			document.getElementById("header").classList.add("shadow");
		} else {
			document.getElementById("header").classList.remove("shadow");
		}
	    
	    const element = document.getElementById('team')
	    const elementTop = element.getBoundingClientRect().top;
	    
	    if(elementTop < 210) {
	    	let elements = document.getElementsByClassName("moved");
		    while(elements.length > 0){
		        elements[0].classList.add("unmoved");
		        elements[0].classList.remove("moved");
		    }
	    }

	    if(elementTop > 210) {
	    	let elements = document.getElementsByClassName("unmoved");
		    while(elements.length > 0){
		        elements[0].classList.add("moved");
		        elements[0].classList.remove("unmoved");
		    }
	    }
	    
	} 

	function animPremenuContent() {
		document.getElementById("pre-menu-logo").classList.add("next");
	}
	function hidePremenuContent() {
		document.getElementById("pre-menu-content").classList.add("hidden");
	}
	function hidePremenu() {
		document.getElementById("pre-menu").classList.add("hidden");
	}
	function deletePremenu() {
		document.getElementById("pre-menu").style.display = "none";
	}
	function showElem() {
		document.getElementById("logo").classList.add("show");
		document.getElementById("menu").classList.add("show");
		let elements = document.getElementsByClassName("transi-cache");
	    while(elements.length > 0){
	        elements[0].parentNode.removeChild(elements[0]);
	    }
	}
	setTimeout(animPremenuContent, 500);
	setTimeout(hidePremenuContent, 2300);
	setTimeout(hidePremenu, 2800);
	setTimeout(deletePremenu, 3100);
	setTimeout(showElem, 3150);

	function menu(){
		let menu = document.querySelector("#menu");
		let links = document.querySelector("#links");

		menu.addEventListener("click",function(e){
			console.log("click");
			e.preventDefault();
			if(!(this.classList.contains('active_menu'))){
				this.classList.toggle("active_menu");
				links.classList.add("active_links");
			} else {
				this.classList.remove("active_menu");
				links.classList.remove("active_links");
			}
		});
	}
	menu();

	// let plus = document.getElementsByClassName("plus-content");
	// for(var i = 0; i < plus.length; i++) {
 //        var p = plus[i];
 //        p.onclick = function() {
 //            alert('ho ho ho');
 //        }
 //    }

	console.log("done");
})();