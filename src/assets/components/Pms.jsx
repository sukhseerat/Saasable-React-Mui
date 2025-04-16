import { Avatar, AvatarGroup, Button, Card, Typography } from "@mui/material";
import Trusted from '../components/Trusted';
import Empowering from '../components/Empowering';
import Seamlesspms from '../components/Seamlesspms';
import ProjectExecution from "./ProjectExecution";
import Unleash from "./Unleash"
import UserExperience from "./UserExperience";
import Start from "./Start"
import Unlock from "./Unlock"
import GetStarted from "./GetStarted"
import FrequentlyThree from "./FrequentlyThree"
import Ready from "./Ready"
import Future from "./Future"
import Hear from "./Hear"
import Press from "./Press"

export default function ProjectWorkflow() {
  return (
    <div className="bg-black text-white py-16 px-8 flex flex-col items-center max-w-4xl mx-auto">
      <AvatarGroup max={5} className="mb-4">
        <Avatar src="https://www.saasable.io/assets/images/user/avatar1.png" />
        <Avatar src="https://www.saasable.io/assets/images/user/avatar2.png" />
        <Avatar src="https://www.saasable.io/assets/images/user/avatar3.png" />
        <Avatar src="https://www.saasable.io/assets/images/user/avatar4.png" />
        <Avatar src="https://www.saasable.io/assets/images/user/avatar5.png" />
      </AvatarGroup>
      <div className="flex items-center space-x-2 mb-4">
        <Typography variant="body1" className="text-yellow-400">★★★★★</Typography>
        <Typography variant="body1">5.0 from 200+ reviews</Typography>
      </div>
      <Typography variant="h3" className="font-bold text-center mb-2">
        Transform Your Valuable
      </Typography>
      <Typography variant="h3" className="font-bold text-center mb-4">
        Project ✦ Workflow
      </Typography>
      <Typography variant="body1" className="text-center mb-6">
        Revolutionize the way you manage projects with our comprehensive project management tool.
      </Typography>
      <div className="flex items-stretch w-full">
        <img
          src="https://www.saasable.io/assets/images/graphics/pms/desktop1-dark.svg"
          alt="Dashboard Preview"
          className="rounded-xl w-1/2 h-full object-cover"
        />
        <div className="w-1/2 flex flex-col items-center">
          <Card className="relative p-6 bg-gray-900 rounded-xl text-center w-full h-full overflow-hidden flex flex-col justify-center">
            <img
              src="https://www.saasable.io/assets/images/graphics/pms/background.jpg"
              alt="Background"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
            />
            <div className="relative z-10 p-10">
              <Typography variant="h4" className="text-yellow-400 mb-2">90%</Typography>
              <Typography variant="body1" className="text-gray-300">
                Power of AI for navigation and communication
              </Typography>
            </div>
          </Card>
          <div className="flex space-x-4 mt-4">
            <Button variant="contained" color="warning" className="rounded-full px-6 py-2">
              Get Started
            </Button>
            <Button variant="outlined" color="warning" className="rounded-full px-6 py-2">
              Explore
                      </Button>
              
                  </div>
                  
              </div>
           
        </div>
          <Trusted />
          <Empowering />
      <Seamlesspms />
      <ProjectExecution /> 
      <Unleash />
      <UserExperience />
      <Start />
      <Unlock />
      <GetStarted />
      <FrequentlyThree />
      <Ready />
      <Future />
      <Hear />
      <Press/>
      </div>
  );
}
