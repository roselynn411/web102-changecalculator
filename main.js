//add  document.getelementid and an event listener to the button 
document.getElementById('calculate-change').addEventListener('click', calculateChangeDue);

function calculateChangeDue(){
    let totalCost = document.getElementById('amount-due').value;
    let amtTendered = document.getElementById('amount-received').value;
    let changeDue = amtTendered - totalCost;
    console.log(changeDue);

    //calculate exact dollars and coins due
    let dollarsDue = Math.floor(changeDue/1);
    let coinsDue = (changeDue % 1).toFixed(2);

    let quartersDue = Math.floor(coinsDue/0.25);
    let coinsSansQuartDue = coinsDue % 0.25;

    let dimesDue = Math.floor(coinsSansQuartDue/0.10);
    let coinsSansDimesDue = coinsSansQuartDue % 0.10;

    let nickelsDue = Math.floor(coinsSansDimesDue/0.05);
    let coinsSansNickelsDue = coinsSansDimesDue % 0.05;

    let penniesDue = Math.round(coinsSansNickelsDue / 0.01);


    // Establish the variable and the document.get elements 
    var dollarAns = document.getElementById('dollars-output');
    var quarterAns = document.getElementById('quarters-output');
    var dimeAns = document.getElementById('dimes-output');
    var nickelAns = document.getElementById('nickels-output');
    var pennyAns = document.getElementById('pennies-output');

    //display the  answers
    dollarAns.innerText = `$${dollarsDue}`;
    quarterAns.innerText = quartersDue;
    dimeAns.innerText = dimesDue;
    nickelAns.innerText = nickelsDue;
    pennyAns.innerText = penniesDue;
}
