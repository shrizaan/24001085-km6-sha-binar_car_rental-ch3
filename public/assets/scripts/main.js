const searchResultContainer = document.getElementById('search-result');
const searchForm = document.getElementById('search-form');
const selectDriverType = document.getElementById('select-driver-type');
const selectDate = document.getElementById('select-date');

async function searchCar(driverType, selectDate, selectTime, totalPassanger) {
  const response = await fetch(
    `http://localhost:3000/cars?driverType=${driverType}&selectDate=${selectDate}&selectTime=${selectTime}&totalPassanger=${totalPassanger}`
  );
  const { data } = await response.json();
  return data;
}

function renderFilterCar(car) {
  return `
      <div class="card h-100 car">
        <img src="${car.image}" class="card-img-top car__image" alt="${car.manufacture}">
        <div class="card-body d-flex flex-column">
          <h6>${car.model} (${car.type})</h6>
          <h5 class="card-title">Rp ${car.rentPerDay} / hari</h5>
          <p class="card-text">${car.description}</p>
          <ul class="mb-5">
            <li class="d-flex">
              <img class="img-fluid" src="./images/fi_users.png" alt="total passanger" />
              <p>${car.capacity} orang</p>
            </li>
            <li class="d-flex">
              <img class="img-fluid" src="./images/fi_settings.png" alt="total passanger" />
              <p>${car.transmission}</p>
            </li>
            <li class="d-flex">
              <img class="img-fluid" src="./images/fi_calendar.png" alt="total passanger" />
              <p>Tahun ${car.year}</p>
            </li>
          </ul>

          <a href="#" class="btn btn-bcr-primary w-100" style="margin-top: auto;">Pilih Mobil</a>
        </div>
      </div>
      `;
}

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  searchResultContainer.innerHTML = '';

  const formObj = new FormData(e.target, e.submitter);

  const driverType = formObj.get('driver-type');
  const selectDate = formObj.get('select-date');
  const selectTime = formObj.get('select-time');
  const totalPassanger = formObj.get('total-passanger') || 0;

  const searchResultArr = await searchCar(
    driverType,
    selectDate,
    selectTime,
    totalPassanger
  );

  // console.log(searchResultArr);

  searchResultArr.forEach((car) => {
    const node = document.createElement('div');
    node.className = 'col';
    node.innerHTML = renderFilterCar(car);
    searchResultContainer.appendChild(node);
  });
});
