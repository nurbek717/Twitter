import './home.css';
import strong from '../../Assets/img/yulduz.svg';
import galetya from '../../Assets/img/galerya.svg';
import gif from '../../Assets/img/gif.svg';
import stats from '../../Assets/img/stats.svg';
import smaile from '../../Assets/img/smile.svg';
import scheduls from '../../Assets/img/schedule.svg';

import btn from '../../Assets/img/uchtanuqta.svg';

import comment from '../../Assets/img/comment.svg';
import retwet from '../../Assets/img/retweet.svg';
import like from '../../Assets/img/like.svg';
import shere from '../../Assets/img/share.svg';
import salom from '../../Assets/img/salom.svg';

import Loading from '../../Assets/img/Loading.svg';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
	const [user, setUser] = React.useState([]);
  const [isLodding, setLodding] = React.useState(true)
	React.useEffect(() => {
		(async () => {
			const response = await fetch('https://reqres.in/api/users');
			const data = await response.json();

			if (data?.data?.length > 0) {
				setUser([...data.data]);
        setLodding(false)
			}
		})();
	}, []);

	console.log(user);

	return (
		<main className='main'>
      
			<span class='stoyka login-stoyka'></span>
			<section className='home'>
				<h2 className='heading__home'>Home</h2>
				<img src={strong} alt='' height={30} width={30} />
			</section>

			<section className='happing'>
				<div className='bag__hepping'>
					<div className='bk-color bg-img'></div>
					<h4 className='hepping__heading'>What’s happening</h4>
				</div>

				<nav className='hepping__nav'>
					<ul className='happing__lest'>
						<li className='happing__item'>
							<button className='happing__btn-icon' type='submit'>
								<img
									className='salom'
									src={galetya}
									alt=''
									width={23}
									height={23}
								/>{' '}
							</button>
						</li>
						<li className='happing__item'>
							<button className='happing__btn-icon' type='submit'>
								<img src={gif} alt='' width={24} height={24} />{' '}
							</button>
						</li>
						<li className='happing__item'>
							<button className='happing__btn-icon' type='submit'>
								<img src={stats} alt='' width={24} height={24} />{' '}
							</button>
						</li>
						<li className='happing__item'>
							<button className='happing__btn-icon' type='submit'>
								<img src={smaile} alt='' width={24} height={24} />{' '}
							</button>
						</li>
						<li className='happing__item'>
							<button className='happing__btn-icon' type='submit'>
								<img src={scheduls} alt='' width={24} height={24} />{' '}
							</button>
						</li>
					</ul>

					<button className='twitter__btn tweet'>Tweet</button>
				</nav>
			</section>

      {
        isLodding && <img className='loading__img' src={Loading} alt="" width={100} height={100} />
      }
			<section className='comment'>
				<ul className='comment__lest'>
					{user.length > 0 &&
						user.map((user) => (
							<li key={user.id} className='comment__item'>
                
							  <NavLink className='comment__item' to={'/Profile/' + user.id }>
                <img className="comment__img" 
                src={user.avatar} 
                width={60}
                height={60}
                alt={"George avatar"} />

								<div className='comment__bag'>
									<h4 className='comment__heading'>{user.first_name + user.last_name}</h4>
									<a className='comment__link' href={'mailto' + user.email}>
								  {user.email}
									</a>
									<p className='comment__text'>
										Twitterdagi ayol-erkak qarama-qarshiliginglardan
										o'zinglar zerikmadinglarmi?
									</p>
                

									<ul className='comment__bag__lest'>
										<li className='comment__bag__item'>
											<button className='comment__bag__btn'>
												<img
													src={comment}
													alt=''
													width={20}
													height={20}
												/>
											</button>
										</li>
										<li className='comment__bag__item'>
											<button className='comment__bag__btn'>
												{' '}
												<img
													src={retwet}
													alt=''
													width={20}
													height={20}
												/>
											</button>
										</li>
										<li className='comment__bag__item'>
											<button className='comment__bag__btn'>
												<img
													src={like}
													alt=''
													width={20}
													height={20}
												/>
											</button>
										</li>
										<li className='comment__bag__item'>
											<button className='comment__bag__btn'>
												<img
													src={shere}
													alt=''
													width={20}
													height={20}
												/>
											</button>
										</li>
										<li className='comment__bag__item'>
											<button className='comment__bag__btn'>
												<img
													src={salom}
													alt=''
													width={20}
													height={20}
												/>
											</button>
										</li>
									</ul>
								</div>
								<button className='btn__icon comment__btn-icon'>
									<img src={btn} alt='' height={20} width={20} />
								</button>

                </NavLink>
							</li>
						))}
				</ul>
				<hr />
			</section>
		</main>
	);
}
export default Home;
