if (document.getElementById('userBudgetInput')) {
    const userBudget = document.querySelector('.userBudget');
    let value = 50000;
    if (userBudget.textContent !== '') {
        value = parseInt(userBudget.textContent);
        $("#userBudgetInput").val(value);
    }
    $(function () {
        $("#userBudget").slider({
            range: "min",
            min: 0,
            max: 200000,
            step: 1000,
            value: value,
            slide: function (event, ui) {
                $("#userBudgetInput").val(ui.value);
            }
        });
    });

    const budgetInput = document.getElementById('userBudgetInput');

    budgetInput.addEventListener('input', () => {
        const valueInput = budgetInput.value;
        $("#userBudget").slider("value", valueInput);
    })
}