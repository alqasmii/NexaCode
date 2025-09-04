import { useState, useEffect } from 'react';
import { Search, Filter, Star, ShoppingCart, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [isLoading, setIsLoading] = useState(false);

  // Mock search results
  const searchResults = [
    {
      id: 1,
      name: 'Adobe Creative Suite',
      price: '125.00',
      rating: 4.9,
      reviews: 2845,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&q=80',
      category: 'Design',
      type: 'Software',
      description: 'Complete creative suite for professionals'
    },
    {
      id: 2,
      name: 'Netflix Premium Subscription',
      price: '45.00',
      rating: 4.8,
      reviews: 3421,
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=400&q=80',
      category: 'Streaming',
      type: 'Subscription',
      description: '1 Year premium streaming access'
    },
    {
      id: 3,
      name: 'Fortnite V-Bucks',
      price: '25.00',
      rating: 4.9,
      reviews: 5632,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
      category: 'Gaming',
      type: 'Gaming Currency',
      description: '2800 V-Bucks for Fortnite'
    }
  ];

  const filteredResults = searchResults.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate search delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-cairo font-bold text-foreground mb-4">
            Search Results
          </h1>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for apps, subscriptions, games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 text-lg py-3"
              />
              <Button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                disabled={isLoading}
              >
                {isLoading ? 'Searching...' : 'Search'}
              </Button>
            </div>
          </form>

          {searchQuery && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Showing results for:</span>
              <Badge variant="secondary" className="text-sm">
                "{searchQuery}"
              </Badge>
              <span>({filteredResults.length} results found)</span>
            </div>
          )}
        </div>

        {/* Popular Searches */}
        {!searchQuery && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              <TrendingUp className="h-5 w-5 inline mr-2" />
              Popular Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Adobe Creative Suite',
                'Netflix',
                'Microsoft Office',
                'Spotify Premium',
                'Fortnite V-Bucks',
                'Steam Wallet',
                'Canva Pro',
                'VPN Services'
              ].map((term) => (
                <Button
                  key={term}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery(term)}
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchQuery && (
          <div>
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <Card key={index} className="p-4 animate-pulse">
                    <div className="bg-muted h-48 rounded mb-4"></div>
                    <div className="bg-muted h-4 rounded mb-2"></div>
                    <div className="bg-muted h-4 rounded w-2/3 mb-2"></div>
                    <div className="bg-muted h-4 rounded w-1/2"></div>
                  </Card>
                ))}
              </div>
            ) : filteredResults.length === 0 ? (
              <div className="text-center py-16">
                <Search className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  No results found
                </h2>
                <p className="text-muted-foreground mb-8">
                  We couldn't find any products matching "{searchQuery}".
                  <br />
                  Try searching with different keywords or browse our categories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => setSearchQuery('')}>
                    Clear Search
                  </Button>
                  <Button variant="outline" onClick={() => setSearchQuery('adobe')}>
                    Try "Adobe"
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((item) => (
                  <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-2 right-2 bg-primary">
                        {item.type}
                      </Badge>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent-gold transition-colors">
                        {item.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-accent-gold text-accent-gold" />
                          <span className="text-sm font-medium ml-1">{item.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({item.reviews} reviews)
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-foreground">
                          {item.price} OMR
                        </span>
                        
                        <Button size="sm" className="group-hover:bg-accent-gold transition-colors">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Recent Searches */}
        {!searchQuery && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              <Clock className="h-5 w-5 inline mr-2" />
              Recent Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                'adobe creative',
                'netflix premium',
                'microsoft office'
              ].map((term) => (
                <Button
                  key={term}
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchQuery(term)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Clock className="h-3 w-3 mr-1" />
                  {term}
                </Button>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
