export default function Footer() {
  const currentYear = new Date().getFullYear();

  const windyApps = [
    { name: "Windy Word", url: "https://windyword.com", desc: "Voice to Text" },
    { name: "Windy Clone", url: "https://windyclone.com", desc: "Digital Twin" },
    { name: "Windy Chat", url: "https://windychat.com", desc: "Encrypted Chat" },
    { name: "Windy Traveler", url: "https://windytraveler.com", desc: "Travel Companion" },
    { name: "Windy Translate", url: "https://windytranslate.com", desc: "Translation Engine" },
    { name: "Windy Mail", url: "https://windymail.ai", desc: "Email for Humans & AI" },
    { name: "Windy Fly", url: "https://windyfly.ai", desc: "Personal AI Agent" },
    { name: "Windy Cloud", url: "https://windycloud.com", desc: "Storage & Sync" },
    { name: "Eternitas", url: "https://eternitas.ai", desc: "AI Identity & Trust" },
  ];

  const legal = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "Cookie Policy", url: "/cookies" },
  ];

  const social = [
    { name: "Twitter", url: "https://twitter.com/windycode", icon: "𝕏" },
    { name: "GitHub", url: "https://github.com/sneakyfree", icon: "💻" },
    { name: "Discord", url: "https://discord.gg/windycode", icon: "💬" },
    { name: "LinkedIn", url: "https://linkedin.com/company/windycode", icon: "💼" },
  ];

  return (
    <footer className="bg-windy-darker border-t border-windy-violet/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-2">💻</span>
              <span className="text-2xl font-bold gradient-text">Windy Code</span>
            </div>
            <p className="text-gray-500 text-sm mb-2 leading-relaxed">
              The AI-native code editor with the entire Windy ecosystem built in. One window for everything.
            </p>
            <p className="text-gray-600 text-xs mb-5">Part of the Windy Empire</p>
            <div className="flex space-x-3">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="w-9 h-9 rounded-lg bg-windy-dark/50 border border-windy-violet/10 flex items-center justify-center text-lg hover:border-windy-violet/30 hover:bg-windy-violet/5 transition-all duration-200"
                  aria-label={item.name}
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Ecosystem</h3>
            <ul className="space-y-3">
              {windyApps.map((app, index) => (
                <li key={index}>
                  <a
                    href={app.url}
                    className="group flex items-center gap-2 text-gray-500 hover:text-windy-violet transition-colors duration-200 text-sm"
                  >
                    <span>{app.name}</span>
                    <span className="text-gray-700 text-xs">— {app.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-500 hover:text-windy-violet transition-colors duration-200 text-sm">Features</a></li>
              <li><a href="#editor-preview" className="text-gray-500 hover:text-windy-violet transition-colors duration-200 text-sm">Editor Preview</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-windy-violet transition-colors duration-200 text-sm">Pricing</a></li>
              <li><a href="#ecosystem" className="text-gray-500 hover:text-windy-violet transition-colors duration-200 text-sm">Ecosystem</a></li>
              <li><a href="#faq" className="text-gray-500 hover:text-windy-violet transition-colors duration-200 text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-500 hover:text-windy-violet transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-windy-violet/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Windy Code. Part of the Windy Empire. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Built for the creators who refuse to be ordinary
          </p>
        </div>
      </div>
    </footer>
  );
}
