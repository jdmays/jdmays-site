import React from 'react'

const Home = () => {
  return (
    <div className="bg-purple-100 text-gray-800 min-h-screen">
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold mb-5">About Me (The TLDR Version)</h1>
        <div className="border-t border-purple-900 my-4"></div>
        <div>
          <p className={"block sm:hidden text-block"}>My name is Jim Mays.</p>

          <p className={"block sm:hidden text-block"}>
            I'm a web application developer that really enjoys Making The Magic.
            I've been developing web applications since the days of Perl CGI
            scripts and I've worked with a variety of technologies over the
            years, but I'm always looking for new challenges.
          </p>

          <p className="text-md text-gray-600 my-2">
            If you take a good look at my experience and eduction, you'll notice
            there are two careers buried in there. For the first twenty years or
            so I was a Mental Health Counselor and then a healthcare executive.
            I was always interested in Information Technology and during that
            time I was also writing programs and scripts to make my job easier.
          </p>
          <p className="text-md text-gray-600 my-2">
            One of the threads that ties it all together is; I'm a creative
            problem-solver, I love to build things and I absolutely love it when
            a plan comes together.
          </p>

          <p className="text-md text-gray-600 my-2">
            Switching careers takes a lot of work. In order to do it
            successfully you have to be willing to learn. You have to be willing
            to listen and you have to like taking on new challenges.
          </p>
          <div className="border-t border-purple-900 my-4"></div>
          <div>
            <p className="text-md text-gray-600 my-2">
              My Experience includes:
              <ul className="text-left list-disc list-inside">
                <li>
                  Extensive travel to meet with clients and develop a set of requirements tailored to their needs.
                </li>
                <li>
                  Supervision of developers as they put the requirements into code.
                </li>
                <li>
                  Implementing new software at client organizations, including managing the staff and personalities
                  unique to each organization.
                </li>
                <li>
                  Transforming legacy data into new software applications through stored procedures and custom scripts.
                </li>
                <li>
                  Being a Product Owner/Product Manager working with a team to ensure consistent look and feel and
                  implementing new features.
                </li>
                <li>
                  Fielding calls from both new and prospective customers in regard to feature requests and
                  implementation timelines.
                </li>
                <li>
                  Developing a commercial product from scratch for a successful startup.
                </li>
                <li>
                  Developing a medication administration record and integrated it with a medication API.
                </li>
                <li>
                  Providing extensive technical support to customers.
                </li>
                <li>
                  Managing large projects with numerous stakeholders, complex requirements, and multiple developers.
                </li>
              </ul>
            </p>
            <p className="text-block text-left my-4">
              I started with a career in Mental Health Counseling with a graduate degree in Counseling Psychology.
              Information Technology is a second career; but it’s a career field that I’ve worked in for the last 15
              years.
            </p>
            <p className="text-block text-left my-4">
              It wouldn’t seem like my earlier career in Psychology would have much in common with technology and
              programming. The connection is that I like to solve problems and I like to do it in a methodical and
              systematic way. To put it another way, I love it when a plan comes together.
            </p>
            <p className="text-block text-left my-4">
              I do not have any degrees in Computer Science or a related field. But what I do have is an understanding
              of how to write clean code, the ability to listen to what the customer wants, and a willingness to learn
              and adapt to whatever challenges arise.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
