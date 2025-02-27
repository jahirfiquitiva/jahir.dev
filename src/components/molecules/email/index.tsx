import { Html, Text, Link, Markdown } from '@react-email/components';

interface EmailBodyProps {
  name: string;
  email: string;
  message: string;
  score?: number; // Spam Score
}

export const EmailBody = (props: EmailBodyProps) => {
  return (
    <Html lang={'en'}>
      <Markdown>{props.message}</Markdown>
      <Text style={{ fontStyle: 'italic' }}>
        Message sent by <Link href={`mailto:${props.email}`}>{props.name}</Link>
      </Text>
      <Text style={{ fontStyle: 'italic', fontSize: 10 }}>
        Score: {props.score?.toFixed(2) || 'N/A'}
      </Text>
    </Html>
  );
};
