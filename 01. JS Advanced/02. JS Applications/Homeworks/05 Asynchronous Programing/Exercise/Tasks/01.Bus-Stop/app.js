async function getInfo() {

    const inputFiled = document.getElementById('stopId');
    const inputValue = inputFiled.value;
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + inputValue;



    // try {
    //     const ul = document.getElementById('buses');
    //     ul.innerHTML = '';

    //     const response = await fetch(url);
    //     const data = await response.json();

    //     document.getElementById('stopName').textContent = data.name;


    //     Object.entries(data.buses).map(([bus, time]) => {
    //         const li = document.createElement('li');
    //         li.textContent = `Bus ${bus} arrives after ${time} minutes`;
    //         ul.appendChild(li);
    //     })

    //     inputFiled.value = '';
    // } catch (error) {
    //     document.getElementById('stopName').textContent = `Error`;
    // }


    try {
        const ul = document.getElementById('buses');
        ul.innerHTML = '';

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('stopName').textContent = data.name;


        Object.entries(data.buses).map(([bus, time]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives after ${time} minutes`;
            ul.appendChild(li);
        })

        inputFiled.value = '';
    } catch (error) {
        document.getElementById('stopName').textContent = `Error`;
    }
}