import React from 'react'
import {Container, Role, User, Avatar} from './styles'

interface IUser{
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<IUser> = ({
    nickname,
    isBot
}) => {
    return(
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
                <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return(
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Roberto Filho" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Kauê Victor" isBot/>
        </Container>
    )
}

export default UserList