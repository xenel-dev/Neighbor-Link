fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('community-resources');

    data.forEach(person => {
      // Create card
      const card = document.createElement('div');
      card.className = 'helper-card';

      // Create avatar
      const avatar = document.createElement('img');
      avatar.src = `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(person.name)}`;
      avatar.alt = `${person.name}'s avatar`;

      // Create text content
      const info = document.createElement('div');
      const name = document.createElement('h3');
      name.textContent = person.name;

      const role = document.createElement('p');
      role.textContent = person.role;

      const help = document.createElement('p');
      help.textContent = person.help;

      // Assemble card
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

  const resourceList = document.getElementById('resource-list');
const savedList = document.getElementById('saved-list');
const loadBtn = document.getElementById('load-resources');

// Sample JSON data (can be replaced with fetch later)
const tips = [
  { id: 1, text: "Check on elderly neighbors during extreme weather." },
  { id: 2, text: "Share extra produce from your garden." },
  { id: 3, text: "Offer rides to local events for those without transport." }
];

// Load tips and display them
loadBtn.addEventListener('click', async () => {
  resourceList.innerHTML = '';
  for (const tip of tips) {
    const li = document.createElement('li');
    li.textContent = tip.text;

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.onclick = () => saveTip(tip);
    li.appendChild(saveBtn);

    resourceList.appendChild(li);
  }
});

// Save to localStorage
function saveTip(tip) {
  let saved = JSON.parse(localStorage.getItem('savedTips')) || [];
  saved.push(tip);
  localStorage.setItem('savedTips', JSON.stringify(saved));
  renderSaved();
}

// Display saved tips
function renderSaved() {
  savedList.innerHTML = '';
  const saved = JSON.parse(localStorage.getItem('savedTips')) || [];
  for (const tip of saved) {
    const li = document.createElement('li');
    li.textContent = tip.text;
    savedList.appendChild(li);
  }
}

// Load saved tips on page load
renderSaved();
