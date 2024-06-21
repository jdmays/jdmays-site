import laptop from '../images/home_laptop.jpg';

const Sidebar = () => {
    return (
        <div className="h-full mt-14 w-2/5 bg-purple-100 text-black">

            <div className="flex items-center mx-8 px-8">
                <img className="my-6 rounded-full w-32 h-32 object-cover" src={laptop}
                     alt="Future Profile Image"/>
            </div>
            <h3 className="text-2xl mx-8 px-8 font-bold text-black">Jim Mays</h3>
            <section className="mx-8 px-8 space-y-4">
                <div className="text-lg tracking-wider">JDMays@gmail.com</div>
                <div className="border-t border-purple-900 my-4"></div>
                <h4 className="text-xl font-bold">About Me</h4>
                <p className="text-black">
                    I'm Jim Mays.
                </p>
                <p className={"text-block"}>
                    I'm a web application developer that really enjoys Making The Magic.
                    I've been developing web applications since the days of Perl CGI scripts and
                    I've worked with a variety of technologies over the years, but I'm always looking for new challenges.
                </p>

                <p className={"text-block"}>
                    This site is a little different than just my resume.  After all, why would you need to visit if there
                    wasn't something different.  I think of this as my amplified resume.  It's a little more information than
                    what you might get off a job application or pdf. I hope you enjoy it.
                </p>

                <p className={"text-block"}>
                    For those that pay attention to such things, this site is written in React and you can look at my, hopefully, good
                    code at: https://github.com/jdmays  (In the days ahead I will put add several different examples of my work.)
                </p>

                <p className={"text-block"}>

                </p>

                <p className={"text-block"}>

                </p>

                <p className={"text-block"}>

                </p>


                <div className="border-t border-purple-900 my-4"></div>
            </section>
        </div>
    );
}

export default Sidebar;
