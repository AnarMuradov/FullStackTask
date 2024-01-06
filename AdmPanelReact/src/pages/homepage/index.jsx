import React, { useEffect, useState } from 'react'
import './style.css'
const HomePage = () => {
  const [blog, setBlog] = useState([])
  const getBlog = async () => {
    const res = await fetch("http://localhost:3000/Blogs");
    const data = await res.json();
    setBlog(data);
  };
  useEffect(() => {
    getBlog()
  }, [])
  
  return (
    <section className='HomePageSection'>
      <div className="Homepg">
    <h1>Blog</h1>
    <div className="HomepgCardList">
    {blog.map((x) => (
  <div className='HomepgCard'>
     <h2>{x.title}</h2>
     <div>{x.info}</div>
  </div>
    ))}
    </div>
    </div>
    </section>
  )
}

export default HomePage