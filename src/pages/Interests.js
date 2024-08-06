import React from 'react';
import dogsChicken from '../images/dogs_with_chickens_july_2024_sm.jpg';
import chickenPalace from '../images/chicken_palace_aug_2023_sm.jpg';
import dogsGsd from '../images/greta_petra_chicken_sm.jpg';

const Interests = () => {
  return (
    <div className="bg-purple-100 text-gray-800 min-h-screen">
      <div className="container mx-auto py-10 px-1">
        <h1 className="text-3xl font-bold mb-5">Interests</h1>
        <div className="border-t border-purple-900 my-4"></div>

        <p className="text-block text-left my-4">
          I live near Roscoe, IL with my wife and our two German Shepherd dogs.
          We spend a lot of time outdoors hiking, kayaking, and traveling
          whenever possible.
        </p>

        <p className="text-block text-left my-4">
          I’m often in the middle of a construction project of one kind or
          another at our house. In the past year or so I’ve built a chicken
          coop, a bridge over a creek on our property, a new dog house, and
          cleared a lot of invasive trees.
        </p>

        <div className="bg-purple-100 max-w-sm w-3/4 lg:max-w-full lg:flex shadow-md">
          <img
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              src={chickenPalace}
              title="Chicken Palace"
              alt="Chicken Palace"
          ></img>

          <div
              className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-purple-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center"></p>
              <p className="text-gray-700 text-base bg-purple-100 py-4">
                I call the chicken coop the Chicken Palace due to the fact that
                the chickens have heat, special lights, and ventilation. Those
                chickens sure have it good.
              </p>
              <p className="text-gray-700 text-base bg-purple-100">
                Now if they will only lay some eggs.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 max-w-sm w-3/4 lg:max-w-full lg:flex shadow-md my-4">
          <img
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              src={dogsGsd}
              title="German Super Dogs"
              alt="German Shepherds"
          >
          </img>
          <div
              className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-purple-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-gray-700 text-base bg-purple-100 py-4">
                Whatever you do, don’t ask me about dogs and definitely don’t
                ask about German Shepherd dogs, unless you want to get into a
                lengthy conversation about working line versus show line
                shepherds or the differences between shepherding styles of
                Border Collies and German Shepherd dogs. Yes, we are “Dog
                People” but hopefully not like those other crazy dog people you
                might see on the internet.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 max-w-sm w-3/4 lg:max-w-full lg:flex shadow-md my-4">
          <img
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              src={dogsChicken}
              title="Dogs with Chickens"
              alt="Dogs with Chickens"
          >
          </img>
          <div
              className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-purple-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-gray-700 text-base bg-purple-100 py-4">
                We have to remind our dogs that the chickens are our friends, just like the cat.
              </p>
            </div>
          </div>
        </div>

        <div className="clear-left border-t border-purple-900 my-4"></div>
      </div>
    </div>
  );
};

export default Interests;
