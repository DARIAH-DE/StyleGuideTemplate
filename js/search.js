;(function () {
	var dropdown = document.querySelector('.search_form')

	if (!dropdown) return

	var input = dropdown.querySelector('.search_input')
	var toggle = document.querySelector('.search_toggle')

	toggle.addEventListener('click', function (event) {
		var doOpen = !dropdown.classList.contains('-open')

		// Close all
		document.body.click()

		if (doOpen) {
			dropdown.classList.add('-open')
			toggle.classList.add('-open')

			// Wait for transition FX
			setTimeout(function () {
				input.focus()
			}, 100)
		}
		event.stopPropagation();
	})

	document.body.addEventListener('click', function () {
		dropdown.classList.remove('-open')
		toggle.classList.remove('-open')
	})

	dropdown.addEventListener('click', function (event) {
		event.stopPropagation()
	})
})()
