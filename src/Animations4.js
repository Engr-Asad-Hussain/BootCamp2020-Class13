import React, { useEffect } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

function Animations4() {
    const { ref, animate } = useWebAnimations();
    
    useEffect(()=>{
        document.addEventListener("mousemove", (event)=>{
            // console.log(event)
            animate({
                keyframes: {
                    transform: `translateX(${event.clientX}px)`,
                    color: ['red', 'blue', 'green']
                },
                timing: {
                    duration: 4000,
                    iterations: Infinity,
                    easing: 'ease-in-out'
                }
            })
            // console.log(animate);
        })
    }, [animate])

    return (
        <div>
            <div ref={ref}>Happy Birthday</div>
        </div>
    );
}
export default Animations4;