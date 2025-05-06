function login(){
    const username = document.getElementById ("username").value;
    const password = document.getElementById ("password").value;
    if (username==="admin" && password==="1234"){
        window.location.href="benvindo.html"   
    }
    else{ document.getElementById("mensagem") .textContent="ussuario ou senha incoretos"
    }
}

function volta(){
    window.location.href="index.html"
}
