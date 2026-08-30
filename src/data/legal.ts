// =====================================================================
//  Legal documents (Privacy Policy + Terms of Service).
//  ---------------------------------------------------------------------
//  Drafted and adversarially compliance-reviewed (CCPA/CPRA + GDPR/UK GDPR),
//  rendered by src/components/LegalDoc.tsx on /privacy and /terms.
//  NOTE: This is a general template, not legal advice, have counsel
//  review before relying on it. To edit, change the objects below.
// =====================================================================

export interface LegalBlock {
  type: 'paragraph' | 'bullets';
  text?: string;
  items?: string[];
}

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDocData {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export const privacyPolicy: LegalDocData = {
  "title": "Privacy Policy",
  "lastUpdated": "August 29, 2026",
  "intro": "Flozo Media (\"Flozo Media,\" \"we,\" \"us,\" or \"our\") is a small marketing company focused on organic content for local businesses. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit our website at https://flozomedia.com (the \"Site\") or otherwise interact with us. For the purposes of the EU and UK General Data Protection Regulation, Flozo Media is the \"controller\" of the personal information described in this policy. We have written this policy in plain English so you can understand our practices.\n\nBy using our Site, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please do not use the Site. If you have any questions or wish to exercise your privacy rights, you can reach us at hello@flozomedia.com.",
  "sections": [
    {
      "heading": "Information We Collect",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We collect only the information we need to operate our Site, respond to inquiries, and understand how our Site is used. The categories of personal information we collect, the sources of that information, and how we use each category are described below. The category labels in parentheses correspond to the categories of personal information defined under the California Consumer Privacy Act (CCPA)."
        },
        {
          "type": "bullets",
          "items": [
            "Identifiers and contact information (CCPA category: identifiers). When you submit our contact form, we collect the name and email address you provide. When you visit the Site, we automatically collect your IP address, which may be truncated or anonymized. Source: directly from you, and automatically from your device and browser.",
            "Internet or other electronic network activity information (CCPA category: internet activity). When you visit the Site, we automatically collect information such as the pages you view, the date and time of your visit, the referring website or source, and general information about your browser, device, and operating system. Source: automatically from your device and browser through privacy-friendly web analytics.",
            "Communications content (CCPA category: customer records and, where applicable, professional information). When you contact us through our form or by email, we collect the contents of the message you choose to send us, which may include details about a potential project. Source: directly from you."
          ]
        },
        {
          "type": "paragraph",
          "text": "We use a privacy-friendly analytics approach designed to minimize the personal data collected and to avoid building advertising profiles about you. We do not collect personal information from data brokers or other third-party data sources, and we do not buy or rent personal information about you."
        },
        {
          "type": "paragraph",
          "text": "Sensitive personal information. We do not intentionally collect sensitive personal information (such as government identifiers, financial account details, precise geolocation, health information, racial or ethnic origin, religious beliefs, or the contents of private communications other than messages you choose to send us). Because we do not collect or use sensitive personal information to infer characteristics about you, the CCPA right to limit the use of sensitive personal information does not apply to our practices. We ask that you not include sensitive information in messages you send us through the contact form or by email."
        }
      ]
    },
    {
      "heading": "How We Use Information",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We use the information we collect for the following business purposes:"
        },
        {
          "type": "bullets",
          "items": [
            "To respond to your inquiries and communicate with you about your message, our services, and potential projects.",
            "To operate, maintain, and improve our Site, including understanding which pages and content are most useful to visitors.",
            "To measure and analyze general traffic and usage trends using privacy-friendly analytics.",
            "To keep our Site functioning properly and secure, including detecting, preventing, and addressing technical issues, fraud, or misuse.",
            "To comply with applicable legal obligations and to establish, exercise, or defend legal claims where necessary."
          ]
        },
        {
          "type": "paragraph",
          "text": "We do not use your information to run advertising networks, and we do not use it to deliver cross-context behavioral or targeted advertising. We do not use your personal information for any purpose that is materially different from, or incompatible with, the purposes described in this policy without first providing you notice."
        },
        {
          "type": "paragraph",
          "text": "Automated decision-making and profiling. We do not use your personal information to make decisions about you that produce legal or similarly significant effects through solely automated means, and we do not engage in profiling for such purposes."
        }
      ]
    },
    {
      "heading": "Legal Bases for Processing (GDPR / UK GDPR)",
      "blocks": [
        {
          "type": "paragraph",
          "text": "If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, we process your personal information only when we have a valid legal basis to do so under the EU GDPR and the UK GDPR. Depending on the circumstances, our legal bases include:"
        },
        {
          "type": "bullets",
          "items": [
            "Consent. Where you have given us your consent, such as when you choose to accept non-essential cookies or voluntarily submit information through our contact form. You may withdraw your consent at any time without affecting the lawfulness of processing carried out before the withdrawal.",
            "Legitimate interests. Where processing is necessary for our legitimate interests, such as operating and improving our Site, understanding usage through privacy-friendly analytics, responding to inquiries, and keeping our Site secure, provided those interests are not overridden by your rights and freedoms.",
            "Performance of a contract or steps taken at your request. Where processing is necessary to respond to your request to enter into or carry out a potential or actual engagement with us.",
            "Compliance with a legal obligation. Where we must process information to comply with applicable law or respond to lawful requests from public authorities."
          ]
        },
        {
          "type": "paragraph",
          "text": "As a marketing company established in the United States, we do not maintain an establishment in the EEA or the United Kingdom and have not appointed an Article 27 representative in the EU or the UK. If you have questions about our legal bases or wish to exercise your rights, contact us at hello@flozomedia.com."
        }
      ]
    },
    {
      "heading": "Cookies and Tracking Technologies",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Cookies are small text files placed on your device when you visit a website. We use cookies and similar technologies for two main purposes: (1) basic site functionality, which helps our Site work properly and remember your preferences, and (2) analytics, which helps us understand how visitors use our Site through a privacy-friendly approach."
        },
        {
          "type": "paragraph",
          "text": "We classify cookies as either essential (strictly necessary for the Site to function) or non-essential (such as analytics cookies and cookies set by embedded third-party media). If you are located in the EEA, the United Kingdom, or Switzerland, we will not place non-essential cookies on your device unless and until you have given your consent, and you may change or withdraw your consent at any time. Essential cookies do not require consent because the Site cannot function properly without them."
        },
        {
          "type": "paragraph",
          "text": "You can also control cookies through your browser settings, which typically allow you to block or delete cookies. Please note that if you disable certain cookies, some parts of our Site may not work as intended."
        }
      ]
    },
    {
      "heading": "Embedded Third-Party Content",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Our Site may include embedded media and content hosted by third-party platforms, including YouTube, Instagram, and TikTok. When a page containing this embedded content loads, or when you interact with it, these third parties may set their own cookies and collect information about you, such as your IP address and details about your device and browsing activity. This happens directly between you and the relevant platform, and it is governed by that platform's own privacy policy rather than this one."
        },
        {
          "type": "paragraph",
          "text": "We do not control and are not responsible for the data practices of YouTube (Google), Instagram (Meta), or TikTok, including any tracking or profiling those platforms may carry out for their own purposes. We encourage you to review their privacy policies to understand how they handle your information:"
        },
        {
          "type": "bullets",
          "items": [
            "YouTube / Google: https://policies.google.com/privacy",
            "Instagram / Meta: https://privacycenter.instagram.com/policy",
            "TikTok: https://www.tiktok.com/legal/privacy-policy"
          ]
        }
      ]
    },
    {
      "heading": "How Information Is Shared",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We do not sell your personal information, and we do not share your personal information for cross-context behavioral advertising. We disclose personal information only in the limited circumstances described below. In the preceding twelve months, we have disclosed the categories of personal information described in 'Information We Collect' (identifiers, internet activity, and communications content) to the categories of recipients listed here:"
        },
        {
          "type": "bullets",
          "items": [
            "Service providers and processors. We may disclose information to trusted third parties that perform services on our behalf, such as website hosting, email delivery, form processing, and privacy-friendly analytics. These providers act on our instructions under contract and are permitted to use the information only as needed to provide their services to us.",
            "Embedded content providers. As described above, embedded media from YouTube, Instagram, and TikTok may receive information directly from your browser when you load or interact with that content.",
            "Legal and safety recipients. We may disclose information where we believe in good faith that doing so is necessary to comply with applicable law, regulation, legal process, or an enforceable governmental request, or to protect the rights, property, or safety of Flozo Media, our users, or others.",
            "Successors in a business transfer. If we are involved in a merger, acquisition, financing, reorganization, sale of assets, or similar transaction, or in bankruptcy or insolvency, personal information may be transferred as part of that transaction, subject to the commitments made in this Privacy Policy."
          ]
        },
        {
          "type": "paragraph",
          "text": "To be clear: we have not sold personal information for money or other valuable consideration, and we have not shared personal information for cross-context behavioral advertising, in the preceding twelve months or at any time, as those terms are defined under applicable California law. We also do not sell or share the personal information of consumers we know to be under 16 years of age."
        }
      ]
    },
    {
      "heading": "Data Retention",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We keep personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law. We do not retain personal information for longer than is reasonably necessary for the purpose for which it was collected. Our retention practices by category are:"
        },
        {
          "type": "bullets",
          "items": [
            "Contact-form and email submissions: retained for as long as needed to respond to your inquiry and maintain a record of our correspondence, and typically deleted or anonymized within approximately 24 months of our last contact unless an active or anticipated project, or a legal obligation, requires longer retention.",
            "Analytics and usage data: retained in aggregated or limited form, typically no longer than 14 months, after which it is deleted or retained only in non-identifying aggregate form."
          ]
        },
        {
          "type": "paragraph",
          "text": "The criteria we use to determine retention periods include the amount, nature, and sensitivity of the information; the potential risk of harm from unauthorized use or disclosure; the purposes for which we process it and whether we can achieve those purposes by other means; and applicable legal, accounting, or reporting requirements. When information is no longer needed, we take reasonable steps to delete it or render it anonymous."
        }
      ]
    },
    {
      "heading": "Data Security",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We take reasonable technical and organizational measures designed to protect personal information against loss, misuse, unauthorized access, disclosure, alteration, and destruction. As a small company, these measures include using reputable service providers, limiting access to personal information to those who need it, and relying on encrypted (HTTPS) connections for our Site. However, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security. We encourage you to take steps to protect your own information, including when communicating with us, and not to send us sensitive information by email."
        }
      ]
    },
    {
      "heading": "Children's Privacy",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Our Site is not directed to children, and we do not knowingly collect personal information from children under the age of 13 (or under 16 where a higher age applies under local law, including the EEA and the United Kingdom). We do not knowingly sell or share the personal information of consumers under 16 years of age. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at hello@flozomedia.com, and we will take steps to delete that information."
        }
      ]
    },
    {
      "heading": "Your Privacy Rights",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Depending on where you live, you may have certain rights regarding your personal information. The sections below describe rights available to California residents and to individuals in the EEA, the United Kingdom, and Switzerland. To exercise any of these rights, contact us at hello@flozomedia.com. We will respond as required by applicable law, we will not discriminate against you for exercising your rights, and we will not charge you a fee unless your request is manifestly unfounded, excessive, or repetitive, as permitted by law. We may need to verify your identity before fulfilling certain requests, and we will only use information provided in a request to verify the requester's identity and to respond to the request."
        }
      ]
    },
    {
      "heading": "California Privacy Rights (CCPA / CPRA)",
      "blocks": [
        {
          "type": "paragraph",
          "text": "If you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act (collectively, the 'CCPA'), gives you the following rights with respect to your personal information:"
        },
        {
          "type": "bullets",
          "items": [
            "Right to know and access. You have the right to request that we disclose the categories and specific pieces of personal information we have collected about you, the categories of sources, the business or commercial purposes for collecting it, and the categories of third parties to whom we disclose it.",
            "Right to delete. You have the right to request that we delete personal information we have collected from you, subject to certain exceptions permitted by law.",
            "Right to correct. You have the right to request that we correct inaccurate personal information that we maintain about you.",
            "Right to opt out of the sale or sharing of personal information. You have the right to opt out of the 'sale' or 'sharing' of your personal information. We do not sell your personal information and we do not share it for cross-context behavioral advertising, so there is nothing for you to opt out of and we do not need to provide a 'Do Not Sell or Share My Personal Information' link.",
            "Right to limit use of sensitive personal information. You have the right to limit the use and disclosure of sensitive personal information. Because we do not use or disclose sensitive personal information for purposes that trigger this right, there is nothing for you to limit.",
            "Right to non-discrimination. You have the right not to receive discriminatory treatment for exercising any of your CCPA rights."
          ]
        },
        {
          "type": "paragraph",
          "text": "How to submit a request. To exercise these rights, email us at hello@flozomedia.com. We will acknowledge your request and respond within the timeframes required by the CCPA (generally within 45 days, with one possible 45-day extension). You may use an authorized agent to submit a request on your behalf; we may require the agent to provide proof of authorization and may still verify your identity directly. To verify your request, we may ask you to confirm information we already hold, such as the email address you used to contact us. If we deny your request, we will explain why."
        },
        {
          "type": "paragraph",
          "text": "Shine the Light. California Civil Code Section 1798.83 (the 'Shine the Light' law) permits California residents to request information about a business's disclosure of personal information to third parties for those third parties' direct marketing purposes. We do not disclose personal information to third parties for their own direct marketing purposes."
        }
      ]
    },
    {
      "heading": "EEA / UK / Swiss Privacy Rights (GDPR / UK GDPR)",
      "blocks": [
        {
          "type": "paragraph",
          "text": "If you are located in the EEA, the United Kingdom, or Switzerland, you have the following rights with respect to your personal information under the GDPR and UK GDPR:"
        },
        {
          "type": "bullets",
          "items": [
            "Right of access. You may request confirmation of whether we process your personal information and a copy of that information.",
            "Right to rectification. You may request that we correct inaccurate or incomplete personal information.",
            "Right to erasure. You may request that we delete your personal information in certain circumstances (the 'right to be forgotten').",
            "Right to restriction of processing. You may request that we restrict the processing of your personal information in certain circumstances.",
            "Right to data portability. You may request to receive certain personal information you provided to us in a structured, commonly used, and machine-readable format, and to have it transmitted to another controller where technically feasible.",
            "Right to object. You may object to our processing of your personal information where we rely on legitimate interests as our legal basis, and you may object at any time to processing for direct marketing.",
            "Right to withdraw consent. Where we rely on your consent, you may withdraw it at any time without affecting the lawfulness of processing carried out before the withdrawal.",
            "Right to lodge a complaint. You have the right to lodge a complaint with your local data protection authority or supervisory authority if you believe our processing of your personal information violates applicable law. In the UK, this is the Information Commissioner's Office (ICO) at https://ico.org.uk. In the EEA and Switzerland, you may contact the supervisory authority in your country of residence, place of work, or place of the alleged infringement."
          ]
        },
        {
          "type": "paragraph",
          "text": "To exercise any of these rights, contact us at hello@flozomedia.com. We will respond within the timeframes required by applicable law (generally within one month, which may be extended for complex or numerous requests)."
        }
      ]
    },
    {
      "heading": "Do Not Track",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Some browsers offer a 'Do Not Track' (DNT) signal that lets you express a preference not to be tracked across websites. There is currently no consistent industry or legal standard for recognizing and responding to DNT signals. As a result, our Site does not respond to DNT signals at this time. Where required by California law, we treat a recognized opt-out preference signal, such as the Global Privacy Control (GPC), as a valid request to opt out of the sale or sharing of personal information; however, because we do not sell or share personal information, no such opt-out is necessary. We do not track you across third-party websites for advertising purposes."
        }
      ]
    },
    {
      "heading": "International Data Transfers",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We are based in the United States, and the information we collect is processed and stored in the United States and potentially in other countries where our service providers operate. These countries may have data protection laws that differ from those in your country of residence. If you access our Site from outside the United States, you understand that your information may be transferred to, stored in, and processed in the United States. Where required by law, we take appropriate safeguards to protect personal information transferred out of the EEA, the United Kingdom, or Switzerland, such as relying on lawful transfer mechanisms (for example, the European Commission's Standard Contractual Clauses and the UK International Data Transfer Addendum). You may request a copy of the relevant safeguards by contacting us at hello@flozomedia.com."
        }
      ]
    },
    {
      "heading": "Links to Other Websites",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Our Site may contain links to third-party websites and platforms that we do not own or control, including the social media platforms whose content we embed. This Privacy Policy does not apply to those third-party sites. We are not responsible for the privacy practices or content of any third-party website, and we encourage you to read the privacy policy of every website you visit."
        }
      ]
    },
    {
      "heading": "Changes to This Privacy Policy",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make changes, we will revise the 'Last Updated' date at the top of this policy. If we make material changes, we will take additional steps to notify you where appropriate or required by law. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information."
        }
      ]
    },
    {
      "heading": "Governing Law",
      "blocks": [
        {
          "type": "paragraph",
          "text": "This Privacy Policy and any disputes arising out of or relating to it are governed by the laws of the State of Washington, United States, without regard to its conflict-of-laws principles, except where superseded by applicable data protection laws that grant you additional rights. Nothing in this section deprives you of the protection of mandatory provisions of the law of your country of residence."
        }
      ]
    },
    {
      "heading": "How to Contact Us",
      "blocks": [
        {
          "type": "paragraph",
          "text": "If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please contact us:"
        },
        {
          "type": "bullets",
          "items": [
            "Flozo Media",
            "Email: hello@flozomedia.com",
            "Website: https://flozomedia.com",
            "Location: Redmond, Washington, United States"
          ]
        }
      ]
    }
  ]
};

export const termsOfService: LegalDocData = {
  "title": "Terms of Service",
  "lastUpdated": "August 29, 2026",
  "intro": "Welcome to Flozo Media. These Terms of Service (\"Terms\") govern your access to and use of the website located at https://flozomedia.com (the \"Site\"), which is operated by Flozo Media, a marketing company based in Redmond, Washington, United States (\"Flozo Media,\" \"we,\" \"us,\" or \"our\"). The Site serves as a portfolio of our work and a way for prospective clients and other visitors to learn about us and get in touch.\n\nPlease read these Terms carefully before using the Site. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Site.\n\nThese Terms work together with our Privacy Policy, available at https://flozomedia.com/privacy, which explains how we collect, use, and protect personal information and describes the privacy rights available to you. By using the Site, you also acknowledge our Privacy Policy.",
  "sections": [
    {
      "heading": "1. Acceptance of Terms",
      "blocks": [
        {
          "type": "paragraph",
          "text": "By accessing, browsing, or otherwise using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and by our Privacy Policy at https://flozomedia.com/privacy. These Terms form a binding agreement between you and Flozo Media. If you are using the Site on behalf of a company or other organization, you represent that you have the authority to bind that entity to these Terms, and \"you\" refers to both you and that entity."
        },
        {
          "type": "paragraph",
          "text": "If you do not agree with any part of these Terms, your only remedy is to stop using the Site."
        }
      ]
    },
    {
      "heading": "2. Eligibility and Children's Privacy",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The Site is intended for use by individuals who are at least 18 years of age, or the age of majority in their jurisdiction. The Site is a business-oriented portfolio and is not directed to children. By using the Site, you represent that you meet this age requirement."
        },
        {
          "type": "paragraph",
          "text": "We do not knowingly collect personal information from children under the age of 16 (or under the applicable minimum age in your jurisdiction). We do not sell or share the personal information of minors. If you believe that a child has provided us with personal information through the Site, please contact us at hello@flozomedia.com and we will promptly delete it."
        }
      ]
    },
    {
      "heading": "3. Description of the Site and Services",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The Site is an informational and marketing website. It exists to showcase Flozo Media's marketing and content work, to describe the services we offer, and to allow interested parties to contact us and submit inquiries."
        },
        {
          "type": "paragraph",
          "text": "The Site itself does not provide marketing services, and nothing on the Site constitutes an offer, quote, or commitment to perform any work. Any actual marketing engagement between you and Flozo Media is a separate matter and will be governed by a separate written agreement (such as a proposal, statement of work, or services contract) signed by both parties. In the event of any conflict between these Terms and the terms of such a separate written agreement regarding a specific engagement, the separate written agreement will control with respect to that engagement."
        },
        {
          "type": "paragraph",
          "text": "We may change, suspend, or discontinue any part of the Site at any time, with or without notice. To the fullest extent permitted by law, we are not liable to you or to any third party for any modification, suspension, or discontinuation of the Site or any feature of it."
        }
      ]
    },
    {
      "heading": "4. Intellectual Property",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Unless otherwise indicated, all content on the Site is the property of Flozo Media or its licensors and is protected by United States and international copyright, trademark, and other intellectual property laws. This content includes, but is not limited to:"
        },
        {
          "type": "bullets",
          "items": [
            "All photographs, renderings, images, and other visual media displayed on the Site;",
            "All text, written descriptions, copy, and editorial content;",
            "The design, layout, look and feel, and arrangement of the Site;",
            "The \"Flozo Media\" name, logo, brand, and any related marks, slogans, and visual identity; and",
            "Any other graphics, audio, software, and materials made available through the Site."
          ]
        },
        {
          "type": "paragraph",
          "text": "We grant you a limited, personal, non-exclusive, non-transferable, revocable license to access and view the Site and its content for your own personal, non-commercial purposes of evaluating Flozo Media and our work. This license does not give you any ownership of the content."
        },
        {
          "type": "paragraph",
          "text": "Except as expressly permitted by this license or by applicable law, you may not copy, reproduce, download, republish, distribute, display, perform, modify, adapt, create derivative works from, frame, scrape, sell, or otherwise exploit any of the Site's content, in whole or in part, without our prior written permission. Our photographs, brand assets, and other Site materials are the result of our work, and reusing them without permission is prohibited. If you would like to use any of our content, please contact us at hello@flozomedia.com to request permission."
        }
      ]
    },
    {
      "heading": "5. User Submissions and Inquiries",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The Site allows you to contact us and submit inquiries, for example through our contact form. When you submit an inquiry, you may provide information such as your name, email address, and the content of your message (collectively, \"Submissions\")."
        },
        {
          "type": "paragraph",
          "text": "You are responsible for the accuracy and content of anything you submit. You agree that your Submissions will not be unlawful, infringing, defamatory, harassing, deceptive, or otherwise objectionable, and that you have the right to send us the information you provide."
        },
        {
          "type": "paragraph",
          "text": "By making a Submission, you grant Flozo Media a limited, non-exclusive, royalty-free license to use, store, copy, and process the contents of your Submission for the purpose of receiving, reviewing, and responding to your inquiry, communicating with you, and providing or discussing potential services. Where applicable law (such as the EU and UK GDPR) requires a legal basis for processing, we rely on your consent in submitting the inquiry and on our legitimate interest in responding to it and operating our company. We use the personal information in your Submission only for these purposes."
        },
        {
          "type": "paragraph",
          "text": "We do not sell or share your personal information, and we do not use it for cross-context behavioral advertising. We retain inquiry information only for as long as needed to respond to and follow up on your inquiry, to maintain ordinary business records, and to comply with our legal obligations, after which we delete or anonymize it. For full details on how we handle personal information, the legal bases we rely on, how long we keep data, and the privacy rights available to you, please review our Privacy Policy at https://flozomedia.com/privacy."
        },
        {
          "type": "paragraph",
          "text": "Please do not send us confidential, sensitive, or proprietary information through the contact form or other unsecured channels. Any unsolicited ideas, concepts, or creative suggestions you choose to send us are sent at your own risk, and we are under no obligation to keep them confidential or to refrain from using similar ideas that we develop independently."
        }
      ]
    },
    {
      "heading": "6. Acceptable Use and Prohibited Conduct",
      "blocks": [
        {
          "type": "paragraph",
          "text": "You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree that you will not:"
        },
        {
          "type": "bullets",
          "items": [
            "Use the Site in any way that violates any applicable federal, state, local, or international law or regulation;",
            "Copy, scrape, harvest, or collect content or data from the Site for any unauthorized purpose, including by using automated means such as bots, crawlers, or data-mining tools without our permission;",
            "Reproduce, distribute, or otherwise reuse our photographs, brand, or other content in violation of Section 4;",
            "Attempt to gain unauthorized access to, interfere with, damage, or disrupt the Site, the servers or networks on which it is hosted, or any security or authentication measures;",
            "Introduce any viruses, malware, or other malicious or technologically harmful material;",
            "Use the Site to transmit unsolicited or unauthorized advertising, spam, or other commercial solicitations;",
            "Impersonate or attempt to impersonate Flozo Media, our staff, or any other person or entity, or misrepresent your affiliation with any person or entity; or",
            "Use the Site in any manner that could disable, overburden, damage, or impair it, or interfere with any other party's use of the Site."
          ]
        }
      ]
    },
    {
      "heading": "7. Third-Party Links and Embedded Content",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The Site may contain links to third-party websites and may display media embedded from third-party platforms, including video and content embedded from YouTube, Instagram, and TikTok. These links and embeds are provided for your convenience and to showcase our work and presence on those platforms."
        },
        {
          "type": "paragraph",
          "text": "When you interact with embedded third-party media or follow a link to a third-party site, those third parties may set their own cookies and collect information about you in accordance with their own terms and privacy policies. We do not control these third-party platforms and are not responsible for their content, practices, cookies, or how they handle your information. The inclusion of any link or embedded content does not imply our endorsement of the third party. We encourage you to review the terms and privacy policies of any third-party platform you interact with. More information about embedded content and cookies is available in our Privacy Policy at https://flozomedia.com/privacy."
        }
      ]
    },
    {
      "heading": "8. Cookies and Analytics",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We use a limited number of cookies and similar technologies to enable basic site functionality and to gather privacy-friendly, aggregated web analytics that help us understand how visitors use the Site. The embedded third-party media described in Section 7 may also set their own cookies when you interact with it."
        },
        {
          "type": "paragraph",
          "text": "Where required by applicable law (such as the ePrivacy rules and GDPR in the EU and UK), we will request your consent before setting non-essential cookies, and you may withdraw that consent at any time. You can also control or disable cookies through your browser settings, although doing so may affect how parts of the Site function."
        },
        {
          "type": "paragraph",
          "text": "We do not sell or share personal information for cross-context behavioral advertising, we do not operate advertising networks, and we do not use cookies to build advertising profiles. For a full description of the cookies and similar technologies we use and your choices, please see our Privacy Policy at https://flozomedia.com/privacy."
        }
      ]
    },
    {
      "heading": "9. Your Privacy Rights",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Depending on where you live, you may have rights regarding your personal information. California residents have rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (CCPA/CPRA), including the right to know, the right to access, the right to delete, the right to correct, and the right not to receive discriminatory treatment for exercising these rights. Because we do not sell or share personal information for cross-context behavioral advertising and do not use sensitive personal information for inferring characteristics, there is no \"Do Not Sell or Share My Personal Information\" sale to opt out of."
        },
        {
          "type": "paragraph",
          "text": "Individuals in the European Economic Area, the United Kingdom, and other jurisdictions with comparable laws may have rights to access, rectify, erase, restrict, or object to the processing of their personal information, to data portability, and to withdraw consent at any time, as well as the right to lodge a complaint with a supervisory authority."
        },
        {
          "type": "paragraph",
          "text": "To exercise any of these rights, or to ask questions about how we handle your information, please contact us at hello@flozomedia.com or review our Privacy Policy at https://flozomedia.com/privacy, which explains these rights and how to exercise them in more detail. We will not discriminate against you for exercising any of your privacy rights."
        }
      ]
    },
    {
      "heading": "10. Disclaimer of Warranties",
      "blocks": [
        {
          "type": "paragraph",
          "text": "THE SITE AND ALL CONTENT, MATERIALS, AND INFORMATION ON IT ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, LASER WELD INC. DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT."
        },
        {
          "type": "paragraph",
          "text": "We do not warrant that the Site will be uninterrupted, secure, error-free, or free of viruses or other harmful components, or that any defects will be corrected. We do not warrant the accuracy, completeness, reliability, or timeliness of any content on the Site. Any reliance you place on the Site or its content is at your own risk. Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you, and you may have additional rights under your local law that these Terms do not affect."
        }
      ]
    },
    {
      "heading": "11. Limitation of Liability",
      "blocks": [
        {
          "type": "paragraph",
          "text": "TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL LASER WELD INC. OR ITS OWNERS, EMPLOYEES, CONTRACTORS, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES."
        },
        {
          "type": "paragraph",
          "text": "TO THE FULLEST EXTENT PERMITTED BY LAW, OUR TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SITE WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US$100)."
        },
        {
          "type": "paragraph",
          "text": "Nothing in these Terms excludes or limits our liability where it would be unlawful to do so. This includes liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, for gross negligence or willful misconduct, and for any other liability that cannot be excluded or limited under applicable law, including non-waivable rights you may have as a consumer. Some jurisdictions do not allow the limitation or exclusion of liability for certain damages, so some of the above limitations may not apply to you."
        }
      ]
    },
    {
      "heading": "12. Indemnification",
      "blocks": [
        {
          "type": "paragraph",
          "text": "To the fullest extent permitted by applicable law, you agree to indemnify, defend, and hold harmless Flozo Media and its owners, employees, contractors, and agents from and against any and all third-party claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to your misuse of the Site, your Submissions, your violation of these Terms, or your violation of any rights of any third party, including any intellectual property or privacy rights. This obligation does not apply to the extent a claim arises from our own negligence or willful misconduct, and it does not limit any non-waivable rights you may have under applicable consumer protection law."
        }
      ]
    },
    {
      "heading": "13. Governing Law and Venue",
      "blocks": [
        {
          "type": "paragraph",
          "text": "These Terms and any dispute arising out of or relating to them or to the Site are governed by and construed in accordance with the laws of the State of Washington, United States, without regard to its conflict-of-laws principles. You agree that any legal action or proceeding arising out of or relating to these Terms or the Site will be brought exclusively in the state or federal courts located in the State of Washington, and you consent to the personal jurisdiction of and venue in those courts."
        },
        {
          "type": "paragraph",
          "text": "If you are a consumer residing in a jurisdiction (such as a country in the European Economic Area or the United Kingdom) whose laws guarantee you the protection of mandatory provisions or the right to bring proceedings in your place of residence, nothing in this section deprives you of those protections, and you retain the benefit of any mandatory consumer protection rules that apply to you."
        }
      ]
    },
    {
      "heading": "14. Dispute Resolution",
      "blocks": [
        {
          "type": "paragraph",
          "text": "If you have a concern or dispute relating to these Terms or the Site, we ask that you first contact us at hello@flozomedia.com so that we can try to resolve the matter informally. We will make a good-faith effort to address your concern. Nothing in this section limits your right to pursue any remedy available to you under applicable law, including the right of consumers to bring a claim before a competent court or, where available, an alternative dispute resolution body."
        }
      ]
    },
    {
      "heading": "15. Changes to These Terms",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We may update or revise these Terms from time to time. When we do, we will revise the \"Last Updated\" date shown below. Any changes are effective when posted on the Site. For material changes, we will take reasonable steps to make the update more noticeable, such as posting a notice on the Site. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically."
        }
      ]
    },
    {
      "heading": "16. Termination of Access",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We may suspend or terminate your access to all or part of the Site at any time, with or without notice or cause, including if we believe you have violated these Terms. Upon termination, the licenses granted to you under these Terms will end, and you must stop using the Site. The provisions of these Terms that by their nature should survive termination, including those concerning intellectual property, Submissions, privacy, disclaimers, limitation of liability, indemnification, governing law, and dispute resolution, will survive."
        }
      ]
    },
    {
      "heading": "17. Severability",
      "blocks": [
        {
          "type": "paragraph",
          "text": "If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision will be modified or severed to the minimum extent necessary, and the remaining provisions will continue in full force and effect."
        }
      ]
    },
    {
      "heading": "18. Entire Agreement",
      "blocks": [
        {
          "type": "paragraph",
          "text": "These Terms, together with our Privacy Policy at https://flozomedia.com/privacy, any separate written agreements governing specific engagements, and any other policies we post on the Site, constitute the entire agreement between you and Flozo Media regarding your use of the Site, and supersede all prior or contemporaneous understandings and agreements relating to that subject matter. Our failure to enforce any provision of these Terms will not be deemed a waiver of that provision or of any other provision."
        }
      ]
    },
    {
      "heading": "19. Contact Information",
      "blocks": [
        {
          "type": "paragraph",
          "text": "If you have any questions about these Terms or the Site, if you would like to exercise a privacy right, or if you would like to request permission to use any of our content, please contact us:"
        },
        {
          "type": "bullets",
          "items": [
            "Flozo Media",
            "Email: hello@flozomedia.com",
            "Website: https://flozomedia.com",
            "Privacy Policy: https://flozomedia.com/privacy",
            "Location: Redmond, Washington, United States"
          ]
        },
        {
          "type": "paragraph",
          "text": "Last Updated: August 29, 2026"
        }
      ]
    }
  ]
};
