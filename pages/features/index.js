import React from "react";
import styles from "../../styles/features.module.scss";
import Link from "next/link";
const index = () => {
  const features = {
    title: "Features of My Keeper Notes",
    lastUpdated: "2022",
    sections: [
      {
        title: "Easy and Intuitive Interface",
        description:
          "My Keeper Notes boasts a user-friendly and intuitive interface, ensuring that you can quickly and effortlessly capture your thoughts, ideas, and important information. The clean design makes navigation a breeze, allowing you to focus on what matters most—your notes.",
      },
      {
        title: "Secure and Private",
        description:
          "We prioritize the security and privacy of your notes. With robust encryption and secure storage practices, you can trust My Keeper Notes to keep your information safe. Your notes are for your eyes only, giving you peace of mind as you document your most personal and valuable thoughts.",
      },
      {
        title: "Seamless Synchronization",
        description:
          "Access your notes anytime, anywhere. Our seamless synchronization feature ensures that your notes are always up-to-date across all your devices. Whether you're using My Keeper Notes on your computer, tablet, or smartphone, your notes are just a click away.",
      },
      {
        title: "Powerful Organization Tools",
        description:
          "Effortlessly organize your notes with our powerful tools. Use tags, folders, and categories to categorize and structure your notes. Find what you need quickly with a robust search feature that makes navigating through your notes a breeze.",
      },
      {
        title: "Collaboration Made Easy",
        description:
          "Collaborate with others effortlessly. My Keeper Notes allows you to share specific notes or entire folders with colleagues, friends, or family members. Collaborate on projects, share ideas, and keep everyone on the same page.",
      },
      {
        title: "Customization Options",
        description:
          "Make My Keeper Notes truly yours with customization options. Choose from various themes, fonts, and colors to create an environment that suits your personal style. Tailor your note-taking experience to reflect your unique preferences.",
      },
      {
        title: "Reminders and Notifications",
        description:
          "Never miss an important deadline or forget a crucial task. My Keeper Notes comes with a built-in reminder and notification system, helping you stay organized and on top of your schedule.",
      },
      {
        title: "Accessibility Features",
        description:
          "Our commitment to inclusivity is reflected in our accessibility features. My Keeper Notes is designed to be accessible to users of all abilities, ensuring a positive experience for everyone.",
      },
      {
        title: "Continuous Updates and Improvements",
        description:
          "We are dedicated to providing the best note-taking experience. With regular updates and improvements, you can expect new features and enhanced functionalities that cater to your evolving needs.",
      },
    ],
    callToAction: {
      buttonText: "Get Started Now",
      buttonLink: "#",
      contactUsLink: "#",
    },
  };
  return (
    <div className={`${styles.__features} shadow-2xl rounded-md`}>
      <div className={styles.__features__header}>
        <h2>{features.title}</h2>
        <h4>Last Updated: {features.lastUpdated}</h4>
      </div>
      <div className={styles.__features__content}>
        {features.sections.map((section, index) => (
          <div key={index} className={styles.__features__content__section} >
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        ))}
        <div>
          <Link href={features.callToAction.buttonLink}>
            <button>{features.callToAction.buttonText}</button>
          </Link>

          <p>
            For more information, feel free to{" "}
            <Link href={features.callToAction.contactUsLink}>contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
