import React from 'react'
import {Button} from './styles'
import logo from '../../assets/rocketseat.svg'

export interface IProps{
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}
const ServerButton: React.FC<IProps> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return(
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className= {selected ? 'active' : ''}
            >
            {isHome && <img src={logo} alt="rocketseat"/>}
        </Button>
    )
}

export default ServerButton