import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Game {
  id: number;
  title: string;
  cover: string;
  rating: number;
  players: string;
}

const games: Game[] = [
  {
    id: 1,
    title: 'GTA 5',
    cover: 'https://cdn.poehali.dev/projects/9f3aa102-3778-40b1-9cac-a5532a67d31c/files/76b0f38d-bcbb-4271-9073-4c4d677ffa33.jpg',
    rating: 9.5,
    players: '2.5M',
  },
  {
    id: 2,
    title: 'Red Dead Redemption 2',
    cover: 'https://cdn.poehali.dev/projects/9f3aa102-3778-40b1-9cac-a5532a67d31c/files/5b1bc860-9ff5-4d46-8784-c39c3270735f.jpg',
    rating: 9.8,
    players: '1.8M',
  },
  {
    id: 3,
    title: 'Cyberpunk 2077',
    cover: 'https://cdn.poehali.dev/projects/9f3aa102-3778-40b1-9cac-a5532a67d31c/files/a90ac76c-d272-44b3-8c22-d9bc6965bc1b.jpg',
    rating: 9.2,
    players: '1.2M',
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { toast } = useToast();

  const handlePlayGame = (gameTitle: string) => {
    toast({
      title: "🎮 Запуск игры...",
      description: `${gameTitle} загружается в облаке. Приятной игры!`,
      duration: 3000,
    });
  };

  const handleLogin = () => {
    toast({
      title: "👋 Добро пожаловать!",
      description: "Функция входа скоро будет доступна",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Gamepad2" size={32} className="text-primary animate-pulse-glow" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                CLOUD GAMING
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'games', label: 'Игры', icon: 'Gamepad2' },
                { id: 'library', label: 'Библиотека', icon: 'Library' },
                { id: 'rating', label: 'Рейтинг', icon: 'Trophy' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground glow-purple'
                      : 'hover:bg-primary/10'
                  }`}
                >
                  <Icon name={tab.icon as any} size={18} />
                  {tab.label}
                </button>
              ))}
            </div>

            <Button size="sm" className="gradient-cyberpunk glow-cyan" onClick={handleLogin}>
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse-glow">
              Играй в AAA-игры
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Облачный гейминг в 60 FPS без установки. Один клик — и ты в игре
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Badge className="bg-primary/20 text-primary border-primary glow-purple text-lg px-4 py-2">
                <Icon name="Zap" size={18} className="mr-2" />
                60 FPS
              </Badge>
              <Badge className="bg-secondary/20 text-secondary border-secondary glow-cyan text-lg px-4 py-2">
                <Icon name="Cloud" size={18} className="mr-2" />
                В облаке
              </Badge>
              <Badge className="bg-accent/20 text-accent border-accent glow-pink text-lg px-4 py-2">
                <Icon name="Sparkles" size={18} className="mr-2" />
                Бесплатно
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <Card
                key={game.id}
                className="group overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:scale-105 hover:glow-purple bg-card"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={game.cover}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-primary glow-purple">
                      <Icon name="Zap" size={14} className="mr-1" />
                      60 FPS
                    </Badge>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-xl font-bold text-white">{game.rating}</span>
                      <span className="text-muted-foreground ml-auto">{game.players} игроков</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{game.title}</h3>
                    <Button
                      className="w-full gradient-cyberpunk glow-cyan group-hover:scale-105 transition-transform text-lg py-6"
                      size="lg"
                      onClick={() => handlePlayGame(game.title)}
                    >
                      <Icon name="Play" size={20} className="mr-2" />
                      Играть сейчас
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/30 glow-purple">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <Icon name="Zap" size={40} className="mx-auto text-primary" />
                    <h3 className="text-xl font-bold">Мгновенный старт</h3>
                    <p className="text-muted-foreground">Играй через секунду после клика</p>
                  </div>
                  <div className="space-y-2">
                    <Icon name="Monitor" size={40} className="mx-auto text-secondary" />
                    <h3 className="text-xl font-bold">Любое устройство</h3>
                    <p className="text-muted-foreground">ПК, ноутбук или планшет</p>
                  </div>
                  <div className="space-y-2">
                    <Icon name="Download" size={40} className="mx-auto text-accent" />
                    <h3 className="text-xl font-bold">Без установки</h3>
                    <p className="text-muted-foreground">Экономь место на диске</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Cloud Gaming Portal. Играй в будущее сегодня</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;