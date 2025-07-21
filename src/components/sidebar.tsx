"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
  LayoutGrid,
  FolderOpen,
  Database,
  BarChart2,
  Users,
  Heart,
  Download,
  Trash2,
} from "lucide-react";

const navItems = [
  { icon: LayoutGrid, label: "Dashboard", href: "/", active: true },
  { icon: FolderOpen, label: "My Project", href: "/project" },
  { icon: Database, label: "Data", href: "/data" },
  { icon: BarChart2, label: "Statistics", href: "/statistics" },
  { icon: Users, label: "Team", href: "/team" },
];

const bottomNavItems = [
  { icon: Heart, label: "Saved", href: "/saved" },
  { icon: Download, label: "Export", href: "/export" },
  { icon: Trash2, label: "Trash", href: "/trash" },
];

export function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-[270px] h-full bg-[#1a1a1a] text-white flex flex-col">
      <div className="p-8">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">🥚</span>
          </div>
          <span className="text-xl font-bold text-white">EggSmart</span>
        </Link>

        <div className="relative mb-8">
          <Input
            type="text"
            placeholder="Search"
            className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-gray-500 pl-10 rounded-lg focus:border-orange-500 focus:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        </div>

        <nav className="space-y-3">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>
      </div>

      <div className="mt-auto p-8 border-t border-[#3a3a3a]">
        <nav className="space-y-3">
          {bottomNavItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>
      </div>

      <div className="p-8 border-t border-[#3a3a3a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">KR</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              Karis Ruth Jumawan
            </div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ item }: { item: (typeof navItems)[0] }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "relative flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 text-sm",
        item.active
          ? "text-orange-400 bg-orange-400/15 font-medium"
          : "text-gray-400 hover:text-gray-200 hover:bg-[#2a2a2a] font-normal"
      )}
    >
      <Icon className="h-4 w-4 flex-shrink-0" />
      <span>{item.label}</span>
      {item.active && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400 rounded-r-sm" />
      )}
    </Link>
  );
}
