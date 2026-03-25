export interface Model {
  provider: string;
  name: string;
  iconSvg: string;
  stats: { params: string; quant: string; ram: string; size: string };
  downloads: { count: string; sparklineSvg: string };
  action: "running" | "downloaded" | "download" | "disabled";
  actionLabel: string;
  compatible: boolean;
  compatLabel: string;
}

export const models: Model[] = [
  {
    provider: "Qwen",
    name: "Qwen 3.5 \u00b7 Instruct",
    iconSvg: `<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M16 3C9.4 3 4 8.4 4 15s5.4 12 12 12c2.5 0 4.8-.8 6.7-2.1l3.5 3.5c.4.4 1 .4 1.4 0s.4-1 0-1.4l-3.2-3.2C26.3 21.5 28 18.4 28 15c0-6.6-5.4-12-12-12zm0 21c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm-1-13.5c0 2.5-1 4.5-2 5.5.7.3 1.6.5 3 .5 3.3 0 5.5-2 5.5-5.5S18.3 6 16 6c-1.5 0-2.5.8-2.5.8S15 8 15 10.5z" opacity="0.9"/></svg>`,
    stats: { params: "4B", quant: "Q4_K_M", ram: "4.2 GB", size: "2.8 GB" },
    downloads: {
      count: "2.4M",
      sparklineSvg: `<svg width="48" height="18" viewBox="0 0 48 18"><polyline fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" points="0,16 6,14 12,13 18,11 24,9 30,6 36,4 42,3 48,1"/><polyline fill="none" stroke="white" stroke-width="1.5" points="0,15 6,13 12,11 18,9 24,7 30,5 36,3 42,2 48,1"/></svg>`,
    },
    action: "running",
    actionLabel: "\u25b6 Running",
    compatible: true,
    compatLabel: "\u2713 Compatible",
  },
  {
    provider: "DeepSeek",
    name: "DeepSeek-V3 \u00b7 Chat",
    iconSvg: `<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M16 8C10 8 5 12.5 3 16c2 3.5 7 8 13 8s11-4.5 13-8c-2-3.5-7-8-13-8zm0 13a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"/></svg>`,
    stats: { params: "685B", quant: "Q3_K_M", ram: "42 GB", size: "38 GB" },
    downloads: {
      count: "5.1M",
      sparklineSvg: `<svg width="48" height="18" viewBox="0 0 48 18"><polyline fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" points="0,16 6,15 12,14 18,12 24,8 30,4 36,2 42,1 48,1"/><polyline fill="none" stroke="white" stroke-width="1.5" points="0,17 6,16 12,14 18,10 24,6 30,3 36,1 42,1 48,1"/></svg>`,
    },
    action: "downloaded",
    actionLabel: "\u2713 Downloaded",
    compatible: true,
    compatLabel: "\u2713 Compatible",
  },
  {
    provider: "MiniMax",
    name: "M2.1 \u00b7 Instruct",
    iconSvg: `<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M4 24V10l6 8 6-8v14h-2.5V16l-3.5 4.5L6.5 16V24H4zm15 0V10l4.5 6L28 10v14h-2.5V16l-2 2.5L21.5 16v8H19z"/></svg>`,
    stats: { params: "40B", quant: "Q4_K_S", ram: "26 GB", size: "22 GB" },
    downloads: {
      count: "892K",
      sparklineSvg: `<svg width="48" height="18" viewBox="0 0 48 18"><polyline fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" points="0,12 6,13 12,11 18,10 24,8 30,9 36,6 42,4 48,2"/><polyline fill="none" stroke="white" stroke-width="1.5" points="0,14 6,12 12,10 18,9 24,7 30,8 36,5 42,3 48,2"/></svg>`,
    },
    action: "download",
    actionLabel: "1-Click Download",
    compatible: true,
    compatLabel: "\u2713 Compatible",
  },
  {
    provider: "Kimi",
    name: "K2 \u00b7 Instruct",
    iconSvg: `<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 4.5A12 12 0 1012 28c4.8 0 9-2.8 10.5-7.5-1.5.8-3.2 1.2-5 1.2A8.5 8.5 0 019 13.2c0-3.6 2.2-6.7 5.5-8-1.2-.5-2.5-.7-4-.7z" opacity="0.9"/></svg>`,
    stats: { params: "32B", quant: "Q4_K_M", ram: "21 GB", size: "18 GB" },
    downloads: {
      count: "1.7M",
      sparklineSvg: `<svg width="48" height="18" viewBox="0 0 48 18"><polyline fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" points="0,17 6,16 12,14 18,12 24,10 30,8 36,5 42,3 48,1"/><polyline fill="none" stroke="white" stroke-width="1.5" points="0,16 6,15 12,12 18,10 24,8 30,6 36,4 42,2 48,1"/></svg>`,
    },
    action: "download",
    actionLabel: "1-Click Download",
    compatible: true,
    compatLabel: "\u2713 Compatible",
  },
  {
    provider: "GLM",
    name: "GLM-4.7 \u00b7 Chat",
    iconSvg: `<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="8" r="3"/><circle cx="8" cy="22" r="3"/><circle cx="24" cy="22" r="3"/><line x1="16" y1="11" x2="9.5" y2="19.5" stroke="white" stroke-width="2"/><line x1="16" y1="11" x2="22.5" y2="19.5" stroke="white" stroke-width="2"/><line x1="11" y1="22" x2="21" y2="22" stroke="white" stroke-width="2"/></svg>`,
    stats: { params: "9B", quant: "Q5_K_M", ram: "7.1 GB", size: "5.6 GB" },
    downloads: {
      count: "640K",
      sparklineSvg: `<svg width="48" height="18" viewBox="0 0 48 18"><polyline fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" points="0,10 6,11 12,9 18,10 24,8 30,7 36,5 42,4 48,3"/><polyline fill="none" stroke="white" stroke-width="1.5" points="0,11 6,10 12,8 18,9 24,7 30,6 36,4 42,3 48,2"/></svg>`,
    },
    action: "downloaded",
    actionLabel: "\u2713 Downloaded",
    compatible: true,
    compatLabel: "\u2713 Compatible",
  },
  {
    provider: "Mistral",
    name: "Mistral Large 2 \u00b7 Instruct",
    iconSvg: `<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="5" width="5" height="5" rx="1"/><rect x="13.5" y="5" width="5" height="5" rx="1"/><rect x="23" y="5" width="5" height="5" rx="1"/><rect x="4" y="13.5" width="5" height="5" rx="1"/><rect x="23" y="13.5" width="5" height="5" rx="1"/><rect x="4" y="22" width="5" height="5" rx="1"/><rect x="13.5" y="22" width="5" height="5" rx="1"/><rect x="23" y="22" width="5" height="5" rx="1"/><rect x="13.5" y="13.5" width="5" height="5" rx="1" opacity="0.4"/></svg>`,
    stats: { params: "123B", quant: "Q3_K_M", ram: "44 GB", size: "39 GB" },
    downloads: {
      count: "3.8M",
      sparklineSvg: `<svg width="48" height="18" viewBox="0 0 48 18"><polyline fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" points="0,8 6,9 12,7 18,8 24,6 30,5 36,4 42,5 48,3"/><polyline fill="none" stroke="white" stroke-width="1.5" points="0,9 6,8 12,6 18,7 24,5 30,4 36,3 42,4 48,2"/></svg>`,
    },
    action: "download",
    actionLabel: "1-Click Download",
    compatible: true,
    compatLabel: "\u2713 Compatible",
  },
  {
    provider: "Gemma",
    name: "Gemma 3 \u00b7 Instruct",
    iconSvg: `<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M16 2l2.5 9.5L28 14l-9.5 2.5L16 26l-2.5-9.5L4 14l9.5-2.5L16 2z"/><path d="M25 4l1 3.5L29.5 8.5 26 9.5 25 13l-1-3.5L20.5 8.5 24 7.5z" opacity="0.5"/></svg>`,
    stats: { params: "27B", quant: "Q4_K_M", ram: "18 GB", size: "15 GB" },
    downloads: {
      count: "4.2M",
      sparklineSvg: `<svg width="48" height="18" viewBox="0 0 48 18"><polyline fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" points="0,14 6,12 12,10 18,9 24,7 30,6 36,5 42,3 48,2"/><polyline fill="none" stroke="white" stroke-width="1.5" points="0,13 6,11 12,9 18,8 24,6 30,5 36,4 42,2 48,1"/></svg>`,
    },
    action: "downloaded",
    actionLabel: "\u2713 Downloaded",
    compatible: true,
    compatLabel: "\u2713 Compatible",
  },
  {
    provider: "Nemotron",
    name: "Nemotron Ultra \u00b7 Instruct",
    iconSvg: `<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v3.2c-2.7.5-4.8 2.7-4.8 5.4 0 .5 0 .9.1 1.4L4 16.5v-2.3l3.5-2c1-2.5 3-4.2 4.5-4.2zm1.5 3V6.5C11 6.8 8.5 8.5 7 11l-3.2 1.8V16l2.7 1.5c.6 3.5 3.8 6 7.5 6 4.2 0 7.7-3.4 7.7-7.7 0-4.8-4.5-8.3-8.2-7.8v3c2.5.3 4.5 2.5 4.5 5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5c0-2 1.3-3.7 3-4.3v-.7zm14 3v2.7L24 18.5c-1 2.5-3.3 4.3-6 4.8V27c5-0.5 9-4.7 9-9.8 0-1.2-.2-2.3-.5-3.2z"/></svg>`,
    stats: { params: "253B", quant: "Q4_K_M", ram: "96 GB", size: "82 GB" },
    downloads: {
      count: "1.1M",
      sparklineSvg: `<svg width="48" height="18" viewBox="0 0 48 18"><polyline fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" points="0,15 6,14 12,12 18,11 24,9 30,7 36,6 42,4 48,3"/><polyline fill="none" stroke="white" stroke-width="1.5" points="0,16 6,13 12,11 18,10 24,8 30,6 36,5 42,3 48,2"/></svg>`,
    },
    action: "disabled",
    actionLabel: "Requires More RAM",
    compatible: false,
    compatLabel: "Needs 96GB",
  },
];
