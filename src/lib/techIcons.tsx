import type { ReactNode } from 'react';
import {
    Code2,
    Zap,
    Palette,
    Triangle,
    Database,
    Terminal,
    Brackets,
    FileJson,
    SquareCode,
    FileType,
    Braces,
    Hexagon,
    Brain,
    Mic,
    MessageCircle,
    MapPin,
    Train
} from 'lucide-react';

const ICON_SIZE = 14;
const iconClass = 'inline-block text-current';

/** Maps a technology name to its inline badge icon. */
export const techIcons: Record<string, ReactNode> = {
    React: <Code2 size={ICON_SIZE} className={iconClass} />,
    Vite: <Zap size={ICON_SIZE} className={iconClass} />,
    'Tailwind CSS': <Palette size={ICON_SIZE} className={iconClass} />,
    Vercel: <Triangle size={ICON_SIZE} className={iconClass} />,
    Python: <Terminal size={ICON_SIZE} className={iconClass} />,
    HandleBars: <Brackets size={ICON_SIZE} className={iconClass} />,
    'Node.js': <FileJson size={ICON_SIZE} className={iconClass} />,
    'Express.js': <SquareCode size={ICON_SIZE} className={iconClass} />,
    MySQL: <Database size={ICON_SIZE} className={iconClass} />,
    Sequelize: <Database size={ICON_SIZE} className={iconClass} />,
    HTML: <Code2 size={ICON_SIZE} className={iconClass} />,
    CSS: <Palette size={ICON_SIZE} className={iconClass} />,
    JavaScript: <Braces size={ICON_SIZE} className={iconClass} />,
    TypeScript: <FileType size={ICON_SIZE} className={iconClass} />,
    Bootstrap: <Palette size={ICON_SIZE} className={iconClass} />,
    'Community Service': <Hexagon size={ICON_SIZE} className={iconClass} />,
    Supabase: <Database size={ICON_SIZE} className={iconClass} />,
    'GPT-3.5 Turbo': <Brain size={ICON_SIZE} className={iconClass} />,
    Firestore: <Database size={ICON_SIZE} className={iconClass} />,
    'Murf.ai': <Mic size={ICON_SIZE} className={iconClass} />,
    Llama: <Brain size={ICON_SIZE} className={iconClass} />,
    WhatsApp: <MessageCircle size={ICON_SIZE} className={iconClass} />,
    Maps: <MapPin size={ICON_SIZE} className={iconClass} />,
    Railway: <Train size={ICON_SIZE} className={iconClass} />
};
