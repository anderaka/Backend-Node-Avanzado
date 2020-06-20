'use strict';

require('dotenv').config();

const connect = require('./lib/connectMongo');
const anuncios = require('./models/anuncios');
const usuarios = require('./models/usuarios');

connect.once('open', async () => {
    try {
        await initAnuncios();
        await initUsuarios();
        console.log("Tareas de impotacion conseguidas");
        connect.close();
    } catch (err) {
        console.error('Hubo un error: ', err)
        process.exit(1);
    }
});

async function initAnuncios() {
    await anuncios.deleteMany();
    await anuncios.insertMany([
        { name: 'PS5', sell: true, price: 499, photo: 'ps5.JPG', tags: ['lifestyle'] },
        { name: 'Cadillac', sell: false, price: 48000, photo: 'Cadillac.JPG', tags: ['motor'] },
        { name: 'Pesas', sell: true, price: 150, photo: 'pesas.JPG', tags: ['lifestyle'] },
        { name: 'Bicicleta', sell: false, price: 99, photo: 'bicicleta.JPG', tags: ['lifestyle'] },
        { name: 'Rolls Royce', sell: false, price: 450500, photo: 'rols.JPG', tags: ['motor'] },
        { name: 'Lenovo Legion', sell: false, price: 1399, photo: 'lenovo.JPG', tags: ['work'] },
    ]);
}

async function initUsuarios() {
    console.log('Deleting all users on ' + new Date());
    await usuarios.deleteMany();
    console.log('Creating some new users ' + new Date());
    await usuarios.insertMany([
      {
        email: 'user@example.com',
        password: '1234',
      },
    ]);
    console.log("For this testing season user is: user@example.com => 1234");
  }