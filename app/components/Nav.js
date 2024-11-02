'use client';

import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from '@nextui-org/navbar';
import Link from 'next/link';

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = React.useState(false);

    return (
        <Navbar className="flex justify-center items-center mx-auto w-full max-w-7xl px-4 bg-gray-200">
            <div className="flex items-center justify-between w-full max-w-6xl">
                <NavbarBrand>
                    <Link href="/" className="text-xl font-bold text-gray-800">
                        Heron Robotics 27621
                    </Link>
                </NavbarBrand>
                <div className="flex-grow" />
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className="sm:hidden"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                />
                <NavbarContent className="hidden sm:flex space-x-3 text-gray-800">
                    <NavbarItem>
                        <Link href="/about">About</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/team">Team</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/sponsors">Sponsors</Link>
                    </NavbarItem>
                </NavbarContent>
            </div>
            <NavbarMenu
                isOpen={isMenuOpen}
                onClose={() => setMenuOpen(false)}
                className="sm:hidden flex flex-col items-center justify-center space-y-6 bg-gray-200 fixed inset-0 z-50"
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-4 right-4 text-gray-800 text-3xl"
                    aria-label="Close menu"
                >
                    &times;
                </button>
                <NavbarMenuItem>
                    <Link href="/about" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-800">
                        About
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/team" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-800">
                        Team
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/sponsors" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-800">
                        Sponsors
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default Nav;
