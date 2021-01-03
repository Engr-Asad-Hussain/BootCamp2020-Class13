import Animations1 from './Animations1';
import Animations2 from './Animations2';
import Animations3 from './Animations3';
import Animations4 from './Animations4';
import Animations5 from './Animations5';
import Animations6 from './Animations6';

function App() {
  return (
    <div>
      <h2>Create basic animation by the keyframes and timing</h2>
      <Animations1 />
      <hr />
      <h2>Playback Controls</h2>
      <Animations2 />
      <hr />
      <h2>Getting Animation's Information</h2>
      <Animations3 />
      <hr />
      <h2>Dynamic Interactions with Animation</h2>
      <Animations4 />
      <hr />
      <h2>Built-in Functions:</h2>
      <Animations5 />
      <hr />
      <h2>Customize built-in animation by overriding its properties</h2>
      <Animations6 />
    </div>
  );
}

export default App;
