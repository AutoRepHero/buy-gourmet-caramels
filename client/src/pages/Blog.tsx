/**
 * Blog Page — Full SEO-optimized articles
 * Each article targets specific buyer/informational keywords
 * Designed to answer LLM queries and rank for long-tail searches
 */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, Tag, ChevronRight } from "lucide-react";

interface BlogArticle {
  slug: string;
  category: string;
  title: string;
  metaDescription: string;
  readTime: string;
  publishDate: string;
  content: string;
  keywords: string[];
}

const ARTICLES: BlogArticle[] = [
  {
    slug: "what-makes-caramel-gourmet",
    category: "Caramel 101",
    title: "What Makes a Caramel 'Gourmet'? The 5 Key Differences",
    metaDescription: "Learn what separates gourmet caramels from mass-produced candy. Discover the 5 key differences in ingredients, process, texture, flavor, and freshness that define artisan quality.",
    readTime: "4 min read",
    publishDate: "2026-01-15",
    keywords: ["gourmet caramels", "artisan caramels", "handcrafted caramels", "what makes caramel gourmet"],
    content: `
## What Makes a Caramel "Gourmet"?

Not all caramels are created equal. Walk down any grocery store candy aisle and you'll find caramels wrapped in cellophane, mass-produced by the millions. Then there are gourmet caramels — handcrafted confections that bear almost no resemblance to their factory-made cousins.

Here are the 5 key differences that separate a truly gourmet caramel from everything else:

### 1. Real Ingredients vs. Artificial Substitutes

**Gourmet caramels** use real butter, fresh heavy cream, pure cane sugar, and natural flavor additions. At Moon Creek Gourmet Sweets, our Cherry Caramel uses real Washington-grown Montmorency cherries. Our Espresso Caramel uses actual Pitotti Coffee from Spokane — not "coffee flavoring."

**Mass-produced caramels** typically use corn syrup, hydrogenated oils, artificial flavors, and preservatives to extend shelf life. Check the ingredient list — if you see "partially hydrogenated vegetable oil" or "artificial flavor," it's not gourmet.

### 2. Small-Batch Cooking vs. Factory Production

Gourmet caramels are cooked in small batches — often just 5-10 pounds at a time. This allows the candy maker to monitor temperature precisely (caramel's sweet spot is around 245°F) and achieve the perfect consistency.

Factory caramels are produced in industrial vats holding hundreds of pounds, making precise temperature control nearly impossible. The result? Inconsistent texture and flavor.

### 3. Texture: Soft & Chewy vs. Hard or Gummy

A properly made gourmet caramel should be:
- **Soft enough** to bite through without effort
- **Chewy enough** to savor for 30-60 seconds
- **Smooth** with no graininess or crystallization

The texture comes from precise temperature control and the ratio of butter to cream. Too much heat = hard candy. Too little = sticky mess. Gourmet candy makers hit that narrow window every time.

### 4. Flavor Depth vs. One-Note Sweetness

Mass-produced caramels taste like one thing: sugar. Gourmet caramels have layers of flavor — the nuttiness of browned butter, the complexity of caramelized sugar, the richness of real cream, and whatever natural additions the maker includes.

Our Licorice Caramel, for example, uses 100% pure anise oil — not "licorice flavoring." The difference is like comparing fresh-squeezed orange juice to Tang.

### 5. Freshness vs. Shelf Stability

Gourmet caramels are made fresh and meant to be eaten within weeks, not months. Because they contain real butter and cream (no preservatives), they have a natural shelf life of 4-6 weeks at room temperature.

Mass-produced caramels are engineered to sit on shelves for 12-18 months. That longevity comes at the cost of taste and ingredient quality.

---

## Why It Matters

When you buy gourmet caramels, you're not just buying candy — you're buying craftsmanship. Every batch is made by hand, tasted for quality, and wrapped with care. It's the difference between a home-cooked meal and fast food.

At Moon Creek Gourmet Sweets, we've been making caramels from scratch in Spokane, WA since 2010. No preservatives. No shortcuts. Just real ingredients, small batches, and 7 unique flavors you won't find anywhere else.

**Ready to taste the difference?** [Shop all 7 flavors](/flavors) or call us at (509) 342-6002.
    `,
  },
  {
    slug: "pitotti-coffee-espresso-caramel",
    category: "Our Ingredients",
    title: "Why We Use Pitotti Coffee for Our Espresso Caramel",
    metaDescription: "Discover why Moon Creek partners with Spokane's Pitotti Coffee for our Espresso Caramel. Learn about the local roast, flavor profile, and what makes this caramel uniquely Spokane.",
    readTime: "3 min read",
    publishDate: "2026-02-01",
    keywords: ["espresso caramel", "Pitotti Coffee Spokane", "coffee caramel", "Spokane gourmet caramels"],
    content: `
## Why We Use Pitotti Coffee for Our Espresso Caramel

When we set out to create an espresso caramel, we had one rule: no instant coffee, no generic "coffee flavoring," no shortcuts. We wanted a caramel that tasted like a real shot of espresso — bold, complex, and unmistakably crafted.

That search led us to Pitotti Coffee, a small-batch roaster right here in Spokane, Washington.

### The Pitotti Difference

Pitotti Coffee's Intense Espresso blend is roasted specifically for espresso extraction — meaning it's designed to deliver maximum flavor in concentrated form. The profile includes:

- **Deep crema notes** — rich, almost chocolatey
- **Smooth finish** — no bitterness or acidity
- **Bold body** — stands up to the sweetness of caramel without disappearing

Most "coffee caramels" on the market use instant coffee powder or generic coffee extract. You can taste the difference immediately — they're flat, one-dimensional, and often bitter.

### How We Infuse It

We brew Pitotti's Intense Espresso at double strength, then fold it directly into our butter caramel base during the cooking process. This isn't a coating or a drizzle — the espresso is cooked into the caramel itself, creating a seamless fusion of flavors.

The result: a caramel that tastes like someone melted a perfect latte into buttery candy. The coffee flavor hits first, followed by the rich caramel sweetness, with a smooth espresso finish.

### Local Pride, Local Quality

Both Moon Creek and Pitotti Coffee are Spokane businesses. We believe in supporting local makers and using the best ingredients our region has to offer. Washington State is known for exceptional coffee culture — and Pitotti represents the best of Spokane's roasting craft.

### What Customers Say

Our Espresso Caramel is consistently one of our top sellers. Customers describe it as:

> "Not just coffee-flavored — truly espresso-infused. You can taste the quality of the roast." — Terri D.

> "I'm a coffee snob and this is the only coffee caramel I've ever liked." — Mark R.

---

**Try our Espresso Caramel:** Available in [¼ lb ($12), ½ lb ($18), and 1 lb ($34)](/flavors) sizes. Ships nationwide from Spokane, WA.
    `,
  },
  {
    slug: "gourmet-caramel-gift-guide",
    category: "Gift Guide",
    title: "The Ultimate Gourmet Caramel Gift Guide for Every Occasion",
    metaDescription: "Find the perfect gourmet caramel gift for birthdays, holidays, corporate events, weddings, and more. Sizes, pricing, and packaging options from Moon Creek Gourmet Sweets.",
    readTime: "5 min read",
    publishDate: "2026-02-15",
    keywords: ["caramel gift", "gourmet caramel gift box", "caramel gift basket", "corporate caramel gifts", "caramel wedding favors"],
    content: `
## The Ultimate Gourmet Caramel Gift Guide

Gourmet caramels make one of the most universally loved gifts. They're elegant enough for corporate clients, personal enough for close friends, and delicious enough that nobody ever regrets receiving them.

Here's our complete guide to choosing the perfect caramel gift for every occasion.

### For Birthdays & Thank-You Gifts

**Best choice:** Variety Pack (½ lb or 1 lb)

Our Variety Pack includes all 7 flavors with color-coded wrappers, so the recipient gets to discover their favorite. It's like giving 7 gifts in one box.

- ½ lb Variety Pack: $20 (perfect for individual gifts)
- 1 lb Variety Pack: $36 (generous, impressive presentation)

### For Corporate & Client Gifts

**Best choice:** Custom bulk orders

Nothing says "we value your business" like handcrafted, locally-made gourmet caramels. We offer:

- Custom quantities (10, 25, 50, 100+ units)
- Branded packaging options
- Volume pricing for large orders
- Direct shipping to multiple addresses

Call (509) 342-6002 for corporate pricing and custom packaging.

### For Holiday Gifts (Christmas, Hanukkah, New Year)

**Best choice:** 1 lb Variety Pack or themed gift sets

The holiday season is our busiest time. Our color-coded wrappers (white for Salted, yellow for Butter, orange for Pecan, red for Cherry, green for Espresso) create a naturally festive presentation.

**Pro tip:** Order by December 10th for guaranteed holiday delivery.

### For Wedding & Event Favors

**Best choice:** Individual ¼ lb packages

Our individually wrapped caramels in color-coded packaging make elegant wedding favors. Popular choices:

- Salted Caramel (white wrappers) — clean, elegant
- Cherry Caramel (red wrappers) — romantic, bold
- Classic Butter (yellow wrappers) — traditional, universally loved

Call for bulk pricing on 50+ units.

### For "Just Because" & Self-Gifting

**Best choice:** Single flavor, ¼ lb

Not sure which flavor someone will love? Start with our best sellers:

1. **Salted Caramel** — the crowd-pleaser
2. **Espresso** — for coffee lovers
3. **Cherry** — for the adventurous

At $12 for a ¼ lb, it's an affordable luxury that feels special.

---

## Shipping & Freshness

All gifts ship fresh from Spokane, WA. Our caramels stay fresh for 4-6 weeks at room temperature — plenty of time for your recipient to enjoy them (though most people finish them in days).

Free shipping on orders over $50.

**Ready to order?** [Shop all flavors](/flavors) | Call (509) 342-6002 for custom gift orders.
    `,
  },
  {
    slug: "montmorency-cherries-washington",
    category: "Our Ingredients",
    title: "Montmorency Cherries: Why Washington Grows the World's Best",
    metaDescription: "Learn why Washington-grown Montmorency cherries make our Cherry Caramel exceptional. Discover the tart cherry variety's unique flavor profile and health benefits.",
    readTime: "3 min read",
    publishDate: "2026-03-01",
    keywords: ["cherry caramel", "Montmorency cherries", "Washington cherries", "tart cherry caramel"],
    content: `
## Montmorency Cherries: The Secret Behind Our Cherry Caramel

Our Cherry Caramel isn't made with cherry flavoring or cherry extract. It's made with real Montmorency cherries — specifically, Washington-grown Montmorency cherries, widely considered the finest tart cherries in the world.

### What Are Montmorency Cherries?

Montmorency is a variety of tart cherry (also called sour cherry) that accounts for about 95% of tart cherry production in the United States. Unlike sweet cherries (Bing, Rainier), Montmorency cherries have:

- **Bright, tart flavor** — complex acidity that balances sweetness
- **Deep red color** — vibrant, natural pigment
- **High juice content** — intensely flavorful
- **Natural antioxidants** — among the highest of any fruit

### Why Washington State?

Washington is one of the premier cherry-growing regions in the world. The combination of volcanic soil, dry summers, cold winters, and abundant irrigation from the Columbia River creates ideal growing conditions.

Washington Montmorency cherries are known for:
- Higher sugar content than other regions (the dry climate concentrates flavors)
- Exceptional tartness-to-sweetness ratio
- Consistent quality year over year

### How We Use Them

We source dried Montmorency cherries from Washington orchards and blend them directly into our butter caramel base during cooking. The cherries partially dissolve, infusing the entire caramel with their tart-sweet flavor while leaving small pieces for texture.

The result is a caramel that tastes unmistakably of real cherry — not artificial, not candy-like, but genuinely fruity with the complexity that only real fruit provides.

### What Makes It Different

Most "cherry caramels" on the market use:
- Cherry flavoring (artificial)
- Cherry extract (diluted)
- Maraschino cherry pieces (processed, artificially colored)

Ours uses the actual fruit. You can see the cherry pieces. You can taste the tartness. It's a completely different experience.

### Health Benefits (Bonus)

Montmorency cherries are also one of the few natural food sources of melatonin and are rich in anthocyanins (powerful antioxidants). While our caramels are candy — not health food — it's nice to know the ingredients bring something real to the table.

---

**Try our Cherry Caramel:** Available in [¼ lb ($12), ½ lb ($18), and 1 lb ($34)](/flavors) sizes. Made with real Washington Montmorency cherries.
    `,
  },
  {
    slug: "licorice-caramel-story",
    category: "Flavor Spotlight",
    title: "The Licorice Caramel: Our Most Adventurous Flavor Explained",
    metaDescription: "Discover Moon Creek's unique Licorice Caramel made with 100% pure anise oil. Learn why this one-of-a-kind flavor has become a cult favorite you won't find anywhere else.",
    readTime: "4 min read",
    publishDate: "2026-03-15",
    keywords: ["licorice caramel", "anise caramel", "unique caramel flavors", "artisan licorice candy"],
    content: `
## The Licorice Caramel: A Flavor You Won't Find Anywhere Else

Of all 7 flavors in our collection, the Licorice Caramel is the one that surprises people most. It's also the one that creates the most passionate fans.

### Why Licorice + Caramel?

The idea came from a simple observation: licorice lovers are devoted. They seek out real licorice flavor everywhere — and rarely find it done well in candy beyond traditional licorice twists and drops.

We asked: what if we took the warm, herbal complexity of real anise and married it with the buttery richness of our caramel base?

The result was something entirely new — not a licorice candy, not a plain caramel, but a fusion that creates a third flavor greater than the sum of its parts.

### 100% Pure Anise Oil

This is the key: we use **100% pure anise oil**, not "licorice flavoring" or "natural flavors." Pure anise oil has a clean, bright, herbal quality that artificial licorice flavoring can't replicate.

The difference is like comparing fresh basil to dried basil flakes — technically the same flavor family, but worlds apart in complexity and freshness.

### Who Loves It

Our Licorice Caramel has developed a cult following among:

- **Licorice enthusiasts** who appreciate real anise flavor
- **Adventurous eaters** looking for something they've never tried
- **Gift buyers** who want to include a "conversation piece" in a variety box
- **Scandinavian food lovers** familiar with salted licorice traditions

### What Customers Say

> "I ordered the licorice caramel on a whim and it's now my go-to. I've never seen this flavor anywhere else." — Rosemarie T.

> "I'm not even a huge licorice fan but something about it with the caramel just works. It's addictive." — James K.

### The One-of-a-Kind Factor

We've searched extensively and cannot find another caramel maker in the United States offering a pure anise oil licorice caramel. This is genuinely a one-of-a-kind product.

If you're looking for a caramel experience you literally cannot get anywhere else — this is it.

---

**Try our Licorice Caramel:** Available in [¼ lb ($12), ½ lb ($18), and 1 lb ($34)](/flavors) sizes. Made with 100% pure anise oil — a Moon Creek original.
    `,
  },
  {
    slug: "how-to-store-gourmet-caramels",
    category: "Storage & Freshness",
    title: "How to Store Gourmet Caramels to Keep Them Fresh Longer",
    metaDescription: "Learn the best ways to store handcrafted gourmet caramels at room temperature, in the fridge, and in the freezer. No preservatives means freshness depends on proper storage.",
    readTime: "3 min read",
    publishDate: "2026-04-01",
    keywords: ["how to store caramels", "caramel shelf life", "keep caramels fresh", "gourmet caramel storage"],
    content: `
## How to Store Gourmet Caramels to Keep Them Fresh

Because our caramels contain no preservatives — just real butter, cream, and sugar — their freshness depends on how you store them. Here's the definitive guide to keeping your Moon Creek caramels at their best.

### Room Temperature (4-6 Weeks)

**Best for:** Caramels you'll eat within a month

- Store in a cool, dry place (60-72°F ideal)
- Keep in the original packaging or an airtight container
- Away from direct sunlight and heat sources
- Away from strong odors (caramels can absorb nearby smells)

**What to expect:** Caramels will maintain their soft, chewy texture and full flavor for 4-6 weeks at room temperature.

### Refrigerated (Up to 3 Months)

**Best for:** Extending freshness for gifts or bulk orders

- Place in an airtight container or sealed zip-lock bag
- Let caramels come to room temperature for 10-15 minutes before eating (they'll be firmer when cold)
- Keep away from strong-smelling foods in the fridge

**What to expect:** Texture will be slightly firmer when cold but returns to normal at room temp. Flavor remains excellent for up to 3 months.

### Frozen (Up to 6 Months)

**Best for:** Long-term storage, buying in bulk, or saving for special occasions

- Wrap individually or in small groups with wax paper
- Place in a freezer-safe airtight container or heavy-duty freezer bag
- Remove air before sealing
- Thaw at room temperature for 20-30 minutes before eating

**What to expect:** Properly frozen caramels taste nearly identical to fresh when thawed. Texture may be very slightly different but most people can't tell.

### Storage Tips by Flavor

| Flavor | Special Notes |
|--------|--------------|
| Classic Butter | Most shelf-stable; stores well at any temperature |
| Salted Caramel | Salt may crystallize slightly in fridge — perfectly normal |
| Espresso | Coffee flavor intensifies slightly over time |
| Cherry | Cherry pieces may firm up when cold; let warm fully |
| Butter Rum | Stores identically to Classic Butter |
| Pecan | Nut oils can go rancid; eat within 4 weeks at room temp |
| Licorice | Anise flavor remains stable; excellent for freezing |

### Signs Your Caramels Have Gone Bad

- Hardened or dried-out texture (lost moisture)
- Off smell or sour taste
- Visible mold (extremely rare with proper storage)
- Grainy or crystallized texture throughout

### The Bottom Line

The best storage method is the one that matches when you plan to eat them:
- **This week?** Counter is fine.
- **This month?** Counter in a cool spot.
- **Next month?** Refrigerator.
- **Months from now?** Freezer.

---

**Order fresh:** All Moon Creek caramels ship fresh from Spokane, WA. [Shop all 7 flavors](/flavors) or call (509) 342-6002.
    `,
  },
  {
    slug: "best-caramels-corporate-gifts",
    category: "Gift Guide",
    title: "Best Gourmet Caramels for Corporate Gifts in 2026",
    metaDescription: "Looking for corporate gift ideas? Gourmet caramels are the perfect professional gift — universally loved, easy to ship, and memorable. Here's how to order in bulk.",
    readTime: "4 min read",
    publishDate: "2026-03-01",
    keywords: ["corporate gift caramels", "business gifts", "bulk caramel order", "professional gift ideas"],
    content: `
## Best Gourmet Caramels for Corporate Gifts in 2026

Finding the right corporate gift is a challenge every business faces. It needs to be universally appealing, professionally packaged, easy to ship, and memorable enough to strengthen relationships. Gourmet caramels check every box.

### Why Caramels Beat Other Corporate Gifts

**Universal appeal:** Unlike wine (some don't drink), flowers (short-lived), or branded merchandise (often discarded), handcrafted caramels are loved by virtually everyone. They cross cultural boundaries, dietary preferences (compared to chocolate), and age groups.

**Easy logistics:** Caramels ship flat, don't require refrigeration for short periods, and arrive looking beautiful. No fragile glass, no wilting, no size concerns.

**Memorable:** A box of artisan caramels from a small-batch maker in Spokane, WA tells a story. It shows you chose something special — not a generic gift basket from a catalog.

**Price-appropriate:** At $18-36 per box, gourmet caramels hit the sweet spot for corporate gifting — generous enough to impress, reasonable enough for volume orders.

### How to Order Corporate Gifts from Moon Creek

Moon Creek Gourmet Sweets offers custom corporate gift orders:

- **Variety Packs** — All 7 flavors with color-coded wrappers (½ lb $20 / 1 lb $36)
- **Single-flavor bulk** — Choose one crowd-pleaser like Salted Caramel for consistency
- **Custom quantities** — 10, 25, 50, or 100+ boxes
- **Custom packaging** — Add your company card or message
- **Direct shipping** — Ship to multiple addresses (employee homes, client offices)

### Best Flavors for Corporate Gifts

1. **Variety Pack** — Safest choice. Everyone finds a favorite.
2. **Salted Caramel** — The universally loved crowd-pleaser.
3. **Espresso** — Perfect for coffee-loving teams.

### When to Send Corporate Caramels

- **Holiday season** (November-December) — Client appreciation
- **Q1 kickoff** (January) — Team motivation
- **Client milestones** — Contract renewals, project completions
- **Employee recognition** — Birthdays, work anniversaries, promotions

---

**Ready to order?** Call (509) 342-6002 for custom corporate gift pricing and bulk discounts. We ship nationwide from Spokane, WA.
    `,
  },
  {
    slug: "caramel-vs-toffee-difference",
    category: "Caramel 101",
    title: "Caramel vs. Toffee: What's the Difference?",
    metaDescription: "Caramel and toffee look similar but they're completely different confections. Learn the key differences in temperature, texture, ingredients, and taste.",
    readTime: "3 min read",
    publishDate: "2026-03-15",
    keywords: ["caramel vs toffee", "difference between caramel and toffee", "types of caramel candy", "caramel explained"],
    content: `
## Caramel vs. Toffee: What's the Difference?

People often use "caramel" and "toffee" interchangeably, but they're actually quite different confections. Understanding the difference helps you appreciate what makes each one special — and why gourmet caramels have their own distinct craft.

### The Key Differences

| Factor | Caramel | Toffee |
|--------|---------|--------|
| **Temperature** | 245-250°F (firm ball stage) | 300-310°F (hard crack stage) |
| **Texture** | Soft, chewy, pliable | Hard, brittle, snaps when broken |
| **Cream content** | High (butter + heavy cream) | Lower (mostly butter + sugar) |
| **Cooking time** | 15-25 minutes | 20-35 minutes |
| **Eating experience** | Chew for 30-60 seconds | Crunch and dissolve |

### It All Comes Down to Temperature

The fundamental difference is cooking temperature:

- **Caramel** is cooked to the "firm ball" stage (245°F). At this temperature, the sugar crystallizes into a soft, chewy structure that yields to your teeth.
- **Toffee** is cooked to the "hard crack" stage (300°F+). The higher temperature drives out more moisture and creates a rigid, brittle candy that snaps cleanly.

Same basic ingredients (sugar, butter) — completely different results based on 50 degrees of temperature difference.

### Why Caramel Is Harder to Make

Paradoxically, the lower temperature makes caramel MORE difficult to craft well:

- The margin for error is tiny — 5°F too high and it's hard; 5°F too low and it's sticky
- The higher cream content means more moisture to manage during cooking
- Achieving consistent texture across batches requires experience and attention

At Moon Creek, we cook every batch to precisely 245°F, monitoring with a calibrated thermometer. This narrow window is why we make caramels in small batches — you simply cannot achieve this precision in large industrial vats.

### Which Should You Choose?

Choose **caramel** if you prefer:
- Soft, chewy candy you can savor
- Rich, buttery flavor with cream notes
- Something that melts in your mouth gradually

Choose **toffee** if you prefer:
- Crunchy, brittle candy
- Intense butterscotch flavor
- Quick-dissolving texture

### Moon Creek's Approach

All Moon Creek products are soft caramels — cooked to the perfect 245°F sweet spot where they're firm enough to hold their shape but soft enough to bite through effortlessly. Our 7 flavors showcase what caramel does best: deliver rich, layered flavors in a chewy, satisfying format.

---

**Taste the difference:** [Shop our 7 handcrafted caramel flavors](/flavors) — each one cooked to perfection in Spokane, WA.
    `,
  },
  {
    slug: "spokane-food-gifts-local-artisan",
    category: "Local",
    title: "Best Spokane Food Gifts: Local Artisan Products to Send Nationwide",
    metaDescription: "Looking for Spokane food gifts to send? Discover the best local artisan food products from Spokane, WA that ship nationwide — including handcrafted gourmet caramels.",
    readTime: "4 min read",
    publishDate: "2026-04-01",
    keywords: ["Spokane food gifts", "Spokane artisan food", "local Spokane gifts", "Washington state food gifts"],
    content: `
## Best Spokane Food Gifts: Local Artisan Products to Send Nationwide

Spokane, Washington has a thriving artisan food scene that most people outside the Pacific Northwest don't know about. From small-batch coffee roasters to handcrafted confections, Spokane produces some of the finest food gifts in the country — and many of them ship nationwide.

### Why Spokane Food Gifts Stand Out

Spokane's food artisans benefit from:

- **Pacific Northwest ingredients** — Access to Washington's world-class cherries, apples, berries, and dairy
- **Small-batch culture** — Spokane's maker community values craft over volume
- **Lower overhead** — Compared to Seattle or Portland, Spokane artisans can invest more in ingredients and less in rent
- **Genuine passion** — These aren't venture-backed startups; they're families who love what they make

### Moon Creek Gourmet Sweets: Spokane's Handcrafted Caramels

Moon Creek Gourmet Sweets has been making caramels from scratch in Spokane since 2010. What makes them a standout Spokane food gift:

- **7 unique flavors** including Espresso (made with Spokane's own Pitotti Coffee), Cherry (Washington Montmorency cherries), and Licorice (100% pure anise oil — the only one of its kind)
- **No preservatives, no artificial anything** — real butter, fresh cream, natural ingredients
- **Ships nationwide** — fresh from Spokane to any address in the US
- **Gift-ready** — Variety packs with color-coded wrappers make beautiful presents

### What Makes a Great Food Gift?

The best food gifts share these qualities:

1. **A story** — Where it's made, who makes it, why it's special
2. **Quality you can taste** — Real ingredients that are obviously better than store-bought
3. **Shareability** — Something the recipient can enjoy with family or colleagues
4. **Shelf stability** — Arrives in perfect condition without refrigeration
5. **Uniqueness** — Something they can't buy at their local grocery store

Moon Creek caramels check all five boxes. A Licorice Caramel made with pure anise oil? You literally cannot find that anywhere else in the country.

### How to Order Spokane Food Gifts

Moon Creek ships to all 50 states from Spokane, WA:

- **Online:** BuyGourmetCaramels.com
- **Phone:** (509) 342-6002
- **In person:** Spokane-area farmers markets (check our events calendar)

Free shipping on orders over $50. Perfect for holidays, birthdays, corporate gifts, or "just because."

---

**Send a taste of Spokane:** [Shop all 7 flavors](/flavors) or build a [custom 4-pack](/flavors#four-pack).
    `,
  },
  {
    slug: "valentines-day-caramel-gifts",
    category: "Seasonal",
    title: "Valentine's Day Caramel Gifts: Why Gourmet Caramels Beat Chocolate",
    metaDescription: "Skip the generic chocolate box this Valentine's Day. Gourmet caramels are a more unique, memorable, and personal gift. Here's why — and how to order.",
    readTime: "3 min read",
    publishDate: "2026-01-20",
    keywords: ["Valentine's Day caramel gift", "caramel valentines", "gourmet candy gift", "Valentine's Day candy"],
    content: `
## Valentine's Day Caramel Gifts: Why Gourmet Caramels Beat Chocolate

Every Valentine's Day, millions of heart-shaped chocolate boxes get exchanged. They're predictable, often mediocre in quality, and forgotten within a day. This year, give something that actually surprises and delights: handcrafted gourmet caramels.

### Why Caramels Are the Better Valentine's Gift

**1. Unexpected** — Everyone expects chocolate on Valentine's Day. Caramels show you put thought into it.

**2. Higher quality per dollar** — A $20 box of Valentine's chocolate is mass-produced. A $20 box of Moon Creek caramels is handcrafted from scratch with real butter and cream.

**3. More flavors to explore** — Our Variety Pack includes 7 unique flavors with color-coded wrappers. It's an experience, not just a snack.

**4. Lasts longer** — Properly stored, gourmet caramels stay fresh for 4-6 weeks. That heart-shaped chocolate box? Stale by February 20th.

**5. Shareable** — A box of caramels is perfect for sharing over a date night, a movie, or a quiet evening together.

### Best Valentine's Caramel Picks

- **For the romantic:** Classic Butter — pure, simple, elegant
- **For the adventurous:** Variety Pack — let them discover all 7 flavors
- **For the coffee lover:** Espresso Caramel — made with real Pitotti Coffee
- **For the unique soul:** Licorice Caramel — one-of-a-kind, unforgettable

### Valentine's Day Ordering Tips

- **Order by February 8th** for guaranteed delivery by the 14th
- **Add a personal note** — call (509) 342-6002 to include a handwritten message
- **Ship directly** — we can send straight to your Valentine's address
- **Pair with flowers** — caramels + a single rose = perfect combination

### Price Guide for Valentine's Caramels

| Option | Price | Best For |
|--------|-------|----------|
| ¼ lb single flavor | $12 | Sweet gesture |
| ½ lb Variety Pack | $20 | Thoughtful gift |
| 1 lb Variety Pack | $36 | Grand romantic gesture |
| Custom 4-Pack | $36 | Personalized selection |

---

**Order your Valentine's caramels:** [Shop now](/flavors) or call (509) 342-6002. Ships fresh from Spokane, WA to anywhere in the US.
    `,
  },
  {
    slug: "christmas-caramel-gift-boxes",
    category: "Seasonal",
    title: "Christmas Caramel Gift Boxes: The Perfect Holiday Treat to Ship Nationwide",
    metaDescription: "Gourmet caramel gift boxes make the perfect Christmas gift — easy to ship, universally loved, and beautifully packaged. Order handcrafted caramels for everyone on your list.",
    readTime: "4 min read",
    publishDate: "2026-10-15",
    keywords: ["Christmas caramel gifts", "holiday caramel gift box", "caramel Christmas presents", "gourmet holiday gifts"],
    content: `
## Christmas Caramel Gift Boxes: The Perfect Holiday Treat

Every holiday season, the same question comes up: what do you get for the person who has everything? The answer is simpler than you think — handcrafted gourmet caramels that ship fresh to their door.

### Why Caramels Are the Perfect Christmas Gift

**They're universally loved.** Unlike candles (scent preferences vary), clothing (size issues), or gadgets (they probably already have it), handcrafted caramels delight virtually everyone.

**They ship beautifully.** No fragile glass, no wilting flowers, no batteries required. Caramels arrive in perfect condition via standard shipping.

**They tell a story.** "These are handmade by a family in Spokane, Washington — no preservatives, real butter, seven unique flavors" is a much better story than "I got this from Amazon."

**They fit any budget.** From a $12 quarter-pound stocking stuffer to a $36 full-pound luxury gift, there's an option for every name on your list.

### Christmas Gift Ideas by Recipient

| Who | Best Option | Price |
|-----|-------------|-------|
| Coworkers | ¼ lb Salted Caramel | $12 each |
| Parents/In-Laws | 1 lb Variety Pack | $36 |
| Best friend | Custom 4-Pack (their favorites) | $36 |
| Teacher/Coach | ½ lb Variety Pack | $20 |
| Stocking stuffers | ¼ lb any flavor | $12 |
| Boss/Client | 1 lb Variety Pack + card | $36 |

### Holiday Ordering Timeline

- **November 1-15:** Order early for guaranteed availability of all flavors
- **December 1-10:** Last call for standard shipping delivery by Christmas
- **December 11-15:** Express shipping available (call for details)
- **December 16+:** Local Spokane pickup only

### Why Moon Creek for Christmas Gifts

- **Handcrafted in Spokane, WA** — supporting a real family business
- **7 unique flavors** with color-coded wrappers — beautiful presentation
- **No preservatives** — made fresh for the holidays
- **Ships to all 50 states** — one order, multiple addresses
- **Bulk discounts** — ordering 10+ boxes? Call for pricing

---

**Start your Christmas list:** [Shop all flavors](/flavors) or call (509) 342-6002 for bulk holiday orders. Free shipping over $50.
    `,
  },
  {
    slug: "mothers-day-caramel-gift-ideas",
    category: "Seasonal",
    title: "Mother's Day Gift Ideas: Handcrafted Caramels She'll Actually Love",
    metaDescription: "Skip the generic Mother's Day gifts. Handcrafted gourmet caramels are personal, luxurious, and show you put real thought into it. Order online, ships nationwide.",
    readTime: "3 min read",
    publishDate: "2026-04-15",
    keywords: ["Mother's Day caramel gift", "Mother's Day candy", "gifts for mom", "gourmet gifts for her"],
    content: `
## Mother's Day Gift Ideas: Handcrafted Caramels She'll Actually Love

Mother's Day is May 11th, and if you're tired of giving the same flowers-and-card combination every year, it's time to upgrade. Handcrafted gourmet caramels are the kind of thoughtful, luxurious treat that makes Mom feel truly appreciated.

### Why Moms Love Gourmet Caramels

**It's personal.** Choosing specific flavors shows you know her taste. Does she love coffee? Espresso Caramel. Adventurous? Licorice. Classic elegance? Salted Caramel.

**It's indulgent.** Moms rarely splurge on themselves. A box of handcrafted caramels is a small luxury that says "you deserve this."

**It's shareable.** She can enjoy them with Dad, the kids, or keep the whole box to herself (no judgment).

**It arrives beautifully.** No wrapping required — our caramels come in color-coded wrappers that look gift-ready out of the box.

### Best Mother's Day Caramel Picks

1. **Variety Pack (1 lb, $36)** — All 7 flavors. She can discover her favorite.
2. **Cherry Caramel (½ lb, $18)** — Made with real Washington Montmorency cherries. Elegant and fruity.
3. **Custom 4-Pack ($36)** — Choose 4 flavors you know she'll love.
4. **Salted Caramel (½ lb, $18)** — The universally adored classic.

### Mother's Day Ordering Tips

- **Order by May 3rd** for guaranteed delivery by Mother's Day (May 11th)
- **Ship directly to Mom** — we'll send it straight to her address
- **Add a phone call** — call (509) 342-6002 to include a personal message
- **Pair with tea or coffee** — caramels + her favorite beverage = perfect afternoon treat

### What Makes This Better Than Flowers

| Factor | Flowers | Gourmet Caramels |
|--------|---------|------------------|
| Lasts | 5-7 days | 4-6 weeks |
| Shareable | Not really | Absolutely |
| Unique | Generic | 7 handcrafted flavors |
| Story | From a florist | From a family in Spokane |
| Price | $40-80 | $18-36 |
| Enjoyment | Visual only | Tastes amazing |

---

**Order Mom's caramels:** [Shop now](/flavors) or call (509) 342-6002. Ships fresh from Spokane, WA. Free shipping over $50.
    `,
  },
];

// ─── Blog List Page ───────────────────────────────────────────────────────────
function BlogList() {
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
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", color: "#2C1E0A", marginBottom: "0.5rem" }}>
          The Caramel Blog
        </h1>
        <p style={{ color: "#6B5535", fontSize: "1.05rem", marginBottom: "3rem", fontFamily: "'Source Sans 3', sans-serif", lineHeight: "1.7" }}>
          Guides, stories, and insider knowledge about handcrafted gourmet caramels — from ingredients to storage to gifting.
        </p>

        {/* Article Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {ARTICLES.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: "none" }}>
              <article
                style={{
                  background: "white",
                  border: "1px solid #E8DFD0",
                  borderRadius: "10px",
                  padding: "1.75rem",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#C8860A";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(200,134,10,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E8DFD0";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ background: "#FFF3D6", color: "#8B6914", fontSize: "0.7rem", fontWeight: "600", padding: "0.25rem 0.7rem", borderRadius: "12px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {article.category}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#9A8A70", fontSize: "0.75rem", fontFamily: "sans-serif" }}>
                    <Clock size={11} /> {article.readTime}
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", color: "#2C1E0A", marginBottom: "0.5rem", lineHeight: "1.3" }}>
                  {article.title}
                </h2>
                <p style={{ color: "#6B5535", fontSize: "0.9rem", lineHeight: "1.6", fontFamily: "'Source Sans 3', sans-serif", margin: 0 }}>
                  {article.metaDescription}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "1rem", color: "#C8860A", fontSize: "0.8rem", fontWeight: "600", fontFamily: "sans-serif" }}>
                  Read Article <ChevronRight size={14} />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer CTA */}
      <div style={{ background: "#1a1208", padding: "3rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#C8A96A", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", marginBottom: "1rem" }}>
          Ready to taste what you've been reading about?
        </p>
        <Link href="/" style={{ display: "inline-block", background: "#C8860A", color: "#1A1208", padding: "0.75rem 2rem", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontFamily: "sans-serif", fontSize: "0.9rem" }}>
          Shop All 7 Flavors
        </Link>
      </div>
    </div>
  );
}

// ─── Individual Article Page ──────────────────────────────────────────────────
function BlogArticle({ slug }: { slug: string }) {
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFCF7" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#2C1E0A" }}>Article Not Found</h1>
          <Link href="/blog" style={{ color: "#C8860A" }}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FFFCF7" }}>
      {/* Header */}
      <header style={{ background: "#1a1208", padding: "1rem 0", borderBottom: "2px solid #C8860A" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#F5C842", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", fontWeight: "700" }}>
            BuyGourmetCaramels.com
          </Link>
          <Link href="/blog" style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#C8A96A", textDecoration: "none", fontSize: "0.85rem", fontFamily: "sans-serif" }}>
            <ArrowLeft size={14} /> All Articles
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <main style={{ maxWidth: "750px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <span style={{ background: "#FFF3D6", color: "#8B6914", fontSize: "0.7rem", fontWeight: "600", padding: "0.25rem 0.7rem", borderRadius: "12px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {article.category}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#9A8A70", fontSize: "0.75rem", fontFamily: "sans-serif" }}>
            <Clock size={11} /> {article.readTime}
          </span>
          <span style={{ color: "#9A8A70", fontSize: "0.75rem", fontFamily: "sans-serif" }}>
            {new Date(article.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#2C1E0A", marginBottom: "2rem", lineHeight: "1.2" }}>
          {article.title}
        </h1>

        {/* Render markdown-like content */}
        <div
          style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", lineHeight: "1.8", color: "#3D2E1A" }}
          dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
        />

        {/* Keywords / Tags */}
        <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid #E8DFD0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <Tag size={14} color="#9A8A70" />
            {article.keywords.map((kw) => (
              <span key={kw} style={{ background: "#F5EFE3", color: "#6B5535", fontSize: "0.7rem", padding: "0.2rem 0.6rem", borderRadius: "10px", fontFamily: "sans-serif" }}>
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #E8DFD0" }}>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", color: "#2C1E0A", marginBottom: "1rem" }}>
            More Articles
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {ARTICLES.filter((a) => a.slug !== slug).slice(0, 3).map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} style={{ color: "#C8860A", textDecoration: "none", fontSize: "0.95rem", fontFamily: "'Source Sans 3', sans-serif", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <ChevronRight size={14} /> {a.title}
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer CTA */}
      <div style={{ background: "#1a1208", padding: "3rem 1.5rem", textAlign: "center", marginTop: "3rem" }}>
        <p style={{ color: "#C8A96A", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", marginBottom: "1rem" }}>
          Ready to taste what you've been reading about?
        </p>
        <Link href="/" style={{ display: "inline-block", background: "#C8860A", color: "#1A1208", padding: "0.75rem 2rem", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontFamily: "sans-serif", fontSize: "0.9rem" }}>
          Shop All 7 Flavors
        </Link>
      </div>
    </div>
  );
}

// Simple markdown-to-HTML renderer for blog content
function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 style="font-family: \'Playfair Display\', Georgia, serif; font-size: 1.2rem; color: #2C1E0A; margin: 2rem 0 0.75rem; font-weight: 700;">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 style="font-family: \'Playfair Display\', Georgia, serif; font-size: 1.5rem; color: #2C1E0A; margin: 2.5rem 0 1rem; font-weight: 700;">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color: #2C1E0A; font-weight: 600;">$1</strong>')
    .replace(/^- (.+)$/gm, '<li style="margin: 0.3rem 0; padding-left: 0.5rem;">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, (match) => `<ul style="list-style: disc; padding-left: 1.5rem; margin: 1rem 0;">${match}</ul>`)
    .replace(/^> (.+)$/gm, '<blockquote style="border-left: 3px solid #C8860A; padding: 0.75rem 1rem; margin: 1.5rem 0; background: #FFF8ED; color: #5C4A2A; font-style: italic; border-radius: 0 6px 6px 0;">$1</blockquote>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" style="color: #C8860A; text-decoration: underline;">$1</a>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      const row = cells.map(c => `<td style="padding: 0.5rem 1rem; border: 1px solid #E8DFD0;">${c.trim()}</td>`).join('');
      return `<tr>${row}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, (match) => `<table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.9rem;">${match}</table>`)
    .replace(/^---$/gm, '<hr style="border: none; border-top: 1px solid #E8DFD0; margin: 2.5rem 0;" />')
    .replace(/\n\n/g, '</p><p style="margin: 1rem 0;">')
    .replace(/^(?!<[hubltrp])(.+)$/gm, '<p style="margin: 1rem 0;">$1</p>');
}

// ─── Export ───────────────────────────────────────────────────────────────────
export { BlogList, BlogArticle, ARTICLES };
export default BlogList;
