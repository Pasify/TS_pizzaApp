import "./style.css";
// import "./test";
type Pizza = {
  name: string;
  price: number;
};

type OrderType = {
  id: number;
  status: string;
  pizza: Pizza;
};
type OrderQueueType = OrderType[];
const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];
let cashInRegister: number = 100;
let orderQueue: OrderQueueType = [];
let nextOrderId: number = 1;

const addNewPizza = (pizzaObj: Pizza) => menu.push(pizzaObj);

const placeOrder = (pizzaName: string) => {
  const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName}cannot be found in menu.`);
    return;
  }
  cashInRegister += selectedPizza?.price;
  const newOrder: OrderType = {
    pizza: selectedPizza,
    status: "ordered",
    id: nextOrderId++,
  };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (orderId: number) => {
  let order = orderQueue.find((item) => item.id === orderId);
  if (!order) return;
  order.status = "completed";
  return order;
};

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
