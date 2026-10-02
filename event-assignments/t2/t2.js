
'use strict';

const fetchURL = async() => {
  try { 
    const response = await fetch('https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/:id')
    if (!response.ok) { 
            throw new Error(`Response status: ${response.status}`);
        }
    
    const restaurants = await response.json();    

    function sortRestaurants(a, b) {
    return a.name.localeCompare(b.name);
}
restaurants.sort(sortRestaurants);

const table = document.querySelector('table');
const dialog = document.querySelector('dialog');
const companyFilter = document.querySelector('#companyFilter');

const displayRestaurants = (restaurantList) => {
table.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Address</th>
    </tr>`;

// Display restaurants
restaurants.forEach((restaurant) => {
    const row = document.createElement('tr');

    const name = document.createElement('td');
    name.textContent = restaurant.name;

    const address = document.createElement('td');
    address.textContent = restaurant.address;

    name.addEventListener('click', async() => {
        try {
        document.querySelectorAll('first-child').forEach((element) => {
            element.classList.remove('highlight');
        });

        name.classList.add('highlight');

        const menu = await fetchMenu('https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/:id/:lang')

        // Show restaurant information in modal
        dialog.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Postal code:</strong> ${postalCode}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Menu:</strong>${menu ? menu : 'Could not load today\'s menu.'}</p>
            <button onclick="dialog.close()">Close</button>
        `;

        dialog.showModal();
    } catch (error) {
            console.error('Error displaying restaurant:', error);
          }
        });

    row.appendChild(name);
    row.appendChild(address);

    table.appendChild(row);
});
}

displayRestaurants(restaurants);
companyFilter.addEventListener('change', () => {

    const selectedCompany = companyFilter.value;

    if (selectedCompany === 'all') {

        displayRestaurants(restaurants);

    } else {

        // Filter restaurants by company
        const filteredRestaurants = restaurants.filter((restaurant) => {
        return restaurant.company === selectedCompany;
        });

        displayRestaurants(filteredRestaurants);
    }
    });

    // Use map to get restaurant names
    const restaurantNames = restaurants.map((restaurant) => {
      return restaurant.name;
    });

    console.log('Restaurant names:', restaurantNames);

  } catch (error) {
    console.error('Error fetching restaurants:', error);

    const table = document.querySelector('table');

    table.innerHTML = `
      <tr>
        <td colspan="2">
          Could not load restaurants. Please try again later.
        </td>
      </tr>
    `;
  }
};


const fetchMenu = async() => {
    try {
        const response = await fetch('https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/:id');

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const menu = await response.json();

        console.log(menu);

        return menu;

    } catch (error) {
        console.error('Error fetching menu:', error);
        return 'Could not load today menu.';
    }
}

fetchRestaurants();
