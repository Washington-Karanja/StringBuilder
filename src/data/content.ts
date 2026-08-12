export type Post = {
  id?: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readingTime: string;
  cover: string;
  status: "Published" | "Draft";
  body: string[];
  content?: string;
};

export const posts: Post[] = [
  {
    slug: "loyalty-that-earns-its-keep",
    title: "Why Most Loyalty Programmes Underperform — and What the Best Ones Do Differently",
    excerpt:
      "Most loyalty programmes fail not because rewards are too expensive, but because they were never designed to change behaviour in the first place. Here is what separates the programmes that earn their place on the P&L from the ones that quietly erode margin.",
    category: "Loyalty",
    tags: ["Loyalty", "Programme Design", "Economics"],
    date: "2026-07-18",
    readingTime: "8 min read",
    cover: "/images/blog-1.jpg",
    status: "Published",
    body: [
      "Walk into almost any boardroom in retail, banking, hospitality or telecommunications and you will find a loyalty programme. Some are genuinely effective. Most are not. The gap between the two is not budget. It is not technology. It is whether the programme was designed around customer behaviour or built around the convenience of internal stakeholders.",
      "The programmes that underperform share a handful of predictable characteristics. They rely too heavily on discounts as the primary reward. They punish the customer with complexity — tier rules that change without warning, expiry dates buried in terms and conditions, redemption pathways that feel like a game nobody wants to play. They reward behaviour the business does not actually want: frequent but unprofitable transactions, basket sizes that shrink because the reward only triggers on a specific product line, or acquisition at the cost of retention. They measure enrolment and not change.",
      "Discount-driven loyalty is the most common failure mode. A programme that exists to give members ten percent off selected items is not loyalty. It is a recurring promotion dressed in different clothes. The customer learns to buy only when the discount is available and to switch brands the moment a competitor offers a better price. That is not a loyal relationship. It is a transactional negotiation. True loyalty changes behaviour: it increases visit frequency, grows basket size, extends customer lifetime and reduces price sensitivity. None of those outcomes are delivered by discounts alone.",
      "Poor programme economics make the problem worse. Many organisations design reward structures without understanding the margin impact of the behaviour they are trying to drive. A programme that gives away more value than the incremental revenue it generates is not a marketing investment. It is a loss-making subsidy. The best programmes model breakage, redemption rates, partner costs and incremental revenue before they launch. They know what each point or benefit costs the business and they measure whether the customer behaviour being encouraged justifies that cost.",
      "Simplicity is another differentiator. The best loyalty programmes can be explained in a single sentence and used without reading the terms and conditions. The customer should not need a calculator to understand what they will earn or a lawyer to understand what they can redeem. Complexity creates friction, and friction kills engagement. A programme that requires the customer to think harder than necessary about how it works has already lost them.",
      "Personalisation moves the programme from generic to relevant. A member who regularly buys baby products does not need the same offer as a member who regularly buys pet food. A customer who has not visited in six weeks needs a different message from a customer who visited three times last week. Programmes that treat every member the same treat every member as someone they do not know well enough to keep. The best programmes use customer data to make the right offer at the right moment, which means data quality and CRM capability are not back-office functions. They are the engine of the programme.",
      "Retention, frequency and incremental behaviour are the metrics that matter. Programme health should be measured by whether members buy more often, spend more per visit and choose the brand over competitors — not by how many people signed up. Enrolment is a vanity metric. Behaviour change is the outcome that pays the bills. A programme with two hundred thousand active members who visit once a quarter and only buy promotional items is less valuable than a programme with fifty thousand members who visit weekly and buy across a broader range. The latter changes the P&L. The former does not.",
      "The programmes that get this right treat loyalty, CRM and data as one connected system. The proposition, the marketing that activates it and the customer data beneath it must work together. A loyalty programme built on a broken customer view will fail in execution however good the design. A brilliant proposition will fail if marketing never reaches the right member at the right moment. The best programmes start with the data foundation, build the CRM capability to act on it and then design the loyalty proposition that gives customers a reason to care.",
      "If your programme feels like it is going through the motions — high enrolment, low engagement, margins under pressure — the question is not whether you need a new rewards catalogue. It is whether the programme was ever designed to change behaviour in the first place. Getting to a confident answer on that question is where any serious review of loyalty performance should begin.",
    ],
  },
  {
    slug: "data-before-design",
    title: "The Loyalty Problem Nobody Wants to Talk About: Bad Customer Data",
    excerpt:
      "You can have the most sophisticated loyalty strategy, the most compelling rewards and the most elegant CRM platform — and it will still underperform if the customer data underneath it cannot be trusted. Here is why data quality is the discipline everything else depends on.",
    category: "Data",
    tags: ["Customer Data", "Analytics", "CRM"],
    date: "2026-06-29",
    readingTime: "7 min read",
    cover: "/images/blog-2.jpg",
    status: "Published",
    body: [
      "Every loyalty programme rests on a set of assumptions about its customers. Who they are. What they value. How often they visit. How much they spend. Which offers they respond to. Which communications they ignore. These assumptions are only as reliable as the data that feeds them, and in most organisations that data is not reliable enough to trust.",
      "The problem is rarely that no data exists. It is that the data is fragmented across multiple systems, duplicated in customer records, inconsistent in format and incomplete in coverage. A retailer might have transactional data in one system, email engagement in another, app behaviour in a third and loyalty programme activity in a fourth. Unless those systems are connected and the data is clean, the customer view that emerges is partial, contradictory and often wrong. Decisions made on that view will be wrong too.",
      "A single customer view is the foundation of trustworthy analytics. It is the record that connects every interaction, transaction and signal to one identifiable customer rather than spreading them across multiple partial records. Without it, lifetime value calculations are unreliable. Churn predictions are guesses dressed in statistics. Segments are built on incomplete pictures of who the customer actually is. And when the analytics are wrong, the marketing, the loyalty proposition and the customer experience built on top of them will be wrong as well.",
      "The cost of bad data is not theoretical. It shows up as campaigns sent to the wrong people, offers that do not resonate, customers who receive communications for products they already bought, and programme decisions based on outdated or duplicate records. It shows up in wasted marketing spend, in lower redemption rates and in customer attrition that could have been prevented. The organisations that take data quality seriously do so not because they are perfectionists but because they have seen what happens when they do not.",
      "Customer lifetime value, churn prediction and cohort analysis are the three analytics capabilities that separate programmes that grow from programmes that stagnate. Lifetime value tells you which customers are worth investing in and how much to invest. Churn prediction tells you who is at risk of leaving before they actually leave — when there is still time to do something about it. Cohort analysis tells you whether the customers you acquired last quarter are behaving the way you expected and whether the programme is delivering on its promise. None of these capabilities survive bad data.",
      "Measurement and ROI are the disciplines that turn analytics into decisions. A dashboard that shows what happened is useful. A decision framework that tells you what to do about it is essential. The best analytics teams do not simply report numbers. They connect those numbers to actions: which segment should receive which offer, which channel should deliver it, which message will move the behaviour the programme needs. That requires clean data, clear models and the organisational discipline to act on the insight rather than archive it.",
      "Data should come first because everything that follows depends on it. Loyalty strategy, CRM execution, personalisation, campaign design — all of them are downstream of the data foundation. A loyalty programme designed before the data is trustworthy is a strategy built on assumptions. A CRM programme launched before the customer view is complete is engagement in the dark. An analytics capability deployed on fragmented data is a dashboard nobody can act on. Getting the data right is not a back-office project. It is the first thing that needs to be right.",
    ],
  },
  {
    slug: "the-case-for-an-audit",
    title: "Your Loyalty Programme Is Not the Problem. Your Customer Engagement Might Be.",
    excerpt:
      "Businesses invest heavily in loyalty platforms and rewards, then wonder why members stay passive. The missing piece is often not the programme itself. It is the CRM and engagement layer that turns customer data into action.",
    category: "CRM",
    tags: ["CRM", "Engagement", "Personalisation"],
    date: "2026-06-11",
    readingTime: "8 min read",
    cover: "/images/blog-3.jpg",
    status: "Published",
    body: [
      "Most organisations get loyalty backwards. They believe that if they build a compelling programme — attractive rewards, clear tiers, an app that works — customers will engage naturally. They do not. A loyalty programme without active, relevant engagement is a value store with no marketing. The customer signs up, earns points, forgets about the programme for months and only remembers it when they receive an expiration notice. That is not loyalty. That is a dormant account.",
      "The gap between membership and engagement is where most programmes fail. Membership is a metric of reach. Engagement is a metric of relationship. A programme with two hundred thousand members and a fifteen percent active engagement rate is underperforming regardless of how attractive the rewards look on paper. The question is not whether customers are members. It is whether the programme is changing how often they visit, how much they spend and how they feel about the brand when a competitor offers a similar discount.",
      "Batch-and-blast marketing is the default engagement model in many organisations. A campaign is designed, a segment is selected and the same message is sent to every member in that segment at the same time. The result is communication fatigue: messages that are irrelevant to most recipients, ignored by many and resentful to some. The customer who buys coffee every morning does not need an offer for coffee. The customer who has not visited in eight weeks does not need a reminder of the programme they have already decided to ignore. Generic communication does not activate members. It trains them to stop paying attention.",
      "Lifecycle marketing is the alternative. It structures engagement around the customer's actual behaviour rather than the organisation's campaign calendar. A new member receives a different sequence from a long-term member. A customer who has just made a large purchase receives a different message from a customer who has not visited in six weeks. A customer who has redeemed a high-value reward receives a different follow-up from a customer who has never redeemed at all. Lifecycle marketing respects the fact that the right message depends on where the customer is in their relationship with the brand, not on which segment the data team put them in last quarter.",
      "Personalisation is the layer that makes lifecycle marketing effective at scale. It uses the customer's actual behaviour — purchase history, channel preference, product affinity, response to previous offers — to determine the content, timing and channel of the next communication. A customer who always opens emails on Tuesday morning should not receive the same send-time as a customer who only checks their phone on Saturday afternoon. A customer who buys organic products should not receive offers for conventional ones. Personalisation is not a nice-to-have. It is the mechanism through which the programme demonstrates that it knows the customer well enough to treat them as an individual rather than a row in a database.",
      "Activation, retention and win-back are the three journeys that matter most. Activation is the first thirty to sixty days after a member joins. If the programme has not engaged the customer meaningfully by then, the probability of long-term active membership drops significantly. Retention is the ongoing relationship with the active member. It requires consistent, relevant communication that reinforces the value of staying rather than leaving. Win-back is the campaign directed at lapsed members. It needs to be honest about why the customer left and offer something that makes return worth the effort. All three journeys require coordination between the loyalty platform, the CRM system and the channels through which the brand communicates.",
      "The right message at the wrong moment can still fail. A personalised offer sent to a customer who is already overwhelmed with brand communications will be ignored. A win-back campaign sent to a customer whose last experience with the brand was a service failure will feel tone-deaf. Timing, tone and channel are as important as content. The best engagement programmes treat each communication as part of a continuous conversation rather than a one-off transaction. They understand that the customer's attention is limited and that every irrelevant message reduces the probability that the next relevant message will be read.",
      "Knowing your customer is worth nothing until you act on it. The data, the segments, the analytics and the platforms are infrastructure. They create value only when they drive communication that changes customer behaviour. That is the engagement layer, and it is the piece most organisations underinvest in. If your loyalty programme has strong economics and attractive rewards but members remain passive, the problem is almost certainly not the programme. It is the CRM and engagement strategy that should be bringing it to life.",
    ],
  },
];

export const categories = ["All", "Loyalty", "CRM", "Data"];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}