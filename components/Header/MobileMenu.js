// import { Icon } from '@iconify/react';
// import MenuItem from './MenuItem';

// const MobileMenu = ({ handleMenuBtn, isMenuOpen, menuItems, loginLink, signupLink }) => {
//     return (
//         <div className="w-full flex flex-col xl:hidden">
//             <button className="uppercase flex items-center justify-between text-white bg-coral py-2 px-4 w-full text-lg" onClick={handleMenuBtn}>
//                 Menu
//                 <Icon className={`text-3xl`} icon='ci:hamburger-md' />
//             </button>
//             <div className={`menuContainer ${isMenuOpen ? 'menuOpen' : ''}`}>
//                 <nav className={`flex flex-col `}>
//                     {menuItems.map((item, index) => (
//                         <MenuItem item={item} key={index} />
//                     ))}
//                     <a href={loginLink} className="uppercase font-extrabold no-underline py-2 px-4 menuItem">Log in</a>
//                     <a href={signupLink} className="uppercase font-extrabold no-underline py-2 px-4 menuItem">Sign up</a>
//                 </nav>
//             </div>
//         </div>
//     );
// }

// export default MobileMenu;

import { Icon } from '@iconify/react';
import MenuItem from './MenuItem';

const MobileMenu = ({ handleMenuBtn, isMenuOpen, menuItems, loginLink, signupLink }) => {
    return (
        <div className="w-full flex flex-col xl:hidden">
            <button className="uppercase flex items-center justify-between text-white bg-coral py-2 px-4 w-full text-lg" onClick={handleMenuBtn}>
                Menu
                <Icon className={`text-3xl`} icon='ci:hamburger-md' />
            </button>
            <div className={`menuContainer ${isMenuOpen ? 'menuOpen' : ''}`}>
                <nav className={`flex flex-col `}>
                    {menuItems.map((item, index) => (
                        <MenuItem item={item} key={index} />
                    ))}
                    <a href={loginLink} className="uppercase font-extrabold no-underline py-2 px-4 menuItem">Log in</a>
                    <a href={signupLink} className="uppercase font-extrabold no-underline py-2 px-4 menuItem">Sign up</a>
                </nav>
            </div>
        </div>
    );
}

export default MobileMenu;