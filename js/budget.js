document.getElementById('calculate-btn').addEventListener('click', function () {
    const playerExpenseInput = document.getElementById('per-Player-expense');

    const playerExpense = parseFloat(playerExpenseInput.value);
    const selector = document.querySelectorAll('#ordered-list li');

    const calculate = playerExpense * selector.length;
    const expense = document.getElementById('player-expenses');
    expense.innerText = calculate;
    playerExpenseInput.value = '';
    if (expense.innerText == "NaN") {
        alert('Please Enter a Number Type veriable');
        return expense.innerText = 0;
    }
    else {
        return calculate;
    }



})

function element(input) {
    const field = document.getElementById(input);
    const fieldValue = parseFloat(field.value);
    field.value = '';
    return fieldValue;

}

document.getElementById('calculate-total').addEventListener('click', function () {

    const manager = element('manager-field');

    const coach = element('coach-field');

    const expenseString = document.getElementById('player-expenses');
    const expense = parseFloat(expenseString.innerText);




    const totalCalculation = expense + manager + coach;

    const totalValue = document.getElementById('total-value');
    totalValue.innerText = totalCalculation;

    if (totalValue.innerText == 'NaN') {
        alert('Please Enter a Number Type veriable');
        return totalValue.innerText = 0;
    }

})