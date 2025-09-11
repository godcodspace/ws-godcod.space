import logoSVG from '../assets/logo.svg'

const Logo = ({ className = "", size = "default" }) => {
  const sizes = {
    small: "h-6 w-6",
    default: "h-8 w-8",
    large: "h-10 w-10"
  }

  return (
    <img 
      src={logoSVG}
      alt="GodCod Logo"
      className={`${sizes[size]} ${className}`}
    />
  )
}

export default Logo
