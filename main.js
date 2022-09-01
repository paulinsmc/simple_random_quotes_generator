//variable declaration
let quotes = document.querySelector("#quotes");
let person = document.querySelector("#person");
const btn = document.querySelector("#btn");

//list of quotes
quoteLists = [
  {
    quotes: `"The real love never die"`,
    person: "Peter Paulinuce",
  },
  {
    quotes: `"Two things are infinite: the universe and human stupidity; and am not sure about the universe"`,
    person: "Albert Einstein",
  },
  {
    quotes: `"It is strange that only extraordinary men make the discoveries, which later appear so easy and simple"`,
    person: "George C. Lichtenberg",
  },
  {
    quotes: `"There is no law that expect the law that there is no law"`,
    person: "John Archibald Wheeler",
  },
  {
    quotes: `"Falsity in intellectual action is intellectual immorality"`,
    person: "Thomas Chrowder Chamberlin",
  },
  {
    quotes: `"The saddest aspect of life right now is that gathers knowledge faster than society gathers wisdom"`,
    person: "Isaac Asimov",
  },
  {
    quotes: `"Science without religion is lame, religion without science is blind"`,
    person: "Albert Einstein",
  },
  {
    quotes: `"A man who dares to waste one hour of time has not discovered the value of life"`,
    person: "Charles Darwin",
  },
  {
    quotes: `"A good thing about science is that it's true whether or not you believe in it"`,
    person: "Neil deGrasse Tyson",
  },
];

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let randomQuotes = Math.floor(Math.random() * quoteLists.length);
  quotes.innerText = quoteLists[randomQuotes].quotes;
  person.innerText = quoteLists[randomQuotes].person;
});
