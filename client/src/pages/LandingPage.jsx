import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Layers, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  BookOpen, 
  Bot, 
  Shield, 
  Cpu, 
  Award,
  Terminal,
  ExternalLink,
  Activity
} from 'lucide-react';
import { DOMAIN_META } from '../components/WorkspaceCard';
import { ReactionFront } from '../components/ui/hero-ascii-reaction-front';

const DOMAIN_IMAGES = {
  biomedical_clinical: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
  ai_computer_science: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  climate_sustainability: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  economics_market: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
  legal_regulatory: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
  social_behavioral: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
};

const LandingPage = () => {
  const { demoLogin } = useAuth();
  const navigate = useNavigate();

  const handleDemo = async () => {
    const res = await demoLogin();
    if (res.success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground">
      {/* Live ASCII Gray-Scott Reaction Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-border">
        {/* Full-bleed Gray-Scott Reaction-Diffusion ASCII Simulation Canvas */}
        <div className="absolute inset-0 z-0 opacity-40 hover:opacity-75 transition-opacity duration-700 pointer-events-auto">
          <ReactionFront cellSize={12} className="w-full h-full text-indigo-400/80 cursor-crosshair" />
        </div>

        {/* Ambient Radial Gradient Mask so text stays crisp */}
        <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_75%_75%_at_50%_45%,rgba(3,7,18,0.78)_0%,rgba(3,7,18,0.96)_100%)]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20 space-y-7 pointer-events-none">
          {/* Reaction Solver Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium tracking-wide shadow-sm backdrop-blur-sm pointer-events-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Gray-Scott ASCII Reaction Solver Active &bull; Hover Cursor to Pipette Seed</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Cross-Source Research Synthesis & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400">
              Contradiction Discovery Engine
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Eliminate cognitive blind spots in complex literature. Ingest multi-modal PDFs, study abstracts, and lab notes into isolated Research Workspaces. Automatically extract atomic claims, uncover empirical contradictions, and query your corpus with a citation-grounded Copilot powered by Google Gemini 2.5 Flash.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 pointer-events-auto">
            <button
              onClick={handleDemo}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>1-Click Demo Researcher</span>
            </button>

            <Link
              to="/register"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Create Free Account</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/demo"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider text-purple-300 hover:text-white bg-slate-900/90 hover:bg-purple-950/40 border border-purple-500/30 transition-all hover:border-purple-400/60"
            >
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>Full ASCII Lab View</span>
            </Link>
          </div>

          {/* Interactive Feature Snapshot Preview */}
          <div className="pt-8 max-w-4xl mx-auto pointer-events-auto">
            <div className="bg-slate-900/85 backdrop-blur-md border border-slate-800/90 rounded-2xl p-4 sm:p-6 shadow-2xl text-left space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-slate-300 ml-2">mRNA Delivery Lipid Nanoparticles: Efficacy vs Hepatic Toxicity</span>
                </div>
                <span className="text-emerald-400 font-mono text-[11px] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Gemini 2.5 Flash Verified
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-950/90 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-indigo-400 uppercase font-mono block mb-1">Study 1 (Vance et al.)</span>
                  <p className="text-slate-200 font-medium leading-relaxed">pKa 6.4 achieves 4.2x higher hepatocyte translation; ALT remains physiological (&lt;45 U/L).</p>
                  <span className="mt-2.5 inline-block text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-mono">Rigor: 88/100</span>
                </div>

                <div className="bg-amber-500/5 p-3.5 rounded-xl border border-amber-500/30">
                  <span className="text-[10px] font-bold text-amber-400 uppercase font-mono block mb-1">Study 2 (Kowalski et al.)</span>
                  <p className="text-slate-200 font-medium leading-relaxed">pKa &lt; 6.5 triggers acute hepatotoxicity (ALT &gt;320 U/L) and severe IL-6 surge.</p>
                  <span className="mt-2.5 inline-block text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 font-mono">Discrepancy: Bolus IV</span>
                </div>

                <div className="bg-slate-950/90 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-sky-400 uppercase font-mono block mb-1">ScholarMesh Synthesis</span>
                  <p className="text-slate-200 font-medium leading-relaxed">Contradiction resolved: Bolus shear shock caused Kowalski surge; 30-min infusion with ester lipids mitigates IL-6 completely.</p>
                  <span className="mt-2.5 inline-block text-[10px] px-2 py-0.5 rounded bg-purple-500/15 text-purple-400 font-mono">Strong Consensus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineered for High-Stakes Scientific Literature Analysis
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Eliminate cognitive overload with automated atomic claim decomposition, non-linear cross-study deconvolution, and live evidence auditing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 rounded-2xl p-6 space-y-3 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-100">Multi-Format Ingestion</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Upload .pdf, .txt, or .md files via Multer memory buffers or paste raw notes and study abstracts. Server-side parsing extracts full text effortlessly.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 rounded-2xl p-6 space-y-3 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-100">Atomic Claims Matrix</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every document is decomposed into structured atomic claims tagged by category (empirical findings, statistics, methodologies, limitations) and confidence.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-6 space-y-3 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-100">Contradiction Auditing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cross-reference multiple papers simultaneously to pinpoint where data contradicts and pinpoint the methodological root causes (e.g. sample size, delivery route).
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-purple-500/30 rounded-2xl p-6 space-y-3 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-100">Citation Copilot</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              A conversational RAG research assistant that answers inquiries with strict inline citations and provides structured follow-up investigation questions.
            </p>
          </div>
        </div>
      </section>

      {/* Target Domains Showcase with Stock Imagery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">6 Specialized Research Domains</h2>
            <p className="text-sm text-slate-400 mt-2">
              Customized epistemological schemas tailored to your domain's specific analytical standards and methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(DOMAIN_META).map(([key, info]) => (
              <div 
                key={key} 
                className="group relative bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between"
              >
                {/* Domain Card Stock Image */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-950">
                  <img 
                    src={DOMAIN_IMAGES[key]} 
                    alt={info.label} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <span className={`absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full border backdrop-blur-md ${info.badge}`}>
                    {key.replace('_', ' ').toUpperCase()}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h4 className="text-base font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {info.label}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Automated claim extraction and conflict analysis optimized for {info.label.toLowerCase()} literature.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="mt-auto py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p className="mb-2">ScholarMesh AI &bull; Multi-Source Research Synthesis & Evidence Discovery Platform</p>
        <p>Built with Node.js, Express, PostgreSQL, React 18, Tailwind CSS & Google Gen AI SDK (@google/genai)</p>
      </footer>
    </div>
  );
};

export default LandingPage;
