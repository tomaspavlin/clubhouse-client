const express = require('express');
const router = express.Router();

/* get events */
router.get('/', async (req, res, next) => {
  const json = await req.clubhouse.getEvents({
    page_size: 25,
    page: 1
  })
  res.json(json);
});

module.exports = router;
