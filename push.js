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
  endpoint: 'https://fcm.googleapis.com/fcm/send/cAXQl_uERp8:APA91bGphIxPLeac41z4EvkUexOxxgKFCkEJDI4gWRoIJtrt9pedkh8fCJKRylaQ941HxGVSmTnrKOAJ3ID-IEB37gmjQJrESEOnOaHBVHzasjewtU9MqPI2XqSmOVyf3dxT5r-qHKcB',
  keys: {
    auth: 'DJzkDLIad7GA5lG4pnCGxQ',
    p256dh: 'BOHvacnw2yl9ajGrf27DDmX2V1r9rcoJTSmI2uIBldKfRNebmNe42kEUj2pp77nWLHrPmmEHqOCLWyWd-0eIbw4'
  }
};



/*
let xxcsdv = webpush.generateVAPIDKeys();
console.log(xxcsdv)
*/
