import React, { useRef } from 'react';

export default function Video() {
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    const handleStop = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <div className="video-component">
            <video ref={videoRef} width="600" controls>
                <source src="../Videos/VID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <div className="video-controls">
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleStop}>Stop</button>
            </div> */}
        </div>
    );
}
