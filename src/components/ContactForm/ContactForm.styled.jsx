import styled from 'styled-components';

export const ContactFormStyled = styled.form`

    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: ${p => p.theme.space[3]}px;

    margin-bottom: ${p => p.theme.space[5]}px;

`;

export const Button = styled.button`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.xs};


    width: ${p => p.theme.space[7]}px;
    box-shadow: ${p => p.theme.shadows.first};
    border-radius: ${p => p.theme.radii.normal};
    border: ${p => p.theme.borders.none};


    background-color: ${p => p.theme.colors.lightblue};
    color: ${p => p.theme.colors.black};


`;

export const Label = styled.label`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.xs};


    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;

    width: ${p => p.theme.space[7]}px;

`;

export const Input = styled.input`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};


`;
