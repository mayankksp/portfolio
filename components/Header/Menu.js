// const Menu = ({ menuItems, loginLink, signupLink }) => {
//     return (
//         <>
//             <nav className={`xl:flex flex-row items-start w-fit justify-start gap-[3rem] text-[1rem] font-noto-sans md:flex-row md:py-8 md:gap-8 hidden`}>
//                 {menuItems.map((item, index) => (
//                     <div className="group relative h-fit" key={index}>
//                         <a href={item.link} className="capitalize font-medium no-underline px-2 py-8 text-gray-200">{item.name}</a>
//                         {item.submenu && (
//                             <div className="absolute left-0 mt-6 w-48 bg-darkslateblue border border-gray-200 rounded-md overflow-hidden z-10 hidden group-hover:block">
//                                 {item.submenu.map((subItem, subIndex) => (
//                                     <a href={subItem.link} key={subIndex} className="block px-4 py-2 text-sm capitalize text-white hover:bg-coral hover:text-white">{subItem.name}</a>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </nav>
//             <div className="xl:flex flex-row md:flex-row hidden items-center gap-[1rem]">
//                 <div className="">
//                     <a href={loginLink} className="capitalize font-medium no-underline text-gray-200">Log in</a>
//                 </div>
//                 <div className="bg-coral w-[8.38rem] h-[3rem] p-[0.63rem] box-border flex flex-row items-center justify-center">
//                     <a href={signupLink} className="capitalize font-medium no-underline text-white">Sign up</a>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Menu;

import { Icon } from "@iconify/react";

const Menu = ({ menuItems, loginLink, signupLink }) => {
    return (
        <>
            <nav className={`xl:flex flex-row items-start w-fit justify-start gap-[3rem] text-[1rem] font-noto-sans md:flex-row md:py-8 md:gap-8 hidden`}>
                {menuItems.map((item, index) => (
                    <div className="group relative h-fit" key={index}>
                        <a href={item.link} className="capitalize font-medium no-underline py-4 text-gray-200 flex items-center">{item.name}
                            {item.submenu && <Icon className='mx-2 text-xs' icon="ep:arrow-up-bold" rotate={2} />}
                        </a>
                        {item.submenu && (
                            <div className="absolute left-0 w-48 bg-darkslateblue border border-gray-200 rounded-md overflow-hidden z-10 hidden group-hover:block">
                                {item.submenu.map((subItem, subIndex) => (
                                    <a href={subItem.link} key={subIndex} className="block px-4 py-2 text-sm capitalize text-white hover:bg-coral hover:text-white">{subItem.name}</a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
            <div className="xl:flex flex-row md:flex-row hidden items-center gap-[1rem]">
                <div className="">
                    <a href={loginLink} className="capitalize font-medium no-underline text-gray-200">Log in</a>
                </div>
                <div className="bg-coral w-[8.38rem] h-[3rem] p-[0.63rem] box-border flex flex-row items-center justify-center">
                    <a href={signupLink} className="capitalize font-medium no-underline text-white">Sign up</a>
                </div>
            </div>
        </>
    );
}

export default Menu;