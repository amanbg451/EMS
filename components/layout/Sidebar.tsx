"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Calendar, 
  Handshake, 
  UserPlus,
  BarChart3,
  PlusCircle,
  MessageSquare,
  FolderOpen,
  UserCog,
  Menu,
  X,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const electionMenu = [
  { name: "Dashboard", href: "/election/dashboard", icon: LayoutDashboard },
  { name: "Complaint", href: "/election/complaint", icon: FileText },
  { name: "Voter", href: "/election/voter", icon: Users },
  { name: "Request Meeting", href: "/election/request-meeting", icon: Calendar },
  { name: "Volunteer", href: "/election/volunteer", icon: Handshake },
  { name: "Voter Registration", href: "/election/voter-registration", icon: UserPlus },
];

const surveyMenu = [
  { name: "Dashboard", href: "/survey/dashboard", icon: BarChart3 },
  { name: "Create Survey", href: "/survey/create-survey", icon: PlusCircle },
  { name: "Response", href: "/survey/response", icon: MessageSquare },
  { name: "Project ID", href: "/survey/project-id", icon: FolderOpen },
  { name: "User", href: "/survey/user", icon: UserCog },
];

export function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();

  const isElectionActive = (href: string) => pathname?.startsWith(href);
  const isSurveyActive = (href: string) => pathname?.startsWith(href);

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300",
          open ? "w-64" : "w-20"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-slate-200 dark:border-slate-800">
          <Link href="/election/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
              ES
            </div>
            {open && (
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                ElectionSaaS
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Election Management */}
          <div>
            {open && (
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Election Management
              </p>
            )}
            <ul className="space-y-1">
              {electionMenu.map((item) => {
                const Icon = item.icon;
                const isActive = isElectionActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      )}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {open && <span>{item.name}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Survey Management */}
          <div>
            {open && (
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Survey Management
              </p>
            )}
            <ul className="space-y-1">
              {surveyMenu.map((item) => {
                const Icon = item.icon;
                const isActive = isSurveyActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      )}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {open && <span>{item.name}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Logout */}
        <div className="border-t border-slate-200 dark:border-slate-800 p-4">
          <button
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-all"
            )}
            onClick={() => {
              // TODO: Logout logic
              window.location.href = "/login";
            }}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {open && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}