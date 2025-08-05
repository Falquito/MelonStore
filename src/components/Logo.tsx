interface LogoProps {
  className?: string;
}

const Logo = ({ className = "logo" }: LogoProps) => {
  return (
    <a href="#" className={className}>
      <img src="images/melon_store.jpg" alt="Icono de Melon Store" className="logo-icon" />
      Melon Store
    </a>
  );
};

export default Logo;
