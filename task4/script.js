const userTextField = document.querySelector('a');

 userTextField.addEventListener('click', function(even){

 
 this.textContent = prompt('Измените текст ссылки')
 event.preventDefault();
})

