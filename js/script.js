function selectPlayer(elementId, value) {
    document.getElementById(elementId).addEventListener('click', function () {

        const playerName = document.getElementById(value);
        const playerNameString = playerName.innerText;

        const selector = document.querySelectorAll('#ordered-list li');

        if (selector.length > 4) {
            alert("Can't select more than 5");
            return;
        }

        const orderedList = document.getElementById('ordered-list');
        const li = document.createElement('li');
        li.innerText = playerNameString;
        orderedList.appendChild(li);




    })
}


const player1 = selectPlayer('select-beckham', 'name-beckham');

selectPlayer('select-cr7', 'name-cr7');

selectPlayer('select-messi', 'name-messi');

selectPlayer('select-mbappe', 'name-mbappe');

selectPlayer('select-zlatan', 'name-Zlatan');

selectPlayer('select-neymar', 'name-neymar');


// document.getElementById('select-beckham').addEventListener('click', function () {
//     const playerName = document.getElementById('name-beckham').innerText;
//     console.log(playerName)
//     const orderedList = document.getElementById('ordered-list');
//     const li = document.createElement('li');
//     li.innerText = playerName;
//     orderedList.appendChild(li);
//     console.log(li);
// })
// document.getElementById('select-cr7').addEventListener('click', function () {
//     const playerName = document.getElementById('name-cr7').innerText;
//     console.log(playerName)
//     const orderedList = document.getElementById('ordered-list');
//     const li = document.createElement('li');
//     li.innerText = playerName;
//     orderedList.appendChild(li);
//     console.log(li);
// })
// document.getElementById('select-messi').addEventListener('click', function () {
//     const playerName = document.getElementById('name-cr7').innerText;
//     console.log(playerName)
//     const orderedList = document.getElementById('ordered-list');
//     const li = document.createElement('li');
//     li.innerText = playerName;
//     orderedList.appendChild(li);
//     console.log(li);
// })