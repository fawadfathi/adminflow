"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const SettingsForm = () => {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Settings</h2>
      </div>
      <Separator />

      <form className="w-full space-y-8">
        <div className="gap-8 grid md:grid-cols-3 lg:block max-w-xl space-y-4 mt-20">
          <div className="space-x-5">
            <Input
              id="fullname"
              name="fullname"
              placeholder="Full Name"
              className="pl-1 placeholder:text-xs w-full max-w-7xl h-10 border bg-gray-100 focus:bg-white rounded-md placeholder:text-black"
            />
          </div>
          <div className="space-x-5">
            <input
              id="email"
              name="email"
              placeholder="Email"
              className="pl-1 placeholder:text-xs w-full max-w-7xl h-10 border bg-gray-100 focus:bg-white rounded-md placeholder:text-black"
            />
          </div>
          <div className="space-x-5">
            <input
              id="username"
              name="username"
              placeholder="Username"
              className="pl-1 placeholder:text-xs w-full max-w-7xl h-10 border bg-gray-100 focus:bg-white rounded-md placeholder:text-black"
            />
          </div>
          <div className="space-x-5">
            <Textarea
              className="bg-gray-100 focus:bg-white placeholder:text-black placeholder:text-xs h-44"
              placeholder="Bio"
            />
          </div>
        </div>
        <Button
          className="ml-auto bg-violet-600 hover:bg-violet-500"
          type="submit"
        >
          Save
        </Button>
      </form>
    </div>
  );
};
