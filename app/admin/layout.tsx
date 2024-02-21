
import SidebarAdmin from "@/components/Sidebar/SidebarAdmin"
import Header from "@/components/Header"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full min-h-screen flex flex-row gap-5 
    bg-gradient-to-tr from-[#380036]  via-[#043a79] to-[#0cba5a]
    ">

      <SidebarAdmin />
      <div className="flex flex-col w-10/12 h-full gap-5 items-center ">
        {/*         <Header /> */}
        {children}
      </div>
    </div>
  );
}
