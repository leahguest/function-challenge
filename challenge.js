// exercise 1
var pickRandom = function (x) {
	return x[Math.floor(Math.random() * x.length)];
};

console.log(pickRandom([1,2,3,8,5,6]));

// exercise 2
var isPalindrome = function (x) {
	var i = 0;
	var result;
	while (i < x.length / 2) {
		if (x[i] === x[x.length - 1 -i]) {
			result = true;
		} else {
			result = false;
		}
		i++;
	}
	return result;
};

console.assert(isPalindrome('racecar') === true);

// exercise 4

var letterCount = function (x) {
	x = x.toLowerCase();
	var newObj = {}; 
	for (var i = 0; i < x.length; i++) {
		if (newObj[x[i]]) {
			newObj[x[i]] += 1;
		} else if (x[i] === ' ') {
			continue;
		} else {
			newObj[x[i]] = 1;
		}
	}
	return newObj;
};

console.assert(letterCount('Hello World'));

// exercise 3



var isIsogram = function (x) {
	var letters = /[0-9]/;

	if (x.match(letters)) {
		return false;
	}
 
	var counts = letterCount(x);

	for (var prop in counts) {
		if (counts[prop] > 1) {
			return false;
		}
	}

	return true;
};

console.assert(isIsogram('er1c') === false);
console.assert(isIsogram('leah') === true);
console.assert(isIsogram('victoria') === false);



// exercise 5 

var primes = function (n) {
	var num = [];
	var i = 1;
	while (num.length < n) {
		if (i > 2 && i%2 === 0) {
			i++;
		} else if (i > 3 && i%3 === 0) {
			i++;
		} else if (i > 5 && i%5 === 0) {
			i++;
		} else if (i > 7 && i%7 === 0) {
			i++;
		} else {
			num[num.length] = i;
			i++;
		}
	}
	return num;

};

console.log(primes(14));





