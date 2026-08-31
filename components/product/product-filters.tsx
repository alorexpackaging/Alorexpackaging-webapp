"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type ProductFiltersProps = {
  useCases: string[];
  selected: string[];
  onToggle: (tag: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
  onClear: () => void;
  resultCount: number;
  total: number;
};

/**
 * Controlled filter bar for the /products catalogue — a search field
 * plus use-case tag chips. Holds no state of its own; ProductCatalog
 * owns it and decides what "filtered" means.
 */
function ProductFilters({
  useCases,
  selected,
  onToggle,
  search,
  onSearchChange,
  onClear,
  resultCount,
  total,
}: ProductFiltersProps) {
  const hasFilters = selected.length > 0 || search.trim().length > 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Label htmlFor="product-search" className="sr-only">
            Search products
          </Label>
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="product-search"
            type="search"
            placeholder="Search bag styles…"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            className="h-10 pl-9"
          />
        </div>

        <p className="text-sm text-muted-foreground" aria-live="polite">
          Showing {resultCount} of {total} styles
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {useCases.map((tag) => {
          const isActive = selected.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onToggle(tag)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "border-saffron-strong bg-saffron-strong text-white"
                  : "border-border bg-card text-foreground/70 hover:border-saffron-strong/40 hover:text-foreground"
              )}
            >
              {tag}
            </button>
          );
        })}

        {hasFilters ? (
          <Button variant="ghost" size="sm" onClick={onClear} className="gap-1">
            <X className="size-3.5" />
            Clear filters
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export { ProductFilters };
