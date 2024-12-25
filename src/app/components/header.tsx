'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex flex-col w-full text-black ">
     
    

     
      <nav className="bg-white px-4 py-4 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
        
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.webp" alt="Nike Logo" width={60} height={20} className="h-6 w-auto" />
            </Link>
          </div>

       
          <div className="hidden md:flex items-center space-x-6">
          <Link href="/snkrs" className="text-sm font-medium hover:text-gray-600">New</Link>
            <Link href="/new" className="text-sm font-medium hover:text-gray-600">Men</Link>
            <Link href="/women" className="text-sm font-medium hover:text-gray-600">Women</Link>
            <Link href="/kids" className="text-sm font-medium hover:text-gray-600">Kids</Link>
            <Link href="/sale" className="text-sm font-medium hover:text-gray-600">Jodan</Link>
            <Link href="/snkrs" className="text-sm font-medium hover:text-gray-600"></Link>
          </div>

       
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <div className="flex items-center bg-gray-100 rounded-full">
                <Search className="h-5 w-5 ml-4 text-black" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-gray-100 rounded-full py-2 pl-2 pr-4 text-sm focus:outline-none w-60"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="px-4 space-y-4">
              <div className="relative mb-4">
                <div className="flex items-center bg-gray-100 rounded-full">
                  <Search className="h-5 w-5 ml-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="bg-gray-100 rounded-full py-2 pl-2 pr-4 text-sm focus:outline-none w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>


              <Link href="/new" className="block text-lg font-medium">New</Link>
              <Link href="/men" className="block text-lg font-medium">Men</Link>
              <Link href="/women" className="block text-lg font-medium">Women</Link>
              <Link href="/kids" className="block text-lg font-medium">Kids</Link>
              <Link href="/sale" className="block text-lg font-medium">Jordan</Link>
              
              <div className="pt-4 border-t border-gray-200">


                <Link href="/stores" className="block text-sm py-2">Find a Store</Link>
                <Link href="/help" className="block text-sm py-2">Help</Link>
                <Link href="/join" className="block text-sm py-2">Join Us</Link>
                <Link href="/signin" className="block text-sm py-2">Sign In</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      
      
    </div>
  )
}

