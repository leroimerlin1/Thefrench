import { useEffect } from 'react';
import { useInitData, useThemeParams, useMainButton } from '@telegram-apps/sdk-react';
import { Home, Star, ShoppingCart, Info, MessageSquare } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Snow Heads',
    strain: 'STATIC SIFT',
    weight: '73u',
    farm: 'GARDEN SERIES',
    origin: 'USA',
    price: '50g',
    image: 'https://via.placeholder.com/300x400/11171f/39ff14?text=SNOW+HEADS', // remplace par vraies images
    starred: true,
  },
  {
    id: '2',
    name: 'Blue Cookies',
    strain: 'STATIC SIFT',
    weight: '139u',
    farm: 'MACONHA FARMS',
    origin: 'USA',
    price: '50g',
    image: 'https://via.placeholder.com/300x400/11171f/39ff14?text=BLUE+COOKIES',
    starred: true,
  },
  {
    id: '3',
    name: 'Gas Mask',
    strain: 'GARDEN SERIES',
    weight: '139u',
    farm: 'VOLTIO FARMS',
    origin: 'USA',
    price: '50g',
    image: 'https://via.placeholder.com/300x400/11171f/39ff14?text=GAS+MASK',
    starred: true,
  },
  {
    id: '4',
    name: 'Popsicle',
    strain: 'GARDEN SERIES',
    weight: '73u',
    farm: 'VOLTIO FARMS',
    origin: 'USA',
    price: '50g',
    image: 'https://via.placeholder.com/300x400/11171f/39ff14?text=POPSICLE',
    starred: true,
  },
  // Ajoute-en plus si besoin
];

function App() {
  const initData = useInitData();
  const theme = useThemeParams();
  const mainButton = useMainButton();

  const userName = initData?.user?.username || 'Farmer';

  useEffect(() => {
    mainButton.setText('Panier (0)');
    mainButton.show();
    mainButton.enable();
  }, [mainButton]);

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-gray-100 relative"
      style={{
        backgroundImage: `url('https://wallpapers.com/images/hd/green-smoke-background-c3d1226uqljqjb2a.jpg')`,
        // Alternatives sympas :
        // url('https://wallpapers.com/images/hd/abstract-smoke-art-background-3ly7uptmz0d7d18p.jpg')
        // url('https://c8.alamy.com/comp/2JXWHTK/neon-smoke-colorful-background-ink-green-yellow-2JXWHTK.jpg')
      }}
    >
      {/* Overlay pour lisibilité + vibe dark */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Header */}
        <header className="sticky top-0 z-20 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-md px-4 py-3 border-b border-neon-green/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green font-bold text-xl shadow-neon">
                FCF
              </div>
              <div>
                <h1 className="text-xl font-black tracking-wider text-neon-green font-cyber uppercase drop-shadow-lg">
                  The French Cali Farmz
                </h1>
                <p className="text-xs opacity-70">@{userName}</p>
              </div>
            </div>
            <button className="text-neon-green hover:text-white transition-colors">
              <Star size={24} fill="currentColor" />
            </button>
          </div>
        </header>

        {/* Welcome */}
        <div className="px-4 py-5 bg-gradient-to-r from-dark-card/80 to-black/60 border-b border-neon-green/20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-neon-green/10 flex items-center justify-center text-3xl shadow-neon">
              👋
            </div>
            <div>
              <h2 className="text-lg font-bold text-neon-green">Bienvenue</h2>
              <p className="text-sm opacity-90">LeRoiMerlin</p>
            </div>
            <div className="ml-auto text-neon-green text-2xl animate-pulse">✨</div>
          </div>
        </div>

        {/* Filtres */}
        <div className="px-4 py-3 flex items-center gap-3 overflow-x-auto border-b border-dark-border bg-dark-card/40 backdrop-blur-sm">
          <button className="px-5 py-2 bg-dark-card rounded-full text-sm border border-neon-green/60 text-neon-green whitespace-nowrap font-medium hover:bg-neon-green/10 transition">
            Catégories ▼
          </button>
          <button className="px-5 py-2 bg-dark-card rounded-full text-sm border border-neon-green/60 text-neon-green whitespace-nowrap font-medium hover:bg-neon-green/10 transition">
            Farms ▼
          </button>
          <div className="ml-auto text-sm opacity-70 font-medium">
            57 produits
          </div>
        </div>

        {/* Grille produits */}
        <main className="flex-1 p-4 grid grid-cols-2 gap-4 pb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-dark-card/80 rounded-xl overflow-hidden border border-dark-border shadow-neon hover:shadow-[0_0_25px_rgba(57,255,20,0.7)] transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.starred && (
                  <div className="absolute top-2 left-2 bg-neon-green/90 text-black text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    ★
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-black/70 text-neon-green text-xs px-2.5 py-1 rounded font-medium">
                  {product.farm}
                </div>
              </div>

              <div className="p-3">
                <h3 className="font-bold text-base mb-1 line-clamp-1 text-white">
                  {product.name}
                </h3>
                <p className="text-xs opacity-80 flex items-center gap-1.5">
                  <span>{product.origin === 'USA' ? '🇺🇸' : ''}</span>
                  {product.strain} – {product.weight}
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-neon-green font-bold text-lg">{product.price}</span>
                  <button className="bg-neon-green/20 hover:bg-neon-green/40 text-neon-green px-4 py-1.5 rounded-full text-sm font-bold transition">
                    + Panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-dark-card/90 backdrop-blur-xl border-t border-dark-border py-2 px-4 flex justify-around items-center z-30">
          <button className="flex flex-col items-center text-neon-green">
            <Home size={26} />
            <span className="text-xs mt-1 font-medium">Accueil</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-neon-green transition">
            <Star size={26} />
            <span className="text-xs mt-1 font-medium">Avis</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-neon-green transition relative">
            <ShoppingCart size={26} />
            <span className="text-xs mt-1 font-medium">Panier</span>
            <span className="absolute -top-1 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              0
            </span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-neon-green transition">
            <Info size={26} />
            <span className="text-xs mt-1 font-medium">Infos</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-neon-green transition">
            <MessageSquare size={26} />
            <span className="text-xs mt-1 font-medium">Contact</span>
          </button>
        </nav>

      </div>
    </div>
  );
}

export default App;
