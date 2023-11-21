import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import { PostItem } from './pages/PostItem';


function App() {
  const router = createBrowserRouter ( [
    {path:'/' , element: <Home />} ,
    {path:'posts' , element: <Posts />} ,
    {path:'posts/:id' , element: <PostItem />} ,
  ]

)
return (<RouterProvider router={router}></RouterProvider>)
}

export default App;