import React from 'react';
import { Container, Wrapper, Logo, FakeWrapper } from './styles';

export default class extends React.Component {
    render(){
        return (
            <Container>
                <Wrapper>
                    <FakeWrapper />
    
                    <Logo>
                        <img src={''} alt={'Thumb'} />
                    </Logo>
    
                </Wrapper>
            </Container>
        );
    }
}
