import React from 'react';
import { useParams } from 'react-router-dom';
import './profail.css'
function Profile() {
	const { id } = useParams();

	const [users, setUser] = React.useState({});

	React.useEffect(() => {
		fetch('https://reqres.in/api/users/' + id)
			.then((response) => response.json())
			.then((data) => setUser(data?.data));
	}, [id]);

	return <section className='profale'>       
	    
		<h1>{users.first_name + users.last_name}</h1>
        <img className="profale__img" 
                src={users.avatar} 
                width={100}
                height={100}
                alt={"George avatar"} />
	</section>;
}

export default Profile;
