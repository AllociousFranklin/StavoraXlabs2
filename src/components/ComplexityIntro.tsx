import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export function ComplexityIntro() {
  const [phase, setPhase] = useState<"complexity" | "tagline" | "fadeout" | "hidden">("complexity");
  const [visibleWords, setVisibleWords] = useState(0);

  const taglineWords = ["We", "Transform", "Complex", "Challenges", "into", "Simplified", "Solutions"];

  const handleSimplifyClick = () => {
    setPhase("tagline");
    // Show words one by one
    taglineWords.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords(index + 1);
        // After last word, wait 3 seconds then start fadeout
        if (index === taglineWords.length - 1) {
          setTimeout(() => {
            setPhase("fadeout");
            setTimeout(() => {
              setPhase("hidden");
            }, 2000);
          }, 4000); // 4 second pause after tagline completes
        }
      }, index * 400);
    });
  };

  // Binary and Hexadecimal data
  const binaryHex = [
    "0x7FFF5FBFF5D0 0xDEADBEEF 0xCAFEBABE 0x8BADF00D 0xFEEDFACE",
    "1011 0110 1001 1110 0101 1100 1010 1111 0011 0110 1101 0001",
    "0xFF 0xAA 0x55 0x00 0x4A 0x5F 0x8C 0x3B 0x91 0x6D 0xE7 0x2C",
    "0b11010101 0b10011110 0b00101010 0b11110000 0b01011100",
    "0xBAAAAAAD 0xDEADC0DE 0xC0FFEE00 0xFACEFEED 0xD15EA5E",
    "10110110 01011100 11010101 10011110 00101010 11110000 01101001",
    "0x48 0x8D 0x3D 0x51 0x2F 0x00 0x48 0x89 0xE5 0x5D 0xC3",
  ];

  // Nested JSON/XML - deeply confusing structures
  const nestedJSON = [
    `{"data":{"user":{"profile":{"settings":{"notifications":{"email":{"frequency":"daily","enabled":true}}}}}}}`,
    `{"response":{"status":{"code":500,"message":"Internal Server Error","trace":{"stack":[{"file":"app.js","line":247}]}}}}`,
    `<root><data><nested><deep><layer><sublayer><value>ERROR</value></sublayer></layer></deep></nested></data></root>`,
    `{"api":{"v2":{"endpoints":{"users":{"GET":"/api/v2/users/:id","POST":"/api/v2/users","auth":"Bearer"}}}}}`,
    `<config><server><database><connection><pool><min>10</min><max>100</max><idle>30000</idle></pool></connection></database></server></config>`,
    `{"transactions":[{"id":"T-94821","user":{"id":"U-5728","profile":{"name":"John Doe","meta":{"created":"2024-01-15"}}}}]}`,
    `{"services":{"auth":{"oauth2":{"providers":{"google":{"clientId":"xxx","scope":["email","profile"]}}}}}}`,
  ];

  // Error messages and warnings
  const errors = [
    "⚠ CRITICAL: Memory leak detected in process 4729",
    "❌ ERROR: Segmentation fault at address 0x00007FFF5FC00000",
    "🔴 FATAL: Database connection pool exhausted (max: 100)",
    "⛔ EXCEPTION: NullPointerException at line 847",
    "⚠ WARNING: CPU usage exceeding 95% for 300 seconds",
    "❌ FAILED: Authentication token expired",
    "🔴 ALERT: Disk space critical - 97% used",
    "⚠ TIMEOUT: Request exceeded 30000ms limit",
    "❌ ERROR: CORS policy violation from origin",
    "🔴 CRITICAL: SSL handshake failed - certificate invalid",
    "⛔ DENIED: Insufficient permissions for operation",
  ];

  // Database queries and operations
  const databaseOps = [
    "SELECT u.id, u.email, COUNT(o.id) as order_count FROM users u INNER JOIN orders o ON u.id = o.user_id WHERE u.created_at > '2024-01-01' GROUP BY u.id HAVING COUNT(o.id) > 5 ORDER BY order_count DESC LIMIT 100",
    "UPDATE transactions SET status = 'FAILED', error_code = 'TIMEOUT', updated_at = NOW() WHERE created_at < NOW() - INTERVAL 30 MINUTE AND status = 'PENDING'",
    "DELETE FROM logs WHERE severity = 'DEBUG' AND timestamp < DATE_SUB(NOW(), INTERVAL 7 DAY) LIMIT 100000",
    "INSERT INTO audit_log (user_id, action, resource, timestamp) SELECT user_id, 'LOGIN', 'SYSTEM', NOW() FROM user_sessions WHERE active = 1",
  ];

  // System logs and metrics
  const systemLogs = [
    "INFO [2024-11-24 14:23:47] Connection pool initialized: min=10 max=100 timeout=30000ms",
    "WARN [2024-11-24 14:24:12] Query execution time: 2847ms (threshold: 1000ms) - Query: SELECT * FROM users",
    "ERROR [2024-11-24 14:25:33] Deadlock detected on table 'transactions' - Rolling back transaction TX-94821",
    "DEBUG [2024-11-24 14:26:01] Cache hit ratio: 76.3% (hits: 8472 misses: 2091 size: 2.4GB)",
    "INFO [2024-11-24 14:27:19] Index created on users.email - Duration: 47.2s Rows affected: 1,247,893",
  ];

  // API and network data
  const apiData = [
    "POST /api/v2/transactions/batch HTTP/1.1 | Status: 201 | Duration: 247ms | Size: 14.2KB",
    "GET /api/v2/users?limit=100&offset=0&sort=created_at HTTP/1.1 | Status: 200 | Duration: 89ms",
    "PUT /api/v2/customers/c_4729/profile HTTP/1.1 | Status: 500 | Duration: 3847ms | Error: Timeout",
    "DELETE /api/v2/cache/invalidate HTTP/1.1 | Status: 204 | Duration: 12ms",
  ];

  // Financial and business data
  const financialData = [
    "Q4 FY24 Revenue: $47,283,921.47 | YoY Growth: +23.7% | EBITDA: $12,847,293.82 | Margin: 27.2%",
    "Customer Acquisition Cost: $247.38 | Lifetime Value: $3,421.92 | LTV:CAC Ratio: 13.8:1",
    "Monthly Recurring Revenue: $8,947,283.19 | Churn Rate: 2.34% | Net Revenue Retention: 118%",
    "Operating Expenses: $32,847,192.74 | Operating Margin: 34.2% | Free Cash Flow: $14,728,391.28",
  ];

  // Code snippets
  const codeSnippets = [
    "const result = await Promise.all(tasks.map(async (task) => { try { return await processTask(task); } catch (err) { logger.error(err); return null; } }));",
    "if (cache.has(key)) { return cache.get(key); } else { const data = await fetchFromDB(key); cache.set(key, data, TTL); return data; }",
    "throw new DatabaseConnectionError('Connection pool exhausted: all 100 connections in use', { pool: poolStats, retry: false });",
    "async function handleRequest(req: Request): Promise<Response> { const auth = await validateAuth(req.headers); if (!auth.valid) throw new UnauthorizedException(); }",
  ];

  // Generate massive data wall
  const generateDataWall = () => {
    const wall = [];
    for (let i = 0; i < 150; i++) {
      const rand = Math.random();
      if (rand < 0.15) wall.push({ type: "error", text: errors[i % errors.length] });
      else if (rand < 0.3) wall.push({ type: "json", text: nestedJSON[i % nestedJSON.length] });
      else if (rand < 0.45) wall.push({ type: "binary", text: binaryHex[i % binaryHex.length] });
      else if (rand < 0.6) wall.push({ type: "database", text: databaseOps[i % databaseOps.length] });
      else if (rand < 0.7) wall.push({ type: "log", text: systemLogs[i % systemLogs.length] });
      else if (rand < 0.8) wall.push({ type: "api", text: apiData[i % apiData.length] });
      else if (rand < 0.9) wall.push({ type: "financial", text: financialData[i % financialData.length] });
      else wall.push({ type: "code", text: codeSnippets[i % codeSnippets.length] });
    }
    return wall;
  };

  const dataWall = generateDataWall();

  const getColor = (type: string) => {
    switch (type) {
      case "error": return "#ff3333";
      case "json": return "#00ff88";
      case "binary": return "#00ffff";
      case "database": return "#9933ff";
      case "log": return "#ffaa00";
      case "api": return "#3399ff";
      case "financial": return "#00ff00";
      case "code": return "#ff6699";
      default: return "#ffffff";
    }
  };

  return (
    <AnimatePresence>
      {phase !== "hidden" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black overflow-hidden"
          style={{ pointerEvents: phase === "hidden" ? "none" : "auto" }}
        >
          {/* MATRIX-STYLE OVERWHELMING DATA WALL */}
          <div 
            className="absolute inset-0"
            style={{
              opacity: phase === "fadeout" ? 0 : 1,
              transition: "opacity 2s ease-out",
            }}
          >
            {/* Layer 1: Vertical columns - Matrix rain style */}
            {[...Array(8)].map((_, colIndex) => (
              <div
                key={`col-${colIndex}`}
                className="absolute top-0 bottom-0 font-mono text-sm leading-tight overflow-hidden"
                style={{
                  left: `${colIndex * 12.5}%`,
                  width: "12.5%",
                }}
              >
                <motion.div
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{
                    duration: 15 - colIndex,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[0, 1].map((repeatIndex) => (
                    <div key={repeatIndex}>
                      {dataWall.slice(colIndex * 15, (colIndex + 1) * 15).map((item, idx) => (
                        <motion.div
                          key={`${repeatIndex}-${idx}`}
                          className="py-0.5 px-1 break-all"
                          style={{ color: getColor(item.type) }}
                          animate={{
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 1 + Math.random(),
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        >
                          {item.text}
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}

            {/* Layer 2: Horizontal scrolling top */}
            <div className="absolute top-0 left-0 right-0 h-1/3 font-mono text-sm overflow-hidden opacity-60">
              <motion.div
                className="whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[0, 1].map((repeatIndex) => (
                  <span key={repeatIndex} className="inline-block">
                    {dataWall.slice(0, 40).map((item, idx) => (
                      <span
                        key={`${repeatIndex}-${idx}`}
                        className="inline-block px-2"
                        style={{ color: getColor(item.type) }}
                      >
                        {item.text}
                      </span>
                    ))}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Layer 3: Horizontal scrolling bottom (opposite direction) */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 font-mono text-sm overflow-hidden opacity-60">
              <motion.div
                className="whitespace-nowrap"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[0, 1].map((repeatIndex) => (
                  <span key={repeatIndex} className="inline-block">
                    {dataWall.slice(40, 80).map((item, idx) => (
                      <span
                        key={`${repeatIndex}-${idx}`}
                        className="inline-block px-2"
                        style={{ color: getColor(item.type) }}
                      >
                        {item.text}
                      </span>
                    ))}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Flashing error overlay */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`error-${i}`}
                className="absolute font-mono text-base font-semibold"
                style={{
                  left: `${Math.random() * 90}%`,
                  top: `${Math.random() * 90}%`,
                  color: Math.random() > 0.5 ? "#ff0000" : "#ffff00",
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 2 + Math.random() * 3,
                  delay: Math.random() * 3,
                }}
              >
                {errors[i % errors.length].substring(0, 30)}
              </motion.div>
            ))}
          </div>

          {/* Glitch effect */}
          {phase === "complexity" && (
            <motion.div
              className="absolute inset-0 pointer-events-none mix-blend-screen"
              animate={{
                background: [
                  "rgba(255, 0, 0, 0)",
                  "rgba(255, 0, 0, 0.05)",
                  "rgba(0, 255, 0, 0.05)",
                  "rgba(255, 0, 0, 0)",
                ],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          )}

          {/* Scan lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(0deg, rgba(0,255,0,0.03) 0px, transparent 1px, transparent 2px)",
              opacity: phase === "fadeout" ? 0 : 0.5,
              transition: "opacity 2s ease-out",
            }}
          />

          {/* Heavy vignette for center focus */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, transparent 15%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%)",
              opacity: phase === "fadeout" ? 0 : 1,
              transition: "opacity 2s ease-out",
            }}
          />

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Simplify Button - BEACON OF HOPE */}
            {phase === "complexity" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-50"
              >
                {/* Outer glow rings - pulsing */}
                <motion.div
                  className="absolute inset-0 -m-20 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(99, 102, 241, 0.4), rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Second glow ring */}
                <motion.div
                  className="absolute inset-0 -m-16 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.5), rgba(99, 102, 241, 0.3) 50%, transparent 70%)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                />

                {/* Light rays emanating */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-32 origin-bottom"
                    style={{
                      background: "linear-gradient(to top, rgba(139, 92, 246, 0.6), transparent)",
                      transform: `rotate(${i * 30}deg) translateY(-50%)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scaleY: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}

                {/* Floating particles attracted to button */}
                {[...Array(30)].map((_, i) => {
                  const angle = (i / 30) * Math.PI * 2;
                  const distance = 150 + Math.random() * 100;
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full"
                      style={{
                        background: i % 3 === 0 ? "#a78bfa" : i % 3 === 1 ? "#818cf8" : "#60a5fa",
                        left: "50%",
                        top: "50%",
                        boxShadow: "0 0 8px currentColor",
                      }}
                      animate={{
                        x: [
                          Math.cos(angle) * distance,
                          Math.cos(angle) * (distance * 0.6),
                          Math.cos(angle) * distance,
                        ],
                        y: [
                          Math.sin(angle) * distance,
                          Math.sin(angle) * (distance * 0.6),
                          Math.sin(angle) * distance,
                        ],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                      }}
                    />
                  );
                })}

                {/* The Button itself */}
                <motion.button
                  onClick={handleSimplifyClick}
                  className="group relative"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 60px rgba(99, 102, 241, 0.8), 0 0 100px rgba(139, 92, 246, 0.6)",
                      "0 0 80px rgba(99, 102, 241, 1), 0 0 140px rgba(139, 92, 246, 0.8)",
                      "0 0 60px rgba(99, 102, 241, 0.8), 0 0 100px rgba(139, 92, 246, 0.6)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 via-indigo-500 to-blue-500 rounded-2xl blur-md opacity-80 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Main button surface */}
                  <div className="relative px-16 py-7 bg-gradient-to-br from-indigo-500 via-violet-600 to-blue-600 rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30">
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      animate={{
                        x: ["-200%", "200%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500" />
                    
                    {/* Button content */}
                    <div className="relative flex items-center gap-3">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Sparkles className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" size={24} />
                      </motion.div>
                      
                      <span className="text-white text-3xl font-semibold tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                        Simplify
                      </span>
                      
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Sparkles className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" size={24} />
                      </motion.div>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            )}

            {/* SMOOTH PROFESSIONAL TAGLINE */}
            {phase === "tagline" && (
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 px-8 max-w-6xl z-50">
                {taglineWords.map((word, index) => {
                  const isHighlight = ["Complex", "Challenges", "Intuitive", "Solutions"].includes(word);
                  
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(20px)" }}
                      animate={{
                        opacity: index < visibleWords ? 1 : 0,
                        y: index < visibleWords ? 0 : 40,
                        scale: index < visibleWords ? 1 : 0.8,
                        filter: index < visibleWords ? "blur(0px)" : "blur(20px)",
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                      className={`text-5xl md:text-7xl lg:text-8xl ${
                        isHighlight
                          ? "font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                          : "font-semibold text-white"
                      }`}
                      style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </div>
            )}
          </div>

          {/* Subtle glow behind tagline */}
          {phase === "tagline" && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[150px] pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}