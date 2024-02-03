import React from "react";
import styles from "../../styles/privacy.module.scss";
const index = () => {
    const PrivacyPolicy = {
        lastUpdated: "2022",
        sections: [
          {
            title: "Introduction",
            content: [
              "Welcome to My Keeper Notes! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our note-taking service ('the Service'). By accessing or using the Service, you agree to the terms outlined in this Privacy Policy.",
            ],
          },
          {
            title: "Information We Collect",
            content: [
              "Account Information: When you create an account, we collect personal information such as your name and email address to provide you with access to the Service.",
              "Note Content: We securely store the notes and content you create on our platform.",
              "Usage Data: We may collect information on how you interact with the Service, including device information, IP address, browser type, and pages visited.",
            ],
          },
          {
            title: "How We Use Your Information",
            content: [
              "To provide and maintain the Service.",
              "To improve and enhance the features and functionality of the Service.",
              "To communicate with you, respond to inquiries, and provide customer support.",
            ],
          },
          {
            title: "Information Sharing and Disclosure",
            content: [
              "Third-Party Service Providers: We may engage third-party service providers to assist in providing the Service or analyzing how it is used. These third parties may have access to your personal information.",
              "Legal Requirements: We may disclose your information if required by law or in response to valid requests by public authorities.",
            ],
          },
          {
            title: "Security",
            content: [
              "We employ industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure.",
            ],
          },
          {
            title: "Your Choices",
            content: [
              "Account Information: You can review and update your account information by accessing your account settings.",
              "Opt-Out: You can opt-out of receiving promotional communications from us by following the instructions provided in those communications.",
            ],
          },
          {
            title: "Changes to This Privacy Policy",
            content: [
              "We reserve the right to update this Privacy Policy. Changes will be effective immediately upon posting on our website.",
            ],
          },
          {
            title: "Contact Us",
            content: [
              "If you have any questions or concerns about this Privacy Policy, please contact us at support@keepernotes.com.",
            ],
          },
        ],
      };
  return (
    <div className={`${styles.__privacyPolicy} shadow-2xl rounded-md`}>
      <div className={styles.__privacyPolicy__header}>
        <h2>My Keeper Notes Privacy Policy</h2>
        <h4>Last Updated: {PrivacyPolicy.lastUpdated}</h4>
      </div>
      <div className={styles.__privacyPolicy__content}>
      {PrivacyPolicy.sections.map((section, index) => (
        <div key={index} className={styles.__privacyPolicy__content__section}>
          <h2>{section.title}</h2>
          <ul>
            {section.content.map((point, subIndex) => (
              <li key={subIndex}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
};

export default index;
