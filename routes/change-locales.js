const express = require('express');
const router = express.Router();

router.get('/:locales', (req, res, next) => {

  const locales = req.params.locales;
  const volverA = req.get('referer');
  res.cookie('nodeapi-locales', locales, { maxAge: 1000 * 60 * 60 * 24 * 20 });
  res.redirect(volverA);
});

module.exports = router;