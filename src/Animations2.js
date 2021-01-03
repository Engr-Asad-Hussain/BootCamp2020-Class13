import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

function Animations2() {
    /*
        The Web Animations API provides several useful methods for controlling 
        playback: play, pause, reverse, cancel, finish, seek, control speed via 
        the methods of the WebAnimationsAPI (we did in class12). This hook exposes 
        the animation instance for us to interact with animations, we can access 
        it by the getAnimation() return value.
    */

    const { ref, playState, getAnimation } = useWebAnimations({
        playbackRate: 0.2, // Change playback rate, default is 1
        autoPlay: true,    // Automatically starts the animation, default is true
        keyframes: {    // keyFrameEffects
            transform: "translateX(500px)",
        },
        timing: {       // timing options
            duration: 2000,
            iterations: Infinity,
            direction: 'alternate',
            fill: 'backwards'
        }
    });

    const play = () => {
        // Now we can access WebAnimationAPI methods/functions using getAnimation()
        getAnimation().play();  
    }
    const pause = () => {
        getAnimation().pause();
    }
    const reverse = () => {
        getAnimation().reverse();
    }
    const cancel = () => {
        getAnimation().cancel();
    }
    const finish = () => {
        getAnimation().finish();
    }
    const seek = (event) => {
        // console.log(event);
        // console.log(event.target.value) // contains range from 0 to 100: datatype = string
        const animation = getAnimation();
        // console.log(animation);
        // console.log(animation.effect)   // animation.effect returns keyFrameEffects
        // console.log(animation.effect.getTiming())   // It returns Timings option (see above)
        const time = (animation.effect.getTiming().duration / 190000 ) * event.target.value;
        // console.log(time.toFixed(2));
        animation.playbackRate = time;
    }


    return (
        <div>
            <div ref={ref}>
                Happy Birthday
            </div>
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reverse}>Reverse</button>
            <button onClick={cancel}>Cancel</button>
            <button onClick={finish}>Finish</button>
            <input type="range" onChange={seek} />
        </div>
    );
}
export default Animations2;