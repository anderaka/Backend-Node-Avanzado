'use strict';

// Servicio de creation de Thumbs

const cote = require('cote');
const jimp = require('jimp');

const responder = new cote.Responder({ name: 'ThumbCrafter' });

responder.on('Resize IMG', async (req, done) => {
  
    /* Lee la imagen */

    const image = await jimp.read('../public/images/ads/' + req.file);
  
    /* Redimensiona la imagen y le da un alto automatico */

    await image.resize(100, jimp.AUTO);
  
    /* Salva los cambios de la imagen */
    await image.writeAsync('../public/images/thumb/' + req.file);

});