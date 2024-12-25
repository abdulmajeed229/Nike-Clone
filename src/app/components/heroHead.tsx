
export default function NikeShowcase() {


  return (
    <div className="w-full  mx-auto p-4">
     
      <div className="text-center py-12 space-y-4">
        <p className="text-sm uppercase tracking-wide">First Look</p>
        <h1 className="text-4xl font-bold tracking-tight">NIKE AIR MAX PULSE</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse designed to push you past your limits and help you to the finish.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Notify Me
          </button>
          <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
            Shop Air Max
          </button>
        </div>
      </div> 

     
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Best Of Air Max</h2>
          <button className="text-sm hover:underline">Shop</button>
        </div>
  
    </div>
  )
}

