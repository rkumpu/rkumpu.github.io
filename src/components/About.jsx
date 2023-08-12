export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 pt-10 pb-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, I&apos;m Roni.
                        {/*
                        <br className="hidden lg:inline-block" />
                        I love to build amazing apps.
                        */}
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a freelancing web developer with expertise in front-end programming.
                        I learned web development at age 12 along with various other programming languages. Programming is what I&apos;m most interested in, and I love creating web apps that stand out.
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a href="https://twitter.com/rkumpu_" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt=".svg file"
                        src="./src/assets/coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}
