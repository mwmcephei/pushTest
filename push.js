const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BD0wCYCQiH9SQ24_Ck0sUvxAsAtAAv2as4QOcpGr3bZo6PPYLwap8pp9XZNMelIBTn3ngdA3F5dNp6Ho2ePGtqY',
  privateKey: 'X3Ol-7-l42E6XQmZAUEOOwAJCL-c201NQd_gVfrCUDE'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');



/*
let xxcsdv = webpush.generateVAPIDKeys();
console.log(xxcsdv)
*/
