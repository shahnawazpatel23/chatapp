import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx';

const App =()=>{
  console.log("localstorage", localStorage.getItem('username'))

  if(!localStorage.getItem('username')) return <LoginForm/>;


  return(
    <ChatEngine
      height='100vh'
      projectID="0d37975b-638e-48cf-9cb7-f6efb71f74d3"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatProps)=> <ChatFeed {...chatProps}/>}

    
    />
  )
}

export default App;