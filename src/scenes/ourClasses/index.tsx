import { SelectedPage,type ClassType } from "@/shared/types"
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class.tsx";

const classes: Array<ClassType> = [
    {
        name: "Weight Traning Classes",
        description: " Build strength, improve muscle tone, and boost overall performance with our weight training classes. Led by certified trainers, each session focuses on proper form, progressive overload, and personalized guidance to help you reach your fitness goals safely and effectively.",
        image: img1,
    },

    {
        name: "Yoga Classes",
        description: " Find balance, flexibility, and inner calm in our yoga classes. Whether you're a beginner or an experienced yogi, our guided sessions focus on mindful movement, breathwork, and relaxation to help you strengthen both body and mind.",
        image: img2,
    },

    {
        name: "Ab Core Classes",
        description: "Strengthen your midsection with our ab core classes, designed to target your abs, obliques, and lower back. These high-energy sessions focus on building stability, improving posture, and enhancing overall core strength for better performance in and out of the gym.",
        image: img3,
    },

    {
        name: "Adventure Classes",
    
        image: img4,
    },

    {
        name: "Fitness Classes",
        description: "Energize your routine with our fitness classes, offering a balanced mix of cardio, strength, and functional training. Designed for all experience levels, these sessions help you burn calories, build endurance, and stay motivated with expert guidance and a supportive community.",
        image: img5,
    },

    {
        name: "Traning Classes",
       
        image: img6,
    },
]

type Props = {
    setSelectedPage : (value: SelectedPage) => void; 
};

const OurClasses = ({setSelectedPage}: Props) => {
  return (
  <section id="ourclasses" className="w-full bg-primary-500 py-40">
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}   
    >
        <motion.div 
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
            hidden: { opacity:0, x:-50},
            visible: { opacity:1, x:0},
                }}
           >
            <div className="mt-[-100px] md:w-3/">
                <HText>OUR CLASSES</HText>
                <p className="py-5  text-gray-20">
                     Explore our wide range of fitness classes designed for all levels—from high-energy cardio and strength training to yoga, pilates, and specialty programs. Find the perfect class to help you reach your goals.
                </p>


            </div>
        </motion.div>
        <div className="mt-10 h-[353 px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item:ClassType,index)=>(
                        <Class
                            key={`${item.name}-${index}`} 
                            name={item.name}
                            description={item.description}
                            image = {item.image}

                        />
                    ))}

                </ul>
        </div>

    </motion.div>
    
  </section>
) 
};

export default OurClasses;