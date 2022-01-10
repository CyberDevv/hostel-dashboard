import { useState, useRef } from 'react'
import Image from 'next/image'

import RatedHostelCard from '../Hostels'
import PopularHostelCard from '../PopularHostelCard.jsx'
import { Search, Settings, MapOutline, Edit, Cancel } from '../SVGIcons'

const HomeDashboard = () => {
  const [profiePanelShown, setProfilePanelShown] = useState(true)
  const [editable, setEditable] = useState(false)

  const BackdropRef = useRef(null)

  const FormLabel = ({ label, placeholder, type }) => {
    return (
      <label htmlFor="firstName body2">
        {label}
        {/* input */}
        <div className="mt-2 border-2 border-[#E2E8F0] border-opacity-60 rounded-[15px] bg-white flex items-center py-4 px-5">
          <input
            disabled={!editable}
            className="block w-full focus:outline-none"
            type={type}
            name="firstName"
            placeholder={placeholder}
          />
          <button
            className="p-2 hover:bg-Neutral-Lightest rounded-full"
            onClick={() => setEditable(!editable)}
          >
            <Edit />
          </button>
        </div>
      </label>
    )
  }

  const handleSubmit = e => {
    e.preventDefault()

    setProfilePanelShown(false)
  }

  const handleBackClick = e => {
    const backdrop = BackdropRef.current
    if (backdrop === e.target) {
      setProfilePanelShown(false)
    }
  }

  return (
    <div className="flex space-x-[30px]">
      {/* Main section */}
      <section className="w-8/12">
        {/* Banner */}
        <div className="bg-banner rounded-[32px] px-[30px] space-y-8 py-[32px]">
          <h4 className="text-white">
            Stay with us, and feel like home. Stay you🙂
          </h4>

          {/* Search  panel*/}
          <div className="flex items-center">
            {/* search box */}
            <div className="flex bg-white px-5 py-3.5 rounded-[16px] space-x-4 w-[340px]">
              <Search />
              <input
                type="text"
                name="search"
                placeholder="Search hostels"
                className="bg-transparent focus:outline-none text-Neutral-Dark w-full body1"
              />
            </div>

            {/* Dropdown */}
            <div className="flex bg-white px-5 py-3.5 rounded-[16px] space-x-4 ml-2 w-[190px]">
              <MapOutline />
              <p className="focus:outline-none text-Neutral-Dark body1">
                Unilorin
              </p>
            </div>

            {/* button */}
            <button className="btn">Search</button>
          </div>
        </div>

        {/* Most Rated Hostels */}
        <div className="my-8 space-y-4 overflow-x-hidden">
          <div className="flex items-center justify-between">
            <h5>Most Rated Hostels</h5>
            <button className="text-primary-Default body2">View all</button>
          </div>

          {/* Rated hostels panel */}
          <RatedHostelCard />
        </div>

        {/* Popular Hostels panel */}
        <div className="my-8 space-y-4">
          <div className="flex items-center justify-between">
            <h5>Popular Hostels</h5>
            <button className="text-primary-Default body2">View all</button>
          </div>

          {/* Rated hostels panel */}
          <PopularHostelCard />
        </div>
      </section>

      {/* Aside secction */}
      <aside className="w-4/12 space-y-8">
        {/* User panel */}
        <div className="bg-white rounded-[32px] p-6">
          <div className="flex items-center space-x-6">
            {/* Image */}
            <div className="relative w-[60px] h-[60px] rounded-full">
              <Image src="/images/userPic.png" layout="fill" alt="User" />
            </div>

            {/* User name */}
            <div>
              <h5>Hello, Sally👋</h5>
              <p className="text-Neutral-gray small1 mt-1">Student</p>
            </div>
          </div>

          <button
            onClick={() => setProfilePanelShown(true)}
            className="flex items-center space-x-5 fill-current py-3.5 rounded-lg mt-[30px] justify-center w-full text-Neutral-gray hover:bg-Neutral-Lightest transition-colors duration-300"
          >
            <Settings />
            <span>Customize/Manage your Profile</span>
          </button>
        </div>

        <div className="text-white bg-primary-Default rounded-[32px] py-8 px-4">
          <h5>Your Hostel</h5>

          <div className="mt-8">
            <p className="subtitle1">Best Place Hostel</p>
            <div className="relative h-[179px] my-4">
              <Image
                src="/images/bestHostel.png"
                layout="fill"
                alt="best hostel"
              />
            </div>
          </div>

          <div>
            <p className="subtitle2">Features</p>
            <div className="flex items-center my-2 space-x-3">
              <span className="bg-yellow-default text-black p-2 rounded-2xl small3">
                4 persons
              </span>
              <span className="bg-yellow-default text-black p-2 rounded-2xl small3">
                Free Wifi
              </span>
              <span className="bg-yellow-default text-black p-2 rounded-2xl small3">
                Water Supply
              </span>
            </div>
          </div>

          <div className="my-2">
            <p className="subtitle2">Details</p>
            <p className="body2 mt-1.5">
              This is the hostel caption, it is fully customizable and any
              hostel owner can set this to whatever they want{' '}
            </p>
          </div>

          <div>
            <p className="subtitle2">Details</p>

            <div className="flex items-center space-x-2 mt-2">
              <div className="relative w-[60px] h-[60px] rounded-full">
                <Image src="/images/userPic.png" layout="fill" alt="User" />
              </div>
              <div className="relative w-[60px] h-[60px] rounded-full">
                <Image src="/images/userPic.png" layout="fill" alt="User" />
              </div>
              <div className="relative w-[60px] h-[60px] rounded-full">
                <Image src="/images/userPic.png" layout="fill" alt="User" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Profile panel */}
      {profiePanelShown && (
        <div
          ref={BackdropRef}
          onClick={handleBackClick}
          className="fixed bg-black bg-opacity-30 h-screen w-screen top-0 -left-8 flex items-center justify-center"
        >
          <div className="max-w-[599px] w-[599px] rounded-[32px] py-10 px-8 bg-[#F8F9FA]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h5 className="text-primary-Default">Manage Profile</h5>

              <button
                onClick={() => setProfilePanelShown(false)}
                className="fill-current text-Neutral-black rounded-full bg-Neutral-Divider p-4"
              >
                <Cancel />
              </button>
            </div>

            {/* Profile */}
            {/* Image */}
            <div className="relative w-[80px] h-[80px] rounded-full mt-8">
              <Image src="/images/userPic.png" layout="fill" alt="User" />
            </div>

            {/* form */}
            <form className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6">
              <FormLabel
                label="First Name"
                placeholder="Cedric Weimann"
                type="text"
              />
              <FormLabel
                label="Last Name"
                placeholder="Cedric Weimann"
                type="text"
              />
              <FormLabel
                label="Email"
                placeholder="Cedric@gmail.comm"
                type="email"
                First
                Name
              />
              <FormLabel
                label="Phone no."
                placeholder="2828282828"
                type="text"
              />
              <div className="col-span-2">
                <FormLabel
                  label="Address"
                  placeholder="Cedric Weimann"
                  type="text"
                />
              </div>
              <FormLabel
                label="City"
                placeholder="Cedric Weimann"
                type="text"
              />
              <FormLabel
                label="State"
                placeholder="Cedric Weimann"
                type="text"
              />

              <div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn ml-0"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeDashboard
