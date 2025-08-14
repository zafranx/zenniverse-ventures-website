import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const HeaderSection = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Dynamic navigation items with routes
  const navItems = [
    {
      label: "Home",
      path: "/",
      active: location.pathname === "/",
    },
    {
      label: "About",
      path: "/about",
      active: location.pathname === "/about",
    },
    {
      label: "Services",
      path: "/services",
      active: location.pathname === "/services",
    },
    {
      label: "Contact",
      path: "/contact",
      active: location.pathname === "/contact",
    },
  ];

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Handle navigation and close mobile menu
  const handleNavClick = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  // Handle logo click
  const handleLogoClick = () => {
    navigate("/");
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-[0px_4px_5px_#00000026]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-[120px] py-2 md:py-[7px] h-16 md:h-20 lg:h-[100px]">
        <div className="flex items-center gap-4 md:gap-8 lg:gap-16 xl:gap-[120px]">
          {/* Logo with navigation */}
          <img
            className="w-auto h-12 transition-transform duration-200 cursor-pointer md:h-16 lg:h-20 hover:scale-105"
            alt="Zeniverse Ventures Logo"
            src="/image-2-1.png"
            onClick={handleLogoClick}
          />

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-1 md:gap-2.5">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    asChild
                    className={`inline-flex items-center justify-center px-1.5 md:px-2.5 py-1 [font-family:'Poppins',Helvetica] text-sm md:text-base cursor-pointer transition-colors duration-200 hover:text-[#225f8c] ${
                      item.active
                        ? "font-medium text-[#225f8c]"
                        : "font-normal text-[#00000080]"
                    }`}
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <Link to="/contact">
          <Button className="hidden md:inline-flex px-3 md:px-6 py-2 md:py-3 bg-[#ededed] rounded-[5px] hover:bg-[#e0e0e0] transition-colors duration-200">
            <span className="font-bold text-sm md:text-base [font-family:'Poppins',Helvetica] text-[#255d86]">
              Connect Now
            </span>
          </Button>
        </Link>

        {/* Mobile menu icon (only on small devices) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[5px] bg-[#ededed] hover:bg-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#225f8c] focus:ring-offset-2 transition-colors duration-200"
        >
          {open ? (
            <X className="w-5 h-5 text-[#255d86]" />
          ) : (
            <Menu className="w-5 h-5 text-[#255d86]" />
          )}
        </button>
      </div>

      {/* Mobile Menu (slide-down) */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 border-t border-[#00000014] bg-white">
          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.path)}
                className={`text-left px-2 py-3 [font-family:'Poppins',Helvetica] text-base transition-colors duration-200 hover:text-[#225f8c] ${
                  item.active
                    ? "font-medium text-[#225f8c]"
                    : "font-normal text-[#000000CC]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-2">
            <Link to="/contact">
              <Button
                className="w-full px-4 py-3 bg-[#ededed] rounded-[5px] hover:bg-[#e0e0e0] transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                <span className="[font-family:'Poppins',Helvetica] font-bold text-[#255d86]">
                  Connect Now
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

// import React from "react";
// import { Button } from "../../../../components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from "../../../../components/ui/navigation-menu";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// export const HeaderSection = (): JSX.Element => {
//   const [open, setOpen] = React.useState(false);

//   const navItems = [
//     { label: "Home", active: true },
//     { label: "About", active: false },
//     { label: "Services", active: false },
//     { label: "Contact", active: false },
//   ];

//   React.useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   React.useEffect(() => {
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setOpen(false);
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-[0px_4px_5px_#00000026]">
//       {/* Top bar */}
//       <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-[120px] py-2 md:py-[7px] h-16 md:h-20 lg:h-[100px]">
//         <div className="flex items-center gap-4 md:gap-8 lg:gap-16 xl:gap-[120px]">
//           <img
//             className="w-auto h-12 cursor-pointer md:h-16 lg:h-20"
//             alt="Logo"
//             src="/image-2-1.png"
//             onClick={() => (window.location.href = "/")}
//           />

//           {/* Desktop Navigation */}
//           <NavigationMenu className="hidden md:block">
//             <NavigationMenuList className="flex gap-1 md:gap-2.5">
//               {navItems.map((item, index) => (
//                 <NavigationMenuItem key={index}>
//                   <NavigationMenuLink
//                     className={`inline-flex items-center justify-center px-1.5 md:px-2.5 py-1 [font-family:'Poppins',Helvetica] text-sm md:text-base ${
//                       item.active
//                         ? "font-medium text-[#225f8c]"
//                         : "font-normal text-[#00000080]"
//                     }`}
//                     href="#"
//                   >
//                     {item.label}
//                   </NavigationMenuLink>
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         {/* Desktop CTA */}
//         <Link to="/contact">
//           <Button className="hidden md:inline-flex px-3 md:px-6 py-2 md:py-3 bg-[#ededed] rounded-[5px] hover:bg-[#e0e0e0]">
//             <span className="font-bold text-sm md:text-base [font-family:'Poppins',Helvetica] text-[#255d86]">
//               Connect Now
//             </span>
//           </Button>
//         </Link>

//         {/* Mobile menu icon (only on small devices) */}
//         <button
//           type="button"
//           aria-label={open ? "Close menu" : "Open menu"}
//           aria-expanded={open}
//           aria-controls="mobile-menu"
//           onClick={() => setOpen((v) => !v)}
//           className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[5px] bg-[#ededed] hover:bg-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#225f8c] focus:ring-offset-2"
//         >
//           {open ? (
//             <X className="w-5 h-5 text-[#255d86]" />
//           ) : (
//             <Menu className="w-5 h-5 text-[#255d86]" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu (slide-down) */}
//       <div
//         id="mobile-menu"
//         className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
//           open ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 py-3 border-t border-[#00000014]">
//           <nav className="flex flex-col">
//             {navItems.map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 onClick={() => setOpen(false)}
//                 className={`px-2 py-3 [font-family:'Poppins',Helvetica] text-base ${
//                   item.active
//                     ? "font-medium text-[#225f8c]"
//                     : "font-normal text-[#000000CC]"
//                 }`}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           {/* Mobile CTA */}
//           <div className="mt-2">
//             <Button className="w-full px-4 py-3 bg-[#ededed] rounded-[5px] hover:bg-[#e0e0e0]">
//               <span className="[font-family:'Poppins',Helvetica] font-bold text-[#255d86]">
//                 Connect Now
//               </span>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
