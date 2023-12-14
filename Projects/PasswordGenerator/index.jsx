/* 
1. useCallback(function, [dependencies]) :
In React, Functions are different on every render by default. 
useCallback is a react hook used to cache function defination between re-renders.
This avoids re-render of function defination wrapped inside useCallback().
useCallback() memoizes the function and make it identical across re-renders.
The Dependency array contains variables which controls when this function should be differnt.

2. useEffect(function, [dependencies]) :
The React useEffect hook is used to perform something as a side effect of a change (eg: a state change).
The useEffect hook runs atlleast once after the component is mounted in the DOM 
and only runs again if the dependency changes.
It also takes an optional return/clean-up function which runs before the component is re-rendered. 

useEffect(() => {
  console.log(`The count is : ${count}`); // the code we want to run

  return () => { // optional return (clean up) function
    console.log("I'm being cleaned up", count);
  };
    
  }, [count]); // dependency array

- The useEffect lifecycle :
1. It runs the code on mount for first time.
2. Whenever something in the dependency array changes, the useEffect hook will 
destory itself and it will run the clean up function before doing so.
3. Then the useEfect is recreated with new value and re-runs.
*/

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // variables
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // creating reference for input field
  const passwordRef = useRef(null);

  // psword generation logic
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // clipboard copy logic
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <div>
      <h1>Password generator</h1>
      <div>
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />{" "}
        <button onClick={copyPasswordToClipboard}>copy</button>
      </div>
      <div>
        <div>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
