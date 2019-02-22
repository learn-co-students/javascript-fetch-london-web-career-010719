
const token = 'd287a7d9282408e0cb55f7ab061e0aa64a86babe';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
