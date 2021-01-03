import useWebAnimations from '@wellyshen/use-web-animations';
import React from 'react';
import './App.css';

function Animations1() {
    // "ref" contains the reference of div. It exactly same as useRef. It has implemented useRef inside this library
    // "playstate" returns current state of animation.

    const { ref, playState } = useWebAnimations({
        keyframes: {
            transform: "translateX(500px)",       // Move by 500px
            background: ["red", "blue", "green"], // Go through three colors
        },
        timing: {
            //   delay: 500, // Start with a 500ms delay
            duration: 2000, // Run for 2s
            iterations: Infinity, // Repeat infinite
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        },
        onReady: ({ playState, animate, animation }) => {
            // Triggered when the animation is ready to play
            // console.log(playState);
        },
        onUpdate: ({ playState, animate, animation }) => {
            // Triggered when the animation enters the running state or changes state
        },
        onFinish: ({ playState, animate, animation }) => {
            // Triggered when the animation enters the finished state
            // console.log("Finished");
        },
        // More useful options...
    });

    // console.log(playState);

    return (
        <div>
            <div className="div" ref={ref} /><br />
            <p>Animation state: {playState}</p>
        </div>
    );
}
export default Animations1;