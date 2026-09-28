import './App.css';
import { useState } from 'react';

export default  function App() {


  const [textAbove, setTextAbove] = useState('');
  const [textBelow, setTextBelow] = useState('');
  const [template, setTemplate] = useState('');
  return (
  <div className="App">

<label htmlFor="template" >Meme template </label>
<input id="template" value={template} onChange={(e) => setTemplate(e.currentTarget.value)} />



<label htmlFor="textAbove">Text Above</label>
<input id="textAbove" value={textAbove} onChange={(e) => setTextAbove(e.target.value)} />

<label htmlFor="textBelow">Text Below</label>
<input id="textBelow" value={textBelow} onChange={(e) => setTextBelow(e.target.value)} />
<img src={`https://api.memegen.link/images/preview.jpg?template=${template}&lines[]=${textAbove}&lines[]=${textBelow}`} data-test-id="meme-image"  alt="first template" />
<button onClick={() => {
  const link = document.createElement('a');
  link.href = `https://api.memegen.link/images/preview.jpg?template=${template}&lines[]=${textAbove}&lines[]=${textBelow}`;
  link.download = 'meme.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}}>Download</button>



  </div>
  );
}
