import { Server } from 'socket.io';
import { v4 } from 'uuid';

const io = new Server({
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    const id = v4();
    console.log(`user connected with id ${id}`);

    socket.emit('welcome', { id });
    io.emit('new user joined', { id });

    socket.on('acknowledge', ( { id }) => {
        console.log(`got acknowledge from ${id}`)
    })

    socket.on('disconnect', () => {
        console.log(`user id ${id} disconnected`)
    })
})

setInterval(() => {
    const now = (new Date()).toLocaleTimeString()
    io.emit(`time`, {
        time: now
    })
}, 3000)

io.listen(3001);