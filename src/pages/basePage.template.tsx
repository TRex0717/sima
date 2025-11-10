import { Box, Tabs } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const BasePage = () => {
    const [value, setValue] = useState<string | null>("home")
    const navigate = useNavigate()
    return (
        <Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                px={3}
                boxShadow="0px 2px 8px rgba(0, 0, 0, 0.15)"
                borderBottom="1px solid #bebebeff"
                position="sticky"
                top={0}
                bgColor="background.paper"
                zIndex={10}
            >
                <ColorModeButton />
                <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)} colorPalette="orange" variant={"subtle"}>
                    <Tabs.List>
                        <Tabs.Trigger value="home" onClick={() => {navigate("")}} >Inicio</Tabs.Trigger>
                        {/* <Tabs.Trigger value="home" onClick={() => {console.log("Home")}} _selected={{ color: "#938e8d" }}>Inicio</Tabs.Trigger> */}
                        <Tabs.Trigger value="courses" onClick={() => {navigate("cursos")}}>Cursos</Tabs.Trigger>
                        <Tabs.Trigger value="contact" onClick={() => console.log("Contacto")}>Contactanos</Tabs.Trigger>
                    </Tabs.List>
                </Tabs.Root>
            </Box>
            <Box>

                 {/* {value === "home" && <HomePage />} */}
               {/* {value === "courses" && <CoursesGeneralPage />}
                {value === "contact" && <ContactPage />} */}
            </Box>

        </Box>
    )
}