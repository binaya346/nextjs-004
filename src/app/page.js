import Headers from "@/components/layouts/headers";
import { NavigationMenuDemo } from "@/components/partials/navigation-menu.jsx"


export default function Home() {
  return (
    <>
      <header className="w-full bg-white px-6 sticky top-0 z-10 lg:hidden">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 text-3xl font-semibold">
            <span className="font-extrabold text-white h-10 w-10 bg-black flex items-center justify-center rounded-lg">A</span>
            <div>AntByte labs</div>
          </div>
          <div className="hamburger">
            <img src="/images/hamburger-menu.png" alt="hamburger menu" className="h-auto w-10" />
          </div>
        </nav>
      </header>

      {/* <!-- Desktop Navigation --> */}
      <header className="hidden lg:block w-full bg-white px-20 sticky top-0 z-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 text-3xl font-semibold">
            <span className="font-extrabold text-white h-10 w-10 bg-black flex items-center justify-center rounded-lg">A</span>
            <div>AntByte labs</div>
          </div>

          <nav>
            <ul className="flex gap-5">
              <li>
                <a href="#" className="text-base py-2 relative group">
                  Services
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                  <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-base py-2 relative group">
                  Products
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                  <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-base py-2 relative group">
                  Projects
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                  <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-base py-2 relative group">
                  About
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                  <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-base py-2 relative group">
                  Contact
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                  <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <button className="px-8 py-4 rounded-lg text-lg bg-brand-dark text-white border border-brand-dark capitalize">Get Started</button>
          </div>
        </div>
      </header>

      <main className="px-6 py-10 lg:px-20">
        {/* <!-- Hero Section --> */}
        <section className="mb-10 pt-5 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 text-sm mb-2 capitalize text-brand-gray">
              <span className="h-2 w-2 bg-brand-green rounded-full animate-flicker"></span>
              Top tech company in nepal
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Leading IT Solutions & Software Development in Nepal
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
              Antbyte Labs is Nepal's trusted IT company delivering custom software solutions, cloud services, and
              digital transformation. Serving 150+ clients across 25+ countries with 8+ years of expertise.
            </p>
            <div className="flex flex-col gap-4 pb-12 border-b border-gray-300 lg:flex-row lg:pb-12">
              <button className="w-full text-center px-8 py-4 rounded-lg text-lg bg-brand-dark text-white border border-brand-dark capitalize">
                Start your software project
              </button>
              <button className="w-full text-center px-8 py-4 rounded-lg text-lg bg-white text-brand-dark border border-brand-dark capitalize">
                View our IT solutions
              </button>
            </div>

            <div className="flex gap-5 pt-6">
              <div className="flex flex-col gap-1">
                <div className="text-3xl lg:text-4xl font-bold">150+</div>
                <div className="text-sm text-brand-gray">Projects Delivered</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-3xl lg:text-4xl font-bold">8+</div>
                <div className="text-sm text-brand-gray">Years of experience</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-3xl lg:text-4xl font-bold">ISO</div>
                <div className="text-sm text-brand-gray">Certified Company</div>
              </div>
            </div>
          </div>

          <div className="my-5 flex flex-col gap-5 lg:w-1/2 lg:border lg:border-gray-300 lg:rounded-2xl lg:h-[60vh] lg:relative">
            <div className="p-4 rounded-2xl border border-gray-300 inline-flex gap-2 items-center bg-white lg:absolute lg:-bottom-5 lg:-right-5">
              <div className="flex items-center text-white h-10 min-w-8 rounded-lg bg-blue-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <b className="text-sm">Lightning Fast</b>
                <p className="text-xs text-brand-gray">Optimized performance</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-gray-300 inline-flex gap-2 items-center bg-white lg:absolute lg:-top-5 lg:-left-5">
              <div className="flex items-center text-white h-10 min-w-8 rounded-lg bg-green-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <b className="text-sm">Cloud Native</b>
                <p className="text-xs text-brand-gray">Scalable solutions</p>
              </div>
            </div>

            <div className="hidden lg:block absolute w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg className="w-full h-auto mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                </path>
              </svg>
            </div>

            <button className="w-full text-center px-8 py-4 rounded-full text-sm bg-brand-dark text-white border border-brand-dark capitalize lg:absolute lg:top-10 lg:right-10 lg:w-auto">
              Enterprise Grade
            </button>
          </div>
        </section>

        {/* <!-- Services Section --> */}
        <section className="mb-10 pt-5 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-sm mb-2 capitalize text-brand-gray">
            Our services
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Professional IT Services & Software Solutions in Nepal
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
            Comprehensive technology solutions from Antbyte Labs - Nepal's top IT company serving businesses in
            Kathmandu, across Nepal, and worldwide
          </p>

          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap">
            {/* <!-- Service Card 1 --> */}
            <div className="bg-gray-100 p-5 rounded-2xl flex flex-col gap-2 text-left border border-gray-300 transition-transform duration-500 hover:-translate-y-1 md:flex-[0_0_calc(50%-12px)] lg:order-4 lg:flex-[0_0_30%]">
              <div className="h-12 w-12 flex items-center justify-center bg-white rounded-lg border border-gray-300 transition-transform duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900">
                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                  <line x1="8" x2="16" y1="21" y2="21"></line>
                  <line x1="12" x2="12" y1="17" y2="21"></line>
                </svg>
              </div>

              <h3 className="text-lg font-semibold">Web Development</h3>

              <p className="text-sm leading-relaxed text-brand-gray">
                Transform your vision into reality with custom web applications built using cutting-edge
                frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team creates
                scalable, high-performance solutions that drive business growth for Nepal businesses and deliver
                exceptional user experiences across all devices.
              </p>

              <ul className="ml-4 flex flex-col gap-1 list-disc">
                <li className="text-xs text-brand-gray">Responsive Design</li>
                <li className="text-xs text-brand-gray">SEO Optimized</li>
                <li className="text-xs text-brand-gray">Performance First</li>
              </ul>
            </div>

            {/* <!-- Service Card 2 --> */}
            <div className="bg-gray-100 p-5 rounded-2xl flex flex-col gap-2 text-left border border-gray-300 transition-transform duration-500 hover:-translate-y-1 md:flex-[0_0_calc(50%-12px)] lg:order-3 lg:flex-[0_0_calc(70%-24px)]">
              <div className="h-12 w-12 flex items-center justify-center bg-white rounded-lg border border-gray-300 transition-transform duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900">
                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                  <line x1="8" x2="16" y1="21" y2="21"></line>
                  <line x1="12" x2="12" y1="17" y2="21"></line>
                </svg>
              </div>

              <h3 className="text-lg font-semibold">Web Development</h3>

              <p className="text-sm leading-relaxed text-brand-gray">
                Transform your vision into reality with custom web applications built using cutting-edge
                frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team creates
                scalable, high-performance solutions that drive business growth for Nepal businesses and deliver
                exceptional user experiences across all devices.
              </p>

              <ul className="ml-4 flex flex-col gap-1 list-disc">
                <li className="text-xs text-brand-gray">Responsive Design</li>
                <li className="text-xs text-brand-gray">SEO Optimized</li>
                <li className="text-xs text-brand-gray">Performance First</li>
              </ul>
            </div>

            {/* <!-- Service Card 3 --> */}
            <div className="bg-gray-100 p-5 rounded-2xl flex flex-col gap-2 text-left border border-gray-300 transition-transform duration-500 hover:-translate-y-1 md:flex-[0_0_calc(50%-12px)] lg:order-2 lg:flex-[0_0_calc(70%-24px)]">
              <div className="h-12 w-12 flex items-center justify-center bg-white rounded-lg border border-gray-300 transition-transform duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900">
                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                  <line x1="8" x2="16" y1="21" y2="21"></line>
                  <line x1="12" x2="12" y1="17" y2="21"></line>
                </svg>
              </div>

              <h3 className="text-lg font-semibold">Web Development</h3>

              <p className="text-sm leading-relaxed text-brand-gray">
                Transform your vision into reality with custom web applications built using cutting-edge
                frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team creates
                scalable, high-performance solutions that drive business growth for Nepal businesses and deliver
                exceptional user experiences across all devices.
              </p>

              <ul className="ml-4 flex flex-col gap-1 list-disc">
                <li className="text-xs text-brand-gray">Responsive Design</li>
                <li className="text-xs text-brand-gray">SEO Optimized</li>
                <li className="text-xs text-brand-gray">Performance First</li>
              </ul>
            </div>

            {/* <!-- Service Card 4 --> */}
            <div className="bg-gray-100 p-5 rounded-2xl flex flex-col gap-2 text-left border border-gray-300 transition-transform duration-500 hover:-translate-y-1 md:flex-[0_0_calc(50%-12px)] lg:order-1 lg:flex-[0_0_30%]">
              <div className="h-12 w-12 flex items-center justify-center bg-white rounded-lg border border-gray-300 transition-transform duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900">
                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                  <line x1="8" x2="16" y1="21" y2="21"></line>
                  <line x1="12" x2="12" y1="17" y2="21"></line>
                </svg>
              </div>

              <h3 className="text-lg font-semibold">Web Development</h3>

              <p className="text-sm leading-relaxed text-brand-gray">
                Transform your vision into reality with custom web applications built using cutting-edge
                frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team creates
                scalable, high-performance solutions that drive business growth for Nepal businesses and deliver
                exceptional user experiences across all devices.
              </p>

              <ul className="ml-4 flex flex-col gap-1 list-disc">
                <li className="text-xs text-brand-gray">Responsive Design</li>
                <li className="text-xs text-brand-gray">SEO Optimized</li>
                <li className="text-xs text-brand-gray">Performance First</li>
              </ul>
            </div>

            {/* <!-- Service Card 5 --> */}
            <div className="bg-gray-100 p-5 rounded-2xl flex flex-col gap-2 text-left border border-gray-300 transition-transform duration-500 hover:-translate-y-1 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(50%-12px)]">
              <div className="h-12 w-12 flex items-center justify-center bg-white rounded-lg border border-gray-300 transition-transform duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900">
                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                  <line x1="8" x2="16" y1="21" y2="21"></line>
                  <line x1="12" x2="12" y1="17" y2="21"></line>
                </svg>
              </div>

              <h3 className="text-lg font-semibold">Web Development</h3>

              <p className="text-sm leading-relaxed text-brand-gray">
                Transform your vision into reality with custom web applications built using cutting-edge
                frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team creates
                scalable, high-performance solutions that drive business growth for Nepal businesses and deliver
                exceptional user experiences across all devices.
              </p>

              <ul className="ml-4 flex flex-col gap-1 list-disc">
                <li className="text-xs text-brand-gray">Responsive Design</li>
                <li className="text-xs text-brand-gray">SEO Optimized</li>
                <li className="text-xs text-brand-gray">Performance First</li>
              </ul>
            </div>

            {/* <!-- Service Card 6 --> */}
            <div className="bg-gray-100 p-5 rounded-2xl flex flex-col gap-2 text-left border border-gray-300 transition-transform duration-500 hover:-translate-y-1 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(50%-12px)]">
              <div className="h-12 w-12 flex items-center justify-center bg-white rounded-lg border border-gray-300 transition-transform duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900">
                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                  <line x1="8" x2="16" y1="21" y2="21"></line>
                  <line x1="12" x2="12" y1="17" y2="21"></line>
                </svg>
              </div>

              <h3 className="text-lg font-semibold">Web Development</h3>

              <p className="text-sm leading-relaxed text-brand-gray">
                Transform your vision into reality with custom web applications built using cutting-edge
                frameworks like React, Next.js, and Node.js. Our Kathmandu-based development team creates
                scalable, high-performance solutions that drive business growth for Nepal businesses and deliver
                exceptional user experiences across all devices.
              </p>

              <ul className="ml-4 flex flex-col gap-1 list-disc">
                <li className="text-xs text-brand-gray">Responsive Design</li>
                <li className="text-xs text-brand-gray">SEO Optimized</li>
                <li className="text-xs text-brand-gray">Performance First</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Partners Section --> */}
        <section className="mb-10 pt-5 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-sm mb-2 capitalize text-brand-gray">
            Trusted By
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">Leading Brands We've Partnered With in Nepal</h2>
          <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
            Trusted by 1+ leading companies across various industries
          </p>

          <div className="flex items-center justify-between gap-6 flex-wrap my-16">
            <div className="flex-[0_0_100%] p-6 rounded-lg bg-white border border-gray-300 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)]">
              <img src="/images/techaxis.png" className="h-36 w-36 mx-auto" alt="techaxis" />
            </div>
            <div className="flex-[0_0_100%] p-6 rounded-lg bg-white border border-gray-300 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)]">
              <img src="/images/techaxis.png" className="h-36 w-36 mx-auto" alt="techaxis" />
            </div>
            <div className="flex-[0_0_100%] p-6 rounded-lg bg-white border border-gray-300 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)]">
              <img src="/images/techaxis.png" className="h-36 w-36 mx-auto" alt="techaxis" />
            </div>
            <div className="flex-[0_0_100%] p-6 rounded-lg bg-white border border-gray-300 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)]">
              <img src="/images/techaxis.png" className="h-36 w-36 mx-auto" alt="techaxis" />
            </div>
          </div>

          <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
            Join these leading brands and transform your business with Nepal's top IT company
          </p>
        </section>

        {/* <!-- Portfolio Section --> */}
        <section className="mb-10 pt-5 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-sm mb-2 capitalize text-brand-gray">
            Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">IT Solution Case Studies - Antbyte Labs Portfolio</h2>
          <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
            Delivering excellence across industries with innovative software solutions from Nepal
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex-[0_0_100%] rounded-lg border border-gray-300 px-5 bg-white my-16 transition-transform duration-500 hover:-translate-y-1 md:flex-[0_0_calc(50%-12px)]">
              <div className="overflow-hidden">
                <img src="/images/portfolio.jpeg" alt="portfolio" className="w-full h-48 transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="text-left py-5">
                <h3 className="text-xl mb-2 font-semibold">Ecommerce</h3>
                <p className="text-sm mb-4 text-brand-gray">A fully built clean ecommerce</p>

                <div className="flex items-center gap-5">
                  <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-xs text-brand-gray">E-commerce</div>
                  <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-xs text-brand-gray">Website</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- About Us Section --> */}
        <section className="mb-10 pt-5 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-sm mb-2 capitalize text-brand-gray">
            About Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">About Antbyte Labs - Leading IT Company in Kathmandu, Nepal</h2>
          <p className="text-lg lg:text-xl leading-relaxed mb-6 text-brand-gray">
            Antbyte Labs is a leading IT company in Nepal specializing in custom software development, cloud
            solutions, and digital transformation. Based in Kathmandu, our team of 50+ expert developers, designers,
            and strategists has successfully delivered 150+ projects for clients across 25+ countries. With 8+ years
            of experience and ISO certification, we help Nepal businesses leverage technology for growth and
            competitive advantage.
          </p>

          <div className="flex justify-between items-center gap-6 flex-wrap my-10">
            <div className="flex flex-col gap-1">
              <div className="text-3xl lg:text-4xl font-bold">150+</div>
              <div className="text-sm text-brand-gray">Projects Delivered</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-3xl lg:text-4xl font-bold">8+</div>
              <div className="text-sm text-brand-gray">Years of experience</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-3xl lg:text-4xl font-bold">50+</div>
              <div className="text-sm text-brand-gray">Team Members</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-3xl lg:text-4xl font-bold">25+</div>
              <div className="text-sm text-brand-gray">Countries Served</div>
            </div>
          </div>
        </section>

        {/* <!-- Background Image Section --> */}
        <section className="mb-10">
          <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(255,255,255,0.6)),url('/images/nature.avif')]">
            Content
          </div>
        </section>
      </main>

      {/* <!-- Footer --> */}
      <footer className="px-5 py-10 bg-brand-light border-t border-gray-300 lg:px-20">
        <div className="flex flex-col gap-8 pb-6 lg:flex-row">
          <div className="lg:flex-[0_0_calc(33%-16px)]">
            <div className="flex items-center gap-3 text-3xl font-semibold mb-4">
              <span className="font-extrabold text-white h-10 w-10 bg-black flex items-center justify-center rounded-lg">A</span>
              <div>AntByte labs</div>
            </div>
            <p className="text-base py-4 text-brand-gray">
              Nepal's leading IT company transforming businesses through innovative technology solutions. Based
              in Kathmandu, serving clients worldwide with excellence since 2020.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="rounded bg-gray-200 h-10 w-10 flex items-center justify-center hover:bg-black group">
                <svg className="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="rounded bg-gray-200 h-10 w-10 flex items-center justify-center hover:bg-black group">
                <svg className="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="rounded bg-gray-200 h-10 w-10 flex items-center justify-center hover:bg-black group">
                <svg className="w-5 h-5 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:flex-[0_0_calc(33%-16px)] lg:px-4">
            <h3 className="text-base pb-4 font-semibold">Services</h3>
            <ul className="flex flex-col gap-2">
              <li className="text-base text-brand-gray">Web Development</li>
              <li className="text-base text-brand-gray">Cloud Solutions</li>
              <li className="text-base text-brand-gray">Mobile Apps</li>
              <li className="text-base text-brand-gray">Consulting</li>
            </ul>
          </div>

          <div className="lg:flex-[0_0_calc(33%-16px)] lg:px-4">
            <h3 className="text-base pb-4 font-semibold">Company</h3>
            <ul className="flex flex-col gap-2">
              <li className="text-base text-brand-gray">About us</li>
              <li className="text-base text-brand-gray">Contact</li>
              <li className="text-base text-brand-gray">Careers</li>
              <li className="text-base text-brand-gray">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-300 text-base text-center text-brand-gray">
          © 2025 Antbyte Labs. All rights reserved. | Top IT Company in Nepal
        </div>
      </footer>
    </>
  );
}
