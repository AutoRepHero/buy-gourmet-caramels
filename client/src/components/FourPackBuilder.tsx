/**
 * Choose Your Own 4-Pack Builder
 * Interactive form that lets customers pick 4 flavors
 * Submits to PayPal hosted button (ID: X6P4NFR9V79RN)
 * Uses the same PayPal hosted button structure as the original site
 */
import { useState } from "react";
import { Package, ChevronDown, ShoppingCart } from "lucide-react";

const FLAVORS = [
  { value: "Classic Butter", label: "Classic Butter", color: "#F5C842" },
  { value: "Salted Caramel", label: "Salted Caramel", color: "#E8E0D4" },
  { value: "Espresso", label: "Espresso", color: "#4A3728" },
  { value: "Cherry", label: "Cherry", color: "#C62828" },
  { value: "Butter Rum", label: "Butter Rum", color: "#D4A030" },
  { value: "Pecan", label: "Pecan", color: "#8B6914" },
  { value: "Licorice", label: "Licorice", color: "#1B5E20" },
];

export default function FourPackBuilder() {
  const [selections, setSelections] = useState<string[]>(["", "", "", ""]);
  const [isHovered, setIsHovered] = useState(false);

  const updateSelection = (index: number, value: string) => {
    const newSelections = [...selections];
    newSelections[index] = value;
    setSelections(newSelections);
  };

  const allSelected = selections.every((s) => s !== "");
  const selectedCount = selections.filter((s) => s !== "").length;

  return (
    <section id="four-pack" style={{ padding: "4rem 0", background: "#1a1208" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #C8860A, #F5C842)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem",
          }}>
            <Package size={22} color="#1A1208" />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            color: "#F5C842",
            marginBottom: "0.5rem",
          }}>
            Build Your Own 4-Pack
          </h2>
          <p style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "1rem",
            color: "#C8A96A",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}>
            Choose any 4 flavors — mix and match your favorites. Each pack is ¼ lb of each flavor (1 lb total).
          </p>
          <div style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.4rem 1.2rem",
            background: "rgba(200, 134, 10, 0.15)",
            borderRadius: "20px",
            border: "1px solid rgba(200, 134, 10, 0.3)",
          }}>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", color: "#F5C842", fontWeight: "700" }}>
              $36.00
            </span>
            <span style={{ color: "#C8A96A", fontSize: "0.85rem", marginLeft: "0.5rem", fontFamily: "'Source Sans 3', sans-serif" }}>
              / 4-pack (1 lb total)
            </span>
          </div>
        </div>

        {/* Flavor Selectors */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {[0, 1, 2, 3].map((index) => (
            <div key={index} style={{ position: "relative" }}>
              <label style={{
                display: "block",
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#C8A96A",
                marginBottom: "0.4rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                Flavor #{index + 1}
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={selections[index]}
                  onChange={(e) => updateSelection(index, e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.8rem 2.5rem 0.8rem 1rem",
                    background: "#2C1E0A",
                    border: selections[index] ? "1.5px solid #C8860A" : "1.5px solid #4A3728",
                    borderRadius: "8px",
                    color: selections[index] ? "#F5C842" : "#8B7355",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    appearance: "none",
                    cursor: "pointer",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                >
                  <option value="">Select a flavor...</option>
                  {FLAVORS.map((flavor) => (
                    <option key={flavor.value} value={flavor.value}>
                      {flavor.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#C8860A",
                    pointerEvents: "none",
                  }}
                />
                {/* Color indicator dot */}
                {selections[index] && (
                  <div style={{
                    position: "absolute",
                    left: "-8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: FLAVORS.find(f => f.value === selections[index])?.color || "#C8860A",
                  }} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div style={{
            display: "inline-flex",
            gap: "6px",
            alignItems: "center",
          }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: selections[i] ? "#C8860A" : "#4A3728",
                transition: "background 0.2s",
              }} />
            ))}
            <span style={{
              marginLeft: "8px",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.8rem",
              color: "#8B7355",
            }}>
              {selectedCount}/4 selected
            </span>
          </div>
        </div>

        {/* PayPal Submit Button */}
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
          style={{ textAlign: "center" }}
        >
          {/* PayPal hosted button fields */}
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="X6P4NFR9V79RN" />

          {/* Pass flavor selections as option fields */}
          <input type="hidden" name="on0" value="Flavor 1" />
          <input type="hidden" name="os0" value={selections[0] || "Not Selected"} />
          <input type="hidden" name="on1" value="Flavor 2" />
          <input type="hidden" name="os1" value={selections[1] || "Not Selected"} />
          <input type="hidden" name="on2" value="Flavor 3" />
          <input type="hidden" name="os2" value={selections[2] || "Not Selected"} />
          <input type="hidden" name="on3" value="Flavor 4" />
          <input type="hidden" name="os3" value={selections[3] || "Not Selected"} />

          <button
            type="submit"
            disabled={!allSelected}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "1rem 2.5rem",
              background: allSelected
                ? (isHovered ? "#E09B0C" : "#C8860A")
                : "#4A3728",
              color: allSelected ? "#1A1208" : "#8B7355",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "700",
              fontFamily: "'Source Sans 3', sans-serif",
              cursor: allSelected ? "pointer" : "not-allowed",
              transition: "all 0.2s",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
            }}
          >
            <ShoppingCart size={18} />
            {allSelected ? "Order My 4-Pack — $36" : `Select ${4 - selectedCount} More Flavor${4 - selectedCount > 1 ? "s" : ""}`}
          </button>
        </form>

        {/* Note */}
        <p style={{
          textAlign: "center",
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: "0.8rem",
          color: "#6B5535",
          marginTop: "1rem",
        }}>
          Secure checkout via PayPal. Credit cards accepted. Free shipping on orders over $50.
        </p>
      </div>
    </section>
  );
}
