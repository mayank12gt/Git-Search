import { useEffect, useRef, useState } from 'react'

import {Box, Button, Card, CardFooter, CardHeader, CardBody, CircularProgress, Flex, Heading,IconButton,Input,InputGroup,InputRightElement,MenuIcon,Spacer,Text, VStack, Image, Stack, Divider, ButtonGroup, Avatar } from '@chakra-ui/react'
import {FaSearch} from 'react-icons/fa'
import axios from 'axios'
import ProfileCard from './components/ProfileCard'

import Repo from './components/Repo'


function App() {
  const contentRef =  useRef(null)
  
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState('')
  const [repos, setRepos] = useState([])

useEffect(() => {
getUserData()
}, [username])

useEffect(() => {
  console.log('rendered')
  })
 

const getUserData = ()=>{
  if(username!==''){
    
   
  axios.get(`https://api.github.com/users/${username}`)
  .then((res)=>{
    console.log(res.data)
    setProfile(res.data)
    axios.get(`https://api.github.com/users/${username}/repos`).
    then((res)=>{
      console.log(res.data)
      setRepos(res.data)
    }).catch((err)=>{console.log('no repos found')})
  }
    )
  .catch((err)=>{console.log('user not found')})
  } 
  else{
    
    setUsername('')
    setProfile('')
    setRepos([])
  }
}


const getRepos = ()=>{
  setUsername(contentRef.current.value)
  console.log(contentRef.current.value)
  console.log(username)
}
  return (

    <VStack alignItems={'center'}>
      <Flex
      bgColor={'gray.100'}
      p={4}
      width={'100%'}
      mb={8}
      >
      <Heading
      fontWeight={'extrabold'}
      fontSize={'4xl'} 
      flex={1}
        color={'blue.700'}
      textAlign={'center'}
      >Git Search</Heading>
  
    </Flex>

      <InputGroup  
      variant={'filled'}
      w={'80%'}
      maxW={'450px'}
     >
      
      <Input
      ref={contentRef} 
    
      onChange={(e)=>{console.log('changed')
        }}
     textColor={'blue.700'}
      textAlign={'center'}
      placeholder='Enter a github username'></Input>
    <InputRightElement>

    <IconButton
    onClick={()=>{getRepos()}}
    size={'sm'}
    color={'blue.700'}
    icon={<FaSearch/>}
    ></IconButton>
    </InputRightElement>
    </InputGroup>

   
    {profile&&<ProfileCard  profile={profile}/>}
   
   
    {repos && repos.map(repo=>
     
      <Repo key={repo.id} repo={repo}/>
    
    ) }
    
      

    

    </VStack>
   
     
  
  )
}

export default App
