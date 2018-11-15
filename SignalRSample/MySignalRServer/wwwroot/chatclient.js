document.addEventListener("DOMContentLoaded", function () {
    const connection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Trace)
        .withUrl("/mychat")
        .build();

    connection.on('MyBroadcast', (name, message) => {
        console.log(message);
        document.getElementById('output').innerHTML += `message from ${name}: ${message}<br />`;
    });

    connection.start().then(function () {
        document.getElementById('sendbutton').addEventListener('click', function () {
            let name = document.getElementById('myname').value;
            let message = document.getElementById('myinput').value;

            connection.invoke('myMessage', name, message);
        });
    });

});