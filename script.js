    var inputField = document.getElementById("input-field");
    //This method show and calculate the values and then display them on "input-field" 
    const showValue = (event) =>{
    const buttonValue = event.target.value;
    const currentValue = inputField.value;
        if(buttonValue === "AC"){
        inputField.value = ""
        }
        else if (buttonValue === "=")
        {
        try
        {
        var result = eval(currentValue)
        inputField.value = result;
        }
        catch(error)
        {
        inputField.value = "Invalid Input";
        }
        }
        else{
        inputField.value = currentValue + event.target.value;}
        }

        var button=document.querySelectorAll("button")
        button.forEach(buttons => {
        buttons.addEventListener("click",showValue)
        
        });