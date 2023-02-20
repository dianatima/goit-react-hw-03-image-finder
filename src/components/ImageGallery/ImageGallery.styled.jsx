import styled from '@emotion/styled';


export const ImageGalleryWrap = styled.ul`
display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
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