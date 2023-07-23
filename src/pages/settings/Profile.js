import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../Components/Home/Header";
import ChangePassword from "../../Components/settings/ChangePassword";
import Connections from "../../Components/settings/Connections";
import ProfileUpdate from "../../Components/settings/ProfileUpdate";
import { allLikedUser } from "../../redux/actions/profiles";
const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allLikedUser());
  }, [])
	const [selectedValue, setSelectedValue] = useState('Profile')
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main>
        <div className="py-6">
          <div className="px-4 mx-auto sm:px-6 md:px-8">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          </div>
          <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
            <div className="w-full pb-1 overflow-x-auto">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px space-x-10">
                  <p
                    className={`py-4 text-sm font-medium transition-all duration-200 ${selectedValue === 'Profile' ?'border-b-2 border-base text-base' : ' border-b-2 border-transparent text-gray-500'} ${selectedValue === 'Profile' ? '' :'hover:border-gray-300'} whitespace-nowrap`}
										onClick={() => setSelectedValue('Profile')}
                  >
                    {" "}
                    Profile{" "}
                  </p>

                  <p
                    className={`py-4 text-sm font-medium text-gray-500 transition-all duration-200  ${selectedValue === 'Password' ?'border-b-2 border-base text-base' : ' border-b-2 border-transparent text-gray-500'}  ${selectedValue === 'Password' ? '' :'hover:border-gray-300'} whitespace-nowrap`}
										onClick={() => setSelectedValue('Password')}
                  >
                    {" "}
                    Password{" "}
                  </p>

                  <p
                    className={`py-4 text-sm font-medium text-gray-500 transition-all duration-200 ${selectedValue === 'Team' ?'border-b-2 border-base text-base' : ' border-b-2 border-transparent text-gray-500'} ${selectedValue === 'Team' ? '' :'hover:border-gray-300'} whitespace-nowrap`}
										onClick={() => setSelectedValue('Team')}
                  >
                    {" "}
                    Connections{" "}
                  </p>
                </nav>
              </div>
            </div>

            {selectedValue === 'Profile' &&
							<div className="mt-6">
								<p className="text-base font-bold text-gray-900">Profile</p>
								<p className="mt-1 text-sm font-medium text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipis.
								</p>
							</div>
						}

           	{selectedValue === 'Profile' && <ProfileUpdate /> }
						{selectedValue === 'Password' && <ChangePassword /> }
						{selectedValue === 'Team' && <Connections /> }
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
