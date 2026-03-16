import appleBooksCss from '../../排版测试/Styles/style_applebooks.css?raw';
import beaconCss from '../../排版测试/Styles/style_beacon.css?raw';
import brutalistCss from '../../排版测试/Styles/style_brutalist.css?raw';
import classicCss from '../../排版测试/Styles/style_classic.css?raw';
import cyberpunkCss from '../../排版测试/Styles/style_cyberpunk.css?raw';
import decoCss from '../../排版测试/Styles/style_deco.css?raw';
import editorialCss from '../../排版测试/Styles/style_editorial.css?raw';
import fantasyCss from '../../排版测试/Styles/style_fantasy.css?raw';
import glassCss from '../../排版测试/Styles/style_glass.css?raw';
import inkCss from '../../排版测试/Styles/style_ink.css?raw';
import luxuryCss from '../../排版测试/Styles/style_luxury.css?raw';
import manuscriptCss from '../../排版测试/Styles/style_manuscript.css?raw';
import minimalistCss from '../../排版测试/Styles/style_minimalist.css?raw';
import modernCss from '../../排版测试/Styles/style_modern.css?raw';
import nightCss from '../../排版测试/Styles/style_night.css?raw';
import pureCss from '../../排版测试/Styles/style_pure.css?raw';
import retroCss from '../../排版测试/Styles/style_retro.css?raw';
import vermilionCss from '../../排版测试/Styles/style_vermilion.css?raw';

export interface EpubStyle {
  id: string;
  name: string;
  css: string;
}

export const EPUB_STYLES: EpubStyle[] = [
  { id: 'applebooks', name: 'Apple Books 优化', css: appleBooksCss },
  { id: 'classic', name: '经典印刷', css: classicCss },
  { id: 'modern', name: '现代简约', css: modernCss },
  { id: 'night', name: '深色夜间', css: nightCss },
  { id: 'minimalist', name: '极简禅意', css: minimalistCss },
  { id: 'retro', name: '复古羊皮纸', css: retroCss },
  { id: 'pure', name: '纯粹极简', css: pureCss },
  { id: 'ink', name: '水墨古韵', css: inkCss },
  { id: 'beacon', name: '烽火雪原', css: beaconCss },
  { id: 'vermilion', name: '朱墙之下', css: vermilionCss },
  { id: 'editorial', name: '精美杂志', css: editorialCss },
  { id: 'deco', name: '装饰艺术', css: decoCss },
  { id: 'luxury', name: '黑金奢华', css: luxuryCss },
  { id: 'manuscript', name: '手稿线装', css: manuscriptCss },
  { id: 'brutalist', name: '粗野宣言', css: brutalistCss },
  { id: 'cyberpunk', name: '赛博霓虹', css: cyberpunkCss },
  { id: 'glass', name: '极光玻璃', css: glassCss },
  { id: 'fantasy', name: '魔法羊皮卷', css: fantasyCss }
];

