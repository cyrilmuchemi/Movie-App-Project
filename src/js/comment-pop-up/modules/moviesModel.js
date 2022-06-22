function DataFactory(data) {
  this.id = data.id;
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

export default DataFactory;