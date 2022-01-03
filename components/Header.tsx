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
                            <button className="search-header__button _icon-search-icon"></button>
                            <input autoComplete="off" type="text" name="form[]" placeholder="Поиск" className="search-header__input"></input>
                        </form>
                    </div>
                    <div className="body-header__actions actions-header">
                        <a href="" className="actions-header_location _icon-location">Москва</a>
                        <div className="actions-header__phones phones-header">
                            <div className="phones-header__items">
                                <div className="phones-header__item">
                                    <a href="tel:88007774967" className="phones-header__phone">8-800-777-49-67</a>
                                    <button type="button" className="phones-header__arrow _icon-arrow-down"></button>
                                    <ul className="phones-header__list">
                                        <li><a href="tel:88007774968" className="phones-header__phone">8-800-777-49-68</a></li>
                                        <li><a href="tel:88007774969" className="phones-header__phone">8-800-777-49-69</a></li>
                                        <li><a href="tel:88007774970" className="phones-header__phone">8-800-777-49-70</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button className="phones-header__callback">Заказать звонок</button>
                        </div>
                        <a href="" className="actions-header__favorite _icon-favorite"></a>
                        <div className="actions-header__cart cart-header">
                            <div className="cart-header__icon _icon-cart">icon<span>0</span></div>
                            <div className="cart-header__body">
                                <div className="cart-header__summ">0 р.</div>
                                <a href=""  className="cart-header__link">Оформить заказ</a>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
            <div className="header__catalog catalog-header"></div>
        </header>
    )
}