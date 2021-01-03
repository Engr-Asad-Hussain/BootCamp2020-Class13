import React from 'react';
import useWebAnimations, { bounce, rotateOut, shakeX } from '@wellyshen/use-web-animations';

function Animations5() {
    const state1 = useWebAnimations({...bounce });
    const state2 = useWebAnimations({...rotateOut });
    const state3 = useWebAnimations({...shakeX });
    
    // console.log(state);
    return (
        <div>
            <p ref={state1.ref}>Asad Hussain</p>
            <p ref={state2.ref}>Happy Birthday</p>
            <p ref={state3.ref}>Wrong Password</p>
        </div>
    );
}
export default Animations5;