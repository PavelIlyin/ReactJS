import React from 'react';
import TextField from '@material-ui/core/TextField';
import { changeAge, changeName, changeShowName } from '../Store/Action/profile';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { profileSelector } from '../Selectors/profile';
import ProfileImg from '../img/profile.png'


const Profile = (props) => {

    const [profileName, setProfileName] = React.useState('');
    const [profileAge, setProfileAge] = React.useState('');


    const dispatch = useDispatch()
    let { name, age, showName } = useSelector(profileSelector)
    useEffect(() => {
        setProfileName(name)
        setProfileAge(age)
    }, [])

    const handleNameSubmit = (event) => {
        event.preventDefault()
        dispatch(changeName(profileName))
        dispatch(changeAge(profileAge))
    }

    const handleProfileName = (event) => {
        setProfileName(event.target.value)
    }
    const handleProfileAge = (event) => {
        setProfileAge(event.target.value)
    }
    const handleShowName = () => {
        dispatch(changeShowName(showName))
    }

    return (
        <div className="App-home">
            <h2 className="profile__heading">PROFILE</h2>
            <div >
                <img className="profile__img" src={ProfileImg} alt="profileImg" />
            </div>
            <div>
                <p className="profile__data">Your data: <span className="profile__span">"{name}, {age} years old"</span></p>
                <p className="profile__data">This name will be seen by your contacts.</p>
            </div>
            <p className="profile__data">Edit:</p>
            <form onSubmit={handleNameSubmit}>
                <TextField
                    autoFocus
                    required
                    label="Name"
                    value={profileName}
                    onChange={handleProfileName}
                />
                <p className="profile__data">Edit:</p>
                <TextField
                    autoFocus
                    required
                    label="Age"
                    value={profileAge}
                    onChange={handleProfileAge}
                />
                <div><button type="submit" className="form__button">SAVE</button></div>
            </form>
            <div className="profile__checkbox">
                <input
                    type="checkbox"
                    checked={showName}
                    value={showName}
                    onChange={handleShowName}
                />
                <span className="profile__data">{showName ? <span>I agree to the terms of use</span> : <span className="profile__data">You agree to the terms of use?</span>}</span>
                {showName ? <p className="profile__data">Excellent! You can continue!</p> : <p className="profile__data">read the terms of use!</p>}
            </div>
        </div>
    )
}

export default Profile;