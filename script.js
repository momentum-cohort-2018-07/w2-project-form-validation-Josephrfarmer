document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    var inputFields = document.getElementsByTagName('input')
    // var label = documemt.querySelectorAll('label')

    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].parentElement.classList.remove("input-invalid", "input-valid")
    }

    for(element of document.querySelectorAll('.errorMessage')){
        element.remove()
    }


    for (var i = 0; i < inputFields.length; i++) {
        // for(var j=0; j<label.length; j++){
        //     var labelText = label.innerText
        // }   
        
        // debugger

        if (inputFields[i].value.trim() === '') {
            if (inputFields[i].parentElement.classList.contains("input-valid")) {
                inputFields[i].parentElement.classList.add("input-invalid")
                inputFields[i].parentElement.classList.remove("input-valid")
                showemptymessage(inputFields[i])
            } else {
                inputFields[i].parentElement.classList.add("input-invalid")
                showemptymessage(inputFields[i])
            }

        } else {
            if (!inputFields[i].parentElement.classList.contains("input-invalid")) {
                inputFields[i].parentElement.classList.add("input-valid")
            }
        }
    }

    function showemptymessage(input) {
        var errorMessageDiv = document.createElement('div')
        errorMessageDiv.classList.add('errorMessage')
        errorMessageDiv.innerText = 'is required'
        if(input.id.startsWith('car')){
        input.parentElement.parentElement.appendChild(errorMessageDiv)
        }else{
            input.parentElement.appendChild(errorMessageDiv)
        }

    }

    

})