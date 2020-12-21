const updateSubtotal = (product) => {
  const price = product.querySelector('.price span').innerText;
  const quantity = Number(product.querySelector('.quantity input').value);
  const subtotalValue = price * quantity;
  const subtotal = product.querySelector('.subtotal span').innerText = subtotalValue.toFixed(2);
}

const calculateAll = () => {
  const products = document.querySelectorAll('.product');
  let totalPriceSpan = document.querySelector('#total-value span');
  let totalPrice = 0;
  products.forEach(product => {
    updateSubtotal(product);
    totalPrice += Number(product.querySelector('.subtotal span').innerText);
    totalPriceSpan.innerText = `${totalPrice.toFixed(2)}`;
  })
}

const removeProduct = (event) => {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll();
}

const createProduct = () => {
  const parentTable = document.querySelector('tbody');
  let productNameInput = document.getElementsByClassName('create-product')[0].getElementsByTagName('td')[0].getElementsByTagName('input')[0].value;
  let priceOfProductInput = document.getElementsByClassName('create-product')[0].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
  let tableRowProduct = document.createElement('tr');
  tableRowProduct.setAttribute('class', 'product');
  // Product name
  let tdTagProductName = document.createElement('td');
  tdTagProductName.setAttribute('class', 'name');
  let spanProductName = document.createElement('span');
  spanProductName.innerText = productNameInput;
  tdTagProductName.appendChild(spanProductName);
  tableRowProduct.appendChild(tdTagProductName);
  // Product price
  let tdTagProductPrice = document.createElement('td');
  tdTagProductPrice.innerText = '$'
  tdTagProductPrice.setAttribute('class', 'price');
  let spanProductPrice = document.createElement('span');
  spanProductPrice.innerText = priceOfProductInput;
  tdTagProductPrice.appendChild(spanProductPrice);
  tableRowProduct.appendChild(tdTagProductPrice);
  // Quantity
  let tdTagQuantity = document.createElement('td');
  tdTagQuantity.setAttribute('class', 'quantity');
  let inputQuantity = document.createElement('input');
  inputQuantity.setAttribute('type', 'number');
  inputQuantity.setAttribute('min', '1');
  inputQuantity.setAttribute('value', '0');
  inputQuantity.setAttribute('placeholder', 'Quantity');
  tdTagQuantity.appendChild(inputQuantity);
  tableRowProduct.appendChild(tdTagQuantity);
  // Subtotal
  let tdTagSubtotal = document.createElement('td');
  tdTagSubtotal.innerText = '$'
  tdTagSubtotal.setAttribute('class', 'subtotal')
  let spanSubtotal = document.createElement('span');
  spanSubtotal.innerText = '0';
  tdTagSubtotal.appendChild(spanSubtotal);
  tableRowProduct.appendChild(tdTagSubtotal);
  // Button
  let tdTagButton = document.createElement('td');
  tdTagButton.setAttribute('class', 'action')
  let removeButton = document.createElement('button');
  removeButton.innerText = "Remove"
  removeButton.setAttribute('class', 'btn btn-remove');
  removeButton.addEventListener('click', removeProduct)
  tdTagButton.appendChild(removeButton);
  tableRowProduct.appendChild(tdTagButton);
  parentTable.appendChild(tableRowProduct); 
  clearNewProductInput();
}

const clearNewProductInput = () => {
  document.getElementsByClassName('create-product')[0].getElementsByTagName('td')[0].getElementsByTagName('input')[0].value = "";
  document.getElementsByClassName('create-product')[0].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value = "";
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach(btn => btn.addEventListener('click', removeProduct));
  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});

