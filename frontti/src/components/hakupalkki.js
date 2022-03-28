const hakutulos = document.getElementById('hakutulos');
const searchbar = document.getElementById('searchbar');
let tulos = [];

searchbar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredhakuehto = tulos.filter((hakuehto) => {
    return (
        hakuehto.nimi.toLowerCase().includes(searchString)
    );
});
displayhakuehto(filteredhakuehto);
});

const loadhakuehto = async () => {
  try {
      const res = await fetch('http://localhost:3001/ravintola');
      tulos = await res.json();
      displayhakuehto(tulos);
  } catch (err) {
      console.error(err);
  }
};

const displayhakuehto = (hakuehdot) => {
  const htmlString = hakuehdot
      .map((hakuehto) => {
          return `
          <li class="hakuehto">
              <h2>${hakuehto.nimi}</h2>
          </li>
      `;
      })
      .join('');
  hakutulos.innerHTML = htmlString;
};

loadhakuehto();