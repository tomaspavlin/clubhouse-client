const express = require('express');
const router = express.Router();

/* get channels */
router.get('/', async (req, res, next) => {
  const json = await req.clubhouse.getChannels()
  res.json(json);
});

/* get channel */
router.get('/:code', async (req, res, next) => {
  const json = await req.clubhouse.getChannel(req.params.code)
  res.json(json);
});

/* join channel */
router.get('/:channel/join', async (req, res, next) => {
  const json = await req.clubhouse.joinChannel({ channel: req.params.channel })
  res.json(json);
});

/* leave channel */
router.get('/:channel/leave', async (req, res, next) => {
  const json = await req.clubhouse.leaveChannel({ channel: req.params.channel })
  res.json(json);
});

module.exports = router;
