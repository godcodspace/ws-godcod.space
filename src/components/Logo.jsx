const Logo = ({ className = "", size = "default" }) => {
  const sizes = {
    small: "h-8",
    default: "h-10",
    large: "h-12"
  }

  return (
    <svg 
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 200 100" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* G Letter */}
      <path d="M50 20C30 20 15 35 15 50C15 65 30 80 50 80C60 80 68 76 73 70V60H50V50H85V50C85 35 70 20 50 20ZM50 30C64 30 75 41 75 50H60V70C58 72 54 70 50 70C36 70 25 59 25 50C25 41 36 30 50 30Z"/>
      
      {/* C Letter */}
      <path d="M135 20C115 20 100 35 100 50C100 65 115 80 135 80C145 80 153 76 158 70L150 64C147 67 142 70 135 70C121 70 110 59 110 50C110 41 121 30 135 30C142 30 147 33 150 36L158 30C153 24 145 20 135 20Z"/>
    </svg>
  )
}

export default Logo
