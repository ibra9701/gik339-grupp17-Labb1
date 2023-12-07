// Väntar på att dokumentet ska laddas.
//upift 4
document.addEventListener('DOMContentLoaded', function () {
    
    // Variabeldeklarationer för olika HTML-element på sidan.

    // Hämtar elementen från HTML-dokumentet.
//
    const fargInput = document.getElementById('farg');
    
    // Hämtar input-fältet för innehåll.
    const innehallInput = document.getElementById('innehall');
    
    // Hämtar checkboxen för att ändra stil.
    const divStyleCheckbox = document.getElementById('divStyle');
    
    // Hämtar knappen för att ta bort innehåll.
    const removeButton = document.getElementById('removeButton');
    
    // Hämtar div-elementet där resultatet visas.
    const outputDiv = document.getElementById('outputDiv');

    // Eventlyssnare för färginput-fältet.
    // Ändrar bakgrundsfärgen på outputDiv när värdet i färginput-fältet ändras och checkboxen är markerad.
    //upift5.
    fargInput.addEventListener('input', function () {
        if (divStyleCheckbox.checked) {
            outputDiv.style.backgroundColor = fargInput.value;
        }
    });

     // Eventlyssnare för innehållsinput-fältet.
    // Uppdaterar textinnehållet i outputDiv när användaren skriver i innehållsfältet.
    innehallInput.addEventListener('input', function () {
        outputDiv.textContent = innehallInput.value;
    });

    // Eventlyssnare för checkboxen.
    // Ändrar bakgrundsfärgen på outputDiv baserat på om checkboxen är markerad eller inte.
    //upift 6
    divStyleCheckbox.addEventListener('change', function () {
        if (this.checked) {
            outputDiv.style.backgroundColor = fargInput.value;
        } else {
            outputDiv.style.backgroundColor = '';
        }
    });

    // Eventlyssnare för 'remove'-knappen.
    // Rensar textinnehållet i outputDiv när knappen klickas.
    removeButton.addEventListener('click', function () {
        outputDiv.textContent = ''; // Clear the content of the output div
    });
});