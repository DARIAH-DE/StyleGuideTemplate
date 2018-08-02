;(function () {
	var nav = document.querySelectorAll('.nav')
	if (!nav.length) return

	var header = document.querySelector('.header')

	forEach(header.querySelectorAll('.nav_item.-level-1.-has-children > .nav_link'), function (node) {
		var parent = node.parentElement
		node.addEventListener('click', function (event) {
			if (isSmallScreen()) {
				parent.classList.toggle('-open')
				parent.querySelector('.nav_list.-level-2').classList.toggle('-open')
				return
			} else {
				var wasOpen = parent.classList.contains('-open')
				closeAll()
				if (wasOpen) return
			}

			header.classList.add('-nav-open')
			parent.classList.add('-open')
			parent.querySelector('.nav_list.-level-2').classList.add('-open')
			event.stopPropagation();
		})
	})

	header.querySelector('.nav_toggle.-portal').addEventListener('click', function (event) {
		var wasOpen =  this.classList.contains('-open')
		closeAll()
		if (wasOpen) return

		this.classList.add('-open')
		header.querySelector('.nav_menu.-portal').classList.add('-open')
		event.stopPropagation()
	})

	header.querySelector('.nav_toggle.-main').addEventListener('click', function (event) {
		var wasOpen = this.classList.contains('-open')
		closeAll()
		if (wasOpen) return

		this.classList.add('-open')
		header.querySelector('.nav_menu.-main').classList.add('-open')
		event.stopPropagation()
	})

	document.body.addEventListener('click', function () {
		closeAll()
	})

	forEach(header.querySelectorAll('.nav_list'), function (node) {
		node.addEventListener('click', function (event) {
			event.stopPropagation()
		})
	})

	function closeAll() {
		header.classList.remove('-nav-open')

		header.querySelector('.nav_toggle.-main').classList.remove('-open')
		header.querySelector('.nav_menu.-main').classList.remove('-open')

		var openNavItem = header.querySelector('.nav_item.-level-1.-has-children.-open')
		if (openNavItem) openNavItem.classList.remove('-open')
		var openNavMenu = header.querySelector('.nav_list.-level-2.-open')
		if (openNavMenu) openNavMenu.classList.remove('-open')

		header.querySelector('.nav_toggle.-portal').classList.remove('-open')
		header.querySelector('.nav_menu.-portal').classList.remove('-open')

		document.querySelector('.search_form').classList.remove('-open')
		document.querySelector('.search_toggle').classList.remove('-open')
	}

	function isSmallScreen() {
		var navToggle = header.querySelector('.nav_toggle.-main')
		return (window.getComputedStyle(navToggle).display === 'block')
	}
})()
