import React from "react";
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";
import {Link} from "react-router-dom";
import "./menubar.css";
import profilePic from "../assets/LKPLogo.jpg";
<style>
@import url('https://fonts.googleapis.com/css2?family=Chewy&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>

const MenuBar = () => {
    return (
    <Menubar className = "menubar"> 
        <div className = "heading-logo">
            <img src = {profilePic} alt="Logo" className="logo-img" />
            <h1 className = "heading">Love Kuching Project</h1>
        </div>
        <div className = "menu-items">
        <MenubarMenu>
            <MenubarTrigger>
                <Link to ="/">About LKP</Link>
            </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
            <MenubarTrigger>Our Cats</MenubarTrigger>
            <MenubarContent>
            <MenubarItem>
                <Link to="/resident-cats">Resident Cats</Link>
            </MenubarItem>
            <MenubarItem>
                <Link to="/adoptable-cats">Adoptable Cats</Link>
            </MenubarItem>
            </MenubarContent>
        </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Support Us</MenubarTrigger>
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
        <MenubarTrigger>
            <Link to ="/cat-therapy">Cat Therapy</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Join Us</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link to="/volunteer-opportunities">Volunteer Opportunities</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
            <Link to ="/for-cat-rescuers">For Cat Rescuers</Link>
        </MenubarTrigger>
      </MenubarMenu>
      </div>
      
        
    </Menubar>
  )
}

export default MenuBar;