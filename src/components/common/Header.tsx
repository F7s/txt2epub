import { motion } from 'framer-motion';
import { Book, History, Home, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import routes from '@/routes';

export default function Header() {
  const location = useLocation();
  const navigation = routes.filter(route => route.visible !== false);

  // 在 HashRouter 中，路径在 hash 中
  const currentPath = location.hash ? location.hash.replace('#', '') : location.pathname;

  const getIcon = (path: string) => {
    switch (path) {
      case '/':
        return <Home className="h-4 w-4" />;
      case '/converter':
        return <Book className="h-4 w-4" />;
      case '/history':
        return <History className="h-4 w-4" />;
      default:
        return <Book className="h-4 w-4" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-primary/5">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/converter" className="flex items-center space-x-3 group">
            <div className="bg-primary text-[#FDFBF7] p-2 rounded-sm shadow-sm group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
              <Book className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold text-primary tracking-wide leading-none group-hover:text-accent-foreground transition-colors">TXT2EPUB</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] leading-none mt-1">Converter</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((route) => {
            const isActive = currentPath === route.path;
            
            return (
              <Link
                key={route.path}
                to={route.path}
                className={`relative px-6 py-2 text-sm font-serif font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <div className="flex items-center space-x-2 relative z-10">
                  {getIcon(route.path)}
                  <span>{route.name}</span>
                </div>
                
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-primary">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-[#FDFBF7] border-l border-primary/10">
            <div className="flex items-center space-x-3 mb-8 pl-2">
              <div className="bg-primary text-[#FDFBF7] p-2 rounded-sm">
                <Book className="h-5 w-5" />
              </div>
              <span className="text-lg font-serif font-bold text-primary">TXT2EPUB</span>
            </div>
            <nav className="flex flex-col space-y-2">
              {navigation.map((route) => {
                const isActive = currentPath === route.path;
                return (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`flex items-center space-x-3 text-sm font-serif font-medium transition-colors p-3 rounded-sm ${
                      isActive
                        ? 'text-primary bg-primary/5 border-l-2 border-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-primary'
                    }`}
                  >
                    {getIcon(route.path)}
                    <span>{route.name}</span>
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
