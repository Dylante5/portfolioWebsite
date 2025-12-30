import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
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
                <Icon className="h-6 w-6 text-gray-900 dark:text-slate-400" />
                <span className="brand-text self-center whitespace-nowrap text-xl font-semibold">Dylan Everett</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <Button
                    color="gray"
                    size="xs"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === "light" ? (
                        <BsLightbulb className="" />
                    ) : (
                        <BsLightbulbFill className="" />
                    )}
                </Button>
                <NavbarLink href="/">Home</NavbarLink>
                <NavbarLink href="/about">About</NavbarLink>
                <NavbarLink href="/games">Games</NavbarLink>
                <NavbarLink href="/templates">Templates</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
