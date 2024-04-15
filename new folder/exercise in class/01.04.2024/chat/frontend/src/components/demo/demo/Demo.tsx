import { io } from "socket.io-client";
import "./Demo.css";
import { useState } from "react";

function Demo(): JSX.Element {

    const [socketId, setSocketId] = useState<string>('');
    const [latestId, setLatestId] = useState<string>('');
    const [serverTime, setServerTime] = useState<string>('');

    function connect() {
        const socket = io('http://localhost:3001');

        socket.on('welcome', ( { id } ) => {
            setSocketId(id);
            socket.emit('acknowledge', { id });
        });

        socket.on('new user joined', ( { id } ) => {
            setLatestId(id);
        })

        socket.on('time', ({ time }) => {
            setServerTime(time);
        })
    }

    return (
        <div className="Demo">
			<h1>socket.io client example</h1>
            <h3>my socket id is {socketId}</h3>
            <h5>latest joined user is {latestId}</h5>
            <h5>server time is {serverTime}</h5>
            <button onClick={connect}>connect</button>  
        </div>
    );
}

export default Demo;
