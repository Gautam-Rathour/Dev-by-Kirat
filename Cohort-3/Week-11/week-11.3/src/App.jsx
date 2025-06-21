import React from "react"; 
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { networkAtom, jobsAtom, messagingAtom, notificationsAtom, totalNotificationSelector } from "./atoms";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
  // }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount]) 

  return (
    <>
      <button>Home</button>
      <button>
        My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount >= 100 ? "99+" : messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount >= 100 ? "99+" : notificationsAtomCount})</button>
      <button>Me({totalNotificationCount})</button>
    </>
  )
}

export default App;





