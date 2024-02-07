const ul = document.querySelector('ul');

function getApiGitHub(){
  fetch('https://api.github.com/users/kellypc/repos')
    .then(async res => {
      if (!res.ok) {
        throw new Error(res.status)
      }

      var data = await res.json()

      data.map(item => {
        console.log(item)
        let li = document.createElement('li')
        
        li.innerHTML = `
        <p>
          <a href=${item.html_url}>${item.name.toUpperCase()}</a>
        </p>
        <p>Data de Criação:
        ${
          Intl.DateTimeFormat('pt-BR')
          .format(new Date(item.created_at))
        }
        </p>
        `
        ul.appendChild(li);

      })

    }).catch(e => console.log(e))
}

getApiGitHub();
