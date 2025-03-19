Currency Converter
This is a Currency Converter web application that allows users to convert currencies in real-time using live exchange rates. The application is built with HTML, CSS, and JavaScript and fetches data from a reliable exchange rate API. It also includes a live currency rates table with pagination and a search feature for easy navigation.

Features
Real-Time Currency Conversion:

Convert any amount from one currency to another.

Supports 100+ currencies.

Live Currency Rates Table:

View live exchange rates for all supported currencies.

Search for specific currencies.

Pagination to navigate through the table.

User-Friendly UI:

Clean and responsive design.

Easy-to-use interface.

How-to-Use Guide:

Step-by-step instructions for using the currency converter.

FAQ Section:

Answers to common questions about the application.

Technologies Used
Frontend: HTML, CSS, JavaScript

API: ExchangeRate-API for live exchange rates.

Icons: Font Awesome for icons.

Hosting: Can be hosted on platforms like Netlify, Vercel, or GitHub Pages.

How to Use
Enter Amount:

Enter the amount you want to convert in the input field.

Select Currencies:

Choose the "From" currency (the currency you want to convert from).

Choose the "To" currency (the currency you want to convert to).

Convert:

Click the "Convert" button to see the result.

Live Rates Table:

Use the search bar to filter currencies.

Navigate through the table using the "Previous" and "Next" buttons.

Screenshots
Currency Converter:
Currency Converter

Live Rates Table:
Live Rates Table

FAQ Section:
FAQ Section

Installation
Clone the Repository:

bash
Copy
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
Open the Project:

Open the index.html file in your browser.

Run Locally:

No server setup is required. The application runs directly in the browser.

API Key
To fetch live exchange rates, you need an API key from ExchangeRate-API. Replace the placeholder API endpoint in the script.js file with your own API key:

javascript
Copy
fetch('https://api.exchangerate-api.com/v4/latest/USD')
Folder Structure
Copy
currency-converter/
├── index.html
├── styles.css
├── script.js
├── README.md
└── screenshots/
    ├── converter.png
    ├── live-rates.png
    └── faq.png
Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix.

Commit your changes.

Submit a pull request.

Enjoy using the Currency Converter! 💰🌍
