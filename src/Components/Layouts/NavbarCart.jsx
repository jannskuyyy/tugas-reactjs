import React from "react";
import Branding from "../Elements/Branding";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
const NavbarCart = () => {
  return (
    <div>
      <div className="navbar bg-base-100 fixed z-10 px-5 bg-orange-500">
        <div className="flex-1">
          <Branding />
        </div>
        <div className="flex-none gap-3">
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to="/product">Product</Link>
          </Button>
          <Button colortxt="text-orange-500" bgtxt="bg-white">
            Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarCart;
