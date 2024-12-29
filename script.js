// Game Data (Games per Genre)
const games = {
    all: [
      { name: 'Dungeon Quest', genre: 'adventure', link: 'https://www.roblox.com/de/games/2414851778/Dungeon-Quest-RPG-Adventure', devices: 'PC/CONSOLE/MOBILE' },
      { name: 'Ragdoll Universe', genre: 'action', link: 'https://www.roblox.com/de/games/1466995005/RAGDOLL-UNIVERSE', devices: 'ALL' },
      { name: 'Row Your Boat', genre: 'horror', link: 'https://www.roblox.com/de/games/13288095638/Row-Your-Boat-VHS-Thriller', devices: 'PC' },
      { name: 'Coder Simulator', genre: 'simulator', link: 'https://www.roblox.com/de/games/16230991879/Coding-Simulator', devices: 'ALL' },
      { name: 'Chess', genre: 'strategy', link: 'https://www.roblox.com/de/games/6222531507/CHESS', devices: 'ALL' },
      { name: 'Prodigy-Drift', genre: 'racing', link: 'https://www.roblox.com/de/games/8424052013/PARTS-HUNT-Prodigy-Drift', devices: 'UNKNOWN' },
      { name: 'Iso-ball', genre: 'puzzle', link: 'https://www.roblox.com/de/games/6265118570/Isoball', devices: 'UNKNOWN' },
      { name: 'Obby Royale', genre: 'obby', link: 'https://www.roblox.com/de/games/9472973478/Obby-Royale', devices: 'ALL' },
      { name: 'Sound Space', genre: 'music', link: 'https://www.roblox.com/de/games/2677609345/NEW-SONGS-Sound-Space-Rhythm-Game', devices: 'ALL' },
      { name: 'Retail Tycoon', genre: 'building', link: 'https://www.roblox.com/de/games/5865858426/Retail-Tycoon-2', devices: 'ALL' },
      { name: 'Blackhawk Rescue Mission', genre: 'military', link: 'https://www.roblox.com/de/games/2916899287/Blackhawk-Rescue-Mission-5', devices: 'PC' },
      { name: 'Rivivals', genre: 'shooter', link: 'https://www.roblox.com/de/games/17625359962/RIVALS', devices: 'ALL' },
      { name: 'ERLC', genre: 'roleplay', link: 'https://www.roblox.com/de/games/2534724415/Emergency-Response-Liberty-County', devices: 'ALL' },
      { name: 'Arcane Reborn', genre: 'magic', link: 'https://www.roblox.com/de/games/3099809263/Arcane-Reborn', devices: 'UNKNOWN' },
      { name: 'PTFS', genre: 'plane', link: 'https://www.roblox.com/de/games/20321167/Pilot-Training-Flight-Simulator', devices: 'ALL' },
      { name: 'Mech Showdown', genre: 'robot', link: 'https://www.roblox.com/de/games/15113223607/Survival-UPD-Mech-Showdown-Beta', devices: 'ALL' },
      { name: 'The Survival Game', genre: 'survival', link: 'https://www.roblox.com/de/games/11156779721/The-Survival-Game-Guns', devices: 'ALL' },
      { name: 'Anime Adventures', genre: 'anime', link: 'https://www.roblox.com/de/games/8304191830/CHRISTMAS-RERELEASE-TOURNAMENT-AA', devices: 'ALL' },
    ],
    // Genre-specific Games (filtered from the 'all' list)
    adventure: [],
    action: [],
    horror: [],
    simulator: [],
    strategy: [],
    racing: [],
    puzzle: [],
    obby: [],
    music: [],
    building: [],
    military: [],
    shooter: [],
    roleplay: [],
    magic: [],
    plane: [],
    robot: [],
    survival: [],
    anime: [],
  };
  
  // Display Games
  function displayGames(gamesToDisplay) {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = ''; // Clear the list
  
    gamesToDisplay.forEach(game => {
      const gameDiv = document.createElement('div');
      gameDiv.classList.add('game');
      gameDiv.innerHTML = `
        <h3>${game.name}</h3>
        <p><strong>Devices:</strong> ${game.devices}</p>
        <a href="${game.link}" target="_blank">Play Now</a>
      `;
      gameList.appendChild(gameDiv);
    });
  }
  
  // Filter Games by Genre
  function filterGames() {
    const genre = document.getElementById('genre').value;
    if (genre === 'all') {
      displayGames(games.all);
    } else {
      const filteredGames = games.all.filter(game => game.genre === genre);
      displayGames(filteredGames);
    }
  }
  
  // Home Button
  document.getElementById('homeButton').addEventListener('click', () => {
    document.getElementById('genre').value = 'all';
    filterGames();
  });
  
  // Display All Games on Page Load
  window.onload = filterGames;
  
