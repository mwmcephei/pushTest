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
  endpoint: 'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABg9…GMkmt3XYrZIF-6MVvYQkIsB3-6pr9nefIxtz6lkAA7q3JgNOMBJ4d06nk8XI',
  keys: {
    auth: 'At_WRZRPhIncpsi8QtGERA',
    p256dh: 'BMnskQHeWFDoc0J6-iDsISMPszh9aipFtKF7ehBL9MMJ8T6VvPKbqbHAW0YpQeq2v5SoMedHOuCM8n2Chx0A3u4'
  }
};




/*
let xxcsdv = webpush.generateVAPIDKeys();
console.log(xxcsdv)
*/
