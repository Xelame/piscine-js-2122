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

function moduloWithNegative(a, b) {
	var isNegative = false;
	if (a < 0 && b < 0) {
		isNegative = true;
	} else if (a < 0) {
		a = -a;
	} else if (b < 0) {
		b = -b;
	}
	if (isNegative) {
		while (a <= b) {
			a -= b;
		}
	} else {
		while (a >= b) {
			a -= b;
		}
	}
	return a
}

console.log(moduloWithNegative(-123, 22)); // 13