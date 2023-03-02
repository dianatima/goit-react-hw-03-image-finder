import styled from '@emotion/styled';


export const AppWrap = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 16px;
padding-bottom: 24px;
`

export const IdleStatus = styled.h2`
    text-align: center;
`

export const ImagesErrorViewWrap = styled.div`
    text-align: center;

    & img {
        margin: 0 auto;
    }
`
export const NoImageWrap = styled.img`
    margin: 0 auto;
`