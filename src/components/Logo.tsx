import logoSVG from '../assets/logo.svg'

type LogoSize = 'small' | 'default' | 'large'

type LogoProps = {
  className?: string
  size?: LogoSize
}

const sizes: Record<LogoSize, string> = {
  small: 'h-6 w-6',
  default: 'h-8 w-8',
  large: 'h-10 w-10',
}

const Logo = ({ className = '', size = 'default' }: LogoProps): JSX.Element => (
  <img
    src={logoSVG}
    alt="GodCod Logo"
    className={`${sizes[size]} ${className}`.trim()}
  />
)

export default Logo
