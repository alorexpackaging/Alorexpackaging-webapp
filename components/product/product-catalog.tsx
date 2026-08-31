"use client";

import * as React from "react";
import { PackageSearch } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { ProductCard } from "@/components/product/product-card";
import { ProductFilters } from "@/components/product/product-filters";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data/products";

type ProductCatalogProps = {
  products: Product[];
  useCases: string[];
};

/**
 * Owns the /products filter state (search text + use-case tags) and
 * renders the filtered grid. Everything about how a single product
 * looks lives in ProductCard — this only ever decides which ones show.
 */
function ProductCatalog({ products, useCases }: ProductCatalogProps) {
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelected((current) =>
      current.includes(tag) ? current.filter((value) => value !== tag) : [...current, tag]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSelected([]);
  };

  const filtered = React.useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesQuery =
        query.length === 0 ||
        product.name.toLowerCase().includes(query) ||
        product.tagline.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      const matchesTags =
        selected.length === 0 || selected.some((tag) => product.useCases.includes(tag));

      return matchesQuery && matchesTags;
    });
  }, [products, search, selected]);

  return (
    <div>
      <ProductFilters
        useCases={useCases}
        selected={selected}
        onToggle={toggleTag}
        search={search}
        onSearchChange={setSearch}
        onClear={clearFilters}
        resultCount={filtered.length}
        total={products.length}
      />

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <Reveal key={product.slug} index={index}>
              <ProductCard product={product} className="h-full" />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-20 text-center">
          <PackageSearch className="size-8 text-muted-foreground" aria-hidden="true" />
          <div>
            <p className="font-semibold text-foreground">No bag styles match those filters.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different search term or clear the selected tags.
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}

export { ProductCatalog };
