import { GalleryVerticalEnd } from "lucide-react"
import SignUpSideImage from '/assets/login-side-image.jpg'
import  SignUpForm  from "./SignupForm"

export default function SignUp() {
  return (
    <div className="md:flex min-h-screen bg-background">
      <SignUpForm />
      {/* Right side - Image */}
      <img
        src={SignUpSideImage}
        alt="Image"
        width="1800"
        height="1800"
        className="max-w-[50%] object-cover md:block hidden dark:brightness-[0.9]"
      />
    </div>
  )
}

