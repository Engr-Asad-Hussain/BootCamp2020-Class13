# useRef, useLayoutEffect, WebAnimations in React.

#### Example: 01 - useRef, useLayoutEffect
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class13.git

Surge: http://old-fashioned-seed123.surge.sh/

#### Example: 02 - WebAnimations with React
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class13/tree/Animations-React

Surge: http://billowy-metal123.surge.sh/


-----------------------------------------------------------
# useRef, useLayoutEffect
-----------------------------------------------------------
### useRef()
- In the world of React we think of refs as being references to actual DOM nodes that react is rendering. These are useful for performing operations that require actual DOM access, like focusing an element or measuring an element.
- It means that if we use useRef, it bypass the virtual DOM and we can not perform operations directly on DOM.
- It is just as we do in document.getElementById() or document.getElementsByClassName() etc. These functions creates a reference of particular ID or Class.
- [useRef Official Documentation](http://wellpaidgeek.com/2020/02/11/reacts-useref-hook-explained/)
```
const state = useRef(null)
useEffect(()=>{
    state.current.focus();
}, [])
.
.
.
<input type="text" ref={state} />
```
- This will focus automatically on input field when the page loads. We can use useLayoutEffect or useEffect to render on DOM.
- [See Example](https://github.com/Engr-Asad-Hussain/BootCamp2020-Class13/blob/master/src/UseOfuseRef.js)

### useLayoutEffect()
- We know that useEffect will render components after the DOM renders all its components.
- useLayoutEffect() is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.
- [useLayoutEffect Official Documentation](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
- [See Example](https://github.com/Engr-Asad-Hussain/BootCamp2020-Class13/blob/master/src/UseOfuseRef.js)


-----------------------------------------------------------
# Web Animation API with React
- **[Official Documentation](https://hackernoon.com/creating-highly-performant-animations-using-web-animations-api-and-react-hooks-k92d3utf?source=rss)**

- [I have made 6 Animations by following Official Doc.](https://github.com/Engr-Asad-Hussain/BootCamp2020-Class13/tree/Animations-React)

------------------------------------------------------------
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