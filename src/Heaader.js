import './css/header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="flex justify-between align-center">
                    <div className="logo">
                        <h1 className="header-logo">M. Fund</h1>
                    </div>
                    <nav className="header-nav">
                        <ul className="header-menu align-center flex">
                            <li className="header-menu-item">
                                <a href="javascript:void(0)" className="header-menu-link">ალექსი</a>
                            </li>
                            <li className="header-menu-item">
                                <a href="javascript:void(0)" className="header-menu-link">ვახტანგ</a>
                            </li>
                            <li className="header-menu-item">
                                <a href="javascript:void(0)" className="header-menu-link">ფონდი</a>
                            </li>
                            <li className="header-menu-item">
                                <a href="javascript:void(0)" className="header-menu-link">პროექტები</a>
                            </li>
                            <li className="header-menu-item">
                                <a href="javascript:void(0)" className="header-menu-link">კონტაქტი</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-lang">
                        <a href="javascript:void(0)">ENG</a>
                        /
                        <a href="javascript:void(0)">GEO</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
