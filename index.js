const fs = require('fs');
const Discord = require('discord.js');
const { ErelaClient, Utils } = require('erela.js');
require('dotenv').config();
const prefix = "_";
//const {  token } = require('./config.json');

const client = new Discord.Client();

//console.log(nodes);



client.once('ready', () => {
    console.log('Ready!');
});

const commandHandler = require("./commands");

client.on("message", commandHandler);

client.login(process.env.TOKEN);


















