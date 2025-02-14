import LoginForm from "./LoginForm"
import LoginSideImage from '/assets/login-side-image.jpg'

export default function Login() {
  return (
    <div className="md:flex min-h-screen bg-background">
      {/* Left side - Sign-up form */}
      <LoginForm />
      {/* Right side - Image */}
      <img
        src={LoginSideImage}
        alt="Image"
        width="1800"
        height="1800"
        className="max-w-[50%] object-cover md:block hidden dark:brightness-[0.9]"
      />
    </div>
  )
}

