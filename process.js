import fetch from 'node-fetch'

const form=document.getElementById("signin")

form.addEventListener("submit", signin)
async function signin(event){
    event.preventdefualt()
    const username=document.getElementById('username').value
    const password=document.getElementById('password').value

    const result=await fetch('/api/register', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username,
            password
        }).then((res) => res.json())

    })
    console.log(result);
}