/**
 * EventsSection — Live Google Calendar Integration (Client-Side)
 * Design: Dark caramel/gold theme — matches site aesthetic
 * Calendar: buygourmetcaramels@gmail.com (public calendar)
 * Auto-updates: Events added to Google Calendar appear here within minutes
 * No backend required — uses public Google Calendar API
 */

import { useEffect, useState } from "react";
import { MapPin, Calendar, Clock, ChevronRight, RefreshCw } from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  location?: string;
  description?: string;
  allDay: boolean;
}

// Google Calendar public API
const CALENDAR_ID = "buygourmetcaramels@gmail.com";

// Fallback placeholder events
const PLACEHOLDER_EVENTS: CalendarEvent[] = [
  {
    id: "placeholder-1",
    title: "Spokane Farmers Market",
    start: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000),
    location: "Riverfront Park, Spokane, WA",
    description: "Find Moon Creek Gourmet Sweets at our booth! Sample all 7 flavors and take home your favorites.",
    allDay: false,
  },
  {
    id: "placeholder-2",
    title: "South Hill Farmers Market",
    start: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    end: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000),
    location: "South Hill, Spokane, WA",
    description: "Stop by and try our handmade caramels — gift sets available while supplies last.",
    allDay: false,
  },
];

function formatEventDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

function formatEventTime(start: Date, end: Date, allDay: boolean): string {
  if (allDay) return "All Day";
  const timeOpts: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "2-digit", hour12: true };
  return `${start.toLocaleTimeString("en-US", timeOpts)} – ${end.toLocaleTimeString("en-US", timeOpts)}`;
}

function getDayNumber(date: Date): string {
  return date.getDate().toString();
}

function getMonthAbbr(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
}

function getDayAbbr(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
}

function isUpcoming(event: CalendarEvent): boolean {
  return event.end >= new Date();
}

export default function EventsSection() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingPlaceholder, setUsingPlaceholder] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);

    try {
      // Use Google Calendar public API (no API key required for public calendars)
      const now = new Date().toISOString();
      const sixMonthsLater = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString();

      // Google Calendar public API endpoint (works for public calendars)
      const feedUrl = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?timeMin=${now}&timeMax=${sixMonthsLater}&singleEvents=true&orderBy=startTime&maxResults=10&showDeleted=false`;

      const response = await fetch(feedUrl);

      if (!response.ok) {
        // If API fails, use placeholder
        setEvents(PLACEHOLDER_EVENTS);
        setUsingPlaceholder(true);
        setLoading(false);
        return;
      }

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        // No events scheduled — show placeholder
        setEvents(PLACEHOLDER_EVENTS);
        setUsingPlaceholder(true);
        setLoading(false);
        return;
      }

      const parsed: CalendarEvent[] = data.items
        .map((item: any) => {
          const allDay = !!item.start.date;
          const startStr = item.start.dateTime || item.start.date;
          const endStr = item.end.dateTime || item.end.date;
          return {
            id: item.id,
            title: item.summary || "Moon Creek Event",
            start: new Date(startStr),
            end: new Date(endStr),
            location: item.location || "",
            description: item.description || "",
            allDay,
          };
        })
        .filter(isUpcoming);

      if (parsed.length === 0) {
        setEvents(PLACEHOLDER_EVENTS);
        setUsingPlaceholder(true);
      } else {
        setEvents(parsed);
        setUsingPlaceholder(false);
      }
    } catch (err) {
      // Fallback to placeholder events on any error
      console.error("Calendar fetch error:", err);
      setEvents(PLACEHOLDER_EVENTS);
      setUsingPlaceholder(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
    // Refresh every 5 minutes
    const interval = setInterval(fetchEvents, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="events"
      style={{
        background: "linear-gradient(180deg, #1a1208 0%, #2c1e0a 50%, #1a1208 100%)",
        padding: "5rem 0",
        borderTop: "1px solid rgba(200,134,10,0.3)",
        borderBottom: "1px solid rgba(200,134,10,0.3)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(200,134,10,0.15)",
              border: "1px solid rgba(200,134,10,0.4)",
              borderRadius: "20px",
              padding: "0.35rem 1.1rem",
              fontSize: "0.75rem",
              fontFamily: "sans-serif",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C8860A",
              marginBottom: "1rem",
            }}
          >
            Find Us In Person
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#F5C842",
              marginBottom: "0.75rem",
              textShadow: "0 2px 20px rgba(200,134,10,0.3)",
            }}
          >
            Local Events & Farmers Markets
          </h2>
          <p
            style={{
              color: "#C8A96A",
              fontSize: "1rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: "1.7",
              fontStyle: "italic",
            }}
          >
            Come taste before you order. Find Moon Creek at markets and events across the Spokane area.
          </p>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "3rem", color: "#C8A96A" }}>
            <RefreshCw
              size={32}
              style={{ animation: "spin 1s linear infinite", margin: "0 auto 1rem", display: "block" }}
            />
            <p style={{ fontFamily: "sans-serif", fontSize: "0.9rem" }}>Loading upcoming events...</p>
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : events.length === 0 ? (
          <NoEventsCard />
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        {/* Footer note */}
        <div
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {usingPlaceholder && (
            <p
              style={{
                color: "#8A7050",
                fontSize: "0.78rem",
                fontFamily: "sans-serif",
                fontStyle: "italic",
              }}
            >
              * Sample events shown. Actual schedule updates automatically from our Google Calendar.
            </p>
          )}
          <a
            href={`https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(CALENDAR_ID)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(200,134,10,0.12)",
              border: "1px solid rgba(200,134,10,0.4)",
              color: "#C8860A",
              padding: "0.65rem 1.5rem",
              borderRadius: "6px",
              fontFamily: "sans-serif",
              fontSize: "0.85rem",
              fontWeight: "600",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,134,10,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,134,10,0.12)";
            }}
          >
            <Calendar size={15} />
            Subscribe to Our Event Calendar
            <ChevronRight size={14} />
          </a>
          <p style={{ color: "#6B5535", fontSize: "0.75rem", fontFamily: "sans-serif" }}>
            Can't make it in person?{" "}
            <a
              href="tel:+15093426002"
              style={{ color: "#C8860A", textDecoration: "none" }}
            >
              Call us
            </a>{" "}
            or{" "}
            <a href="#flavors" style={{ color: "#C8860A", textDecoration: "none" }}>
              order online
            </a>{" "}
            — we ship nationwide.
          </p>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: CalendarEvent }) {
  const [hovered, setHovered] = useState(false);

  const isToday =
    event.start.toDateString() === new Date().toDateString();
  const isThisWeek =
    event.start.getTime() - Date.now() < 7 * 24 * 60 * 60 * 1000 &&
    event.start.getTime() > Date.now();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(135deg, rgba(200,134,10,0.12), rgba(44,30,10,0.9))"
          : "linear-gradient(135deg, rgba(44,30,10,0.8), rgba(26,18,8,0.9))",
        border: hovered ? "1px solid rgba(200,134,10,0.6)" : "1px solid rgba(200,134,10,0.25)",
        borderRadius: "10px",
        padding: "1.5rem",
        display: "flex",
        gap: "1.25rem",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 30px rgba(200,134,10,0.15)" : "0 2px 10px rgba(0,0,0,0.3)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Upcoming badge */}
      {(isToday || isThisWeek) && (
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            background: isToday ? "#C8860A" : "rgba(200,134,10,0.2)",
            color: isToday ? "#1A1208" : "#C8860A",
            border: isToday ? "none" : "1px solid rgba(200,134,10,0.4)",
            fontSize: "0.65rem",
            fontFamily: "sans-serif",
            fontWeight: "700",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.2rem 0.6rem",
            borderRadius: "10px",
          }}
        >
          {isToday ? "TODAY" : "THIS WEEK"}
        </div>
      )}

      {/* Date Block */}
      <div
        style={{
          flexShrink: 0,
          width: "60px",
          textAlign: "center",
          background: "rgba(200,134,10,0.1)",
          border: "1px solid rgba(200,134,10,0.3)",
          borderRadius: "8px",
          padding: "0.5rem 0.25rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.1rem",
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            fontFamily: "sans-serif",
            fontWeight: "700",
            letterSpacing: "0.12em",
            color: "#C8860A",
            textTransform: "uppercase",
          }}
        >
          {getDayAbbr(event.start)}
        </span>
        <span
          style={{
            fontSize: "1.8rem",
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#F5C842",
            lineHeight: "1",
            fontWeight: "700",
          }}
        >
          {getDayNumber(event.start)}
        </span>
        <span
          style={{
            fontSize: "0.65rem",
            fontFamily: "sans-serif",
            fontWeight: "600",
            color: "#C8A96A",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {getMonthAbbr(event.start)}
        </span>
      </div>

      {/* Event Details */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.05rem",
            color: "#F5C842",
            marginBottom: "0.5rem",
            lineHeight: "1.3",
            paddingRight: isToday || isThisWeek ? "4rem" : "0",
          }}
        >
          {event.title}
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "0.6rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <Clock size={12} color="#C8860A" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: "0.8rem", color: "#C8A96A", fontFamily: "sans-serif" }}>
              {formatEventTime(event.start, event.end, event.allDay)}
            </span>
          </div>

          {event.location && (
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem" }}>
              <MapPin size={12} color="#C8860A" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
              <span style={{ fontSize: "0.8rem", color: "#C8A96A", fontFamily: "sans-serif", lineHeight: "1.3" }}>
                {event.location}
              </span>
            </div>
          )}
        </div>

        {event.description && (
          <p style={{ fontSize: "0.8rem", color: "#A89070", fontFamily: "sans-serif", lineHeight: "1.4", margin: "0.4rem 0 0" }}>
            {event.description}
          </p>
        )}
      </div>
    </div>
  );
}

function NoEventsCard() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(44,30,10,0.8), rgba(26,18,8,0.9))",
        border: "1px solid rgba(200,134,10,0.25)",
        borderRadius: "10px",
        padding: "2.5rem",
        textAlign: "center",
        color: "#C8A96A",
      }}
    >
      <Calendar size={40} style={{ margin: "0 auto 1rem", color: "#C8860A", opacity: 0.6 }} />
      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", color: "#F5C842", marginBottom: "0.5rem" }}>
        No Upcoming Events
      </h3>
      <p style={{ fontSize: "0.9rem", lineHeight: "1.6", margin: "0 auto", maxWidth: "400px" }}>
        We're planning our 2026 event schedule. Check back soon for upcoming farmers markets and local events where you can taste Moon Creek caramels in person.
      </p>
    </div>
  );
}
