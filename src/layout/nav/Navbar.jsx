import { Bell, Search } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import CustomBreadcrumb from "@/theme/override/Breadcrumb"
import { useSelector } from "react-redux"
import useMediaQueries from '../../hooks/useMediaQueries'

export default function Navbar() {
  const { isMd } = useMediaQueries();
  const { sidebarOpen } = useSelector(state => state.Auth)


  return (
    <nav className="w-full shadow-sm transition-all duration-500 ease-in-out" style={{
      paddingLeft: !isMd ? 0 : sidebarOpen ? 255 : 47
    }}>
      <div className="flex h-16 items-center justify-between gap-4">
        <div id="breadcrumb-portal" className="ml-5"></div>

        {/* Search container with max width to prevent overflow */}
        
        {
          isMd &&
          <div className="flex-1 flex justify-center max-w-[800px] mx-auto px-4">
            <div className="relative w-full max-w-[360px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input type="text" placeholder="Search" className="pl-9 h-10 w-full" />
            </div>
          </div>
        }

        {/* Right side components with fixed position */}
        <div className="flex items-center gap-3 px-6 shrink-0">
          {/* Notifications */}
          <div className="relative">
            <Button size="icon" variant="ghost" className="[&_svg]:size-4 text-muted-foreground">
              <Bell className="h-4 w-4" />
            </Button>
            <Badge className="absolute -top-0.5 -right-0.5 w-5 h-5 flex items-center justify-center p-0.5">2</Badge>
          </div>

          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>My Profile</DropdownMenuItem>
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <Separator className="my-1" />
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

