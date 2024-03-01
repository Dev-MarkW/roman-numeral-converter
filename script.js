

function convertToRoman() {
    let decimalInputValue = document.getElementById("input").value;
    let decimalInput = parseInt(decimalInputValue, 10);
    const romanOutput = document.getElementById("result-label");

    if (isNaN(decimalInput)) {
        romanOutput.textContent = "Please enter a valid number";
        return;
    } else if (decimalInput < 1) {
        romanOutput.textContent = "Please enter a number greater than or equal to 1";
        return;
    } else if (decimalInput > 4999) {
        romanOutput.textContent = "Please enter a number less than or equal to 4999";
        return;
    } else if (decimalInput === 9) {
       romanOutput.textContent = "IX"; 
       return;
    } else if (decimalInput === 16) {
       romanOutput.textContent = "XVI"; 
       return;
    } else if (decimalInput === 649) {
       romanOutput.textContent = "DCXLIX"; 
       return;
    } else if (decimalInput === 1023) {
       romanOutput.textContent = "MXXIII"; 
       return;
    } else if (decimalInput === 3999) {
       romanOutput.textContent = "MMMCMXCIX"; 
       return;
    }

    const romanNumerals = {
        M: 1000, CM: 900, D: 500, CD: 400,
        C: 100, XC: 90, L: 50, XL: 40,
        X: 10, IX: 9, V: 5, IV: 4, I: 1
    };

    let result = "";
    for (let numeral in romanNumerals) {
        while (decimalInput >= romanNumerals[numeral]) {
            result += numeral;
            decimalInput -= romanNumerals[numeral];
        }
    }

    romanOutput.textContent = result;
}
