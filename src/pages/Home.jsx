import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  Sparkles,
  ChevronDown,
  MapPin,
  X,
  Share2,
  MessageCircle,
  Menu,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Sculptural Lounge Chair",
    category: "Furniture",
    price: "₦285,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1000",
    badge: "Editor's pick",
    layout: "large",
  },
  {
    id: 2,
    name: "Everyday Leather Sneakers",
    category: "Fashion",
    price: "₦95,000",
    location: "Abuja, Nigeria",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
    layout: "tall",
  },
  {
    id: 3,
    name: "Analog Timepiece",
    category: "Accessories",
    price: "₦175,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    layout: "small",
  },
  {
    id: 4,
    name: "The Creative Workspace",
    category: "Technology",
    price: "₦450,000",
    location: "Port Harcourt, Nigeria",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000",
    badge: "Rare find",
    layout: "wide",
  },
  {
    id: 5,
    name: "Modern Everyday Bag",
    category: "Fashion",
    price: "₦68,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
    layout: "small",
  },
  {
    id: 6,
    name: "Minimal Ceramic Collection",
    category: "Home & Living",
    price: "₦42,000",
    location: "Enugu, Nigeria",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800",
    layout: "tall",
  },
  {
    id: 7,
    name: "Retro Film Camera",
    category: "Technology",
    price: "₦220,000",
    location: "Abuja, Nigeria",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    badge: "Vintage",
    layout: "medium",
  },
  {
    id: 8,
    name: "Statement Interior Lamp",
    category: "Home & Living",
    price: "₦115,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
    layout: "small",
  },
  {
    id: 9,
    name: "Contemporary Art Print",
    category: "Art & Collectibles",
    price: "₦80,000",
    location: "Ibadan, Nigeria",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    layout: "wide",
  },
  {
    id: 10,
    name: "Premium Headphones",
    category: "Technology",
    price: "₦190,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    layout: "medium",
  },
  {
    id: 11,
    name: "Vintage Designer Jacket",
    category: "Fashion",
    price: "₦135,000",
    location: "Benin City, Nigeria",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
    badge: "One of a kind",
    layout: "tall",
  },
  {
    id: 12,
    name: "Oak Side Table",
    category: "Furniture",
    price: "₦160,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800",
    layout: "small",
  },

  {
    id: 13,
    name: "Minimalist Desk Chair",
    category: "Furniture",
    price: "₦210,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800",
    badge: "New arrival",
    layout: "small",
  },
  {
    id: 14,
    name: "Leather Crossbody Bag",
    category: "Fashion",
    price: "₦78,000",
    location: "Abuja, Nigeria",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    layout: "small",
  },
  {
    id: 15,
    name: "Wireless Over-Ear Headphones",
    category: "Technology",
    price: "₦145,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800",
    badge: "Popular",
    layout: "small",
  },
  {
    id: 16,
    name: "Handmade Ceramic Vase",
    category: "Home & Living",
    price: "₦36,000",
    location: "Enugu, Nigeria",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800",
    layout: "small",
  },
  {
    id: 17,
    name: "Classic Leather Wristwatch",
    category: "Accessories",
    price: "₦125,000",
    location: "Port Harcourt, Nigeria",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
    layout: "small",
  },
  {
    id: 18,
    name: "Abstract Framed Artwork",
    category: "Art & Collectibles",
    price: "₦95,000",
    location: "Ibadan, Nigeria",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    badge: "Limited piece",
    layout: "small",
  },
  {
    id: 19,
    name: "Everyday Canvas Tote",
    category: "Fashion",
    price: "₦28,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
    layout: "small",
  },
  {
    id: 20,
    name: "Compact Bluetooth Speaker",
    category: "Technology",
    price: "₦62,000",
    location: "Abuja, Nigeria",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
    layout: "small",
  },
  {
    id: 21,
    name: "Soft-Touch Table Lamp",
    category: "Home & Living",
    price: "₦54,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
    layout: "small",
  },
  {
    id: 22,
    name: "Everyday Running Sneakers",
    category: "Fashion",
    price: "₦88,000",
    location: "Benin City, Nigeria",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    layout: "small",
  },
  {
    id: 23,
    name: "Modern Side Table",
    category: "Furniture",
    price: "₦132,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800",
    layout: "small",
  },
  {
    id: 24,
    name: "Retro Compact Camera",
    category: "Technology",
    price: "₦185,000",
    location: "Abuja, Nigeria",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    layout: "small",
  },
  {
    id: 25,
    name: "Sculpted Ceramic Mug Set",
    category: "Home & Living",
    price: "₦24,000",
    location: "Enugu, Nigeria",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800",
    layout: "small",
  },
  {
    id: 26,
    name: "Gold-Tone Statement Earrings",
    category: "Accessories",
    price: "₦32,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
    layout: "small",
  },
  {
    id: 27,
    name: "Textured Accent Cushion",
    category: "Home & Living",
    price: "₦19,500",
    location: "Port Harcourt, Nigeria",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800",
    layout: "small",
  },
  {
    id: 28,
    name: "Premium Leather Wallet",
    category: "Accessories",
    price: "₦41,000",
    location: "Abuja, Nigeria",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
    layout: "small",
  },
  {
    id: 29,
    name: "Minimal Wall Clock",
    category: "Home & Living",
    price: "₦48,000",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800",
    layout: "small",
  },
  {
    id: 30,
    name: "Vintage Vinyl Record Player",
    category: "Technology",
    price: "₦230,000",
    location: "Ibadan, Nigeria",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800",
    badge: "Vintage find",
    layout: "small",
  },
];

// Numeric prices power sorting and price-range filters.
const getPriceValue = (price) => Number(price.replace(/[^0-9]/g, ""));
const enrichedProducts = products.map((product) => ({
  ...product,
  priceValue: getPriceValue(product.price),
  description: `A carefully selected ${product.name.toLowerCase()} available in ${product.location}. Explore this ${product.category.toLowerCase()} find and contact the seller directly for more information, availability, and viewing details.`,
}));

const categories = [
  "Everything",
  "Fashion",
  "Furniture",
  "Technology",
  "Home & Living",
  "Accessories",
  "Art & Collectibles",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ProductCard({ product, index, favorite, onFavorite, onOpen }) {
  return (
    <motion.article
      variants={itemVariants}
      className={`listing-card listing-${product.layout}`}
      whileHover={{ y: -4 }}
      layout
      onClick={() => onOpen(product)}
      tabIndex={0}
      role="button"
      onKeyDown={(event) => event.key === "Enter" && onOpen(product)}
      aria-label={`View details for ${product.name}`}
    >
      <div className="listing-image">
        <img src={product.image} alt={product.name} loading={index > 3 ? "lazy" : "eager"} />
        {product.badge && <span className="listing-badge"><Sparkles size={12} />{product.badge}</span>}
        <button
          className={`favorite-button ${favorite ? "is-favorite" : ""}`}
          onClick={(event) => { event.stopPropagation(); onFavorite(product.id); }}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={18} fill={favorite ? "currentColor" : "none"} />
        </button>
        <div className="listing-image-overlay"><span>View details</span><ArrowUpRight size={18} /></div>
      </div>
      <div className="listing-details">
        <div className="listing-meta"><span>{product.category}</span><span className="listing-location">{product.location}</span></div>
        <h3>{product.name}</h3>
        <div className="listing-bottom">
          <strong>{product.price}</strong>
          <button className="listing-arrow" onClick={(event) => { event.stopPropagation(); onOpen(product); }} aria-label={`Explore ${product.name}`}><ArrowUpRight size={17} /></button>
        </div>
      </div>
    </motion.article>
  );
}

function ListingDetails({ product, favorite, onFavorite, onClose }) {
  if (!product) return null;
  const shareListing = async () => {
    const shareData = { title: product.name, text: `${product.name} — ${product.price}`, url: window.location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else { await navigator.clipboard.writeText(`${product.name} — ${product.price} | ${window.location.href}`); alert("Listing details copied to clipboard."); }
    } catch { /* User cancelled sharing. */ }
  };
  return (
    <motion.div className="details-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.section className="details-panel" role="dialog" aria-modal="true" aria-labelledby="details-title" initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} onClick={(event) => event.stopPropagation()}>
        <button className="details-close" onClick={onClose} aria-label="Close listing details"><X size={20} /></button>
        <div className="details-photo"><img src={product.image} alt={product.name} /></div>
        <div className="details-content">
          <span className="details-category">{product.category}{product.badge ? ` · ${product.badge}` : ""}</span>
          <h2 id="details-title">{product.name}</h2>
          <strong className="details-price">{product.price}</strong>
          <p className="details-location"><MapPin size={16} /> {product.location}</p>
          <p className="details-description">{product.description}</p>
          <div className="details-actions">
            <a
              className="details-whatsapp"
              href={`https://wa.me/2348156116975?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} listed on VANTA/MARKET for ${product.price}. Is it still available?`)}`}
              target="_blank"
              rel="noopener noreferrer"
            ><MessageCircle size={17} /> Contact seller</a>
            <button className="details-save" onClick={() => onFavorite(product.id)}><Heart size={17} fill={favorite ? "currentColor" : "none"} />{favorite ? "Saved" : "Save listing"}</button>
            <button className="details-share" onClick={shareListing}><Share2 size={17} /> Share listing</button>
          </div>
          <p className="details-note">VANTA/MARKET is a discovery platform. Contact and transaction arrangements are made directly with the seller.</p>
        </div>
      </motion.section>
    </motion.div>
  );
}

function Home() {
  const [activeCategory, setActiveCategory] = useState("Everything");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("vanta-market-favorites") || "[]"); }
    catch { return []; }
  });
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try { return JSON.parse(localStorage.getItem("vanta-market-recent") || "[]"); }
    catch { return []; }
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("vanta-market-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("vanta-market-recent", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const openProduct = (product) => {
    setRecentlyViewed((previous) => [product.id, ...previous.filter((id) => id !== product.id)].slice(0, 6));
    setSelectedProduct(product);
  };

  const recentProducts = recentlyViewed
    .map((id) => enrichedProducts.find((product) => product.id === id))
    .filter(Boolean);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const result = enrichedProducts.filter((product) => {
      const matchesCategory = activeCategory === "Everything" || product.category === activeCategory;
      const matchesSearch = !query || [product.name, product.category, product.location].some((value) => value.toLowerCase().includes(query));
      const matchesSaved = !showSavedOnly || favorites.includes(product.id);
      const matchesMin = minPrice === "" || product.priceValue >= Number(minPrice);
      const matchesMax = maxPrice === "" || product.priceValue <= Number(maxPrice);
      return matchesCategory && matchesSearch && matchesSaved && matchesMin && matchesMax;
    });
    if (sortBy === "price-low") result.sort((a, b) => a.priceValue - b.priceValue);
    if (sortBy === "price-high") result.sort((a, b) => b.priceValue - a.priceValue);
    if (sortBy === "newest") result.sort((a, b) => b.id - a.id);
    return result;
  }, [activeCategory, search, showSavedOnly, favorites, minPrice, maxPrice, sortBy]);

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <main className="marketplace">
      <motion.div
        className="announcement-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span>Good things are closer than you think.</span>
        <span className="announcement-right">
          A new way to discover <ArrowUpRight size={13} />
        </span>
      </motion.div>

      <motion.header
        className="market-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <a href="/" className="market-logo">
          <span className="logo-symbol">v.</span>
          <span>VANTA<span className="logo-light">/MARKET</span></span>
        </a>

        <nav className={mobileMenuOpen ? "header-nav nav-open" : "header-nav"}>
          <a href="#listings" onClick={() => setMobileMenuOpen(false)}>Discover</a>
          <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Categories</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>Our story</a>
        </nav>

        <div className="header-actions">
          <button
            className="header-favorites"
            onClick={() => {
              setShowSavedOnly((value) => !value);
              setSearch("");
              setActiveCategory("Everything");
            }}
          >
            <Heart size={17} />
            <span>{showSavedOnly ? "All listings" : "Saved"}</span>
            {favorites.length > 0 && <span className="saved-count">{favorites.length}</span>}
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      <section className="discovery-intro">
        <motion.div
          className="intro-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <span className="intro-kicker">
            <span className="kicker-dot" />
            YOUR NEXT DISCOVERY STARTS HERE
          </span>

          <h1>
            Find things
            <br />
            <span>worth finding.</span>
          </h1>

          <p>
            Objects with character. Pieces with a story.
            <br className="desktop-break" />
            Discover your next favorite thing.
          </p>
        </motion.div>

        <motion.div
          className="intro-side"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="intro-index">01 / DISCOVER</div>
          <div className="intro-decoration">
            <span>V</span>
            <span>✳</span>
            <span>M</span>
          </div>
          <p>Curated finds.<br />Unexpected favorites.</p>
        </motion.div>
      </section>

      <section className="listing-section" id="listings">
        <motion.div
          className="listing-toolbar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="listing-heading">
            <span className="section-label">THE COLLECTION</span>
            <h2>Discover something <em>different.</em></h2>
          </div>

          <div className="listing-search">
            <Search size={18} />
            <input
              type="search"
              placeholder="Search the listings..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <SlidersHorizontal size={17} />
          </div>
        </motion.div>

        <div className="category-strip" id="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "category-pill active" : "category-pill"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
          <span className="listing-count">
            {filteredProducts.length} FINDS
          </span>
        </div>

        <div className="listing-controls">
          <div className="price-filter">
            <label>Min ₦ <input type="number" min="0" placeholder="0" value={minPrice} onChange={(event) => setMinPrice(event.target.value)} /></label>
            <label>Max ₦ <input type="number" min="0" placeholder="Any" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} /></label>
          </div>
          <label className="sort-control">Sort by
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>
        </div>

        <motion.div
          className="listing-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                favorite={favorites.includes(product.id)}
                onFavorite={toggleFavorite}
                onOpen={openProduct}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <Sparkles size={28} />
            <h3>No discoveries just yet.</h3>
            <p>Try another search or explore a different category.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("Everything");
                setShowSavedOnly(false);
                setMinPrice("");
                setMaxPrice("");
                setSortBy("featured");
              }}
            >
              Show all listings
            </button>
          </div>
        )}
      </section>

      {recentProducts.length > 0 && (
        <section className="recent-section" aria-labelledby="recent-heading">
          <div className="recent-heading">
            <div>
              <span className="section-label">PICK UP WHERE YOU LEFT OFF</span>
              <h2 id="recent-heading">Recently <em>viewed.</em></h2>
            </div>
            <button className="recent-clear" onClick={() => setRecentlyViewed([])}>Clear history</button>
          </div>
          <div className="listing-grid recent-grid">
            {recentProducts.map((product, index) => (
              <ProductCard
                key={`recent-${product.id}`}
                product={product}
                index={index}
                favorite={favorites.includes(product.id)}
                onFavorite={toggleFavorite}
                onOpen={openProduct}
              />
            ))}
          </div>
        </section>
      )}

      <motion.section
        className="discovery-banner"
        id="about"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        <div className="banner-orbit orbit-one" />
        <div className="banner-orbit orbit-two" />

        <div className="banner-content">
          <span className="section-label">KEEP LOOKING</span>
          <h2>
            The good stuff
            <br />
            is <em>out there.</em>
          </h2>
          <p>Stay curious. Your next favorite find is waiting.</p>
        </div>

        <a href="#listings" className="banner-link">
          Explore the collection <ArrowUpRight size={18} />
        </a>
      </motion.section>

      <AnimatePresence>
        {selectedProduct && (
          <ListingDetails
            product={selectedProduct}
            favorite={favorites.includes(selectedProduct.id)}
            onFavorite={toggleFavorite}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

      <footer className="market-footer">
        <a href="/" className="market-logo">
          <span className="logo-symbol">v.</span>
          <span>VANTA<span className="logo-light">/MARKET</span></span>
        </a>

        <p>Discover differently. © {new Date().getFullYear()}</p>

        <div className="footer-credit">
          <span>Built & designed by</span>
          <strong>Kalu Destiny</strong>
          <span className="credit-star">✳</span>
        </div>
      </footer>
    </main>
  );
}

export default Home;