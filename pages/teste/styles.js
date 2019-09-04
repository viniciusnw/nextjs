import styled from 'styled-components';

export const Container = styled.header`
    max-width: 100%;
    height: ${({ theme }) => theme.header.regular};
    border-bottom: 1px solid ${({ theme }) => theme.color.primary};

    @media (min-width: ${({ theme }) => theme.container.medium}) {
        height: ${({ theme }) => theme.header.large};
    }
`;

export const Wrapper = styled.div`
    max-width: ${({ theme }) => theme.container.large};
    padding: ${({ theme }) => `0 ${theme.spacing.regular}`};
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${({ theme }) => theme.container.small}) {
        padding: ${({ theme }) => `0 ${theme.spacing.regular}`};
    }
`;

export const Logo = styled.div`
    flex-basis: 50%;

    @media (min-width: ${({ theme }) => theme.container.medium}) {
        flex-basis: inherit;
    }
`;

export const FakeWrapper = styled.div`
    display: block;
    flex-basis: 15%;

    @media (min-width: ${({ theme }) => theme.container.medium}) {
        display: none;
    }
`;
