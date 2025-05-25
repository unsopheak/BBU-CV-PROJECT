'úse client'
import React from 'react'
import Header from "../../components/Header";
import Cards from '../../components/Cards'

const page = () => {
  return (
   <>
          <div className="bg-gray-50 flex flex-col min-h-screen">
            <Header/>
            {/* Main Content  */}
            <main className="container p-6 mx-auto" style={{flex:"1"}}>
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold mb-8">Good Morning, Data Team!</h1>
                    <div className="max-w-xl mx-4 w-96">
                        <div className="relative">
                            <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-4 py-2  border-gray-300 border rounded-md"
                            />
                            <button
                                    className="absolute right-0 top-0 h-full px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-r-md"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z"
                                        stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
                    <Cards/>
                </div>
                <div className="mt-10 mb-5 flex justify-end gap-2">
                    <button type="button" name="previous" className="previous cursor-pointer rounded border border-gray-300 px-6 py-2 text-black">Previous</button>
                    <button type="button" name="next" className="next cursor-pointer rounded bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-700">Next</button>
                </div>
                
               
            </main>
            
        </div>

   
   
   </>
  )
}

export default page
