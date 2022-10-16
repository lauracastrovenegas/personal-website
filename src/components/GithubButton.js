import githublogo from '../images/githublogo.png'
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

const Logo = styled.div`
    height: 2rem;

    img {
        height: 100%;
        object-fit: contain;
    }
`

const Label = styled.div`
    margin: auto 1rem;
`

const Content = styled.div`
    margin: 0rem auto;
    display: flex;
`

const GithubButton = ({ link }) => {
    return (
        <ButtonWrapper link={link} light={true}>
            <Content>
                <Logo><img src={githublogo} /></Logo>
                <Label>Github Repo</Label>
            </Content>
        </ButtonWrapper>
    )
}

export default GithubButton;