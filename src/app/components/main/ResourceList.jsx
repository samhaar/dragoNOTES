import React from 'react';

import { Container, Flex, Heading, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Resource from './resource/Resource';

export default function ResourceList({ title, filter, ...props }) {
  const resources = useSelector(
    (state) => state.resources.resourcesByTag || []
  );

  return (
    <Container maxW="lg">
      <Flex {...props} direction="column" m={5}>
        <Heading size="md" color="gray.500" mb={2}>
          {title}
        </Heading>
        <VStack flex="1" spacing={5}>
          {resources.filter(filter || (() => true)).map((resource) => (
            <Resource key={resource.id} {...{ resource }} />
          ))}
        </VStack>
      </Flex>
    </Container>
  );
}
