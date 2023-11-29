const playersLink = "https://www.balldontlie.io/api/v1/players"
const teamsLink = "https://www.balldontlie.io/api/v1/teams"


function getPlayersData() {
    fetch(playersLink)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let cont = `<ul>`
            for (let player of data.data) {
                cont += `<li>${player.first_name} ${player.last_name} team: ${player.team.full_name} </li>`
            }
            cont += `</ul>`
            document.getElementById("jatekos").innerHTML = cont
        })
        .catch(err => {
            document.getElementById("jatekos").innerHTML = `Something went wrong: ${err}`
        })

    }
document.getElementById("gomb").addEventListener("click", () => {
    console.log("Players button works.")    
    getPlayersData()
})