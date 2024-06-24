// исходник НЕЛЬЗЯ ИЗМЕНЯТЬ

const flats = [
    {
      floor: 3,
      rooms: 2,
      project: {
        id: 1,
        name: 'Foriver',
      },
    },
    {
      floor: 1,
      rooms: 3,
      project: {
        id: 2,
        name: 'Riversky',
      },
    },
    {
      floor: 5,
      rooms: 4,
      project: {
        id: 1,
        name: 'Foriver',
      },
    },
    {
      floor: 2,
      rooms: 2,
      project: {
        id: 2,
        name: 'Riversky',
      },
    },
  ];
  
  const arrayId = {};
  
  flats.forEach(element => {
      arrayId[element.project.id] = {
        id: element.project.id,
        name: element.project.name,
        flats: [],
      };
  });
  
  const array = Object.values(arrayId);

  const map = new Map();

array.forEach(element => {
    map.set(element.id, {...element});
});


flats.forEach(element => {
    map.get(element.project.id).flats.push({floor: element.floor, rooms: element.rooms});
})

const arrayAll = [...map.values()];

console.log(arrayAll);