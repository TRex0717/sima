import { Button, Card, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface PresentationCardProps {
  title: string;
  body: string;
  button: string; // Button text
  goTo: string; // Navigate target
}

export const PresentationCard = (props: PresentationCardProps) => {
    const { title, body, button, goTo } = props;
    const navigate = useNavigate()
    
  return (
      <Card.Root size="lg" width={"2/6"} shadow={"sm"} p={4} m={8}>
        <Card.Header>
          <Heading size="2xl">{title}</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">{body}</Card.Body>
        <Button mt={4} width={200} display={"flex"} alignSelf={"center"} onClick={()=>(navigate(goTo))}>
          {button}
        </Button>
      </Card.Root>
  );
};
