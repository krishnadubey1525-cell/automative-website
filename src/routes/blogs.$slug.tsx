import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageBanner } from "@/components/PageBanner";
import { CtaBanner } from "./index";
import { posts } from "./blogs";
import { Calendar, User, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Roadside Rescue Blog` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.img },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="py-24 text-center">
      <h1 className="text-3xl font-bold text-navy">Post not found</h1>
      <Link to="/blogs" className="btn-primary mt-6 inline-flex">Back to blogs</Link>
    </div>
  ),
  errorComponent: () => (
    <div className="py-24 text-center">
      <h1 className="text-3xl font-bold text-navy">Something went wrong</h1>
    </div>
  ),
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageBanner title={post.title} crumb="Blog Post" />

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-card mb-8 animate-fade-up">
            <img src={post.img} alt={post.title} className="w-full h-auto object-cover" />
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="inline-flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
          </div>
          <div className="prose prose-lg max-w-none text-navy/85 leading-relaxed space-y-5">
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            <p>
              At Roadside Rescue, we see hundreds of vehicles every month — and the same
              preventable issues keep showing up. The good news? Most of them come down to a
              handful of habits any driver can build into their routine.
            </p>
            <h2 className="text-2xl font-bold text-navy mt-8">Why it matters</h2>
            <p>
              Small problems become expensive problems fast. A simple inspection or a five-minute
              check in the driveway can save a tow, a repair bill, or even an engine.
            </p>
            <h2 className="text-2xl font-bold text-navy mt-8">What to do this week</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Check fluid levels — oil, coolant, brake, and washer fluid.</li>
              <li>Walk around the car and look for uneven tire wear.</li>
              <li>Listen for new noises on your first drive of the day.</li>
              <li>Note any warning lights and book a diagnostic if they persist.</li>
            </ul>
            <p>
              Need a hand? Our mobile mechanics can run a full inspection at your home or office.
              Book online or give us a call — same-day appointments most days.
            </p>
          </div>

          <div className="mt-10 flex gap-3">
            <Link to="/contact" className="btn-primary">Book a Service</Link>
            <Link to="/blogs" className="btn-outline-dark">More articles</Link>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-16" style={{ backgroundColor: "var(--soft-blue)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8">Related articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blogs/$slug"
                params={{ slug: p.slug }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover-lift flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{p.date}</p>
                  <h3 className="font-bold text-navy group-hover:text-primary transition-smooth">{p.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-semibold">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
