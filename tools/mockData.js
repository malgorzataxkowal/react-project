const shoes = [
  {
    id: 1,
    title: "newBalance",
    price: "30",
    category: "summer",
  },
  {
    id: 2,
    title: "Geox",
    category: "winter",
  },
  {
    id: 3,
    title: "newBalance",
    category: "winter",
  },
  {
    id: 4,
    title: "Geox",
    category: "spring",
  },
  {
    id: 5,
    title: "newBalance",
    category: "summer",
  },
  {
    id: 6,
    title: "newBalance",
    category: "spring",
  },
  {
    id: 7,
    title: "Geox",
    category: "summer",
  },
  {
    id: 8,
    title: "Geox",
    category: "autumn",
  },
  {
    id: 9,
    title: "Adidas",
    category: "autumn",
  },
  {
    id: 10,
    title: "Adidas",
    category: "summer",
  },
];

const authors = [
  { id: 1, name: "Jan Kowalski" },
  { id: 2, name: "Adam Nowak" },
  { id: 3, name: "Anna Kowalska" },
];

const newShoe = {
  id: null,
  title: "",
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newShoe,
  shoes,
  authors,
};
