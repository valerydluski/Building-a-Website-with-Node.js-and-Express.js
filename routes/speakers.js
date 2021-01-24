const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (request, response) => {
    const speakers = await speakersService.getList();
    const allArtworks = await speakersService.getAllArtwork();
    response.render('layout', {
      pageTitle: 'Speakers',
      template: 'speakers',
      speakers,
      allArtworks,
    });
  });

  router.get('/:shortname', async (request, response) => {
    const speaker = await speakersService.getSpeaker(request.params.shortname);
    const artworkForSpeaker = await speakersService.getArtworkForSpeaker(request.params.shortname);
    response.render('layout', {
      pageTitle: 'Speakers',
      template: 'speakers-detail',
      speaker,
      artworkForSpeaker,
    });
  });

  return router;
};
