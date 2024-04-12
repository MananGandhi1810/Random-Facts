function getFact () {
  fetch('/facts.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('fact').innerText =
        data['facts'][Math.floor(Math.random() * data['facts'].length)]
    })
    .catch(error => {
      console.error('Error:', error)
    })
  setTimeout(getFact, 7000)
}

setTimeout(getFact, 2000)
