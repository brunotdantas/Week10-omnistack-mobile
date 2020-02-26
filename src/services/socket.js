import socketio from 'socket.io-client'

const socket = socketio('https://3333-f9bf55a9-806e-495f-a01e-706ce71cd68e.ws-us02.gitpod.io', {
    autoConnect: false
})

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }
    
    socket.connect()
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect()
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
}