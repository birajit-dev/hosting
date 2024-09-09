const domains = []; // Simple in-memory storage for domains

// Show the main dashboard
exports.showDashboard = (req, res) => {
  res.render('index', { domains });
};

// Add a domain
exports.addDomain = (req, res) => {
  const domainName = req.body.domain;
  if (domainName) {
    domains.push(domainName);
  }
  res.redirect('/');
};

exports.hostingDashboard = (req, res) => {
    res.render('dashboard');
}

exports.settingPage = (req, res) => {
    res.render('setting'); // This renders the 'about.ejs' view
  };

exports.billingPage = (req, res) => {
    res.render('billing'); // This renders the 'about.ejs' view
  };

exports.payPage = (req, res) => {
    res.render('pay'); // This renders the 'about.ejs' view
  };

exports.supportPage = (req, res) => {
    res.render('support'); // This renders the 'about.ejs' view
  };

exports.emailPage = (req, res) => {
    res.render('email'); // This renders the 'about.ejs' view
}