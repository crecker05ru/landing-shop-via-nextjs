export default function Header() {
    return (
        <header className="header">
            <div className="header__top top-header">
                <div className="top-header__container">
                    <div className="top-header__menu menu">

                        <nav className="menu__body">
                            <ul className="menu__list">
                                <li className="menu__item"><a href="" className="menu__link">О нас</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Оплата и доставка</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Новости</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                    <a href="" className="top-header__user _icon-avatar">Личный кабинет</a>
                    <button type="button" className="icon-menu"><span></span></button>
                </div>
            </div>

            <div className="header__body body-header">
                <div className="body-header__container">
                    <a href="" className="body-header__logo"></a>
                    <div className="body-header__search">
                        <form action="#" className="search-header">
                            <button className="search-header__button"></button>
                            <input autoComplete="off" type="text" name="form[]" placeholder="" className="search-header__input"></input>
                        </form>
                    </div>
                </div>
                <div className="body-header__actions actions-header"></div>
            </div>
            <div className="header__catalog catalog-header"></div>
        </header>
    )
}