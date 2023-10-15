// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const data: [string, string][] = [
  ['India', 'New Delhi'],
  ['Pakistan', 'Islamabad'],
];

const countries = new Map(data);

let countriesOnUi = [];

for (let ent of countries) {
  const [key, value] = ent;
  countriesOnUi.push(key);
  countriesOnUi.push(value);
}

for (let ent of countries) {
  const [key, value] = ent;
  countries.set(value, key);
}

countriesOnUi.sort(() => 0.5 - Math.random());

// console.log(countries);
// console.log(countriesOnUi);

// console.log(countries.get('New Delhi'));

let selected = '';

const handleClick = (e: MouseEvent) => {
  e.preventDefault();
  const target = e.target as HTMLButtonElement;
  if (!selected) {
    target.classList.toggle('selected');
    selected = target.value;
  } else {
    const matched = countries.get(target.value) === selected;
    console.log(matched);

    if (matched) {
      countriesOnUi = countriesOnUi.filter(
        (item) => item !== target.value && item !== selected
      );
    }

    renderTiles(countriesOnUi);
  }

  // console.log(value);
};

const renderTiles = (list) => {
  appDiv.innerHTML = '';
  selected = '';
  for (let item of list) {
    const button = document.createElement('button');
    button.innerText = button.value = item;
    button.addEventListener('click', handleClick);
    appDiv.insertAdjacentElement('beforeend', button);
  }
};

renderTiles(countriesOnUi);
