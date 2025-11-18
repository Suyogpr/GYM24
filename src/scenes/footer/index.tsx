// import Logo from "@/assets/Logo.png"
import HText from "@/shared/HText"
 
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">

        <div className="mt-16 basis-1/2 md:mt-0">
        {/* <img src={Logo} alt="logo" /> */}
        <HText>
                <span className="text-gray-20 ">GYM</span>24
        </HText>
        <p className="my-5">
            We are dedicated to helping you achieve your fitness goals, whether you are just starting your journey or looking to take your training to the next level. Our experienced trainers, diverse classes, and state of the art equipment create an environment where everyone can thrive. From weight training and cardio to yoga and specialized programs, we offer something for every fitness level. Join our supportive community today and experience the energy, motivation, and results that come from being part of Evogym.
        </p>
        <p>© GYM24 All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
                <p className="my-5">facebook.com/thesuyogpradhan</p>
                <p className="my-5">github.com/Suyogpr</p>
                <p className="my-5">Ullamcorper vivamus</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">ssuyogppradhan@gmail.com</p>
                <p className="my-5">9762414419</p>
        </div>
           

        </div>
    </footer>
  )
}

export default Footer