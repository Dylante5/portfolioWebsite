
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function AppNavbar() {
    return (
        <Navbar fluid>
            <NavbarBrand href="https://flowbite-react.com">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Dylan E Photo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dylan Everett</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <NavbarLink href="#">
                    About
                </NavbarLink>
                <NavbarLink href="#">Games</NavbarLink>
                <NavbarLink href="#">Storefront</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
