var a = 90;

if (a % 4 == 0) {
	if (a % 3 == 0) {
		console.log('a се дели на 3 и 4');
	}
	else {
		console.log('а сe дели на 4,но не се дели на 3')
	}
}

else {
	if (a % 3 == 0) {
		console.log('a не се дели на 4, но се дели на 3')
	}
	else {
		console.log('а не се дели нито на 3 , нито на 4')
	}
}
