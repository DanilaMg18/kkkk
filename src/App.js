import React, {useState} from "react"
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";  
import Layout from "./components/Layout";
import Layout2 from "./components/Layout2";
import { Posts } from "./components/smallComponents/posts";
import { CreatePost } from "./components/smallComponents/createPost";
import { Contacts } from "./components/smallComponents/contacts";
import { SinglePostPage } from "./components/smallComponents/singlePost";

function App(props) {
  const Navigate = useNavigate()
  const goTo = () => {Navigate('/')}


  let user = {
    username: 'bot',
    password: '12345',
  }
  let [data,setData] = useState({
    username: '',
    password: '',
  })

  function setUserName(username){
    setData({...data,username})
  }

  function setPassword(password){
    setData({...data,password})
  }


  function checking(e) {
    e.preventDefault()
    if (data.username === '' || data.password === '') {
      alert('Please Fill All The Fields')
    } else {
      if (data.password === user.password && data.username === user.username) {
        goTo()
      }else {
        alert ("Wrong Password")
      }
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Layout dataDetails={data} changeDataDetails={setUserName} changeDataPassword={setPassword} checking={checking}/>}>  
        </Route>
        <Route path='/' element={<Layout2/>}>
          <Route path='/contacts' element={<Contacts/>}></Route>
          <Route path="/new" element={<CreatePost/>}></Route>
          <Route path='/posts' element={<Posts/>}></Route>
          <Route path="/posts/:id" element={<SinglePostPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
