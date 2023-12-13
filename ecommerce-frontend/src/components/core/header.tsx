import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchBar from "./search-bar";
import { UserNav } from "../core/user-nav";

export interface headerProps {
  imgUrl?: string;
}

export default function Header({ imgUrl }: headerProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log(searchTerm);

    // Implement your search logic here if needed
  };

  return (
    <div className="bg-foreground flex justify-between items-center p-4">
      <div className="font-dancing leading-10 font-semibold text-3xl">
        Ecomm
      </div>
      <div className="flex space-x-4 text-background items-center">
        <nav className="cursor-pointer hidden lg:block">Products</nav>
        <nav className="cursor-pointer hidden lg:block">Cart</nav>
        <SearchBar onSearch={handleSearch} />
        <UserNav imgUrl={imgUrl} />
      </div>
    </div>
  );
}
