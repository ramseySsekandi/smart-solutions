import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  
  interface ContactEmailProps {
    userName: string;
    message: string;
  }
  
  
  export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({ userName, message }) => {
    return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>
          The sales intelligence platform that helps you uncover qualified leads.
        </Preview>
        <Container style={container}>
          <Text style={paragraph}>Hi this is {userName},</Text>
          <Text style={paragraph}>
            I'm reaching out to smart solutions from your website.
            {message}
          </Text>
          {/* <Section style={btnContainer}>
            <Button style={button} href="https://getkoala.com">
              Get started
            </Button>
          </Section> */}
          <Text style={paragraph}>
            Best,
            <br />
            The Koala team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            470 Kampala Uganda #1148, Smart Solutions, CA 94080
          </Text>
        </Container>
      </Body>
    </Html>
  );}
  
  export default ContactEmail;
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
  };
  
  const logo = {
    margin: '0 auto',
  };
  
  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
  };
  
  const btnContainer = {
    textAlign: 'center' as const,
  };
  
  const button = {
    backgroundColor: '#5F51E8',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    padding: '12px',
  };
  
  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
  };
  