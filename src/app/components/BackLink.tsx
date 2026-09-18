'use client'

import Link from 'next/link'
import { TbArrowLeft } from 'react-icons/tb'

const BackLink = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-6"
    >
      <TbArrowLeft size={16} />
      Back to Home
    </Link>
  )
}

export default BackLink
