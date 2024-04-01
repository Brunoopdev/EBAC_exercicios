document.addEventListener('DOMContentLoaded', () =>{
    
        const avatar = document.querySelector('.profile-avatar');
    const nome = document.querySelector('.profile-name');
    const username = document.querySelector('.profile-username');
    const repositorios = document.querySelector('.repositories');
    const seguidores = document.querySelector('.followers');
    const seguindo = document.querySelector('.following');
    const linkRepositorio = document.querySelector('.profile-link');


    fetch('https://api.github.com/users/Brunoopdev')
    .then(function(resposta){
        if(!resposta.ok){
            throw new Error('#Erro detectado#')
        }
        return resposta.json();
    })
    .then(function(json){
        avatar.src = json.avatar_url;
        nome.innerHTML = `${json.name}`;
        username.innerHTML = `@${json.login}`;
        repositorios.innerHTML = `${json.public_repos}`;
        seguidores.innerHTML = `${json.followers}`
        seguindo.innerHTML = `${json.following}`
        linkRepositorio.href = json.html_url;
        console.log(json)
    })
    
    .catch (function(error) {
        console.log('um erro foi detectado', error);
        setTimeout(function() {
            alert('Estamos corrigindo um erro, por favor tente novamente mais tarde!')
        }, 2000);
    })
})
