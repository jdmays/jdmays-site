import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import jimLabsLogo from "../../images/jimlabs.png";
import saladPic from "../../images/salad-it-has-to-be-salad.jpg";

const Cafe = () => {
  return (
    <div className="bg-purple-100 text-gray-800 min-h-screen">
        <div className="container mx-auto py-2 sm:py-6 md:py-8 lg:py-10 px-4">
        <div className="block sm:hidden mx-8 px-8">
          <img
              className="ml-4 mb-4 rounded-full object-cover w-32 h-32"
              src={saladPic}
              alt=""
          />
        </div>

        <h2 className="block sm:hidden text-2xl font-bold text-black pb-3">
          Rockford International Café
        </h2>

        <h4 className="text-3xl font-bold mb-5 pt-2">About The Café</h4>
        <div className="border-t border-purple-900 my-4"></div>
            <div className="bg-purple-100">
                <p className={"text-block my-4 py-2"}>
                    Every two weeks during the academic year, we provide dinner and an activity for international
                    students from Rockford University. It is an opportunity to meet other international students as well as with American hosts.
                </p>

                <p className={"text-block my-4 py-2"}>
                    There is no cost and no obligation to do anything except eat and enjoy a nice break from school for
                    a few hours.
                </p>

                <p className={"text-block my-4 py-2"}>
                    International Café is not connected with Rockford University except that we are also volunteers with
                    the <a className="text-purple-800 pl-1 hover:text-orange-400" href="https://www.rockford.edu/community/globalaffairs/">Rockford
                    University Community Friends Program through the Office of Global Affairs.</a>
                </p>


                <p className={"text-block my-4 py-2"}>
                    We enjoy meeting international students and learning more about their cultures. Join us!
                </p>

                <div className="border-t border-purple-900 my-4"></div>

                <div className={"block md:hidden"}>
                    <ul className="flex flex-row space-x-4 py-2 pt-8">
                        <li className="group relative flex text-gray-600">
                            <a href="mailto:jdmays@gmail.com" aria-label="jdmays@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                            </a>
                            <span
                                className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                jdmays@gmail.com
            </span>
                        </li>
                        <li className="group relative text-gray-600 flex items-center">
                            <FontAwesomeIcon icon={faReact} size="2x"/>
                            <span
                                className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                Written with React
            </span>
                        </li>
                        <li className="group relative text-gray-600 flex items-center w-8 h-8">
                            <img
                                src={jimLabsLogo}
                                className="object-cover w-full h-full"
                                alt="JimLabs"
                            />
                            <span
                                className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            JimLabs
        </span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  );
};
export default Cafe;
