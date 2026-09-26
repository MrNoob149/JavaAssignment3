'use strict'

async function pushData() { 

    const user = { 
        name: "John",
        age: "18",
        live: "VN",
    }

    const url = "https://reqres.in/api/users";
    
    try {
        const response = await fetch(url, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })

        if (!response.ok) { 
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
            console.error(error.message);
    }
}

async function reuse(url, response) { 
    const response = await fetch(url, options)

    if (!response.ok) { 
        throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
}

pushData();