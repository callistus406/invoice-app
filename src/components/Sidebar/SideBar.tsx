import React, { FunctionComponent } from 'react'
import "./SideBar.css"
import Logo from "../../assets/logo.svg"
import MoonIcon from "../../assets/icon-moon.svg"
import profileImage from "../../assets/image-avatar.jpg"
const  SideBar:FunctionComponent = ()=> {
    // const SearchIconWrapper = styled('div')(({ theme }) => ({
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }));
  return (
    <div className='side__Container' >
<div className='sidebar__container_top'>
    <span>
        <img src={Logo} alt="icon"  />
    </span>
<div>

</div>
</div>
<div className='sidebar__container_middle'>

<div>
    < img src={MoonIcon} alt="toggle"  />
</div>
</div>

<div className='sidebar__container_bottom'>
<div className="img__container">

        <img src={profileImage} alt="profile" width="40px" height="40px" style={{borderRadius:"50%"}}  />
  
</div>
</div>
    </div>
  )
}

export default SideBar