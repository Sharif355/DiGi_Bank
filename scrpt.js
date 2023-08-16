// // for input field value
function inputFieldById(inputId) {
    const inputFieldId = document.getElementById(inputId)
    const inputFieldValue = parseFloat(inputFieldId.value)
    inputFieldId.value = '';
    return inputFieldValue;
}

function textFieldById(textId) {
    const textFieldId = document.getElementById(textId)
    const textFieldValue = parseFloat(textFieldId.innerText)
    return textFieldValue;
}
function setElementById(elementId, newValue) {
    const elementById = document.getElementById(elementId);
    elementById.innerText = newValue;

}



// deposit section
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = inputFieldById('deposit-field')
    const previousDepositAmount = textFieldById('deposit-value')
    const newDepositTotal = newDepositAmount + previousDepositAmount;
    setElementById('deposit-value', newDepositTotal)

    // Adding new value to total balance
    const previousBalanceTotal = textFieldById('balance-value')
    const newBalanceAmount = previousBalanceTotal + newDepositAmount
    setElementById('balance-value', newBalanceAmount)
})

// withdraw section
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = inputFieldById('withdraw-field')
    const previousBalanceTotal = textFieldById('balance-value')

    // checking whether withdraw amount greater than the total balance

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("You don't have enough money on your account")
        return
    }

    const previousWithdrawTotal = textFieldById('withdraw-value')
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    setElementById('withdraw-value', newWithdrawTotal)

    const newBalanceAmount = previousBalanceTotal - newWithdrawAmount
    setElementById('balance-value', newBalanceAmount)
})
