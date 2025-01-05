export default function Navbar() {
    return (
      <nav className="grid grid-cols-3 items-center px-6 py-4 bg-white md:px-8">
 
        <div className="hidden md:flex items-center space-x-6 md:space-x-8">
          <div className="text-sm font-medium tracking-wide hover:text-red-500 transition-colors cursor-pointer">
            DEMO
          </div>
          <div className="text-sm font-medium tracking-wide hover:text-red-500 transition-colors cursor-pointer">
            BLOG
          </div>
          <div className="text-sm font-medium tracking-wide hover:text-red-500 transition-colors cursor-pointer">
            SHOP
          </div>
          <div className="text-sm font-medium tracking-wide hover:text-red-500 transition-colors cursor-pointer">
            FEATURES
          </div>
          <div className="text-sm font-medium tracking-wide hover:text-red-500 transition-colors cursor-pointer">
            DOCUMENT
          </div>
        </div>
  
        <div className="text-2xl font-bold flex justify-center items-center">
          <span className="text-red-500">JD</span>
          <span className="text-xs ml-2 text-gray-600">BOOKS</span>
        </div>
  
       
        <div className="hidden md:flex justify-end items-center">
          <div className="bg-black text-white px-6 py-3 text-sm font-medium tracking-wide cursor-pointer hover:bg-gray-800 transition-colors">
            PURCHASE AUTHORE
          </div>
        </div>
      </nav>
    );
  }
  