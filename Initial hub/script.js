// Get elements
const registerForm = document.querySelector('#register form');
const loginForm = document.querySelector('#login form');
const tournamentList = document.querySelector('#tournaments ul');

// Add event listener to register form
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = registerForm.querySelector('input[name="name"]').value;
  const email = registerForm.querySelector('input[name="email"]').value;
  alert(Registration successful for ${name}!);
  registerForm.reset();
});

// Add event listener to login form
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginForm.querySelector('input[name="username"]').value;
  const password = loginForm.querySelector('input[name="password"]').value;
  alert(Login successful for ${username}!);
  loginForm.reset();
});

// Add tournament items dynamically
const tournaments = [
  { name: 'Tournament 1', date: '2024-09-01', location: 'Location 1' },
  { name: 'Tournament 2', date: '2024-09-15', location: 'Location 2' },
];

tournaments.forEach((tournament) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${tournament.name}</h3>
    <p>Date: ${tournament.date}</p>
    <p>Location: ${tournament.location}</p>
    <button>Register Now</button>
  `;
  tournamentList.appendChild(li); // Append the li element to the tournamentList
});