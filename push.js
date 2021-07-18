var push = require('web-push');


let vapidKeys = {
    publickey: "BDnwSN2FFnVXIDjDZyb_ztH6_PdR0rnP8NL8GSSbRn8aMBNFRRNIFv0kOOHOP_MyK8J-z1-luVmVepYMvoFaZpc",
    privateKey: "ZavvhFQoTjW9aiHWBxeGc-VvLnxFbtm7TCERBHlHgNk"
}



push.setVapidDetails('mailto:test@code.ik.de', vapidKeys.publickey, vapidKeys.privateKey)

let sub = {};
push.sendNotification(sub, "test")
