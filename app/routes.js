// External dependencies
var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/email-address-page', function (req, res) {

    notify.sendEmail(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
      // in your code.
      '2b2d0a1a-0f8c-4ae6-b84b-7f25f899e7f8',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      req.body.emailAddress
    );
  
    // This is the URL the users will be redirected to once the email
    // has been sent
    res.redirect('/confirmation-page');
  
  });

  router.post('/mobile-number-page', function (req, res) {

    notify.sendSms(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
      // in your code.
      '01c1d3ad-845b-4e5a-99dc-16747ebc70fb',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      req.body.mobileNumber
    );
  
    // This is the URL the users will be redirected to once the email
    // has been sent
    res.redirect('/confirmation-page');
  
  });
module.exports = router;
