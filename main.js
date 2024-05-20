function intToRoman(num) {
  const symbolsList = [
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
    ['V\u0305', 5000],
    ['X\u0305', 10000],
    ['L\u0305', 50000],
    ['C\u0305', 100000],
    ['D\u0305', 500000],
    ['M\u0305', 1000000],
  ];

  let i = symbolsList.length - 1;
  let roman = "";
  while (num > 0) {
    const currentDivider = symbolsList[i][1];
    const currentSymbol = symbolsList[i][0];

    const result = Math.floor(num / currentDivider);
    if (result > 0) {
      let temp = "";
      for (let j = 0; j < result; j++) {
        temp += currentSymbol;
      }
      roman += temp;
      num %= currentDivider;
    }
    i -= 1;
  }
  return roman;
}

const UserInput = document.getElementById("number");
const ConvertButton = document.getElementById("convert-button");
const errorParagraph = document.getElementById("error");
const output = document.getElementById("output");

const noOutput = () => {
  output.textContent = "";
}

const mainEngine = () => {
  const inputValue = UserInput.value;

  if (inputValue === "") {
    errorParagraph.textContent = "Please enter your value";
    noOutput();
    return;
  }
  if (inputValue >= 4000000) {
    errorParagraph.textContent = "Please enter a value less than 4,000,000";
    noOutput();
    return;
  }
  if (inputValue <= 0) {
    errorParagraph.textContent = "Please enter a value greater than 0";
    noOutput();
    return;
  }

  const romanValue = intToRoman(inputValue);
  output.textContent = `${inputValue} = ${romanValue}`;
}

ConvertButton.addEventListener('click', (event) => {
  mainEngine();
});

ConvertButton.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    mainEngine();
  }
});
