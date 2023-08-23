const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)

        return data.map(user => {
            let li = document.createElement('li')
            li.innerHTML = `${user.name} (${user.username})`
            ul.appendChild(li)
        })
    })
    .catch(error => {
        console.log(`Ops! ${error}`)
    })
