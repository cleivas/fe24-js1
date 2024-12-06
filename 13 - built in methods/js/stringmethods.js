const form = document.querySelector('form');

form.addEventListener('submit', event=>{
    event.preventDefault();
    // '  Sweden    's

    let inputString = form.querySelector('input').value;
    console.log(inputString);
    
    
    const compareString1 = 'sweden';
    
    inputString = inputString.toLowerCase();
    console.log(inputString);
    
    inputString = inputString.trim();
    console.log(inputString);
    
    // console.log(inputString == compareString1)
    
    
    const compareString2 = `golden_retriever`
    inputString = inputString.replaceAll(' ', '_');
    // console.log(inputString == compareString2)

    // Du får tillbaka från ett API en string med kategorier separerade med komma
    console.log(inputString)
    const categories = inputString.split(',_');
    console.log(categories)
})