const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []  //items array to pass to local storage

//using JSON.stringify to convert data array into strings
//using JSON.pase to convert what localStorage passes (local storage only outputs values) in usable data
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))



// creates the list (list element), sets the text of the
//element to the parameter set previously and appends it to the ul
const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

//prevents the default procedure for the submit event that would send data to server
//using local storage = no server involved
form.addEventListener('submit', function(e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  //calling function that makes the item and adds it to the DOM
  //then sets the empty string so the form is empty again
  liMaker(input.value)
  input.value = ''
 })

//loops data in localstorage to display it on front end
data.forEach(item => {
  liMaker(item)
})


//refresh of the array and updates frontend
button.addEventListener('click', function() {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})


function submit(){
  var submit = document.getElementsByName('submit');
  submit.addEventListener("onClick",process,false);


}


function process() {
  var payVar= parseFloat(document.calculate.pay.value)
  var hourVar = parseFloat(document.calculate.hour.value)
  var taxVar = parseFloat(document.calculate.tax.value)
  var salaryVar = payVar * hourVar
  document.calculate.salary.value = salaryVar;
  //setting the key (like an id for the value in local storage to be salaryVarItem) 
  //parse it to string and save the value
  localStorage.setItem('salaryVarItem', JSON.stringify(salaryVar));
  
  //to retrive the data and then print it out in page 
  //code commented out to allow whoever is dealing with the page to place it where needed
  //JSON.parse used to reconvert the string in usable data 
  //var salaryVar = JSON.parse(localStorage.getItem('myCsalaryVarItemat'));
  
  
  var taxesVar = (salaryVar * taxVar)/100
  document.calculate.taxes.value = taxesVar;
  var netPayVar = salaryVar - taxesVar
  document.calculate.income.value = netPayVar;
  

  if(!isNaN(result)){
    document.getElementById("result").innerHTML = result;
    }

  }
