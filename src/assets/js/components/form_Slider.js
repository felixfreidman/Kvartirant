if (document.getElementById('userBudgetInput')) {

    $(function () {
        $("#userBudget").slider({
            range: "min",
            min: 0,
            max: 200000,
            step: 1000,
            value: 50000,
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