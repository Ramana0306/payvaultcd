import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, WifiOff, Smartphone, CreditCard, ArrowRight, 
  Check, Clock, Shield, Users, Globe, Bell, 
  Menu, X, ChevronDown, Star, Phone, Wallet
} from 'lucide-react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const features = [
    { icon: <WifiOff size={24} />, title: "100% Offline Payments", desc: "Pay using mobile number or UPI ID without any internet connection" },
    { icon: <Phone size={24} />, title: "Mobile Number Transfer", desc: "Send money to anyone using just their phone number — no UPI ID needed" },
    { icon: <CreditCard size={24} />, title: "UPI to UPI Transfer", desc: "Direct UPI ID transfers that work even when you're offline" },
    { icon: <Wallet size={24} />, title: "Check Balance Offline", desc: "View your account balance anytime, anywhere — no signal required" },
    { icon: <Clock size={24} />, title: "Recent Transactions", desc: "Access your full transaction history without connecting to the internet" },
    { icon: <ArrowRight size={24} />, title: "Request Money", desc: "Send payment requests to anyone — they can approve even offline" }
  ];

  const highlights = [
    { icon: <Shield size={28} />, title: "Bank-Grade Security", desc: "End-to-end encryption keeps every transaction safe" },
    { icon: <Users size={28} />, title: "For Everyone", desc: "Designed for rural India, metro commuters, and travelers" },
    { icon: <Globe size={28} />, title: "Works Anywhere", desc: "Underground, flights, remote villages — zero signal needed" },
    { icon: <Check size={28} />, title: "Completely Free", desc: "No fees. No subscriptions. No hidden charges. Ever." }
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <Zap className="logo-icon" />
            <span>PayVault</span>
          </div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <button onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>Features</button>
            <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button>
            <button onClick={() => document.getElementById('notify').scrollIntoView({ behavior: 'smooth' })} className="btn-primary">Get Notified</button>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="grid-pattern"></div>
        </div>
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge coming-soon">
              <Clock size={14} />
              <span>Coming Soon</span>
            </div>
            
            <h1>
              Offline Payments,
              <br />
              <span className="gradient-text">Reimagined</span>
            </h1>
            
            <p className="hero-subtitle">
              Send money, check balance, and request payments — all without internet. 
              Built for the 500 million Indians who deserve digital payments, everywhere.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-glow" onClick={() => document.getElementById('notify').scrollIntoView({ behavior: 'smooth' })}>
                <Bell size={18} />
                Notify Me on Launch
              </button>
            </div>
            
            <div className="free-badge">
              <Check size={16} />
              <span>100% Free Forever — No Hidden Fees</span>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-ui">
                  <div className="app-header">
                    <div className="app-logo"><Zap size={16} /> PayVault</div>
                    <div className="offline-indicator"><WifiOff size={12} /> Offline</div>
                  </div>
                  <div className="balance-card">
                    <span className="balance-label">Available Balance</span>
                    <span className="balance-amount">₹24,500</span>
                  </div>
                  <div className="action-grid">
                    <div className="action-btn"><Phone size={18} /> Pay by Number</div>
                    <div className="action-btn"><CreditCard size={18} /> UPI Transfer</div>
                    <div className="action-btn"><Wallet size={18} /> Check Balance</div>
                    <div className="action-btn"><ArrowRight size={18} /> Request</div>
                  </div>
                  <div className="recent-label">Recent Transactions</div>
                  <div className="transaction-list">
                    <div className="tx-item"><span>→ Rahul S.</span><span>₹500</span></div>
                    <div className="tx-item"><span>→ Grocery Store</span><span>₹1,200</span></div>
                    <div className="tx-item"><span>← Priya M.</span><span className="credit">+₹2,000</span></div>
                  </div>
                </div>
              </div>
              <div className="phone-glow"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-tag">Features</span>
            <h2>Everything You Need, Offline</h2>
            <p>Six powerful features that work without a single bar of signal.</p>
          </motion.div>

          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="highlight-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="highlight-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Inventor */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <div className="about-text">
              <span className="section-tag">Built With Purpose</span>
              <h2>Invented for India's Next Billion</h2>
              <p>
                PayVault was born from a simple observation: <strong>500 million Indians</strong> still struggle 
                with digital payments because of poor or no internet connectivity.
              </p>
              <p>
                Whether you're a shop owner in a village with no tower, a commuter in the Mumbai Metro, 
                or a traveler on a flight — your money should move as freely as you do.
              </p>
              <div className="inventor-card">
                <div className="inventor-avatar">R</div>
                <div className="inventor-info">
                  <h4>Ramana Murugan</h4>
                  <span>Inventor</span>
                  <span className="inventor-degree">B.Tech Information Technology</span>
                </div>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="map-india">
                <div className="map-dot dot-1" title="Villages"></div>
                <div className="map-dot dot-2" title="Metros"></div>
                <div className="map-dot dot-3" title="Flights"></div>
                <div className="map-dot dot-4" title="Remote Areas"></div>
                <div className="map-label">India — Fully Covered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notify Section */}
      <section id="notify" className="notify">
        <div className="notify-bg">
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="notify-content"
          >
            <h2>Be the First to Know</h2>
            <p>PayVault launches soon. Join the waitlist and get early access — completely free.</p>
            
            <form onSubmit={handleSubscribe} className="notify-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-glow">
                {subscribed ? <Check size={18} /> : <Bell size={18} />}
                {subscribed ? 'Subscribed!' : 'Notify Me'}
              </button>
            </form>
            
            {subscribed && (
              <motion.p 
                className="success-msg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                🎉 You're on the list! We'll email you when PayVault goes live.
              </motion.p>
            )}
            
            <div className="trust-badges-inline">
              <span><Check size={14} /> No spam, ever</span>
              <span><Check size={14} /> Free forever</span>
              <span><Check size={14} /> Unsubscribe anytime</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                <Zap className="logo-icon" />
                <span>PayVault</span>
              </div>
              <p>Payments without boundaries. Built for India, ready for the world.</p>
              <div className="social-links">
                <a href="#" aria-label="Twitter"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                <a href="#" aria-label="GitHub"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                <a href="#" aria-label="LinkedIn"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#notify">Get Notified</a>
            </div>
            
            <div className="footer-links">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 PayVault. Invented by <strong>Ramana Murugan</strong>. All rights reserved.</p>
            <p className="footer-tagline">B.Tech Information Technology — Built with passion for India's digital future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;