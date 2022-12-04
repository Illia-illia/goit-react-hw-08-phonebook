import { Box, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <Box paddingTop="20px">
      <Helmet>
        <title>Save Contacts</title>
      </Helmet>
      <Text margin="15px" fontWeight="bold">
        Save your contacts
      </Text>
    </Box>
  );
}
