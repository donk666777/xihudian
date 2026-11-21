import { BookingTrigger } from './booking-trigger';

export function Navbar() {
  return (
    <header>
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top"><span className="brand-mark">M</span> MOMO / 宠物洗护所</a>
        <div className="nav-links"><a href="#services">洗护服务</a><a href="#space">店内环境</a><a href="#ritual">我们的方式</a><a href="#pricing">价格</a></div>
        <BookingTrigger className="nav-cta">预约洗护 <span className="mini-arrow">↗</span></BookingTrigger>
      </nav>
    </header>
  );
}
