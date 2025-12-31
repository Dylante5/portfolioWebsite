import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";
import useTheme from "../hooks/useTheme.tsx";
import Icon from "/public/icon.svg?react";

export default function AppNavbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

        const navItem = ({ isActive }: { isActive: boolean }) =>
          [
            "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
            isActive
              ? "text-[rgb(var(--text-color))]"
              : "text-[rgb(var(--fg))] hover:text-[rgb(var(--hover-color))]",
          ].join(" ");

    return (
        <Navbar fluid className={`fb-navbar sticky top-0 z-50 transition-all duration-300
            ${
                scrolled
                  ? "bg-[rgb(var(--card))]/80 backdrop-blur-md shadow-md dark:shadow-[0_0_12px_rgba(255,255,255,0.12)] " +
                    "dark:bg-[rgb(var(--card))]/60 dark:backdrop-blur-md"
                  : "bg-transparent shadow-none"
            }
        `}>
            <NavbarBrand href="/">
                <Icon className="h-8 w-8 text-gray-900 dark:text-slate-500" />
                <span className="brand-text self-center whitespace-nowrap text-xl font-semibold">Dylan Everett</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <Button
                    color="gray"
                    size="xs"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="active:shadow-md active:outline-none dark:active:bg-black"
                >
                    {theme === "light" ? (
                        <HiOutlineLightBulb className="h-4 w-4" />
                    ) : (
                        <HiLightBulb className="h-4 w-4" />
                    )}
                </Button>
                <NavLink to="/" end className={navItem}>Home</NavLink>
                <NavLink to="/about" className={navItem}>About</NavLink>
                <NavLink to="/games" className={navItem}>Games</NavLink>
                <NavLink to="/templates" className={navItem}>Templates</NavLink>
            </NavbarCollapse>
        </Navbar>
    );
}
