import HText from "@/shared/HText";
import { SelectedPage, type BenefitType } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"

import benefit2 from "@/assets/benefit2.png"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6 text-gray-20" />,
        title: "State of the Art Facilities",
        description: 
        "Experience state-of-the-art facilities equipped with the latest technology and modern amenities to elevate your journey toward better health and wellness."
    },

     {
        icon: <UserGroupIcon className="h-6 w-6 text-gray-20" />,
        title: "100s of Diverse Classes",
        description: 
        "Choose from hundreds of diverse classes designed for every interest and fitness level, ensuring you'll always find something that inspires and challenges you."
    },

     {
        icon: <AcademicCapIcon className="h-6 w-6 text-gray-20" />,
        title: "Expert and Pro Trainers",
        description: 
        "Train in state-of-the-art facilities featuring cutting-edge equipment, modern training spaces, and premium amenities built to elevate every workout."
    },
];


const container ={
    hidden:{},
    visible:{
        transition: { staggerchildren: 0.2}
    }
};


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (

        // <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 bg-primary-100">

            <section id="benefits" className="w-full bg-gray-20 py-20">
            <div className="mx-auto w-5/6 min-h-full">

        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
                {/* HEADER */}
            <motion.div 
            className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount: 0.5}}
                transition={{duration:0.5}}
                variants={{
                hidden: { opacity:0, x:-50},
                visible: { opacity:1, x:0},
                }}    
            >
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                    Discover a space designed to support your whole well-being, offering fitness, community events, and resources to help you live a healthier, more balanced life.
                </p>
            </motion.div>


        {/* BENEFITS */}
        <motion.div 
        className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        variants={container}
        >
            {benefits.map((benefit: BenefitType) =>(
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* GRAPHIC */}
            <img className="mx-auto"  src={benefit2} alt="benefits-page-graphic" width="1500px" />

            {/* DESCRIPTION */}
            <div>
                {/* TITLE */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                        initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount: 0.5}}
                    transition={{duration:0.5}}
                    variants={{
                    hidden: { opacity:0, x:50},
                    visible: { opacity:1, x:0},
                }}
                >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500">FIT</span>
                            </HText>
                        </motion.div>

                    </div>

                </div>
                {/* DESCRIPTION */}
                <motion.div
                    initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount: 0.5}}
                transition={{delay:0.2, duration:0.5}}
                variants={{
                hidden: { opacity:0, x:-50},
                visible: { opacity:1, x:0},
                }}
                >
                    <p className="my-5">
                        Join millions of happy customers who trust us to support their fitness, health, and wellness journey every day.Be part of a thriving community with millions of satisfied customers achieving their goals and living healthier, happier lives.
                    </p>

                    <p className="mb-5">
                        Our commitment goes beyond fitness — we provide the guidance, tools, and support you need to make lasting lifestyle changes and enjoy every step of your wellness journey.
                    </p>


                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>

                    </div>
                    
                </div>
            </div>
        </div>
        </motion.div>
        </div>
    </section>
  )
}

export default Benefits