import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import jimLabsLogo from '../../images/jimlabs.png';
import saladPic from '../../images/salad-it-has-to-be-salad.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CafeSidebar = () => {
  return (
    <div className="hidden md:block h-full mt-14 w-1/4 bg-purple-100 text-black">
      <div className="flex items-center mx-8 px-8 mt-10">
        <img
          className="my-3 ml-4 mb-4 rounded-full object-cover w-32 h-32"
          src={saladPic}
          alt=""
        />
      </div>

      <h2 className="text-lg mx-4 px-8 font-bold text-black">
        Rockford International Café
      </h2>

      <section className="mx-8 px-8 space-y-4">
        <div className="border-t border-purple-900 my-4"></div>
        <div className="text-xs tracking-wider hover:text-green-400 font-semibold">JDMays@gmail.com</div>

        <div className="border-t border-purple-900 my-4"></div>

        <ul className="flex flex-row space-x-4 py-4 pt-8">
          <li className="group relative text-gray-600">
            <a href="mailto:jdmays@gmail.com" aria-label="jdmays@gmail.com" className="flex items-center w-8 h-8">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="w-full h-full"/>
            </a>
            <span
                className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            jdmays@gmail.com
        </span>
          </li>
          <li className="group relative text-gray-600 flex items-center w-8 h-8">
            <FontAwesomeIcon icon={faReact} size="2x" className="w-full h-full"/>
            <span
                className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            Written with React
        </span>
          </li>
          <li className="group relative text-gray-600 flex items-center w-8 h-8">
            <img
                src={jimLabsLogo}
                className="object-cover w-full h-full font-bold"
                alt="JimLabs"
            />
            <span
                className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            JimLabs
        </span>
          </li>
        </ul>

      </section>
    </div>
  );
};

export default CafeSidebar;
