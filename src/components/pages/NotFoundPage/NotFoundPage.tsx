import React from 'react';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

interface Props {
  text?: string;
}
const NotFoundPage: React.FC<Props> = ({
  text = 'Oh, nooo! The page was not found!',
}) => {
  return (
    <Container fixed>
      <Typography>{text}</Typography>
      <Link href='/' passHref>
        <Typography variant='h6'>Go to the Home Page</Typography>
      </Link>
    </Container>
  );
};

export default NotFoundPage;
