// document.getElementById('parking-form').addEventListener('submit', function (event){
//     event.preventDefault()

//     var inputFields = document.getElementsByTagName('input')
    

//     for(var i = 0; i < inputFields.length; i++ ){

//         inputFields[i].parentElement.classList.remove("input-invalid","input-valid" )

//     if (inputFields[i].value.trim() === ''){
//         inputFields[i].parentElement.classList.add("input-invalid")
//     } else {
//         inputFields[i].parentElement.classList.add("input-valid")
//     }
// }
// })

document.getElementById('parking-form').addEventListener('submit', function (event){
    event.preventDefault()

    var inputFields = document.getElementsByTagName('input')
    

    for(var i = 0; i < inputFields.length; i++ ){
        inputFields[i].parentElement.classList.remove("input-invalid","input-valid" )
    }

    for(var i = 0; i < inputFields.length; i++ ){

    if (inputFields[i].value.trim() === ''){
        if (inputFields[i].parentElement.classList.contains("input-valid")){
            inputFields[i].parentElement.classList.add("input-invalid")
            inputFields[i].parentElement.classList.remove("input-valid")
        } else {
            inputFields[i].parentElement.classList.add("input-invalid")
        }
    } else {
        if(!inputFields[i].parentElement.classList.contains("input-invalid")){
            inputFields[i].parentElement.classList.add("input-valid")
        }
    }
}

function showemptymessage(){
    var errorMessageDiv = document.createElement('div')
    errorMessageDiv.classList.add('errorMessage')
    errorMessageDiv.innerText('is required,')
}

function clearEmptyMessage(){
    var element = document.getElementsByClassName('errorMessage')
    element.parentElement.removeChild(element)
}


})