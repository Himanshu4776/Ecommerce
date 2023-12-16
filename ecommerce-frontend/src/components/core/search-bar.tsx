// src/SearchBar.js
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { IconFilter } from "@/lib/icons/icon-filter";
import { IconSearch } from "@/lib/icons/icon-search";

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState<string>("");
  return (
    // <div className="bg-foreground flex">
    //   <input
    //     type="text"
    //     placeholder="Search Your Product Here..."
    //     className="grow border border-none border-gray-300 bg-darkGray px-4 py-2 rounded-lg focus:bg-foreground focus:outline-none focus:border-background"
    //     onChange={(e) => onSearch(e.target.value)}
    //   />
    //   <DropdownMenu>
    //     <DropdownMenuTrigger className="bg-darkGray rounded-xl p-2">
    //       Open
    //     </DropdownMenuTrigger>
    //     <DropdownMenuContent>
    //       <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //       <DropdownMenuSeparator />
    //       <DropdownMenuItem>Profile</DropdownMenuItem>
    //       <DropdownMenuItem>Billing</DropdownMenuItem>
    //       <DropdownMenuItem>Team</DropdownMenuItem>
    //       <DropdownMenuItem>Subscription</DropdownMenuItem>
    //     </DropdownMenuContent>
    //   </DropdownMenu>
    // </div>

    // -----------------------------------------
    // <div className="bg-darkBlack h-full flex">
    //   <input
    //     type="text"
    //     placeholder="Search Here like Nike Mens Free Rn 2018 Running Shoe..."
    //     className="grow border border-none border-gray-300 bg-darkGray px-4 py-2 rounded-3xl focus:bg-darkGray focus:outline-none focus:border-background focus:outline-background focus:outline-1"
    //     onChange={(e) => onSearch(e.target.value)}
    //   >
    //     <IconSearch />
    //   </input>
    //   <div className="ml-2">
    //     {/* Add margin to the left */}
    //     <DropdownMenu>
    //       <DropdownMenuTrigger className="bg-darkGray text-gray-400 rounded-3xl py-2 px-4 flex items-center">
    //         <p className="pr-1">filter</p>
    //         <IconFilter />
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent className="bg-foreground text-background">
    //         <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //         <DropdownMenuSeparator />
    //         <DropdownMenuItem>Profile</DropdownMenuItem>
    //         <DropdownMenuItem>Billing</DropdownMenuItem>
    //         <DropdownMenuItem>Team</DropdownMenuItem>
    //         <DropdownMenuItem>Subscription</DropdownMenuItem>
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //   </div>
    // </div>

    // ------------------------------------------------
    <div className="bg-darkBlack h-full flex items-center">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search Here like Nike Mens Free Rn 2018 Running Shoe..."
          className="w-full border border-none border-gray-300 bg-darkGray px-4 py-2 rounded-3xl focus:bg-darkGray focus:outline-none focus:border-background focus:outline-background focus:outline-1"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Button
            onClick={(e) => {
              console.log("text", searchText);
              onSearch(searchText);
            }}
            className="cursor-pointer bg-transparent"
          >
            <IconSearch />
          </Button>
        </div>
      </div>
      <div className="ml-2">
        {/* Add margin to the left */}
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-darkGray text-gray-400 rounded-3xl py-2 px-4 flex items-center">
            <p className="pr-1">filter</p>
            <IconFilter />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-foreground text-background">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
