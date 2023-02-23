function apiCall () {
    console.log('apiCall function called!')

    axios.get("http://localhost:4000/")
    .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        console.log('function end')
      });
}

function nameDistanceCall () {
  event.preventDefault()
  let name = document.getElementById("inputName").value;
  let keyboard = document.getElementById("keyboard").value;
  console.log(`Calling API with Name: ${name}, keyboard: ${keyboard}`);
  axios.get(`http://localhost:4000/dist/${keyboard}&${name}`)
  .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      console.log('function end')
    });
}