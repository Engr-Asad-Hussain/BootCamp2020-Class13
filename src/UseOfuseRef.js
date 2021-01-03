import React, { useRef, useLayoutEffect } from 'react';
import './App.css';

function UseOfuseRef() {
    let state = useRef(null);
    
    useLayoutEffect(()=>{
        state.current.focus();
    }, [])

    // useEffect(()=>{
    //     state.current.focus();
    // }, [])

    return (
        <div className="container">
            <div className="login">Student Login</div>
            <p>Presidential Initiative for<br/>Artificial Intelligence and Computing</p>
            <form className="user-form">
                <div>
                    <label htmlFor="email">Email</label><br/>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter email address"
                        required
                        ref={state}
                    />
                </div>
                <div>
                    <label htmlFor="pass">Password</label><br/>
                    <input
                        type="password"
                        id="pass"
                        placeholder="Enter password"
                        required
                    />
                </div>
                <div className="pre-footer-login">
                    <p>Not a member? <span>Sign up</span></p>
                    <p><span>Forgot Password?</span></p>
                </div>
                <button className="btn">Login</button>
            </form>
        </div>
    );
}

export default UseOfuseRef;