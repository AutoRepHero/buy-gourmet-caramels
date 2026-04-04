/*
 * BuyGourmetCaramels.com — Home Page
 * Design: Artisan Warmth — Craftsman Era meets Modern Food Brand
 * All sections: Nav, Hero, TrustBar, Flavors, Process, Gifts, Story, Reviews, Blog, FAQ, CTA, Footer
 */
import { useState, useEffect, useRef } from "react";

// ─── Image CDN URLs ───────────────────────────────────────────────────────────
const IMG = {
  hero:    "https://d2xsxph8kpxj0f.cloudfront.net/310519663425645252/c7JUUxiJwSoLXah9sUySh8/hero_caramels_new_b1727486.jpg",
  variety: "https://d2xsxph8kpxj0f.cloudfront.net/310519663425645252/c7JUUxiJwSoLXah9sUySh8/caramels_variety-kdvCjKcomRHJp7T4MyEDaz.webp",
  gift:    "https://d2xsxph8kpxj0f.cloudfront.net/310519663425645252/c7JUUxiJwSoLXah9sUySh8/gift_box_caramels_new_0a23031c.jpg",
  making:  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425645252/c7JUUxiJwSoLXah9sUySh8/caramel_making-CEVfeHVhRhXAPf5oNSKcek.webp",
};

// ─── PayPal Button Links (scraped from live buygourmetcaramels.com) ──────────
const PAYPAL_BASE = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=";

const PAYPAL_LINKS: Record<string, { quarter?: string; half?: string; one?: string }> = {
  butter:    { quarter: PAYPAL_BASE + "39S9Z6Z5UQ4R4",  half: PAYPAL_BASE + "J3KVN44KDPSR2",  one: PAYPAL_BASE + "WWJCPKEU3HW8U" },
  licorice:  { quarter: PAYPAL_BASE + "TQLLF5SBKTNQY",  half: PAYPAL_BASE + "WCXNJ88PN4HL8",  one: PAYPAL_BASE + "RK5USWK2C5TX8" },
  cherry:    { quarter: PAYPAL_BASE + "M5ENWQNJ7VAAN",  half: PAYPAL_BASE + "F5UY3QKSFEXAG",  one: PAYPAL_BASE + "P6FHEKJ8V3GDG" },
  espresso:  { quarter: PAYPAL_BASE + "5FZ2CBMRDDLKE",  half: PAYPAL_BASE + "5NZHNRA9UFCCQ",  one: PAYPAL_BASE + "B9ULZHD4HPMEQ" },
  butterrum: { quarter: PAYPAL_BASE + "83UAPVSJE23PG",  half: PAYPAL_BASE + "QZ2P6KFKCQN7N",  one: PAYPAL_BASE + "PZPKGMLVPJLX2" },
  pecan:     { quarter: PAYPAL_BASE + "K7MLZRL4C227G",  half: PAYPAL_BASE + "KDFMK32W8CLXN",  one: PAYPAL_BASE + "SMPVABGPHY42C" },
  salted:    { quarter: PAYPAL_BASE + "6VBU7SDKB385N",  half: PAYPAL_BASE + "KW8LFQ8GDF96L",  one: PAYPAL_BASE + "M3YCST6NMUAYJ" },
  variety:   { half:    PAYPAL_BASE + "W5P34QEFK7R2A",  one: PAYPAL_BASE + "L5K3XP7ZMV8D6" },
  // Custom 4-flavor 1lb pack — PayPal hosted form button
  custom4:   {},
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const FLAVORS = [
  {
    id: "butter",
    name: "Classic Butter",
    badge: "Best Seller",
    badgeColor: "#C8860A",
    emoji: "🧈",
    accent: "#D4A017",
    description: "Pure, unadulterated gourmet caramel at its finest. Our signature butter base — nothing added, nothing hidden. The taste of pure caramel craftsmanship.",
    note: "The one that started it all.",
  },
  {
    id: "salted",
    name: "Salted Caramel",
    badge: "Fan Favorite",
    badgeColor: "#5B8A6F",
    emoji: "🧂",
    accent: "#5B8A6F",
    description: "Sea salt crystals sprinkled on top of fresh-made butter caramel create a unique taste sensation that can only be experienced, not imagined.",
    note: "Perfect sweet-savory balance.",
  },
  {
    id: "espresso",
    name: "Espresso Caramel",
    badge: "Uniquely Spokane",
    badgeColor: "#4A3728",
    emoji: "☕",
    accent: "#6B4C3B",
    description: "Crafted with Pitotti Coffee's signature Intense Espresso — a bold, small-batch Spokane roast. Not just coffee-flavored. Truly espresso-infused.",
    note: "Local roaster. Local pride.",
  },
  {
    id: "cherry",
    name: "Cherry Caramel",
    badge: "Washington Grown",
    badgeColor: "#9B2335",
    emoji: "🍒",
    accent: "#9B2335",
    description: "Washington-grown Montmorency Cherries blended into our butter caramel to lock in the unique, addictive flavor of this highly nutritious fruit.",
    note: '"Chewy nirvana." — Dave M.',
  },
  {
    id: "butterrum",
    name: "Butter Rum",
    badge: "Bold & Smooth",
    badgeColor: "#7B5E3A",
    emoji: "🥃",
    accent: "#8B6914",
    description: "Our buttery smooth house specialty caramels infused with rich rum flavor. An amazing taste that is out of this world. A must-try.",
    note: "An excellent addition to the collection.",
  },
  {
    id: "pecan",
    name: "Pecan Caramel",
    badge: "Classic Favorite",
    badgeColor: "#6B4C2A",
    emoji: "🌰",
    accent: "#8B6914",
    description: "Fresh roasted pecans blended into our butter caramel create a memory-invoking moment with the first bite that demands a second.",
    note: "Do not attempt while driving.",
  },
  {
    id: "licorice",
    name: "Licorice Caramel",
    badge: "One-of-a-Kind",
    badgeColor: "#2D2D2D",
    emoji: "🖤",
    accent: "#3D3D3D",
    description: "Infused with 100% pure anise oil, this is our house specialty and a true original. An amazing fusion of authentic licorice and buttery caramel.",
    note: "You won't find this anywhere else.",
  },
  {
    id: "variety",
    name: "Variety Pack",
    badge: "Best Value",
    badgeColor: "#C8860A",
    emoji: "🎁",
    accent: "#C8860A",
    description: "Every package has all delicious flavors with color-coded wrappers: Salted (white), Butter (yellow), Pecan (orange), Butter Rum (light orange), Cherry (red), Espresso (green).",
    note: "½ lb $20 · 1 lb $36",
  },
  {
    id: "custom4",
    name: "Choose 4 Flavors",
    badge: "Mix & Match",
    badgeColor: "#5B6E7A",
    emoji: "🎨",
    accent: "#5B6E7A",
    description: "Can't make up your mind? Choose up to 4 different flavors in ¼ lb packages — a full 1 lb custom assortment. Call us to build your perfect box.",
    note: "Call (509) 342-6002 to order.",
  },
];

const REVIEWS = [
  {
    name: "Terri D.",
    stars: 5,
    text: "Best I've ever tasted but careful, they are addicting! I ordered the variety pack and every single flavor was incredible. The espresso one is my absolute favorite — you can taste the quality of the coffee.",
    location: "Verified Customer",
  },
  {
    name: "Dave M.",
    stars: 5,
    text: "Chewy nirvana. I've tried caramels from all over the country and Moon Creek's cherry caramel is unlike anything I've ever had. The Montmorency cherry flavor is real and bright — not artificial at all.",
    location: "Verified Customer",
  },
  {
    name: "Amy S.",
    stars: 5,
    text: "I ordered them as a gift and my recipient called me immediately to say thank you — and to ask where to get more. The packaging with color-coded wrappers is such a thoughtful touch.",
    location: "Verified Customer",
  },
  {
    name: "Rosemarie T.",
    stars: 5,
    text: "John and Jean have amazing customer service and their caramels are amazing!!!! I ordered the licorice caramel on a whim and it's now my go-to. I've never seen this flavor anywhere else.",
    location: "Verified Customer",
  },
];

const FAQS = [
  {
    q: "What makes Moon Creek caramels gourmet?",
    a: "Moon Creek caramels are made from scratch using real butter, fresh cream, pure cane sugar, and natural flavor ingredients — Washington Montmorency cherries, local Pitotti espresso, pure anise oil, and fresh pecans. No preservatives, no artificial flavors, ever. Each batch is slow-cooked and hand-cut in small batches in Spokane, WA.",
  },
  {
    q: "What flavors of gourmet caramels do you offer?",
    a: "We offer 7 unique handcrafted flavors: Classic Butter, Salted Caramel, Espresso (made with Pitotti Coffee), Cherry (Washington Montmorency), Butter Rum, Pecan, and Licorice (pure anise oil). All available in ¼ lb, ½ lb, and 1 lb sizes. A Variety Pack with all 7 flavors is also available.",
  },
  {
    q: "How long do your gourmet caramels last?",
    a: "Our caramels stay fresh for 4–6 weeks at room temperature when stored in a cool, dry place. For longer storage, refrigerate in an airtight container for up to 3 months, or freeze for up to 6 months. Because we use no preservatives, freshness depends on proper storage.",
  },
  {
    q: "Do your caramels contain preservatives or artificial ingredients?",
    a: "Never. Moon Creek caramels contain zero preservatives and zero artificial flavors or colors. We use only real butter, fresh cream, pure cane sugar, and natural ingredient additions. What you taste is exactly what went in.",
  },
  {
    q: "Can I order gourmet caramels as a gift?",
    a: "Absolutely. Our Variety Pack with color-coded wrappers makes a beautiful gift. We also offer corporate gift orders, holiday gift sets, wedding favors, and sampler sets. Call us at (509) 342-6002 for custom gift packaging and bulk orders.",
  },
  {
    q: "Where are your caramels made? Do you ship nationwide?",
    a: "Our caramels are handcrafted in Spokane, Washington by John and Jean Linstrum. We ship to all 50 states. Free shipping on orders over $50. Call (509) 342-6002 to place your order.",
  },
  {
    q: "What is the difference between caramel and toffee?",
    a: "Caramel is made by cooking sugar with butter and cream to a lower temperature (around 245°F), producing a soft, chewy, buttery confection. Toffee is cooked to a higher temperature (300°F+), resulting in a hard, brittle candy. Our caramels are the soft, chewy variety — melt-in-your-mouth, not crack-your-teeth.",
  },
  {
    q: "Do you offer bulk or corporate caramel orders?",
    a: "Yes. We offer bulk pricing for corporate appreciation gifts, employee recognition, client gifts, trade show giveaways, and event favors. Custom quantities and packaging available. Call (509) 342-6002 or email us to discuss your needs.",
  },
  {
    q: "Are your caramels gluten-free?",
    a: "Our caramels are made without gluten-containing ingredients. However, they are produced in a kitchen that may handle other food products. If you have a severe gluten allergy or celiac disease, please contact us directly at (509) 342-6002 before ordering.",
  },
  {
    q: "What are the best gourmet caramels to buy online?",
    a: "Moon Creek Gourmet Sweets at BuyGourmetCaramels.com offers some of the most unique handcrafted caramels available online — including rare flavors like Licorice (pure anise oil) and Espresso (local Spokane roast) that you won't find from mass-market brands. Made from scratch, no preservatives, shipped fresh nationwide from Spokane, WA.",
  },
];

const BLOG_POSTS = [
  {
    category: "Caramel 101",
    title: "What Makes a Caramel 'Gourmet'? The 5 Key Differences",
    excerpt: "Not all caramels are created equal. Here's what separates a truly gourmet caramel from the mass-produced candy aisle variety — and why it matters for taste, texture, and quality.",
    readTime: "4 min read",
  },
  {
    category: "Our Ingredients",
    title: "Why We Use Pitotti Coffee for Our Espresso Caramel",
    excerpt: "Spokane's own Pitotti Coffee brings a deep crema, rich cocoa notes, and smooth finish to our Espresso Caramel. Here's the story behind the partnership.",
    readTime: "3 min read",
  },
  {
    category: "Gift Guide",
    title: "The Ultimate Gourmet Caramel Gift Guide for Every Occasion",
    excerpt: "From birthdays to corporate gifts to wedding favors — here's how to choose the perfect caramel gift, what sizes to order, and how to present them beautifully.",
    readTime: "5 min read",
  },
  {
    category: "Our Ingredients",
    title: "Montmorency Cherries: Why Washington Grows the World's Best",
    excerpt: "Our Cherry Caramel uses Washington-grown Montmorency cherries for a reason. Here's what makes this tart cherry variety uniquely suited to artisan confectionery.",
    readTime: "3 min read",
  },
  {
    category: "Flavor Spotlight",
    title: "The Licorice Caramel: Our Most Adventurous Flavor Explained",
    excerpt: "Pure anise oil meets buttery caramel in a combination most people have never tried — and can't stop eating. Here's the story behind our most unique creation.",
    readTime: "4 min read",
  },
  {
    category: "Storage & Freshness",
    title: "How to Store Gourmet Caramels to Keep Them Fresh Longer",
    excerpt: "No preservatives means freshness depends on you. Here's the definitive guide to storing handcrafted caramels at room temp, in the fridge, and in the freezer.",
    readTime: "3 min read",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current text-gold" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function PriceButtons({ flavorId }: { flavorId: string }) {
  const links = PAYPAL_LINKS[flavorId] || {};

  // Variety pack: ½ lb $20, 1 lb $36
  if (flavorId === "variety") {
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        <a href={links.half} target="_blank" rel="noopener noreferrer"
          className="flex-1 min-w-0 text-center px-3 py-2 border border-[oklch(0.52_0.120_58)] text-[oklch(0.52_0.120_58)] rounded text-sm font-semibold hover:bg-[oklch(0.52_0.120_58)] hover:text-white transition-all duration-200"
          style={{ fontFamily: "var(--font-body)" }}>
          ½ lb — $20
        </a>
        <a href={links.one} target="_blank" rel="noopener noreferrer"
          className="flex-1 min-w-0 text-center px-3 py-2 border border-[oklch(0.52_0.120_58)] text-[oklch(0.52_0.120_58)] rounded text-sm font-semibold hover:bg-[oklch(0.52_0.120_58)] hover:text-white transition-all duration-200"
          style={{ fontFamily: "var(--font-body)" }}>
          1 lb — $36
        </a>
      </div>
    );
  }

  // Custom 4-flavor pack — not yet on old site
  if (flavorId === "custom4") {
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="flex-1 text-center px-3 py-2 bg-[oklch(0.93_0.025_80)] text-[oklch(0.50_0.060_58)] rounded text-xs font-semibold border border-[oklch(0.88_0.030_75)]"
          style={{ fontFamily: "var(--font-body)" }}>
          Call for Pricing: (509) 342-6002
        </span>
      </div>
    );
  }

  // Standard flavors: ¼ lb $12, ½ lb $18, 1 lb $34
  const sizes = [
    { label: "¼ lb", price: "$12", href: links.quarter },
    { label: "½ lb", price: "$18", href: links.half },
    { label: "1 lb", price: "$34", href: links.one },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {sizes.map((s) =>
        s.href ? (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            className="flex-1 min-w-0 text-center px-3 py-2 border border-[oklch(0.52_0.120_58)] text-[oklch(0.52_0.120_58)] rounded text-sm font-semibold hover:bg-[oklch(0.52_0.120_58)] hover:text-white transition-all duration-200"
            style={{ fontFamily: "var(--font-body)" }}>
            {s.label} — {s.price}
          </a>
        ) : (
          <span key={s.label}
            className="flex-1 min-w-0 text-center px-3 py-2 bg-[oklch(0.93_0.025_80)] text-[oklch(0.60_0.050_58)] rounded text-xs font-semibold border border-dashed border-[oklch(0.80_0.030_75)]"
            style={{ fontFamily: "var(--font-body)" }}>
            Coming Soon
          </span>
        )
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-warm-white" style={{ fontFamily: "var(--font-body)" }}>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="bg-caramel-gradient text-center py-2 px-4">
        <p className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.88_0.060_72)]" style={{ fontFamily: "var(--font-body)" }}>
          Free Shipping on Orders Over $50 &nbsp;·&nbsp; No Preservatives. No Artificial Flavors. Ever. &nbsp;·&nbsp;
          <a href="tel:+15093426002" className="underline underline-offset-2 hover:text-white transition-colors">(509) 342-6002</a>
        </p>
      </div>

      {/* ── NAVIGATION ── */}
      <nav
        className={`sticky top-0 z-50 bg-[oklch(0.99_0.008_85)] border-b border-[oklch(0.88_0.030_75)] transition-all duration-300 ${navScrolled ? "nav-scrolled" : ""}`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-lg text-walnut tracking-tight">BuyGourmetCaramels.com</span>
            <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-[oklch(0.50_0.060_58)]" style={{ fontFamily: "var(--font-body)" }}>
              Moon Creek Gourmet Sweets · Spokane, WA
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {[
              { label: "Shop Flavors", id: "flavors" },
              { label: "Gift Sets", id: "gifts" },
              { label: "Our Story", id: "story" },
              { label: "Blog", id: "blog" },
              { label: "FAQ", id: "faq" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link bg-transparent border-0 p-0">
                {item.label}
              </button>
            ))}
            <a href="tel:+15093426002" className="btn-primary text-sm py-2.5 px-5">
              Order Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-walnut transition-all duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-walnut transition-all duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-walnut transition-all duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[oklch(0.99_0.008_85)] border-t border-[oklch(0.88_0.030_75)] px-6 py-4 flex flex-col gap-4">
            {[
              { label: "Shop Flavors", id: "flavors" },
              { label: "Gift Sets", id: "gifts" },
              { label: "Our Story", id: "story" },
              { label: "Blog", id: "blog" },
              { label: "FAQ", id: "faq" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link bg-transparent border-0 p-0 text-left">
                {item.label}
              </button>
            ))}
            <a href="tel:+15093426002" className="btn-primary text-center">
              Call to Order: (509) 342-6002
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={IMG.hero}
            alt="Artisan gourmet caramels handcrafted in Spokane WA"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.040_45/0.88)] via-[oklch(0.15_0.040_45/0.60)] to-[oklch(0.15_0.040_45/0.15)]" />
        </div>

        {/* Hero content */}
        <div className="container relative z-10 py-24">
          <div className="max-w-2xl">
            <p className="section-label text-[oklch(0.78_0.140_78)] mb-4">Handcrafted in Spokane, WA · Since 2010</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Gourmet Caramels<br />
              Made <em className="not-italic text-gold">From Scratch.</em><br />
              <span className="text-4xl md:text-5xl font-semibold">Just Like Grandma's.</span>
            </h1>
            <p className="text-[oklch(0.88_0.030_75)] text-lg md:text-xl leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "var(--font-body)" }}>
              Small-batch artisan caramels crafted with real butter, fresh cream, and natural ingredients.
              No preservatives. No shortcuts. 7 unique flavors you won't find anywhere else.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["✓ No Preservatives", "✓ All Natural", "✓ Ships Nationwide", "✓ Small Batch"].map((t) => (
                <span key={t} className="text-sm font-semibold text-[oklch(0.88_0.060_72)] bg-[oklch(0.15_0.040_45/0.5)] px-3 py-1.5 rounded-full border border-[oklch(0.68_0.150_72/0.4)]" style={{ fontFamily: "var(--font-body)" }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("flavors")} className="btn-primary text-base px-8 py-4">
                Shop All Flavors
              </button>
              <button onClick={() => scrollTo("gifts")} className="btn-outline-gold text-base px-8 py-4">
                Gift Sets
              </button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-3">
              <StarRating />
              <span className="text-[oklch(0.88_0.030_75)] text-sm" style={{ fontFamily: "var(--font-body)" }}>
                "Best I've ever tasted" — Terri D.
              </span>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-8 right-8 hidden lg:flex gap-4">
          {[
            { num: "7", label: "Unique Flavors" },
            { num: "0", label: "Preservatives" },
            { num: "100%", label: "Natural" },
          ].map((s) => (
            <div key={s.label} className="bg-[oklch(0.15_0.040_45/0.75)] backdrop-blur-sm border border-[oklch(0.68_0.150_72/0.4)] rounded px-5 py-3 text-center">
              <div className="font-display text-2xl font-black text-gold">{s.num}</div>
              <div className="text-[0.65rem] font-semibold tracking-widest uppercase text-[oklch(0.80_0.030_75)]" style={{ fontFamily: "var(--font-body)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-[oklch(0.20_0.050_45)] py-5">
        <div className="container">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-center">
            {[
              { icon: "🌿", text: "No Preservatives. No Artificial Flavors. Ever." },
              { icon: "👐", text: "Hand-Crafted in Small Batches" },
              { icon: "📦", text: "Ships Nationwide — Free Over $50" },
              { icon: "📞", text: "Call to Order: (509) 342-6002" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span className="text-[0.75rem] font-semibold tracking-wide text-[oklch(0.88_0.060_72)]" style={{ fontFamily: "var(--font-body)" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FLAVORS ── */}
      <section id="flavors" className="py-24 bg-warm-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Our Signature Collection</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-walnut mb-4">
              7 Gourmet Caramel Flavors,<br />
              <em>Each One Unforgettable</em>
            </h2>
            <div className="gold-rule max-w-xs mx-auto my-5" />
            <p className="text-[oklch(0.40_0.060_55)] max-w-xl mx-auto text-lg" style={{ fontFamily: "var(--font-body)" }}>
              Every caramel starts with our signature butter base — slow-cooked, hand-crafted, and infused
              with the finest natural ingredients. Choose your size: ¼ lb, ½ lb, or 1 lb.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FLAVORS.map((flavor) => (
              <div key={flavor.id} className="flavor-card flex flex-col">
                {/* Color accent bar */}
                <div className="h-1.5 w-full" style={{ backgroundColor: flavor.accent }} />
                <div className="p-6 flex flex-col flex-1">
                  {/* Badge + emoji */}
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className="text-[0.65rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: flavor.badgeColor, fontFamily: "var(--font-body)" }}
                    >
                      {flavor.badge}
                    </span>
                    <span className="text-2xl">{flavor.emoji}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-walnut mb-2">{flavor.name}</h3>
                  <p className="text-sm text-[oklch(0.45_0.060_55)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-body)" }}>
                    {flavor.description}
                  </p>
                  <p className="text-xs font-semibold text-caramel mt-3 italic" style={{ fontFamily: "var(--font-body)" }}>
                    {flavor.note}
                  </p>

                  <PriceButtons flavorId={flavor.id} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="tel:+15093426002" className="btn-primary text-base px-10 py-4">
              Call to Order: (509) 342-6002
            </a>
          </div>
        </div>
      </section>

      {/* ── VARIETY SHOWCASE IMAGE ── */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={IMG.variety}
          alt="Seven gourmet caramel flavors lined up on dark slate — Classic Butter, Salted, Espresso, Cherry, Butter Rum, Pecan, Licorice"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.040_45/0.7)] to-transparent flex items-end">
          <div className="container pb-8">
            <p className="font-display text-2xl md:text-3xl font-bold text-white">
              Seven flavors. One unforgettable bite.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">How We Make Them</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-walnut mb-6">
                The Art of<br /><em>Small-Batch Caramel</em>
              </h2>
              <div className="gold-rule max-w-[120px] mb-8" />
              <p className="text-[oklch(0.40_0.060_55)] text-lg leading-relaxed mb-10" style={{ fontFamily: "var(--font-body)" }}>
                Every piece is made by hand, in small batches, using the same care and attention that defines
                true artisan confectionery. No machines. No shortcuts. Just hands, heat, and heart.
              </p>

              <div className="space-y-8">
                {[
                  { n: "01", title: "Source Natural Ingredients", body: "Real butter, fresh cream, pure cane sugar, and natural flavor additions — Washington cherries, local espresso, pure anise oil. Nothing artificial. Ever." },
                  { n: "02", title: "Slow-Cook in Small Batches", body: "Each batch is slow-cooked to the precise temperature that creates the signature soft, buttery texture. Small batches mean we control every step." },
                  { n: "03", title: "Hand-Pour & Cut", body: "The caramel is hand-poured into molds, allowed to set naturally, then hand-cut to the perfect size. No machines. No shortcuts." },
                  { n: "04", title: "Wrap & Ship Fresh", body: "Each piece is individually wrapped in color-coded wrappers, packed with care, and shipped directly to your door — fresh from our Spokane, WA kitchen." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[oklch(0.20_0.050_45)] flex items-center justify-center">
                      <span className="font-display text-sm font-bold text-gold">{step.n}</span>
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-walnut mb-1">{step.title}</h4>
                      <p className="text-sm text-[oklch(0.45_0.060_55)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={IMG.making}
                alt="Artisan pouring golden caramel from copper pot onto marble slab in small batch kitchen"
                className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-[oklch(0.20_0.050_45)] text-white p-5 rounded-sm shadow-xl">
                <p className="font-display text-2xl font-black text-gold">100%</p>
                <p className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.80_0.030_75)]" style={{ fontFamily: "var(--font-body)" }}>Natural Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GIFT SETS ── */}
      <section id="gifts" className="py-24 bg-warm-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="section-label mb-3">Perfect for Every Occasion</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-walnut mb-4">
                Gourmet Caramel<br /><em>Gift Sets</em>
              </h2>
              <div className="gold-rule max-w-[120px] mb-6" />
              <p className="text-[oklch(0.40_0.060_55)] text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Whether you're celebrating a birthday, thanking a client, or treating someone you love —
                our caramels make an unforgettable gift. Call us to arrange custom gift packaging.
              </p>
            </div>
            <div className="relative">
              <img
                src={IMG.gift}
                alt="Gourmet caramel gift box with color-coded wrapped caramels on rustic wood table"
                className="w-full h-80 object-cover rounded-sm shadow-xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎀", title: "Variety Gift Pack ½ lb", desc: "All flavors in color-coded wrappers: Salted (white), Butter (yellow), Pecan (orange), Butter Rum (light orange), Cherry (red), Espresso (green).", price: "$20", cta: "Buy on PayPal", href: PAYPAL_BASE + "W5P34QEFK7R2A" },
              { icon: "🎁", title: "Variety Gift Pack 1 lb", desc: "Double the variety — all 7 flavors in color-coded wrappers. The ultimate gift for any caramel lover.", price: "$36", cta: "Buy on PayPal", href: PAYPAL_BASE + "L5K3XP7ZMV8D6" },
              { icon: "💼", title: "Corporate Gift Orders", desc: "Bulk pricing for corporate appreciation, employee recognition, client gifts, and event favors.", price: "Call for Pricing", cta: "Call (509) 342-6002", href: "tel:+15093426002" },
              { icon: "🎄", title: "Holiday Gift Sets", desc: "Seasonal sets for Christmas, Valentine’s Day, Mother’s Day, and more. Mix and match flavors.", price: "Call for Pricing", cta: "Call (509) 342-6002", href: "tel:+15093426002" },
              { icon: "💒", title: "Wedding & Event Favors", desc: "Individually wrapped caramels make elegant, memorable wedding favors. Custom orders welcome.", price: "Call for Pricing", cta: "Call (509) 342-6002", href: "tel:+15093426002" },
              { icon: "🚚", title: "Ships Nationwide", desc: "We ship to all 50 states. Order online or call us directly. Free shipping on orders over $50.", price: "Free Shipping $50+", cta: "Order Now", href: "tel:+15093426002" },
            ].map((item) => (
              <div key={item.title} className="border border-[oklch(0.88_0.030_75)] rounded-sm p-6 hover:border-[oklch(0.68_0.150_72/0.6)] hover:shadow-lg transition-all duration-200 bg-white">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-xl font-bold text-walnut mb-2">{item.title}</h3>
                <p className="text-sm text-[oklch(0.45_0.060_55)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>{item.desc}</p>
                <p className="font-semibold text-caramel text-sm mb-4" style={{ fontFamily: "var(--font-body)" }}>{item.price}</p>
                <a href={item.href} className="btn-primary text-xs py-2.5 px-4 w-full justify-center">{item.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="story" className="py-24 bg-caramel-gradient text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label text-[oklch(0.78_0.140_78)] mb-3">Our Story</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Made from Scratch.<br />
                Made with Love.<br />
                <em className="text-gold">Made in Spokane.</em>
              </h2>
              <div className="gold-rule max-w-[120px] mb-8" />
              <p className="text-[oklch(0.88_0.030_75)] text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Moon Creek Gourmet Sweets was born out of a simple love of cooking for friends and family.
                John and Jean Linstrum, based in Spokane, WA, began crafting caramels the old-fashioned way —
                from scratch, using real ingredients, just like Grandma used to make.
              </p>
              <p className="text-[oklch(0.80_0.030_75)] leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
                What started as a way to share something special with the people they cared about quickly grew
                into something more. Word spread. People kept coming back. And Moon Creek became what it is today:
                a small-batch caramel company with a big heart and an uncompromising commitment to quality.
              </p>
              <p className="text-[oklch(0.80_0.030_75)] leading-relaxed mb-10" style={{ fontFamily: "var(--font-body)" }}>
                Every batch is still made by hand. Every ingredient is still natural. Every piece is still
                wrapped with care. Because when you taste the difference, there's no going back to ordinary.
              </p>

              <div className="flex flex-wrap gap-8">
                {[
                  { num: "7", label: "Unique Flavors" },
                  { num: "0", label: "Preservatives" },
                  { num: "100%", label: "Natural" },
                  { num: "WA", label: "Spokane Proud" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-3xl font-black text-gold">{s.num}</div>
                    <div className="text-[0.65rem] font-semibold tracking-widest uppercase text-[oklch(0.80_0.030_75)]" style={{ fontFamily: "var(--font-body)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[oklch(0.15_0.040_45/0.5)] border border-[oklch(0.68_0.150_72/0.3)] rounded-sm p-8">
                <p className="font-display text-xl italic text-[oklch(0.88_0.060_72)] mb-4">
                  "We make caramels the way they were always meant to be made — by hand, with real ingredients,
                  and with the same care you'd give to cooking for someone you love."
                </p>
                <p className="text-sm font-semibold text-gold" style={{ fontFamily: "var(--font-body)" }}>— John & Jean Linstrum, Founders</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[oklch(0.15_0.040_45/0.5)] border border-[oklch(0.68_0.150_72/0.3)] rounded-sm p-5 text-center">
                  <p className="font-display text-2xl font-bold text-gold">Spokane, WA</p>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.80_0.030_75)] mt-1" style={{ fontFamily: "var(--font-body)" }}>Handcrafted Here</p>
                </div>
                <div className="bg-[oklch(0.15_0.040_45/0.5)] border border-[oklch(0.68_0.150_72/0.3)] rounded-sm p-5 text-center">
                  <p className="font-display text-2xl font-bold text-gold">Since 2010</p>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.80_0.030_75)] mt-1" style={{ fontFamily: "var(--font-body)" }}>Family-Owned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 bg-cream">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What Customers Say</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-walnut mb-4">
              Real People. Real Caramels.<br /><em>Real Reactions.</em>
            </h2>
            <div className="gold-rule max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="review-card">
                <StarRating count={review.stars} />
                <blockquote className="font-display text-lg italic text-walnut mt-3 mb-4 leading-relaxed">
                  "{review.text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-caramel text-sm" style={{ fontFamily: "var(--font-body)" }}>— {review.name}</p>
                  <p className="text-xs text-[oklch(0.55_0.060_58)]" style={{ fontFamily: "var(--font-body)" }}>{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <StarRating />
              <span className="font-semibold text-walnut" style={{ fontFamily: "var(--font-body)" }}>Loved by customers across all 50 states</span>
            </div>
            <a href="tel:+15093426002" className="btn-primary px-10 py-4">
              Order Yours Today
            </a>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="py-24 bg-warm-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-label mb-3">The Caramel Journal</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-walnut mb-4">
              Learn, Discover, Indulge
            </h2>
            <div className="gold-rule max-w-xs mx-auto mb-4" />
            <p className="text-[oklch(0.45_0.060_55)] max-w-lg mx-auto" style={{ fontFamily: "var(--font-body)" }}>
              Guides, stories, and insights from the world of gourmet caramel — written for caramel lovers and gift-givers alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="border border-[oklch(0.88_0.030_75)] rounded-sm overflow-hidden hover:shadow-lg hover:border-[oklch(0.68_0.150_72/0.5)] transition-all duration-200 bg-white">
                <div className="p-6">
                  <span className="section-label text-[0.65rem]">{post.category}</span>
                  <h3 className="font-display text-xl font-bold text-walnut mt-2 mb-3 leading-snug">{post.title}</h3>
                  <p className="text-sm text-[oklch(0.45_0.060_55)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[oklch(0.55_0.060_58)]" style={{ fontFamily: "var(--font-body)" }}>{post.readTime}</span>
                    <button className="text-caramel text-sm font-semibold hover:text-[oklch(0.42_0.100_55)] transition-colors bg-transparent border-0 p-0" style={{ fontFamily: "var(--font-body)" }}>
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-cream">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Common Questions</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-walnut mb-4">
              Everything You Need to Know
            </h2>
            <div className="gold-rule max-w-xs mx-auto mb-4" />
            <p className="text-[oklch(0.45_0.060_55)]" style={{ fontFamily: "var(--font-body)" }}>
              Answers to the questions we hear most — from first-time buyers to caramel enthusiasts.
            </p>
          </div>

          <div className="space-y-0">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question w-full text-left bg-transparent border-0"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[oklch(0.68_0.150_72)] flex items-center justify-center text-gold text-sm transition-transform duration-200"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[oklch(0.45_0.060_55)] mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Still have questions? We're happy to help.
            </p>
            <a href="tel:+15093426002" className="btn-primary px-8 py-3">
              Call (509) 342-6002
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-[oklch(0.20_0.050_45)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMG.hero} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="section-label text-[oklch(0.78_0.140_78)] mb-4">Ready to Order?</p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">
            Taste the Difference.<br />
            <em className="text-gold">Order Today.</em>
          </h2>
          <div className="gold-rule max-w-xs mx-auto mb-8" />
          <p className="text-[oklch(0.80_0.030_75)] text-xl mb-10 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Handcrafted in Spokane, WA. Shipped fresh to your door. No preservatives. No shortcuts.
            Just pure, buttery, melt-in-your-mouth gourmet caramels.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+15093426002" className="btn-primary text-lg px-12 py-5">
              Call to Order: (509) 342-6002
            </a>
            <button onClick={() => scrollTo("flavors")} className="btn-outline-gold text-lg px-12 py-5">
              Browse All Flavors
            </button>
          </div>
          <p className="text-[oklch(0.65_0.050_58)] text-sm mt-6" style={{ fontFamily: "var(--font-body)" }}>
            Free shipping on orders over $50 · Ships to all 50 states
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[oklch(0.15_0.040_45)] text-[oklch(0.75_0.030_65)] py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="font-display text-xl font-bold text-white mb-2">Moon Creek Gourmet Sweets</h3>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4" style={{ fontFamily: "var(--font-body)" }}>BuyGourmetCaramels.com</p>
              <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                Handcrafted gourmet caramels made from scratch in Spokane, WA. No preservatives. No shortcuts. Just pure quality.
              </p>
              <a href="tel:+15093426002" className="text-gold font-semibold text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                (509) 342-6002
              </a>
            </div>

            {/* Flavors */}
            <div>
              <h4 className="font-display text-sm font-bold text-white mb-4 tracking-wide uppercase">Our Flavors</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {["Classic Butter", "Salted Caramel", "Espresso Caramel", "Cherry Caramel", "Butter Rum", "Pecan Caramel", "Licorice Caramel", "Variety Pack"].map((f) => (
                  <li key={f}><button onClick={() => scrollTo("flavors")} className="hover:text-gold transition-colors bg-transparent border-0 p-0 text-left text-[oklch(0.75_0.030_65)]" style={{ fontFamily: "var(--font-body)" }}>{f}</button></li>
                ))}
              </ul>
            </div>

            {/* Gift Sets */}
            <div>
              <h4 className="font-display text-sm font-bold text-white mb-4 tracking-wide uppercase">Gift Sets</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {["Variety Gift Pack", "Corporate Gifts", "Holiday Gift Sets", "Wedding Favors", "Sampler Sets"].map((g) => (
                  <li key={g}><button onClick={() => scrollTo("gifts")} className="hover:text-gold transition-colors bg-transparent border-0 p-0 text-left text-[oklch(0.75_0.030_65)]" style={{ fontFamily: "var(--font-body)" }}>{g}</button></li>
                ))}
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h4 className="font-display text-sm font-bold text-white mb-4 tracking-wide uppercase">Learn</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {[
                  { label: "Our Story", id: "story" },
                  { label: "How We Make Them", id: "flavors" },
                  { label: "Blog", id: "blog" },
                  { label: "FAQ", id: "faq" },
                ].map((l) => (
                  <li key={l.label}><button onClick={() => scrollTo(l.id)} className="hover:text-gold transition-colors bg-transparent border-0 p-0 text-left text-[oklch(0.75_0.030_65)]" style={{ fontFamily: "var(--font-body)" }}>{l.label}</button></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="gold-rule mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            <p>© {new Date().getFullYear()} Moon Creek Gourmet Sweets · BuyGourmetCaramels.com · Spokane, WA</p>
            <p className="text-[oklch(0.55_0.040_58)]">
              Handcrafted with real butter, fresh cream, and natural ingredients. No preservatives. Ships nationwide.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
