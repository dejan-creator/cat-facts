//waiting for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  //accessing the button
  const button = document.querySelector("button");
  let count = 0;
  button.addEventListener("click", () => {
    //removing the previous fact
    if (count > 0) {
      const oldFact = document.querySelector(".fact");
      document.querySelector(".container").removeChild(oldFact);
    }
    //fetching the data
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((responseData) => {
        //displaying the data in the DOM
        //creating an element
        const div = document.createElement("div");
        div.classList.add("fact"); //adding a class
        div.innerHTML = responseData.fact; //adding a text
        //appending an element into a DOM
        document.querySelector(".container").appendChild(div);
        count = 1;
      });
  });
});