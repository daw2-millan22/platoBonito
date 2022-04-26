
const login = (user)=> {
     
    user = {
        "username": "admin",
        "email": "admin@admin.com",
        "password": "$2b$10$oN1K03f5kjqa23HGei5vZ.1OjB5frIw7vw8F0KuvT1LUobUMVLLIG"
    };
    const token = localStorage.getItem('token');
    
    // Peticion para login
    const url = `http://localhost:8000/auth/login`;
    fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8", 
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            const token = json.token;
            console.log('este es tu token: ' + token);
            
            //almacenamos token en nuestro ordenador
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            
            var log = 'Hola ' + JSON.parse(localStorage.getItem('user')).username;
            document.querySelector('#user').innerHTML = log;
            document.querySelector('#token').innerHTML = token;
        })
        .catch(err => console.log(err));

}
const logout = ()=> {
    localStorage.setItem('user', '');
    localStorage.setItem('token', '');
}

//Eventos


    
