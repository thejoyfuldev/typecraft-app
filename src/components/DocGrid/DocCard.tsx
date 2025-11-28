import { Doc } from '@/convex/_generated/dataModel'
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardRoot,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react'
import { formatDistance } from 'date-fns'
import NextLink from 'next/link'

export default function DocCard({ doc }: { doc: Doc<'docs'> }) {
  const docType = doc.deletedAt ? 'trash' : 'active'
  const docName = doc.name ? doc.name : 'Untitled doc'

  return (
    <LinkBox>
      <CardRoot
        size="sm"
        w="222px"
        minH="182px"
        _hover={{
          cursor: 'pointer',
          shadow: 'lg',
        }}
      >
        <CardHeader>
          <HStack align="center" justify="space-between">
            <Heading size="md" lineClamp={1}>
              {docType === 'active' ? (
                <LinkOverlay asChild>
                  <NextLink href={`/docs/${doc._id}`}>
                    {docName}
                  </NextLink>
                </LinkOverlay>
              ) : (
                docName
              )}
            </Heading>
          </HStack>
        </CardHeader>
        <CardBody>
          <Text color="fg.muted" textStyle="sm" lineClamp="2">
            {doc.description}
          </Text>
        </CardBody>
        <CardFooter>
          <Text color="fg.muted" textStyle="xs">
            Edited{' '}
            {formatDistance(new Date(doc.updatedAt), new Date())} ago
          </Text>
        </CardFooter>
      </CardRoot>
    </LinkBox>
  )
}
