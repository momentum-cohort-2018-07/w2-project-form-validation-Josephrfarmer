document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    var inputFields = document.getElementsByTagName('input')


    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].parentElement.classList.remove("input-invalid", "input-valid")
    }

    for(element of document.querySelectorAll('.errorMessage')){
        element.remove()
    }


    for (var i = 0; i < inputFields.length; i++) {

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
        input.parentElement.appendChild(errorMessageDiv)
    }

    

})