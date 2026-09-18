import React from 'react'

import FilterComponent from './FilterComponent'
import BackLink from '../components/BackLink'

function FilterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <BackLink />
        <FilterComponent />
      </div>
    </div>
  )
}

export default FilterPage