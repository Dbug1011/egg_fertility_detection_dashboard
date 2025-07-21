"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Square,
  Plus,
  MoreHorizontal,
  Camera,
  Heart,
  Trash,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReportChart } from "@/components/report-chart";
import { DetectionChart } from "@/components/detection-chart";

export function DashboardContent() {
  const [timeRange, setTimeRange] = useState("this week");

  return (
    <div className="flex-1 overflow-auto">
      <header className="flex justify-between items-center p-6 border-b border-gray-200">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">
          Dashboard Management
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Play className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Pause className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Square className="h-5 w-5" />
            </Button>
          </div>
          <Button
            variant="default"
            size="default"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-lg"
          >
            <Plus className="mr-2 h-4 w-4" /> Start Scanning
          </Button>
        </div>
      </header>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2 border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="">Report and Analysis</CardTitle>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="today" className="">
                  Today
                </SelectItem>
                <SelectItem value="this week" className="">
                  This week
                </SelectItem>
                <SelectItem value="this month" className="">
                  This month
                </SelectItem>
                <SelectItem value="this year" className="">
                  This year
                </SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="">
            <ReportChart />
            <div className="flex gap-4 mt-4">
              <Button
                variant="outline"
                size="default"
                className="flex-1 bg-yellow-300 hover:bg-yellow-400 border-yellow-400 text-black font-medium"
              >
                <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                batch 1
              </Button>
              <Button
                variant="outline"
                size="default"
                className="flex-1 bg-orange-300 hover:bg-orange-400 border-orange-400 text-black font-medium"
              >
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                batch 2
              </Button>
              <Button
                variant="outline"
                size="default"
                className="flex-1 bg-orange-400 hover:bg-orange-500 border-orange-500 text-black font-medium"
              >
                <span className="w-2 h-2 bg-orange-700 rounded-full mr-2"></span>
                batch 3
              </Button>
              <Button
                variant="default"
                size="default"
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-medium"
              >
                Details
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="">Detecting...</CardTitle>
            <Button variant="ghost" size="icon" className="">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="">
            <DetectionChart />

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-2">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mt-1.5"></span>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Fertile</h4>
                    <span className="text-orange-500">70%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Almost perfect on the assignment, maintain and continue to
                    grow!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="w-3 h-3 bg-orange-400 rounded-full mt-1.5"></span>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Infertile</h4>
                    <span className="text-orange-500">70%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Almost halfway through billing, don&apos;t give up and never
                    surrender!
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-medium">Total Eggs Scanned</h4>
                <span className="text-orange-500 font-medium">100</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 border-gray-200">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-12">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <Camera className="h-8 w-8" />
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="5"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="9" cy="10" r="1" fill="currentColor" />
                      <circle cx="15" cy="10" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <Settings className="h-8 w-8" />
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="">
                  <Settings className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="">
                  <Trash className="h-5 w-5" />
                </Button>
                <Button
                  variant="default"
                  size="default"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  Warnings
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
