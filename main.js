function numberToWords(n) {
    if (n < 0 || isNaN(n))
      return "<strong>Please input a positive number.</strong>";

	 singleDigit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
	 doubleDigit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
	 belowHundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
 	if (n == "") {
 		return "<strong>Please input a valid number.</strong>"
 	} else if (n == 0) {
		return "<strong>Zero</strong>"
	}
	else if (n > 999999) {
		return "<strong>Number is Out of Range.</strong>"
	}
	function convertToWords(n) {
		word = ""
		if (n < 10) {
			word = singleDigit[n] + ' '
		}
		else if (n < 20) {
			word = doubleDigit[n - 10] + ' '
		}
		else if (n < 100) {
			tempHolder = convertToWords(n % 10)
			word = belowHundred[(n - n % 10) / 10 - 2] + ' ' + tempHolder
		}
		else if (n < 1000) {
			word = singleDigit[Math.trunc(n / 100)] + ' Hundred ' + convertToWords(n % 100)
		}
		else if (n < 1000000) {
			word = convertToWords(parseInt(n / 1000)).trim() + ' Thousand ' + convertToWords(n % 1000)
		}
		return word
	}
	 result = "Your Number is </br> <strong>" + convertToWords(n) + "</strong>"
	return result.trim()
}