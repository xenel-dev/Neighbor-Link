fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('community-resources');

    data.forEach(person => {
      const card = document.createElement('div');
      card.className = 'helper-card';

      const avatar = document.createElement('img');
      avatar.src = `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(person.name)}`;
      avatar.alt = `${person.name}'s avatar`;

      const info = document.createElement('div');
      const name = document.createElement('h3');
      name.textContent = person.name;

      const role = document.createElement('p');
      role.textContent = person.role;

      const help = document.createElement('p');
      help.textContent = person.help;

      info.appendChild(name);
      info.appendChild(role);
      info.appendChild(help);
      card.appendChild(avatar);
      card.appendChild(info);
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading helper data:', error);
  });
