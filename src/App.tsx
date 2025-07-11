import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LottiePlayer from "./components/LottiePlayer"
import { LottieScroll } from "./components/LottieScroll"
function App() {

  return (
    <>
      <Header></Header>
    <LottieScroll />
      <section id="home" className="section min-h-screen md:py-[140px] overflow-hidden py-14 relative bg-gray-1100">
        <div className="max-w-[1160px] px-5 mx-auto relative z-10 4xl:pt-20">
          <div className="flex md:gap-5 gap-10 lg:flex-nowrap flex-wrap">
            <div className="lg:w-7/12 w-full">
              <h1 className="xl:text-[52px] lg:text-[46px] sm:text-[36px] md:pr-20 pr-0 text-[28px] font-extrabold font-inter text-black-1000 leading-[120%]">Fuelling Business Transformation with<br></br>
                <span className="text-gradient">Intelligent Technology </span>
              </h1>
              <p className="text-base lg:my-10 my-5 font-semibold leading-6 text-black-1000">AI is reshaping business—are you ready?<br></br>We empower organizations across the UK and EMEA to modernize operations,
                solve complex challenges, and stay ahead in a rapidly evolving landscape.</p>
              <a href="#challenges" className="text-base relative cursor-pointer group font-bold z-10 leading-[135%] text-white w-[190px] h-[50px] flex items-center justify-center">Explore Services
                <span className="absolute w-full h-full top-0 left-0 -z-10"><img src="images/btn-bg.png" className="h-[50px] w-full" alt="" /></span>
                <span className="w-full h-full absolute left-0 btn-hvr -z-10 block top-0 bg-red-1000"></span>
              </a>
            </div>
            <div className="lg:w-5/12 w-full">
              <LottiePlayer></LottiePlayer>
            </div>
          </div>
        </div>
    
      </section>
      <section id="experties" className="section md:pt-20 relative py-14 md:pb-[156px]">
        <div className="max-w-[1205px] px-5 mx-auto relative z-10">
          <div className="text-center max-w-[527px] mx-auto">
            <h2 className="lg:text-[36px] text-2xl font-extrabold mb-5 leading-[120%] font-inter text-black-1000">Our Expertise</h2>
            <p className="text-base font-semibold leading-6 font-geist text-black-1000">Harnessing Generative AI, Deep Learning, and IoT to transform business operations across multiple sectors.</p>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 xl:max-w-full md:max-w-[775px] max-w-[375px] mx-auto gap-5 md:mt-[50px] mt-6">
            <div className="bg-red-1000 rounded-md custom-radius hover:rounded-[50%] h-fit pt-10 flex flex-col justify-between min-h-[375px] text-center px-5 py-[30px]">
              <div>
                <img src="images/cpu-setting.svg" className="inline-block" alt="" />
                <h4 className="text-xl font-inter font-bold mt-5 mb-2 leading-[34px] text-white">Legacy System Modernization</h4>
                <p className="text-[13px] font-semibold font-geist leading-6 text-white">Transform outdated software while preserving critical business logic. Our AI-driven approach reduces modernization costs by 30% for initial projects and 70% for subsequent migrations—ideal for regulated industries where continuity is paramount.</p>
              </div>
            </div>

            <div className="bg-blue-1000 h-fit rounded-[50%] custom-radius hover:rounded-none sm:pt-10 pt-[26px] flex flex-col justify-between min-h-[375px] text-center px-5 py-[30px]">
              <div>
                <img src="images/status-up.svg" className="inline-block" alt="" />
                <h4 className="text-xl font-inter font-bold mt-5 mb-2 leading-[34px] text-white">Unified Design-to-Production</h4>
                <p className="text-[13px] max-w-[335px] mx-auto font-semibold font-geist leading-6 text-white">Rethink the current 3D modeling workflows. Using a multi-layer AI architecture, we aim for a shift of paradigm that empowers a whole new level of design and manufacturing through functional representation, where designers and engineers can work on the same platform at a 3x productivity rate. Ready for <br></br>design, ready for production.</p>
              </div>
            </div>
            <div className="h-fit relative group z-10 pt-10 flex flex-col justify-between min-h-[400px] text-center px-5 pb-10">
              <div>
                <img src="images/grid-edit.svg" className="inline-block" alt="" />
                <h4 className="text-xl font-inter font-bold mt-5 mb-2 leading-[34px] text-black-1000">AI-Powered Media Workflows</h4>
                <p className="text-[13px] max-w-[335px] mx-auto font-semibold font-geist leading-6 text-black-1000">Automate massive photo libraries with intelligent tagging, quality sorting, and color correction. Built for agencies handling 200+ images per event, our scalable architecture ensures compliance while streamlining e-commerce integration.</p>
              </div>
              <div className="hexgon bg-yellow-1000 group-hover:rotate-[15deg] -z-10 absolute top-0 left-0 w-full h-full"></div>
            </div>
            <div className="bg-black-1000 rounded-[50%] hover:rounded-none custom-radius h-fit sm:pt-10 pt-[26px] flex flex-col justify-between min-h-[375px] text-center px-5 py-[30px]">
              <div>
                <img src="images/health.svg" className="inline-block" alt="" />
                <h4 className="text-xl font-inter font-bold mt-5 mb-2 leading-[34px] text-white">Infrastructure Health Intelligence</h4>
                <p className="text-[13px] max-w-[330px] mx-auto font-semibold font-geist leading-6 text-white">Data is king. By capturing real-world data from IoT sensors, we build complex AI models that drive data-driven decisions—analyzing structural patterns to prioritize repairs and extend asset lifespans across energy, transportation, and urban infrastructure.
                </p>
              </div>
            </div>
            <div className="h-fit relative group z-10 pt-10 flex flex-col justify-between min-h-[400px] text-center px-[18px] pb-10">
              <div>
                <img src="images/cloud-plus.svg" className="inline-block" alt="" />
                <h4 className="text-xl font-inter font-bold mt-7 mb-2 leading-[34px] text-black-1000">Environmental Monitoring Systems</h4>
                <p className="text-[13px] max-w-[335px] mx-auto font-semibold font-geist leading-6 text-black-1000">Protect urban green spaces with AI-driven risk assessments. From noise-filtered data
                  collection to structural analysis integration,
                  our solutions enable targeted interventions
                  that balance public safety with conservation goals.
                </p>
              </div>
              <div className="hexgon bg-yellow-1000 group-hover:rotate-[15deg] -z-10 absolute top-0 left-0 w-full h-full"></div>
            </div>
            <div className="bg-red-1000 hover:rounded-[50%] custom-radius h-fit pt-10 flex flex-col justify-between min-h-[375px] text-center px-5 py-[30px]">
              <div>
                <img src="images/presention-chart.svg" className="inline-block" alt="" />
                <h4 className="text-xl font-inter font-bold mt-5 mb-2 leading-[34px] text-white">Enterprise AI Solutions</h4>
                <p className="text-[13px] font-semibold font-geist leading-6 text-white">Drive engagement with AI-generated product images and variations that adapt to user behavior. Our dynamic content solutions deliver personalized shopping experiences across platforms, boosting conversions through tailored visual presentations.</p>
              </div>
            </div>
          </div>
        </div>
    
      </section>
      <section id="technology" className="section md:py-[70px] py-14 bg-gray-1100 relative">
      
        <div className="max-w-[1200px] px-5 mx-auto relative z-10">
          <div className="text-center max-w-[527px] mx-auto mb-14">
            <h2 className="lg:text-[36px] text-2xl font-extrabold mb-5 leading-[120%] font-inter text-black-1000">Our Technology</h2>
            <p className="text-base font-semibold leading-6 font-geist text-black-1000">We leverage cutting-edge technologies to deliver innovative solutions tailored to your business needs.</p>
          </div>
          <div className="flex md:py-11 py-6 items-center justify-between mb-5 md:px-10 px-4 bg-black-1000 gap-[25px]">
            <div className="flex md:flex-nowrap flex-wrap items-center gap-8">
              <div className="md:w-[100px] w-20 md:h-[100px]  h-20 md:p-0 p-3 flex items-center justify-center bg-red-1000"><img src="images/bulb-icon.svg" alt="" /></div>
              <div className="md:flex-1">
                <h4 className="lg:text-[32px] text-2xl font-bold font-inter text-white leading-[130%] mb-5">Generative AI & Deep Learning</h4>
                <p className="text-[15px] font-semibold font-geist leading-6 text-white">Utilizing state-of-the-art Large Language Models (LLMs) and deep neural networks to solve complex business challenges.</p>
              </div>
            </div>
            {/* <div className="">
              <div className="h-[63px] w-[63px] bg-blue-1000"></div>
              <div className="h-[63px] w-[63px] bg-red-1000"></div>
              <div className="h-[63px] w-[63px] bg-yellow-1000"></div>
            </div> */}
          </div>
          <div className="flex md:py-11 py-6 items-center justify-between mb-5 md:px-10 px-4 bg-black-1000 gap-[25px]">
            <div className="flex md:flex-nowrap flex-wrap items-center gap-8">
              <div className="md:w-[100px] w-20 md:h-[100px]  h-20 md:p-0 p-3 flex items-center rounded-full justify-center bg-blue-1000"><img src="images/chat-ai.svg" alt="" /></div>
              <div className="md:flex-1">
                <h4 className="lg:text-[32px] text-2xl font-bold font-inter text-white leading-[130%] mb-5">Retrieval Augmented Generation</h4>
                <p className="text-[15px] font-semibold font-geist leading-6 text-white">Enhancing AI capabilities by combining generative models with precise information retrieval systems for accurate, contextual responses.</p>
              </div>
            </div>
            {/* <div className="">
              <div className="h-[63px] w-[63px] rounded-full bg-red-1000"></div>
              <div className="h-[63px] w-[63px] rounded-full bg-yellow-1000"></div>
              <div className="h-[63px] w-[63px] rounded-full bg-blue-1000"></div>
            </div> */}
          </div>
          <div className="flex md:py-11 py-6 items-center justify-between mb-5 md:px-10 px-4 bg-black-1000 gap-[25px]">
            <div className="flex md:flex-nowrap flex-wrap items-center gap-8">
              <div className="md:w-[100px] w-20 md:h-[100px]  h-20  flex items-center justify-center "><img src="images/chart-icon.svg" alt="" /></div>
              <div className="md:flex-1">
                <h4 className="lg:text-[32px] text-2xl font-bold font-inter text-white leading-[130%] mb-5">Advanced Data Analytics</h4>
                <p className="text-[15px] font-semibold font-geist leading-6 text-white">Transforming raw data into actionable insights through sophisticated statistical models and visualization techniques.</p>
              </div>
            </div>
            {/* <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="63" viewBox="0 0 55 63" fill="none">
                <path d="M27.5 0L54.7798 15.75V47.25L27.5 63L0.2202 47.25V15.75L27.5 0Z" fill="#FFDE9F" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="63" viewBox="0 0 55 63" fill="none">
                <path d="M27.5 0L54.7798 15.75V47.25L27.5 63L0.2202 47.25V15.75L27.5 0Z" fill="#00F" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="63" viewBox="0 0 55 63" fill="none">
                <path d="M27.5 0L54.7798 15.75V47.25L27.5 63L0.2202 47.25V15.75L27.5 0Z" fill="#E50037" />
              </svg>
            </div> */}
          </div>
          <div className="flex md:py-11 py-6 items-center justify-between mb-5 md:px-10 px-4 bg-black-1000 gap-[25px]">
            <div className="flex md:flex-nowrap flex-wrap items-center gap-8">
              <div className="md:w-[100px] w-20 h-20 md:p-0 p-3 flex items-center justify-center bg-blue-1000"><img src="images/iot-icon.png" alt="" /></div>
              <div className="md:flex-1">
                <h4 className="lg:text-[32px] text-2xl font-bold font-inter text-white leading-[130%] mb-5">Internet of Things (IoT)</h4>
                <p className="text-[15px] font-semibold font-geist leading-6 text-white">Connecting physical devices with digital systems to monitor, collect, and exchange data for smarter decision making.</p>
              </div>
            </div>
            {/* <div className="">
              <div className="h-[63px] w-[63px] bg-blue-1000"></div>
              <div className="h-[63px] w-[63px] bg-red-1000"></div>
              <div className="h-[63px] w-[63px] bg-yellow-1000"></div>
            </div> */}
          </div>
        </div>
      </section>
      <section id="challenges" className="section bg-gray-1100 lg:py-20 md:py-10 py-8 pt-0">
        <div className="max-w-[1200px] px-5 mx-auto relative z-10">
          <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-10">
            <div className="md:w-7/12 w-full">
              <h4 className="md:text-[36px] text-2xl font-bold leading-[120%] text-black-1000">Innovative Solutions for Complex Challenges</h4>
              <p className="text-sm font-geist leading-6 max-w-[516px] mt-3 mb-5 text-black-1000">At Uranion.ai, we combine multiple technologies to create bespoke solutions that address your most pressing business challenges. Our expertise spans across AI, data analytics, and IoT, allowing us to deliver comprehensive, integrated systems.</p>
              <ul>
                <li className="flex items-center gap-2 mb-4 text-sm font-geist font-semibold leading-6 text-black-1000"><img src="images/checkmark.svg" alt="" />Specialized Large Language Models (LLMs)</li>
                <li className="flex items-center gap-2 mb-4 text-sm font-geist font-semibold leading-6 text-black-1000"><img src="images/checkmark.svg" alt="" />Deep Learning Neural Networks</li>
                <li className="flex items-center gap-2 mb-4 text-sm font-geist font-semibold leading-6 text-black-1000"><img src="images/checkmark.svg" alt="" />Advanced Data Processing Pipelines</li>
                <li className="flex items-center gap-2 text-sm font-geist font-semibold leading-6 text-black-1000"><img src="images/checkmark.svg" alt="" />Secure Cloud Infrastructure</li>
              </ul>
            </div>
   
          </div>
        </div>
      </section>
      <section id="contact" className="section bg-gray-1100 relative lg:py-20 lg:pt-44 py-10">
        <div className="max-w-[1200px] px-5 mx-auto relative z-10">
          <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
            <div className="md:w-5/12 w-full">
              <h4 className="md:text-[36px] text-2xl font-inter font-extrabold leading-[120%] mb-4 text-black-1000">Get in Touch</h4>
              <p className="text-sm font-geist font-semibold leading-6 max-w-[516px] md:mb-10 mb-5 text-black-1000">Ready to transform your business with intelligent technology? Contact us today to discuss your needs.</p>
              <h6 className="md:text-2xl text-xl font-semibold md:mb-6 mb-4 font-inter text-black-1000">Contact Information</h6>
              <div className="md:mb-6 mb-3">
                <span className="text-xl font-geist font-semibold mb-4 block leading-[120%] text-red-1000">Address</span>
                <p className="text-sm max-w-[394px] font-semibold font-geist leading-6 text-black-1000">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
              </div>
              <div>
                <span className="text-xl font-geist font-semibold mb-4 block leading-[120%] text-red-1000">Email</span>
                <p className="text-sm max-w-[394px] font-semibold font-geist leading-6 text-black-1000">info@uranion.ai</p>
              </div>
            </div>
            <div className="md:w-7/12 w-full">
              <div className="bg-black-1000 max-w-[643px] ml-auto p-[30px]">
                <div className="text-center">
                  <h4 className="text-2xl font-extrabold italic font-inter text-white">Send Us a Message</h4>
                </div>
                <ContactForm></ContactForm>
              </div>
            </div>
          </div>
        </div>


      </section>
      <Footer></Footer>
    </>
  )
}

export default App
