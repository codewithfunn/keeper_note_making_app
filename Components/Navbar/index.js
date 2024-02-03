import React, { useState, useEffect } from "react";
import { MdAssignmentTurnedIn } from "react-icons/md";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const index = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setCurrentDate(now.toLocaleDateString());
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  const router = useRouter();
  return (
    <header className={styles.__header}>
      <div onClick={()=> router.push("/")} className={styles.__header_title}>
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
      <div className={styles.__header_time}>
        <span>
          <b>Date:</b>
          {currentDate}
        </span>
        <span>
          <b>Time:</b>
          {currentTime}
        </span>
      </div>
      {/* <div className={styles.__header_register}>
        <span>Register</span>
        / <span>Login</span>
      </div> */}
    </header>
  );
};

export default index;
