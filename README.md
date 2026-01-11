<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DEMO WEB SHOP – Playwright Automation Project</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            margin: 40px;
            color: #333;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        code, pre {
            background-color: #f4f4f4;
            padding: 5px;
            border-radius: 4px;
            display: block;
            overflow-x: auto;
        }
        ul {
            margin-left: 20px;
        }
        .section {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>

<h1>DEMO WEB SHOP – Playwright Automation Project</h1>

<div class="section">
    <h2>Project Overview</h2>
    <p>
        This project is a UI Automation Test Framework built using
        <strong>Playwright</strong> with <strong>JavaScript/TypeScript</strong>
        for testing the website:
    </p>
    <p>
        🔗 <a href="https://demowebshop.tricentis.com" target="_blank">
        https://demowebshop.tricentis.com</a>
    </p>

    <p>The framework follows industry best practices, including:</p>
    <ul>
        <li>Page Object Model (POM)</li>
        <li>Data-Driven Testing</li>
        <li>Environment Variables for sensitive data</li>
        <li>Automated Test Reporting</li>
    </ul>
</div>

<div class="section">
    <h2>Test Case Covered</h2>
    <p><strong>Place order with multiple products (with price calculation validation)</strong></p>

    <p>The automated test performs the following steps:</p>
    <ul>
        <li>Login to the Demo Web Shop</li>
        <li>Add multiple products to the cart</li>
        <li>Validate individual product prices</li>
        <li>Validate total price calculation</li>
        <li>Proceed through checkout</li>
        <li>Confirm order placement</li>
    </ul>
</div>

<div class="section">
    <h2>Technologies Used</h2>
    <ul>
        <li>Playwright (UI automation)</li>
        <li>Node.js</li>
        <li>JavaScript / TypeScript</li>
        <li>JSON (external test data)</li>
        <li>HTML Reporter (Playwright)</li>
    </ul>
</div>

<div class="section">
    <h2>Project Structure</h2>
    <pre>
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
    </pre>
</div>

<div class="section">
    <h2>Environment Variables</h2>
    <p>Sensitive data is <strong>NOT</strong> stored in the repository.</p>
    <p>Create a <code>.env</code> file in the root directory:</p>

    <pre>
USER_EMAIL=your_email@example.com
USER_PASSWORD=your_password
    </pre>

    <p>You can use <code>.env.example</code> as a reference.</p>
</div>

<div class="section">
    <h2>Setup & Installation</h2>

    <h3>1️⃣ Clone the repository</h3>
    <pre>
git clone https://github.com/andriimarynich-cell/DEMO-WEB-SHOP.git
cd DEMO-WEB-SHOP
    </pre>

    <h3>2️⃣ Install dependencies</h3>
    <pre>
npm install
    </pre>

    <h3>3️⃣ Install Playwright browsers</h3>
    <pre>
npx playwright install
    </pre>
</div>

<div class="section">
    <h2>Running Tests</h2>

    <p><strong>Run all tests</strong></p>
    <pre>
npx playwright test
    </pre>

    <p><strong>Run tests in headed mode</strong></p>
    <pre>
npx playwright test --headed
    </pre>

    <p><strong>Run a specific test file</strong></p>
    <pre>
npx playwright test tests/placeOrder.spec.ts
    </pre>
</div>

<div class="section">
    <h2>Test Reports</h2>
    <p>After test execution, Playwright generates an HTML report.</p>

    <p><strong>Open the report:</strong></p>
    <pre>
npx playwright show-report
    </pre>

    <p>Reports are stored in:</p>
    <pre>
playwright-report/
    </pre>
</div>

<div class="section">
    <h2>Test Data Management</h2>
    <p>Test data is stored externally in JSON format:</p>
    <pre>
data/products.json
    </pre>

    <p>This allows:</p>
    <ul>
        <li>Easy modification of test inputs</li>
        <li>Reusability</li>
        <li>Data-Driven Testing approach</li>
    </ul>
</div>

<div class="section">
    <h2>Design Patterns & Best Practices</h2>
    <ul>
        <li>Page Object Model (POM) for better maintainability</li>
        <li>Reusable page actions</li>
        <li>Clear separation between test logic and UI locators</li>
        <li>Environment variables for security</li>
        <li>Readable and scalable test structure</li>
    </ul>
</div>

<div class="section">
    <h2>🤖 BONUS: AI-Assisted Development</h2>
    <p>AI tools (such as ChatGPT) were used to:</p>
    <ul>
        <li>Generate initial test structure</li>
        <li>Improve Page Object design</li>
        <li>Optimize Playwright locators</li>
        <li>Accelerate debugging and refactoring</li>
        <li>Assist with documentation creation</li>
    </ul>

    <p>
        This significantly reduced development time and improved code quality.
    </p>
</div>

<div class="section">
    <h2>Deliverables Checklist</h2>
    <ul>
        <li>✔ Playwright automation tests</li>
        <li>✔ Page Object Model</li>
        <li>✔ External test data (JSON)</li>
        <li>✔ Secure environment variables</li>
        <li>✔ Executable project</li>
        <li>✔ HTML test reports</li>
        <li>✔ README with setup and usage instructions</li>
        <li>✔ GitHub repository</li>
    </ul>
</div>

<div class="section">
    <h2>Author</h2>
    <p><strong>Andrii Marynich</strong></p>
</div>

</body>
</html>
