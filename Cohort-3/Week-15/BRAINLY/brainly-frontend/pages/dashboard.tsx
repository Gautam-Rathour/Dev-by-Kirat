


import { useState } from "react";
import { Button } from "../components/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { Sidebar } from "../components/Sidebar";


export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  return <div>
    <Sidebar />

    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2 border-gray-200">
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false)
      }}/>

      <div className="flex justify-end gap-4">
        <Button onClick={() => {
          setModalOpen(true)
        }} variant="primary" text="Add Content" startIcon={<PlusIcon />}></Button>
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>

      </div>
        

      <div className="flex">
        <Card type="twitter" link="https://x.com/printf_meme_/status/1945865895815037222" title="First tweet" />


        <Card type="youtube" link="https://www.youtube.com/watch?v=EAR7De6Goz4&t=250s" title="First video" />
      </div>
    </div>
  </div>
}





