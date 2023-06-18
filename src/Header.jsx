import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <Link to='/'>your habits</Link> || 
        <Link to='/habits'>create habit</Link> ||
        <Link to='/archive'>archive</Link>
    </nav>
  )
}

export default Header