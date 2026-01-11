DEMO WEB SHOP – Playwright Automation Project
 Project Overview

This project is an UI Automation Test Framework built using Playwright with JavaScript/TypeScript for testing the website:

🔗 https://demowebshop.tricentis.com

The framework follows industry best practices, including:

Page Object Model (POM)

Data-Driven Testing

Environment Variables for sensitive data

Automated Test Reporting

Test Case Covered
Place order with multiple products (with price calculation validation)

The automated test performs the following steps:

Login to the Demo Web Shop.

Add multiple products to the cart.

Validate individual product prices.

Validate total price calculation.

Proceed through checkout.

Confirm order placement.

 Technologies Used

Playwright (UI automation)

Node.js

JavaScript / TypeScript

JSON (external test data)

HTML Reporter (Playwright)

 Project Structure
DEMO-WEB-SHOP/
│
├── src/
│   ├── pages/           # Page Object Model classes
│   ├── tests/           # Test specifications
│   ├── utils/           # Helper and utility functions
│
├── data/
│   └── products.json    # External test data
│
├── playwright-report/   # HTML test report
├── test-results/        # Test execution artifacts
│
├── .env.example         # Environment variables template
├── playwright.config.js
├── package.json
└── README.md

 Environment Variables

 Sensitive data is NOT stored in the repository.

Create a .env file in the root directory:

USER_EMAIL=your_email@example.com
USER_PASSWORD=your_password


You can use .env.example as a reference.

 Setup & Installation
1️⃣ Clone the repository
git clone https://github.com/andriimarynich-cell/DEMO-WEB-SHOP.git
cd DEMO-WEB-SHOP

2️⃣ Install dependencies
npm install

3️⃣ Install Playwright browsers
npx playwright install

▶️ Running Tests
Run all tests
npx playwright test

Run tests in headed mode
npx playwright test --headed

Run a specific test file
npx playwright test tests/placeOrder.spec.ts

📊 Test Reports

After test execution, Playwright generates an HTML report.

Open the report:
npx playwright show-report


📁 Reports are stored in:

playwright-report/

📑 Test Data Management

Test data is stored externally in JSON format:

data/products.json


This allows:

Easy modification of test inputs

Reusability

Data-Driven Testing approach

🧩 Design Patterns & Best Practices

Page Object Model (POM) for better maintainability

Reusable page actions

Clear separation between test logic and UI locators

Environment variables for security

Readable and scalable test structure

🤖 BONUS: AI-Assisted Development

AI tools (such as ChatGPT) were used to:

Generate initial test structure

Improve Page Object design

Optimize Playwright locators

Accelerate debugging and refactoring

Assist with documentation creation

This significantly reduced development time and improved code quality.

✅ Deliverables Checklist

✔ Playwright automation tests
✔ Page Object Model
✔ External test data (JSON)
✔ Secure environment variables
✔ Executable project
✔ HTML test reports
✔ README with setup and usage instructions
✔ GitHub repository

📬 Author

Andrii Marynich
