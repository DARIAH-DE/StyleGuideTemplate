;(function () {
	window.addEventListener('keydown', function (event) {
		if (event.keyCode === 27) { // Esc
			document.body.click()
		}
	})
})()
