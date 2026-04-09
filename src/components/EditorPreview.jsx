import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const sidebarTabs = [
  { id: 'fly', label: '🦋 Fly', active: false },
  { id: 'chat', label: '💬 Chat', active: true },
  { id: 'mail', label: '📧 Mail', active: false },
  { id: 'voice', label: '🎤 Voice', active: false },
  { id: 'cloud', label: '☁️ Cloud', active: false },
];

function ChatPanel() {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">A</div>
        <div>
          <div className="text-[10px] text-gray-500">Alex — 2m ago</div>
          <div className="text-xs text-gray-300 bg-windy-dark/60 rounded-lg p-2 mt-0.5">Can you review the auth PR?</div>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 rounded-full bg-windy-violet/20 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">Y</div>
        <div>
          <div className="text-[10px] text-gray-500">You — just now</div>
          <div className="text-xs text-gray-300 bg-windy-violet/10 rounded-lg p-2 mt-0.5">On it! Fly, pull up PR #42 and run the tests.</div>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">🦋</div>
        <div>
          <div className="text-[10px] text-gray-500">Windy Fly — now</div>
          <div className="text-xs text-gray-300 bg-purple-500/10 rounded-lg p-2 mt-0.5">PR #42 loaded. Running tests... all 47 passing ✓</div>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-windy-violet/10">
        <div className="flex items-center gap-2 bg-windy-dark/60 rounded-lg px-3 py-2">
          <span className="text-xs text-gray-600 flex-1">Message your team...</span>
          <span className="text-gray-600 text-xs">🎤</span>
        </div>
      </div>
    </div>
  );
}

function FlyPanel() {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
        </span>
        <span className="text-[11px] text-green-400 font-semibold">Agent Connected</span>
      </div>
      <div className="bg-windy-dark/60 rounded-lg p-2.5">
        <div className="text-[10px] text-gray-500 mb-1">Current Task</div>
        <div className="text-xs text-gray-300">Reviewing PR #42 — auth middleware refactor</div>
      </div>
      <div className="bg-windy-dark/60 rounded-lg p-2.5">
        <div className="text-[10px] text-gray-500 mb-1">Recent Actions</div>
        <div className="space-y-1 text-[11px]">
          <div className="text-gray-400">✓ Opened src/auth/middleware.ts</div>
          <div className="text-gray-400">✓ Ran test suite (47/47 pass)</div>
          <div className="text-gray-400">✓ Posted review to Chat</div>
        </div>
      </div>
      <div className="bg-windy-dark/60 rounded-lg p-2.5">
        <div className="text-[10px] text-gray-500 mb-1">Verified Agent</div>
        <div className="text-[11px] text-gray-400 flex items-center gap-1">
          <span>🛡️</span> Eternitas Passport: Active
        </div>
      </div>
    </div>
  );
}

function MailPanel() {
  return (
    <div className="p-3 space-y-2">
      <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 font-semibold">Inbox</div>
      <div className="bg-windy-violet/5 rounded-lg p-2.5 border border-windy-violet/10">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] text-white font-medium">Sarah (client)</span>
          <span className="text-[9px] text-gray-600">10m ago</span>
        </div>
        <div className="text-[11px] text-gray-400">Can we ship the dashboard by Friday?</div>
      </div>
      <div className="bg-windy-dark/60 rounded-lg p-2.5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] text-gray-300">GitHub</span>
          <span className="text-[9px] text-gray-600">1h ago</span>
        </div>
        <div className="text-[11px] text-gray-500">PR #41 merged by @alex</div>
      </div>
      <div className="bg-windy-dark/60 rounded-lg p-2.5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] text-gray-300">Windy Fly</span>
          <span className="text-[9px] text-gray-600">2h ago</span>
        </div>
        <div className="text-[11px] text-gray-500">Deploy report: staging v2.4.1 ✓</div>
      </div>
    </div>
  );
}

export default function EditorPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('chat');

  const panelContent = {
    chat: <ChatPanel />,
    fly: <FlyPanel />,
    mail: <MailPanel />,
    voice: (
      <div className="p-3">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[11px] text-red-400 font-semibold">Listening...</span>
        </div>
        <div className="bg-windy-dark/60 rounded-lg p-3 mb-2">
          <div className="text-xs text-gray-300 italic">"Add a loading spinner to the dashboard component"</div>
        </div>
        <div className="text-[10px] text-gray-600">Windy Fly is converting your voice to code...</div>
      </div>
    ),
    cloud: (
      <div className="p-3 space-y-2.5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-400 text-xs">✓</span>
          <span className="text-[11px] text-green-400">All synced</span>
        </div>
        <div className="bg-windy-dark/60 rounded-lg p-2.5">
          <div className="text-[10px] text-gray-500 mb-1">Settings</div>
          <div className="text-[11px] text-gray-400">Synced across 3 devices</div>
        </div>
        <div className="bg-windy-dark/60 rounded-lg p-2.5">
          <div className="text-[10px] text-gray-500 mb-1">Workspaces</div>
          <div className="text-[11px] text-gray-400">my-project, client-dashboard</div>
        </div>
        <div className="bg-windy-dark/60 rounded-lg p-2.5">
          <div className="text-[10px] text-gray-500 mb-1">Storage</div>
          <div className="text-[11px] text-gray-400">1.2 GB / 5 GB (Free tier)</div>
        </div>
      </div>
    ),
  };

  return (
    <section id="editor-preview" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Window. <span className="gradient-text">Five Panels. Zero Switching.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Code in the center. The Windy Sidebar on the right with five tabs — Fly, Chat, Mail, Voice, and Cloud. Click the tabs below to explore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1a1028] border border-windy-violet/20 rounded-2xl overflow-hidden shadow-2xl shadow-windy-violet/10"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#130e1e] border-b border-windy-violet/10">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="ml-3 text-xs text-gray-500">Windy Code — my-project</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <span>💻 Windy Code</span>
            </div>
          </div>

          <div className="flex min-h-[440px]">
            {/* File explorer */}
            <div className="hidden md:block w-48 bg-[#130e1e] border-r border-windy-violet/10 p-3">
              <div className="text-[10px] uppercase tracking-wider text-gray-600 mb-3 font-semibold">Explorer</div>
              <div className="space-y-1 text-xs">
                <div className="text-gray-500 flex items-center gap-1.5">
                  <span className="text-windy-violet/50">▼</span> src
                </div>
                <div className="ml-4 text-gray-400 flex items-center gap-1.5">
                  <span className="text-windy-violet/40">📄</span> App.jsx
                </div>
                <div className="ml-4 text-white bg-windy-violet/15 rounded px-1.5 py-0.5 flex items-center gap-1.5">
                  <span className="text-windy-violet/60">📄</span> index.js
                </div>
                <div className="ml-4 text-gray-400 flex items-center gap-1.5">
                  <span className="text-windy-violet/40">📄</span> styles.css
                </div>
                <div className="text-gray-500 flex items-center gap-1.5">
                  <span className="text-windy-violet/50">▶</span> components
                </div>
                <div className="text-gray-500 flex items-center gap-1.5">
                  <span className="text-windy-violet/50">▶</span> public
                </div>
                <div className="text-gray-400 flex items-center gap-1.5">
                  <span className="text-windy-violet/40">📄</span> package.json
                </div>
              </div>
            </div>

            {/* Editor area */}
            <div className="flex-1 p-4 font-mono text-[13px] leading-[1.7] overflow-hidden">
              {/* Tab bar */}
              <div className="flex items-center gap-0 mb-4 -mt-1 -mx-4 px-4 border-b border-windy-violet/10">
                <div className="px-4 py-2 text-xs text-white bg-[#1a1028] border-t-2 border-t-windy-violet border-r border-r-windy-violet/10">
                  index.js
                </div>
                <div className="px-4 py-2 text-xs text-gray-600 hover:text-gray-400 cursor-pointer">
                  App.jsx
                </div>
              </div>

              {/* Code lines */}
              <div className="space-y-0">
                <div className="flex">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">1</span>
                  <span><span className="text-purple-400">import</span> <span className="text-yellow-300">{'{ WindyFly }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'windy-fly'</span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">2</span>
                  <span><span className="text-purple-400">import</span> <span className="text-yellow-300">{'{ WindyChat }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'windy-chat'</span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">3</span>
                  <span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">4</span>
                  <span><span className="text-purple-400">const</span> <span className="text-blue-300">agent</span> <span className="text-white">=</span> <span className="text-purple-400">new</span> <span className="text-yellow-300">WindyFly</span><span className="text-white">()</span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">5</span>
                  <span><span className="text-purple-400">const</span> <span className="text-blue-300">chat</span> <span className="text-white">=</span> <span className="text-purple-400">new</span> <span className="text-yellow-300">WindyChat</span><span className="text-white">()</span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">6</span>
                  <span></span>
                </div>
                <div className="flex bg-windy-violet/5 -mx-4 px-4 rounded">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">7</span>
                  <span><span className="text-gray-500">// Your agent deploys while you sleep</span></span>
                </div>
                <div className="flex bg-windy-violet/5 -mx-4 px-4 rounded">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">8</span>
                  <span><span className="text-purple-400">await</span> <span className="text-blue-300">agent</span>.<span className="text-yellow-200">run</span><span className="text-white">(</span><span className="text-green-400">'Deploy to production'</span><span className="text-white">)</span></span>
                </div>
                <div className="flex bg-windy-violet/5 -mx-4 px-4 rounded">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">9</span>
                  <span><span className="text-purple-400">await</span> <span className="text-blue-300">agent</span>.<span className="text-yellow-200">notify</span><span className="text-white">(</span><span className="text-blue-300">chat</span><span className="text-white">,</span> <span className="text-green-400">'Deployed ✓'</span><span className="text-white">)</span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">10</span>
                  <span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">11</span>
                  <span><span className="text-gray-500">// AI suggests the next line...</span></span>
                </div>
                <div className="flex items-center">
                  <span className="w-8 text-right text-gray-700 mr-4 select-none text-xs">12</span>
                  <span className="text-gray-600 italic">await agent.email(client, 'Release is live')</span>
                  <span className="ml-1 w-0.5 h-4 bg-windy-violet cursor-blink"></span>
                </div>
              </div>
            </div>

            {/* Windy Sidebar — 5 tabs matching the real codebase */}
            <div className="hidden lg:block w-72 bg-[#130e1e] border-l border-windy-violet/10">
              {/* Sidebar tabs — all 5 panels from the actual codebase */}
              <div className="flex border-b border-windy-violet/10">
                {sidebarTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-1.5 py-2.5 text-[10px] font-semibold transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'text-windy-violet border-b-2 border-windy-violet bg-windy-violet/5'
                        : 'text-gray-600 hover:text-gray-400'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Panel content */}
              {panelContent[activeTab]}
            </div>
          </div>

          {/* Status bar — matches real Windy Code status bar */}
          <div className="flex items-center justify-between px-4 py-1 bg-gradient-to-r from-windy-violet/80 to-windy-indigo/80 text-[11px] text-white/80">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">🦋 Windy Fly: <span className="text-green-300">Active</span></span>
              <span>🛡️ Verified</span>
              <span>JavaScript</span>
            </div>
            <div className="flex items-center gap-4">
              <span>☁️ Synced</span>
              <span>user@windy</span>
              <span>Ln 12, Col 52</span>
            </div>
          </div>
        </motion.div>

        {/* Callout about the sidebar */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          Click the sidebar tabs above to explore Fly, Chat, Mail, Voice, and Cloud — all built into one panel.
        </motion.p>
      </div>
    </section>
  );
}
