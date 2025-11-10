import { Box, Text } from "@chakra-ui/react"

export const FooterComponent = () => {
    return (
        <Box bottom={0} display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            px={3}
            boxShadow="0px 2px 8px rgba(0, 0, 0, 0.15)"
            borderBottom="1px solid #ddd"
            bgColor="background.paper"
            // zIndex={10}
            w="100%"
            h={20}
            >
            <Text>Aqui va el footer jeje</Text>
        </Box>
    )
}