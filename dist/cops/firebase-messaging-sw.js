// importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyC3x7iJDVlLMKUUpWU3WfDCYzDdFv4hkWI",
    authDomain: "testing-integra.firebaseapp.com",
    databaseURL: "https://testing-integra.firebaseio.com",
    projectId: "testing-integra",
    storageBucket: "testing-integra.appspot.com",
    messagingSenderId: "801064686373"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hello World from SW!';
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(title, options);
});