const firebaseConfig = {
    apiKey: "AIzaSyDJ7W30hWJf-3F5m0NXWlrY10hEMpzDPxA",
    authDomain: "iotsensorboard.firebaseapp.com",
    projectId: "iotsensorboard",
    storageBucket: "iotsensorboard.appspot.com",
    messagingSenderId: "1073983976179",
    appId: "1:1073983976179:web:d85b5be0d72db6cf277d86"
};
firebase.initializeApp(firebaseConfig);
firebase.database().ref().child("/Room_1/temperature").on('value',function(snapshot){
    document.getElementById('temperature_1').innerText = snapshot.val();
});
firebase.database().ref().child("/Room_1/humidity").on('value',function(snapshot){
    document.getElementById('humidity_1').innerText = snapshot.val();
});
firebase.database().ref().child("/Room_1/co").on('value',function(snapshot){
    document.getElementById('co_1').innerText = snapshot.val();
});
firebase.database().ref().child("/Room_1/ng").on('value',function(snapshot){
    document.getElementById('ng_1').innerText = snapshot.val();
});

firebase.database().ref().child("/Room_2/temperature").on('value',function(snapshot){
    document.getElementById('temperature_2').innerText = snapshot.val();
});
firebase.database().ref().child("/Room_2/humidity").on('value',function(snapshot){
    document.getElementById('humidity_2').innerText = snapshot.val();
});
firebase.database().ref().child("/Room_2/co").on('value',function(snapshot){
    document.getElementById('co_2').innerText = snapshot.val();
});
firebase.database().ref().child("/Room_2/ng").on('value',function(snapshot){
    document.getElementById('ng_2').innerText = snapshot.val();
});