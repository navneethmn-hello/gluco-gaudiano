import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Clock, 
  Zap, 
  Utensils, 
  Sun, 
  Dumbbell, 
  Moon, 
  Wine, 
  Brain,
  Shield,
  Users,
  MapPin,
  MessageSquare,
  Mic,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Menu,
  X,
  Stethoscope,
  Database
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface RiskFactor {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  category: 'Direct' | 'Metabolic' | 'Lifestyle' | 'Environmental';
}

// --- Constants ---
const RISK_FACTORS: RiskFactor[] = [
  { id: 'glucose', title: 'Glucose Levels', icon: Activity, description: 'Real-time CGM data analysis for trend detection.', category: 'Direct' },
  { id: 'meal', title: 'Meal Timing', icon: Utensils, description: 'Predicting postprandial spikes and subsequent crashes.', category: 'Metabolic' },
  { id: 'insulin', title: 'Insulin Peaks', icon: Zap, description: 'Tracking active insulin (IOB) and absorption rates.', category: 'Direct' },
  { id: 'carbs', title: 'Carb Count', icon: CheckCircle2, description: 'Analyzing glycemic load and impact on stability.', category: 'Metabolic' },
  { id: 'time', title: 'Time of Day', icon: Sun, description: 'Adjusting for circadian rhythms and dawn phenomenon.', category: 'Environmental' },
  { id: 'exercise', title: 'Exercise', icon: Dumbbell, description: 'Monitoring intensity and delayed onset hypoglycemia.', category: 'Lifestyle' },
  { id: 'sleep', title: 'Sleep Quality', icon: Moon, description: 'Detecting nocturnal lows and recovery patterns.', category: 'Lifestyle' },
  { id: 'alcohol', title: 'Alcohol Intake', icon: Wine, description: 'Factoring in liver glucose production suppression.', category: 'Metabolic' },
  { id: 'stress', title: 'Stress Levels', icon: Brain, description: 'Accounting for cortisol-driven glucose fluctuations.', category: 'Lifestyle' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-medical-blue rounded-xl flex items-center justify-center">
            <Shield className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-medical-blue">GLUCO-GUARD <span className="text-slate-400">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-medical-blue transition-colors">Features</a>
          <a href="#risk-engine" className="hover:text-medical-blue transition-colors">Risk Engine</a>
          <a href="#safety" className="hover:text-medical-blue transition-colors">Safety</a>
          <a href="#trust" className="hover:text-medical-blue transition-colors">Clinical</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2.5 rounded-full text-sm font-semibold text-medical-blue hover:bg-medical-blue/5 transition-colors">
            Log In
          </button>
          <button className="px-6 py-2.5 rounded-full text-sm font-semibold bg-medical-blue text-white shadow-lg shadow-medical-blue/20 hover:scale-105 transition-transform">
            Get Early Access
          </button>
        </div>

        <button className="md:hidden text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Features</a>
            <a href="#risk-engine" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Risk Engine</a>
            <a href="#safety" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Safety</a>
            <a href="#trust" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Clinical</a>
            <hr className="border-slate-100" />
            <button className="w-full py-3 rounded-xl bg-medical-blue text-white font-semibold">Get Early Access</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-medical-blue/5 to-transparent rounded-l-[100px]" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-safety-teal/10 text-safety-teal text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3" />
            Next-Gen Predictive Safety
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Beyond the Reading: <span className="text-medical-blue">Predictive Safety</span> for Your Life.
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
            GLUCO-GUARD AI analyzes insulin, meals, and lifestyle in real-time to alert you—and your loved ones—before a hypoglycemic event occurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-2xl bg-medical-blue text-white font-bold shadow-xl shadow-medical-blue/25 hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Get Early Access <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              Connect Your CGM <Activity className="w-5 h-5 text-medical-blue" />
            </button>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" referrerPolicy="no-referrer" />
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              Trusted by <span className="text-slate-900 font-bold">2,500+</span> early adopters
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 glass rounded-[40px] p-8 shadow-2xl shadow-medical-blue/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Current Status</p>
                <p className="text-2xl font-bold text-slate-900">Stable Trend</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-medical-blue">104 <span className="text-lg font-medium text-slate-400">mg/dL</span></p>
                <p className="text-sm text-safety-teal font-bold flex items-center justify-end gap-1">
                  <ArrowRight className="w-3 h-3 -rotate-45" /> Steady
                </p>
              </div>
            </div>
            
            <div className="h-48 w-full bg-slate-50 rounded-2xl mb-6 relative overflow-hidden flex items-end px-4 gap-2">
              {[40, 45, 55, 60, 58, 65, 75, 85, 95, 100, 104].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 bg-medical-blue/20 rounded-t-lg relative group"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h+40}
                  </div>
                </motion.div>
              ))}
              <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none">
                <div className="border-t border-slate-200 w-full border-dashed" />
                <div className="border-t border-slate-200 w-full border-dashed" />
                <div className="border-t border-alert-orange/30 w-full border-dashed" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Active Insulin</p>
                <p className="text-lg font-bold text-slate-900">2.4 U</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Carbs On Board</p>
                <p className="text-lg font-bold text-slate-900">15g</p>
              </div>
              <div className="p-4 rounded-2xl bg-safety-teal/5 border border-safety-teal/10">
                <p className="text-[10px] font-bold text-safety-teal uppercase mb-1">Risk Level</p>
                <p className="text-lg font-bold text-safety-teal">Low</p>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-alert-orange/10 flex items-center justify-center">
              <AlertTriangle className="text-alert-orange w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400">Predictive Alert</p>
              <p className="text-sm font-bold text-slate-900">Drop in 15m</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const RiskEngine = () => {
  return (
    <section id="risk-engine" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            The Predictive Engine
          </h2>
          <p className="text-lg text-slate-600">
            Our AI doesn't just look at numbers. It analyzes the context of your life across 9 critical risk factors to provide a complete safety profile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RISK_FACTORS.map((factor, index) => (
            <motion.div
              key={factor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-2xl bg-white shadow-sm border border-slate-100`}>
                  <factor.icon className="w-6 h-6 text-medical-blue" />
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-200 text-slate-600 uppercase tracking-wider">
                  {factor.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{factor.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {factor.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EmergencyAlert = () => {
  return (
    <section id="safety" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-alert-orange/5 rounded-[40px] blur-2xl" />
              <div className="relative glass rounded-[40px] p-8 border-alert-orange/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-alert-orange flex items-center justify-center shadow-lg shadow-alert-orange/30">
                    <Shield className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Guardian Circle</h3>
                    <p className="text-sm text-slate-500 font-medium">Emergency Protocol Active</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'Sarah (Wife)', role: 'Primary Contact', status: 'Notified' },
                    { name: 'Dr. Miller', role: 'Endocrinologist', status: 'Standby' },
                    { name: 'City Hospital', role: 'Emergency Services', status: 'Ready' }
                  ].map((contact, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                          {contact.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{contact.name}</p>
                          <p className="text-xs text-slate-400">{contact.role}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${contact.status === 'Notified' ? 'bg-alert-orange text-white' : 'bg-slate-200 text-slate-500'}`}>
                        {contact.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-alert-orange/10 border border-alert-orange/20 flex items-start gap-4">
                  <MapPin className="text-alert-orange w-6 h-6 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-alert-orange mb-1">Live GPS Geofencing</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Sharing live location with emergency services. ETA: 4 minutes to current location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alert-orange/10 text-alert-orange text-xs font-bold uppercase tracking-wider mb-6">
              <Shield className="w-3 h-3" />
              Emergency Protocol
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              The Protocol That <span className="text-alert-orange">Saves Lives</span>.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              When the AI detects a "Rapid Drop" combined with "No User Response," GLUCO-GUARD triggers a multi-tier intervention system.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: 'Guardian Circle', desc: 'Instant alerts to family and doctors with your precise live location.' },
                { title: 'Hospital API Integration', desc: 'Direct data feed to local emergency services for faster response.' },
                { title: 'Active Voice Intervention', desc: 'Max-volume voice alerts to wake you or notify bystanders nearby.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-safety-teal/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="text-safety-teal w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSignals = () => {
  return (
    <section id="trust" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-medical-blue rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-safety-teal rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Clinical Data Integration</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            GLUCO-GUARD seamlessly syncs with leading CGM hardware and hospital electronic health records (EHR) for a unified health view.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Activity className="w-10 h-10 text-safety-teal mb-6" />
            <h3 className="text-xl font-bold mb-3">CGM Sync</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Native integration with Dexcom, Abbott FreeStyle, and Medtronic sensors for sub-second data latency.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Stethoscope className="w-10 h-10 text-medical-blue mb-6" />
            <h3 className="text-xl font-bold mb-3">Hospital EHR</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Secure data sharing with Epic, Cerner, and Allscripts systems used by major healthcare providers.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Database className="w-10 h-10 text-slate-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">HIPAA Secure</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Military-grade encryption for all personal health information (PHI) with strict access controls.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {['Dexcom', 'Abbott', 'Medtronic', 'Epic', 'Cerner'].map(brand => (
            <span key={brand} className="text-2xl font-black tracking-tighter">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const AssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 glass rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-medical-blue p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Brain className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm">GLUCO Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-4 h-4" /></button>
            </div>
            
            <div className="p-4 h-64 overflow-y-auto flex flex-col gap-4">
              <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-xs text-slate-600 max-w-[80%]">
                Hello! I'm monitoring your levels. How are you feeling after your workout?
              </div>
              <div className="bg-medical-blue text-white p-3 rounded-2xl rounded-tr-none text-xs self-end max-w-[80%]">
                A bit shaky, just finished a 30m run.
              </div>
              <div className="bg-alert-orange/10 border border-alert-orange/20 p-3 rounded-2xl text-xs text-slate-700">
                <div className="flex items-center gap-2 mb-1 text-alert-orange font-bold">
                  <AlertTriangle className="w-3 h-3" /> Warning
                </div>
                Your glucose is dropping rapidly based on your recent exercise and insulin timing. Please consume 15g of fast-acting carbs now.
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 flex items-center gap-2">
              <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-xs text-slate-400">
                Type a message...
              </div>
              <button className="w-8 h-8 rounded-full bg-medical-blue text-white flex items-center justify-center">
                <Mic className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-medical-blue text-white shadow-2xl shadow-medical-blue/40 flex items-center justify-center hover:scale-110 transition-transform relative"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute top-0 right-0 w-4 h-4 bg-alert-orange rounded-full border-2 border-white animate-pulse" />
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-medical-blue">GLUCO-GUARD <span className="text-slate-400">AI</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Empowering individuals with diabetes through predictive AI safety and real-time emergency intervention.
            </p>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 rounded-md border border-slate-200 text-[10px] font-bold text-slate-400 uppercase">HIPAA Compliant</div>
              <div className="px-3 py-1 rounded-md border border-slate-200 text-[10px] font-bold text-slate-400 uppercase">ISO 27001</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-medical-blue transition-colors">Risk Engine</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">Guardian Circle</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-medical-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">HIPAA Disclosure</a></li>
              <li><a href="#" className="hover:text-medical-blue transition-colors">FDA Information</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">
            © 2026 GLUCO-GUARD AI. All rights reserved. Not a substitute for professional medical advice.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-medical-blue">Twitter</a>
            <a href="#" className="hover:text-medical-blue">LinkedIn</a>
            <a href="#" className="hover:text-medical-blue">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-medical-blue/10 selection:text-medical-blue">
      <Navbar />
      <main>
        <Hero />
        <RiskEngine />
        <EmergencyAlert />
        <TrustSignals />
        
        {/* Final CTA */}
        <section className="py-24 bg-medical-blue relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to live with predictive safety?</h2>
            <p className="text-xl text-white/80 mb-12">
              Join our early access program and connect your CGM today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 rounded-2xl bg-white text-medical-blue font-bold shadow-2xl hover:scale-105 transition-transform">
                Get Early Access Now
              </button>
              <button className="px-10 py-5 rounded-2xl bg-medical-blue border border-white/30 text-white font-bold hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AssistantWidget />
    </div>
  );
}
