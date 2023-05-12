import Faq from "react-faq-component";
import BoHome from "@/components/bohome.js";

export default function FaqPage() {

    const data = {
        title: "",
        rows: [
            {
                title: "Can I use bosunaire.com without signing in?",
                content: "Yes. " +
                    "Simply click 'Search' at the top. You may search the map and get a feel for how " +
                    "the tool works. If you actually want to connect to another user without signing in, " +
                    "Bosunaire will require an email address. " +
                    "If not signed in, we will email only the Bo hosts that accept non-verified Bo users. " +
                    "Also, 'Non-verified user' will be part of the subject field in the email we send to Bo hosts. " +
                    "You are much less likely to get a response from a Bo host if you are not signed in. " +
                    "We encourage users to sign in to bosunaire.com for higher response rates from hosts. " +
                    "Signing in gives the hosts confidence that you " +
                    "are 'real'. Also, at your discretion, your Bosunaire user rating and user reviews may be " +
                    "included in the email to potential hosts/homeowners."
            },
            {
                title: "What does Bosunaire actually mean?",
                content: "Bosunaire derives from 'Bosun'. A bosun is a senior crew member of a boat or ship. " +
                    "The bosun supervises much of the crew including planning, scheduling and assigning tasks. " +
                    "Bosunaire is a made-up word referring to anyone that 'YOYOs' with another Bosunaire member. " +
                    "Users of Bosunaire.com may affectionately call each other 'Bo'.",
            },
            {
                title: "What is 'Yoyo with Bo'?",
                content: "Once bosunaire.com connects you to another user, 'You're On Your Own' with the other user. " +
                    "Bosunaire.com is no longer involved. " +
                    "You and your connected Bo will discuss terms, payments, etc ... you're on your own."
            },
            {
                title: "Is there a Bosunaire app I can download to my phone?",
                content: "No. Bosunaire is website only. " +
                    "Downloading an app exposes your personal data. " +
                    "With Bo your privacy is paramount. " +
                    "Also, as a single software developer, a website is much easier to " +
                    "maintain than phone apps",
            },
            {
                title: "Can you tell me more about privacy?",
                content: "Foremost, we do NOT collect or mine your data. We do not sell your email address. " +
                    "On top of that, your profile, user reviews, user rating, etc, are not exposed to the public " +
                    "or to members you have never attempted to connect with. Upon a submitted search, you determine whether " +
                    "your profile/reviews/rating are shared with potential hosts. " +
                    "Hosts that respond to you via email are encouraged to attach their profile containing " +
                    "user reviews and user ratings. " +
                    "Agreements are performed via EMails between homeowners/hosts and buyers/travellers."
            },
            {
                title: "How do I verify the other person I'm emailing is not a scammer? ",
                content: "Remember, you're on you own, so that's a VERY good question. " +
                    "Make sure the other Bo sends you their profile, user reviews and user ratings. " +
                    "Their profile should contain a link to at least one social media for the user. " +
                    "Ask to verify the user via face-to-face real-time video and match it with their social media. " +
                    "For larger transactions, possibly ask to friend them on social media. " +
                    "If their social media has limited history, beware. " +
                    "Keep your monetary exposure to a minimum. ",
            },
            {
                title: "Before I send money to a Bo host, what should I think about? ",
                content: "If you're buying a house, this is likely mute, as you'll follow the normal steps of a FSBO. " +
                    "However, if you're renting a Bed and Breakfast or similar, think about exposure. " +
                    "Keep your monetary exposure to a minimum. " +
                    "Bosunaire suggests the two Bo members agree to a total cost of the host's service. " +
                    "The traveler then sends the host a minimal amount to reserve the date/service. This reduces the " +
                    "traveler's monetary exposure. Shortly after the traveler arrives, full payment is likely made. " +
                    "But, again, the details are up to the two connected Bo members. ",
            },
            {
                title: "Why did you develop bosunaire.com?",
                content:
                    "To solve to two problems, mainly privacy regarding what I do with my house/home. " +
                    "One, I wanted to list my home for sale without my friends " +
                    "and neighbors asking questions. " +
                    "Secondly, I was a frequent user of the two other online BnB reservation " +
                    "sites. The options were often limited. Then, as their corporate fees, cleaning fees, taxes and " +
                    "other fees almost doubled the price shown for the BnB " +
                    "on their map, I felt the bait-and-switch. I grew frustrated and decided there must be a cheaper " +
                    "and more honest alternative for finding a host for my travels. " +
                    "Plus there were times when I just want to pay cash and not be tracked. " +
                    "Also, I'd spoken with two hosts on other BnB sites that did not want their pictures or even their general " +
                    "location displayed to the public. These reasons are why Bosunaire leans towards privacy over ease-of-use " +
                    "during the search process.",
            },
            {
                title: "Who is behind Bosunaire? And what is the tech stack?",
                content: "I'm a software developer in Raleigh, NC, USA. " +
                    "Bosunaire.com is a Next.js (React server-side-rendering) app using OpenStreetMaps. " +
                    "It's hosted on AWS Amplify. " +
                    "The Next.js app uses Google Firebase Authentication and Google Firestore database. " +
                    "There are no phone apps. The Bosunaire " +
                    "website was coded simply to connect hosts with buyers/travelers with no hidden fees. " +
                    "After that, I'm no longer involved. " +
                    "The AWS and Google costs are minimal to me, so I don't need compensation. " +
                    "Please feel free to email me with questions or comments:  bosunaire@gmail.com",
            },

        ],
    };

    const styles = {
        bgColor: 'lavender',
//        titleTextColor: 'grey',
//        titleTextSize: '24px',
        rowTitleColor: 'purple',
//        rowTitleTextSize: 'large',
        rowContentColor: 'darkslategrey',
//        rowContentTextSize: 'medium',
//        rowContentPaddingTop: '2px',
//        rowContentPaddingBottom: '2px',
//        rowContentPaddingLeft: '2px',
//        rowContentPaddingRight: '2px',
//        arrowColor: "darkslategrey",
//        transitionDuration: ".3s",
//        timingFunc: "ease"
    }

    const config = {
//        animate: true,
//        arrowIcon: "V",
        tabFocus: true,
//        openOnload: 0,
        expandIcon: "+",
        collapseIcon: "-",
    };

    return (
        <div className="mx-auto max-w-prose  flex flex-col py-1">

            <h1 className="flex-col pt-4 text-xl" >Frequently asked questions</h1>
            <div className="text-left">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
            <BoHome/>
        </div>
    );
}

