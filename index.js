let iterator = 0;

while(iterator === 0) {
    // variable const named kelvin equals user input //
    const kelvin = prompt("how many degrees?");
    // variable const named celsius equals viariable kelvin substracts 273 //
    const celsius = kelvin - 273;
    // using below equation to calculate fahrenheit //
    let fahrenheit = celsius * (9/5) + 32;
    // using built-in method to round down fahrenheit temperature //
    fahrenheit = Math.floor(fahrenheit);
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); 
}