import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AdminRoute } from "./components/AdminRoute";
import Index from "./pages/Index";
import Apps from "./pages/Apps";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Streaming from "./pages/subscriptions/Streaming";
import Productivity from "./pages/subscriptions/Productivity";
import Security from "./pages/subscriptions/Security";
import ESim from "./pages/subscriptions/ESim";
import GamingAccounts from "./pages/gaming/GamingAccounts";
import GamePurchase from "./pages/gaming/GamePurchase";
import GamingSubscriptions from "./pages/gaming/GamingSubscriptions";
import GamingCurrency from "./pages/gaming/GamingCurrency";
import AccountBoosting from "./pages/gaming/AccountBoosting";
import GamingGiftCards from "./pages/giftcards/GamingGiftCards";
import ShoppingGiftCards from "./pages/giftcards/ShoppingGiftCards";
import EntertainmentGiftCards from "./pages/giftcards/EntertainmentGiftCards";
import DigitalServicesGiftCards from "./pages/giftcards/DigitalServicesGiftCards";

const queryClient = new QueryClient();

const App = () => (
  <div className="font-cairo">
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/products" element={<Products />} />
                {/* Redirect old routes to new products page */}
                <Route path="/subscriptions" element={<Products />} />
                <Route path="/gaming" element={<Products />} />
                <Route path="/codes" element={<Products />} />
                <Route path="/giftcards" element={<Products />} />
                {/* Subscription category pages */}
                <Route path="/subscriptions/streaming" element={<Streaming />} />
                <Route path="/subscriptions/productivity" element={<Productivity />} />
                <Route path="/subscriptions/security" element={<Security />} />
                <Route path="/subscriptions/esim" element={<ESim />} />
                {/* Gaming category pages */}
                <Route path="/gaming/accounts" element={<GamingAccounts />} />
                <Route path="/gaming/games" element={<GamePurchase />} />
                <Route path="/gaming/subscriptions" element={<GamingSubscriptions />} />
                <Route path="/gaming/currency" element={<GamingCurrency />} />
                <Route path="/gaming/boosting" element={<AccountBoosting />} />
                {/* Gift Cards category pages */}
                <Route path="/giftcards/gaming" element={<GamingGiftCards />} />
                <Route path="/giftcards/shopping" element={<ShoppingGiftCards />} />
                <Route path="/giftcards/entertainment" element={<EntertainmentGiftCards />} />
                <Route path="/giftcards/digital" element={<DigitalServicesGiftCards />} />
                <Route path="/services" element={<Services />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<Search />} />
                <Route path="/admin" element={
                  <AdminRoute>
                    <Admin />
                  </AdminRoute>
                } />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </div>
);

export default App;
