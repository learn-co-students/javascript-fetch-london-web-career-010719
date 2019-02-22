const app = "I don't do much.";


const token = ' fb28d616f27aa6cb2e803f903a53697545a3ea59 ';
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
})
    .then(res => res.json())
    .then(json => console.log(json));


// fetch('https://api.github.com/user/repos')
//     .then(res => res.json())
//     .then(json => console.log(json));
