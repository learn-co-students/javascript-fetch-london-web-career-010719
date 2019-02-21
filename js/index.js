const token = '26639bb0d73e8ed74d0b609b3d3472cb89ab1f47';

fetch('https://api.github.com/user/repos',{
  headers:{
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
