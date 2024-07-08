// "use client";
// import React from "react";
// import { sidebarLinks } from "../../constants";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// const Sidebar = () => {
//   const pathName = usePathname();
//   return (
//     <section className="sticky left-0 flex bg-slate-100 top-0 h-screen w-fit flex-col justify-between p-6 pt-20 max-sm:hidden lg:w-[264px">
//       <div className="flex flex- flex-col gap-6">
//         {sidebarLinks.map((link, idx) => {
//           const isActive = pathName === link.route;
//           return (
//             <Link
//               href={link.route}
//               key={idx}
//               className={cn(
//                 "flex gap-4 items-center p-4 rounded-lg justify-start",
//                 {
//                   "bg-slate-200": isActive,
//                 }
//               )}
//             >
//               {React.createElement(link.imgUrl)}
//               <p className="text-lg font-semibold max-lg:hidden">
//                 {link.label}
//               </p>
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Sidebar;

"use client";

import React from "react";
import { sidebarLinks } from "../../constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <section className="sticky left-0 flex bg-slate-200 dark:bg-gray-800 top-0 h-screen w-fit flex-col justify-between p-6 pt-20 max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link, idx) => {
          const isActive = pathName === link.route;
          return (
            <Link
              href={link.route}
              key={idx}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-slate-100 dark:bg-gray-700": isActive,
                }
              )}
            >
              {React.createElement(link.imgUrl, {
                className: "text-gray-700 dark:text-gray-200",
              })}
              <p className="text-lg font-semibold max-lg:hidden text-gray-800 dark:text-gray-200">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </section>
  );
};

export default Sidebar;
