import React from "react";
import { Button } from "@/components/ui/button";

export interface CategoryPreviewProps {
  categoryName: string;
  categoryIcon: any;
}

export function CategoryPreview({
  categoryIcon,
  categoryName,
}: CategoryPreviewProps) {
  return (
    <Button
      variant="outline"
      className="bg-foreground flex flex-row border-orange-700 p-8 text-orange-700 hover:text-orange-700"
    >
      {categoryIcon}
      <p className="ml-2">{categoryName}</p>
    </Button>
  );
}
