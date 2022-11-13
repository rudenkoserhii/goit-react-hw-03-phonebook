import styled from 'styled-components';

export const ContactListStyled = styled.ul`

    margin-top: ${p => p.theme.space[5]}px;
`;

export const ContactItemStyled = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;


    margin-top: ${p => p.theme.space[3]}px;
`;



export const Name = styled.p`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};

    width: ${p => p.theme.space[7]}px;

`;

export const Number = styled.p`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};

    width: ${p => p.theme.space[7]}px;
`;
