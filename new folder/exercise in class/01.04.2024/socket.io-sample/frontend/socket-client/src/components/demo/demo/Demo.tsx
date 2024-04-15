import { io } from "socket.io-client";
import "./Demo.css";
import { useState } from "react";

function Demo(): JSX.Element {

    const [socketId, setSocketId] = useState<string>('');
    const [latestId, setlatestId] = useState<string>('');

    function connect(){
        const socket = io('http://localhost:3001')

        socket.on('welcome', ({id}) => {
            setSocketId(id);
            socket.emit('acknowledge', {id});
        })

        socket.on('new user joined', ({id}) => {
            setlatestId(id);
            
        });
    }

    return (
        <div className="Demo">
			<h1>socket.io example</h1>
            <h3>my socket id is {socketId}</h3>
            <h3>latest user joined {latestId}</h3>
            <button onClick={connect}>connect</button>
        </div>
    );
}

export default Demo;
