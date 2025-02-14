import { Helmet } from "react-helmet-async";
import SignUp from "@/sections/auth/SingUp";

export default function LoginPage() {
    return (
        <>
            <Helmet>
                <title> Sign Up | Talkpilot </title>
            </Helmet>

            <SignUp />
        </>
    )
}