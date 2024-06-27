import React from 'react'
import dogsChicken from '/greta_petra_chicken_sm.jpg';

const Interests = () => {
    return (
      <div className="bg-purple-100 text-gray-800 min-h-screen">
        <div className="container mx-auto py-10 px-1">
          <h1 className="text-3xl font-bold mb-5">Interests</h1>
          <div className="border-t border-purple-900 my-4"></div>

          <p className="text-block text-left my-4">
            I live near Roscoe, IL with my wife and our two German Shepherd dogs. We spend a lot of time outdoors
            hiking, kayaking, and traveling whenever possible.
          </p>
          <p className="text-block text-left my-4">
            I’m often in the middle of a construction project of one kind or another at our house. In the past year or
            so I’ve built a chicken coop, a bridge over a creek on our property, a new dog house, and cleared a lot of
            invasive trees.
          </p>
          <p className="text-block text-left my-4">
            I call the chicken coop the Chicken Palace due to the fact that the chickens have heat, special lights, and
            ventilation. Those chickens sure have it good. Now if they will only lay some eggs.
          </p>
          <p className="text-block text-left my-4">
            Whatever you do, don’t ask me about dogs and definitely don’t ask about German Shepherd dogs, unless you
            want to get into a lengthy conversation about working line versus show line shepherds or the differences
            between shepherding styles of Border Collies and Germans Shepherd dogs. Yes, we are “Dog People” but
            hopefully not like those other crazy dog people you might see on the internet.
          </p>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                className="h-auto max-w-full rounded-lg border bg-purple-900 p-1 my-4"
                src={dogsChicken}
                alt="Greta has the chicken"
            />
          </div>

          <div className="border-t border-purple-900 my-4"></div>
        </div>
      </div>
    );
}
export default Interests
