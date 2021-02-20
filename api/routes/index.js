const express = require('express');
const router = express.Router();

/* check for update */
router.get('/check-for-update', async (req, res, next) => {
  const json = await req.clubhouse.checkForUpdate()
  res.json(json);
});

/* get clubs */
router.get('/clubs', async (req, res, next) => {
  const json = await req.clubhouse.getClubs()
  res.json(json);
});

/* get club */
/* not working */
/*router.get('/clubs/:id', async (req, res, next) => {
  const json = await req.clubhouse.getClub(req.params.id)
  res.json(json);
});*/

/* get profile */
router.get('/profile', async (req, res, next) => {
  const json = await req.clubhouse.getProfile()
  res.json(json);
});

/* get settings */
router.get('/settings', async (req, res, next) => {
  const json = await req.clubhouse.getSettings()
  res.json(json);
});

/* get topics */
router.get('/topics', async (req, res, next) => {
  const json = await req.clubhouse.getTopics()
  res.json(json);
});

/* get user */
router.get('/user/:id', async (req, res, next) => {
  const json = await req.clubhouse.getUser(req.params.id)
  res.json(json);
});

module.exports = router;
