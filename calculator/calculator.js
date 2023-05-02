const display = (value) => {
    document.querySelector("#display").innerHTML += value;
  };
  
  const clearDisplay = () => {
    document.querySelector("#display").innerHTML = "";
  };
  
  const calculate = () => {
    try {
      let result = eval(document.querySelector("#display").innerHTML);
      document.querySelector("#display").innerHTML = result;
    } catch (error) {
      document.querySelector("#display").innerHTML = "Error";
    }
  };
  