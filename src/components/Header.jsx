import logoDeliveroo from "../assets/img/logo-teal.svg"

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logoDeliveroo} alt="logo_deliveroo" />
      </div>
    </header>
  );
};

export default Header;
