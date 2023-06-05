import React, { useEffect, useState } from 'react'
// 1EhdpNrcWa82NircOkrFhw==AxHMekkEK1kCsoOSc
import axios from 'axios'
import styled from 'styled-components';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { hover } from '@testing-library/user-event/dist/hover';
import { Title } from '@mui/icons-material';

const Quotes = () => {
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    const [category, setCategory] = useState('love');
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'mRFIkpAikxBJb8fLGz4l2i4gA8nelBwU4QUlcNnV'
            }
        })
            .then(response => {
                console.log(response.data[0])
                setQuote(response.data[0].quote);
                setAuthor(response.data[0].author)
                setLoading(false);
                setShareQuote(response.data[0].quote)

            })
            .catch(error => console.error(error));
    }, [category])


    const [shareQuote, setShareQuote] = useState(null);
    const url = " ";
    const title = "Example Website Title";
    const Main = styled.div`
        background-color: #026d64;
        width: 700px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px;
        gap: 10px;
        @media screen and (max-width:700px) {
            padding: 80px 20px;
            width: 100%;
            min-height: 100vh;
            max-height: fit-content;
        }
    `
    const Title = styled.h1`
        font-size : 2rem;
        background-color: black;
        color: white;
        padding: 0 10px;
    `
    const Buttons = styled.div`

        /* background-color: black; */
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-evenly; */
        align-items: center;
        gap: 10px;
       
    `
    const Button = styled.button`
        width: 150px;
        padding: 10px 20px;
        font-size: 1rem;
        background-color: #fff;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        &:hover{
            background-color: #01443f;
            color: white;
        }
        @media screen and (max-width:700px) {
           font-size: 1rem;
           padding: 3px 5px;
           width: unset;
           border-radius: 5px;
           font-weight: bold;
        }
    `
    const Text = styled.h1`
        text-align: center;
        color: white;
        font-size: 1.3rem;
        @media screen and (max-width:700px) {
           font-size: 1.2rem;
           
        }
        
    `
    const QuoteBox = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: auto;
        margin-top: 50px;
        background-color: #028177;
        padding: 10px 15px;
        border-radius: 20px;
        box-shadow: 5px 5px 10px black;

    `
    const Author = styled.h2`
        color: #dbdbdb;
        font-style: italic;
        font-size: 1rem;
    `
    const Loading = styled.h1`
        text-align: center;
        font-size: 2rem;
        color:white;

    `
    const ShareButtons = styled.div`
        display: flex;
        gap:20px;
        color: white;
        justify-self: end;
    `

    const ShareBtn = styled.div`
        cursor: pointer;
        &:hover{
            color: #74f0e7;
        }
        @media screen and (max-width:700px) {
           font-size: 1rem;   
        }
    `
    return (
        <Main>
            <Title>Quote Generator</Title>
            <Text>Choose Category:</Text>
            <Buttons>
                <Button onClick={() => { setCategory('alone'); setLoading(true) }}>Alone</Button>
                <Button onClick={() => { setCategory('anger'); setLoading(true) }}>Anger</Button>
                <Button onClick={() => { setCategory('amazing'); setLoading(true) }}>Amazing</Button>
                <Button onClick={() => { setCategory('birthday'); setLoading(true) }}>Birthday</Button>
                <Button onClick={() => { setCategory('courage'); setLoading(true) }}>Courage</Button>
                <Button onClick={() => { setCategory('dreams'); setLoading(true) }}>Dreams</Button>
                <Button onClick={() => { setCategory('faith'); setLoading(true) }}>Faith</Button>
                <Button onClick={() => { setCategory('god'); setLoading(true) }}>God</Button>
                <Button onClick={() => { setCategory('life'); setLoading(true) }}>Life</Button>
                <Button onClick={() => { setCategory('money'); setLoading(true) }}>Money</Button>
                <Button onClick={() => { setCategory('success'); setLoading(true) }}>Success</Button>
            </Buttons>
            {loading == true ? <Loading>Loading your quote...</Loading> :
                <QuoteBox>
                    <Text>{quote}</Text>
                    <Author>{author}</Author>
            <ShareButtons>

                <ShareBtn>
                    <FacebookShareButton url={url} quote={shareQuote}>
                        <FacebookIcon style={{ fontSize: "2rem" }} />
                    </FacebookShareButton>
                </ShareBtn>
                <ShareBtn>

                    <TwitterShareButton url={url} title={shareQuote}>
                        <TwitterIcon style={{ fontSize: "2rem" }} />
                    </TwitterShareButton>
                </ShareBtn>
                <ShareBtn>
                    <WhatsappShareButton url={url} title={shareQuote}>

                        <WhatsAppIcon style={{ fontSize: "2rem" }} />
                    </WhatsappShareButton>
                </ShareBtn>
            </ShareButtons>
            </QuoteBox>
            }
        
        </Main>
    )
}

export default Quotes
