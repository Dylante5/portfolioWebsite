import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from "flowbite-react";
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
import useTheme from "../hooks/useTheme.tsx";

export default function AppNavbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Navbar fluid>
            <NavbarBrand>
                <img src="../../public/figma.svg" className="mr-3 h-6 sm:h-9" alt="Dylan E Photo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dylan Everett</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className="flex justify-center align-center">
                <Button
                    color="gray"
                    size="xs"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === "light" ? (
                        <BsLightbulb className="h-4 w-4" />
                    ) : (
                        <BsLightbulbFill className="h-4 w-4" />
                    )}
                </Button>
                <NavbarLink href="/" active>Home</NavbarLink>
                <NavbarLink href="/about" active>About</NavbarLink>
                <NavbarLink href="/games" active>Games</NavbarLink>
                <NavbarLink href="/storefront" active>Storefront</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
