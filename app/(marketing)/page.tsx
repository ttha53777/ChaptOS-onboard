export default function ChaptOSLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.18),transparent_30%)]" />

      {/* Navbar */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-bold">
              C
            </div>
            <span className="font-semibold text-lg tracking-tight">ChaptOS</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#ai" className="hover:text-white transition">AI</a>
            <a href="#dashboard" className="hover:text-white transition">Dashboard</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform">
            Join Beta
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full px-4 py-2 text-sm text-white/70 mb-8">
              AI-powered chapter infrastructure
            </div>

            <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-[0.95] max-w-3xl">
              Run your entire chapter from one operating system.
            </h1>

            <p className="mt-8 text-lg text-white/60 max-w-xl leading-relaxed">
              ChaptOS centralizes events, recruitment, treasury, announcements,
              task management, and AI-powered chapter operations into one unified
              platform.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-7 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform">
                Book Demo
              </button>

              <button className="px-7 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition">
                View Platform
              </button>
            </div>

            <div className="flex gap-10 mt-14 text-sm text-white/50">
              <div>
                <div className="text-2xl font-semibold text-white">All-in-one</div>
                <div>Chapter management</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">AI-first</div>
                <div>Operations system</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">Real-time</div>
                <div>Analytics & insights</div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

            <div className="relative border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[32px] p-6 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-lg font-semibold">Chapter Overview</div>
                  <div className="text-sm text-white/50">Live operations dashboard</div>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                  <div className="text-sm text-white/50">Upcoming Events</div>
                  <div className="text-3xl font-semibold mt-2">12</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                  <div className="text-sm text-white/50">Dues Collected</div>
                  <div className="text-3xl font-semibold mt-2">84%</div>
                </div>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-5 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-medium">Recruitment Funnel</div>
                    <div className="text-sm text-white/50">Spring Rush Analytics</div>
                  </div>
                  <div className="text-green-400 text-sm">+18%</div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Interested</span>
                      <span>126</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-white rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Interviewed</span>
                      <span>72</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[60%] bg-blue-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 rounded-2xl p-5">
                <div className="text-sm text-white/50 mb-2">Ask ChaptOS</div>
                <div className="text-white/90">
                  &ldquo;Create a philanthropy event next Thursday and notify the chapter.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-sm text-blue-400 mb-4">Everything in one place</div>
            <h2 className="text-5xl font-semibold tracking-tight leading-tight">
              Built for modern chapter operations.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Event Management",
              "Recruitment CRM",
              "Treasury & Dues",
              "Announcements",
              "Task Delegation",
              "Attendance Tracking",
              "Analytics Dashboard",
              "AI Assistant",
            ].map((feature) => (
              <div
                key={feature}
                className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 mb-5" />
                <h3 className="text-lg font-medium">{feature}</h3>
                <p className="text-sm text-white/50 mt-3 leading-relaxed">
                  Streamline chapter workflows and reduce operational overhead.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section id="ai" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
            AI Layer
          </div>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight max-w-4xl mx-auto leading-tight">
            Ask your chapter anything.
          </h2>

          <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto">
            ChaptOS turns chapter management into simple conversations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-20 text-left">
            {[
              "Create a philanthropy event next Thursday",
              "Who hasn’t paid dues yet?",
              "Summarize chapter activity this week",
              "Draft a recruitment announcement",
            ].map((prompt) => (
              <div
                key={prompt}
                className="border border-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur-xl"
              >
                <div className="text-sm text-white/40 mb-3">Prompt</div>
                <div className="text-lg">{prompt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="relative z-10 py-28 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-sm text-purple-400 mb-5">Live Dashboard</div>
            <h2 className="text-5xl font-semibold tracking-tight leading-tight">
              See your chapter in real time.
            </h2>

            <div className="space-y-8 mt-10">
              {[
                {
                  title: "Treasury Analytics",
                  description:
                    "Track dues, spending, budgets, and chapter finances instantly.",
                },
                {
                  title: "Recruitment Pipeline",
                  description:
                    "Monitor rush performance and member engagement.",
                },
                {
                  title: "Operational Insights",
                  description:
                    "Understand trends across attendance, retention, and activity.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="text-white/50 mt-2 leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-[36px] p-8 backdrop-blur-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-xl font-semibold">Operational Metrics</div>
                <div className="text-sm text-white/50">Last 30 days</div>
              </div>
              <div className="text-green-400">+24%</div>
            </div>

            <div className="space-y-6">
              {[85, 62, 91, 74].map((value, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">
                      {
                        [
                          "Attendance",
                          "Task Completion",
                          "Dues Collection",
                          "Recruitment Conversion",
                        ][index]
                      }
                    </span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative z-10 py-32 px-6 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto text-center border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[40px] p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%)]" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl mx-auto">
              Stop running your chapter through 12 different apps.
            </h2>

            <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto">
              ChaptOS brings your entire organization together into one intelligent operating system.
            </p>

            <div className="flex justify-center gap-4 mt-10 flex-wrap">
              <button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform">
                Get Started
              </button>

              <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <div>&copy; 2026 ChaptOS</div>
          <div>Built for modern fraternity operations.</div>
        </div>
      </footer>
    </div>
  );
}
