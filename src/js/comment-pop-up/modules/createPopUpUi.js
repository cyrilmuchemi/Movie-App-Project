const IMAGE = document.getElementById('show-img');
const TITLE = document.getElementById('show-title');
const SHOW_DETAILS = document.getElementById('show-details');

function DataFactory(data) {
  this.image = data.image.original;

  this.title = data.name;

  this.getDate = (input) => {
    const date = new Date(input);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  this.list = [
    {
      name: 'Status',
      value: data.status,
    },
    {
      name: 'Language',
      value: data.language,
    },
    {
      name: 'Type',
      value: data.type,
    },
    {
      name: 'Premiered',
      value: this.getDate(data.premiered),
    },
  ];
}

export default (input) => {
  const data = new DataFactory(input);
  IMAGE.src = data.image;
  IMAGE.alt = data.title;
  TITLE.innerText = data.title;
  SHOW_DETAILS.innerHTML = data.list.map(({ name, value }) => `<li class="show-detail-list-items">
        <h3>${name}:</h3>
        <h3>${value}</h3>
    </li>`).join(' ');
};