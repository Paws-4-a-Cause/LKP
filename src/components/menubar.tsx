
import React from "react";
import {
    Menubar,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import "./menubar.css";
import profilePic from "../assets/LKPLogo.png";

// Import cats data from JSON file
import cats from "../data/cats.json";

const MenuBar = () => {
    return (
        <Menubar className="menubar">
            <div className="heading-logo">
                <img src={profilePic} alt="Logo" className="logo-img" />
                <h1 className="heading"></h1>
            </div>
            <div className="menu-items">
                <MenubarMenu>
                    <MenubarTrigger className="text">
                        <Link to="/">About LKP</Link>
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="text">
                        <Link to="/cat-gallery">Our Cats</Link>
                    </MenubarTrigger>

                    <MenubarContent>
                        {/* Dynamically create menu items for each cat */}
                        {cats.map((cat) => (
                            <MenubarItem key={cat.slug}>
                                <Link to={`/cats/${cat.slug}`}>{cat.name}</Link>
                            </MenubarItem>
                        ))}
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="text">Support Us</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <Link to="/donate">Donate</Link>
                        </MenubarItem>
                        <MenubarItem>
                            <Link to="/in-kind-donations">In-Kind Donations</Link>
                        </MenubarItem>
                        <MenubarItem>
                            <Link to="/events">Events</Link>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="text">
                        <Link to="/cat-therapy">Cat Therapy</Link>
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="text">Join Us</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <Link to="/volunteer-opportunities">Volunteer Opportunities</Link>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="text">
                        <Link to="/for-cat-rescuers">For Cat Rescuers</Link>
                    </MenubarTrigger>
                </MenubarMenu>
            </div>
        </Menubar>
    );
};

export default MenuBar;
