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

function disable(value) {
    value.disabled = true;
    value.style.backgroundColor = 'white';
    value.style.color = 'black';

}

const player1 = selectPlayer('select-beckham', 'name-beckham');

const player2 = selectPlayer('select-cr7', 'name-cr7');

const player3 = selectPlayer('select-messi', 'name-messi');

const player4 = selectPlayer('select-mbappe', 'name-mbappe');

const player5 = selectPlayer('select-zlatan', 'name-Zlatan');

const player6 = selectPlayer('select-neymar', 'name-neymar');

const player7 = selectPlayer('select-ronaldinho', 'name-ronaldinho');

const player8 = selectPlayer('select-zidane', 'name-zidane');

const player9 = selectPlayer('select-ozil', 'name-ozil');


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