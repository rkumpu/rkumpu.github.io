import { lazy } from "react"

const Navbar = lazy(() => import("../components/Navbar"));
const About = lazy(() => import("../components/About"));
// const Projects = lazy(() => import("../components/Projects"));
const Skills = lazy(() => import("../components/Skills"));
const Testimonials = lazy(() => import("../components/Testimonials"));
// const Language = lazy(() => import("../components/Language"));

export default function Home() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            {/*<Projects />*/}
            <Skills />
            <Testimonials />
            <br className="mt-36" />
        </main>
    )
}
