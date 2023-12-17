import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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
import "react-toastify/dist/ReactToastify.css";

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState("");
  const notify = () => toast.dark("Please select text to Search!");
  return (
    <div className="bg-darkBlack h-full flex items-center">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search Here like Nike Mens Free Rn 2018 Running Shoe..."
          className="w-full border border-none border-gray-300 bg-darkGray px-4 py-2 rounded-3xl focus:bg-darkGray focus:outline-none focus:border-background focus:outline-background focus:outline-1"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 hover:bg-darkBlack focus:outline-1">
          <Button
            onClick={() => {
              if (searchText === "") {
                notify();
              }
              onSearch(searchText);
            }}
            className="cursor-pointer hover:bg-transparent hover:outline-1 bg-transparent"
          >
            <span>
              <IconSearch />
            </span>
          </Button>
          <ToastContainer position="bottom-right" />
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
