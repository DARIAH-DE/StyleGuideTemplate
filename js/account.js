// TODO: Merge with language.js
;(function () {
	var dropdown = document.querySelector('.account_list')

	if (!dropdown) return;

	var toggle = document.querySelector('.account_toggle')

	toggle.addEventListener('click', function (event) {
		var doOpen = !dropdown.classList.contains('-open')

		// Close all
		document.body.click()

		if (doOpen) {
			dropdown.classList.add('-open')
			toggle.classList.add('-open')
		}

		event.stopPropagation()
	})

	document.body.addEventListener('click', function () {
		dropdown.classList.remove('-open')
		toggle.classList.remove('-open')
	})

	dropdown.addEventListener('click', function (event) {
		event.stopPropagation()
	})
})()
