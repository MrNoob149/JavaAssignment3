
'use strict';
// Sort restaurants alphabetically

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

// Display restaurants
restaurants.forEach((restaurant) => {

    const row = document.createElement('tr');

    const name = document.createElement('td');
    name.textContent = restaurant.name;

    const address = document.createElement('td');
    address.textContent = restaurant.address;

    // When restaurant name is clicked
    name.addEventListener('click', function() {

        // Remove highlight from other restaurant names
        document.querySelectorAll('first-child').forEach(function(element) {
            element.classList.remove('highlight');
        });

        // Highlight clicked restaurant
        name.classList.add('highlight');

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
    });

    row.appendChild(name);
    row.appendChild(address);

    table.appendChild(row);
});
  }
  catch (error) { 
    console.error('Error fetching restaurant: ', error);
  }
}

const fetchMenu = async(restaurantId) => {
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
        return 'Could not load today\'s menu.';
    }
}

fetchRestaurants();
