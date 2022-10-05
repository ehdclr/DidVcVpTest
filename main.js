// const gettingStarted = require("./gettingStarted");
const test = require("./test");
const anoncredsRevocation = require("./annoncredsRevocation");


run()

async function run() {
    await test.run()
    await anoncredsRevocation.run()
    
}