function loadPrf  () {
    let xhr = new XMLHttpRequest ();

    xhr.onload = function (){
        //alert ('Retorno da requisição: \n' + this.responseText);

        let data = JSON.PARSE (this.responseText);

        let perfilStr = ` <div id="pag" class="card" style="width: 15rem;">
        <img src="${data.avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.name}<br>${data.login}</h5>
          <p class="subtitle">${data.bio}</p>
          <p class="card-text">${data.bio}</p>
          <a href="${data.html_url}" target="_blank" class="btn btn-primary" class="class2">Github</a>
          
        
        </div>
      </div>`; 

    document.getElemmentById ('tela').innetHTML = perfilStr;
    }
    
    xgr.onerror = fuction ()
    {
        alert (`Erro na requisição \n Código: ${this.status} - ${this.statusText}`);
    }

    xhr.open ('GET', 'https://api.github.com/users/rfradieddine');
    xhr.send ();


}