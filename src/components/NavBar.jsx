import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <nav>
        <header>

        
        <div id="HeaderPropert">
            <a href="./index.html">
              <img src="./image/logo.svg" alt=" " />
            </a>

            <div className="contactAboutPrice">
            <a href="./pricing.html" id="pricing">
                Pricing
              </a>
              <a href="./aboutus.html" id="product">
                Product
              </a>
              <a href="./pricing.html" id="aboutus">
                About Us
              </a>
              <a href="./aboutus.html" id="careers">
                Careers
              </a>
              <a href="./contact.html" id="community">
                Community
              </a>
            </div>
            <button className="btn1">Get Started</button>
          </div>
          
        </header>
      </nav>
    </>
  );
};

export default NavBar;