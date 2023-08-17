"use client"

import GlobalApi from '@/Shared/GlobalApi';
import BusinessList from '@/components/Home/BusinessList';
import CategoryList from '@/components/Home/CategoryList';
import GoogleMapView from '@/components/Home/GoogleMapView';
import RangeSelect from '@/components/Home/RangeSelect';
import SelectRating from '@/components/Home/SelectRating';
import Navbar from '@/components/Navbar';
import SkeltonLoading from '@/components/SkeltonLoading';
import { UserLocationContext } from '@/context/UserLocation';
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

export default function Home() {

  const { data:session} = useSession();
  const [ category, setCategory ] = useState()
  const [ radius, setRadius ] = useState(2500)
  const [ businessList, setBusinessList ] = useState([])
  const [ businessListOrg, setBusinessListOrg ] = useState([])
  const [ loading, setLoading ] = useState(true)
  
  const router = useRouter()
  const { userLocation, setUserLocation } = useContext(UserLocationContext); 
  // useEffect occurs whenever value of session changes
  useEffect(() => {
    if(!session?.user){
      router.push('/login')
    }
  }, [session])

  useEffect(() => {
    getGooglePlace();
  }, [category, radius])

  // beofre api being called, loading will happen. once api is called, loading is done. 
  const getGooglePlace = () => {
    setLoading(true)
    GlobalApi.getGooglePlace(category, radius, userLocation.lat, userLocation.lng).then( resp => {
      console.log(resp.data.product.results)
      setBusinessList(resp.data.product.results)
      setBusinessListOrg(resp.data.product.results)
      setLoading(false)
    })
  }

  return (
    <main className="">
    <Navbar />
    <div className='grid grid-cols-1 md:grid-cols-4 h-screen'>
      <div className='p-3'>
        <CategoryList onCategoryChange={(value) => setCategory(value)}/>
        <RangeSelect onRadiusChange={(value) => setRadius(value)}/>
        <SelectRating onRatingChange={(value) => onRatingChange(value)}/>
      </div>
      <div className='relative col-span-3'>
        <GoogleMapView businessList={businessList}/>
        <div className='md:absolute mx-2 w-full md:w-[100%] bottom-3'>
        {!loading?  <BusinessList businessList={businessList} />
          :
          <div className='flex gap-3'>
          {[1,2,3,4,5].map((item,index)=>(
              <SkeltonLoading key={index} />
          ))}
          </div>
          }
        </div>
      </div>
    </div>
  </main>
  

  )
}
 