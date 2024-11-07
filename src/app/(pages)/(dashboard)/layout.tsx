import { AppSidebar } from '@/components/core/sidebar';
import React from 'react'

interface LayoutProps {
    children : React.ReactNode;
}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
      {children}
      <AppSidebar />
    </div>
  )
}

export default Layout
