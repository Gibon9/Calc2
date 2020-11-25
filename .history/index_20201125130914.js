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
    description:
      "Unit of time created in honor of Polish handball players in January 2009. One sentence lasts 15 seconds. As is well known, one sentence is a long time. Enough to change the game or miss the bus, anyway.",
  },
  {
    name: "Gołota",
    description: `Unit of time created in 2005, when the duel between Andrzej Gołota and Lamon Brewster, announced as the "Battle of Chicago", took place. Golota fell on the boards three times in less than a minute before it was decided that he was knocked out. one Golota is 53 seconds long`,
  },
];

button.addEventListener("submit", (e) => {
  e.preventDefault();
});
