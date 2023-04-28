import React, { useState } from "react";
import Header from "../../components/Header/index2";
import Footer from "../../components/Footer";
import Head from "next/head";

const TermsOfService = () => {

    const [state, setstate] = useState({
        isActive: true,
        isActive2: false
    });

    const changeState=(val)=>{
        setstate({
            isActive: val,
            isActive2: !val
        })
    }

    const changeState2 = (val)=> {
        setstate({
            isActive: !val,
            isActive2: val
        })
    }

        const {isActive, isActive2} = state;
        return (
            <>
                <Head>
                    <title>OnTheCase | Terms Of Service</title>
                    <meta property="keywords"
                          content="Private investigator,Investigations,PI services,Private investigation,Investigator,Detective services,Background check,Infidelity investigations,Surveillance,Skip tracing,Asset search,Corporate investigation,Investigative services,Criminal investigation,Locate missing persons,Process serving,Legal investigation,Fraud investigation,Insurance investigation,Investigative agency,Private investigator case management software,Investigation case management software,PI case management system,Investigation management software,Case management for private investigators,Investigator case management tool,Private investigation case management,Digital case management for investigators,PI case management software solutions,Case tracking software for private investigators"></meta>
                </Head>
                <Header/>
                <section className='grid-container termsOfService'>
                    <h5 className='heading'><strong><u>TERMS OF SERVICE</u></strong></h5>
                    <div className="accordions">
                        <div className="accordions-item">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className={isActive ? "accordions-title isActive" : "accordions-title"}
                                                 onClick={() => changeState(!isActive)}>
                                                <div><strong>ONTHECASE WEBSITE TERMS AND CONDITIONS</strong></div>
                                                <div>{isActive ? '-' : '+'}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={isActive2 ? "accordions-title isActive" : "accordions-title"}
                                                 onClick={() => changeState2(!isActive2)}>
                                                <div><strong>ONTHECASE TERMS OF SERVICE</strong></div>
                                                <div>{isActive2 ? '-' : '+'}</div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                            {isActive && <div className="accordions-content">

                                <p>Effective from: December 22, 2022</p>

                                <p>PLEASE READ THIS USER AGREEMENT AND ALL OTHER AGREEMENTS AND POLICIES REFERENCED
                                    HEREIN COLLECTIVELY DEFINED BELOW AS THE "TERMS OF USE" CAREFULLY AS THEY CONTAIN
                                    IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS. THESE
                                    INCLUDE VARIOUS LIMITATIONS AND EXCLUSIONS.</p>

                                <p>This User Agreement (this “Agreement”) is a contract between you (“you” or “User”)
                                    Onthecase. (“Onthecase,” “we,” or “us”), to the extent expressly stated, you must
                                    read, agree to, and accept all of the terms and conditions contained in this
                                    Agreement.</p>

                                <p>You (website “user”) understand and recognize that Onthecase.io is not party to any
                                    agreement, contract or contractual relations, of any nature, entered into between
                                    the users of its website.</p>

                                <p>By visiting our site, you hereby agree to be bound by the following terms and
                                    conditions (“Terms of Use”, “Terms”), including those additional terms and
                                    conditions and policies referenced herein and/or available by hyperlink. These Terms
                                    of Use apply to all users of the site, including without limitation users who are
                                    browsers, vendors, customers, merchants, and/ or contributors of content.</p>

                                <p>YOU UNDERSTAND THAT BY USING THE SITE AFTER THE EFFECTIVE DATE, YOU AGREE TO BE BOUND
                                    BY THE TERMS AND CONDITIONS, IF YOU DO NOT ACCEPT THE TERMS AND CONDITIONS IN ITS
                                    ENTIRETY, YOU MUST NOT ACCESS OR USE THE SITE AFTER THE EFFECTIVE DATE EXCEPT AS
                                    PERMITTED BY THE SITE TERMS OF USE.</p>

                                <p>We reserve the right to update, change or replace any part of these Terms of Service
                                    by posting changes and/or updates to our website. It is your sole responsibility to
                                    check this page periodically for changes. Your continued use of or access to the
                                    website following the posting of any updates constitutes acceptance of those
                                    changes.</p>

                                <h6><strong>About Us (“Onthecase”)?</strong></h6>
                                <p>OnTheCase is an Exclusive and powerful tool to help diagnose your imported case
                                    media.</p>

                                <h6><strong><u>SCOPE</u></strong></h6>
                                <p>These Terms are intended to supplement and not to replace any existing agreements
                                    between you and us regarding services offered.</p>

                                <p>Your use of the website is at user discretion and at your sole risk. Onthecase is not
                                    responsible for any harm that may result or arise out of use of the website.</p>

                                <h6><strong><u>GENERAL CONDITIONS</u></strong></h6>
                                <p>All rights to this Web Site, the content, information herein and other services and
                                    materials made available on this Web Site, including software application, copyright
                                    information and proprietary notices that may be provided, (collectively the
                                    "Materials") are proprietary to us, subsidiaries, or third parties from which we
                                    have gotten permission from and are protected by worldwide copyright laws as well as
                                    other intellectual property laws. All rights not expressly granted under these Terms
                                    and Conditions of Use are retained by us and such third parties or subsidiaries.</p>

                                <p>You understand that your content (not including credit card information), may be
                                    transferred unencrypted and involve (a) transmissions over various networks; and (b)
                                    changes to conform and adapt to technical requirements of connecting networks or
                                    devices. Credit card information is always encrypted during transfer over
                                    networks.</p>

                                <p>You may not in any way modify, delete, remove, augment, add to, transmit, publish,
                                    participate in the transfer or sale of, create derivative works from, or in any way
                                    exploit any of such Content, in whole or in part herein this website. If no specific
                                    restrictions are displayed, Users may make copies of select portions of the Content,
                                    provided that the copies are made only for User's personal use and that User
                                    maintains any notices contained in the Content, such as all copyright notices,
                                    trademark legends, or other proprietary rights notices. Except as provided in the
                                    preceding sentence or as permitted by the fair use privilege under the U.S.
                                    copyright laws. Users may not upload, post, reproduce, or distribute in any way
                                    Content protected by copyright, or other proprietary right, without obtaining
                                    permission of the owner of the copyright or other property right. In addition to the
                                    foregoing, use of any software Content shall be governed by these terms and any
                                    software license agreement accompanying such software.</p>

                                <h6><strong><u>LICENSE TO USE WEBSITE</u></strong></h6>
                                <p>Binding by this Agreement, you agree to abide by the granted access in exploring and
                                    accessing information from this website. Unless otherwise stated, we own the
                                    intellectual property rights herein this website and services provided on the
                                    website. Subject to the license below, all the intellectual property rights are
                                    reserved. You may download or print out on a single computer for your non-commercial
                                    internal use only, unless specifically licensed to do otherwise by us in writing or
                                    as allowed by any license terms which accompany or are provided with individual
                                    Materials. The above notwithstanding, if you are a commercial user of our products
                                    you may print out and use a reasonable number of copies of Materials related to our
                                    specific services solely in connection with your authorized use of such service.</p>

                                <p>You have permission to download the contents of this website to your local hard drive
                                    for your personal use. You also have permission to copy the content to an individual
                                    third party for their personal use provided that you acknowledge the source of the
                                    material as being this website and you inform the third party that they are bound by
                                    our terms and conditions.</p>

                                <h6><strong><u>OBLIGATIONS AND CONDUCT WHEN USING THE SITE</u></strong></h6>
                                <p>This website contains proprietary notices and copyright information, and by
                                    consenting to use this website, you agree to observe and abide by the following.</p>
                                <p>By using this website, you assume full responsibility for the protection of your
                                    computer system including but not limited to your computer software and hardware,
                                    stored data on your computer system and the stored data and computer systems
                                    included hardware and software of third parties who may access or be otherwise
                                    connected to your computer systems.</p>
                                <p>You will assume the responsibility of ensuring that programs or other data downloaded
                                    or otherwise received from this website are free from Viruses, Worms, Trojan horses
                                    or other items of a destructive nature.</p>
                                <p>By using this website, you accept not to attempt publishing, sending or uploading
                                    malicious contents onto the website with the intention of disrupting the website or
                                    compromising the website functionality.</p>

                                <h6><strong><u>DATA SECURITY POLICY</u></strong></h6>
                                <p>We take the appropriate and reasonable measures to ensure that data transported
                                    electronically to us through the website or otherwise and stored by us or otherwise
                                    is not accessed by an unauthorized third party/parties.</p>
                                <p>You accept the risk that data transmitted electronically to us via this website or
                                    otherwise may be intercepted before reaching us, or accessed from our data storage
                                    means by third parties' unauthorized by us, and may be exploited unlawfully by such
                                    unauthorized third parties. We do not assume responsibility for guarding against the
                                    access of such unauthorized third parties'.</p>
                                <h6><strong><u>VIRUSES AND OTHER COMPUTER MISUSE</u></strong></h6>
                                <p>We do not guarantee in a particular way that our website shall be entirely free or
                                    secured from bugs, viruses or other malicious contents. You are responsible for
                                    configuring your computer programs, gadgets, information technology, and platform to
                                    access our site. You are advised to always use your own virus protection
                                    software.</p>
                                <p>You also agree not to misuse our website by knowingly introducing viruses, Trojans,
                                    worms, logic bombs or other material that is malicious or technologically harmful.
                                    You must not attempt to gain unauthorized access to our site, the server on which
                                    our site is stored or any server, computer or database connected to our site. You
                                    must not attack our site via a denial-of-service attack or a distributed denial-of
                                    service attack. By breaching this provision, you would be construed to have
                                    committed a criminal offence under the Computer Misuse Act 1990. We will report any
                                    such breach to the relevant law enforcement authorities and we will co-operate with
                                    those authorities by disclosing your identity to them. In the event of such a
                                    breach, your right to use our site will cease immediately.</p>
                                <h6><strong><u>PRIVACY POLICY AND PERSONAL INFORMATION</u></strong></h6>
                                <p>Your privacy and personal information are important to us. Any personal information
                                    that you provide to us will be dealt with in line with our privacy policy, which
                                    explains what personal information we collect from you, how and why we collect,
                                    store, use and share such information, your rights in relation to your personal
                                    information and how to contact us and supervisory authorities in the event you have
                                    a query or complaint about the use of your personal information.</p>

                                <h6><strong><u>ERRORS, INACCURACIES AND OMISSIONS</u></strong></h6>
                                <p>Occasionally there may be information on our site or in the Service that contains
                                    typographical errors, inaccuracies or omissions that may relate to product
                                    descriptions, pricing, promotions, offers, product shipping charges, transit times
                                    and availability. We reserve the right to correct any errors, inaccuracies or
                                    omissions, and to change or update information or cancel orders if any information
                                    in the Service or on any related website is inaccurate at any time without prior
                                    notice (including after you have submitted your order).</p>
                                <p>We undertake no obligation to update, amend or clarify information in the Service or
                                    on any related website, including without limitation, pricing information, except as
                                    required by law. No specified update or refresh date applied in the Service or on
                                    any related website, should be taken to indicate that all information in the Service
                                    or on any related website has been modified or updated.</p>

                                <h6><strong><u>LINKS TO OTHER WEBSITE(S)</u></strong></h6>
                                <p>Certain content, products and services available via our Service may include
                                    materials from third-parties.</p>
                                <p>We make no endorsement or representations as to the security, accuracy, quality or
                                    property of any website which may be accessed through this website via links that
                                    may be provided on this website. Connected websites accessed through this site are
                                    owned and operated by third parties over which we do not exercise any control,
                                    whether editorial, legal or of any other kind and are not in any way endorsed by
                                    us.</p>
                                <p>We are not liable for any harm or damages related to the purchase or use of goods,
                                    services, resources, content, or any other transactions made in connection with any
                                    third-party websites. Please review carefully the third-party's policies and
                                    practices and make sure you understand them before you engage in any transaction.
                                    Complaints, claims, concerns, or questions regarding third-party products should be
                                    directed to the third-party.</p>

                                <h6><strong><u>USER GENERATED CONTENTS</u></strong></h6>
                                <p>In these terms and conditions of use, “User Generated Content” means any material
                                    (including without limitation to text, video material, audio material, and
                                    audio-visual material, feedbacks, suggestions) that you upload/submit to this Web
                                    Site for review by the public, by us or for whatever purpose.</p>

                                <p>Please be aware that user generated contents shall be considered non-confidential and
                                    non-proprietary; and that by posting, inputting, uploading, sharing, providing or
                                    otherwise submitting any user communications to this website you understand and
                                    agree that you grant us a worldwide, non-exclusive, irrevocable, royalty-free
                                    license to reproduce, use, publish, distribute and translate such user generated
                                    content in any existing or future media.</p>
                                <p>You also grant us the right to sub-license these rights, and the right to bring an
                                    action for infringement of these rights.</p>
                                <p>You warrant and represent that you own or otherwise control all of the rights to the
                                    contents that you provide onto the web site and that such content must not be
                                    unlawful, illegal, must not infringe on any third party legal rights, and must not
                                    have the capacity of bringing about any legal action; whether against you or us.</p>
                                <p>We shall have no obligation to monitor the contents provided by the website users,
                                    nor shall we have an obligation to remove any User Generated content that you have
                                    opted to input and share on our website. However, we have the exclusive right to
                                    review any material posted to the website and to remove any materials at its sole
                                    discretion.</p>
                                <p>We reserve the right at all times to disclose any information necessary to satisfy
                                    any applicable law, regulation, legal process or governmental request, or to edit,
                                    refuse to post or to remove any User Communications or other materials, in whole or
                                    in part, at our sole discretion.</p>
                                <p>We do not control or endorse the content, messages or information found in any User
                                    Generated section and, therefore, we specifically disclaim any liability with regard
                                    to them and any actions resulting from what you do with any of such content.</p>

                                <h6><strong><u>OPERATION, AVAILABILITY AND FUNCTIONALITIES OF THE WEBSITE</u></strong>
                                </h6>
                                <p>We shall try as far as possible to maintain the website accessible 7 days a week and
                                    24 hours a day. Nevertheless, access to the website may be temporarily suspended,
                                    without notice, owing to technical maintenance, migration or update operations, or
                                    owing to outages or constraints linked to the operation of the network. Furthermore,
                                    we reserve the right to modify or suspend all or part of access to the website or
                                    its functionalities, at its sole discretion, temporarily or permanently.</p>

                                <h6><strong><u>GENERAL DISCLAIMER AND LIMITATION OF LIABILITY</u></strong></h6>
                                <p>Although we have attempted to provide accurate information on this Site, we assume no
                                    responsibility for the validity, accuracy and usefulness of the information or
                                    Materials; nor do we warrant that the information or Materials are up to date; or
                                    that this Web Site shall be available at any particular time or in any given
                                    location; that any defects or errors will be corrected; or that the Materials are
                                    free of viruses or other harmful components. Your use of this Web Site is at your
                                    own sole risk.</p>
                                <p>ALL INFORMATION AND MATERIALS PROVIDED ON THIS WEB SITE ARE PROVIDED "AS IS" WITH ALL
                                    FAULTS AND WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING
                                    WARRANTIES OF MERCHANTIBLITY, SATISFACTORY QUALITY, NON INFRINGEMENT OF INTELLECTUAL
                                    PROPERTY, OR FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT SHALL WE BE LIABLE FOR
                                    ANY DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, OR INCIDENTAL DAMAGES (INCLUDING,
                                    WITHOUT LIMITATION, LOST PROFITS OR REVENUES, BUSINESS INTERRUPTION, COSTS OF
                                    REPLACEMENT GOODS, LOSS OR DAMAGE TO DATA ARISING OUT OF THE USE OR INABILITY TO USE
                                    THIS SITE OR ANY CELTHRIC PRODUCT OR SERVICE, DAMAGES RESULTING FROM USE OF OR
                                    RELIANCE ON THE INFORMATION PRESENT, EVEN IF CELTHRIC HAVE BEEN ADVISED OF THE
                                    POSSIBILITY OF SUCH DAMAGES. BECAUSE SOME JURISDICTIONS PROHIBIT THE EXCLUSION OR
                                    LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE
                                    LIMITATION MAY NOT APPLY TO YOU.</p>

                                <h6><strong><u>INDEMNIFICATION</u></strong></h6>
                                <p>UPON A REQUEST BY US, YOU AGREE TO DEFEND, INDEMNIFY, AND HOLD HARMLESS ONTHECASE AND
                                    ITS AFFILIATES, AGENTS, OR OTHER BUSINESS PARTNERS, AND ITS AND THEIR EMPLOYEES,
                                    CONTRACTORS, OFFICERS, AND DIRECTORS FROM ALL LIABILITIES, CLAIMS, AND EXPENSES,
                                    INCLUDING ATTORNEY'S FEES THAT ARISE FROM YOUR USE OR MISUSE OF THIS SITE. ONTHECASE
                                    RESERVES THE RIGHT, AT IT OWN EXPENSE, TO ASSUME THE EXCLUSIVE DEFENSE AND CONTROL
                                    OF ANY MATTER OTHERWISE SUBJECT TO INDEMNIFICATION BY YOU, IN WHICH EVENT YOU AGREE
                                    TO COOPERATE WITH ONTHECASE IN ASSERTING ANY AVAILABLE DEFENSES.</p>

                                <h6><strong><u>SEVERABILITY</u></strong></h6>
                                <p>IN THE EVENT THAT ANY PROVISION OF THESE TERMS OF SERVICE IS DETERMINED TO BE
                                    UNLAWFUL, VOID OR UNENFORCEABLE, SUCH PROVISION SHALL NONETHELESS BE ENFORCEABLE TO
                                    THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, AND THE UNENFORCEABLE PORTION SHALL
                                    BE DEEMED TO BE SEVERED FROM THESE TERMS OF SERVICE, SUCH DETERMINATION SHALL NOT
                                    AFFECT THE VALIDITY AND ENFORCEABILITY OF ANY OTHER REMAINING PROVISIONS.</p>

                                <h6><strong><u>TERMINATION</u></strong></h6>
                                <p>The obligations and liabilities of the parties incurred prior to the termination date
                                    shall survive the termination of this agreement for all purposes.</p>
                                <p>These Terms of Service are effective unless and until terminated by either you or us.
                                    You may terminate these Terms of Service at any time by notifying us that you no
                                    longer wish to use our Services, or when you cease using our site.</p>
                                <p>If in our sole judgment you fail, or we suspect that you have failed, to comply with
                                    any term or provision of these Terms of Service, we also may terminate this
                                    agreement at any time without notice and you will remain liable for all amounts due
                                    up to and including the date of termination; and/or accordingly may deny you access
                                    to our Services (or any part thereof).</p>

                                <h6><strong><u>GENERAL PROVISIONS</u></strong></h6>
                                <p>Except as otherwise specified herein, these Terms and Conditions of Use constitute
                                    the entire agreement between you and us with respect to your use of this Web Site
                                    and supersedes all prior communications and proposals (whether oral, written, or
                                    electronic) between you and us with respect to use of this Web Site. Any rights not
                                    otherwise expressly granted by this Agreement are reserved by us.</p>
                                <p>Our failure to exercise or enforce any right or provision of the Terms and Conditions
                                    of Use shall not constitute a waiver of such right or provision.</p>
                                <p>If any part of these Terms and Conditions of Use is held invalid or unenforceable, by
                                    a court of competent jurisdiction, that portion shall be construed in a manner
                                    consistent with applicable law to reflect, as nearly as possible, the original
                                    intentions of the parties, and the remaining portions shall remain in full force and
                                    effect.</p>

                                <h6><strong><u>CHOICE OF LAW</u></strong></h6>
                                <p>These Terms of Use shall be governed by and construed in accordance with the
                                    applicable United States federal law, without reference to "conflicts of laws"
                                    provisions or principles.</p>

                                <h6><strong><u>CHANGE IN POLICY</u></strong></h6>
                                <p>Please note that we reserve the right to update and change these Terms and Conditions
                                    of Use from time to time at our sole discretion. Please check the Terms and
                                    Conditions of Use periodically for changes. Your continued use of this Web Site
                                    following the posting of any changes to the Terms and Conditions of Use will confirm
                                    your acceptance of those changes. In the case of any violation of these Terms and
                                    Conditions of Use, we reserve the right to seek all remedies available in law and
                                    equity for such violations.</p>

                                <p>If you have any questions regarding the Terms and condition of use, please contact
                                    us.</p>

                            </div>}
                            {isActive2 && <div className="accordions-content">

                                <p>Effective Date: December 22, 2022</p>

                                <p>Welcome to OnTheCase.io. Please read these Terms of Service carefully before
                                    accessing or using our website.</p>

                                <p>Thanks for visiting OnTheCase.io (hereinafter “We”, “Our”, or “Us”). When You ("You"
                                    individually or the entity that You represent) use Our website (the "Site") or the
                                    OnTheCase.io including all information, tools and services available from this site
                                    to you, the user, conditioned upon your acceptance of all terms, conditions,
                                    policies and notices stated here (collectively, the "Service"), You are agreeing to
                                    Our Terms of Service (the "Agreement") below.</p>

                                <p>By visiting our site, you engage in our “Service” and agree to be bound by the terms
                                    and conditions (“Terms of Service”,” Terms”), including those additional terms and
                                    conditions and policies referenced herein and/or available by hyperlink.</p>

                                <p>The terms herein applies to all users of our website, including but without
                                    limitation to users who are customers, merchants, regular browsers and/or user
                                    generated content contributors. </p>

                                <p>We reserve the right to update, change or replace any part of these Terms of Service
                                    by posting changes and/or updates to our website. It is your sole responsibility to
                                    check this page periodically for changes. Your continued use of or access to the
                                    website following the posting of any updates constitutes acceptance of those
                                    changes.</p>

                                <p>When using the service provided herein or opening an account with OnTheCase on behalf
                                    of a company, entity, or organization (collectively, “Organization”), you represent
                                    and warrant that you: (i) are an authorized representative of that Organization with
                                    the authority to bind that organization to these Terms of Service and grant the
                                    licenses set forth herein; and (ii) agree to these Terms of Service on behalf of
                                    such Subscribing Organization.</p>

                                <h6><strong>About Us (“OnTheCase.”)?</strong></h6>
                                <p>OnTheCase is an Exclusive and powerful tool to help diagnose your imported case
                                    media.</p>

                                <h6><strong><u>SCOPE</u></strong></h6>
                                <p>These Terms are intended to supplement and not to replace any existing agreements
                                    between you and us regarding services offered.</p>

                                <p>Your use of the website is at user discretion and at your sole risk. OnTheCase is not
                                    responsible for any harm that may result or arise out of use of the website.</p>

                                <h6><strong>1. <u>REGISTRATION</u></strong></h6>

                                <p>a. <u>Account and Password</u></p>
                                <p>In order to have access to our service, you are required to register for an account
                                    on the Site, you hereby agree to (1) provide us with true, accurate, current, and
                                    complete information about Yourself as requested on the registration form
                                    ("Registration Data"), and (2) maintain and promptly update the Registration Data to
                                    keep it true, accurate, current and complete. </p>

                                <p>You are solely responsible for all activities that occur under Your account whether
                                    performed by You or a third party. If You provide any Content ("Content" this means
                                    any personal identifiable information that You post, transmit, or submit through Our
                                    Service) that is untrue, inaccurate, not current, or incomplete, we have the right
                                    to suspect that such Content is untrue, inaccurate, not current, or incomplete,
                                    OnTheCase.net has the right to suspend or terminate Your account and refuse any and
                                    all current or future use of the Site and/or Service. </p>

                                <p>You hereby agree not to create an account using a false identity or information, or
                                    on behalf of somebody other than Yourself, or have more than one account. You agree
                                    not to create an account or use the Site or Service if Your account has been
                                    previously suspended by OnTheCase.net, or if You have been previously banned from
                                    the Site or Service.</p>

                                <p>You are solely responsible for maintaining the confidentiality of your account, your
                                    password and for restricting access to your computer. If you permit others to use
                                    your account credentials, you agree to these Terms of Service on behalf of all other
                                    persons who use the Services under your account or password, and you are responsible
                                    for all activities that occur under your account or password. Please make sure the
                                    information you provide to us upon registration and at all other times is true,
                                    accurate, current, and complete to the best of your knowledge.</p>

                                <p>b. <u>Use of Devices and Services</u></p>
                                <p>Access to the Services may require the use of your personal computer or mobile
                                    device, as well as communications with or use of space on such devices. You are
                                    responsible for any Internet connection or mobile fees and charges that you incur
                                    when accessing our Services.</p>

                                <h6><strong>2. <u>OnTheCase OBLIGATION</u></strong></h6>

                                <p>a. <u>Description of Service</u></p>
                                <p>We have provided this service for you to have the opportunity to Automate your
                                    day-to-day tasks. Generating reports, researching subjects, client invoice and
                                    payments, surveillance, chat, calendar and more for you as a Private Investigator,
                                    Agency, or company.</p>

                                <p>b. <u>Agency/Company/ Private Investigator Registration</u></p>
                                <p>In order for you to also have access to OnTheCase.io service as an Agency or Company
                                    you must register and create an account. When registering We may ask You for
                                    additional information related to Your Agency/company. We will review the
                                    information that You provided to us during the registration process and any other
                                    information that is publicly available. We reserve the right, in Our sole
                                    discretion, to accept or reject Your registration to use Our Site and Service.</p>

                                <p>c. <u>Provision of Access</u></p>
                                <p>Subject to applicable terms and conditions of this Agreement, OnTheCase hereby grant
                                    you a revocable, non-exclusive, non-transferable, non-sublicensable, limited right
                                    to access and use the services during the Term solely for business operations in
                                    accordance with the terms and conditions herein. </p>

                                <p>OnTheCase will be entitled, at any time at reason best known to us, to modify the
                                    services and/or some of the functionality, content of the services without prior
                                    notice as much as such modification does not materially and adversely reduce the
                                    functionality of the services.</p>

                                <p>d. <u>Use Restriction</u></p>
                                <p>You hereby agree not to, or permit any employees, consultants, contractors, users,
                                    end-users, and agents of the company to, use the services, any software component of
                                    the services, or Data provided for any purposes other than the scope of the access
                                    granted herein this Agreement. Furthermore, you hereby agree not to, or permit any
                                    employees, consultants, contractors, users, end-users, and agents of the company to
                                    at any time, directly or indirectly, (i) copy, modify, or create derivative works of
                                    the Services, any software component of the Services, or Data, in whole or in part;
                                    (ii) rent, lease, lend, sell, license, sublicense, assign, distribute, publish,
                                    transfer, or otherwise make available the Services or Data except as expressly
                                    permitted under this Agreement; (iii) reverse engineer, disassemble, decompile,
                                    decode, adapt, or otherwise attempt to derive or gain access to any software
                                    component of the Services, in whole or in part; (iv) remove any proprietary notices
                                    from the Services or Data Provided; (v) use the Services or Data provided in any
                                    manner or for any purpose that infringes, misappropriates, or otherwise violates any
                                    intellectual property right or other right of any person, or that violates any
                                    applicable law, regulation, or rule; or (vi) use the Services in a manner that
                                    violates any local, state, or federal law or regulation.</p>

                                <p>e. <u>Reservation of Rights</u></p>
                                <p>OnTheCase reserves all rights not expressly granted to Agency/company in this
                                    Agreement. Except for the limited right and licenses expressly granted under this
                                    Agreement, nothing in this Agreement grants, by implication, waiver, estoppel, or
                                    otherwise, to Agency/company, Private Investigators, or any third-party any
                                    intellectual property rights or other right, title, or interest in or to the
                                    OnTheCase IP.</p>

                                <p>f. <u>Suspension</u></p>
                                <p>Notwithstanding anything to the contrary in this Agreement, OnTheCase may temporarily
                                    suspend your access to any portion or all of the Services to perform scheduled
                                    maintenance or to stop a violation of Paragraph 2(d) (Use Restrictions) to prevent
                                    material harm to Us or Users as required by applicable law. </p>

                                <p>OnTheCase will from time-to-time use reasonable efforts to provide prior notice of
                                    any limitation or suspension of account so as to allow you to plan ahead of time.
                                    There may be some circumstances, such as security emergencies, where it is not
                                    possible for Us to provide you with a prior notice. We will ensure we provide you
                                    with commercially reasonable efforts to narrow the scope and duration of the
                                    limitation or suspension as is needed to resolve the issue that prompted Us to such
                                    action.</p>

                                <h6><strong>3. <u>PRIVATE INVESTIGATOR OBLIGATION</u></strong></h6>

                                <p>a. <u>Private Investigator Description of Service</u></p>
                                <p>We have provided this service for you to have the opportunity to Automate your
                                    day-to-day tasks. Generating reports, researching subjects, client invoice and
                                    payments, surveillance, chat, calendar and more for you as a Private Investigator,
                                    Agency, or company.</p>

                                <p>b. <u>Private Investigator Registration</u></p>
                                <p>In order for you to also have access to OnTheCase.io service as a private
                                    Investigator you must register and create an account. When registering with
                                    OnTheCase.io, We may require You to provide us information such as Your full name,
                                    e-mail address, Investigator License /Agency License.</p>

                                <p>We will review the information that You provided to us during the registration
                                    process and any other information that is publicly available. We reserve the right,
                                    in Our sole discretion, to accept or reject Your registration to use Our Site and
                                    Service.</p>

                                <h6><strong>4. <u>YOUR RESPONSIBILITIES</u></strong></h6>

                                <p>a. <u>Acceptable Use Policy</u></p>
                                <p>This website contains proprietary notices and copyright information, and by
                                    consenting to use this website, you agree to observe and abide by the following.</p>

                                <p>By using this website, you assume full responsibility for the protection of your
                                    computer system including but not limited to your computer software and hardware,
                                    stored data on your computer system and the stored data and computer systems
                                    included hardware and software of third parties who may access or be otherwise
                                    connected to your computer systems.</p>

                                <p>You will assume the responsibility of ensuring that programs or other data downloaded
                                    or otherwise received from this website are free from Viruses, Worms, Trojan horses
                                    or other items of a destructive nature.</p>

                                <p>By using this website, you accept not to attempt publishing, sending or uploading
                                    malicious contents onto the website with the intention of disrupting the website or
                                    compromising the website functionality.</p>

                                <h6><strong>5. <u>DATA SECURITY POLICY</u></strong></h6>
                                <p>We take the appropriate and reasonable measures to ensure that data transported
                                    electronically to us through the website or otherwise and stored by us or otherwise
                                    is not accessed by an unauthorized third party/parties.</p>

                                <p>You accept the risk that data transmitted electronically to us via this website or
                                    otherwise may be intercepted before reaching us, or accessed from our data storage
                                    means by third parties' unauthorized by us, and may be exploited unlawfully by such
                                    unauthorized third parties. We do not assume responsibility for guarding against the
                                    access of such unauthorized third parties'. </p>

                                <h6><strong>6. <u>VIRUSES AND OTHER COMPUTER MISUSE</u></strong></h6>
                                <p>We do not guarantee in a particular way that our website shall be entirely free or
                                    secured from bugs, viruses or other malicious contents. You are responsible for
                                    configuring your computer programs, gadgets, information technology, and platform to
                                    access our site. You are advised to always use your own virus protection
                                    software. </p>

                                <p>You also agree not to misuse our website by knowingly introducing viruses, Trojans,
                                    worms, logic bombs or other material that is malicious or technologically harmful.
                                    You must not attempt to gain unauthorized access to our site, the server on which
                                    our site is stored or any server, computer or database connected to our site. You
                                    must not attack our site via a denial-of-service attack or a distributed denial-of
                                    service attack. By breaching this provision, you would be construed to have
                                    committed a criminal offense under the Computer Misuse Act 1990. We will report any
                                    such breach to the relevant law enforcement authorities and we will cooperate with
                                    those authorities by disclosing your identity to them. In the event of such a
                                    breach, your right to use our site will cease immediately.</p>

                                <h6><strong>7. <u>PRIVACY POLICY AND PERSONAL INFORMATION</u></strong></h6>
                                <p>Your privacy and personal information are important to us. Any personal information
                                    that you provide to us will be dealt with in line with our privacy policy, which
                                    explains what personal information we collect from you, how and why we collect,
                                    store, use and share such information, your rights in relation to your personal
                                    information and how to contact us and supervisory authorities in the event you have
                                    a query or complaint about the use of your personal information. </p>

                                <h6><strong>8. <u>ERRORS, INACCURACIES AND OMISSIONS</u></strong></h6>
                                <p>Occasionally there may be information on our site or in the Service that contains
                                    typographical errors, inaccuracies or omissions that may relate to product
                                    descriptions, pricing, promotions, offers, product shipping charges, transit times
                                    and availability. We reserve the right to correct any errors, inaccuracies or
                                    omissions, and to change or update information or cancel orders if any information
                                    in the Service or on any related website is inaccurate at any time without prior
                                    notice (including after you have submitted your order).</p>

                                <p>We undertake no obligation to update, amend or clarify information in the Service or
                                    on any related website, including without limitation, pricing information, except as
                                    required by law. No specified update or refresh date applied in the Service or on
                                    any related website, should be taken to indicate that all information in the Service
                                    or on any related website has been modified or updated.</p>

                                <h6><strong>9. <u>INTELLECTUAL PROPERTY OWNERSHIP; FEEDBACK</u></strong></h6>

                                <p>a. <u>Ownership</u></p>
                                <p>The design of the Service along with OnTheCase.io created text, scripts, graphics,
                                    interactive features and the trademarks, service marks and logos contained therein
                                    ("Marks"), are owned by or licensed to OnTheCase.io, subject to copyright and other
                                    intellectual property rights under United States and foreign laws and international
                                    conventions. We reserve all rights in and to the Service and the Site. You agree to
                                    not engage in the use, copying, or distributing any content contained within the
                                    Site or through the Service unless We have given You express written permission to
                                    do so.</p>

                                <p>b. <u>OnTheCase Content</u></p>
                                <p>Except for the User Content (as defined in clause 10 c below) the: (i) content of
                                    service, including, without limitation, the text, information, documents,
                                    descriptions, products, software, graphics, photos, sounds, videos, interactive
                                    features, and services (the “Materials”), (ii) the trademarks, service marks and
                                    logos contained therein (“Marks”, and together with the Materials, the “OnTheCase
                                    Content”), are the property of OnTheCase and/or its licensors and may be protected
                                    by applicable copyright or other intellectual property laws and treaties.
                                    “OnTheCase”, and the logo are Marks of OnTheCase and its affiliates. </p>

                                <p>c. <u>User Content and Use Derived Content</u></p>
                                <p>You are solely responsible for all interactions, text, documents or other content or
                                    information uploaded, entered or otherwise transmitted by you in connection with
                                    your use of the Services and/or Software (“User Content”) and the User Derived
                                    Content (as defined below). User Content and/or User Derived Content may include,
                                    among other things, mistakes, typos, wording, and text contained in the content or
                                    information transmitted by you. To the maximum extent permitted by law, Onthecase
                                    shall have no liability to you with respect to the User Content and or the User
                                    Derived Content, including, without limitation, liability with respect to: (i) any
                                    information (including your confidential information) contained in or apparent from
                                    any User Content and/or the User Derived Content; and/or (ii) any copyright
                                    infringement claim or another infringement claim by a third party in relation to or
                                    in connection with the User Content and/or the User Derived Content. You warrant,
                                    represent and covenant that: (i) you own or have a valid and enforceable license and
                                    all the necessary rights to use, submit or transmit all User Content and use the
                                    Service and the Software; (ii) that no User Content or User Derived Content (as
                                    defined below) infringes, misappropriates or violates or will infringe,
                                    misappropriate or violate, the rights (including, without limitation, any copyrights
                                    or other intellectual property rights) of any person or entity or any applicable
                                    law, rule or regulation of any government authority of competent jurisdiction; (iii)
                                    all summaries, content or text derived or extracted from the User Content using the
                                    Summarization Service and/or Software ("User Derived Content") shall be used by the
                                    User for personal use only; and (iv) the User shall not disseminate or distribute
                                    the User Content or User Derived Content in breach of any applicable law or third
                                    party's intellectual property rights or other rights. You acknowledge that the
                                    Services and the Software do not operate as an archive or file storage service. You
                                    are solely responsible for the backup of User Content and other safeguards
                                    appropriate for your needs. You retain all right, title, and interest in and to your
                                    User Content. To the maximum extent permitted by law, by uploading or entering any
                                    User Content, you give Onthecase (and those it works with) a nonexclusive,
                                    worldwide, royalty-free and fully-paid, transferable and sub-licensable, perpetual,
                                    and irrevocable license to copy, store and use your User Content in order to (i)
                                    provide the Software and Services; (ii) administer and make improvements to the
                                    Software and Services (including, to improve the algorithms underlying the Software
                                    and the Services); and (iii) collect and analyze anonymous information. To the
                                    extent that User Content contains any third party data, you hereby warrant to have
                                    obtained all required consents from such third party to allow OnTheCase to use the
                                    User Content as set forth above.</p>

                                <p>d. <u>Feedback</u></p>
                                <p>If We receives any feedback (e.g., questions, comments, suggestions or the like)
                                    regarding any of the Services and/or Software (collectively, “Feedback”), all
                                    rights, including Intellectual Property Rights in such Feedback shall belong
                                    exclusively to OnTheCase.io and that such shall be considered Onthecase’s
                                    Confidential Information. You hereby irrevocably, fully and unconditionally transfer
                                    and assign to OnTheCase all Intellectual Property Rights and remaining rights you
                                    have in such Feedback, without any further step or payment being necessary, and
                                    waive any and all moral rights you may have in respect thereto, and the right to
                                    assert or take legal action in connection with such rights. It is further understood
                                    that use of Feedback, if any, may be made by OnTheCase at its sole discretion, and
                                    that OnTheCase in no way shall be obliged to make use of any kind of the Feedback or
                                    part thereof.</p>

                                <h6><strong>10. <u>INDEMNITY</u></strong></h6>
                                <p>To the maximum extent permitted by law, you agree to defend, indemnify and hold
                                    harmless Onthecase and our affiliates, and our respective officers, directors,
                                    employees and agents, from and against any and all claims, damages, obligations,
                                    losses, liabilities, costs and expenses (including but not limited to attorney’s
                                    fees) arising from: (i) your use of, or inability to use, the Software (ii) your
                                    violation of this Agreement; (iii) your violation of any third party right,
                                    including without limitation any copyright, property, or privacy right; and (iv) a
                                    third party claim relating to or in connection with the User Content and/or the User
                                    Derived Content (including but not limited to a claim for copyright infringement or
                                    related to intellectual property or proprietary rights). Without derogating from or
                                    excusing your obligations under this section, we reserve the right (at your own
                                    expense), but are not under any obligation, to assume the exclusive defense and
                                    control of any matter which is subject to an indemnification by you if you choose
                                    not to defend or settle it. You agree not to settle any matter subject to an
                                    indemnification by you without first obtaining our express approval.</p>

                                <h6><strong>11. <u>DISCLAIMERS</u></strong></h6>
                                <p>a. TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU ACKNOWLEDGE THAT THE SERVICE, THE
                                    ONTHECASE CONTENT, AND ANY OTHER GOODS AND/OR SERVICES PROVIDED OR MADE AVAILABLE BY
                                    ONTHECASE HEREUNDER OR RELATED THERETO (COLLECTIVELY, THE "ONTHECASE MATERIALS") ARE
                                    PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITH ALL FAULTS, AND WITHOUT ANY
                                    REPRESENTATION, WARRANTY, GUARANTEE, OR CONDITION OF ANY KIND WHATSOEVER, WHETHER
                                    EXPRESS, IMPLIED OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES
                                    OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY OR ARISING FROM A COURSE OF
                                    DEALING, LAW, USAGE, OR REGARDING SECURITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET
                                    POSSESSION, NON-INFRINGEMENT, TITLE, QUIET ENJOYMENT, RELIABILITY, OR THAT OTHERWISE
                                    ARISE FROM A COURSE OF PERFORMANCE OR DEALING, OR USAGE OF TRADE, ALL OF WHICH ARE
                                    HEREBY DISCLAIMED BY ONTHECASE, ITS SUPPLIERS, AND LICENSORS.</p>

                                <p>b. TO THE MAXIMUM EXTENT PERMITTED BY LAW, ONTHECASE AND ITS LICENSORS DO NOT MAKE
                                    ANY REPRESENTATION, WARRANTY, GUARANTEE OR CONDITION: (A) REGARDING THE
                                    EFFECTIVENESS, USEFULNESS, RELIABILITY, TIMELINESS, COMPLETENESS, OR QUALITY OF
                                    ONTHECASE MATERIALS, THE SERVICES OR THE SOFTWARE; (B) THAT YOUR USE OF ONTHECASE
                                    MATERIALS, THE SERVICES OR THE SOFTWARE WILL BE UNINTERRUPTED, SECURE OR ERROR-FREE;
                                    (C) REGARDING THE OPERATION OF ANY NETWORKS, THE PASSING OR TRANSMISSION OF DATA VIA
                                    ANY NETWORKS OR THE CLOUD, OR ANY OTHER CELLULAR OR DATA CONNECTIVITY PROBLEMS; OR
                                    (D) REGARDING THE SATISFACTION OF, OR COMPLIANCE WITH, ANY LAWS, REGULATIONS, OR
                                    OTHER GOVERNMENT OR INDUSTRY RULES OR STANDARDS. WE DO NOT WARRANT THAT THE CONTENT
                                    AVAILABLE ON, OR GENERATED BY, THE SOFTWARE OR THE SERVICE IS ACCURATE, COMPLETE,
                                    RELIABLE, CURRENT, ERROR-FREE AND/OR THAT THE SERVICE OR THE SOFTWARE IS FREE OF
                                    VIRUSES OR OTHER HARMFUL CODE. WE RESERVE THE RIGHT TO MAKE CHANGES IN OR TO THE
                                    CONTENT, THE SOFTWARE AND/OR THE SERVICES, OR ANY PART THEREOF, WITHOUT GIVING YOU
                                    ANY NOTICE PRIOR TO OR AFTER MAKING SUCH CHANGES. ONTHECASE WILL NOT BE LIABLE OR
                                    OBLIGATED IN RESPECT OF DELAYS, INTERRUPTIONS, SERVICE FAILURES OR OTHER PROBLEMS
                                    INHERENT IN USE OF THE INTERNET AND ELECTRONIC COMMUNICATIONS OR FOR ISSUES RELATED
                                    TO PUBLIC NETWORKS OR HOSTING PROVIDERS.</p>

                                <p>c. YOU ARE ADVISED NOT TO RELY IN ANY WAY ON THE CORRECT FUNCTIONING OR PERFORMANCE
                                    OF THE EXTENSION. YOU ASSUME ALL RISKS AND ALL COSTS ASSOCIATED WITH THE USE OF THE
                                    SOFTWARE OR SERVICE. YOU AGREE THAT WE WILL NOT BE HELD RESPONSIBLE FOR ANY
                                    CONSEQUENCES TO YOU OR ANY THIRD PARTY THAT MAY RESULT FROM YOUR USE OF THE SERVICES
                                    AND/OR FOR ANY TECHNICAL PROBLEMS INCLUDING WITHOUT LIMITATION IN CONNECTION WITH
                                    THE INTERNET (SUCH AS SLOW CONNECTIONS, TRAFFIC CONGESTION OR OVERLOAD OF OUR OR
                                    OTHER SERVERS) OR ANY TELECOMMUNICATIONS OR INTERNET PROVIDERS.</p>

                                <p>d. Applicable law may not allow the exclusion of certain warranties, so to that
                                    extent such exclusions may not apply.</p>

                                <h6><strong>12. <u>LIMITATION OF LIABILITY</u></strong></h6>
                                <p>NOTWITHSTANDING ANYTHING TO THE CONTRARY AND TO THE FULLEST EXTENT PERMISSIBLE BY
                                    LAW, IN NO EVENT SHALL EITHER PARTY, ITS AFFILIATES, OR ANY LICENSOR OR SUPPLIER OF
                                    ONTHECASE, BE LIABLE UNDER, OR OTHERWISE IN CONNECTION WITH, THIS AGREEMENT, FOR:
                                    (A) ANY CONSEQUENTIAL, INDIRECT, SPECIAL, INCIDENTAL, OR PUNITIVE DAMAGES; (B) ANY
                                    LOSS OF PROFITS, LOSS OF BUSINESS, LOSS OF REVENUE, LOSS OF ANTICIPATED SAVINGS, OR
                                    WASTED EXPENDITURE; (C) ANY LOSS OF, OR DAMAGE OR INTERRUPTION TO, DATA, NETWORKS,
                                    INFORMATION SYSTEMS, REPUTATION, OR GOODWILL; AND/OR (D) THE COST OF PROCURING ANY
                                    SUBSTITUTE GOODS OR SERVICES. TO THE MAXIMUM EXTENT PERMITED BY LAW, THE COMBINED
                                    AGGREGATE LIABILITY OF ONTHECASE AND ITS AFFILIATES UNDER, OR OTHERWISE IN
                                    CONNECTION WITH, THIS AGREEMENT, THE SOFTWARE AND THE SERVICE SHALL NOT EXCEED THE
                                    AMOUNT ACTUALLY PAID (IF ANY) BY YOU TO ONTHECASE UNDER </p>

                                <p>THIS AGREEMENT IN THE THREE (3) MONTH PERIOD IMMEDIATELY PRECEDING THE DATE GIVING
                                    RISE TO LIABILITY. THE FOREGOING EXCLUSIONS AND LIMITATION SHALL APPLY: (A) TO THE
                                    MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW; (B) EVEN IF A PARTY HAS BEEN ADVISED, OR
                                    SHOULD HAVE BEEN AWARE, OF THE POSSIBILITY OF LOSSES, DAMAGES, OR COSTS; (C) EVEN IF
                                    ANY REMEDY IN THIS AGREEMENT FAILS OF ITS ESSENTIAL PURPOSE; AND (D) REGARDLESS OF
                                    THE THEORY OR BASIS OF LIABILITY, AND WHETHER IN CONTRACT, TORT (INCLUDING WITHOUT
                                    LIMITATION FOR NEGLIGENCE OR BREACH OF STATUTORY DUTY), MISREPRESENTATION,
                                    RESTITUTION,OR OTHERWISE.</p>

                                <h6><strong>13. <u>EXPORT LAWS</u></strong></h6>
                                <p>You hereby agree to comply fully with all applicable export laws and regulations to
                                    ensure that neither the Software and/or the Services nor any technical data related
                                    thereto are exported or re-exported directly or indirectly in violation of, or used
                                    for any purposes prohibited by, such laws and regulations. </p>

                                <h6><strong>14. <u>UPDATES AND UPGRADES</u></strong></h6>
                                <p>We may from time to time at our discretion provide updates or upgrades to the
                                    Services (each a “Revision”), but You are not under any obligation to do so. Such
                                    Revisions will be supplied according to our then-current policies, which may include
                                    automatic updating or upgrading without any additional notice to you. You consent to
                                    any such automatic updating or upgrading of the service. All references herein to
                                    the Service shall include Revisions. This Agreement shall govern any Revisions that
                                    replace or supplement the original service, unless the Revision is accompanied by a
                                    separate license agreement which will govern the Revision.</p>

                                <h6><strong>15. <u>GENERAL</u></strong></h6>

                                <p>a. <u>Entire Agreement</u></p>
                                <p>This Agreement, together with any other documents incorporated herein by reference,
                                    constitutes the sole and entire agreement of the Parties with respect to the subject
                                    matter of this Agreement and supersedes all prior and contemporaneous
                                    understandings, agreements, and representations and warranties, both written and
                                    oral, with respect to such subject matter.</p>

                                <p>b. <u>Notices</u></p>
                                <p>All notices, requests, consents, claims, demands, waivers, and other communications
                                    hereunder (each, a “Notice “) must be in writing and addressed to the Parties at the
                                    addresses set forth in the applicable order form or to such other address that may
                                    be designated by the Party giving Notice from time to time in accordance with this
                                    Section. All Notices must be delivered by personal delivery, nationally recognized
                                    overnight courier (with all fees prepaid), email (with confirmation of transmission)
                                    or certified or registered mail (in each case, return receipt requested, postage
                                    prepaid). Except as otherwise provided in this Agreement, a Notice is effective
                                    only: (i) upon receipt by the receiving Party; and (ii) if the Party giving the
                                    Notice has complied with the requirements of this Section.</p>

                                <p>c. <u>Force Majeure</u></p>
                                <p>In no event shall Onthecase be liable to you, or be deemed to have breached this
                                    Agreement, for any failure or delay in performing its obligations under this
                                    Agreement (except for any obligations to make payments), if and to the extent such
                                    failure or delay is caused by any circumstances beyond Onthecase’s reasonable
                                    control, including but not limited to acts of God, flood, fire, earthquake,
                                    explosion, war, terrorism, invasion, riot or other civil unrest, strikes, labor
                                    stoppages or slowdowns or other industrial disturbances, or passage of law or any
                                    action taken by a governmental or public authority, including imposing an
                                    embargo.</p>

                                <p>d. <u>Amendment and Modification; Waiver</u></p>
                                <p>No amendment to or modification of this Agreement is effective unless it is in
                                    writing and signed by an authorized representative of each Party. No waiver by any
                                    Party of any of the provisions hereof will be effective unless explicitly set forth
                                    in writing and signed by the Party so waiving. Except as otherwise set forth in this
                                    Agreement: (i) no failure to exercise, or delay in exercising, any rights, remedy,
                                    power, or privilege arising from this Agreement will operate or be construed as a
                                    waiver thereof; and (ii) no single or partial exercise of any right, remedy, power,
                                    or privilege hereunder will preclude any other or further exercise thereof or the
                                    exercise of any other right, remedy, power, or privilege.</p>

                                <p>e. <u>Severability</u></p>
                                <p>If any provision of this Agreement is invalid, illegal, or unenforceable in any
                                    jurisdiction, such invalidity, illegality, or unenforceability will not affect any
                                    other term or provision of this Agreement or invalidate or render unenforceable such
                                    term or provision in any other jurisdiction. Upon such determination that any term
                                    or other provision is invalid, illegal, or unenforceable, the Parties shall
                                    negotiate in good faith to modify this Agreement so as to affect their original
                                    intent as closely as possible in a mutually acceptable manner in order that the
                                    transactions contemplated hereby be consummated as originally contemplated to the
                                    greatest extent possible.</p>

                                <p>f. <u>Assignment</u></p>
                                <p>Neither Party may assign, delegate, or otherwise transfer this Agreement, in whole or
                                    in part, without the prior written consent of the other Party, and any purported
                                    assignment shall be void and of no force or effect; provided that either Party may
                                    assign this Agreement, in whole, without such consent to: (a) its affiliate; or (b)
                                    its successor-in-interest in connection with a change of control (whether by merger,
                                    sale of voting securities or assets, consolidation, reorganization, or otherwise),
                                    in each case so long as the assignee agrees in writing to be bound by the terms of
                                    this Agreement.</p>

                                <p>g. <u>Governing Law</u></p>
                                <p>These Terms of service shall be governed by and construed in accordance with the
                                    applicable United States federal law, without reference to "conflicts of laws"
                                    provisions or principles.</p>

                                <p>If you have any questions regarding the Terms of Service, contact us.</p>

                            </div>}
                        </div>
                    </div>
                </section>
            </>
        );
}

export default TermsOfService;
