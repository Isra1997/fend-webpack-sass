function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    // Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    console.log(formText)
    // fetch('http://localhost:8081/test')
    // .then(res => {
    //     return res.json()
    // })
    // .then(function(data) {
    //     document.getElementById('results').innerHTML = data.message
    // })

    fetch("//api.openweathermap.org/data/2.5/weather?"+ new URLSearchParams({
        q: formText,
        appid:'34aa32cfd675614b3f7a7a29ae6cf373',

    }))
    .then(resp => {
           return resp.json()
        }
    ).then(function (data) {
        console.log(data.weather[0].description)
        document.getElementById('results').innerHTML = data.weather[0].description
    })
    .catch({function() {
        console.log("Something went wrong!");
    }  })
}

export { handleSubmit }
