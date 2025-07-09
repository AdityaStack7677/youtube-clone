import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    const searchCache = useSelector(store => store.search)
    const dispatch = useDispatch();

    /**
     * searchCache = {
     * "iphone": ["iphone 11", iphone, iphone 12, iphone 13]
     * }
     * 
     * searchQuery = phone
     */

    useEffect(()=>{
        //Make an API call after every key press but if the difference between 2 API calls is <200ms decline the api call
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }
            else{
                 getSearchSuggestions()
            }
        },200)
           
        return ()=>{
            clearTimeout(timer)
        }

    },[searchQuery])

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json();
        console.log(json[1])
        setSuggestions(json[1])

        //Update Cache
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }

   

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }

    return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
       <div className="flex col-span-1">
            <img 
            onClick={()=> toggleMenuHandler()}
            className="h-8 cursor-pointer"
            alt = "menu" 
            src="https://imgs.search.brave.com/yBE9NW4KmzwZS5NjN0tnKgZrNWeEwRW5LQCwbBdDzPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTgv/MjM1LzI1Ny9zbWFs/bC9jbGFzc2ljLWhh/bWJ1cmdlci1tZW51/LWljb24tZm9yLWFw/cHMtZnJlZS12ZWN0/b3IuanBn"
            />

            <a href='/'>
            <img 
            className="h-9 mx-2 w-35"
            alt="youtube-logo"
            src="https://imgs.search.brave.com/cyQSxSxPGNoHcBrKX0T4ZsevuYLvzV-XbfmUvktvKbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzc4LzEwLzQx/LzM2MF9GXzExNzgx/MDQxODBfQ1RQMjds/WVRMbWhwVkRhVDQ3/d1VJaVRXd3pMSzEy/QlUuanBn" 
            />
            </a>
        </div>
        <div className="col-span-10 px-10 ">
            <div className="relative">
            <input className= " w-1/2 border border-gray-500 p-1 rounded-l-full" 
            type="text"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
            />
            <button className= "border border-gray-500 p-1 rounded-r-full bg-gray-200">Search</button>
            {showSuggestions && (
                <div className="absolute bg-white py-2 px-2 w-[42rem] shadow-lg rounded-lg border-gray-5100 z-50">
                <ul>
                    {suggestions.map((suggest) => (<li key={suggest} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {suggest}</li>) )}
                </ul>
                </div>
            )}
            </div>
        </div>
        <div className="col-span-1 justify-items-center">
            <img 
            className="h-9 "
            alt="user" 
            src="https://imgs.search.brave.com/dOKW9m1byb09eqHnJKr0hpAvCWILxG3qn8aGzQtP7dU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMTUwOC9Q/TkcvOTYvc3lzdGVt/dXNlcnNfMTA0NTY5/LnBuZw"/>
        </div>
    </div>
    )
}

export default Head