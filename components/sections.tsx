import Image from 'next/image';
import { BookingTrigger } from './booking-trigger';
import { Reveal } from './reveal';

const spaceCards = [
  ['wash-studio-overview.jpg', '整体环境', 'OVERVIEW / 01', '高端东方洗护店整体环境', 'large'],
  ['wash-area.jpg', '专业洗护区', 'CARE / 02', '专业洗护操作区', 'small'],
  ['lounge-area.jpg', '会员休息区', 'LOUNGE / 03', '会员休息区', 'small'],
  ['product-display.jpg', '产品展示区', 'DISPLAY / 04', '洗护产品展示区', 'small'],
  ['private-care.jpg', '私密护理区', 'PRIVATE / 05', '私密护理区', 'small'],
  ['tea-area.jpg', '茶歇区', 'TEA / 06', '茶歇区', 'small'],
  ['care-bed.jpg', '护理床位区', 'RITUAL / 07', '护理床位区', 'small'],
] as const;

export function HeroSection() {
  return <>
    <div className="wrap hero">
      <Reveal className="hero-copy-block"><span className="eyebrow"><i /> Soft care for good days</span><h1>让每一次<br /><em>洗香香</em>，都值得期待。</h1><p className="hero-copy">MOMO 是一家给毛孩子准备的温柔洗护所。我们相信，干净、蓬松和被好好对待，是宠物日常里很重要的小事。</p><div className="actions"><BookingTrigger className="button">预约一次焕新 <span className="arrow">↗</span></BookingTrigger><a className="text-link" href="#services">看看服务</a></div></Reveal>
      <Reveal className="hero-art"><div className="hero-photo-shell"><div className="hero-photo"><Image src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1100&q=85" alt="一只被温柔照顾的狗狗" fill priority sizes="(max-width: 800px) 90vw, 45vw" /></div></div><div className="hero-sticker">今天也要<br />毛茸茸</div><div className="hero-note"><strong>4.9 / 5.0</strong>来自 2,300+ 位<br />毛孩子家长的安心推荐</div></Reveal>
    </div>
    <div className="marquee" aria-label="MOMO 服务理念"><div className="marquee-track"><span>GENTLE HANDS</span><span>·</span><span>LOW STRESS GROOMING</span><span>·</span><span>GOOD HAIR DAYS</span><span>·</span><span>GENTLE HANDS</span><span>·</span><span>LOW STRESS GROOMING</span><span>·</span></div></div>
  </>;
}

export function ServicesSection() {
  return <section id="services"><div className="wrap"><div className="section-head"><Reveal><span className="eyebrow"><i /> What we do</span><h2>一套刚刚好的<br />日常洗护。</h2></Reveal><Reveal delay={55}><p className="section-intro">从爪爪到耳朵，从清洁到吹干，每一步都慢一点、轻一点，让洗护变成一次舒服的小旅行。</p></Reveal></div><div className="service-grid">{[['01 / SIGNATURE', '全套精致洗护', '泡沫浴 · 深层清洁 · 面部修剪 · 指甲护理', '适合想从头到脚焕然一新的你。', 'primary', '✦'], ['02 / QUICK', '轻盈洗浴', '不剪毛，也能清清爽爽。', '', 'peach', '◒'], ['03 / DETAIL', '局部护理', '耳道、脚底与小脸的精细照顾。', '', 'sage', '⌁'], ['04 / EXTRA', '接送到家', '把路上的紧张，也一起省掉。', '', '', '↗']].map(([no, title, text, extra, tone, mark], index) => <Reveal key={no} delay={index * 55} className={`service ${tone}`}><span className="service-no">{no}</span><h3>{title}</h3><p>{text}{extra && <><br />{extra}</>}</p><span className="service-mark">{mark}</span></Reveal>)}</div></div></section>;
}

export function SpaceSection() {
  return <section id="space" className="space-section"><div className="wrap"><div className="section-head"><Reveal><span className="eyebrow"><i /> The studio</span><h2>把洗护，放进<br />一间东方会所。</h2></Reveal><Reveal delay={55}><p className="section-intro">来自你的空间参考图。我们把整体环境和不同功能区域拆成一组小框架，让访客先感受到空间，再了解服务。</p></Reveal></div><div className="space-board">{spaceCards.map(([file, title, code, alt, size], index) => <Reveal key={file} delay={index * 45} className={`space-card ${size}`}><Image src={`/assets/wash-studio/${file}`} alt={alt} fill sizes={size === 'large' ? '100vw' : '(max-width: 800px) 50vw, 33vw'} /><div className="space-caption"><span>{title}</span><small>{code}</small></div></Reveal>)}</div><Reveal><p className="space-note">深胡桃木 · 暖灰石材 · 屏风格栅 · 暖光陈列</p></Reveal></div></section>;
}

export function RitualSection() {
  return <section id="ritual" className="ritual"><div className="wrap ritual-grid"><Reveal><span className="eyebrow"><i /> Our little ritual</span><h2>我们把“耐心”，也算进服务里。</h2><p className="ritual-copy">没有流水线式的催促，只有熟悉之后的默契。我们会先认识每一位小客人，再为它定制今天的洗护节奏。</p><div className="ritual-list"><div className="ritual-row">先认识，再开始 <span>01</span></div><div className="ritual-row">根据状态调整流程 <span>02</span></div><div className="ritual-row">带着好心情回家 <span>03</span></div></div></Reveal><Reveal className="ritual-visual"><div className="ritual-visual-inner"><div className="quote">“洗完之后，它比我还想下次再来。”<small>— 豆包的妈妈，MOMO 客户</small></div></div></Reveal></div></section>;
}

export function PricingSection() {
  const cards: Array<{ label: string; title: string; price: string; items: string[]; tone: string }> = [
    { label: 'SMALL FRIEND', title: '小型犬 / 猫咪', price: '¥188', items: ['全套基础洗护', '面部与脚底修剪', '香氛护毛浴'], tone: '' },
    { label: 'MOST LOVED', title: '中型犬全套', price: '¥268', items: ['全套精致洗护', '低敏深层护理', '造型修剪与拍照'], tone: 'featured' },
    { label: 'BIG FRIEND', title: '大型犬全套', price: '¥388', items: ['全套基础洗护', '分区细致吹干', '专属洗护建议'], tone: '' },
  ];
  
  return <section id="pricing"><div className="wrap"><div className="section-head"><Reveal><span className="eyebrow"><i /> Simple pricing</span><h2>价格清楚，<br />把心思留给陪伴。</h2></Reveal><Reveal delay={55}><p className="section-intro">根据体型、毛量与实际情况报价。第一次来店，我们会先和你确认，不让任何一项服务成为意外。</p></Reveal></div><div className="pricing-grid">{cards.map(({ label, title, price, items, tone }, index) => <Reveal key={label} delay={index * 55} className={`price-card ${tone}`}><span className="service-no">{label}</span><h3>{title}</h3><p className="price">{price} <small>起</small></p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><BookingTrigger className="card-button">选择这个</BookingTrigger></Reveal>)}</div></div></section>;
}

export function LocationSection() {
  return <section id="location" className="location"><div className="wrap"><div className="section-head"><Reveal><span className="eyebrow"><i /> Find us here</span><h2>在太平小区，<br />找到我们的门面。</h2></Reveal><Reveal delay={55}><p className="section-intro">给毛孩子洗香香之前，先来这里和我们打个招呼。地图为门店附近的手绘示意，具体导航请以实时地图为准。</p></Reveal></div><div className="location-grid"><Reveal className="location-card"><span className="service-no">MOMO / STORE FRONT</span><h3>蒸湘区太平小区<br />老89栋 1号门面</h3><p className="location-address"><strong>门店地址</strong><br />湖南省衡阳市蒸湘区太平小区老89栋1号门面</p><div className="location-tip">从太平小区主路进入后，留意老89栋一带，MOMO 就在沿街门面里等你。</div><a className="map-link" href="https://uri.amap.com/search?keyword=%E6%B9%96%E5%8D%97%E7%9C%81%E8%A1%A1%E9%98%B3%E5%B8%82%E8%92%B8%E6%B9%98%E5%8C%BA%E5%A4%AA%E5%B9%B3%E5%B0%8F%E5%8C%BA%E8%80%8189%E6%A0%8B1%E5%8F%B7%E9%97%A8%E9%9D%A2" target="_blank" rel="noreferrer">打开地图导航 <span>↗</span></a></Reveal><Reveal className="map-frame"><div className="map-canvas" aria-label="MOMO 门店附近位置示意图"><span className="map-road main" /><span className="map-road cross" /><span className="map-block b1" /><span className="map-block b2" /><span className="map-block b3" /><span className="map-block b4" /><span className="map-label l1">太平小区</span><span className="map-label l2">主路 · 生活圈</span><span className="map-label l3">老89栋</span><span className="map-label l4">蒸湘区</span><div className="map-pin"><div className="map-pin-bubble"><span className="pin-face">🐾</span>MOMO 在这里</div><span className="map-pin-dot" /></div><div className="map-legend"><i /> 门店位置 · 太平小区老89栋</div></div></Reveal></div></div></section>;
}

export function Footer() {
  return <footer id="book" className="footer"><div className="wrap"><div className="footer-top"><Reveal><span className="eyebrow"><i /> Come say hi</span><h2>给它一个<br />好心情的下午。</h2></Reveal><BookingTrigger className="button">立即预约 <span className="arrow">↗</span></BookingTrigger></div><div className="footer-bottom"><span>© 2026 MOMO GROOMING STUDIO</span><span>湖南 · 衡阳蒸湘区 / 每日 10:00—20:00</span></div></div></footer>;
}
