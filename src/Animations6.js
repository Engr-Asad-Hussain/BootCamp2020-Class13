import React from 'react';
import useWebAnimations, { bounce } from '@wellyshen/use-web-animations';

function Animations6() {
    const state = useWebAnimations({ ...bounce });

    // console.log(bounce);
    let { keyframes, timing } = bounce;
    const { ref } = useWebAnimations({
        keyframes: [
            ...keyframes,
            keyframes[8] = { 
                trasnsfrom: {
                    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    offset: 1,
                    transformOrigin: "center bottom"
                }
            }
        ],
        timing: {
            ...timing,
            iterations: Infinity
        }
    });

    return (
        <div>
            <div ref={ref}>Birthday Boy::After</div><br />
            <div ref={state.ref}>BirthdayBoy::Before</div>
        </div>
    );
}
export default Animations6;