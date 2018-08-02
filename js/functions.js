// https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach(array, callback, scope) {
	if (!array) return

	for (var i = 0; i < array.length; i++) {
		callback.call(scope, array[i], i)
	}
}

// http://stackoverflow.com/a/21696585
function isVisible(element) {
	return (window.getComputedStyle(element).display !== 'none')
}
