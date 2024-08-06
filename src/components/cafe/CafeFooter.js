import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";

const CafeFooter = () => {
    return (
        <div>
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
            </ul>
        </div>
    )
}
export default CafeFooter
