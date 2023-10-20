import './Header.scss';
import '../Buttons/buttonSmall';
import ButtonSmall from '../Buttons/buttonSmall';

function Header() {
  return(
    <div className='header'>
        <div className='logo'>Logo</div>
        <div className='navbar'>
            <ul className='navbar-items'>
                <li>ACCUEIL</li>
                <li>CONTACT</li>
                <li><ButtonSmall /></li>
            </ul>
        </div>
    </div>
  );
}

export default Header;