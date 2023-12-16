import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "../components/ui/tabs";

import { Separator } from "../components/ui/separator";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { trendyProducts, productsForYou } from "../lib/data/product-data";
import { AlbumArtwork } from "../components/core/album-art-work";
import { IconPc } from "@/lib/icons/icon-pc";
import { IconCloset } from "@/lib/icons/icon-closet";
import { IconFood } from "@/lib/icons/icon-food";
import { IconBag } from "@/lib/icons/icon-bag";
import { IconStore } from "@/lib/icons/icon-store";
import { CategoryPreview } from "./category-preview";

export default function ProductsPreview() {
  return (
    <Tabs defaultValue="music" className="h-full space-y-6">
      <TabsContent value="music" className="border-none p-0 outline-none">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Shop Now</h2>
            <p className="text-sm text-muted-foreground">
              Top picks for you. Updated daily.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {trendyProducts.map((album) => (
                <AlbumArtwork
                  key={album.name}
                  album={album}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        {/* category section */}
        <div className="flex flex-col pt-8">
          <h2 className="text-2xl text-left font-semibold tracking-tight">
            Shop by Category
          </h2>
          <p className="text-sm text-left text-muted-foreground">
            Shop using the best suitable category for you.
          </p>
          <Separator className="my-4" />
          <ScrollArea>
            <div className="flex justify-around py-4">
              <CategoryPreview
                categoryIcon={<IconStore />}
                categoryName="All Product"
              />
              <CategoryPreview
                categoryIcon={<IconPc />}
                categoryName="Electronics"
              />
              <CategoryPreview
                categoryIcon={<IconCloset />}
                categoryName="Fashion"
              />
              <CategoryPreview
                categoryIcon={<IconFood />}
                categoryName="Dining"
              />
              <CategoryPreview
                categoryIcon={<IconBag />}
                categoryName="Daily Needs"
              />
            </div>
          </ScrollArea>
        </div>
        {/* category section end */}
        <div className="mt-6 flex flex-col space-y-1">
          <h2 className="text-2xl text-left font-semibold tracking-tight">
            Products for You
          </h2>
          <p className="text-sm text-left text-muted-foreground">
            Your Recently visited and Wishlisted products. Updated daily.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {productsForYou.map((album) => (
                <AlbumArtwork
                  key={album.name}
                  album={album}
                  className="w-[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </TabsContent>
      <Button variant="secondary">view All Products</Button>
    </Tabs>
  );
}
