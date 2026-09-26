'use strict'

async function getData() { 
    const url = "https://reqres.in/api/unknown/23";
    try {
        const response = await fetch(url)

        if (!response.ok) { 
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
            console.error(error.message);
    }
    }

getData()