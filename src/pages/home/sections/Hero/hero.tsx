import { Button, Container, Grid2, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
      <>
        <StyledHero>
            <Container>
                <Grid2 container spacing={2}>
                    <Grid2 size={4}>
                        <StyledImg src={Avatar}/>
                    </Grid2>

                    <Grid2 size={8}>
                        <Typography color="primary" variant="h2">Kauê Bertaze</Typography>
                        <Typography color="primary" variant="h3">I'm a Software Engineer</Typography>
                        <Button><DownloadIcon/>Download CV</Button>
                        <Button><MailOutlineIcon/>Contact Me</Button>
                    </Grid2>
                </Grid2>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  