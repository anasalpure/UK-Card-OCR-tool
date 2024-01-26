import React, { createContext, useContext, useState } from "react";

interface IUserData {
  fname: string;
}

const UserDataContext = createContext(
  {} as {
    userData: IUserData | undefined;
    setUserData: any;
  }
);

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userData, setUserData] = useState<IUserData>();

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => useContext(UserDataContext);
