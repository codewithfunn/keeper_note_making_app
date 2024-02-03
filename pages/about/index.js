import React from 'react'
import Link from 'next/link'
import styles from '../../styles/about.module.scss'
const index = () => {
  return (
    <div className={`${styles.__about} shadow-2xl rounded-md`}>
    <div className={styles.__about__header}>
        <h2>About Keeper Notes </h2>
    </div>
    <div className={styles.__about__content}>
        <p>My Keeper Notes&quot; was introduced to users as a web note-taking service with its initial launch in 2022. Our primary objective is to provide a straightforward and user-friendly platform for creating, saving, and sharing notes online.</p>
        <p>Throughout the years, we&apos;ve been thrilled to receive valuable ideas and suggestions from our user community. Your feedback has been instrumental in shaping the evolution of &quot;My Keeper Notes,&quot; and we continue to work diligently to incorporate additional features that enhance your note-taking experience.</p>
        <p>We invite you to share your thoughts, ideas, and suggestions on how we can further improve &quot;My Keeper Notes.&quot; You can reach out to us through our dedicated Feedback Forum or via email at 
            <Link href={"mailto:support@mykeepernotes.com"}>support@mykeepernotes.com.</Link>
            </p>
        <p>Your input is highly valuable to us, and we look forward to hearing from you as we strive to make &quot;My Keeper Notes&quot; even better with each update!</p>
    </div>
</div>
  )
}

export default index