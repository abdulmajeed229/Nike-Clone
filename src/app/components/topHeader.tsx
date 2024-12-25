import Link from "next/link";

export default function TopHeader() {
    return (
         <div className="bg-gray-100 px-4 py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-4">
          <Link href="/stores" className="hover:text-gray-600">Find a Store</Link>
          <span>|</span>
          <Link href="/help" className="hover:text-gray-600">Help</Link>
          <span>|</span>
          <Link href="/join" className="hover:text-gray-600">Join Us</Link>
          <span>|</span>
          <Link href="/login" className="hover:text-gray-600">Sign In</Link>
        </div>
      </div> 
    );
}