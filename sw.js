self.addEventListener('push', () => {
    console.log("huhu")
    self.registration.showNotification('Hello world!', options);
  });