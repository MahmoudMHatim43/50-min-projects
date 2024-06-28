/* {
    "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
    "36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
    "41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
    "46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
    "51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
    "56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
    "61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
    "66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
    "71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
    "76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
    "81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
    "86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
    "91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
    "96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
    "101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
    "106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
    "111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
    "116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
    "121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
    "126": "~",    "127": ""
} */
// 97 -> 122 = a -> z || 65 -> 90 = A -> Z
const password = document.getElementById("password");
const upperCases = document.getElementById("UpperCase");
const lowerCases = document.getElementById("LowerCase");
const symbols = document.getElementById("Symbols");
const numbers = document.getElementById("Numbers");
const length = document.getElementById("length");
const btn = document.querySelector(".clipboard-btn");
const generateButton = document.getElementById("generate");

generateButton.addEventListener("click", () => {
	const len = +length.value;
	const hasLower = lowerCases.checked;
	const hasUpper = upperCases.checked;
	const hasNumbers = numbers.checked;
	const hasSymbols = symbols.checked;
	password.innerHTML = generatePassword(hasLower, hasUpper, hasSymbols, hasNumbers, len);
});
// generate password function
function generatePassword(lower, upper, symbol, number, length) {
	let generatedPassword = ``;
	const typesCount = lower + upper + symbol + number;
	const typesArr = [{ lower }, { upper }, { symbol }, { number }].filter(
		res => Object.values(res)[0]
	);
	if (typesCount === 0) {
		return "";
	}
	for (let i = 0; i < length; i += Math.floor(Math.random() * 10)) {
		typesArr.forEach(type => {
			const functonFromObject = Object.keys(type)[0];
			generatedPassword += randomFunctions[functonFromObject]();
		});
	}
	const final = generatedPassword.slice(0, length);
	return final;
}
// clipboard
btn.addEventListener("click", () => {
	const copyArea = document.createElement("textarea");
	const resultPassword = password.innerHTML;
	if (!resultPassword) {
		return;
	}
	copyArea.value = resultPassword;
	document.body.appendChild(copyArea);
	copyArea.select();
	copyArea.setSelectionRange(0, 99999); // for mobile device
	document.execCommand("copy");
	copyArea.remove();
	alert("Password copied to clipboard");
});
// object containing all the random generation functions
const randomFunctions = {
	// 'key': 'value'
	lower: getLowerCase,
	upper: getUpperCase,
	symbol: getSymbol,
	number: getNumber,
};
// random functions
getLowerCase();
function getLowerCase() {
	const min = 97;
	const max = 122;
	return String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
}
getUpperCase();
function getUpperCase() {
	const min = 65;
	const max = 90;
	return String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
}
getSymbol();
function getSymbol() {
	const symbols = "!@#$%^&*()_+-=[]{}|;:<>?,./";
	return symbols[Math.floor(Math.random() * symbols.length)];
}
getNumber();
function getNumber() {
	const min = 0;
	const max = 9;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
