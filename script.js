document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const convertBtn = document.getElementById('convertBtn');
    const resultText = document.getElementById('resultText');
    const currencyTableBody = document.querySelector('#currencyTable tbody');

    let exchangeRates = {};

    // Fetch live exchange rates
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => response.json())
        .then(data => {
            exchangeRates = data.rates;
            const currencies = Object.keys(exchangeRates);

            // Populate currency dropdowns
            currencies.forEach(currency => {
                const option1 = document.createElement('option');
                option1.value = currency;
                option1.textContent = currency;
                fromCurrencySelect.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = currency;
                option2.textContent = currency;
                toCurrencySelect.appendChild(option2);
            });

            // Populate live rates table
            currencyTableBody.innerHTML = '';
            for (const [currencyCode, rate] of Object.entries(exchangeRates)) {
                const row = document.createElement('tr');

                const currencyCodeCell = document.createElement('td');
                currencyCodeCell.textContent = currencyCode;
                row.appendChild(currencyCodeCell);

                const currencyNameCell = document.createElement('td');
                currencyNameCell.textContent = getCurrencyName(currencyCode);
                row.appendChild(currencyNameCell);

                const rateCell = document.createElement('td');
                rateCell.textContent = rate.toFixed(4);
                row.appendChild(rateCell);

                currencyTableBody.appendChild(row);
            }
        })
        .catch(error => console.error('Error fetching exchange rates:', error));

    // Convert currency
    convertBtn.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount) || !fromCurrency || !toCurrency) {
            resultText.textContent = 'Please enter valid inputs.';
            return;
        }

        const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
        resultText.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    });

    // Helper function to get currency name from code
    function getCurrencyName(currencyCode) {
        const currencyNames = {
            USD: 'United States Dollar',
            EUR: 'Euro',
            GBP: 'British Pound Sterling',
            JPY: 'Japanese Yen',
            AUD: 'Australian Dollar',
            CAD: 'Canadian Dollar',
            CHF: 'Swiss Franc',
            CNY: 'Chinese Yuan',
            INR: 'Indian Rupee',
            // Add more currencies as needed
        };
        return currencyNames[currencyCode] || currencyCode;
    }
});