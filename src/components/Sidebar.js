
const Sidebar = () => {
    return (
        <div className="h-full mt-14 w-2/5 bg-purple-100 text-black">

            <div className="flex items-center mx-8 px-8">
                <img className="my-6 rounded-full w-32 h-32 object-cover" src="https://picsum.photos/256/256"
                     alt="Profile Image"/>
            </div>
            <h3 className="text-2xl mx-8 px-8 font-bold text-black">Jim Mays</h3>
            <section className="mx-8 px-8 space-y-4">
                <div className="text-lg tracking-wider">JDMays@gmail.com</div>
                <div className="border-t border-purple-900 my-4"></div>
                <h4 className="text-xl font-bold">About Me</h4>
                <div className="text-black">
                    Hi, I'm Jim Mays, otherwise known as James Mays. I'm a web application developer who loves to Make
                    the Magic.
                    When I started web development I was using Perl to do CGI Scripts. Things have changed quite a bit
                    since
                    then, but I've continued to learn and adapt to new technology. I'm always looking for new challenges
                    because
                    I absolutely love Making the Magic.
                </div>
                <div className="border-t border-purple-900 my-4"></div>
            </section>
        </div>
    );
}

export default Sidebar;
