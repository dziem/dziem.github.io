function cross(x) {
				x.classList.toggle("change");
				document.getElementById("menu").classList.toggle("show-menu");
			}
			window.onscroll = function() {scroll()};

			function scroll() {
				if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
					document.getElementById("nav").classList.add("scroll");
				} else {
					document.getElementById("nav").classList.remove("scroll");
				}
				var bodyRect = document.body.getBoundingClientRect();
				var div_home_top = document.getElementById("header");
				var div_home_bottom = document.getElementById("introduction");
				var div_features = document.getElementById("features");
				var div_showcase_top = document.getElementById("showcase");
				var div_showcase_bottom = document.getElementById("developer");
				var div_pricing_top = document.getElementById("pricing");
				var div_pricing_bottom = document.getElementById("get-started");
				var div_contact_top = document.getElementById("contact");
				var div_contact_bottom = document.getElementById("footer");
				var bodyRect = document.body.getBoundingClientRect();
				var rect_home_top = div_home_top.getBoundingClientRect();
				var rect_home_bottom = div_home_bottom.getBoundingClientRect();
				var rect_features = div_features.getBoundingClientRect();
				var rect_showcase_top = div_showcase_top.getBoundingClientRect();
				var rect_showcase_bottom = div_showcase_bottom.getBoundingClientRect();
				var rect_pricing_top = div_pricing_top.getBoundingClientRect();
				var rect_pricing_bottom = div_pricing_bottom.getBoundingClientRect();
				var rect_contact_top = div_contact_top.getBoundingClientRect();
				var rect_contact_bottom = div_contact_bottom.getBoundingClientRect();
				var offsettop_home = rect_home_top.top - bodyRect.top - 5;
				var offsetbottom_home = rect_home_bottom.bottom - bodyRect.top - 5;
				var offsettop_features = rect_features.top - bodyRect.top - 5;
				var offsetbottom_features = rect_features.bottom - bodyRect.top - 5;
				var offsettop_showcase = rect_showcase_top.top - bodyRect.top - 5;
				var offsetbottom_showcase = rect_showcase_bottom.bottom - bodyRect.top - 5;
				var offsettop_pricing = rect_pricing_top.top - bodyRect.top - 5;
				var offsetbottom_pricing = rect_pricing_bottom.bottom - bodyRect.top - 5;
				var offsettop_contact = rect_contact_top.top - bodyRect.top - 5;
				var offsetbottom_contact = rect_contact_bottom.bottom - bodyRect.top - 5;
				if (window.pageYOffset > offsettop_home && window.pageYOffset < offsetbottom_home){
					document.getElementById("menu-item-1").classList.add("nav-active");
				}
				else{
					document.getElementById("menu-item-1").classList.remove("nav-active");
				};
				if (window.pageYOffset > offsettop_features && window.pageYOffset < offsetbottom_features){
					document.getElementById("menu-item-2").classList.add("nav-active");
				}
				else{
					document.getElementById("menu-item-2").classList.remove("nav-active");
				};
				if (window.pageYOffset > offsettop_showcase && window.pageYOffset < offsetbottom_showcase ){
					document.getElementById("menu-item-3").classList.add("nav-active");
				}
				else{
					document.getElementById("menu-item-3").classList.remove("nav-active");
				};
				if (window.pageYOffset > offsettop_pricing && window.pageYOffset < offsetbottom_pricing){
					document.getElementById("menu-item-4").classList.add("nav-active");
				}
				else{
					document.getElementById("menu-item-4").classList.remove("nav-active");
				};
				if (window.pageYOffset > offsettop_contact && window.pageYOffset < offsetbottom_contact){
					document.getElementById("menu-item-5").classList.add("nav-active");
				}
				else{
					document.getElementById("menu-item-5").classList.remove("nav-active");
				};
			}