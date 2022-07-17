import {Outlet, Link} from 'react-router-dom';
import { Fragment, useContext  } from 'react';
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "./navigation.style.scss";

import { UserContext } from '../../contexts/user.context';

import {signOutUser} from "../../utils/firebase/firebase.utils";


const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser);

    const signOutHandler = async () => {
      const res = await signOutUser();
      // if res is undefined or empty after signout then reset the context currentValue to null by setting currentUser
      if (!res) return setCurrentUser(null);
    }
    return (
      <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <Crown className='logo'/>
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                Shop
            </Link>
            
           {currentUser ? (
            <span className='nav-link' onClick={signOutHandler }>Log Out</span>
           ) : (
            <Link className='nav-link' to='/auth'>
                Log In
            </Link>
           )
           }
        </div>
      </div>
      <Outlet />
      </Fragment>
    )
  }

export default Navigation