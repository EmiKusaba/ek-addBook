let arrayOfUsers = [];

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getUser()
  consoleUsers()
}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getUser = () => {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user =>user.results.map(user => {
      arrayOfUsers.push(user)
    }))
}
const get10Users = () => {
  fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(user =>user.results.map(user => {
      arrayOfUsers.push(user)
    }))
}


// this function logs the results in your browsers console
const consoleUsers = () => {
  console.log(arrayOfUsers)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayUser = () => {
  const allUsers = document.getElementById('all-users')
  arrayOfUsers.map((user, index) => {
    const li = document.createElement('li')
    const picture = document.createElement('img')
    const button = document.createElement('button')
    button.innerText = "More info"
    const info = document.createElement('p')
    info.innerText = ""
    const infoText = `DOB: ${user.dob.date} STATE: ${user.location.state}`
    picture.setAttribute('src', `${user.picture.thumbnail}`)
    const text = document.createTextNode(`${user.name.first} ${user.name.last}`)
    button.addEventListener("click", function(){
      if (info.innerText === ""){
        info.innerText = infoText
      }
    })
    li.appendChild(text)
    li.appendChild(picture)
    li.appendChild(button)
    li.appendChild(info)
    allUsers.append(li)
  })
}

// Anthony was here


// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other apis and become a real developer!!