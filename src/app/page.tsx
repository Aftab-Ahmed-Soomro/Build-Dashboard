import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import SignIn from "./(pages)/auth/sign-in/page";
import SignUp from "./(pages)/auth/sign-up/page";

const main = () => {
  return (
    <div className="w-[500px] m-auto flex flex-col gap-10 justify-center items-center h-[100vh]">
      <h1>Welcome To Nextjs</h1>
      <Tabs defaultValue="SignIn" className="">
        <TabsList>
          <TabsTrigger value="SignIn">SignIn</TabsTrigger>
          <TabsTrigger value="SignUp">SignUp</TabsTrigger>
          {/* <TabsTrigger value="forgotPassword">forgot password</TabsTrigger> */}
        </TabsList>
        <TabsContent value="SignIn">
          <SignIn />
        </TabsContent>
        <TabsContent value="SignUp">
          <SignUp />
        </TabsContent>
        {/* <TabsContent value="forgotPassword">forgot password</TabsContent> */}
      </Tabs>
    </div>
  );
};

export default main;
