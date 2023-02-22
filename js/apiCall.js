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