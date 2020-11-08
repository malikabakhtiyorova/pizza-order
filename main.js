
var elResult = document.querySelector(".result-box");

var elResultIngredients = document.querySelector(".result-ing");
// elResult.appendChild(elResultIngredients);
var elResultSelect = document.querySelector(".result-select");
var elResultSize = document.querySelector(".result-size");
var elResultAdd = document.querySelector(".result-add");


var pizzaAdd = ["Achchiq", "Sosiskali"];
var yourPizzaAdd = [];

var elAddWrapper = document.querySelector('.add-wrapper');

for (var i = 0; i < pizzaAdd.length; i++) {
  var elNewLabel = document.createElement('label');

  var elNewCheckbox = document.createElement('input');
  elNewCheckbox.type = 'checkbox';
  // elNewCheckbox.setAttribute('type', 'checkbox');
  elNewCheckbox.name = pizzaAdd[i];
  elNewCheckbox.value = pizzaAdd[i];

  elNewCheckbox.addEventListener('change', function () {
    if (yourPizzaAdd.includes(this.name)) {
      var carIndex = yourPizzaAdd.indexOf(this.name);
      yourPizzaAdd.splice(carIndex, 1);
    } else {
      yourPizzaAdd.push(this.name);
    }
    console.log(yourPizzaAdd);
    elResultAdd.textContent = yourPizzaAdd.join(', ');
  });


  var elNewSpan = document.createElement('span');
  elNewSpan.textContent = pizzaAdd[i];

  elNewLabel.appendChild(elNewCheckbox);
  elNewLabel.appendChild(elNewSpan);

  elAddWrapper.appendChild(elNewLabel);


}

// ////////////////////////////////////////////////////////////////////////////

var pizzaSize = ["25sm", "30sm", "35sm"];
var yourPizzaSize = [];

var elSizeWrapper = document.querySelector('.size-wrapper');

for (var i = 0; i < pizzaSize.length; i++) {
  var elNewLabel = document.createElement('label');

  var elNewCheckbox = document.createElement('input');
  elNewCheckbox.type = 'checkbox';
  // elNewCheckbox.setAttribute('type', 'checkbox');
  elNewCheckbox.name = pizzaSize[i];
  elNewCheckbox.value = pizzaSize[i];

  elNewCheckbox.addEventListener('change', function () {
    if (yourPizzaSize.includes(this.name)) {
      var carIndex = yourPizzaSize.indexOf(this.name);
      yourPizzaSize.splice(carIndex, 1);
    } else {
      yourPizzaSize.push(this.name + "li");
    }
    console.log(yourPizzaSize);
    elResultSize.textContent = yourPizzaSize.join(', ');
  });


  var elNewSpan = document.createElement('span');
  elNewSpan.textContent = pizzaSize[i];

  elNewLabel.appendChild(elNewCheckbox);
  elNewLabel.appendChild(elNewSpan);

  elSizeWrapper.appendChild(elNewLabel);


}
// /////////////////////////////////////////////////////////////////////////////////////////////////


var pizzaIngredients = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Bodring"];
var yourPizzaIng = [];

var elCheckboxWrapper = document.querySelector('.ingredients-group');

for (var i = 0; i < pizzaIngredients.length; i++) {
  var elNewLabel = document.createElement('label');

  var elNewCheckbox = document.createElement('input');
  elNewCheckbox.type = 'checkbox';
  // elNewCheckbox.setAttribute('type', 'checkbox');
  elNewCheckbox.name = pizzaIngredients[i];
  elNewCheckbox.value = pizzaIngredients[i];

  elNewCheckbox.addEventListener('change', function () {
    if (yourPizzaIng.includes(this.name)) {
      var carIndex = yourPizzaIng.indexOf(this.name);
      yourPizzaIng.splice(carIndex, 1);
    } else {
      yourPizzaIng.push(this.name + "li");
    }
    console.log(yourPizzaIng);
    elResultIngredients.textContent = yourPizzaIng.join(', ');
  });


  var elNewSpan = document.createElement('span');
  elNewSpan.textContent = pizzaIngredients[i];

  elNewLabel.appendChild(elNewCheckbox);
  elNewLabel.appendChild(elNewSpan);

  elCheckboxWrapper.appendChild(elNewLabel);


}

// //////////////////////////////////////////////////////////////////


var breadThickness = ["Qalin", "O'rtacha", "Yupqa"];
var yourPizzaSelect = [];

var elSelectWrapper = document.querySelector('.bread-thickness');

for (var i = 0; i < breadThickness.length; i++) {
  // var elNewLabel = document.createElement('label');

  var elNewSelect = document.createElement('option');
  // elNewCheckbox.type = '';
  // elNewCheckbox.setAttribute('type', 'checkbSelect.name = breadThickness[i];
  elNewSelect.value = breadThickness[i];
  elNewSelect.textContent = breadThickness[i];
  elNewSelect.name = breadThickness[i];

  elSelectWrapper.addEventListener('change', function () {
    if (yourPizzaSelect.includes(this.value)) {
      var carIndex = yourPizzaSelect.indexOf(this.value);
      yourPizzaSelect.splice(carIndex, 1);
    } else {
      yourPizzaSelect.push(this.value);
    }
    console.log(yourPizzaSelect);
    elResultSelect.textContent = yourPizzaSelect.join(', ');
  });


  var elNewSpan = document.createElement('span');
  elNewSpan.textContent = breadThickness[i];

  // elNewCheckbox.appendChild(elSelectWrapper);
  // elNewLabel.appendChild(elNewSpan);

  elSelectWrapper.appendChild(elNewSelect);


}
//

