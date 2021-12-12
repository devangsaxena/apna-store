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
	                            width="320"
	                            height="350"
	                            src="https://console.dialogflow.com/api-client/demo/embedded/5437ad34-130b-452b-8a94-00c4061f6011">
			                    </iframe>
		                        </div>
	                        </div>
        </footer>
    )

}

export default Footer
