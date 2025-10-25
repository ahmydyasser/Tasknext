// === Add CSS dynamically ===
const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: rgb(231, 145, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
  }

  h1 {
    margin: 20px 0;
    color: blue;
    font-size: 1.8em;
    font-weight: bold;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    width: 90%;
    max-width: 900px;
    margin-bottom: 40px;
  }

  .card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    padding: 20px;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0,0,0,0.25);
  }

  .card h2 {
    color: blueviolet;
    font-size: 1.1em;
    margin: 0;
  }

  .card p {
    color: purple;
    margin: 5px 0 0;
    font-size: 0.9em;
  }
`;
document.head.appendChild(style);

// === Add heading ===
const heading = document.createElement('h1');
heading.textContent = 'projects';
document.body.appendChild(heading);

// === Add container for cards ===
const container = document.createElement('div');
container.className = 'cards';
document.body.appendChild(container);

// === Generate cards dynamically ===
for (let i = 1; i <= 18; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>project ${i}</h2>
    <p>Ahmed yasser</p>
  `;
  container.appendChild(card);
}
