'use client';
import './globals.css';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Menu from '@/components/Header/Menu';
import MobileMenu from '@/components/Header/MobileMenu';

const menuItems = [
    { name: "Home", link: "/", icon: "mdi:home" },
    { 
        name: "About Us", 
        link: "/about-us", 
        submenu: [
            { name: "Faculty Advisory Board", link: "/about-us/faculty-advisory-board" },
            { name: "Committees", link: "/about-us/committees" },
            { name: "Contact Us", link: "/about-us/contact-us" },
            { name: "Privacy Policy", link: "/about-us/privacy-policy" },
            { name: "Terms & Conditions", link: "/about-us/terms-and-conditions" },
            { name: "Refund Policy", link: "/about-us/refund-policy" },
        ],
    },
    {
        name: "E & ICT Academies",
        link: "/e-ict-academies",
        submenu: [
            { name: "IIT Kanpur", link: "https://ifacet.iitk.ac.in/" },
            { name: "IIT Roorkee", link: "https://eict.iitr.ac.in/" },
            { name: "IIT Guwahati", link: "https://www.iitg.ac.in/eictacad/" },
            { name: "NIT Warangal", link: "https://nitw.ac.in/eict/" },
            { name: "NIT Patna", link: "https://nitp.ac.in/" },
            { name: "MNIT Jaipur", link: "https://mnit.ac.in/" },
            { name: "IIITDM Jabalpur", link: "https://www.iiitdmj.ac.in/ict.iiitdmj.ac.in/" },
        ],
    },
    {
        name: "Partners",
        link: "/partners",
        submenu: [
            { name: "Government Institutions", link: "/partners/government-institutions" },
            { name: "Corporates", link: "/partners/corporates" },
        ],
    },
    { name: "Trainings", link: "/trainings",
        submenu: [
            { name: "DoT", link: "/trainings/dot" },
            { name: "SAIL", link: "/trainings/sail" },
            { name: "NTPC", link: "/trainings/ntpc" },
            { name: "Others", link: "/trainings/others" },
        ],
    },
    { 
        name: "Courses", 
        link: "/courses",  
        submenu: [
            { name: "Online Live Programs", link: "/courses/online-live-programs" },
            { name: "Self-Paced Programs", link: "/courses/self-paced-programs" },
            { name: "Summer Training Programs", link: "/courses/summer-training-programs" },
            { name: "Advanced Certification Programs", link: "/courses/advanced-certification-programs" },
            { name: "Professional Certification Programs", link: "/courses/professional-certification-programs" },
        ],
    },
    { name: "Knowledge Hub", link: "/knowledge-hub" },
    { name: "Others", link: "/others",
        submenu: [
            { name: "Submit EOI", link: "/others/submit-eoi" },
        ],
    },
];

export default function RootLayout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuBtn = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <html lang="en">
            <body>
                {/* <header className='bg-white w-full text-left text-[2rem] text-gray-200 font-oswald'>
                    <div className="flex justify-center px-8 xs:px-12 sm:px-16 h-fit">
                        <Image className="my-8 hidden md:block" src="/ifacet-header-1.png" alt="ifacet-header" width={1170} height={112} prority="true" />
                        <Image className="my-4 md:hidden w-full" src="/logo.png" alt="ifacet-header-mobile" width={451} height={181} prority="true" />
                    </div>
                    <div id='sticky-header' className='z-20 bg-white px-4 xs:px-12 sm:px-20 lg:px-28 xl:px-16 hxl:px-28 2xl:px-64 3xl:px-96 text-[1rem] text-aliceblue font-noto-sans flex justify-between items-center xl:sticky xl:top-0 shadow-custom-dark header-backdrop'>
                        <MobileMenu handleMenuBtn={handleMenuBtn} isMenuOpen={isMenuOpen} menuItems={menuItems} />
                    </div> */}
                    {children}
                {/* </header> */}
            </body>
        </html>
    )
}