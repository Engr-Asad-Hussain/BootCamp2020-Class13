import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

function Animations3() {
    const { ref, getAnimation } = useWebAnimations({
        playbackRate: 9,
        keyframes: {
            transform: 'translateX(400px)'
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        }
    });
    const speedUp = () => {
        const animation = getAnimation();
        // console.log(animation);
        animation.updatePlaybackRate(animation.playbackRate * 0.25);
    }
    const jumpToHalf = () => {
        const animation = getAnimation();
        animation.currentTime = animation.effect.getTiming().duration / 2;
    }

    return (
        <div>
            <div ref={ref}>Asad Hussain</div>
            <button onClick={speedUp}>Speed Up</button>
            <button onClick={jumpToHalf}>Jump To Half</button>
        </div>
    );
}
export default Animations3;