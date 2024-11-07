"use client"

import { Calendar, Home, Inbox, LogOut, Search} from "lucide-react"
// import { getAuth, signOut } from "firebase/auth";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "@/app/firebase/firebaseConfig";
import { useRouter } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Logout",
    url: "/",
    icon: LogOut,
  },
]

export function AppSidebar() {
  const router = useRouter();
  // const logout = () => {
  //   signOut(auth).then(() => {
  //     router.push('/');
  //   }).catch((error) => {
  //     console.log(error);
  //   });    
  // }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/");
      }
    });
  })

  return (
    <SidebarProvider>
    <Sidebar>
      {/* <button onClick={logout} className="flex items-center gap-2"><LogOut/> Logout</button> */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </SidebarProvider>
  )
}
