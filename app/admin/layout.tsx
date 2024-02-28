"use client"
import SidebarAdmin from "@/components/Sidebar/SidebarAdmin"
import { useRouter } from "next/navigation";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter()


  /*  if (userRolesFromCookie || "Admin") {
     return router.push("/map")
 
   } */
  return (
    <div className="w-full h-full min-h-screen flex flex-row gap-5 
    bg-gradient-to-tr from-[#380036]  via-[#043a79] to-[#0cba5a]
    ">

      <SidebarAdmin />
      <div className="flex flex-col w-10/12 min-h-max h-full gap-5 items-center ">
        {/*         <Header /> */}
        {children}
      </div>
    </div>
  );

}


