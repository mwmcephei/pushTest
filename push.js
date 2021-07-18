var push = require('web-push');
/*
let xxcsdv = push.generateVAPIDKeys();
console.log(xxcsdv)
*/


let vapidKeys = {
    publicKey: "BJiV7ZcIJnccbe1NuWri9EzXu6qCq3Zr7PbWB-4udPgPP--t1MfUoT1BHSKOwO_MPou05kJOCz5t-CfMXgpjxQc-z1-luVmVepYMvoFaZpc",
    privateKey: "CxRxvKffw_DAeUh1Awwhnx8vOQVPxqxm1tUkCtPsuaA-VvLnxFbtm7TCERBHlHgNk"
}



push.setVapidDetails('mailto:test@code.ik.de', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};
push.sendNotification(sub, "test")
