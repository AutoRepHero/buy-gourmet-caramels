/**
 * Flavors Page — Individual flavor detail pages for deep SEO targeting
 * Each flavor gets its own URL: /flavors/espresso-caramel, /flavors/cherry-caramel, etc.
 * Targets flavor-specific keywords and Google Shopping eligibility
 */
import { Link } from "wouter";
import { ArrowLeft, ChevronRight, Star, Truck, Shield, Leaf } from "lucide-react";

interface FlavorDetail {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  keywords: string[];
  metaDescription: string;
  accent: string;
  badge: string;
  badgeColor: string;
  pairings: string[];
  funFact: string;
  paypalLinks: { quarter?: string; half?: string; one?: string };
}

const PAYPAL_BASE = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=";

const FLAVOR_DETAILS: FlavorDetail[] = [
  {
    slug: "classic-butter-caramel",
    name: "Classic Butter Caramel",
    emoji: "🧈",
    tagline: "Pure caramel craftsmanship. Nothing added, nothing hidden.",
    description: "Our signature butter caramel — the foundation of everything we make. Pure, unadulterated gourmet caramel at its finest.",
    longDescription: "The Classic Butter Caramel is where Moon Creek began. Made with just four ingredients — real butter, fresh heavy cream, pure cane sugar, and a touch of vanilla — this is caramel in its purest form. No additions, no distractions, just the deep, complex flavor that comes from perfectly caramelized sugar and browned butter. Every batch is slow-cooked to exactly 245°F, then hand-cut and individually wrapped. This is the caramel that started it all in 2010, and it remains our benchmark for quality.",
    ingredients: ["Real Butter", "Fresh Heavy Cream", "Pure Cane Sugar", "Vanilla"],
    keywords: ["butter caramel", "classic caramel", "plain gourmet caramel", "buy butter caramel online"],
    metaDescription: "Buy handcrafted Classic Butter Caramel online from Moon Creek Gourmet Sweets. Made with real butter, fresh cream, and pure cane sugar. No preservatives. Ships nationwide from Spokane, WA.",
    accent: "#D4A017",
    badge: "Best Seller",
    badgeColor: "#C8860A",
    pairings: ["Hot coffee or espresso", "Apple slices", "Sea salt (sprinkle on top)", "Vanilla ice cream"],
    funFact: "Our Classic Butter Caramel recipe has remained unchanged since 2010 — proof that when you start with the best ingredients, you don't need to change a thing.",
    paypalLinks: { quarter: PAYPAL_BASE + "39S9Z6Z5UQ4R4", half: PAYPAL_BASE + "J3KVN44KDPSR2", one: PAYPAL_BASE + "WWJCPKEU3HW8U" },
  },
  {
    slug: "salted-caramel",
    name: "Salted Caramel",
    emoji: "🧂",
    tagline: "The perfect sweet-savory balance. Sea salt meets buttery perfection.",
    description: "Sea salt crystals sprinkled on top of fresh-made butter caramel create a unique taste sensation that can only be experienced, not imagined.",
    longDescription: "Our Salted Caramel takes the Classic Butter base and elevates it with hand-sprinkled sea salt crystals. The salt isn't mixed in — it's applied on top of each piece, creating a burst of savory contrast the moment you bite through. This technique means you taste the salt first, then the rich butter caramel floods in, creating a wave of sweet-savory perfection that has made salted caramel the most popular gourmet candy trend of the decade. Ours stands apart because we use real sea salt (not table salt) and apply it by hand to every single piece.",
    ingredients: ["Real Butter", "Fresh Heavy Cream", "Pure Cane Sugar", "Vanilla", "Sea Salt Crystals"],
    keywords: ["salted caramel", "buy salted caramel online", "sea salt caramel", "gourmet salted caramel"],
    metaDescription: "Buy handcrafted Salted Caramel online. Sea salt crystals on real butter caramel — the perfect sweet-savory balance. No preservatives. Ships nationwide from Spokane, WA.",
    accent: "#5B8A6F",
    badge: "Fan Favorite",
    badgeColor: "#5B8A6F",
    pairings: ["Dark chocolate", "Craft beer (stout or porter)", "Pretzels", "Bourbon"],
    funFact: "Each piece of our Salted Caramel has exactly 3-4 sea salt crystals hand-placed on top — enough to taste, never enough to overpower.",
    paypalLinks: { quarter: PAYPAL_BASE + "6VBU7SDKB385N", half: PAYPAL_BASE + "KW8LFQ8GDF96L", one: PAYPAL_BASE + "M3YCST6NMUAYJ" },
  },
  {
    slug: "espresso-caramel",
    name: "Espresso Caramel",
    emoji: "☕",
    tagline: "Crafted with Pitotti Coffee's signature Spokane roast.",
    description: "Not just coffee-flavored. Truly espresso-infused with Pitotti Coffee's Intense Espresso — a bold, small-batch Spokane roast.",
    longDescription: "Our Espresso Caramel is a collaboration with Pitotti Coffee, a beloved small-batch roaster right here in Spokane. We brew their Intense Espresso blend at double strength and fold it directly into our butter caramel base during cooking. The result isn't a coffee-flavored candy — it's a genuine espresso experience wrapped in buttery caramel. The coffee hits first with deep crema notes and smooth body, followed by the rich sweetness of our caramel, finishing with a clean espresso aftertaste. This is the caramel for coffee lovers who demand authenticity.",
    ingredients: ["Real Butter", "Fresh Heavy Cream", "Pure Cane Sugar", "Pitotti Coffee Intense Espresso"],
    keywords: ["espresso caramel", "coffee caramel", "buy espresso caramel online", "Pitotti Coffee caramel", "Spokane coffee caramel"],
    metaDescription: "Buy Espresso Caramel made with Pitotti Coffee's Spokane roast. Real espresso infused into handcrafted butter caramel. No artificial flavors. Ships nationwide.",
    accent: "#6B4C3B",
    badge: "Uniquely Spokane",
    badgeColor: "#4A3728",
    pairings: ["After-dinner dessert", "Tiramisu", "Chocolate cake", "Morning coffee ritual"],
    funFact: "We tested 11 different coffee roasts before choosing Pitotti's Intense Espresso — it was the only one bold enough to stand up to our caramel without disappearing.",
    paypalLinks: { quarter: PAYPAL_BASE + "5FZ2CBMRDDLKE", half: PAYPAL_BASE + "5NZHNRA9UFCCQ", one: PAYPAL_BASE + "B9ULZHD4HPMEQ" },
  },
  {
    slug: "cherry-caramel",
    name: "Cherry Caramel",
    emoji: "🍒",
    tagline: "Washington-grown Montmorency Cherries. Real fruit, real flavor.",
    description: "Washington-grown Montmorency Cherries blended into our butter caramel to lock in the unique, addictive flavor of this highly nutritious fruit.",
    longDescription: "Our Cherry Caramel uses real Washington-grown Montmorency cherries — the world's premier tart cherry variety. We blend dried Montmorency cherries directly into our butter caramel base during cooking, allowing the fruit to partially dissolve and infuse the entire caramel with bright, tart-sweet cherry flavor. Small cherry pieces remain for texture, creating a caramel that's both smooth and interesting to eat. This isn't cherry flavoring or cherry extract — it's the actual fruit, and you can taste the difference immediately. The tartness of the Montmorency cherry perfectly balances the sweetness of the caramel.",
    ingredients: ["Real Butter", "Fresh Heavy Cream", "Pure Cane Sugar", "Washington Montmorency Cherries"],
    keywords: ["cherry caramel", "buy cherry caramel online", "Montmorency cherry candy", "fruit caramel", "tart cherry caramel"],
    metaDescription: "Buy Cherry Caramel made with real Washington Montmorency Cherries. Tart-sweet fruit flavor in handcrafted butter caramel. No artificial flavors. Ships nationwide.",
    accent: "#9B2335",
    badge: "Washington Grown",
    badgeColor: "#9B2335",
    pairings: ["Dark chocolate", "Almond butter", "Sparkling wine", "Cheese board"],
    funFact: "Washington State produces over 62,000 tons of cherries annually — and Montmorency tart cherries from the region have higher antioxidant levels than almost any other fruit.",
    paypalLinks: { quarter: PAYPAL_BASE + "M5ENWQNJ7VAAN", half: PAYPAL_BASE + "F5UY3QKSFEXAG", one: PAYPAL_BASE + "P6FHEKJ8V3GDG" },
  },
  {
    slug: "butter-rum-caramel",
    name: "Butter Rum Caramel",
    emoji: "🥃",
    tagline: "Bold & smooth. An amazing taste that is out of this world.",
    description: "Our buttery smooth house specialty caramels infused with rich rum flavor. An amazing taste that is out of this world.",
    longDescription: "The Butter Rum Caramel is our house specialty — a bold, warming confection that combines the richness of our butter caramel base with deep rum flavor. The rum adds a complex warmth and slight spice that transforms the caramel into something almost dessert-like. It's reminiscent of a butter rum cocktail or a warm rum sauce over ice cream, but in portable candy form. This flavor is particularly popular during fall and winter months, though its fans order it year-round. The rum flavor is pronounced but not overpowering — it enhances the butter and caramel notes rather than competing with them.",
    ingredients: ["Real Butter", "Fresh Heavy Cream", "Pure Cane Sugar", "Natural Rum Flavoring"],
    keywords: ["butter rum caramel", "rum caramel", "buy butter rum caramel online", "rum flavored candy"],
    metaDescription: "Buy Butter Rum Caramel online. Bold rum flavor infused into handcrafted butter caramel. A house specialty from Moon Creek Gourmet Sweets. Ships nationwide.",
    accent: "#8B6914",
    badge: "Bold & Smooth",
    badgeColor: "#7B5E3A",
    pairings: ["Hot apple cider", "Vanilla ice cream", "Pecan pie", "After-dinner brandy"],
    funFact: "Our Butter Rum Caramel sales increase by 40% between October and December — it's become a holiday tradition for many of our repeat customers.",
    paypalLinks: { quarter: PAYPAL_BASE + "83UAPVSJE23PG", half: PAYPAL_BASE + "QZ2P6KFKCQN7N", one: PAYPAL_BASE + "PZPKGMLVPJLX2" },
  },
  {
    slug: "pecan-caramel",
    name: "Pecan Caramel",
    emoji: "🌰",
    tagline: "Fresh roasted pecans in buttery caramel. Memory-invoking.",
    description: "Fresh roasted pecans blended into our butter caramel create a memory-invoking moment with the first bite that demands a second.",
    longDescription: "Our Pecan Caramel combines two of nature's most complementary flavors — buttery caramel and fresh roasted pecans. We roast the pecans ourselves to bring out their natural oils and nutty sweetness, then fold them into our caramel base. The result is a confection with both smooth caramel texture and satisfying pecan crunch in every bite. Many customers tell us this flavor reminds them of pecan pralines, pecan pie, or their grandmother's kitchen — there's something deeply nostalgic about the combination of butter, sugar, and roasted nuts that connects to comfort and home.",
    ingredients: ["Real Butter", "Fresh Heavy Cream", "Pure Cane Sugar", "Fresh Roasted Pecans"],
    keywords: ["pecan caramel", "buy pecan caramel online", "caramel pecan candy", "nut caramel", "pecan praline caramel"],
    metaDescription: "Buy Pecan Caramel with fresh roasted pecans in handcrafted butter caramel. Crunchy, nutty, and deeply satisfying. No preservatives. Ships nationwide.",
    accent: "#8B6914",
    badge: "Classic Favorite",
    badgeColor: "#6B4C2A",
    pairings: ["Bourbon", "Apple pie", "Vanilla latte", "Maple syrup drizzle"],
    funFact: "We go through over 200 pounds of fresh pecans per year — each one roasted in-house to ensure peak flavor and crunch.",
    paypalLinks: { quarter: PAYPAL_BASE + "K7MLZRL4C227G", half: PAYPAL_BASE + "KDFMK32W8CLXN", one: PAYPAL_BASE + "SMPVABGPHY42C" },
  },
  {
    slug: "licorice-caramel",
    name: "Licorice Caramel",
    emoji: "🖤",
    tagline: "One-of-a-kind. 100% pure anise oil. A Moon Creek original.",
    description: "Infused with 100% pure anise oil, this is our house specialty and a true original. An amazing fusion of authentic licorice and buttery caramel.",
    longDescription: "Our Licorice Caramel is genuinely one-of-a-kind — we've searched extensively and cannot find another caramel maker in the United States offering a pure anise oil licorice caramel. We use 100% pure anise oil (not licorice flavoring, not natural flavors, not extract) to create a clean, bright, herbal licorice taste that fuses seamlessly with our butter caramel base. The result is unlike anything you've tried before — warm, herbal, slightly sweet, and deeply satisfying. This flavor has developed a cult following among licorice enthusiasts, adventurous eaters, and anyone who appreciates genuinely unique confections.",
    ingredients: ["Real Butter", "Fresh Heavy Cream", "Pure Cane Sugar", "100% Pure Anise Oil"],
    keywords: ["licorice caramel", "anise caramel", "buy licorice caramel online", "unique caramel flavors", "anise oil candy"],
    metaDescription: "Buy our one-of-a-kind Licorice Caramel made with 100% pure anise oil. A flavor you won't find anywhere else. Handcrafted in Spokane, WA. Ships nationwide.",
    accent: "#3D3D3D",
    badge: "One-of-a-Kind",
    badgeColor: "#2D2D2D",
    pairings: ["Black tea", "Dark chocolate", "Aged cheese", "Scandinavian cuisine"],
    funFact: "We've searched every gourmet caramel maker in the US and cannot find another pure anise oil licorice caramel. This is genuinely a one-of-a-kind product.",
    paypalLinks: { quarter: PAYPAL_BASE + "TQLLF5SBKTNQY", half: PAYPAL_BASE + "WCXNJ88PN4HL8", one: PAYPAL_BASE + "RK5USWK2C5TX8" },
  },
];

// ─── Flavors List Page ────────────────────────────────────────────────────────
function FlavorsList() {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFCF7" }}>
      {/* Header */}
      <header style={{ background: "#1a1208", padding: "1rem 0", borderBottom: "2px solid #C8860A" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#F5C842", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", fontWeight: "700" }}>
            BuyGourmetCaramels.com
          </Link>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#C8A96A", textDecoration: "none", fontSize: "0.85rem", fontFamily: "sans-serif" }}>
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", color: "#2C1E0A", marginBottom: "0.5rem" }}>
          Our Gourmet Caramel Flavors
        </h1>
        <p style={{ color: "#6B5535", fontSize: "1.05rem", marginBottom: "3rem", fontFamily: "'Source Sans 3', sans-serif", lineHeight: "1.7", maxWidth: "700px" }}>
          7 unique handcrafted flavors, each made from scratch with real ingredients. No preservatives, no artificial flavors. Available in ¼ lb ($12), ½ lb ($18), and 1 lb ($34) sizes.
        </p>

        {/* Flavor Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {FLAVOR_DETAILS.map((flavor) => (
            <Link key={flavor.slug} href={`/flavors/${flavor.slug}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "white",
                  border: "1px solid #E8DFD0",
                  borderRadius: "10px",
                  padding: "1.75rem",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  borderTop: `4px solid ${flavor.accent}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 25px rgba(200,134,10,0.12)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "2rem" }}>{flavor.emoji}</span>
                  <span style={{ background: flavor.badgeColor, color: "white", fontSize: "0.65rem", fontWeight: "700", padding: "0.2rem 0.6rem", borderRadius: "10px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {flavor.badge}
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", color: "#2C1E0A", marginBottom: "0.5rem" }}>
                  {flavor.name}
                </h2>
                <p style={{ color: "#6B5535", fontSize: "0.85rem", lineHeight: "1.5", fontFamily: "'Source Sans 3', sans-serif", marginBottom: "1rem" }}>
                  {flavor.description}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#C8860A", fontSize: "0.8rem", fontWeight: "600", fontFamily: "sans-serif" }}>
                  View Details & Order <ChevronRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Trust Signals */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", marginTop: "3rem", padding: "2rem", background: "#FFF8ED", borderRadius: "10px", border: "1px solid #E8DFD0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#6B5535", fontSize: "0.85rem", fontFamily: "sans-serif" }}>
            <Leaf size={16} color="#5B8A6F" /> No Preservatives
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#6B5535", fontSize: "0.85rem", fontFamily: "sans-serif" }}>
            <Shield size={16} color="#C8860A" /> All Natural Ingredients
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#6B5535", fontSize: "0.85rem", fontFamily: "sans-serif" }}>
            <Truck size={16} color="#4A3728" /> Ships Nationwide
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#6B5535", fontSize: "0.85rem", fontFamily: "sans-serif" }}>
            <Star size={16} color="#D4A017" /> Handcrafted Since 2010
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Individual Flavor Detail Page ────────────────────────────────────────────
function FlavorDetail({ slug }: { slug: string }) {
  const flavor = FLAVOR_DETAILS.find((f) => f.slug === slug);

  if (!flavor) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFCF7" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#2C1E0A" }}>Flavor Not Found</h1>
          <Link href="/flavors" style={{ color: "#C8860A" }}>← Back to All Flavors</Link>
        </div>
      </div>
    );
  }

  const sizes = [
    { label: "¼ lb", price: "$12", href: flavor.paypalLinks.quarter },
    { label: "½ lb", price: "$18", href: flavor.paypalLinks.half },
    { label: "1 lb", price: "$34", href: flavor.paypalLinks.one },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#FFFCF7" }}>
      {/* Header */}
      <header style={{ background: "#1a1208", padding: "1rem 0", borderBottom: "2px solid #C8860A" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#F5C842", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", fontWeight: "700" }}>
            BuyGourmetCaramels.com
          </Link>
          <Link href="/flavors" style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#C8A96A", textDecoration: "none", fontSize: "0.85rem", fontFamily: "sans-serif" }}>
            <ArrowLeft size={14} /> All Flavors
          </Link>
        </div>
      </header>

      {/* Product Detail */}
      <main style={{ maxWidth: "850px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: "2rem", fontSize: "0.8rem", fontFamily: "sans-serif", color: "#9A8A70" }}>
          <Link href="/" style={{ color: "#C8860A", textDecoration: "none" }}>Home</Link>
          {" / "}
          <Link href="/flavors" style={{ color: "#C8860A", textDecoration: "none" }}>Flavors</Link>
          {" / "}
          <span style={{ color: "#6B5535" }}>{flavor.name}</span>
        </nav>

        {/* Product Header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "2rem" }}>
          <span style={{ fontSize: "3.5rem" }}>{flavor.emoji}</span>
          <div>
            <span style={{ background: flavor.badgeColor, color: "white", fontSize: "0.65rem", fontWeight: "700", padding: "0.2rem 0.6rem", borderRadius: "10px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {flavor.badge}
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#2C1E0A", margin: "0.5rem 0 0.25rem" }}>
              {flavor.name}
            </h1>
            <p style={{ color: "#C8860A", fontStyle: "italic", fontSize: "1.05rem", fontFamily: "'Source Sans 3', sans-serif" }}>
              {flavor.tagline}
            </p>
          </div>
        </div>

        {/* Price & Order Buttons */}
        <div style={{ background: "white", border: "1px solid #E8DFD0", borderRadius: "10px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "0.85rem", color: "#6B5535", fontFamily: "sans-serif", marginBottom: "1rem", fontWeight: "600" }}>
            Choose your size:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {sizes.map((s) =>
              s.href ? (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: "1",
                    minWidth: "120px",
                    textAlign: "center",
                    padding: "1rem 1.5rem",
                    border: "2px solid #C8860A",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "#C8860A",
                    fontFamily: "sans-serif",
                    fontWeight: "700",
                    fontSize: "1rem",
                    transition: "all 0.2s",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#C8860A"; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C8860A"; }}
                >
                  {s.label} — {s.price}
                </a>
              ) : null
            )}
          </div>
          <p style={{ fontSize: "0.75rem", color: "#9A8A70", fontFamily: "sans-serif", marginTop: "0.75rem" }}>
            Free shipping on orders over $50 · Ships fresh from Spokane, WA
          </p>
        </div>

        {/* Long Description */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", color: "#2C1E0A", marginBottom: "1rem" }}>
            About This Flavor
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", lineHeight: "1.8", color: "#3D2E1A" }}>
            {flavor.longDescription}
          </p>
        </div>

        {/* Ingredients */}
        <div style={{ marginBottom: "2.5rem", background: "#FFF8ED", padding: "1.5rem", borderRadius: "10px", border: "1px solid #E8DFD0" }}>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "#2C1E0A", marginBottom: "0.75rem" }}>
            Ingredients
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {flavor.ingredients.map((ing) => (
              <span key={ing} style={{ background: "white", border: "1px solid #E8DFD0", padding: "0.3rem 0.8rem", borderRadius: "15px", fontSize: "0.85rem", color: "#5C4A2A", fontFamily: "sans-serif" }}>
                {ing}
              </span>
            ))}
          </div>
          <p style={{ fontSize: "0.75rem", color: "#9A8A70", fontFamily: "sans-serif", marginTop: "0.75rem", fontStyle: "italic" }}>
            No preservatives · No artificial flavors · No artificial colors
          </p>
        </div>

        {/* Pairings */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "#2C1E0A", marginBottom: "0.75rem" }}>
            Pairs Well With
          </h3>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {flavor.pairings.map((p) => (
              <li key={p} style={{ background: "#F5EFE3", padding: "0.4rem 0.9rem", borderRadius: "15px", fontSize: "0.85rem", color: "#5C4A2A", fontFamily: "sans-serif" }}>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Fun Fact */}
        <div style={{ background: "#1a1208", borderRadius: "10px", padding: "1.5rem", marginBottom: "2.5rem", borderLeft: `4px solid ${flavor.accent}` }}>
          <p style={{ color: "#C8A96A", fontSize: "0.9rem", fontFamily: "'Source Sans 3', sans-serif", lineHeight: "1.6", fontStyle: "italic" }}>
            <strong style={{ color: "#F5C842" }}>Did you know?</strong> {flavor.funFact}
          </p>
        </div>

        {/* Other Flavors */}
        <div style={{ borderTop: "1px solid #E8DFD0", paddingTop: "2rem" }}>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", color: "#2C1E0A", marginBottom: "1rem" }}>
            Explore Other Flavors
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {FLAVOR_DETAILS.filter((f) => f.slug !== slug).map((f) => (
              <Link key={f.slug} href={`/flavors/${f.slug}`} style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.4rem 0.9rem", background: "#F5EFE3", borderRadius: "15px", textDecoration: "none", color: "#5C4A2A", fontSize: "0.85rem", fontFamily: "sans-serif", transition: "all 0.2s" }}>
                {f.emoji} {f.name}
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer CTA */}
      <div style={{ background: "#1a1208", padding: "3rem 1.5rem", textAlign: "center", marginTop: "3rem" }}>
        <p style={{ color: "#C8A96A", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", marginBottom: "0.5rem" }}>
          Questions? Call us at <a href="tel:+15093426002" style={{ color: "#F5C842", textDecoration: "none" }}>(509) 342-6002</a>
        </p>
        <p style={{ color: "#6B5535", fontFamily: "sans-serif", fontSize: "0.8rem" }}>
          Moon Creek Gourmet Sweets · Spokane, WA · Handcrafted Since 2010
        </p>
      </div>
    </div>
  );
}

export { FlavorsList, FlavorDetail, FLAVOR_DETAILS };
export default FlavorsList;
