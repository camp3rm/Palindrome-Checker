document.addEventListener("DOMContentLoaded", function () {
	const input = document.getElementById("input");
	const checkBtn = document.getElementById("btn");
	const result = document.querySelector(".result");



	function palindromChecker() {
		let word = input.value;
		let palindromeWord = word.split('').reverse().join('');
		if (word === palindromeWord) {
			result.innerHTML = `"${word}" is Palindrom`;
		} else {
			result.innerHTML = `"${word}" isn't Palindrom`;
		}
		input.value = "";
	};

	checkBtn.addEventListener("click", palindromChecker);
});