function getRandomInt(start, end) {
  return Math.floor(Math.random() * (end - start)) + start;
};

function initSale() {
  // Get the discount container and clear it
  var discountContainer = document.getElementById("discounts");
  while (discountContainer.firstChild) {
      discountContainer.removeChild(discountContainer.firstChild);
  }

  // How long in ms to wait until adding another sale box.
  var interval = 200;

  // Set an interval to decrease the interval
  window.setInterval(function() {
    interval = Math.max(10, interval - 10);
  }, 500);

  var numSales = 0;
  // Adds a sale box at a random x position.
  function addSale() {
    var maxSales = 100;
    var xPos = getRandomInt(0, 101);
    var percentOff = getRandomInt(2, 18) * 5;
    // Just copy the hidden box we had at page load time to make a new box.
    
    var saleElement = document.createElement("span");
    saleElement.className = "discount"
    var saleText = document.createTextNode("-" + percentOff + "%");
    saleElement.appendChild(saleText);

    saleElement.style.left = xPos + "%";
    discountContainer.append(saleElement);
    numSales++;

    //Only have maxSales sale boxes onscreen at once.
    if (numSales < maxSales) {
      // Add a new sale box later.
      window.setTimeout(addSale, interval);
    }
  };
  
  addSale();
}

window.onload = initSale;
