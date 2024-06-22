import laptop from '../images/home_laptop.jpg';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    return (
      <div className="h-full mt-14 w-2/5 bg-purple-100 text-black">
        <div className="flex items-center mx-8 px-8">
          <img
            className="my-6 rounded-full object-cover hidden sm:block w-32 h-32 sm:w-16 sm:h-16 md:w-32 md:h-32 lg:w-32 lg:h-32"
            src={laptop}
            alt={""}
          />
        </div>

        <h3 className="text-2xl mx-8 px-8 font-bold text-black">Jim Mays</h3>

        <section className="mx-8 px-8 space-y-4">

          <div className="text-lg tracking-wider">JDMays@gmail.com</div>

          <div className="border-t border-purple-900 my-4"></div>

          <h4 className="text-xl font-bold">About Me</h4>
            <p className="text-black">I'm Jim Mays.</p>
            <p className={"text-block"}>
              I'm a web application developer that really enjoys Making The Magic.
              I've been developing web applications since the days of Perl CGI
              scripts and I've worked with a variety of technologies over the
              years, but I'm always looking for new challenges.
            </p>

            <p className={"text-block"}>
              This site is a little different than just my resume. After all, why
              would you need to visit if there wasn't something different. I think
              of this as my amplified resume. It's a little more information than
              what you might get off a job application or pdf. I hope you enjoy
              it.
            </p>

            <p className={"text-block py-4"}>
              This site is written in React.
            </p>

            <ul className={"flex space-x-4 py-2"}>
              <li className={"text-gray-600"}>
                <a href="https://www.linkedin.com/in/jdmays/" aria-label={"LinkedIn"}>
                  <FontAwesomeIcon icon={faLinkedin} size={"2x"}/>
                </a>
              </li>
              <li className={"text-gray-600"}>
                <a href="https://github.com/jdmays" aria-label={"Github/jdmays"}>
                  <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                </a>
              </li>
              <li className={"text-gray-600"}>
                <a href="mailto:jdmays@gmail.com" aria-label={"jdmays@gmail.com"}>
                  <FontAwesomeIcon icon={faEnvelope} size={"2x"}/>
                </a>
              </li>
            </ul>

          <div className="border-t border-purple-900 my-4"></div>

        </section>
      </div>
    );
}

export default Sidebar;