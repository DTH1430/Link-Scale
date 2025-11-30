import { Layers, Zap, ShieldCheck, BarChart3, Globe, Smartphone } from 'lucide-react';
import { NavItem, Feature, Stat, Testimonial, Step } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#' },
  { label: 'How it Works', href: '#' },
  { label: 'Testimonials', href: '#' },
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Direct Connection',
    description: 'Eliminate middlemen. Connect directly with verified manufacturers and wholesalers globally.',
    icon: Globe,
  },
  {
    id: '2',
    title: 'Real-time Inventory',
    description: 'Sync stock levels instantly. Never oversell or underbuy with our live inventory tracking.',
    icon: Layers,
  },
  {
    id: '3',
    title: 'Instant Logistics',
    description: 'Automated shipping calculations and waybill generation embedded directly in the checkout.',
    icon: Zap,
  },
  {
    id: '4',
    title: 'Secure Escrow',
    description: 'Funds are held securely until delivery is confirmed, protecting both buyer and seller.',
    icon: ShieldCheck,
  },
  {
    id: '5',
    title: 'Data Analytics',
    description: 'Actionable insights on trending products, profit margins, and supplier performance.',
    icon: BarChart3,
  },
  {
    id: '6',
    title: 'Mobile First',
    description: 'Manage your entire supply chain from your pocket with our native iOS and Android apps.',
    icon: Smartphone,
  },
];

export const STATS: Stat[] = [
  { id: '1', value: '$2B+', label: 'Transaction Volume' },
  { id: '2', value: '15k+', label: 'Verified Wholesalers' },
  { id: '3', value: '48h', label: 'Average Delivery' },
];

export const STEPS: Step[] = [
  {
    id: '1',
    number: '01',
    title: 'Create Profile',
    description: 'Verify your business credentials in minutes with our automated KYB process.',
  },
  {
    id: '2',
    number: '02',
    title: 'Discover Products',
    description: 'Browse thousands of verified catalogs or post a Request for Quotation (RFQ).',
  },
  {
    id: '3',
    number: '03',
    title: 'Trade Securely',
    description: 'Negotiate terms, finalize orders, and track shipments in real-time.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "LinkScale reduced our sourcing time by 60%. The interface is incredibly clean and distraction-free.",
    author: "Sarah Jenkins",
    role: "Procurement Lead",
    company: "Urban Outfitters Co."
  },
  {
    id: '2',
    quote: "Finally, a B2B platform that feels like a modern consumer app. No clutter, just business.",
    author: "Marcus Chen",
    role: "Owner",
    company: "Chen Electronics"
  },
];