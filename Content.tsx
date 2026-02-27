import { FiArrowUpRight } from "react-icons/fi";
function Content() {
    return (
        <div className="max-w-4xl mx-auto pt-6 text-center px-2">
            <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-50 
                 sm:text-4xl md:text-5xl lg:text-6xl 
                 font-montserrat leading-tight">
                Exploring web development,
                <span className="animate-text-gradient inline-flex 
                     bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 
                     bg-[200%_auto] bg-clip-text text-transparent 
                     dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 
                     font-montserrat">
                    innovative AI solutions
                </span>
            </h2>

            <p className="max-w-3xl mx-auto mt-5 
                text-sm sm:text-base md:text-lg 
                leading-relaxed 
                text-gray-600 dark:text-gray-200">
                M. Tayyab Sandhu — Freelance developer collaborating with remote and onsite teams,
                currently advancing my
                <span className="opacity-70"> software engineering</span> journey at UCP.
            </p>

            <a
                href="https://www.linkedin.com/in/m-tayaib/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2
             px-6 py-3
             text-sm sm:text-base font-medium
             text-white
             border border-white
             rounded-lg
             transition-all duration-300 ease-in-out
             hover:bg-white hover:text-black font-montserrat md:mt-6 mt-8"
            >
                Let’s Connect
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
        </div>
    )
}

export default Content

