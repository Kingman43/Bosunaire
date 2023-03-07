import Faq from "react-faq-component";

export default function FaqPage() {

    const data = {
        title: "",
        rows: [
            {
                title: "Can I use bosunaire.com without signing in?",
                content: "Yes. " +
                    "Simply click 'Connect' at the top. You can search the map and get a feel for how " +
                    "the tool works. If you actually want to connect to another user without signing in, " +
                    "Bosunaire will require an email address in the 'Notes to host' field. " +
                    "In this case, we will email only the Bo hosts that accept non-verified Bo users. " +
                    "Also, 'Non-verified user' will be part of the subject field in the email we send to Bo hosts. " +
                    "You are much less likely to get a response from a Bo host if you are not signed in. " +
                    "We encourage users to sign in to bosunaire.com for higher response rates from hosts. " +
                    "Signing in gives the hosts confidence that you " +
                    "are 'real'. Also your Bosunaire user rating and user reviews will be included in the email " +
                    "to potential hosts. "
            },
            {
                title: "What does Bosunaire actually mean?",
                content: "Bosunaire derives from 'Bosun'. A bosun is a senior crew member of a boat or ship. " +
                    "The bosun supervises the deck crew including planning, scheduling and assigning tasks. " +
                    "Bosunaire is a made-up word refering to anyone that 'YOYOs' with another Bosunaire member. " +
                    "Users of Bosunaire.com may affectionately call each other 'Bo'. ",
            },
            {
                title: "What is 'Yoyo with Bo'?",
                content: "Once bosunaire.com connects you to another user, 'You're On Your Own' with the other user. " +
                    "Bosunaire.com is no longer involved. " +
                    "You and your connected Bo will discuss terms, payments, etc ... on your own. "
            },
            {
                title: "Is there a Bosunaire app I can download to my phone?",
                content: "No. Only a website. Downloading an app exposes lots of data you might not realize. " +
                    "Your privacy is paramount with us. " +
                    "Also, as a single software developer, a simple website is much easier to " +
                    "maintain than phone apps ",
            },
            {
                title: "Can you tell me more about privacy?",
                content: "Foremost, we do NOT collect or mine your data. We do not sell your email address. " +
                    "On top of that, your profile, user reviews, user rating, etc, are not exposed to the public " +
                    "or to members you have never attempt to connect with. Your profile/reviews/rating are shared " +
                    "only with hosts we attempt to connect with you. " +
                    "Hosts that respond to you via email are encouraged to attach their Bo profile containing " +
                    "user reviews and user ratings. ",
            },
            {
                title: "How do I verify the other person I'm emailing with is not a scammer? ",
                content: "Remember, you're on you own, so that's a VERY good question. " +
                    "Make sure the other Bo sends you their profile, user reviews and user ratings. " +
                    "Their profile should contain a link to at least one social media for the user. " +
                    "Verify the user via face-to-face real-time video and match it with their social media. " +
                    "Ask to friend them on social media. You can always unfriend after your event with the host. " +
                    "If they don't want to friend you on social media, beware. " +
                    "If their social media has limited history, beware. " +
                    "Keep your monetary exposure to a minimum. ",
            },
            {
                title: "Before I send money to a Bo host, what should I think about? ",
                content: "Foremost, think about exposure. Keep your monetary exposure to a minimum. " +
                    "Bosunaire suggests the two Bo members agree to a total cost of the host's service. " +
                    "The traveler then sends the host a minimal amount to reserve the date/service. This reduces the " +
                    "traveler's monetary exposure. Shortly after the traveler arrives, full payment is likely made. " +
                    "But, again, the details are up to the two connected Bo members. ",
            },
            {
                title: "Filler for future",
                content: "Filler ",
            },
            {
                title: "Filler for future",
                content: "Filler ",
            },
            {
                title: "Why did you develop bosunaire.com?",
                content: "I was a frequent user of the two main online BnB reservation " +
                    "sites. The options were often limited. Then, as their corporate fees, cleaning fees, taxes and " +
                    "other fees almost doubled the price shown for the BnB " +
                    "on their map, I felt the bait-and-switch. I grew frustrated and decided there must be a cheaper " +
                    "and more honest alternative for finding a host for my travels. Plus there were times when " +
                    "I wanted to know the host a bit more. ",
            },
            {
                title: "Who is behind Bosunaire? And what is the tech stack?",
                content: "I'm a software developer in Raleigh, NC, USA. " +
                    "Bosunaire.com is a serverless React client app. It's hosted on AWS Amplify. " +
                    "The React app uses Google Firebase Authentication and Google Firestore database. " +
                    "Being a lonely software developer putting up a website, " +
                    "I wanted to make this as easy on me as possible. There are no phone apps. I coded the Bosunaire " +
                    "website simply to connect travelers with hosts with no hidden fees." +
                    " After that, I'm no longer involved. " +
                    "The AWS and Google costs are minimal to me, so I don't need compensation. " +
                    "I'm probably cheering each time a new user signs up. ",
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
        <div className="pt-8">
            <h1 className="flex-col py-1 text-xl" >Frequently asked questions</h1>
            <div className="text-left">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    );
}

