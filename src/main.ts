import "./style.css";
// import "./test";
type Pizza = {
  id: number;
  name: string;
  price: number;
};

type OrderType = {
  id: number;
  status: "ordered" | "completed";
  pizza: Pizza;
};
type OrderQueueType = OrderType[];
const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];
let cashInRegister: number = 100;
let orderQueue: OrderQueueType = [];
let nextOrderId: number = 1;

const addNewPizza = (pizzaObj: Pizza): number | void => menu.push(pizzaObj);

const placeOrder = (pizzaName: string): OrderType | undefined => {
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

const completeOrder = (orderId: number): OrderType | undefined => {
  let order = orderQueue.find((item) => item.id === orderId);
  if (!order) return;
  order.status = "completed";
  return order;
};

export function getPizzaDetail<FIT>(identifier: FIT): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === Number(identifier));
  } else {
    throw new TypeError(
      `parameter "identifier" must either be a string or a number`
    );
  }
}
addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

// updated status type
