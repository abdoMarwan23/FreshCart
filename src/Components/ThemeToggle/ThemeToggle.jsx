import { useState, useEffect } from 'react';


const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState(theme);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
        setActiveTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };


    const isActive = (buttonTheme) => {
        return buttonTheme === activeTheme;
    };

    const getButtonClasses = (buttonTheme) => {
        const baseClasses = 'w-10 h-10 rounded-full flex justify-center items-center transition-transform duration-200';
        const activeClasses = theme === buttonTheme ? ' transform scale-125' : '';

        return `${baseClasses} ${activeClasses}`;
    };



    return (
        <>
            <>
                <div className="flex h-full">
                    <div className="flex items-center justify-center ">
                        <button style={{ color: 'var(--text-color-title)' }} onClick={toggleMenu} className="focus:outline-none z-10 fixed top-96 left-1 text-3xl "><i className="fa-solid fa-gear" /></button>
                    </div>
                
                    {menuOpen && (
                        <aside className={`w-64 bg-gray-100 z-10 fixed top-40 left-9  rounded-2xl transition-transform duration-300 ease-in-out dark:bg-gray-800 p-4 ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                            <h2 className="text-lg font-bold mb-4 text-gray-700 dark:text-white">Theme Selector</h2>
                            <ul className=' gap-y-3 grid grid-cols-3'>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('light'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-light)', color: 'var(--color-theme-light)',
                                            border: isActive('light') ? `3px solid var(--color-theme-light)` : 'none'
                                        }}
                                        className={getButtonClasses('light')}>
                                        <i className="fa-solid fa-circle "></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('dark') }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-dark)',
                                            color: 'var(--color-theme-dark)',
                                            border: isActive('dark') ? `3px solid var(--color-theme-dark)` : 'none'
                                        }}
                                        className={getButtonClasses('dark')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('dark-green'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-dark-green)',
                                            color: 'var(--color-theme-dark-green)',
                                            border: isActive('dark-green') ? `3px solid var(--color-theme-dark-green)` : 'none'
                                        }}
                                        className={getButtonClasses('dark-green')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('ocean-breeze'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-ocean-breeze)',
                                            color: 'var(--color-theme-ocean-breeze)',
                                            border: isActive('ocean-breeze') ? `3px solid var(--color-theme-ocean-breeze)` : 'none'
                                        }}
                                        className={getButtonClasses('ocean-breeze')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('autumn-glow'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-autumn-glow)',
                                            color: 'var(--color-theme-autumn-glow)',
                                            border: isActive('autumn-glow') ? `3px solid var(--color-theme-autumn-glow)` : 'none'
                                        }}
                                        className={getButtonClasses('autumn-glow')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('forest-canopy'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-forest-canopy)',
                                            color: 'var(--color-theme-forest-canopy)',
                                            border: isActive('forest-canopy') ? `3px solid var(--color-theme-forest-canopy)` : 'none'
                                        }}
                                        className={getButtonClasses('forest-canopy')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('midnight-city'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-midnight-city)',
                                            color: 'var(--color-theme-midnight-city)',
                                            border: isActive('midnight-city') ? `3px solid var(--color-theme-midnight-city)` : 'none'
                                        }}
                                        className={getButtonClasses('midnight-city')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('midnight-blue'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-midnight-blue)',
                                            color: 'var(--color-theme-midnight-blue)',
                                            border: isActive('midnight-blue') ? `3px solid var(--color-theme-midnight-blue)` : 'none'
                                        }}
                                        className={getButtonClasses('midnight-blue')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                {/* <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('crimson-velvet'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-crimson-velvet)',
                                            color: 'var(--color-theme-crimson-velvet)',
                                            border: isActive('crimson-velvet') ? `3px solid var(--color-theme-crimson-velvet)` : 'none'
                                        }}
                                        className={getButtonClasses('crimson-velvet')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li> */}
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('emerald-noir'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-emerald-noir)',
                                            color: 'var(--color-theme-emerald-noir)',
                                            border: isActive('emerald-noir') ? `3px solid var(--color-theme-emerald-noir)` : 'none'
                                        }}
                                        className={getButtonClasses('emerald-noir')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('lavender-mist'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-lavender-mist)',
                                            color: 'var(--color-theme-lavender-mist)',
                                            border: isActive('lavender-mist') ? `3px solid var(--color-theme-lavender-mist)` : 'none'
                                        }}
                                        className={getButtonClasses('lavender-mist')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('crimson-dawn-light'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-crimson-dawn-light)',
                                            color: 'var(--color-theme-crimson-dawn-light)',
                                            border: isActive('crimson-dawn-light') ? `3px solid var(--color-theme-crimson-dawn-light)` : 'none'
                                        }}
                                        className={getButtonClasses('crimson-dawn-light')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('oceanic-pearl-light'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-oceanic-pearl-light)',
                                            color: 'var(--color-theme-oceanic-pearl-light)',
                                            border: isActive('oceanic-pearl-light') ? `3px solid var(--color-theme-oceanic-pearl-light)` : 'none'
                                        }}
                                        className={getButtonClasses('oceanic-pearl-light')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('ivory-midnight-light'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-ivory-midnight-light)',
                                            color: 'var(--color-theme-ivory-midnight-light)',
                                            bborder: isActive('ivory-midnight-light') ? `3px solid var(--color-theme-ivory-midnight-light)` : 'none'
                                        }}
                                        className={getButtonClasses('ivory-midnight-light')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button
                                        onClick={() => { setMenuOpen(false); toggleTheme('velvet-mirage-light'); }}
                                        style={{
                                            backgroundImage: 'var(--background-theme-btn-velvet-mirage-light)',
                                            color: 'var(--color-theme-velvet-mirage-light)',
                                            border: isActive('velvet-mirage-light') ? `3px solid var(--color-theme-velvet-mirage-light)` : 'none'
                                        }}
                                        className={getButtonClasses('velvet-mirage-light')}>
                                        <i className="fa-solid fa-circle"></i>
                                    </button>
                                </li>
                            </ul>
                        </aside>
                    )}
                </div>

            </>
        </>
        
        
        
    );
};

export default ThemeToggle;
