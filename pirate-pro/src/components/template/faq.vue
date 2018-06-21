<template>
	<div class="POPUP" v-show="showPOPUP" :style="{'top':faqtop,'left':faqleft,'height':faqheight}">
    <div class="faq top90" v-show="showfaq">
        <h1>{{$t("message.home_title_faq1")}}</h1>
        <h2>{{$t("message.home_title_question1")}}</h2>
        <p>{{$t("message.home_text_answer1")}}</p>
        <h2>{{$t("message.home_title_faq2")}}</h2>
        <h3>{{$t("message.home_title_question2")}}</h3>
        <p>{{$t("message.home_text_answer2")}}</p>
        <h3>{{$t("message.home_title_question3")}}</h3>
        <p>{{$t("message.home_text_answer3")}}</p>
        <h4>{{$t("message.home_title_question4")}}</h4>
        <p v-html='$t("message.home_text_answer4")'></p>
        <br/><img class="step1" :src="imgarr[0]"/><br/>
        <p v-html='$t("message.home_text_answer5")'></p>
        <br/><img class="step2" :src="imgarr[1]"/><br/>
        <h4>{{$t("message.home_title_question6")}}</h4>
        <p>{{$t("message.home_text_answer6")}}</p>
        <br/><img class="step3" :src="imgarr[2]"/><br/>
        <h4>{{$t("message.home_title_question7")}}</h4>
        <p>{{$t("message.home_text_answer7")}}</p>
        <br/><img class="step4" :src="imgarr[3]"/><br/>
        <h4>{{$t("message.home_title_question8")}}</h4>
        <p>{{$t("message.home_text_answer8")}}</p>
        <br/><img class="step5" :src="imgarr[4]"/><br/>
        <h4>{{$t("message.home_title_question9")}}</h4>
        <p>{{$t("message.home_text_answer9")}}</p>
        <br/><img class="step6" :src="imgarr[5]"/><br/>

        <h2>{{$t("message.home_title_faq3")}}</h2>
        <h3>{{$t("message.home_title_question10")}}</h3>
        <p>{{$t("message.home_text_answer10")}}</p>
        <h3>{{$t("message.home_title_question11")}}</h3>
        <p>{{$t("message.home_text_answer11")}}</p>
        <h3>{{$t("message.home_title_question12")}}</h3>
        <p>{{$t("message.home_text_answer12")}}</p>
        <h3>{{$t("message.home_title_question13")}}</h3>
        <p>{{$t("message.home_text_answer13")}}</p>

        <h2>{{$t("message.home_title_faq4")}}</h2>
        <h3>{{$t("message.home_title_question14")}}</h3>
        <p>{{$t("message.home_text_answer14")}}</p>
        <h3>{{$t("message.home_title_question15")}}</h3>
        <p>{{$t("message.home_text_answer15")}}</p>
        <h3>{{$t("message.home_title_question16")}}</h3>
        <p>{{$t("message.home_text_answer16")}}</p>
        <h3>{{$t("message.home_title_question17")}}</h3>
        <p>{{$t("message.home_text_answer17")}}</p>

        <h2>{{$t("message.home_title_faq5")}}</h2>
        <h3>{{$t("message.home_title_question18")}}</h3>
        <p>{{$t("message.home_text_answer18")}}</p>
        <h3>{{$t("message.home_title_question19")}}</h3>
        <p>{{$t("message.home_text_answer19")}}</p>
        <h3>{{$t("message.home_title_question20")}}</h3>
        <p>{{$t("message.home_text_answer20")}}</p>
        <h3>{{$t("message.home_title_question21")}}</h3>
        <p>{{$t("message.home_text_answer21")}}</p>

        <h2>{{$t("message.home_title_faq6")}}</h2>
        <h3>{{$t("message.home_title_question22")}}</h3>
        <p>{{$t("message.home_text_answer22")}}</p>
        <h3>{{$t("message.home_title_question23")}}</h3>
        <p>{{$t("message.home_text_answer23")}}</p>
        
        <h2>{{$t("message.home_title_faq7")}}</h2>
        <h3>{{$t("message.home_title_question24")}}</h3>
        <p>{{$t("message.home_text_answer24")}}</p>
        <h3>{{$t("message.home_title_question25")}}</h3>
        <p>{{$t("message.home_text_answer25")}}</p>
        <h3>{{$t("message.home_title_question26")}}</h3>
        <p>{{$t("message.home_text_answer26")}}</p>
    </div>
    <div class="terms top90" v-show="showterms">
        <h1>Terms of Service</h1>
      <p>PirateConquest is a distributed application that runs on the Ethereum network, using specially-developed smart contracts (each, a “Smart Contract”) to enable users to own, transfer, and breed genetically unique digital cats, which can then be visualized on a website that the user can interact with (the “Site”). The Smart Contracts and the Site are collectively referred to in these Terms as the “App”. Using the App, users can view their cats and use the Smart Contracts to acquire, trade, and breed cats with other App users via clock auction.</p>
      <p>Livestar Ltd. ("Livestar", "we", or "us") is making the App available to you. Before you use the App, the Smart Contracts, or the Site, however, you will need to agree to these Terms of Use and any terms and conditions incorporated herein by reference (collectively, these “Terms").</p>
      <p>PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE APP, THE SMART CONTRACTS, OR THE SITE. THESE TERMS GOVERN YOUR USE OF THE APP, THE SMART CONTRACTS, AND THE SITE, UNLESS WE HAVE EXECUTED A SEPARATE WRITTEN AGREEMENT WITH YOU FOR THAT PURPOSE. WE ARE ONLY WILLING TO MAKE THE APP, THE SMART CONTRACTS, AND THE SITE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS. BY USING THE APP, THE SMART CONTRACTS, THE SITE, OR ANY PART OF THEM, OR BY CLICKING “I ACCEPT” BELOW OR INDICATING YOUR ACCEPTANCE IN AN ADJOINING BOX, YOU ARE CONFIRMING THAT YOU UNDERSTAND AND AGREE TO BE BOUND BY ALL OF THESE TERMS. IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO ACCEPT THESE TERMS ON THAT ENTITY’S BEHALF, IN WHICH CASE “YOU” WILL MEAN THAT ENTITY. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT ACCEPT ALL OF THESE TERMS, THEN WE ARE UNWILLING TO MAKE THE APP, THE SMART CONTRACTS, OR THE SITE AVAILABLE TO YOU. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE APP, THE SMART CONTRACTS, OR THE SITE.</p>
      <h3>1. The App</h3>
      <p>A. To most easily use the App, you must first install the Google Chrome web browser. Once you have installed Chrome, you will need to install a browser extension called MetaMask. MetaMask is an electronic wallet, which allows you to purchase (either directly via Coinbase if you are in the United States, or via other third party sites), store, and engage in transactions using Ethereum cryptocurrency. You will not be able to engage in any transactions on the App other than through MetaMask (or other Ethereum-compatible browsers). The App will only recognize you as a user, and you will only be able to interact with the App, if your Ethereum electronic wallet is connected and unlocked through your MetaMask account. There is no other way to sign up as a user, or to interact directly with the App.</p>
      <p>B. Transactions that take place on the App are managed and confirmed via the Ethereum blockchain. You understand that your Ethereum public address will be made publicly visible whenever you engage in a transaction on the App.</p>
      <p>C. We neither own nor control MetaMask, Coinbase, Google Chrome, the Ethereum network, or any other third party site, product, or service that you might access, visit, or use for the purpose of enabling you to use the various features of the App. We will not be liable for the acts or omissions of any such third parties, nor will we be liable for any damage that you may suffer as a result of your transactions or any other interaction with any such third parties.</p>
      <p>D. You must provide accurate and complete registration information when you create an account for the App. By creating an account, you agree to provide accurate, current and complete account information about yourself, and to maintain and promptly update as necessary your account information. You are responsible for the security of your account and your MetaMask wallet (and other Ethereum wallets and accounts). If you become aware of any unauthorized use of your password or of your account with us, you agree to notify us immediately at support@livestar.com.</p>
      <h3>2. Fees and Payment</h3>
      <p>A. If you elect to purchase, trade, or battle in PirateConquest on the App, or with or from other users via the App, any financial transactions that you engage in will be conducted solely through the Ethereum network via via MetaMask. We will have no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions. With that in mind, we will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage in via the App, or using the Smart Contracts, or any other transactions that you conduct via the Ethereum network or MetaMask.</p>
      <p>B. Ethereum requires the payment of a transaction fee (a “Gas Fee”) for every transaction that occurs on the Ethereum network. The Gas Fee funds the network of computers that run the decentralized Ethereum network. This means that you will need to pay a Gas Fee for each transaction that occurs via the App.</p>
      <p>C. In addition to the Gas Fee, each time you utilize a Smart Contract to conduct a transaction with another user via the App, you authorize us to collect a commission of 5% of the total value of that transaction (each, a “Commission”). You acknowledge and agree that the Commission will be transferred directly to us through the Ethereum network as part of your payment. We will not collect a Commission for interactions that do not involve our App marketplace.</p>
      <p>D. As between us, you will be solely responsible to pay any and all sales, use, value-added and other taxes, duties, and assessments (except taxes on our net income) now or hereafter claimed or imposed by any governmental authority (collectively, “Taxes”) associated with your use of the App (including, without limitation, any Taxes that may become payable as the result of your ownership, or transfer of Equipment etc.). Except for income taxes levied on Livestar Ltd., you: (i) will pay or reimburse us for all national, federal, state, local or other taxes and assessments of any jurisdiction, including value added taxes and taxes as required by international tax treaties, customs or other import or export taxes, and amounts levied in lieu thereof based on charges set, services performed or payments made hereunder, as are now or hereafter may be imposed under the authority of any national, state, local or any other taxing jurisdiction; and (ii) shall not be entitled to deduct the amount of any such taxes, duties or assessments from payments made to us pursuant to these Terms.</p>
      <h3>3. Ownership; Restrictions</h3>
      <p>A. You acknowledge and agree that we (or, as applicable, our licensors) own all legal right, title and interest in and to all elements of the App, and all intellectual property rights therein. The visual interfaces, graphics (including, without limitation, all art and drawings associated with PirateConquest), design, systems, methods, information, computer code, software, services, “look and feel”, organization, compilation of the content, code, data, and all other elements of the App (collectively, the “Livestar Materials”) are owned by Livestar, and are protected by copyright, trade dress, patent, and trademark laws, international conventions, other relevant intellectual property and proprietary rights, and applicable laws.  All Livestar Materials are the copyrighted property of Livestar or its licensors, and all trademarks, service marks, and trade names contained in the Livestar Materials are proprietary to Livestar or its licensors. Except as expressly set forth herein, your use of the App does not grant you ownership of or any other rights with respect to any content, code, data, or other materials that you may access on or through the App. We reserve all rights in and to the Livestar Materials not expressly granted to you in the Terms. For the sake of clarity, you understand and agree: (i) that your “purchase” of an Equipment and such, whether via the App or otherwise, does not give you any rights or licenses in or to the Livestar Materials (including, without limitation, our copyright in and to the art and drawings associated with that PirateConquest) other than those expressly contained in these Terms; and (ii) that you do not have the right to reproduce, distribute, or otherwise commercialize any elements of the Livestar Materials (including, without limitation, our copyright in and to the art and drawings associated with that PirateConquest) in any way without our prior written consent in each case, which consent we may withhold in our sole and absolute discretion.</p>
      <p>B. You may choose to submit comments, bug reports, ideas or other feedback about the App, including without limitation about how to improve the App (collectively, “Feedback”). By submitting any Feedback, you agree that we are free to use such Feedback at our discretion and without additional compensation to you, and to disclose such Feedback to third parties (whether on a non-confidential basis, or otherwise). You hereby grant us a perpetual, irrevocable, nonexclusive, worldwide license under all rights necessary for us to incorporate and use your Feedback for any purpose.</p>
      <p>C. You agree that you are responsible for your own conduct while accessing or using the App, and for any consequences thereof. You agree to use the App only for purposes that are legal, proper and in accordance with these Terms and any applicable laws or regulations. By way of example, and not as a limitation, you may not, and may not allow any third party to: (i) send, upload, distribute or disseminate any unlawful, defamatory, harassing, abusive, fraudulent, obscene, or otherwise objectionable content; (ii) distribute viruses, worms, defects, Trojan horses, corrupted files, hoaxes, or any other items of a destructive or deceptive nature; (iii) impersonate another person (via the use of an email address or otherwise); (iv) upload, post, transmit or otherwise make available through the App any content that infringes the intellectual proprietary rights of any party; (v) use the App to violate the legal rights (such as rights of privacy and publicity) of others; (vi) engage in, promote, or encourage illegal activity (including, without limitation, money laundering); (vii) interfere with other users’ enjoyment of the App; (viii) exploit the App for any unauthorized commercial purpose; (ix) modify, adapt, translate, or reverse engineer any portion of the App; (x) remove any copyright, trademark or other proprietary rights notices contained in or on the App or any part of it; (xi) reformat or frame any portion of the App; (xii) display any content on the App that contains any hate-related or violent content or contains any other material, products or services that violate or encourage conduct that would violate any criminal laws, any other applicable laws, or any third party rights; (xiii) use any robot, spider, site search/retrieval application, or other device to retrieve or index any portion of the App or the content posted on the App, or to collect information about its users for any unauthorized purpose; (xiv) create user accounts by automated means or under false or fraudulent pretenses; or (xv) access or use the App for the purpose of creating a product or service that is competitive with any of our products or services.</p>
      <h3>4. Termination</h3>
      <p>You may terminate these Terms at any time by canceling your account on the App and discontinuing your access to and use of the App. You will not receive any refunds if you cancel your account, or otherwise terminate these Terms. You agree that we, in our sole discretion and for any or no reason, may terminate these Terms and suspend and/or terminate your account(s) for the App. You agree that any suspension or termination of your access to the App may be without prior notice, and that we will not be liable to you or to any third party for any such suspension or termination. If we terminate these Terms or suspend or terminate your access to or use of the App due to your breach of these Terms or any suspected fraudulent, abusive, or illegal activity, then termination of these Terms will be in addition to any other remedies we may have at law or in equity. Upon any termination or expiration of these Terms, whether by you or us, you may no longer have access to information that you have posted on the App or that is related to your account, and you acknowledge that we will have no obligation to maintain any such information in our databases or to forward any such information to you or to any third party. Sections 2.C and 3 through 16 will survive the termination or expiration of these Terms for any reason.</p>
      <h3>5. Disclaimers</h3>
      <p>A. YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR ACCESS TO AND USE OF THE APP IS AT YOUR SOLE RISK, AND THAT THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS MAKE NO EXPRESS WARRANTIES AND HEREBY DISCLAIM ALL IMPLIED WARRANTIES REGARDING THE APP AND ANY PART OF IT (INCLUDING, WITHOUT LIMITATION, THE SITE, ANY SMART CONTRACT, OR ANY EXTERNAL WEBSITES), INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, CORRECTNESS, ACCURACY, OR RELIABILITY. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT REPRESENT OR WARRANT TO YOU THAT: (I) YOUR ACCESS TO OR USE OF THE APP WILL MEET YOUR REQUIREMENTS, (II) YOUR ACCESS TO OR USE OF THE APP WILL BE UNINTERRUPTED, TIMELY, SECURE OR FREE FROM ERROR, (III) USAGE DATA PROVIDED THROUGH THE APP WILL BE ACCURATE, (III) THE APP OR ANY CONTENT, SERVICES, OR FEATURES MADE AVAILABLE ON OR THROUGH THE APP ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR (IV) THAT ANY DATA THAT YOU DISCLOSE WHEN YOU USE THE APP WILL BE SECURE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.</p>
      <p>B. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET, AND AGREE THAT WE HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE.</p>
      <p>C. WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU INCUR AS THE RESULT OF YOUR USE OF THE ETHEREUM NETWORK OR THE METAMASK ELECTRONIC WALLET, INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM: (A) USER ERROR, SUCH AS FORGOTTEN PASSWORDS OR INCORRECTLY CONSTRUED SMART CONTRACTS OR OTHER TRANSACTIONS; (B) SERVER FAILURE OR DATA LOSS; (C) CORRUPTED WALLET FILES; (D) UNAUTHORIZED ACCESS OR ACTIVITIES BY THIRD PARTIES, INCLUDING BUT NOT LIMITED TO THE USE OF VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK AGAINST THE APP, ETHEREUM NETWORK, OR THE METAMASK ELECTRONIC WALLET.</p>
      <p>D. PIRATECONQUEST ARE INTANGIBLE DIGITAL ASSETS THAT EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE ETHEREUM NETWORK. ALL SMART CONTRACTS ARE CONDUCTED AND OCCUR ON THE DECENTRALIZED LEDGER WITHIN THE ETHEREUM PLATFORM. WE HAVE NO CONTROL OVER AND MAKE NO GUARANTEES OR PROMISES WITH RESPECT TO SMART CONTRACTS.</p>
      <p>E. LIVESTAR IS NOT RESPONSIBLE FOR LOSSES DUE TO BLOCKCHAINS OR ANY OTHER FEATURES OF THE ETHEREUM NETWORK OR THE METAMASK ELECTRONIC WALLET, INCLUDING BUT NOT LIMITED TO LATE REPORT BY DEVELOPERS OR REPRESENTATIVES (OR NO REPORT AT ALL) OF ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING THE ETHEREUM NETWORK, INCLUDING FORKS, TECHNICAL NODE ISSUES, OR ANY OTHER ISSUES HAVING FUND LOSSES AS A RESULT.</p>
      <h3>6. Limitation of Liability</h3>
      <p>A. YOU UNDERSTAND AND AGREE THAT WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS WILL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH YOU MAY INCUR, HOWSOEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUT LIMITATION, ANY LOSS OF PROFITS (WHETHER INCURRED DIRECTLY OR INDIRECTLY), LOSS OF GOODWILL OR BUSINESS REPUTATION, LOSS OF DATA, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER INTANGIBLE LOSS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
      <p>B. YOU AGREE THAT OUR TOTAL, AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR ACCESS TO OR USE OF (OR YOUR INABILITY TO ACCESS OR USE) ANY PORTION OF THE APP, WHETHER IN CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, IS LIMITED TO THE GREATER OF (A) THE AMOUNTS YOU ACTUALLY PAID US UNDER THESE TERMS IN THE 12 MONTH PERIOD PRECEDING THE DATE THE CLAIM AROSE, OR (B) $100.</p>
      <p>C. YOU ACKNOWLEDGE AND AGREE THAT WE HAVE MADE THE APP AVAILABLE TO YOU AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY SET FORTH HEREIN, WHICH REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN THE PARTIES AND FORM AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN US. WE WOULD NOT BE ABLE TO PROVIDE THE APP TO YOU WITHOUT THESE LIMITATIONS.</p>
      <p>D. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, AND SOME JURISDICTIONS ALSO LIMIT DISCLAIMERS OR LIMITATIONS OF LIABILITY FOR PERSONAL INJURY FROM CONSUMER PRODUCTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO PERSONAL INJURY CLAIMS.</p>
      <h3>7. Assumption of Risk</h3>
      <p>You accept and acknowledge each of the following:</p>
      <p>A. The prices of blockchain assets are extremely volatile. Fluctuations in the price of other digital assets could materially and adversely affect the value of your PirateConquest, which may also be subject to significant price volatility. We cannot guarantee that any purchasers of PirateConquest will not lose money.</p>
      <p>B. You are solely responsible for determining what, if any, taxes apply to your PirateConquest-related transactions. Livestar is not responsible for determining the taxes that apply to your transactions on the App, the Site, or the Smart Contracts.</p>
      <p>C. The App does not store, send, or receive items from PirateConquest. This is because all items exist only by virtue of the ownership record maintained on the App’s supporting blockchain in the Ethereum network. Any transfer of items occurs within the supporting blockchain in the Ethereum network, and not on the App.</p>
      <p>D. There are risks associated with using an Internet-based currency, including, but not limited to, the risk of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your wallet. You accept and acknowledge that Livestar will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Ethereum network, however caused.</p>
      <p>E. A lack of use or public interest in the creation and development of distributed ecosystems could negatively impact the development of the PirateConquest ecosystem, and therefore the potential utility or value of PirateConquest.</p>
      <p>F. The regulatory regime governing blockchain technologies, cryptocurrencies, and tokens is uncertain, and new regulations or policies may materially adversely affect the development of the PirateConquest ecosystem, and therefore the potential utility or value of PirateConquest.</p>
      <p>G. Upgrades by Ethereum to the Ethereum platform, a hard fork in the Ethereum platform, or a change in how transactions are confirmed on the Ethereum platform may have unintended, adverse effects on all blockchains using the ERC-20 standard, including the PirateConquest ecosystem.</p>
      <h3>8. Indemnification</h3>
      <p>You agree to hold harmless and indemnify Livestar and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any claim, liability, loss, damage (actual and consequential) of any kind or nature, suit, judgment, litigation cost, and attorneys’ fees arising out of or in any way related to (i) your breach of these Terms, (ii) your misuse of the App, or (iii) your violation of applicable laws, rules or regulations in connection with your access to or use of the App.  You agree that Livestar will have control of the defense or settlement of any such claims.</p>
      <h3>9. External Sites</h3>
      <p>The App may include hyperlinks to other web sites or resources (collectively, “External Sites”), which are provided solely as a convenience to our users. We have no control over any External Sites. You acknowledge and agree that we are not responsible for the availability of any External Sites, and that we do not endorse any advertising, products or other materials on or made available from any External Sites. Furthermore, you acknowledge and agree that we are not liable for any loss or damage which may be incurred as a result of the availability or unavailability of the External Sites, or as a result of any reliance placed by you upon the completeness, accuracy or existence of any advertising, products or other materials on, or made available from, any External Sites.</p>
      <h3>10. Changes to the Terms</h3>
      <p>The App may include hyperlinks to other web sites or resources (collectively, “External Sites”), which are provided solely as a convenience to our users. We have no control over any External Sites. You acknowledge and agree that we are not responsible for the availability of any External Sites, and that we do not endorse any advertising, products or other materials on or made available from any External Sites. Furthermore, you acknowledge and agree that we are not liable for any loss or damage which may be incurred as a result of the availability or unavailability of the External Sites, or as a result of any reliance placed by you upon the completeness, accuracy or existence of any advertising, products or other materials on, or made available from, any External Sites.</p>
      <h3>11. Changes to the App</h3>
      <p>We may make changes to the Terms from time to time. When we make changes, we will make the updated Terms available on the App and update the “Last Updated” date at the beginning of these Terms accordingly. Please check these Terms periodically for changes. Any changes to the Terms will apply on the date that they are made, and your continued access to or use of the App after the Terms have been updated will constitute your binding acceptance of the updates.  If you do not agree to any revised Terms, you may not access or use the App.</p>
      <h3>12. Children</h3>
      <p>You affirm that you are over the age of 13, as the App is not intended for children under 13. IF YOU ARE 13 OR OLDER BUT UNDER THE AGE OF 18, OR THE LEGAL AGE OF MAJORITY WHERE YOU RESIDE IF THAT JURISDICTION HAS AN OLDER AGE OF MAJORITY, THEN YOU AGREE TO REVIEW THESE TERMS WITH YOUR PARENT OR GUARDIAN TO MAKE SURE THAT BOTH YOU AND YOUR PARENT OR GUARDIAN UNDERSTAND AND AGREE TO THESE TERMS. YOU AGREE TO HAVE YOUR PARENT OR GUARDIAN REVIEW AND ACCEPT THESE TERMS ON YOUR BEHALF. IF YOU ARE A PARENT OR GUARDIAN AGREEING TO THE TERMS FOR THE BENEFIT OF A CHILD OVER 13, THEN YOU AGREE TO AND ACCEPT FULL RESPONSIBILITY FOR THAT CHILD’S USE OF THE APP, INCLUDING ALL FINANCIAL CHARGES AND LEGAL LIABILITY THAT HE OR SHE MAY INCUR.</p>
      <h3>13. Privacy Policy</h3>
      <p>Our Privacy Policy describes the ways we collect, use, store and disclose your personal information, and is hereby incorporated by this reference into these Terms. You agree to the collection, use, storage, and disclosure of your data in accordance with our Privacy Policy.</p>
    </div>
    <div class="policy top90" v-show="showpolicy">
        <h1>Privacy Policy</h1>
        <p>We at Livestar Ltd. (“Livestar,” “we,” or “us”) believe that your privacy is a fundamental right. We have written this privacy policy (this “Policy”) to reflect our values, and to clearly describe what information we collect from you when you use our specially-developed smart contracts to own, transfer, and discover unique equipment (“Equipment”), which can then be visualized on a website (PirateConquest.com) that users can interact with (the “Site”), as well as how we protect and use that information. The smart contracts and the Site are collectively referred to in this Policy as the “App”. By using the App, you agree that we can collect, use, disclose, and process your information as described in this Policy. This Policy only applies to the App, and not to any other websites, products or services you may be able to access or link to via the App. We encourage you to read the privacy policies of any other websites you visit before providing your information to them.</p>
        <p>While our values will not shift, the App will evolve over time, and this Policy will change to reflect that evolution. If we make changes, we will notify you by revising the date at the top of this Policy. In some cases, if we make significant changes, we may give you additional notice by adding a statement to our homepage, or by sending you an email notification. We encourage you to review this Policy periodically to stay informed about our practices.</p>
        <h3>Information Collection</h3>
        <p>Information We Do Collect</p>
        <p>We will ask you to provide us with your email address, and your Ethereum wallet address.</p>
        <p>We also collect basic analytics and log-in information when you use the App. This sort of information may be collected from third-party providers like Facebook or Google Analytics, and includes, among other things, the type of device you use, access times, IP address, hardware model, operating system and version, and other unique device identifiers. Some of these third-party providers may place cookies or pixels - small data files stored on your hard drive or in device memory - on your browser or hard drive. Note that this Policy does not cover the use of cookies or pixels by such third parties. Most web browsers are set to accept cookies and pixels by default, but you can usually set your browser to remove or reject browser cookies or pixels. If you do choose to remove or reject cookies or pixels, however, your ability to use the App might be affected.</p>
        <p>Information We Don’t Collect</p>
        <p>We do not collect any other personally-identifiable information about you, unless you give it to us directly: by filling out a form, creating an account, giving us written feedback, communicating with us via third party social media sites, or otherwise communicating with us via the App or any other means. We do not collect any payment information from you, other than your Ethereum wallet address.</p>
        <h3>Information Usage</h3>
        <p>What We Do With Information We Collect</p>
        <p>We use the information we collect in the following ways:</p>
        <p>To analyze trends for how the App is being used;</p>
        <p>To improve the App;</p>
        <p>To help personalize your experience of the App; and</p>
        <p>If you gave us your contact information, we will use it to send you data as part of making the App available to you. We may also use that information to contact you to send you technical notices, updates, confirmations, security alerts, to provide support to you, to tell you about other products and services that we think might interest you, or to respond to your comments or questions.</p>
        <p>We may share the information we collect with third parties who need to access it in order to do work on our behalf, including doing things like helping us make the App available, or providing analytics services for us. We work hard to ensure that these third parties only access and use your information as necessary to perform their functions.</p>
        <p>We will create aggregations and anonymizations that contain your information in a way that does not directly identify you. We may use and/or share those aggregations and anonymizations for a variety of purposes related to the App, or our company and its business.</p>
        <h3>What We Don’t Do With Information We Collect</h3>
        <p>We do not share any information that directly identifies you with any third party, except in the following limited cases:</p>
        <p>As required to comply with applicable law or regulation, or to comply with law enforcement;</p>
        <p>To respond to claims and/or legal process;</p>
        <p>To protect our rights or our property, or to enforce our terms of service;</p>
        <p>To prevent behavior that is (or that we think may be) illegal or unethical;</p>
        <p>With your consent, or at your request or direction; or</p>
        <p>As otherwise set forth in this Policy.</p>
        <h3>Information Processing</h3>
        <p>Depending on where you are located, your information may need to be transferred to different servers around the world as part of using the App. Since we are based in Canada, any information we collect is governed by Canadian law. You acknowledge that, as part of making the App available to you, we may transfer your information to or maintain your information on computers located outside of your state, province, country, or other governmental jurisdiction, where the privacy laws may not be as protective as those in your jurisdiction. If you are located outside of Hong Kong and you choose to provide your information to us, you agree that we have the right to transfer your information to Hong Kong and process it there. By using the App, or by otherwise providing any information to us, you consent to the processing and transfer of that information in and to Hong Kong, the U.S., and other countries.</p>
        <h3>Information Security</h3>
        <p>We take safeguarding your information seriously. We will take reasonable administrative, physical, and electronic measures to help protect your information from loss, theft, misuse, unauthorized access, disclosure, alteration or destruction. All that said, no method of transmitting or storing information over the Internet is completely secure. With that in mind, we cannot guarantee the absolute security of your information.</p>
        <h3>Our Policy Towards Children</h3>
        <p>The App is not intended for use by children under the age of 13. If you are the parent or guardian of a child under the age of 13 and you become aware that your child has provided personally identifiable information to us without your and their consent, contact us at support@livestar.com. If we become aware that a child under the age of 13 has provided us with their personally identifiable information, we will remove that information from our files.</p>
        <h3>Contact Us</h3>
        <p>By contacting us at support@livestar.com, you can:</p>
        <p>See what information we have about you, if any;</p>
        <p>Change/correct any personal data we have about you;</p>
        <p>Have us delete any personal data we have about you (we will do our best to do so, but we may have to keep certain data as required by law, to comply with this Policy, or pursuant to our normal caching procedures);</p>
        <p>Opt out of receiving promotional communications from us; or</p>
        <p>Ask questions or provide feedback on this Policy generally, or the use of your information.</p>
    </div>
    <div class="closefaq" @click="closePOPUP"><p>{{$t("message.general_button_ok")}}</p></div>  
  </div>
</template>

<script>
export default {
  name: 'faq',
  data () {
    return {
      faqtop: "",
      faqleft: "",
      faqheight: "",
      imgarr: [require("../../assets/step1.png"),require("../../assets/step2.png"),require("../../assets/step3.png"),require("../../assets/step4.png"),require("../../assets/step5.png"),require("../../assets/step6.png")],
      
    }
  },
  methods: {
  	closePOPUP: function () {
      this.$store.dispatch("hidePOPUP");
      this.$store.dispatch("hidefaq");
      this.$store.dispatch("hideterms");
      this.$store.dispatch("hidepolicy");
      this.$store.dispatch("hideshadow");
    },

  },
  created () {
    
  	
  },
  mounted () {
    //缩放浏览器时改变头部top,faq位置
    var screenheight = document.documentElement.clientHeight;
    var screenwidth = document.documentElement.clientWidth;
    screenwidth = screenwidth<1000?1000:screenwidth;
    
    this.faqheight = screenheight/10 * 9 + "px";
    this.faqtop = screenheight/10 * 1/2 -17 + "px";
    this.faqleft = (screenwidth )/4 -10 -17 + "px";

    const _this = this; 
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      val = val<1000?1000:val;
      var screenheight = document.documentElement.clientHeight;
      
      _this.topnavheight = parseInt(val) / 1920 * 118 + "px";
      _this.faqheight = screenheight/10 * 9 + "px";
    })
    window.addEventListener("scroll",function(){
      var scrolltop = document.documentElement.scrollTop;
      var scrollleft = document.documentElement.scrollLeft;
      var screenheight = document.documentElement.clientHeight;
      var screenwidth = document.documentElement.clientWidth;
      screenwidth = screenwidth<1000?1000:screenwidth;
      _this.faqheight = screenheight/10 * 9 + "px";
      _this.faqtop = screenheight/10 * 1/2 -17 + scrolltop + "px";
      _this.faqleft = (screenwidth )/4 -10-17 + scrollleft + "px";
    })
    
  },
  computed: {
  	showPOPUP () {
      return this.$store.state.showPOPUP
    },
    showfaq () {
      return this.$store.state.showFAQ
    },
    showterms () {
      return this.$store.state.showTerms
    },
    showpolicy () {
      return this.$store.state.showPolicy
    }
    
  },
  destroyed () {
    window.removeEventListener("resize");
    window.removeEventListener("scroll");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .POPUP{
    width: 50%;
    height: 90vh;
    background-color: #fff;
    overflow-y: scroll;
    position: absolute;
    top: 5vh;
    z-index: 120;
    text-align: left;
    line-height: 1.5;
    font-size: 14px;
    border-radius: 10px;
    color:rgb(41,55,98);
    font-family: sans-serif;
    font-variant: none;
    overflow-y: hidden;
  }
  .faq,.terms,.policy{
    width: 100%;
  }
  .faq p,.terms p,.policy p{
    color: rgb(41,55,98);
  }
  .top90{
    padding: 20px 30px;
    width: 100%;
    height: 94%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  .faq .step1,.faq .step2,.faq .step3,.faq .step4,.faq .step5,.faq .step6{
    width: 60%;
    height: auto;
  }
  .closefaq{
    width: 100%;
    height: 6%;
    border-top: 1px solid #eee;
    display: table;
  }
  .closefaq p{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 1.2em;
    color: rgb(41,55,98);
  }
  .closefaq:hover{
    cursor: pointer;
  }
  ::-webkit-scrollbar-track-piece {  
    background-color:rgb(213,207,215);  
    border-left:0;
    border-top-right-radius: 10px;
    border-radius: 10px;   
  }  
  ::-webkit-scrollbar {  
      width:17px;  
      height:5px;
      border-radius: 10px;
  }  
  ::-webkit-scrollbar-thumb {  
      background-color:rgb(183,177,185);    
      background-clip:padding-box;  
      border:0;  
      min-height:28px;
      border-radius: 10px;  
  }  
  .faq h1{
    text-align: center;
  }
</style>