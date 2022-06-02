/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/alt-text */
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { AccountBalanceWallet, BookmarksOutlined, Menu, Search } from "@material-ui/icons";
import Cookies from "js-cookie";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from './../../../constants/api';
import "./style.scss";

interface SubCategories {
    title: string
    id: string
}

interface Category {
    title: string
    id: string
    subCategories: SubCategories
}

interface State {
    dataCategory: []
}

interface UserCookie {
    id?: string
    name?: string
    role?: string
    type?: string
    avatar?: string
    imageUrl?: string
    account?: string
}

export default function HeaderLayout() {
    const [isMenuBar, setIsMenuBar] = useState<Boolean>(false);
    const [isMenuBarUser, setIsMenuBarUser] = useState<Boolean>(false);
    const [state, setState] = useState<State>({
        dataCategory: []
    })
    const getUserName: UserCookie = Cookies.get("user") ? JSON.parse(Cookies.get("user") || '') : '';
    console.log(getUserName)

    async function getDataList() {
        try {
            const response = await api.get('/category')
            const { categories: dataCategory } = response.data
            setState((prev) => ({ ...prev, dataCategory }))
        } catch (err) {
        }
    }

    useEffect(() => {
        getDataList()
    }, [])

    const logOut = () => {
        console.log('logout')
        Cookies.remove('accessToken')
        Cookies.remove('user')
        window.location.href = '/'
    }

    return (
        <Fragment>
            <div className="Header_topBanner__1xD-2" >
                <a className="billboard" title="Mastercard Billboard" rel="noopener noreferrer nofollow" href="#">
                    <picture><img width="970" height="250" src="https://img.vietcetera.com/uploads/images/28-jan-2022/comp-2001-vietcetera-billboard-pc-970x250px-1-1643340628982.jpg" alt="Mastercard Billboard" /></picture>
                </a>
            </div>
            <div className="header header-visible">
                <div className="wrap-content header-content py-4">
                    <div className="style_vct-grid-row__1XFKE style_vct-grid-row-start__BaCVh style_vct-grid-row-top__13cYD">
                        <div className="style_vct-grid-col-12__2GuaZ header-social flex justify-end mb-8">
                            <ul className="header-social-list flex items-center justify-between">
                                <li className="header-social-item__visit-store">
                                    <a rel="noopener noreferrer" href="https://store.vietcetera.com/?utm_source=homepage&amp;utm_medium=button&amp;utm_campaign=vietcetera-store" target="_blank">Ghé Vietcetera Store</a>
                                </li>
                                <li className="header-social-item nonanimating-btn">
                                    <a className="icon header-social-item_icon">
                                        <img src="https://vietcetera.com/images/icon_16px/Facebook.svg" alt="Facebook link" width="16" height="16" />
                                    </a>
                                </li>
                                <li className="header-social-item nonanimating-btn">
                                    <a className="icon header-social-item_icon">
                                        <img src="https://vietcetera.com/images/icon_16px/Instagram.svg" alt="instagram link" width="16" height="16" />
                                    </a>
                                </li>
                                <li className="header-social-item nonanimating-btn">
                                    <a className="icon header-social-item_icon">
                                        <img src="https://vietcetera.com/images/social-icons/linkedin.svg" alt="linkedin link" width="16" height="16" />
                                    </a>
                                </li>
                                <li className="header-social-item nonanimating-btn header-social-item__youtuben">
                                    <a className="icon header-social-item_icon">
                                        <img src="https://vietcetera.com/images/icon_16px/Youtube.svg" alt="youtube link" width="16" height="16" />
                                    </a>
                                </li>
                                <li className="header-social-item nonanimating-btn">
                                    <a className="change-language" title="Change language" rel="noopener noreferrer">
                                        <button type="button" className="styles_btn__1CpdT styles_btn-medium__1pU1Q styles_btn--default__eE97u undefined">
                                            <div className="styles_content-medium__1DXcn undefined flex items-center">International Edition</div>
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="style_vct-grid-row__1XFKE style_vct-grid-row-start__BaCVh style_vct-grid-row-top__13cYD">
                        <div className="style_vct-grid-col-6__1SOOD">
                            <a className="tracking-vietcetera-logo-homepage" href="/">
                                <img className="tracking-vietcetera-logo-homepage" width="325" height="56" src="https://vietcetera.com/images/header/logo-text.svg" alt="Vietcetera" />
                            </a>
                        </div>
                        <div className="style_vct-grid-col-6__1SOOD">
                            <div className="header-action">
                                <div className="flex header-action-items">
                                    <div className="flex items-center header-action-items__nologin">
                                        <div className="header-action-search tracking-search-icon-article-detail">
                                            <a className="tracking-search-icon-article-detail" href="#">
                                                {/* <svg className="svg-icon undefined tracking-search-icon-article-detail" width="24" height="24" viewBox="0 0 24 24">
                                                    <use xlinkHref="#iconSearch"></use>
                                                    <Search className="#iconSearch"/>
                                                </svg> */}
                                                <Search className="svg-icon undefined tracking-search-icon-article-detail" style={{color: "gray"}} />
                                            </a>
                                        </div>
                                        {getUserName ? (<Fragment>
                                            <div className="styles_authBookmark__is0pH">
                                                <BookmarksOutlined fill='#757575' width='24' height='24' />
                                            </div>
                                            <div className="menu-user_sectionUser__1Q2os">
                                                <span className="menu-user_avatar__HX8s3" onClick={() => setIsMenuBarUser(!isMenuBarUser)}>
                                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0px' }}>
                                                        <div style={{ display: 'block', boxSizing: 'border-box', maxWidth: '100%' }}>
                                                            <img
                                                                src={getUserName.avatar}
                                                                style={{ maxWidth: '100%', display: 'block', }} />
                                                        </div>
                                                    </div>
                                                </span>
                                                {isMenuBarUser && <ul className="menu-user_container__2lJ2g menu-user_containerActive__3lZ9M">
                                                    <li className='menu-user_profileItem__2au9q'>
                                                        <div className='menu-user_profileWrapper__23mIT'>
                                                            <span className='menu-user_avatarInBox__dzltK'>
                                                                <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0px' }}>
                                                                    <img
                                                                        src={getUserName.avatar}
                                                                        style={{ display: 'block', inset: '0px', boxSizing: 'border-box', maxHeight: '100%', minHeight: '100%', maxWidth: '100%', minWidth: '100%', margin: '0px', padding: '0px' }} />
                                                                </div>
                                                            </span>
                                                            <div className="menu-user_profile__3-Kt7">
                                                                <h5 className="menu-user_profileName__s57GF">
                                                                    {getUserName.name}
                                                                </h5>
                                                                <span className="menu-user_profileLevel__pcFEQ">
                                                                    {getUserName.role}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-user_menuItem__3mnbP">
                                                        <Link to='#'>
                                                            <UserOutlined
                                                                style={{ marginRight: '16px', fontSize: '18px' }}
                                                                className="svg-icon undefined undefined" />
                                                            Thông tin tài khoản
                                                        </Link>
                                                    </li>
                                                    <li className="menu-user_menuItem__3mnbP">
                                                        <Link to='#'>
                                                            <AccountBalanceWallet
                                                                style={{ marginRight: '12px' }}
                                                                className="svg-icon undefined undefined" />
                                                            Series
                                                        </Link>
                                                    </li>
                                                    <li className="menu-user_menuItem__3mnbP">
                                                        <Link to='#' onClick={() => logOut()}>
                                                            <LogoutOutlined
                                                                style={{ marginRight: '16px', fontSize: '18px' }}
                                                                className="svg-icon undefined undefined" />
                                                            Đăng Xuất
                                                        </Link>
                                                    </li>
                                                </ul>}
                                            </div>
                                        </Fragment>) :
                                            (<Fragment>
                                                <div className="flex mx-4 tracking-btn-register-article-detail">
                                                    <button type="button" className="styles_btn__1CpdT styles_btn-medium__1pU1Q styles_btn--text__3i2gd styles_color--primary__2hQHw tracking-btn-register-article-detail" aria-label="Register">
                                                        <div className="styles_content-medium__1DXcn tracking-btn-register-article-detail flex items-center">
                                                            Đăng ký
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="header-action-item mr-4 tracking-btn-login-article-detail">
                                                    <Link to='/login'>
                                                        <button type="button" className="styles_btn__1CpdT styles_btn-medium__1pU1Q styles_btn--default__eE97u styles_color--primary__2hQHw tracking-btn-login-article-detail" aria-label="Login">
                                                            <div className="styles_content-medium__1DXcn tracking-btn-login-article-detail flex items-center">
                                                                Đăng nhập
                                                            </div>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </Fragment>)}

                                        <div className="header-action-item">
                                            <div className="styles_block-menu-header__2q3Xf tracking-dropdown-navbar">
                                                <button aria-label="menu dropdown" className="styles_btn-handle-menu__3oCcx tracking-dropdown-navbar" onClick={() => setIsMenuBar(!isMenuBar)}>
                                                    <svg className="svg-icon undefined tracking-dropdown-navbar" width="26" height="26" viewBox="0 0 24 24">
                                                        <use xlinkHref="#iconMenuHeader"></use>
                                                        <Menu />
                                                    </svg>
                                                </button>
                                                <ul className={isMenuBar ? " styles_menu-header__Y8j9L styles_active-menu__1jZqM" : "styles_menu-header__Y8j9L"}>
                                                    <li className="item-menu  tracking-navbar-item">
                                                        <a title="Kinh Doanh" href="/vn/chuyen-muc/kinh-doanh" className="tracking-navbar-item">
                                                            Kinh Doanh
                                                        </a>
                                                    </li>
                                                    <li className="item-menu  tracking-navbar-item">
                                                        <a title="Cuộc Sống" href="/vn/chuyen-muc/cuoc-song" className="tracking-navbar-item">
                                                            Cuộc Sống
                                                        </a>
                                                    </li>
                                                    <li className="item-menu  tracking-navbar-item">
                                                        <a title="Sáng Tạo" href="/vn/chuyen-muc/sang-tao" className="tracking-navbar-item">
                                                            Sáng Tạo
                                                        </a>
                                                    </li>
                                                    <li className="item-menu  tracking-navbar-item">
                                                        <a title="Thời Trang" href="/vn/chuyen-muc/thoi-trang" className="tracking-navbar-item">
                                                            Thời Trang
                                                        </a>
                                                    </li>
                                                    <li className="item-menu  tracking-navbar-item">
                                                        <a title="Thưởng Thức" href="/vn/chuyen-muc/thuong-thuc" className="tracking-navbar-item">
                                                            Thưởng Thức
                                                        </a>
                                                    </li>
                                                    <li className="item-menu  tracking-navbar-item">
                                                        <a title="Series" href="/vn/bo-suu-tap" className="tracking-navbar-item">
                                                            Series
                                                        </a>
                                                    </li>
                                                    <li className="item-menu  tracking-navbar-item">
                                                        <a title="Video" href="/vn/video" className="tracking-navbar-item">
                                                            Video
                                                        </a>
                                                    </li>
                                                    <li className="item-menu">
                                                        <a className="inline-block cursor-pointer duration-300" href="/vn/podcast" title="podcast">
                                                            <span className="flex items-center h-[inherit] w-[inherit]">
                                                                Podcast
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="item-menu tracking-navbar-item">
                                                        <a title="Vietcetera App" href="https://apps.apple.com/app/vietcetera/id1564202068" target="_blank" rel="noopener noreferrer" className="tracking-click-mobile-app-button-menu-burger">
                                                            Vietcetera App
                                                        </a>
                                                    </li>
                                                    <li className="item-menu  tracking-navbar-item">
                                                        <a title="Tất cả chủ đề" href="/vn/tat-ca-chu-de" className="tracking-navbar-item">
                                                            Tất cả chủ đề
                                                        </a>
                                                    </li>
                                                    <li className="item-menu styles_new__32m7C tracking-navbar-item">
                                                        <a title="Cởi Mở đi Unitour" href="/vn/bo-suu-tap/coi-mo-di-unitour" className="tracking-navbar-item">
                                                            Cởi Mở đi Unitour
                                                        </a>
                                                        <span className="styles_status__1HN7Y">
                                                            <sup>Mới</sup>
                                                        </span>
                                                    </li>
                                                    <li className="item-menu  tracking-navbar-item">
                                                        <a title="Ậm Ừ Talk" href="/vn/bo-suu-tap/am-u-talk" className="tracking-navbar-item">
                                                            Ậm Ừ Talk
                                                        </a>
                                                    </li>
                                                    <li className="item-menu tracking-navbar-item">
                                                        <a title="Vietcetera Store" href="https://store.vietcetera.com/?utm_source=homepage&amp;utm_medium=hamburger&amp;utm_campaign=vietcetera-store" target="_blank" rel="noopener noreferrer" className="tracking-navbar-item">
                                                            Vietcetera Store
                                                        </a>
                                                    </li>
                                                    <li className="item-menu tracking-navbar-item">
                                                        <a title="Cơ hội nghề nghiệp" href="https://jobs.lever.co/vietcetera" target="_blank" rel="noopener noreferrer" className="tracking-navbar-item">
                                                            Cơ hội nghề nghiệp
                                                        </a>
                                                    </li>
                                                    <li className="item-menu  tracking-navbar-item"><a title="Hợp tác truyền thông" href="/vn/media-kit" className="tracking-navbar-item">
                                                        Hợp tác truyền thông
                                                    </a>
                                                    </li>
                                                    <li className="item-menu tracking-navbar-item">
                                                        <div className="tracking-navbar-item">
                                                            Về Vietcetera
                                                        </div>
                                                        <ul className="styles_sub-menu-header__1elB5 ">
                                                            <li className="styles_item-sub-menu__3YZ1j tracking-navbar-item">
                                                                <a title="Về Vietcetera" href="/vn/ve-chung-toi" className="tracking-navbar-item">Về Vietcetera</a>
                                                            </li>
                                                            <li className="styles_item-sub-menu__3YZ1j tracking-navbar-item">
                                                                <a title="Liên hệ" href="/vn/lien-he" className="tracking-navbar-item">
                                                                    Liên hệ
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-bar_navbarContainer__mp9sv ">
                    {state.dataCategory.map((item: Category, key: number) => <a className="nav-bar_navbarItem__JEO2e tracking-home_nav_bar" title={item.title} href="#" key={item.id}>
                        {item.title}
                    </a>)}
                </div>
            </div>
        </Fragment>
    );
}

