"use client"

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard';

const PromptCardList = ({data})=>{
  return(
    <div className='mt-16 prompt_layout'>
      {data.map((post)=>(
        <PromptCard 
          key={post._id}
          post={post}        
        />
      ))}
    </div>
  )
}

const Feed = () => {

  const [allPosts, setAllPosts] = useState([]);

  //Search States
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    console.log(data)
    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  const handleSearchChange = (e) => {
    
  };

  return (
    <section className="feed">
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList data={allPosts} />
    </section>
  )
}

export default Feed
