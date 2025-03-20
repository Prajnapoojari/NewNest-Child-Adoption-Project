import logo from "../Images/Logo.jpg";

const Header = () => {
  return (
    <nav className="headerSection">
      <div className="Left">
        <img src={logo} alt="Logo" className="logo" />
        <h4>NewNest</h4>
      </div>

      <div className="Center">
        <div className="Divisions">
          <ul>

          <li>
            <a href="/HomePage">Home</a>
          </li>

            <li>
              <a href="/AdmissionPage">Adoption Process</a>
            </li>

            <li>Child Care And Protection</li>

            <li>
              <a href="/AboutUs">AboutUs</a>
            </li>

            <li>
              <a href="/LoginPage">SignUp</a>
            </li>

          </ul>
        </div>
      </div>

      <div className="Right">
        <button className="Donate">
        <a href="/Donate">DONATE</a>
        </button>
      </div>
    </nav>
  );
};

export default Header;