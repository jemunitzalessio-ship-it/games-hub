export default function App() {
  const games = [
    {
      title: "Santa Sleigh Game",
      url: "https://santa-sleigh-game.vercel.app/",
      desc: "Fly Santa’s sleigh and dodge obstacles on the way to Nashville.",
    },
    {
      title: "Socks Game",
      url: "https://socks-game-1.vercel.app/",
      desc: "Guide Socks through the maze and survive.",
    },
  ];

  return (
    <div style={{ maxWidth: 760, margin: "40px auto", padding: 16, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <h1 style={{ marginBottom: 8 }}>Spaulding Christmas Arcade</h1>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Pick a game:
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        {games.map((g) => (
          <a
            key={g.url}
            href={g.url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              padding: 16,
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 12,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 700 }}>{g.title}</div>
            <div style={{ marginTop: 6, opacity: 0.8 }}>{g.desc}</div>
            <div style={{ marginTop: 10, fontSize: 13, opacity: 0.7 }}>{g.url}</div>
          </a>
        ))}
      </div>

      <div style={{ marginTop: 28, fontSize: 12, opacity: 0.7 }}>
        Tip: Bookmark this page as your table of contents.
      </div>
    </div>
  );
}
