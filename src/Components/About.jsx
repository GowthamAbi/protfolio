function About() {
    return (
        <div className="relative">
            <div className="flex">
                {/* Left Panel */}
                <div className="bg-[#fae5d3] w-1/4 h-[150px]"></div>

                {/* Right Panel */}
                <div className="bg-white w-full m-10 ml-10 p-5">
                    <h1 className="text-2xl font-bold">HI</h1>
                    <h3 className="text-lg text-gray-700">Here's who I am & what I do</h3>
                    <div className="mt-4">
                        <button className="bg-blue-500 text-white px-8 py-2 rounded-3xl mr-4 
                                           hover:bg-white hover:text-black hover:border-2 hover:border-blue-500 
                                           transition duration-300">
                            RESUME
                        </button>
                        <button className="text-black border px-8 py-2 rounded-3xl 
                                           hover:bg-green-500 hover:text-white hover:border-green-500 
                                           transition duration-300">
                            PROJECTS
                        </button>
                    </div>
                    <p className="mt-3 text-gray-600">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
                        Just click “Edit Text” or double-click me to add your own content and make changes to the font.
                    </p>
                    <p className="mt-2 text-gray-600">
                        I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>
            </div>

            {/* Profile Card */}
            <div className="absolute top-10 left-40 lg:left-20 bg-[#fae3d1] w-[200px] h-[250px] 
                            shadow-lg rounded-lg text-center p-4">
                <img src="/profile/Profile.jpg" alt="Gowtham's Profile" 
                     className="w-24 h-24 mx-auto rounded-full" />
                <h1 className="text-xl font-bold mt-2">Gowtham</h1>
                <h2 className="text-gray-700">Software Developer</h2>
                
                {/* Social Media Icons */}
                <div className="flex justify-center gap-3 mt-6 bg-white p-2 w-full rounded-lg">
                    <img src="/icons/gmail.png" alt="Mail" className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                    <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                    <img src="/icons/social.png" alt="Social" className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                    <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                </div>
            </div>

            {/* Additional Sections */}
            <div className="bg-[#fae5d3] w-2/4 h-[180px]"></div>
            <div className="bg-white w-full h-[160px]"></div>
        </div>
    );
}

export default About;
