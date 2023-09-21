
let shoeBrands = ["Nike", "Adidas", "Puma", "Reebok", "New Balance", "Vans", "Converse", "Under Armour", "Skechers", "Fila"];


function displayArray(arrayToShow) {
  const outputElement = document.getElementById('output');
  if (arrayToShow) {
    outputElement.textContent = 'Shoe Brands: [' + arrayToShow.join(', ') + ']';
  } else {
    outputElement.textContent = 'Shoe Brands: [' + shoeBrands.join(', ') + ']';
  }
}


document.getElementById('pushButton').addEventListener('click', function() {
  const newBrand = prompt('Enter a new shoe brand:');
  if (newBrand) {
    shoeBrands.push(newBrand);
    displayArray();
  }
});


document.getElementById('popButton').addEventListener('click', function() {
  shoeBrands.pop();
  displayArray();
});


document.getElementById('sliceButton').addEventListener('click', function() {
  const slicedBrands = shoeBrands.slice(2, 7);
  displayArray(slicedBrands);
});


displayArray();
