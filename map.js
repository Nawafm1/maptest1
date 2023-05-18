map.js
javascript


const map = L.map('map').setView([24.774265, 46.738586], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const customLocations = [
    {
      name: 'wakan 008',
      latitude: 24.75831775601492,
      longitude: 46.756923013494706
    },
    {
      name: 'wakan 010',
      latitude: 24.767693435909344,
      longitude: 46.672491511649035
    },
    {
        name: 'wakan 011',
        latitude: 24.765535094724335,
        longitude: 46.67603463113496
      },
      {
        name: 'wakan 012',
        latitude: 24.778751905328512,
        longitude: 46.72698215582451
      },
      {
        name: 'wakan 013',
        latitude: 24.8040606530548,
        longitude: 46.77038500263851
      },
      {
        name: 'wakan 014',
        latitude: 24.876415117934332,
        longitude: 46.66284755846165
      },
      {
        name: 'wakan 015',
        latitude: 24.786523910052267,
        longitude: 46.618294387298576
      },
      {
        name: 'wakan 016',
        latitude: 24.783492903467955,
        longitude: 46.61788495767019
      },
      {
        name: 'wakan 017',
        latitude: 24.808854293702655,
        longitude: 46.6401604161333
      },
      {
        name: 'wakan 018',
        latitude: 24.856911858668525,
        longitude: 46.65212881797783
      },
      {
        name: 'wakan 021',
        latitude: 24.80941180267498,
        longitude: 46.75230708729802
      },
      {
        name: 'wakan 023',
        latitude: 24.693954779550342,
        longitude: 46.58957558730039
      },
      {
        name: 'wakan 025',
        latitude: 24.777439389936678,
        longitude: 46.65978580263914
      },
      {
        name: 'wakan 027',
        latitude: 24.779955555607113,
        longitude: 46.76452048465962
      },
      
  ];
 
  javascript
customLocations.forEach(location => {
  const marker = L.marker([location.latitude, location.longitude]).addTo(map);
  marker.bindPopup(`<b>${location.name}</b>`);
});