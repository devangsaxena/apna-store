import { getSession, useSession } from 'next-auth/client'
import Header from '../components/Header'

import Image from 'next/image'
import db from '../../firebase'
import Order from '../components/Order'
import Head from 'next/head'
import moment from "moment";
const myLoader=({src})=>{
    return "https://bit.ly/36lDgq6";
  }
function privacyy({ orders }) {
    const [session]=useSession();
    return (
        <div>
            <Header/>
            <main className='max-w-screen-lg mx-auto p-10'>
                <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>Privacy Policy</h1>

                
<h2 className='text-gray-500'>Last Modified March 12, 2022</h2> <br></br><br></br> Your privacy is important to us. To better protect your privacy we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. Please note that participation in the Apna-Store Sites is primarily a public activity and much of the information you post to any Apna-Store Sites (whether directly through our site or via links with other social networking websites) is instantly publicly viewable. Therefore, you should not submit information that you consider confidential. We maintain
tted to us in the registration process (unless you enter such information as your username or in the text of your entries to user areas), but other information you provide should be considered nonconfidential and available for viewing by others. Also, please note that information provided through facebook or other social networks, or for publication on fan pages, mobile apps or websites may be subject to different privacy policies which may vary materially from these terms applying to our web sites.. 
<br></br><br></br>
<h2><b>The Information We Collect :</b> Any information gathered by us is used to customize the experience for you the user, and is not shared or sold to any third parties, except as expressly provided for in this Privacy Policy and our Terms of Service. However, we may in the future provide customized or targeted advertisements to you based upon your data (including usage statistics and characteristics), in which case we may allow third party applications to access such data for the purpose of customizing messages or advertising for you.</h2>
<br></br>
<h2><b>Our Commitment to Data Security :</b> To prevent unauthorized access and maintain data accuracy, we use industry standard methods to safeguard and secure the information we collect online, although you recognize that data transmitted online or stored in a facility to which online access is provided cannot be made to be 100% secure. We believe in protecting your information just as we would want our information protected. In the event that personal information is compromised as a result of a breach of security, we will promptly notify those persons whose personal information has been compromised as may be required by applicable law. Please note that information you enter for your user profile or in your posts may be accessed and viewed publicly and therefore you should not post information that you consider confidential or that you do not want distributed publicly. Although in some areas you will have the ability to edit or delete information, please note that even this information may have been cached on servers, cut and pasted or otherwise incorporated into other posts or for other uses, and so once information is posted you should consider that it may be publicly available perpetually, and in different locations and/or media than your original submission.</h2>
<br></br>
<h2><b>Notifications:</b> It is our policy to provide notifications, whether such notifications are required by law or are for marketing or other business related purposes, to our users via email notice, written or hard copy notice, or through conspicuous posting of such notice on a Apna-Store Site, as determined by us in our sole discretion. Notwithstanding the foregoing, we reserve the right to determine the form and means of providing notifications to our users.</h2>
<br></br>
<h2><b>Child Protection:</b> We do not offer services to, or target, persons under the age of 13. In compliance with the Children's Online Privacy Protection Act, we will purge any information we receive from people we believe to be children under 13 from our database and cancel the corresponding accounts.</h2>
<br></br>
<h2><b>How You Can Access or Correct Your Information :</b> You can access your personally identifiable information that we collect online and maintain by logging in and "Editing" your account. Your password is needed to edit this information, even if you are already logged in. We use this procedure to better safeguard your information. You may not be able to edit or delete past entries and information collected regarding past updates. To protect your privacy and security, we will also take reasonable steps to verify your identity before granting access or making corrections. The main form of identity management is your email address. Please always use a valid and up-to-date email address.</h2>
<br></br>
<h2><b>Use of User Information :</b> Information you provide to us about yourself, or that we collect and infer based upon your entries and posts to a Apna-Store Site may be used to improve your user experience, provide or suggest targeted services and to allow third party advertises and messaging to be tailored or targeted. We may use or provide to third parties aggregated data entered by users or inferred from usage. We may collect IP addresses and cookies for the primary purpose of assisting with ease of use by you. However, except as legally required, we will not sell or provide your email address, IP address, cookies, address or phone number to third parties for advertising or other purposes. In the future we may provide third parties with the ability to provide customizable or targeted advertising or messages and in such cases we may allow third party applications to access your user data in determining the messaging or advertising applicable to you.</h2>
<br></br>
<h2><b>How to Contact Us :</b>Should you have other questions or concerns about these privacy policies, please send us email at devangsaxena2018@gmail.com.</h2> 
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <Image
                    onClick={()=>router.push('/')}
                    loader={myLoader} src="https://bit.ly/36lDgq6"
                    width={180}
                    height={180}
                    objectFit="contain"
                    className="cursor-pointer center"
                />
            </main>
            
        </div>
        
    );
}

export default privacyy;

