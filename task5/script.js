const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', myClick);

const textField = document.querySelector('#textField');


function myClick(event){
//*document.addEventListener('input', (event) => { //не работает, выдает Eror
    let duplicateField = document.querySelector('#duplicateField');
    duplicateField.textContent = textField.value;
    console.log(textField.value);
    textField.value = " ";
    event.preventDefault();

}

