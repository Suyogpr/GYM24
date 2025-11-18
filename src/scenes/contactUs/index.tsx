import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import contactus1 from "@/assets/contactus1.jpg"
import HText from "@/shared/HText";


type Props = {
    setSelectedPage: (value : SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-secondary-500`

    const{
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e:any) => {
        const isValid = await trigger();
        if(!isValid){
            e.preventDefaukt();
        }
    }

  return (
    <section id="contactus"
    className="mx-auto w-5/6 pt-24 pb-32">
    
        <motion.div 
        onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}>


            

            {/* HEADER */}
            <motion.div 
            className="w-3/5"
             initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount: 0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity:1, x:0},
                }}
            >
                <HText>
                    <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                </HText>
                <p className="my-5 ">
                     Take the first step toward a fitter lifestyle, join today and see how quickly you can transform your energy, strength, and confidence.
                </p>
            </motion.div>

                    {/* FORM AND IMAGE */}
                    <div className="mt-10 justify-between gap-8 md:flex">
                        <motion.div 
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true,amount: 0.5}}
                        transition={{duration:0.5}}
                        variants={{
                        hidden: { opacity:0, y:50},
                        visible: { opacity:1, y:0},
                }}
                        >
                            <form 
                                target="_blank"
                                onSubmit={onSubmit}
                                action="https://formsubmit.co/thesuyogpradhan@gmail.com"
                                method="POST"
                            >
                                <input 
                                    className={inputStyles}
                                    type="text" placeholder="NAME" 
                                    {...register("name",{
                                        required:true,
                                        maxLength:100,
                                    })}
                                    />
                                    {errors.name && (

                                        <p className="mt-[-15px] text-primary-500">
                                            {errors.name.type === "required" && "This field is required."}

                                            {errors.name.type === "maxLength" && "Only 100 characters."}
                                        </p>

                                    )}

                                 <input 
                                    className={inputStyles}
                                    type="text" placeholder="EMAIL"
                                    {...register("email",{
                                        required:true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    })}
                                    />
                                    {errors.email && (

                                        <p className="mt-[-15px] text-primary-500">
                                            {errors.email.type === "required" && "This field is required."}
                                            
                                            {errors.email.type === "pattern" && "Invalid email."}
                                        </p>

                                    )}
                                 <textarea 
                                    className={inputStyles}
                                    rows={4}
                                    cols={50}
                                    placeholder="MESSAGE"
                                    {...register("message",{
                                        required:true,
                                        maxLength:2000,
                                    })}
                                    />
                                    {errors.message && (

                                        <p className="mt-[-15px] text-primary-500">
                                            {errors.message.type === "required" && "This field is required."}
                                            
                                            {errors.message.type === "maxLength" && "2000 characters."}
                                        </p>
                                    )}  

                                    <button
                                    // className=' rounded-md bg-secondary-500 text-primary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
                                        className="mt-5 rounded-lg text-gray-50 bg-secondary-500 px-20 py-3 transition duration-500  hover:bg-primary-500 hover:text-secondary-500"
                                    >
                                            SUBMIT
                                    </button>      

                            </form>
                        </motion.div>

                        <motion.div 
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true,amount: 0.5}}
                        transition={{delay:0.2 ,duration:0.5}}
                        variants={{
                        hidden: { opacity:0, y:50},
                        visible: { opacity:1, y:0},
                }}
                        >
                            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                                <img className="w-full" src={contactus1} alt="contact-us-1" />
                            </div>

                        </motion.div>

                    </div>

        </motion.div>

    </section>
  )
}

export default ContactUs

