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
                    "In this case, we will Email only the Bo hosts that accept non-verified Bo users. " +
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
                    "The made-up word Bosunaire is anyone that YOYOs with another via Bosunaire.com. " +
                    "Users of Bosunaire.com may affectionately call each other 'Bo'.",
            },
            {
                title: "What is 'Yoyo with Bo'?",
                content: "Once bosunaire.com connects you to another user, 'You're On Your Own' with the other user. " +
                    "Bosunaire.com is no longer involved. " +
                    "You and your connected Bo will discuss terms, payments, etc on your own."
            },
            {
                title: "Filler for future",
                content: "More answers to be provided",
            },            {
                title: "Filler for future",
                content: "More answers to be provided",
            },            {
                title: "Filler for future",
                content: "More answers to be provided",
            },
            {
                title: "Why did you develop bosunaire.com?",
                content: "I was a frequent user of the two main online BnB reservation " +
                    "sites back when they were affordable. Once their cleaning fees and " +
                    "other fees began to basically double the price for a BnB shown " +
                    "on their map, I grew frustrated and decided there must be a cheaper " +
                    "and more honest alternative. Being a single software developer putting up a simple website, " +
                    "I wanted to make this as easy on me as possible. Therefore, the Bosunaire " +
                    "website simply connects travelers with hosts, and I'm no longer involved.",


            },
            {
                title: "Who is behind Bosunaire? And what is the tech stack?",
                content: "I'm a software developer in Raleigh, NC, USA. " +
                    "Bosunaire.com is a serverless React client app hosted on AWS Amplify using Google " +
                    "Firebase Auth for sign-in and Google Firestore database",
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

