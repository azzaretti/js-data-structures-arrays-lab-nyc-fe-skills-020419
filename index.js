const drivers = [
  "Milo",
  "Otis",
  "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}

function appendDriver(name) {
  let driverscopyh = [...drivers]
  driverscopy.push(name)
}

function prependDriver(name) {
  let driverscopy = [...drivers]
  driverscopy.shift(name)
}






  





