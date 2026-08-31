import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/product/product-image";
import { ProductSpecs } from "@/components/product/product-specs";
import { ProductCard } from "@/components/product/product-card";
import { CATALOG_PRODUCTS, getProduct } from "@/lib/data/products";

export function generateStaticParams() {
  return CATALOG_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(
  props: PageProps<"/products/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: `${product.tagline} ${product.description}`.slice(0, 160),
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | Alorex Packaging LLP`,
      description: product.tagline,
      url: `/products/${product.slug}`,
      type: "website",
    },
  };
}

export default async function ProductPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = CATALOG_PRODUCTS.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Section spacing="lg">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          All Products
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
          <Reveal>
            <ProductImage product={product} size="hero" />
          </Reveal>

          <Reveal index={1}>
            <div className="flex flex-wrap gap-1.5">
              {product.useCases.map((tag) => (
                <Badge key={tag} variant="soft">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-semibold text-balance text-foreground">
              {product.name}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{product.tagline}</p>
            <p className="mt-5 leading-relaxed text-pretty text-foreground/85">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" nativeButton={false} render={<Link href={product.cta.href} />}>
                {product.cta.label} <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="tel:+919756565319" />}
              >
                <Phone /> Call Us
              </Button>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <ProductSpecs product={product} variant="full" />
            </div>
          </Reveal>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="white">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Other bag styles
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} index={index}>
                <ProductCard product={item} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
