'use client'
import React, { useEffect, useState } from 'react'

interface ItemType{
  name:string,
  category:string
}

function FilterComponent() {
    const itemsPerPage = 5; // Number of items per "page"
    const [searchQuery, setSearchQuery] = useState()
    const [filterState, setFilterState] = useState<any>([])
    const items:ItemType[] = [
        { name: "Mumbai", category: "City" },
        { name: "Taj Mahal", category: "Monument" },
        { name: "Chennai", category: "City" },
        { name: "Rajasthan", category: "State" },
        { name: "Delhi", category: "City" },
        { name: "Agra", category: "City" },
        { name: "Mysore", category: "City" },
        { name: "Kerala", category: "State" },
        { name: "Hampi", category: "Historical Site" },
        { name: "Bangalore", category: "City" },
        { name: "Goa", category: "State" },
        { name: "Kolkata", category: "City" },
        { name: "Qutub Minar", category: "Monument" },
        { name: "Manali", category: "Hill Station" },
        { name: "Shimla", category: "Hill Station" },
        { name: "Jaipur", category: "City" },
        { name: "Jaisalmer", category: "City" },
        { name: "Ajanta Caves", category: "Historical Site" },
        { name: "Amritsar", category: "City" },
        { name: "Hyderabad", category: "City" },
        { name: "Charminar", category: "Monument" },
        { name: "Lucknow", category: "City" },
        { name: "Pune", category: "City" },
        { name: "Udaipur", category: "City" },
        { name: "Ooty", category: "Hill Station" },
        { name: "Darjeeling", category: "Hill Station" },
        { name: "Varanasi", category: "City" },
        { name: "Rishikesh", category: "City" },
        { name: "Leh", category: "City" },
        { name: "Andaman Islands", category: "Island" },
        { name: "Munnar", category: "Hill Station" },
        { name: "Ellora Caves", category: "Historical Site" },
        { name: "Meenakshi Temple", category: "Temple" },
        { name: "Chandigarh", category: "City" },
        { name: "Ranthambore", category: "National Park" },
        { name: "Kaziranga", category: "National Park" },
        { name: "Bandipur", category: "National Park" },
        { name: "Sundarbans", category: "National Park" }
    ];

useEffect(() => {
 if (searchQuery) {
    const filteredItem=items.filter(x=>x.name.includes(searchQuery))
    setFilterState(filteredItem)
 }else{
    setFilterState(items)
 }
    
}, [searchQuery])



  return (
    <div>
      <p className='text-white mt-1 mb-6'>Filter by state</p>
        <input type="text" onChange={(e:any)=>setSearchQuery(e.target.value)} value={searchQuery}
         className='p-3 w-full border-r-2 border-blue-300 rounded-md bg-gray-600 text-gray-300'/>
        <ul className='mt-5'>
        {filterState.map((item:ItemType, index:number) => (
          <li key={index} className='text-white'>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default FilterComponent