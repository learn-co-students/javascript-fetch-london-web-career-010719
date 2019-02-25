const app = "I don't do much.";

const token = 'aeababdf2ed1662bc99d6a0067a0553272215801';
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
})
    .then(res => res.json())
    .then(json => console.log(json));