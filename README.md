# Web Animations with React
- **[Official Documentation](https://hackernoon.com/creating-highly-performant-animations-using-web-animations-api-and-react-hooks-k92d3utf?source=rss)**

### const { ref, playState } = useWebAnimations()
```
const { ref, playState } = useWebAnimations({
.
.
.

<div className="div" ref={ref} /><br />
<p>Animation state: {playState}</p>
```
- "ref" contains the reference of div. It exactly same as useRef. It has implemented useRef inside this library
- "playstate" returns current state of animation.

### const { getAnimation } = useWebAnimations()
- The Web Animations API provides several useful methods for controlling playback: play, pause, reverse, cancel, finish, seek, control speed via the methods of the WebAnimationsAPI (we did in class12). This hook exposes the animation instance for us to interact with animations, we can access it by the getAnimation() return value.

### const state1 = useWebAnimations({...bounce });
- use of Built-in methods

### Overrides built-in functions
```
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
```