import { Html, Text, Link } from '@react-email/components';

interface EmailBodyProps {
  name: string;
  email: string;
  message: string;
}

export const EmailBody = (props: EmailBodyProps) => {
  return (
    <Html lang={'en'}>
      <Text>{props.message}</Text>
      <Text style={{ fontStyle: 'italic' }}>
        Message sent by <Link href={`mailto:${props.email}`}>{props.name}</Link>
      </Text>
    </Html>
  );
};
