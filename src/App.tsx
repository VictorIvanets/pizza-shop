import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/input';





function App() {





  return (
    <div className='app'>
      <Button appearence = 'big' onClick={console.log('1')}> Hi     </Button>
      <Button appearence='small' onClick={console.log('2')}> Hi    </Button>
      <Input placeholder='e-mail'/> 
      
    </div>
    
  );
}

export default App;
