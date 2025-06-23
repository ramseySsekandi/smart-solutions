import * as React from 'react';
import { Html, Container, Text, Button } from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Html>
    <Container style={{ background: '#f9fafb', padding: '32px', borderRadius: '8px', maxWidth: 600, margin: 'auto' }}>
      <Text style={{ fontSize: '20px', fontWeight: 'bold', color: '#166534', marginBottom: '16px' }}>
        New Contact Form Submission
      </Text>
      <Text><strong>Name:</strong> {name}</Text>
      <Text><strong>Email:</strong> {email}</Text>
      <Text><strong>Message:</strong></Text>
      <Text style={{ background: '#fff', padding: '16px', borderRadius: '6px', color: '#222', fontSize: '16px' }}>{message}</Text>
      <Button
        href={`mailto:${email}`}
        style={{ background: '#16a34a', color: '#fff', padding: '12px 24px', borderRadius: '6px', marginTop: '24px', textDecoration: 'none', fontWeight: 'bold' }}
      >
        Reply to {name}
      </Button>
    </Container>
  </Html>
);

export default ContactEmail;
