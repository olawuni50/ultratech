import React from 'react'
import { Button, Container } from '../NavBars/globalStyles'
import {Link} from "react-router-dom"
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, 
Subtitle, ImgWrapper, Img} from "./InfoSection.element"


const InfoSection = ({primary, lightBg, imgStart, lightTopLine, lightTextDesc, 
buttonLabel, description,headLine, lightText, topLine, img, alt, start}) => {
    return (
        <>
          <InfoSec lightBg={lightBg}>
              <Container>
              <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to="/sign-up">
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                    <ImgWrapper start={start}>
                    <Img src={img} alt={alt}/>    
                    </ImgWrapper>    
                    </InfoColumn> 
                </InfoRow>
              </Container>
             
              </InfoSec>  
        </>
    )
}

export default InfoSection  
