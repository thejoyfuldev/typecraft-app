import { Input, InputGroup } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'

export default function SearchDocsInput() {
  return (
    <InputGroup startElement={<LuSearch />}>
      <Input placeholder="Search docs" size="sm" />
    </InputGroup>
  )
}
