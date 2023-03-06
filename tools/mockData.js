const shoes = [
  {
    id: 1,
    title: "newBalance",
    price: "30",
    category: "summer",
    authorId: "2",
  },
  {
    id: 2,
    title: "Geox",
    category: "winter",
    authorId: "2",
  },
  {
    id: 3,
    title: "newBalance",
    category: "winter",
    authorId: "1",
  },
  {
    id: 4,
    title: "Geox",
    category: "spring",
    authorId: "2",
  },
  {
    id: 5,
    title: "newBalance",
    category: "summer",
    authorId: "2",
  },
  {
    id: 6,
    title: "newBalance",
    category: "spring",
    authorId: "3",
  },
  {
    id: 7,
    title: "Geox",
    category: "summer",
    authorId: "3",
  },
  {
    id: 8,
    title: "Geox",
    category: "autumn",
    authorId: "1",
  },
  {
    id: 9,
    title: "Adidas",
    category: "autumn",
    authorId: "1",
  },
  {
    id: 10,
    title: "Adidas",
    category: "summer",
    authorId: "1",
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
