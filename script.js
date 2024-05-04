main();

async function fetchJSONData() {
  const res = await fetch("./resources.json")
  if (!res.ok) {
    throw new Error
    (`HTTP error! Status: ${res.status}`);
  }
  return res.json();
}

async function main() {
  const data = await fetchJSONData();
  
  // Links section
  const linksContainer = document.createElement('div');
  document.body.append(linksContainer);

  const linksHeader = document.createElement('h1');
  linksContainer.append(linksHeader);
  linksHeader.textContent = 'Links';

  data.links.forEach(section => {
    const sectionContainer = document.createElement('div');
    linksContainer.append(sectionContainer);

    const header = document.createElement('h2');
    sectionContainer.append(header);

    header.textContent = section.section;

    const ul = document.createElement('ul');
    sectionContainer.append(ul);
    section.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.name;
      li.append(a);
      ul.append(li);
    });
  });

  // Games section
  const gamesContainer = document.createElement('div');
  document.body.append(gamesContainer);
  
  const gamesHeader = document.createElement('h1');
  gamesContainer.append(gamesHeader);
  gamesHeader.textContent = 'Games';

  const gamesList = document.createElement('ul');
  gamesContainer.append(gamesList);

  data.games.forEach(game => {
    console.log(game);
    
    const gameContainer = document.createElement('div');
    gamesContainer.append(gameContainer);

    const header = document.createElement('h2');
    gameContainer.append(header);

    header.textContent = game.name;

    const status = document.createElement('p');
    gameContainer.append(status);
    status.textContent = `Status: ${game.status}`;

    const repo = document.createElement('a');
    gameContainer.append(repo);
    repo.href = game.repo;
    repo.textContent = 'Repository';

    const br1 = document.createElement('br');
    gameContainer.append(br1);

    if (game.status = 'Finished') {
      const itchPage = document.createElement('a');
      gameContainer.append(itchPage);
      itchPage.href = game['itch.io page'];
      itchPage.textContent = 'Itch.io Page';
    }

    if (game.misc) {
      const miscContainer = document.createElement('div');
      gameContainer.append(miscContainer);

      for (key in game.misc) {
        const a = document.createElement('a');
        miscContainer.append(a);
        a.href = game.misc[key];
        a.textContent = key;
      };
    }
  });
}
