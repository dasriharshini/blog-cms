import React from 'react'
import { Lilita_One } from 'next/font/google'
import Link from 'next/link'

const lilita_one = Lilita_One({
    weight:"400",
    subsets:['latin']
})

const CmsNavbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
  <div className="flex justify-between items-center h-16">
    <Link href="/">
      <div className={`${lilita_one.className} text-3xl ` }>DevPost</div>
    </Link>
  </div>
  </div>
  )
}

export default CmsNavbar
