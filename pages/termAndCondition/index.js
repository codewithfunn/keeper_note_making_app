import React from "react";
import styles from "../../styles/termAndCondition.module.scss";
import Link from "next/link";
const index = () => {
  const TermsAndConditions = {
    title: "Terms and Conditions for My Keeper Notes",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content:
          'By accessing or using the My Keeper Notes service ("the Service"), you agree to abide by these Terms and Conditions. If you do not agree with any part of these terms, you should not use the Service.',
      },
      {
        title: "2. Use of the Service",
        content: [
          {
            subpoint: "a. Account Registration",
            details:
              "To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process.",
          },
          {
            subpoint: "b. Account Security",
            details:
              "You are responsible for maintaining the security of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use or security breaches.",
          },
          {
            subpoint: "c. User Conduct",
            details:
              "You agree not to use the Service for any unlawful or prohibited purposes. This includes but is not limited to violating any applicable laws, infringing on intellectual property rights, or engaging in any form of harassment or malicious activity.",
          },
        ],
      },
      {
        title: "3. Privacy Policy",
        content:
          "Your use of the Service is also governed by our Privacy Policy, which can be found [link to privacy policy]. By using the Service, you consent to the terms of the Privacy Policy.",
      },
      {
        title: "4. Intellectual Property",
        content: [
          {
            subpoint: "a. Ownership",
            details:
              "My Keeper Notes and its original content, features, and functionality are owned by [Your Company Name] and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
          },
          {
            subpoint: "b. License",
            details:
              "You are granted a limited, non-exclusive, revocable license to access and use the Service for personal or business purposes. This license does not include the right to modify, reproduce, or distribute the content of the Service without prior written consent.",
          },
        ],
      },
      {
        title: "5. Termination",
        content:
          "We reserve the right to terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.",
      },
      {
        title: "6. Disclaimer of Warranties",
        content:
          'The Service is provided on an "as-is" and "as-available" basis without any warranties, expressed or implied.',
      },
      {
        title: "7. Limitation of Liability",
        content:
          "In no event shall [Your Company Name] be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.",
      },
      {
        title: "8. Changes to Terms",
        content:
          "My Keeper Notes reserves the right to modify or replace these Terms and Conditions at any time. Your continued use of the Service after any changes will constitute your acceptance of such changes.",
      },
      {
        title: "9. Governing Law",
        content:
          "These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction].",
      },
    ],
  };

  return (
    <div className={`${styles.__termAndCondition} shadow-2xl rounded-md`}>
      <div className={styles.__termAndCondition__header}>
        <h2>{TermsAndConditions.title} </h2>
      </div>
      <div className={styles.__termAndCondition__content}>
        {TermsAndConditions.sections.map((section, index) => (
          <div
            key={index}
            className={styles.__termAndCondition__content__section}
          >
            <h2>{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul>
                {section.content.map((subpoint, subIndex) => (
                  <li key={subIndex}>
                    <strong>{subpoint.subpoint}</strong>: {subpoint.details}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
