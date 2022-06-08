import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function SideBar() {
    const [cats, setCats] = useState([])
    
    
    useEffect(()=>{
       const getCats = async()=>{
           const res = await axios.get("/categories")
           setCats(res.data)
       }
       getCats();
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src="https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243"
                    alt="" />
                <p>This is a blog application made using React.js, Node.js, Express and MongoDB. We can create, update, delete posts 
                    and also we can create, update and delete users. Thank you for reading</p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {cats.map((c)=> (
                        <Link to={`/?cat=${c.name}`} className='link'>
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
