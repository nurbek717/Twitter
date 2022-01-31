import './header.css';

import { NavLink } from 'react-router-dom';

// img
import twitter from '../../Assets/img/twitter.svg';
import home from '../../Assets/img/Vector.svg';
import Explore from '../../Assets/img/Explore.svg';
import Notification from '../../Assets/img/Notifications.svg';
import Mesages from '../../Assets/img/Messages.svg';
import Bookmarck from '../../Assets/img/Bookmarks.svg';
import Lists from '../../Assets/img/Lists.svg';
import Profil from '../../Assets/img/profile.svg';
import More from '../../Assets/img/more.svg';

import btn from '../../Assets/img/uchtanuqta.svg';

function Header() {
	return (
		<>
			<header className='header'>
				<span className='stoyka'></span>
				<img
					className='twitter'
					src={twitter}
					alt=''
					width={40}
					height={33}
				/>
				<nav className='nav'>
					<ul className='list'>
						<li className='item'>
							<NavLink className={({ isActive }) => 'nav_link ' + (isActive ? 'active' : '')} to='/'>
								<img src={home} alt='' height={22} width={22} />
							<span>	Home</span>
							</NavLink>
						</li>
						<li className='item'>
							<NavLink className={({ isActive }) => 'nav_link ' + (isActive ? 'active' : '')} to='/login'>
								<img src={Explore} alt='' height={22} width={22} />
								<span>Explore</span>
							</NavLink>
						</li>
						<li className='item'>
							<NavLink className={({ isActive }) => 'nav_link ' + (isActive ? 'active' : '')} to='/Notifications'>
              <img src={Notification} alt='' height={22} width={22} />
							<span>Notifications</span>{' '}
              </NavLink>
						</li>
						<li className='item'>
						<NavLink className={({isActive }) => 'nav_link ' + (isActive ? 'active' : '')} to='/Messages'>
            <img src={Mesages} alt='' height={22} width={22} />
						<span>Messages</span>{' '}
            </NavLink>
						</li>
						<li className='item'>
						<NavLink className={({isActive}) => 'nav_link ' + (isActive ? 'active' : '')} to='/Bookmarks' >
            <img src={Bookmarck} alt='' height={22} width={22} />
						<span>Bookmarks</span>{' '}
            </NavLink>
						</li>
						<li className='item'>
							<NavLink className={({isActive}) => 'nav_link ' + (isActive ? 'active' : '')} to='/Lists'>
              <img src={Lists} alt='' height={22} width={22} />
							<span>Lists</span>{' '}
              </NavLink>
						</li>
						<li className='item'>
							<NavLink className={({isActive}) => 'nav_link ' + (isActive ? 'active' : '')} to='/Profile'>
              <img src={Profil} alt='' height={22} width={22} />
							<span>Profile</span>{' '}
              </NavLink>
						</li>
						<li className='item'>
							<NavLink className={({isActive}) => 'nav_link ' + (isActive ? 'active' : '')} to='/More'>
							<img src={More} alt='' height={22} width={22} />
							<span>More</span>{' '}
							</NavLink>
						</li>
					</ul>
				</nav>

				<button className='twitter__btn'>Tweet</button>

				<div className='box'>
					<div className='bk-color'></div>
					<p className='text__bobur'>
						<span className='bobur'>Bobur</span> <br /> @bobur_mavlonov
					</p>
					<button className='btn__icon'>
						<img src={btn} alt='' height={20} width={20} />
					</button>
				</div>
			</header>
		</>
	);
}

export default Header;
