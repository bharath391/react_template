import { AppSidebar } from "./components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./components/mode-toggle";
import { Share, Share2, Share2Icon, Star } from "lucide-react";
import Content from "./components/Content";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "350px",
            } as React.CSSProperties
          }
        >
          <AppSidebar />
          <SidebarInset>
            <header className="sticky top-0 z-50 flex shrink-0 items-center gap-2 border-b p-4 bg-background">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <ModeToggle />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="border-1 p-1 m-0 ml-[-1] rounded-md dark:bg-[#101216]">
                <Share2 />
              </div>
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="border-1 p-1 m-0 ml-[-1] rounded-md dark:bg-[#101216]">
                <Star />
              </div>
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Inbox</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <div>
              <Content />
            </div>
          </SidebarInset>
        </SidebarProvider>

        <div>
          <h1>COntetn</h1>
          <p>content goes here</p>
        </div>
      </div>
    </ThemeProvider>
  );
}
