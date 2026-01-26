var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};
services['Розбити скло'] = "200 грн";


function minPrice() {
  let min = Infinity;

  for (let key in services) {
    let price = parseInt(services[key]);
    if (price < min) {
      min = price;
    }
  }

  return min;
};


function maxPrice() {
  let max = -Infinity;

  for (let key in services) {
    let price = parseInt(services[key]);
    if (price > max) {
      max = price;
    }
  }

  return max;
};

function price() {
  let sum = 0;
  for (let key in services) {
    sum += parseInt(services[key]);
  }

  return sum;
};



console.log("maxPrice:", maxPrice());
console.log("minPrice:", minPrice());
console.log("Price:", price());

