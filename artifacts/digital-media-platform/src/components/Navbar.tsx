import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { BookOpen, GraduationCap, Info, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <div className="flex items-center gap-2 font-bold text-xl text-primary cursor-pointer hover:opacity-80 transition-opacity">
              <GraduationCap className="h-6 w-6" />
              <span>منصة الإعلام الرقمي</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/">
              <span className={`cursor-pointer hover:text-primary transition-colors ${location === "/" ? "text-foreground" : ""}`}>
                الرئيسية
              </span>
            </Link>
            <Link href="/modules">
              <span className={`cursor-pointer hover:text-primary transition-colors ${location.startsWith("/modules") ? "text-foreground" : ""}`}>
                الموديولات
              </span>
            </Link>
            <Link href="/about">
              <span className={`cursor-pointer hover:text-primary transition-colors ${location === "/about" ? "text-foreground" : ""}`}>
                عن المنصة
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            data-testid="button-theme-toggle"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild className="hidden sm:inline-flex" data-testid="button-nav-start">
            <Link href="/modules">ابدأ التعلم</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}