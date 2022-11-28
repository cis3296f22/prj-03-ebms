import Head from 'next/head'
import React from 'react'
import Header from '../components/Header/Header'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Account from '../components/Account'

export default function MyAccount() {

  const session = useSession()
  if(session != undefined)
    return (
        <div>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>

        <Account session={session} />
        
        </div>
    )
  else
  return (
    <div>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header/>

    <div>404 Error</div>
    
    </div>
  )
}