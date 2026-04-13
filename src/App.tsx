import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

const FlowTutorCaseStudy = lazy(() => import("./pages/FlowTutorCaseStudy"));
const KidneyQuestCaseStudy = lazy(() => import("./pages/KidneyQuestCaseStudy"));
const IntellipalCaseStudy = lazy(() => import("./pages/IntellipalCaseStudy"));

const caseStudyFallback = (
  <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground text-sm">
    Loading…
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/case-study/flowtutor"
            element={
              <Suspense fallback={caseStudyFallback}>
                <FlowTutorCaseStudy />
              </Suspense>
            }
          />
          <Route
            path="/case-study/kidneyquest"
            element={
              <Suspense fallback={caseStudyFallback}>
                <KidneyQuestCaseStudy />
              </Suspense>
            }
          />
          <Route
            path="/case-study/intellipal"
            element={
              <Suspense fallback={caseStudyFallback}>
                <IntellipalCaseStudy />
              </Suspense>
            }
          />
          <Route path="/case-study/hybridrag" element={<Navigate to="/case-study/intellipal" replace />} />
          <Route path="/case-study/:slug" element={<CaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
