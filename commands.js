
const reply = require("./commands/reply.js");

const commands = { reply };


module.exports = async function (msg) {

    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === "!") {
        command = command.substring(1);
        commands[command](msg, tokens);
    }

};
