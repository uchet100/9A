const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []




localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''
})

data.forEach(item => {
  liMaker(item)
})

button.addEventListener('click', function() {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})


// small test for calculating input values
//needs the local storage scripts to be adapted and keep the calculated results in a list
//proper tax calculation needs to be implemented to page-script
function submit(){
 var submit = document.getElementsByName('submit');
 submit.addEventListener("onClick",process,false);
}
//The tax amount percentage is made up just for testing
function process() {
  var payVar= parseFloat(document.calculate.pay.value)
  var hourVar = parseFloat(document.calculate.hour.value)
  var salaryVar = payVar * hourVar
  document.calculate.salary.value = salaryVar;

  if(!isNaN(result)){
    document.getElementById("result").innerHTML = result;
    }



  }
