// src/SearchBar.js
import React from "react";

export interface SearchBarProps {
  onSearch: () => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="bg-foreground">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 bg-foreground px-4 py-2 rounded-lg focus:outline-none focus:border-background"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
