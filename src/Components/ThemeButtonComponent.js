import {ThemeContext} from './ThemeContext'
import { useContext } from 'react';

  
  export function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
 function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }