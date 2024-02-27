"use client"
import Cookies from 'js-cookie';

import SidebarUser from "@/components/Sidebar/SidebarUser"
import { useRouter } from 'next/navigation';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()
  const userIdFromCookie = Cookies.get('userId');
  console.log(userIdFromCookie)

  if (!userIdFromCookie) {
    return router.push("/")
  }


  return (
    <div className="w-full h-max min-h-screen flex flex-row gap-5 text-center 
    bg-gradient-to-tr from-[#380036]  via-[#043a79] to-[#0cba5a]
    ">
      <SidebarUser />
      <div className="flex flex-col w-10/12 h-full gap-5 items-center text-center justify-start">
        {/*  <Header /> */}
        {children}
      </div>
    </div>
  );
}

