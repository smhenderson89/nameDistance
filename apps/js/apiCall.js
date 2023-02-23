function nameDistanceCall () {
  event.preventDefault()
  let name = document.getElementById("inputName").value;
  let keyboard = document.getElementById("keyboard").value;
  console.log(`Calling API with Name: ${name}, keyboard: ${keyboard}`);
  axios.get(`http://localhost:4000/dist/${keyboard}&${name}`)
  .then(function (response) {
      console.log('API success')
      let info = response.data.data
      console.log(info);
      showResults(info)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      console.log('function end')
    });
}

function showResults(info) {
  // Create Box Header
  const box = document.getElementById("results")
  let row = document.createElement("div")
  row.class = "row"
  let col = document.createElement("div")
  col.class = "col"
  col.innerHTML = `Name : ${info[0].name}`
  box.append(row)
  box.append(col)

  // Create Table headers
  box.append(row)
  headers = ['Start Letter', "End Letter", "Path", "Distance"]
  for (let i = 0; i < headers.length; i++) {
    col.innerHTML = headers[i]
    box.append(col)
  }

  // Show Data
  // for (let j = 1; j < ((info.length) - 1); j++) {
  //   box.appendChild(row)
  //   col.innerHTML = info[j].start
  //   box.appendChild(col)
  //   col.innerHTML = info[j].end
  //   box.appendChild(col)
  //   col.innerHTML = info[j].distance 
  //   box.appendChild(col)
  //   col.innerHTML = info[j].path
  //   box.appendChild(col)
  // }
}