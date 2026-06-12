import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { BlogList, BlogArticle } from "./pages/Blog";
import { FlavorsList, FlavorDetail } from "./pages/Flavors";
import FAQPage from "./pages/FAQ";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      {/* Blog routes */}
      <Route path={"/blog"} component={BlogList} />
      <Route path={"/blog/:slug"}>
        {(params) => <BlogArticle slug={params.slug} />}
      </Route>
      {/* Flavor routes */}
      <Route path={"/flavors"} component={FlavorsList} />
      <Route path={"/flavors/:slug"}>
        {(params) => <FlavorDetail slug={params.slug} />}
      </Route>
      {/* FAQ */}
      <Route path={"/faq"} component={FAQPage} />
      {/* Fallbacks */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
