import {Badge, Card,Divider, Text, CardBody, Flex, Heading, HStack, Spacer, Link } from '@chakra-ui/react'
import React from 'react'
import { Si3M } from './../../node_modules/react-icons/si/index.esm';

function Repo(props) {
    
    const {name,description,language, stargazers_count, watchers_count,forks_count,html_url} = props.repo
    console.log(name)
  return (
    <Flex  mt={2} w={'80%'}
    maxW={'700px'}>
    
       
       <Card  cursor={'pointer'} onClick={()=>{
        window.open(html_url);
       }} variant={'outline'} boxShadow={'sm'} rounded={'md'} w={'100%'} maxW={'100%'} p={4} mb={1}>
 <Heading size={'md'}>{name}</Heading>
 <Divider mt={2} />
 <Text fontWeight={'semibold'} mt={2}>{description}</Text>
 <Flex  columnGap={2} flexWrap={'wrap'}>
 <Badge mt={4}  w={'fit-content'} textAlign={'center'} colorScheme='green' fontSize={'sm'} fontWeight={'bold'}
             p={2} borderRadius={'md'}  >
                {`${language} `}
            </Badge>
            <Spacer/>
            <Badge mt={4}  w={'fit-content'} textAlign={'center'} colorScheme='red' fontSize={'sm'} fontWeight={'bold'}
             p={2} borderRadius={'md'}  >
                {`${stargazers_count} stars`}
            </Badge>
            <Badge mt={4}  w={'fit-content'} textAlign={'center'} colorScheme='blue' fontSize={'sm'} fontWeight={'bold'}
             p={2} borderRadius={'md'}  >
                {`${watchers_count} watchers`}
            </Badge>
            <Badge mt={4}  w={'fit-content'} textAlign={'center'} colorScheme='yellow' fontSize={'sm'} fontWeight={'bold'}
             p={2} borderRadius={'md'}  >
                {`${forks_count} forks`}
            </Badge>
            
            </Flex>
</Card>
      

    </Flex>
  )
}

export default Repo