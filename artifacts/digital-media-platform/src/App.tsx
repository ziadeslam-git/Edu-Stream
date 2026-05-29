import { useEffect, useRef } from "react";
import { ClerkProvider, SignIn, SignUp, Show, useClerk, useUser } from '@clerk/react';
import { publishableKeyFromHost } from '@clerk/react/internal';
import { shadcn } from '@clerk/themes';
import { Switch, Route, useLocation, Router as WouterRouter, Redirect } from 'wouter';
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import Home from "@/pages/Home";
import Modules from "@/pages/Modules";
import ModuleDetail from "@/pages/ModuleDetail";
import About from "@/pages/About";
import Assessment from "@/pages/Assessment";
import AssessmentResult from "@/pages/AssessmentResult";
import ModuleQuiz from "@/pages/ModuleQuiz";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const clerkPubKey = publishableKeyFromHost(
  window.location.hostname,
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
);
const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function stripBase(path: string): string {
  return basePath && path.startsWith(basePath)
    ? path.slice(basePath.length) || "/"
    : path;
}

if (!clerkPubKey) {
  throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY');
}

const clerkAppearance = {
  theme: shadcn,
  cssLayerName: "clerk",
  options: {
    logoPlacement: "inside" as const,
    logoLinkUrl: basePath || "/",
    logoImageUrl: `${window.location.origin}${basePath}/logo.svg`,
    socialButtonsVariant: "blockButton" as const,
    socialButtonsPlacement: "top" as const,
  },
  variables: {
    colorPrimary: "#7C3AED",
    colorForeground: "#1e1b4b",
    colorMutedForeground: "#6b7280",
    colorDanger: "#dc2626",
    colorBackground: "#ffffff",
    colorInput: "#f5f3ff",
    colorInputForeground: "#1e1b4b",
    colorNeutral: "#e5e7eb",
    fontFamily: "'Cairo', sans-serif",
    borderRadius: "0.75rem",
  },
  elements: {
    rootBox: "w-full flex justify-center",
    cardBox: "bg-white rounded-2xl w-[440px] max-w-full overflow-hidden shadow-xl shadow-purple-100",
    card: "!shadow-none !border-0 !bg-transparent !rounded-none",
    footer: "!shadow-none !border-0 !bg-transparent !rounded-none",
    headerTitle: "text-[#1e1b4b] font-bold text-2xl",
    headerSubtitle: "text-[#6b7280]",
    socialButtonsBlockButtonText: "text-[#1e1b4b] font-medium",
    formFieldLabel: "text-[#1e1b4b] font-medium",
    footerActionLink: "text-[#7C3AED] font-semibold",
    footerActionText: "text-[#6b7280]",
    dividerText: "text-[#6b7280]",
    identityPreviewEditButton: "text-[#7C3AED]",
    formFieldSuccessText: "text-green-600",
    alertText: "text-[#dc2626]",
    logoBox: "flex justify-center",
    logoImage: "h-10 w-10",
    socialButtonsBlockButton: "border border-gray-200 hover:border-purple-300 hover:bg-purple-50",
    formButtonPrimary: "bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold",
    formFieldInput: "border-gray-200 bg-[#f5f3ff] focus:border-[#7C3AED] text-[#1e1b4b]",
    footerAction: "bg-gray-50",
    dividerLine: "bg-gray-200",
    alert: "border-red-200 bg-red-50",
    otpCodeFieldInput: "border-gray-200 text-[#1e1b4b]",
    formFieldRow: "",
    main: "",
  },
};

function SignInPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">منصة مهارات الإعلام الرقمي</h2>
          <p className="text-muted-foreground mt-2">سجّل دخولك للبدء في رحلة التعلم</p>
        </div>
        <SignIn routing="path" path={`${basePath}/sign-in`} signUpUrl={`${basePath}/sign-up`} />
      </div>
    </div>
  );
}

function SignUpPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">منصة مهارات الإعلام الرقمي</h2>
          <p className="text-muted-foreground mt-2">أنشئ حسابك الجديد</p>
        </div>
        <SignUp routing="path" path={`${basePath}/sign-up`} signInUrl={`${basePath}/sign-in`} />
      </div>
    </div>
  );
}

function ClerkQueryClientCacheInvalidator() {
  const { addListener } = useClerk();
  const qc = useQueryClient();
  const prevUserIdRef = useRef<string | null | undefined>(undefined);
  useEffect(() => {
    const unsubscribe = addListener(({ user }) => {
      const userId = user?.id ?? null;
      if (prevUserIdRef.current !== undefined && prevUserIdRef.current !== userId) {
        qc.clear();
      }
      prevUserIdRef.current = userId;
    });
    return unsubscribe;
  }, [addListener, qc]);
  return null;
}



function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoaded } = useUser();
  if (!isLoaded) return null;
  if (!user) return <Redirect to="/sign-in" />;
  return <>{children}</>;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/sign-in/*?" component={SignInPage} />
          <Route path="/sign-up/*?" component={SignUpPage} />
          <Route path="/assessment">
            <ProtectedRoute><Assessment /></ProtectedRoute>
          </Route>
          <Route path="/assessment/result">
            <ProtectedRoute><AssessmentResult /></ProtectedRoute>
          </Route>
          <Route path="/modules">
            <ProtectedRoute><Modules /></ProtectedRoute>
          </Route>
          <Route path="/modules/:id/quiz">
            <ProtectedRoute><ModuleQuiz /></ProtectedRoute>
          </Route>
          <Route path="/modules/:id">
            <ProtectedRoute><ModuleDetail /></ProtectedRoute>
          </Route>
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      localization={{
        signIn: { start: { title: "أهلاً بعودتك", subtitle: "سجّل دخولك للوصول إلى حسابك" } },
        signUp: { start: { title: "إنشاء حساب جديد", subtitle: "ابدأ رحلتك التعليمية اليوم" } },
      }}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ClerkQueryClientCacheInvalidator />
          <Router />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

function App() {
  return (
    <WouterRouter base={basePath}>
      <ClerkProviderWithRoutes />
    </WouterRouter>
  );
}

export default App;
