import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "notificationsAtom",
    default: selector({
        key: "notificationsAtomSelector",
        get: async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  return {
    network: 5,
    jobs: 3,
    notifications: 10,
    messaging: 1
  };
}

    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})