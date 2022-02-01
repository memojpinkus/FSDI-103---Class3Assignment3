function Calculate(){
    console.log("Calculator function");
    
    let num1 = Number(prompt("Number 1: "));
    console.log(num1);

    let num2 = Number(prompt("Number 2:"));
    console.log(num2);

    let sum, subs, mult, div;

    sum = num1+num2;
    console.log(sum);

    subs = num1-num2;
    console.log(subs);

    mult = num1*num2;
    console.log(mult);

    div = num1/num2;
    console.log(div);

    document.getElementById("results").innerHTML = `
        <p>${num1} + ${num2} = ${sum}</p>
        <p>${num1} - ${num2} = ${subs}</p>
        <p>${num1} * ${num2} = ${mult}</p>
        <p>${num1} / ${num2} = ${div}</p>
    `;
}