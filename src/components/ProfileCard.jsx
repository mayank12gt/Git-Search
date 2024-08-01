import {Avatar,Badge,ButtonGroup, Stack, Heading,Text,Card,CardBody,CardFooter,CardHeader,Button, Divider, HStack, Spacer, Flex } from '@chakra-ui/react'
import React from 'react'

function ProfileCard(props) {
    
const {name, login, public_repos, following, followers,avatar_url,html_url} = props.profile
console.log('changedcard')

  return (
    <Card
    cursor={'pointer'}
    onClick={()=>{
      window.open(html_url)
    }}
    w={'80%'}
    maxW={'700px'}
    align={'center'}
    m={6}
    p={2}
    variant={'outline'} 
    boxShadow={'sm'}>
  
    <Avatar
    mt={2}
        rounded={true}
      src={avatar_url}
      alt='Green double couch with wooden legs'
      size={'xl'}
    />
    <Stack mt='6' spacing='1' alignItems={'center'}>
      <Heading size='md' >{name}</Heading>
      <Text>
        {login}
      </Text>
      
    </Stack>
    <Divider mt={4}/>
    <CardFooter  w={'100%'}  
      >
        <Flex justify={'center'} gap={4} w={'100%'} flexWrap={'wrap'} >
    <Badge  textAlign={'center'} colorScheme='green' fontSize={'sm'} fontWeight={'bold'}
             p={3} borderRadius={'md'}  >
                {`${public_repos} repos`}
            </Badge>
            <Badge  textAlign={'center'} colorScheme='green' fontSize={'sm'} fontWeight={'bold'}
             p={3} borderRadius={'md'}  >
                {`${followers} followers`}
            </Badge>
            <Badge  textAlign={'center'} colorScheme='green' fontSize={'sm'} fontWeight={'bold'}
             p={3} borderRadius={'md'}  >
                {`${following} following`}
            </Badge>
            </Flex>
            
  </CardFooter>
  
</Card>
  )
}

export default ProfileCard