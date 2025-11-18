import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';

import home2 from "@/assets/home2.png";

import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isABoveMediumScreens = useMediaQuery ("(min-width:1060px)")

  return  <section
        id='home'
        className='gap-16 bg-primary-500 py-10 md:h-full md:pb-0'>
            {/* homebgcolor| */}

        {/* IMAGE AND MAIN HEADER */}
        <motion.div 
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        > 

            {/* MAIN HEADER  */}
            <div className='z-10 mt-32 md:basis-3/5'>

                {/* HEADINGS */}
                <motion.div 
                className='md:-mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount: 0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity:1, x:0},
                }}
                >
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>

                           <HText>
                            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold">
                                <span className="text-gray-20">GYM</span>24
                            </h1>
                            </HText>

                        </div>
                    </div>
                    <p className='mt-8 text-sm text-gray-20'>
                        Welcome to EvoGym, where your fitness goals become reality! Whether you're here to build strength, increase endurance, or find your inner balance, our state-of-the-art equipment, expert trainers, and supportive community are here to guide you every step of the way. Join us and take the first step towards a healthier, stronger, and more confident you!
                    </p>
                </motion.div>

                    {/* ACTIONS */}
                    <motion.div 
                    className='mt-8 flex items-center gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount: 0.5}}
                    transition={{delay:0.2, duration:0.5}}
                    variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity:1, x:0},
                }}

                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink 
                            className='text-sm font-bold text-gray-20 underline hover:text-secondary-500'
                            onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
                            href={`${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
            </div>

            {/* IMAGE */}
            <div className='flex basis-3/5 justify-center md:z-10
            
            md:ml-40 md:mt-16 md:justify-items-end'>
                <img src={home2} alt="home-pageGraphic" />
            </div>

        </motion.div>

        {/* SPONSORS */}
        {isABoveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8'>

                        <img src={SponsorRedBull} alt="redbull-sponsor" />
                        <img src={SponsorForbes} alt="forbes-sponsor" />
                        <img src={SponsorFortune} alt="fortune-sponsor" />
                        
                    </div>
                </div>
            </div>
        )}
  </section>
};

export default Home;