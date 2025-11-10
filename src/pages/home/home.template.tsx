import { PresentationCard } from "@/components/own/presentationCard"
import { Box, Card, Heading, Text} from "@chakra-ui/react"
import { FooterComponent } from "../footer/footer.template"
// import { FooterComponent } from "../footer/footer.template"

export const HomePage = () => {
    const bodyExample = "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
    return (
        <Box display={"flex"} flexDirection={"column"} p={2}>
            <Box display={"flex"} alignSelf={"center"} >
                <Box w={600} p={1} mt={5} boxShadow={"lg"} bgColor={"#ebdd8dff"}>
                    <video
                        src="src/video/trial.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                        style={{ width: "100%", height: 300, display: "block" }}
                    />
                </Box>
            </Box>
            <Heading size={"3xl"} px={4}>Sobre nosotros...</Heading>
            <Text color={"#49454F"} fontWeight={300} p={5}>
                A dialog is a type of modal window that appears in front of app content 
                to provide critical information, or prompt for a decision to be made. A 
                dialog is a type of modal window that appears in front of app content to 
                provide critical information, or prompt for a decision to be made. 
            </Text>
            <Text color={"#49454F"}  p={5}>
                A dialog is a type of modal window that appears in front of app content 
                to provide critical information, or prompt for a decision to be made. A 
                dialog is a type of modal window that appears in front of app content to 
                provide critical information, or prompt for a decision to be made
            </Text>
            <Heading size={"3xl"} fontWeight={600} px={4} display={"flex"} alignSelf={"center"}>"Aprende con nosotros"</Heading>
            <Box display={"Flex"} flexDirection={"row"}>

            <Box width={"50%"} p={3}>
             <Card.Root size={"lg"} shadow={"sm"}>
                <Card.Header>
                    <Heading size="2xl">Misión</Heading>
                </Card.Header>
                <Card.Body color="fg.muted">
                    A dialog is a type of modal window that appears in front of app content 
                to provide critical information, or prompt for a decision to be made. A 
                dialog is a type of modal window that appears in front of app content to 
                provide critical information, or prompt for a decision to be made. 
                </Card.Body>
            </Card.Root>
            </Box>
            <Box width={"50%"} p={3}>
             <Card.Root size="lg" shadow={"sm"}>
                <Card.Header>
                    <Heading size="2xl">Valores</Heading>
                </Card.Header>
                <Card.Body color="fg.muted">
                    A dialog is a type of modal window that appears in front of app content 
                    to provide critical information, or prompt for a decision to be made. 
                dialog is a type of modal window that appears in front of app content to 
                provide critical information, or prompt for a decision to be made. 
                </Card.Body>
            </Card.Root>
            </Box>
            </Box>
            <Heading size={"2xl"} fontWeight={600} px={4}>Nuestros cursos destacados</Heading>
            <Box  p={3} display={"flex"}  justifyContent={"space-between"}>
                <PresentationCard body={bodyExample} button="Detalles" goTo="cursos" title="Curso"/>
                <PresentationCard body={bodyExample} button="Detalles" goTo="cursos" title="Curso"/>
                <PresentationCard body={bodyExample} button="Detalles" goTo="cursos" title="Curso"/>
            </Box>
        <Box>
            <FooterComponent />
        </Box>
        </Box>
    )
}