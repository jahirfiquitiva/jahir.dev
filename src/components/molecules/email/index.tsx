import { Html, Heading, Text } from '@react-email/components';

interface EmailBodyProps {
  name: string;
  email: string;
  message: string;
}

export const EmailBody = (props: EmailBodyProps) => {
  return (
    <Html lang={'en'}>
      <Heading as={'h1'}>New Form Submission</Heading>
      <Text>You just submitted a form. Here are the details:</Text>
      <Text>Name: {props.name}</Text>
      <Text>Email: {props.email}</Text>
      <Text>Message: {props.message}</Text>
    </Html>
  );
};
