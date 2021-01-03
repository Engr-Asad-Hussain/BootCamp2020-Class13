# useRef, useLayoutEffect, WebAnimations in React.

#### Example: 01
URL: 
Surge: 

#### Example: 02


### useRef()
- In the world of React we think of refs as being references to actual DOM nodes that react is rendering. These are useful for performing operations that require actual DOM access, like focusing an element or measuring an element.
- It means that if we use useRef, it bypass the virtual DOM and we can not perform operations directly on DOM.
- It is just as we do in document.getElementById() or document.getElementsByClassName() etc. These functions creates a reference of particular ID or Class.
- [useRef](http://wellpaidgeek.com/2020/02/11/reacts-useref-hook-explained/)
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

### useLayoutEffect()
- We know that useEffect will render components after the DOM renders all its components.
- useLayoutEffect() is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.
- [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
