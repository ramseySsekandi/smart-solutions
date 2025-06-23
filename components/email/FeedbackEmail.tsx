import * as React from 'react';
import { Html, Container, Text } from '@react-email/components';

interface FeedbackEmailProps {
  name: string;
  email: string;
  feedback: string;
}

export const FeedbackEmail = ({ name, email, feedback }: FeedbackEmailProps) => (
  <Html>
    <Container style={{ background: '#f9fafb', padding: '32px', borderRadius: '8px', maxWidth: 600, margin: 'auto' }}>
      <Text style={{ fontSize: '20px', fontWeight: 'bold', color: '#166534', marginBottom: '16px' }}>
        New Feedback Received
      </Text>
      <Text><strong>Name:</strong> {name}</Text>
      <Text><strong>Email:</strong> {email}</Text>
      <Text><strong>Feedback:</strong></Text>
      <Text style={{ background: '#fff', padding: '16px', borderRadius: '6px', color: '#222', fontSize: '16px' }}>{feedback}</Text>
    </Container>
  </Html>
);

export default FeedbackEmail;
