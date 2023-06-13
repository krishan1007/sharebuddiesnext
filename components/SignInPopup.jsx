
// 'use client'
// import {useState, useEffect } from 'react';
// import { signIn, useSession, getProviders} from 'next-auth/react';

// const SignInPopup = ({setShowPopup}) => {

//     const [providers,setProviders] = useState(null);

//     useEffect(()=>{
//         const setUpProviders = async () => {
//          const response = await getProviders();
//          setProviders(response);
//         }
     
//        setUpProviders();
      
//        },[])
//   return (
//     <div className="popup">
//     {
//     providers && Object.values(providers).map(provider =>
//                (<button type = "button"
//                  key = {provider.name}
//                  onClick={()=>signIn(provider.id)}
//                  className="black_btn"
//                 >
//                 Sign In
//                </button>))
//     }
//     </div>
//   );
// };

// export default SignInPopup;
