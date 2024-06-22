import React from 'react'



const Interests = () => {
    return (
      <div className="bg-purple-100 text-gray-800 min-h-screen">
        <div className="container mx-auto py-10 px-1">
          <h1 className="text-3xl font-bold mb-5">Interests</h1>
          <div className="border-t border-purple-900 my-4"></div>
          <p className="text-md text-gray-600 my-2">
            Hey, I'm still working on this one. But be prepared to see a lot
            about German Shepherd Dogs.
          </p>


          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="{gretaTilt}"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>

          <div className="border-t border-purple-900 my-4"></div>
        </div>
      </div>
    );
}
export default Interests
