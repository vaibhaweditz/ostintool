document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "Vaibhaw11" && password === "vaibhaw@1"){
        window.location.href = "home.html";
    }else{
        document.getElementById("error").innerText =
        "Invalid Username or Password";
    }
});