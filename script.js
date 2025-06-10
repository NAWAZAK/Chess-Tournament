let players = []

function addNewPlayer(playerName) {
  const player = {
    name: playerName,
    win: 0,
    loss: 0,
    draw: 0,
    points: 0
  }
  players.push(player)
}

function matches(player1, player2, wld) {
  const player1_obj = players.find(p => p.name === player1)
  const player2_obj = players.find(p => p.name === player2)
  
  if (wld === 1) {
    player1_obj.win += 1
    player1_obj.points += 3
    player2_obj.loss += 1
  } else if (wld === 2) {
    player2_obj.win += 1
    player2_obj.points += 3
    player1_obj.loss += 1
  } else if (wld === 0) {
    player1_obj.draw += 1
    player1_obj.points += 1.5
    player2_obj.draw += 1
    player2_obj.points += 1.5
  }
  
  document.querySelector('.player-list').innerHTML = ''
  
  updateLeaderboard()
}

addNewPlayer('Nawaz')
addNewPlayer('Bandan')
addNewPlayer('Raul')
addNewPlayer('Debdoot')

function updateLeaderboard() {
  
  players.sort((a, b) => b.points - a.points )
  
  const parentElement = document.getElementsByClassName('player-list')[0]
  
  players.forEach((player, index) => {
    const rank = index + 1
    
    parentElement.insertAdjacentHTML('beforeend', `<div class="temp">#${rank} &nbsp &nbsp${player.name} &nbsp &nbsp W:${player.win} | L:${player.loss} | D:${player.draw} &nbsp &nbsp Total Points: ${player.points}</div>`)
  })
}

updateLeaderboard()

matches('Nawaz', 'Raul', 2)
matches('Bandan', 'Raul', 1)
matches('Bandan', 'Debdoot', 0)