const button = document.getElementById("calc-btn");
const description = document.getElementById("description");
const selector = document.getElementById("selector");
const input = document.getElementById("number");

const units = [
  {
    name: "sasin",
    description:
      "Sasin is the SI unit of value. It is equal to the value of money squandered by Jacek Sasin at the turn of April and May 2020 to conduct presidential presidential elections without a legal basis, which ultimately did not take place, by printing illegal ballot papers with an incomplete list of candidates in a private printing house with German capital (no candidacy of Waldemar Witkowski). Sasin is a monetary unit with a conversion factor of PLN 70 million. We always write sasin in lower case.",
  },
  {
    name: "wenta",
    description: "",
  },
];

button.addEventListener("submit", (e) => {
  e.preventDefault();
});