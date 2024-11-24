<template lang="pug">
div#privacy-policy(class="flex flex-col h-1/5 w-full justify-center items-center ")

    div#header(class="flex w-full h-64 justify-around mb-4 bg-[#Fcf2ec] items-center text-black")

        div(class='flex flex-col justify-around h-2/4 mt-8')
            h1(class='text-6xl font-semibold') PRIVACY POLICY
            h2 Our Privacy Policy
        div(class="flex justify-center w-1/6 space-x-2 mt-6 text-sm")
            nuxt-link(:to='{name: "index"}') HOME
            p ->
            nuxt-link(:to='{name: "privacy"}') PRIVACY POLICY


    div#privacy-policy-content(class='mt-28 w-3/4 flex flex-col space-y-8')
        div#last-updated(class='flex flex-col ')
            h3.privacy-title Last updated: June 22, 2023
            div.privacy-content
                p This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected in FreshAndTidy.

                p This policy is not applicable to any information collected offline or via channels other than this website.

        div#Consent(class='privacy-container')
            h3.privacy-title Consent
            div.privacy-content
                p By using our website, you hereby consent to our Privacy Policy and agree to its terms.

                p FreshAndTidy team built the Chrome extension as a commercial app. This SERVICE is provided by Next Ideas and is intended for use as is.

                p This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.

                p If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.

                p The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at FreshAndTidy, unless otherwise defined in this Privacy Policy.

        div#information-we-collect(class='privacy-container')
            h3.privacy-title Information we collect
            div.privacy-content
                p The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

                p If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

                p When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number, cookies, and usage data.

        div#how-we-use-information(class='privacy-container')
            h3.privacy-title How we use your information
            div(class='mt-8 space-y-1 ')
                p We use the information we collect in various ways, including:

                p * Provide, operate, and maintain our website
                p * Improve, personalize, and expand our website
                p * Understand and analyze how you use our website
                p * Develop new products, services, features, and functionality
                p * Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
                p * Send you emails
                p * Find and prevent fraud
                p * We use cookies to keep users logged into the extension without issues.
                p * We use Google Spreadsheet API to add data of your tags to your specified Google Sheet
                p * We use Google Calendar API to add events to your Google Calendar without leaving the FreshAndTidy extension.


        div#log-files(class='privacy-container')
            h3.privacy-title Log Files
            div.privacy-content
                p FreshAndTidy follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.

        div#cookies-and-web-beacons(class='privacy-container')
            h3.privacy-title Cookies and Web Beacons
            div.privacy-content
                p Like any other website, FreshAndTidy uses 'cookies' and 'sessionStorage'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.

                p For more general information on cookies, please read "What Are Cookies" from Cookie Consent.

        div#advertising(class='privacy-container')
            h3.privacy-title Advertising Partners Privacy Policies
            div.privacy-content
                p You may consult this list to find the Privacy Policy for each of the advertising partners of FreshAndTidy. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on FreshAndTidy, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

                p Note that FreshAndTidy has no access to or control over these cookies that are used by third-party advertisers.


        div#third-party-privacy-policies(class='privacy-container')
            h3.privacy-title Third-Party Privacy Policies
            div.privacy-content
                p FreshAndTidy's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

                p You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.

        div#security(class='privacy-container')
            h3.privacy-title Security
            div.privacy-content
                p We value your trust in providing us your Personal Information; thus, we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.

        div#ccpa(class='privacy-container')
            h3.privacy-title CCPA Privacy Rights (Do Not Sell My Personal Information)
            div.privacy-content
                p Under the CCPA, among other rights, California consumers have the right to:

                p Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.

                p Request that a business deletes any personal data about the consumer that a business has collected.

                p Request that a business that sells a consumer's personal data, not sell the consumer's personal data.

                p If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

        div#gdpr(class='privacy-container')
            h3.privacy-title GDPR Data Protection Rights
            div.privacy-content
                p We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:

                p The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.

                p The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.

                p The right to erasure – You have the right to request that we erase your personal data, under certain conditions.

                p The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.

                p The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.

                p The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.

                p If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

        div#childrens-information(class='privacy-container')
            h3.privacy-title Children's Information
            div.privacy-content
                p Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

                p FreshAndTidy does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately, and we will do our best efforts to promptly remove such information from our records.

        div#changes(class='privacy-container')
            h3.privacy-title Changes to this Privacy Policy
            div.privacy-content
                p We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

                p We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.

                p You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

        div#contact(class='privacy-container mb-24')
            h3.privacy-title Contact
            div.privacy-content
                p If you have any questions about our Privacy Policy, please contact us via alexispace@freshandtidy.nl

</template>

<script setup lang="ts"></script>

<style lang="scss">
.privacy-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.privacy-content {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
}
</style>
