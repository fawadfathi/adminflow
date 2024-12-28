"use client";

import { CircleUser } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import CustomSidebar from "@/components/custom-sidebar";
import { logout } from "@/lib/actions";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="md:w-64 lg:w-64 bg-gray-100">
        <CustomSidebar />
      </div>
      <div className="w-full">
        <div className="bg-gray-100 h-14 w-full flex justify-end pr-3 pt-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-violet-600 hover:bg-violet-500"
              >
                <CircleUser className="h-5 w-5 text-violet-100" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button
                  onClick={() => logout()}
                  className="bg-violet-600 w-full hover:bg-violet-500 text-xs"
                >
                  LogOut
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="w-full max-w-6xl px-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
