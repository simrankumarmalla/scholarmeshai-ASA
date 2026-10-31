import { ReactionFront } from "@/components/ui/hero-ascii-reaction-front";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Terminal } from "lucide-react";

export default function Demo() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      <ReactionFront className="absolute inset-0" />
      <div className="relative z-10 flex h-full w-full items-center justify-center px-8 pointer-events-none">
        <div className="flex max-w-xl flex-col items-center gap-4 text-center pointer-events-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-muted-foreground hover:text-foreground bg-secondary/50 border border-border transition-colors mb-2 backdrop-blur-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to ScholarMesh AI</span>
          </Link>
          <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            ns-ui / hero-ascii-reaction-front
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            The boundary is the picture.
          </h1>
          <p className="text-base text-muted-foreground">
            A Gray-Scott dish runs live under the type — a real solver, not a
            loop of noise. Only the ridge of the reaction interface is inked, so
            every front reads as a thin crawling line.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Studio</span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
