
function calculateTotalPrice(quantity=1, price=10000){
  return quantity*price;
  }
  const total = calculateTotalPrice(5).toLocaleString('ru-RU',  { style: 'currency', currency: 'RUB' });
