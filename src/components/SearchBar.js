import React, {useState} from 'react'

import SearchIcon from 'assets/images/search-icon.svg'

export default function SearchBar(props) {
    const [show, setShow] = useState(true);
    const imageClass = ["absolute", "mr-24"];
    if(!show){
        imageClass.push("hidden");
    }
    return (
        <label className="flex items-center justify-center relative">
            <img 
                className={imageClass.join(" ")} 
                src={SearchIcon} 
                alt="search icon"></img>
            <input 
                className="py-2 px-3 w-full text-center bg-gray-light text-light placeholder-light rounded-lg" 
                placeholder="Search"
                onFocus={() => {setShow(false)}}
                onBlur={() => {setShow(true)}}>
            </input>
        </label>
    )
}


