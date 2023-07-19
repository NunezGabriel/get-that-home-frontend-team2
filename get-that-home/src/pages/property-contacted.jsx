import styled from "@emotion/styled";

import ButtomOn from "../components/buttomOn";
import ButtomOff from "../components/buttonOf";
import RentalCard from "../components/rental-card";
// import FooterContent from "../components/footer";
import SeekerNavBar from "../components/navBar/seekerNavBar";


const Container = styled.div`

    display: flex;
    width: 75rem;
    height: auto;
    margin: 2rem auto;
    flex-direction: column;
`
const BoxButtons = styled.div`
    width: 100%;
    display: flex;
`

const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;

`

function PropertyContacted(){



    return(
        <>
        <SeekerNavBar/>      
        <Container> 
            <BoxButtons>
                <ButtomOff>FAVORITES</ButtomOff>
                <ButtomOn>CONTACTED</ButtomOn>
            </BoxButtons>

            <h4>4 Properties found</h4>
        <ContainerCards>
            <RentalCard/>
                  
        </ContainerCards>
        </Container>
        {/* <FooterContent/> */}
        </>
    )
}

export default PropertyContacted

// <Route path="/property-contacted" element={<PropertyContacted/>} />