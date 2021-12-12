import React from 'react'
import Image from 'next/image'
import {signIn, signOut, useSession} from "next-auth/client";
import { useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectItems} from "../slices/basketSlice";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
}from "@heroicons/react/outline";
function Footer() {
    const [session]=useSession();
    const router=useRouter();

    const items=useSelector(selectItems);
    return (
        <footer class="fixed bottom-0 right-0 z-50">
            <div class="container" id="iframe-container">
		        <div id="chatbox">
			        <iframe
                        allow="microphone;"
                        width="350"
                        height="430"
                        src="https://console.dialogflow.com/api-client/demo/embedded/7fbd2cb9-9c2b-445d-b49c-c3b4b78041a1">
                    </iframe>
		        </div>
	        </div>
        </footer>
    )

}

export default Footer
