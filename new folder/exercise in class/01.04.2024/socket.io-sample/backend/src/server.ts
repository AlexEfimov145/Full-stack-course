import { Server } from 'socket.io';
import { v4 } from 'uuid';

const io = new Server({
    cors: {
        origin: '*'
    }
});

io.on('connection',(socket) => {
    const id = v4();
    console.log(`user connected with id ${id}`);

    socket.emit('welcome', { id });
    io.emit('new user joined', { id });

    socket.on('acknowledge', () => {
        console.log(`got acknowledge from ${id}`);
    });
})

setInterval(() => {
    io.emit('time', {
        
    });
},3000)
io.listen(3001);