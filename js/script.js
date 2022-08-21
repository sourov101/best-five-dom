function seletPlayer(elementId, value) {
    document.getElementById(elementId).addEventListener('click', function () {

        const playerName = document.getElementById(value);
        const playerNameString = playerName.innerText;

        return playerNameString;
    })
}

function list(playerNameString) {
    const ol = document.getElementById('ordered-list')

}
seletPlayer('select-beckham', 'name-beckham');

seletPlayer('select-cr7', 'name-cr7');

seletPlayer('select-messi', 'name-messi');

seletPlayer('select-mbappe', 'name-mbappe');

seletPlayer('select-zlatan', 'name-Zlatan');

seletPlayer('select-neymar', 'name-neymar');


