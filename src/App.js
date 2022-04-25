import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';
import Markdown from 'marked-react';

const App = () => {

  const [Field, setField] = useState('');
  const placeholder = `# This is an h1!

  ## This is an h2...
  
  There's a [link](https://www.freecodecamp.org), and
  
  some code, \`<div></div>\`, with some divs.
  
  \`\`\`
  // and yes is is parctically the same code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
- that me have
  - in the example page.
      - jus dont get mad at me pls.
        - im going to leave a cute image.


  > not here!

  but after this **bold** word!

  ![Duck](https://www.meme-arsenal.com/memes/c92c56a8306d1fe39b6b39067251350d.jpg)
  `;

const changeField = (event) => 
  {
    const searchFieldString = event.target.value;
    setField(searchFieldString) ;
    console.log(searchFieldString);
  }

  useEffect(() => {
    
      setField(placeholder)
  }, [])
  
  return (
    <div className="App">
      <h2 style={{display: 'flex', justifyContent: 'start', color: 'red'}}>Editor Window</h2>
<textarea id="editor" value={Field} onChange={changeField} />
        <div id="preview">
        <h2 style={{display: 'flex', justifyContent: 'start', color: 'red'}}>Preview Window</h2>
        <Markdown style={{backgroundColor: 'blue'}} id="preview">{Field}</Markdown>
        </div>
    </div>
  );
}

export default App;
