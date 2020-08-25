import React, {useRef, useEffect} from 'react'
import {Container,Messages,InputWrapper,Input,InputIcon} from './styles'
import ChannelMessage, {Mention} from '../ChannelMessage'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
    useEffect(() => {
        const div = messagesRef.current
        if(div){
            div.scrollTop = div.scrollHeight;
        }
    },[messagesRef])
    return(
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) =>(
                    <ChannelMessage
                    key={n}
                    author="Roberto Filho"
                    date="01/02/20"
                    content="Meu aniversário é em fevereiro."
                    />
                ))}
                <ChannelMessage
                author="Kauê Victor"
                date="25/08/20"
                content={
                    <>
                        <Mention>@Roberto Filho</Mention>, me carrega o LOL e CSGo
                        de novo por favor?
                    </>
                }
                hasMentions
                isBot
                />
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon/>
            </InputWrapper>
        </Container>
    )
}

export default ChannelData