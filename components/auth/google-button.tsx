'use client'

import { googleLogin } from "@/app/actions/google-login"
import { useActionState } from "react"
import { BsGoogle } from "react-icons/bs"
import { Button } from "../ui/button"

const GoogleLogin = () => {
    const [errorMsgGoogle, dispatchGoogle] = useActionState(googleLogin, undefined)
    return (
        <form action={dispatchGoogle} className="flex mt-4">
            <Button variant={'outline'} className="flex flex-row items-center gap-3 w-full">
                <BsGoogle className="text-lg" />
                Sign with Google
                {errorMsgGoogle?.error && <p>{errorMsgGoogle.error}</p>}
            </Button>
        </form>
    )
}; 
export default GoogleLogin