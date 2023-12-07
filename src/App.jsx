import { useEffect, useRef, useState } from 'react'

import {Alert,AlertIcon,Badge,Box, Button, Card, CardFooter, CardHeader, CardBody, CircularProgress, Flex, Heading,IconButton,Input,InputGroup,InputRightElement,MenuIcon,Spacer,Text, VStack, Image, Stack, Divider, ButtonGroup, Avatar,AlertTitle, AlertDescription } from '@chakra-ui/react'
import {FaSearch} from 'react-icons/fa'
import axios from 'axios'
import ProfileCard from './components/ProfileCard'

import Repo from './components/Repo'


function App() {
  const contentRef =  useRef(null)
  
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState('')
  const [repos, setRepos] = useState([])
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)
useEffect(() => {
getUserData()
}, [username])

useEffect(() => {
  console.log('rendered')
  })
 

const getUserData = ()=>{
  const searchVal = contentRef.current.value
  if(searchVal!==''){
//   axios.get(`https://api.github.com/users/${username}`)
//   .then((res)=>{
//     console.log(res.data)
//     setErr(null)
//     setProfile(res.data)
//     axios.get(`https://api.github.com/users/${username}/repos`).
//     then((res)=>{
//       console.log(res.data)
//       setRepos(res.data)
//     }).catch((err)=>{console.log('no repos found')})
//   }
//     )
//   .catch((err)=>{console.log('user not found')
//   setProfile(null)
//   setRepos(null)
// setErr('User not found. Please check the username.')
// })

setProfile(null)
setRepos(null)
setErr(null)
setLoading(true)

const userReq = axios.get(`https://api.github.com/users/${searchVal}`)
const userRepoReq = axios.get(`https://api.github.com/users/${searchVal}/repos`)

Promise.all([userReq, userRepoReq]).
then((res)=>{
  console.log(res[0].data)
  console.log(res[1].data)
  setLoading(false)
  setProfile(res[0].data)
  setRepos(res[1].data)
  setErr(null)
}).
catch((err)=>{
  console.log(err)
  setLoading(false)
  setProfile(null)
  setRepos(null)
  setErr(err)
})
} 
else{
    setErr(null)
    setUsername('')
    setProfile('')
    setRepos([])
  }
}


const getRepos = ()=>{
  //setUsername(contentRef.current.value)
  console.log(contentRef.current.value)
  console.log(username)
  getUserData()
}
  return (

    <VStack h={'100vh'}  alignItems={'center'}>
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

    {loading && <CircularProgress   margin={'auto'}   isIndeterminate color='blue.500' />}

   {err&& <Alert  mt={4}  rounded={'md'} w={'80%'} maxW={'450px'} status='error'>
    <AlertIcon />
    <Box pl={4}>
    <AlertTitle>{err.code}</AlertTitle>
  <AlertDescription   >{err.message}</AlertDescription>
  </Box>
  </Alert>}

    {profile&&<ProfileCard  profile={profile}/>}
   
    {repos && repos.map(repo=>
     
      <Repo key={repo.id} repo={repo}/>
    
    ) }
    
      

    

    </VStack>
   
     
  
  )
}

export default App
