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
        <Navbar className="bg-[#5576ae] text-white w-full px-4">
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
                <NavbarBrand>
                    <Link href="/" className="text-2xl font-bold">
                        Heron Robotics 27621
                    </Link>
                </NavbarBrand>
                <div className="hidden sm:flex space-x-6">
                    <NavbarItem>
                        <Link href="/camps" className="hover:underline">
                            Camps
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/about" className="hover:underline">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/team" className="hover:underline">
                            Team
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/sponsors" className="hover:underline">
                            Sponsors
                        </Link>
                    </NavbarItem>
                </div>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className="sm:hidden text-white"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                />
            </div>
            <NavbarMenu
                isOpen={isMenuOpen}
                onClose={() => setMenuOpen(false)}
                className="sm:hidden flex flex-col items-center justify-center space-y-6 bg-black text-white fixed inset-0 z-50"
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-4 right-4 text-3xl"
                    aria-label="Close menu"
                >
                    &times;
                </button>
                <NavbarMenuItem>
                    <Link href="/camps" className="text-xl">
                        Camps
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/about" className="text-xl">
                        About
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/team" className="text-xl">
                        Team
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/sponsors" className="text-xl">
                        Sponsors
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default Nav;
