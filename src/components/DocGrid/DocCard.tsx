import ConfirmDeleteDocDialog from '@/components/ConfirmDeleteDocDialog'
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu'
import { Tooltip } from '@/components/ui/tooltip'
import { Doc } from '@/convex/_generated/dataModel'
import { useDocActions } from '@/hooks/use-doc-actions.hook'
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardRoot,
  Heading,
  HStack,
  IconButton,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react'
import { formatDistance } from 'date-fns'
import NextLink from 'next/link'
import { useId, useState } from 'react'
import { LuEllipsisVertical } from 'react-icons/lu'

export default function DocCard({ doc }: { doc: Doc<'docs'> }) {
  const triggerId = useId()
  const { handleMoveToTrash, handleUndo, handlePermanentlyDelete } =
    useDocActions(doc)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const docType = doc.deletedAt ? 'trash' : 'active'
  const docName = doc.name ? doc.name : 'Untitled doc'

  const handleBeforeDelete = () => {
    setShowConfirmDialog(true)
  }

  const handleConfirm = () => {
    handlePermanentlyDelete()
    setShowConfirmDialog(false)
  }

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

            <MenuRoot ids={{ trigger: triggerId }}>
              <Tooltip
                ids={{ trigger: triggerId }}
                content="More Actions"
              >
                <MenuTrigger asChild>
                  <IconButton
                    size="xs"
                    variant="ghost"
                    colorPalette="gray"
                    aria-label="More actions"
                  >
                    <LuEllipsisVertical />
                  </IconButton>
                </MenuTrigger>
              </Tooltip>
              <MenuContent>
                {docType === 'active' ? (
                  <MenuItem
                    value="move"
                    onClick={() => handleMoveToTrash()}
                  >
                    Move to Trash
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem
                      value="restore"
                      onClick={() => handleUndo()}
                    >
                      Restore
                    </MenuItem>

                    <MenuItem
                      value="delete"
                      onClick={() => handleBeforeDelete()}
                      color="fg.error"
                      _hover={{ bg: 'bg.error', color: 'fg.error' }}
                    >
                      Delete
                    </MenuItem>
                  </>
                )}
              </MenuContent>
            </MenuRoot>

            <ConfirmDeleteDocDialog
              docName={docName}
              open={showConfirmDialog}
              onOpenChange={({ open }) => setShowConfirmDialog(open)}
              onConfirm={() => handleConfirm()}
            />
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
