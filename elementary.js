function multiply(a, b) {
	var isNegative = false;
	var result = 0;
	if (b < 0) {
		isNegative = true;
		b = -b;
	}
	for (var i = 0; i < b; i++) {
		result += a;
	}
	if (isNegative) {
		result = -result;
	}
	return result;
}

function divide(a, b) {
	var isNegative = false;
	var result = 0;
	if (a < 0) {
		isNegative = true;
		a = -a;
	}
	if (b < 0) {
		isNegative = !isNegative;
		b = -b;
	}
	while (a >= b) {
		a -= b;
		result++;
	}
	if (isNegative) {
		result = -result;
	}
	return result;
}

function modulo(a, b) {
	var isNegative = false;
	if (a < 0) {
		isNegative = true;
		a = -a;
	}
	if (b < 0) {
		isNegative = !isNegative;
		b = -b;
	}
	while (a >= b) {
		a -= b;
	}
	if (isNegative) {
		a = -a;
	}
	return a;
}