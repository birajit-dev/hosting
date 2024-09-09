const express = require('express');
const bodyParser = require('body-parser');
const hostingController = require('./controller/hostingController');

const app = express();

// Set up view engine (EJS for simple templating)
app.set('view engine', 'ejs');

// Set up static files (CSS, JS)
app.use(express.static('public'));

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Home Route
app.get('/', hostingController.showDashboard);
app.get('/dashboard', hostingController.hostingDashboard);
app.get('/setting', hostingController.settingPage);
app.get('/billing', hostingController.billingPage);
app.get('/pay', hostingController.payPage);
app.get('/support', hostingController.supportPage);

// Add domain route
app.post('/add-domain', hostingController.addDomain);

// Start server
const port = 8888;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
