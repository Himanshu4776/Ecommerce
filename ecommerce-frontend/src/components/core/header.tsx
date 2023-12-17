import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchBar from "./search-bar";
import { UserNav } from "../core/user-nav";
import { IconCart } from "@/lib/icons/icon-cart";
import { IconStore } from "@/lib/icons/icon-store";
import { IconWishlist } from "@/lib/icons/icon-wishlist";

export interface headerProps {
  imgUrl?: string;
}

export default function Header({ imgUrl }: headerProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    console.log(searchTerm);

    // Implement your search logic here if needed
  };

  return (
    <>
      <div className="pt-4 pl-4 pr-4 pb-2">
        <div className="bg-foreground flex justify-between items-center">
          <div className="font-dancing leading-10 font-semibold text-3xl">
            Ecomm
          </div>
          <div className="flex space-x-4 text-background items-center">
            <nav className="cursor-pointer hidden lg:block">Products</nav>
            <nav className="cursor-pointer hidden lg:block">Categories</nav>
            <nav className="cursor-pointer hidden lg:block">Sale</nav>
            <nav className="cursor-pointer hidden lg:block">
              <IconWishlist />
            </nav>
            <nav className="cursor-pointer hidden lg:block">
              <IconCart />
            </nav>
            <UserNav imgUrl={imgUrl} />
          </div>
        </div>
      </div>
      <div className="bg-darkBlack p-4">
        <SearchBar onSearch={handleSearch} />
      </div>
    </>
  );
}
