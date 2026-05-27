import pickaxesData from '@/data/pickaxes.json';
import codesData from '@/data/codes.json';
import configData from '@/data/game.config.json';

export interface Pickaxe {
  id: string;
  slug: string;
  name: string;
  tier: number;
  grade: 'S' | 'A' | 'B' | 'C' | 'D';
  power: number;
  price: number;
  ore: string;
  rarity: string;
  description: string;
  bestFor: string[];
  mergeOnly: boolean;
  mergeFrom: string | null;
  nextTier: string | null;
  videoId?: string | null;
  tips: string[];
  tags: string[];
}

export interface Code {
  id: string;
  code: string;
  reward: string;
  expiration?: string;
  added: string;
}

export interface GameConfig {
  game: {
    name: string;
    robloxId: string;
    developer: string;
    genre: string;
    currentVersion: string;
    lastUpdated: string;
  };
  stats: {
    visits: string;
    favorites: string;
    onlineNow: string;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    baseUrl: string;
    primaryKeywords: string[];
    secondaryKeywords: string[];
  };
  routes: { path: string; title: string; priority: string }[];
  calculator: { type: string; dataFile: string };
}

const pickaxes: Pickaxe[] = (pickaxesData as { pickaxes: Pickaxe[] }).pickaxes;
const codes: Code[] = (codesData as { codes: Code[] }).codes;
const config: GameConfig = configData as GameConfig;

export function getPickaxes(): Pickaxe[] {
  return pickaxes;
}

export function getPickaxeBySlug(slug: string): Pickaxe | undefined {
  return pickaxes.find((p) => p.slug === slug);
}

export function getPickaxeById(id: string): Pickaxe | undefined {
  return pickaxes.find((p) => p.id === id);
}

export function getCodes(): Code[] {
  return codes;
}

export function getGameConfig(): GameConfig {
  return config;
}

export function getPickaxesByGrade(grade: string): Pickaxe[] {
  return pickaxes.filter((p) => p.grade === grade);
}

export function getPickaxesByTier(tier: number): Pickaxe[] {
  return pickaxes.filter((p) => p.tier === tier);
}

export function getActiveCodes(): Code[] {
  return codes.filter((c) => !c.expiration || new Date(c.expiration) > new Date());
}
