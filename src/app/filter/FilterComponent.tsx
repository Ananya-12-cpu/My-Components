'use client'
import React, { useEffect, useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

interface ItemType {
  name: string,
  category: string
}

function FilterComponent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filterState, setFilterState] = useState<ItemType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const items: ItemType[] = [
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

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))]

  useEffect(() => {
    setIsLoading(true)
    // Simulate loading for better UX
    setTimeout(() => {
      let filteredItems = items

      // Apply search filter
      if (searchQuery) {
        filteredItems = filteredItems.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }

      // Apply category filter
      if (selectedCategory !== 'all') {
        filteredItems = filteredItems.filter(item =>
          item.category === selectedCategory
        )
      }

      setFilterState(filteredItems)
      setIsLoading(false)
    }, 300)
  }, [searchQuery, selectedCategory])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-8">Explore Destinations</h1>
      
      {/* Search and Filter Section */}
      <div className="space-y-4 mb-8">
        {/* Search Input */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search destinations..."
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <FiX size={20} />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          // Loading skeleton
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-700 rounded-lg p-4 h-24"
            />
          ))
        ) : filterState.length > 0 ? (
          filterState.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-all cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <span className="text-sm text-gray-400">{item.category}</span>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-400">No destinations found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterComponent