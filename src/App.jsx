import { useEffect, useState } from "react";

export default function App() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Generate snowflakes
    const flakes = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 8,
      size: 4 + Math.random() * 8,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setSnowflakes(flakes);
  }, []);

  const games = [
    {
      title: "Santa Sleigh Game",
      url: "https://santa-sleigh-game.vercel.app/",
      desc: "Fly Santa's sleigh and dodge obstacles on the way to Nashville.",
      screenGradient: "linear-gradient(180deg, #0a1628 0%, #1a3a5c 50%, #2d5a7b 100%)",
      screenContent: "sleigh",
    },
    {
      title: "Socks Game",
      url: "https://socks-game-1.vercel.app/",
      desc: "Guide Socks through the maze and survive.",
      screenGradient: "linear-gradient(180deg, #1a0a28 0%, #2d1a4a 50%, #4a2d6b 100%)",
      screenContent: "socks",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Outfit:wght@400;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body, #root {
          width: 100%;
          margin: 0;
          padding: 0;
        }

        body {
          margin: 0;
          background: linear-gradient(180deg, #0d1b2a 0%, #1b263b 50%, #2d1b3d 100%);
          min-height: 100vh;
        }

        @keyframes snowfall {
          0% {
            transform: translateY(-20px) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }

        @keyframes neonPulse {
          0%, 100% { 
            text-shadow: 
              0 0 10px #ff6b6b,
              0 0 20px #ff6b6b,
              0 0 40px #ff0000,
              0 0 80px #ff0000;
          }
          50% { 
            text-shadow: 
              0 0 5px #ff6b6b,
              0 0 10px #ff6b6b,
              0 0 20px #ff0000,
              0 0 40px #ff0000;
          }
        }

        @keyframes greenNeonPulse {
          0%, 100% { 
            text-shadow: 
              0 0 10px #4ade80,
              0 0 20px #4ade80,
              0 0 40px #22c55e,
              0 0 80px #22c55e;
          }
          50% { 
            text-shadow: 
              0 0 5px #4ade80,
              0 0 10px #4ade80,
              0 0 20px #22c55e,
              0 0 40px #22c55e;
          }
        }

        @keyframes screenGlow {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(100, 200, 255, 0.5),
              inset 0 0 30px rgba(100, 200, 255, 0.1);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(100, 200, 255, 0.7),
              inset 0 0 40px rgba(100, 200, 255, 0.15);
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes sleighMove {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -5px); }
          50% { transform: translate(20px, 0); }
          75% { transform: translate(10px, 5px); }
        }

        @keyframes catWalk {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(15px); }
        }

        .arcade-cabinet {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .arcade-cabinet:hover {
          transform: scale(1.02) translateY(-5px);
          filter: brightness(1.1);
        }

        .arcade-cabinet:hover .screen-content {
          animation-play-state: running;
        }

        .snowflake {
          position: fixed;
          color: white;
          pointer-events: none;
          z-index: 1000;
          animation: snowfall linear infinite;
        }

        .star {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(180deg, #0d1b2a 0%, #1b263b 40%, #2d1b3d 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "40px 20px 60px",
        boxSizing: "border-box",
      }}>
        {/* Snowflakes */}
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snowflake"
            style={{
              left: `${flake.left}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
              fontSize: `${flake.size}px`,
              opacity: flake.opacity,
            }}
          >
            ❄
          </div>
        ))}

        {/* Stars in background */}
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 40}%`,
              width: "3px",
              height: "3px",
              background: "#fff",
              borderRadius: "50%",
              boxShadow: "0 0 6px #fff",
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Christmas lights string at top */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "10px",
        }}>
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`light-${i}`}
              style={{
                width: "12px",
                height: "18px",
                borderRadius: "50% 50% 50% 50%",
                background: ["#ff3333", "#33ff33", "#ffcc00", "#3399ff", "#ff66cc"][i % 5],
                boxShadow: `0 0 10px ${["#ff3333", "#33ff33", "#ffcc00", "#3399ff", "#ff66cc"][i % 5]}, 0 0 20px ${["#ff3333", "#33ff33", "#ffcc00", "#3399ff", "#ff66cc"][i % 5]}`,
                animation: `twinkle ${1 + Math.random()}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div style={{ 
          width: "100%", 
          position: "relative", 
          zIndex: 1,
        }}>
          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px" }}>
            <h1 style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "clamp(18px, 4vw, 32px)",
              color: "#ff6b6b",
              animation: "neonPulse 2s ease-in-out infinite",
              marginBottom: "8px",
              lineHeight: 1.4,
            }}>
              🎄 SPAULDING 🎄
            </h1>
            <h2 style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "clamp(14px, 3vw, 24px)",
              color: "#4ade80",
              animation: "greenNeonPulse 2s ease-in-out infinite",
              animationDelay: "0.5s",
            }}>
              CHRISTMAS ARCADE
            </h2>
          </div>

          {/* Subtitle */}
          <p style={{
            textAlign: "center",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "16px",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "40px",
            letterSpacing: "2px",
          }}>
            ✨ INSERT COIN TO PLAY ✨
          </p>

          {/* Arcade Cabinets */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "40px",
            flexWrap: "wrap",
            width: "100%",
            alignSelf: "stretch",
          }}>
            {games.map((game, index) => (
              <a
                key={game.url}
                href={game.url}
                target="_blank"
                rel="noreferrer"
                className="arcade-cabinet"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Cabinet */}
                <div style={{
                  width: "280px",
                  background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
                  borderRadius: "20px 20px 10px 10px",
                  padding: "15px",
                  position: "relative",
                  boxShadow: `
                    0 20px 60px rgba(0,0,0,0.5),
                    inset 0 2px 0 rgba(255,255,255,0.1),
                    0 0 30px ${index === 0 ? "rgba(255,100,100,0.3)" : "rgba(100,255,100,0.3)"}
                  `,
                }}>
                  {/* Marquee (top sign) */}
                  <div style={{
                    background: index === 0 
                      ? "linear-gradient(180deg, #ff4444 0%, #cc0000 100%)"
                      : "linear-gradient(180deg, #44ff44 0%, #00cc00 100%)",
                    borderRadius: "12px 12px 0 0",
                    padding: "12px 10px",
                    textAlign: "center",
                    marginBottom: "10px",
                    boxShadow: `
                      0 0 20px ${index === 0 ? "rgba(255,0,0,0.5)" : "rgba(0,255,0,0.5)"},
                      inset 0 -3px 10px rgba(0,0,0,0.3)
                    `,
                  }}>
                    <div style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: "10px",
                      color: "#fff",
                      textShadow: "2px 2px 0 rgba(0,0,0,0.5)",
                      lineHeight: 1.6,
                    }}>
                      {game.title.toUpperCase()}
                    </div>
                  </div>

                  {/* Screen bezel */}
                  <div style={{
                    background: "#111",
                    borderRadius: "8px",
                    padding: "12px",
                    marginBottom: "15px",
                  }}>
                    {/* Screen */}
                    <div style={{
                      background: game.screenGradient,
                      borderRadius: "4px",
                      height: "180px",
                      position: "relative",
                      overflow: "hidden",
                      animation: "screenGlow 3s ease-in-out infinite",
                    }}>
                      {/* Scanlines effect */}
                      <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 3px)",
                        pointerEvents: "none",
                        zIndex: 2,
                      }} />

                      {/* Screen content */}
                      {game.screenContent === "sleigh" ? (
                        <div style={{ position: "relative", width: "100%", height: "100%", padding: "20px" }}>
                          {/* Moon */}
                          <div style={{
                            position: "absolute",
                            top: "15px",
                            right: "20px",
                            width: "40px",
                            height: "40px",
                            background: "radial-gradient(circle, #ffffd0 0%, #ffff80 100%)",
                            borderRadius: "50%",
                            boxShadow: "0 0 30px #ffff80",
                          }} />
                          {/* Stars */}
                          {[...Array(8)].map((_, i) => (
                            <div key={i} style={{
                              position: "absolute",
                              top: `${15 + Math.random() * 40}%`,
                              left: `${10 + Math.random() * 60}%`,
                              width: "4px",
                              height: "4px",
                              background: "#fff",
                              borderRadius: "50%",
                              animation: `twinkle ${1 + Math.random()}s infinite`,
                            }} />
                          ))}
                          {/* Sleigh */}
                          <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "30%",
                            fontSize: "32px",
                            animation: "sleighMove 3s ease-in-out infinite",
                          }}>
                            🛷
                          </div>
                          {/* Santa */}
                          <div style={{
                            position: "absolute",
                            top: "45%",
                            left: "38%",
                            fontSize: "28px",
                            animation: "sleighMove 3s ease-in-out infinite",
                          }}>
                            🎅
                          </div>
                          {/* Buildings silhouette */}
                          <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "50px",
                            background: "#0a1020",
                            clipPath: "polygon(0 100%, 0 60%, 5% 60%, 5% 40%, 15% 40%, 15% 50%, 25% 50%, 25% 30%, 35% 30%, 35% 60%, 45% 60%, 45% 20%, 55% 20%, 55% 50%, 65% 50%, 65% 35%, 75% 35%, 75% 55%, 85% 55%, 85% 45%, 100% 45%, 100% 100%)",
                          }} />
                          {/* Press Start text */}
                          <div style={{
                            position: "absolute",
                            bottom: "60px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontFamily: "'Press Start 2P'",
                            fontSize: "7px",
                            color: "#fff",
                            animation: "flicker 1s infinite",
                          }}>
                            PRESS START
                          </div>
                        </div>
                      ) : (
                        <div style={{ position: "relative", width: "100%", height: "100%", padding: "20px" }}>
                          {/* Maze walls */}
                          <div style={{
                            position: "absolute",
                            top: "20px",
                            left: "20px",
                            right: "20px",
                            bottom: "50px",
                            border: "3px solid #9333ea",
                            borderRadius: "4px",
                            boxShadow: "0 0 10px #9333ea",
                          }}>
                            {/* Inner maze lines */}
                            <div style={{
                              position: "absolute",
                              top: "30%",
                              left: 0,
                              width: "60%",
                              height: "3px",
                              background: "#9333ea",
                              boxShadow: "0 0 8px #9333ea",
                            }} />
                            <div style={{
                              position: "absolute",
                              top: "30%",
                              right: "20%",
                              width: "3px",
                              height: "40%",
                              background: "#9333ea",
                              boxShadow: "0 0 8px #9333ea",
                            }} />
                            <div style={{
                              position: "absolute",
                              bottom: "30%",
                              right: 0,
                              width: "50%",
                              height: "3px",
                              background: "#9333ea",
                              boxShadow: "0 0 8px #9333ea",
                            }} />
                          </div>
                          {/* Dog character */}
                          <div style={{
                            position: "absolute",
                            top: "45%",
                            left: "35%",
                            fontSize: "24px",
                            animation: "catWalk 2s ease-in-out infinite",
                          }}>
                            🐕
                          </div>
                          {/* Collectibles */}
                          <div style={{ position: "absolute", top: "35%", left: "70%", fontSize: "14px" }}>🧦</div>
                          <div style={{ position: "absolute", top: "65%", left: "25%", fontSize: "14px" }}>🧦</div>
                          <div style={{ position: "absolute", top: "55%", left: "75%", fontSize: "14px" }}>🧦</div>
                          {/* Press Start text */}
                          <div style={{
                            position: "absolute",
                            bottom: "15px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontFamily: "'Press Start 2P'",
                            fontSize: "7px",
                            color: "#fff",
                            animation: "flicker 1s infinite",
                          }}>
                            PRESS START
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Control panel */}
                  <div style={{
                    background: "linear-gradient(180deg, #333 0%, #222 100%)",
                    borderRadius: "8px",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}>
                    {/* Joystick */}
                    <div style={{
                      width: "35px",
                      height: "35px",
                      background: "radial-gradient(circle at 30% 30%, #444, #111)",
                      borderRadius: "50%",
                      position: "relative",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
                    }}>
                      <div style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -80%)",
                        width: "12px",
                        height: "30px",
                        background: "linear-gradient(90deg, #222, #444, #222)",
                        borderRadius: "6px",
                      }}>
                        <div style={{
                          width: "20px",
                          height: "20px",
                          background: "radial-gradient(circle at 30% 30%, #ff4444, #aa0000)",
                          borderRadius: "50%",
                          position: "absolute",
                          top: "-8px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          boxShadow: "0 0 10px rgba(255,0,0,0.5)",
                        }} />
                      </div>
                    </div>

                    {/* Buttons */}
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div style={{
                        width: "28px",
                        height: "28px",
                        background: "radial-gradient(circle at 30% 30%, #ff6666, #cc0000)",
                        borderRadius: "50%",
                        boxShadow: "0 4px 0 #880000, 0 0 15px rgba(255,0,0,0.5)",
                      }} />
                      <div style={{
                        width: "28px",
                        height: "28px",
                        background: "radial-gradient(circle at 30% 30%, #66ff66, #00cc00)",
                        borderRadius: "50%",
                        boxShadow: "0 4px 0 #008800, 0 0 15px rgba(0,255,0,0.5)",
                      }} />
                    </div>
                  </div>

                  {/* Coin slot */}
                  <div style={{
                    marginTop: "12px",
                    textAlign: "center",
                  }}>
                    <div style={{
                      display: "inline-block",
                      background: "#111",
                      borderRadius: "4px",
                      padding: "4px 15px",
                      border: "2px solid #444",
                    }}>
                      <div style={{
                        width: "30px",
                        height: "4px",
                        background: "#000",
                        borderRadius: "2px",
                        margin: "0 auto",
                        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.8)",
                      }} />
                    </div>
                    <div style={{
                      fontFamily: "'Press Start 2P'",
                      fontSize: "6px",
                      color: "#ffd700",
                      marginTop: "6px",
                      textShadow: "0 0 10px rgba(255,215,0,0.8)",
                    }}>
                      INSERT COIN
                    </div>
                  </div>

                  {/* Side stripe decorations */}
                  <div style={{
                    position: "absolute",
                    left: "5px",
                    top: "80px",
                    bottom: "80px",
                    width: "4px",
                    background: index === 0 
                      ? "repeating-linear-gradient(180deg, #ff0000 0px, #ff0000 10px, #ffcc00 10px, #ffcc00 20px)"
                      : "repeating-linear-gradient(180deg, #00ff00 0px, #00ff00 10px, #ffcc00 10px, #ffcc00 20px)",
                    borderRadius: "2px",
                  }} />
                  <div style={{
                    position: "absolute",
                    right: "5px",
                    top: "80px",
                    bottom: "80px",
                    width: "4px",
                    background: index === 0 
                      ? "repeating-linear-gradient(180deg, #ff0000 0px, #ff0000 10px, #ffcc00 10px, #ffcc00 20px)"
                      : "repeating-linear-gradient(180deg, #00ff00 0px, #00ff00 10px, #ffcc00 10px, #ffcc00 20px)",
                    borderRadius: "2px",
                  }} />
                </div>

                {/* Game description */}
                <div style={{
                  marginTop: "15px",
                  textAlign: "center",
                  padding: "0 10px",
                  width: "280px",
                }}>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.5,
                    textAlign: "center",
                  }}>
                    {game.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom decorations */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "50px",
            fontSize: "40px",
            animation: "float 3s ease-in-out infinite",
          }}>
            🎁 🎄 ⭐ 🎄 🎁
          </div>

          {/* Footer tip */}
          <div style={{
            textAlign: "center",
            marginTop: "30px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "12px",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "1px",
          }}>
            🔖 Bookmark this page as your table of contents
          </div>
        </div>
      </div>
    </>
  );
}
