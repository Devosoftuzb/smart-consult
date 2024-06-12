import React, { useState, useEffect, useRef } from 'react';
import '../Style/Header.css';
import Hamburger from 'hamburger-react';
import { toggleClass } from '../store/state';
import { NavLink } from 'react-router-dom';
function Header() {




    // ----------------------- modal create --------------------start

    const [isActive, setActive] = useState(false);
    const [isHovered, setHovered] = useState(false);

    const modalRef = useRef();
    const buttonRef = useRef();
    const ProfileModal = useRef()
    const ModalActive = () => {
        setActive(!isActive);
    };
    const handleMouseEnter = () => {
        setHovered(true);
    };
    const handleMouseLeave = () => {
        setHovered(false);
    };


    // ------------------------modal create----------------- end




    // ------------------------ modal profile ------------- start
    const ProfilRef = useRef()
    const [isHoverdedProfile, setHoveredProfile] = useState(false)
    const ProfileHover1 = () => {
        setHoveredProfile(true)
    }
    const ProfileHover2 = () => {
        setHoveredProfile(false)
    }
    // ------------------------modal profile ---------------end



    // ------------------------modal profile active ----------- start
    const [isProfileActive, setProfileActive] = useState(false)
    const ProfileActive = () => {
        setProfileActive(!isProfileActive)
    }
    // ------------------------modal profile active ----------- end
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isActive || isProfileActive) {
                // Check if the clicked element is not within the modals or specific elements
                if (!(modalRef.current && modalRef.current.contains(event.target)) &&
                    !(buttonRef.current && buttonRef.current.contains(event.target)) &&
                    !(ProfileModal.current && ProfileModal.current.contains(event.target)) &&
                    !(ProfilRef.current && ProfilRef.current.contains(event.target))) {
                    setActive(false);
                    setProfileActive(false); // Добавление закрытия профиля при клике вне его области
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isActive, isProfileActive]);





    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className='header-search'>
                    <div onClick={() => toggleClass('active-class')} className='Hamburger-header'>
                        <Hamburger color='#32373f' />
                    </div>
                    <label htmlFor="header-search">
                        <input id='header-search' type="text" placeholder='Искать...' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" /></svg>
                    </label>
                    <div className='header-serch-btn-wrapper'>
                        <button
                            ref={buttonRef}
                            onClick={ModalActive}
                            className='header-serch-button'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            +
                        </button>
                        <div
                            className={`header-search-button-modal ${isHovered ? 'hoverActiver' : ''}`}
                        >
                            <span>
                                Быстро создать
                            </span>
                        </div>
                        <div ref={modalRef} className={`header-search-active-modal ${isActive ? 'ModalActive' : ''}`}>
                            <nav>
                                <NavLink to="/CreateCustomers">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4" /></svg>
                                    <span>Клиент</span>
                                </NavLink>
                                <NavLink to="/CreateContracts">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4"/><path fill="currentColor" d="M419.22 188.59L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41"/></svg>
                                    <span>Контракты</span>
                                </NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='header-profile'>
                    <div
                        onClick={ProfileActive}
                        ref={ProfilRef}
                        onMouseEnter={ProfileHover1}
                        onMouseLeave={ProfileHover2}
                        className='header-acount'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6vYUb0RXepzhbzyQskZEsKRB1tWbQ_j2PFQjtDLvcCH_xEXFGK4YqwxG1S2_ljoj5RU&usqp=CAU" alt="foto" />
                    </div>
                    <div className={`header-profile-modal ${isHoverdedProfile ? 'header-profile-modal-active' : ''}`}>
                        <span>
                            Профиль
                        </span>
                    </div>
                    <div ref={ProfileModal} className={`heaedr-profile-modal-active ${isProfileActive ? 'header-profile-modal-active-start' : ''}`}>
                        <NavLink to="/Profile">
                            <span>
                                Мой профиль
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
