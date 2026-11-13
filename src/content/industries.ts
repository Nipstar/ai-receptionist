import type { Industry } from './types';

/**
 * Industry pages, rendered by src/app/for/[industry]/page.tsx.
 * Salons is verbatim from reference/design/Salons.dc.html. Every other page is written
 * for that trade's real calls. Example businesses are invented and use 555 numbers only.
 * No raw prices: use {price}, {minutes}, {overage}.
 */
export const industries: Industry[] = [
  {
    slug: 'salons',
    name: 'Salons and spas',
    titleName: 'Salons',
    audience: 'Hair salons, beauty salons and day spas',
    metaDescription:
      'Your phone answered mid-color and mid-cut. Booking requests, prices you share and cancellations sent straight to you. Website chat included, {price} a month.',
    eyebrow: 'AI receptionist for salons and spas',
    h1: 'Your hands are full. Your phone still gets answered.',
    intro:
      'Mid-color, mid-cut, mid-facial. Your receptionist picks up, answers what clients ask, takes the booking request and sends it straight to you. Website chat too, for {price} a month.',
    example: {
      business: 'Luxe Hair Studio',
      time: 'Sat 10:32 AM',
      lines: [
        { who: 'receptionist', text: "Luxe Hair Studio, the team's with clients right now. How can I help?" },
        { who: 'caller', text: 'Do you have anything next Saturday for a balayage? Ideally with Maria.' },
        {
          who: 'receptionist',
          text: "Saturdays go quickly. Balayage starts at $180 and takes about three hours. Can I take your name and number? I'll get it to the front desk to confirm a time with Maria.",
        },
      ],
      summary: {
        sentAt: '10:35 AM',
        title: 'Booking request: balayage, next Saturday, Maria',
        caller: 'Jess T.',
        phone: '(555) 014-7731',
        notes: ['New client', 'Flexible on time'],
      },
    },
    examplePrices: [180],
    callsHeading: 'The calls a salon gets all day, handled',
    callsIntro: "It answers from what you tell it. Anything it can't answer, it takes down properly and passes to you.",
    calls: [
      { title: '"Do you have anything Saturday?"', text: 'Takes the service, stylist and preferred times, and sends you the request.' },
      { title: '"How much is a cut and color?"', text: 'Gives the starting prices you choose to share. Never invents a number.' },
      { title: '"I need to cancel tomorrow."', text: 'Emails you straight away, so you have the best chance of filling the slot.' },
      { title: '"Where do I park?"', text: 'Directions, parking, opening hours, every time, without anyone stopping work.' },
      { title: '"Do you sell gift cards?"', text: 'Explains how to buy one and points to your website or online booking page.' },
      { title: 'Late-night website visitors', text: 'The website chat answers the same questions at 11 PM and passes on the request.' },
    ],
    planHeading: 'Same plan as every business. {price}.',
    planText: '{minutes} call minutes, website chat, a summary after every call. No setup fee, month to month.',
    faqs: [
      {
        q: 'Can it book into my salon software?',
        a: 'Not on this plan. It takes the booking request and sends it to you, and in chat it can share your online booking link. Direct booking comes with our done-for-you plan.',
      },
      {
        q: 'Will it sound right for my salon?',
        a: "It uses your salon's name, your services and your prices, in a warm, calm voice. You hear it on a test number before any client does.",
      },
      {
        q: 'What if a client asks for a specific stylist?',
        a: 'It notes the stylist in the request, so the summary you get already says who they want.',
      },
    ],
    ctaHeading: "Keep your hands on the client. We'll get the phone.",
    related: ['med-spas', 'dental'],
  },

  {
    slug: 'dental',
    name: 'Dental offices',
    titleName: 'Dental Offices',
    audience: 'Dental offices and dental practices',
    metaDescription:
      'Patients calling about a toothache, a cleaning or their insurance get an answer, not voicemail. Every call summarized to your front desk. {price} a month.',
    eyebrow: 'AI receptionist for dental offices',
    h1: 'The front desk is checking someone in. The next patient still gets an answer.',
    intro:
      'Check-ins, insurance calls, a patient in the chair who needs the hygienist. Your receptionist picks up the overflow, answers the routine questions and sends the front desk a clear note, so nobody waits on hold or hangs up. Website chat too, for {price} a month.',
    example: {
      business: 'Brightside Dental',
      time: 'Mon 7:48 AM',
      lines: [
        { who: 'receptionist', text: "Brightside Dental, the office opens at eight. I can take a message for the team. What's going on?" },
        { who: 'caller', text: "I've had a throbbing toothache since last night and it's getting worse. Can I be seen today?" },
        {
          who: 'receptionist',
          text: "I'm sorry, that sounds painful. I'll mark this as urgent for the team first thing. Can I take your name, date of birth and the best number to reach you?",
        },
      ],
      summary: {
        sentAt: '7:50 AM',
        title: 'Urgent: toothache since last night, wants same day',
        caller: 'Marcus L.',
        phone: '(555) 016-3390',
        notes: ['Existing patient', 'Lower left, worse overnight'],
      },
    },
    callsHeading: 'The calls a dental office gets every day, handled',
    callsIntro:
      'It answers from the details you give it and never offers clinical advice. Anything that needs a dentist or your billing team goes to you as a clear message.',
    calls: [
      { title: '"Do you take my insurance?"', text: 'Lists the plans you tell it you accept, then takes the details so your team can confirm coverage.' },
      { title: '"I think I cracked a tooth."', text: 'Takes the symptoms and contact details and marks the summary urgent, so it is the first thing you see.' },
      { title: '"I need to move my cleaning."', text: 'Notes the current appointment and the times that work, and emails the request to the front desk.' },
      { title: '"Are you taking new patients?"', text: 'Answers yes or no from your instructions, explains what a first visit involves and takes their details.' },
      { title: '"What time do you open Saturday?"', text: 'Hours, location, parking and which entrance to use, without pulling anyone off the front desk.' },
      { title: 'Website questions after hours', text: 'The chat answers the same questions at night and passes new patient requests to you by morning.' },
    ],
    planHeading: 'One plan for your whole office. {price}.',
    planText: '{minutes} call minutes, website chat and an email summary after every call. No setup fee, month to month.',
    faqs: [
      {
        q: 'Will it give patients medical advice?',
        a: 'No. It never diagnoses or recommends treatment. It takes the symptoms in the caller’s own words, marks anything that sounds urgent and passes it to your team.',
      },
      {
        q: 'Can it schedule into our practice software?',
        a: 'Not on this plan. It takes the appointment request with the patient’s preferred times and emails it to the front desk to book. Direct booking comes with our done-for-you plan.',
      },
      {
        q: 'What does it do with patient details?',
        a: 'It asks only for what you tell it to collect, usually name, date of birth, phone number and reason for calling, and sends that in the call summary to the email address you choose.',
      },
    ],
    ctaHeading: 'Let the front desk look after the patient in front of them.',
    related: ['med-spas', 'law-firms'],
  },

  {
    slug: 'contractors',
    name: 'Contractors',
    titleName: 'Contractors',
    audience: 'Contractors, plumbers, electricians, HVAC and home service businesses',
    metaDescription:
      'On a roof or under a sink when the phone rings? Every estimate request and emergency call answered and sent to you with the details. {price} a month.',
    eyebrow: 'AI receptionist for contractors',
    h1: "You're on the job. The next job still gets a call back.",
    intro:
      'Up a ladder, in a crawlspace, driving between sites. Your receptionist picks up, finds out what the job is, where it is and how urgent it is, and sends you the details so you can call back with a plan instead of a guess. Website chat too, for {price} a month.',
    example: {
      business: 'Ridgeline Plumbing',
      time: 'Tue 6:12 PM',
      lines: [
        { who: 'receptionist', text: "Ridgeline Plumbing, the crew's out on jobs right now. What can I help with?" },
        { who: 'caller', text: "Our water heater is leaking all over the garage floor. Can someone come out tonight?" },
        {
          who: 'receptionist',
          text: "Let's get this to the team right away. If you can, turn off the cold water valve on top of the heater. What's your address and the best number for a call back?",
        },
      ],
      summary: {
        sentAt: '6:14 PM',
        title: 'Urgent: water heater leaking, wants someone tonight',
        caller: 'Rob K.',
        phone: '(555) 012-8847',
        notes: ['Garage, 40 gal tank', 'Homeowner, in service area'],
      },
    },
    callsHeading: 'The calls a contractor gets on every job, handled',
    callsIntro:
      'It answers from what you tell it, sticks to your service area and never quotes a job. Every lead reaches you with what you need to call back.',
    calls: [
      { title: '"Can you give me a quote?"', text: 'Takes the job, the address, photos to follow by email and a good time to talk, so your call back is a real conversation.' },
      { title: '"Water is coming through the ceiling."', text: 'Marks it urgent at the top of the summary and passes on any safety steps you tell it to give.' },
      { title: '"Do you work in my area?"', text: 'Checks the town or ZIP against the service area you give it, and says so politely if it is outside.' },
      { title: '"Are you licensed and insured?"', text: 'Answers with the license and insurance details you choose to share.' },
      { title: '"When can you start?"', text: 'Gives the lead time you tell it, then takes the details so you can confirm.' },
      { title: 'Homeowners browsing at night', text: 'The website chat answers the same questions after dinner and sends you the lead.' },
    ],
    planHeading: 'One plan, every trade. {price}.',
    planText: '{minutes} call minutes, website chat and a summary after every call. No setup fee, month to month.',
    upsell:
      'Want new jobs booked straight into your calendar and an instant text back to every missed caller? That is our done-for-you plan.',
    faqs: [
      {
        q: 'Will it quote prices for jobs?',
        a: 'Only the prices you give it, like a call-out fee or a starting price. It never estimates a job. It takes the details so you can quote properly.',
      },
      {
        q: 'Can it tell an emergency from a routine job?',
        a: 'Yes. You tell it what counts as urgent for your trade, like a leak, no heat or a burning smell, and it puts those at the top of the summary marked urgent.',
      },
      {
        q: 'Can it book jobs into my calendar?',
        a: 'Not on this plan. It takes the request and sends it to you to schedule. Calendar booking and text-back to missed callers come with our done-for-you plan.',
      },
    ],
    ctaHeading: 'Stay on the job. Your phone is covered.',
    related: ['property-management', 'auto-repair'],
  },

  {
    slug: 'law-firms',
    name: 'Law firms',
    titleName: 'Law Firms',
    audience: 'Law firms, solo attorneys and legal practices',
    metaDescription:
      'Prospective clients reach your firm, not voicemail. Intake details, case type and urgency sent to you after every call. No legal advice given. {price} a month.',
    eyebrow: 'AI receptionist for law firms',
    h1: "You're in court. New clients still reach your firm.",
    intro:
      'Hearings, depositions, client meetings with the door closed. Your receptionist answers in your firm’s name, takes the intake details you ask for and sends them to you, so a potential client hears a calm voice instead of voicemail. Website chat too, for {price} a month.',
    example: {
      business: 'Calder and Vance Law',
      time: 'Wed 12:20 PM',
      lines: [
        { who: 'receptionist', text: 'Calder and Vance Law, the attorneys are in meetings. How can I help you today?' },
        { who: 'caller', text: 'I was rear-ended last week and the other driver’s insurer keeps calling me. Do you handle that?' },
        {
          who: 'receptionist',
          text: "The firm does handle car accident cases. I can't give legal advice, but I can take a few details for an attorney to review. Can I start with your name and number?",
        },
      ],
      summary: {
        sentAt: '12:24 PM',
        title: 'New inquiry: car accident, insurer calling',
        caller: 'Alicia M.',
        phone: '(555) 013-5562',
        notes: ['Accident last week', 'Wants a call before speaking to insurer'],
      },
    },
    callsHeading: 'The calls a law firm gets every day, handled',
    callsIntro:
      'It answers from what you tell it and never gives legal advice. Every inquiry reaches you with the details your intake process needs.',
    calls: [
      { title: '"Do you handle cases like mine?"', text: 'Answers from the practice areas you list, and politely says so when a matter is outside them.' },
      { title: '"What does a consultation cost?"', text: 'Gives your consultation terms if you choose to share them. It never discusses fees beyond that.' },
      { title: '"I need to speak to my attorney."', text: 'Takes the client’s name, matter and message and marks it for the attorney you name.' },
      { title: '"Can you tell me if I have a case?"', text: 'Explains that an attorney needs to review it and takes the facts in the caller’s own words.' },
      { title: 'Opposing parties and vendors', text: 'Takes a message and labels it clearly, so it does not get mixed in with new client inquiries.' },
      { title: 'Late-night website inquiries', text: 'The website chat collects the same intake details at midnight and sends them to you by morning.' },
    ],
    planHeading: 'One plan for your whole firm. {price}.',
    planText: '{minutes} call minutes, website chat and an email summary after every call. No setup fee, month to month.',
    faqs: [
      {
        q: 'Will it give legal advice?',
        a: 'No. It says clearly that it cannot give legal advice, takes the caller’s details and passes them to your firm for an attorney to review.',
      },
      {
        q: 'Can it collect the intake questions we use?',
        a: 'Yes. Give us your intake questions, like matter type, dates and the other party’s name for a conflict check, and it asks them and puts the answers in the summary.',
      },
      {
        q: 'Can it schedule consultations?',
        a: 'Not on this plan. It takes the request and preferred times and sends them to you to confirm. Calendar booking comes with our done-for-you plan.',
      },
    ],
    ctaHeading: 'Focus on the client in the room. We will get the phone.',
    related: ['real-estate', 'dental'],
  },

  {
    slug: 'real-estate',
    name: 'Real estate agents',
    titleName: 'Real Estate Agents',
    audience: 'Real estate agents, brokers and teams',
    metaDescription:
      'Buyer and seller calls answered while you are at a showing. Property questions, showing requests and seller leads sent to you right away. {price} a month.',
    eyebrow: 'AI receptionist for real estate',
    h1: "You're at a showing. The next buyer still gets an answer.",
    intro:
      'Showings, closings, open houses, time in the car. Your receptionist answers sign calls and listing inquiries, shares the property details you give it and sends you every lead with what they are looking for. Website chat too, for {price} a month.',
    example: {
      business: 'Harbor Point Realty',
      time: 'Sun 2:05 PM',
      lines: [
        { who: 'receptionist', text: "Harbor Point Realty, Jen is showing a home right now. How can I help?" },
        { who: 'caller', text: "I'm outside the house on Maple with your sign. How many bedrooms, and can I see it this week?" },
        {
          who: 'receptionist',
          text: "That one has three bedrooms and two baths. I'll get a showing request to Jen now. Can I take your name, number and the days that work for you?",
        },
      ],
      summary: {
        sentAt: '2:07 PM',
        title: 'Showing request: Maple Ave listing, this week',
        caller: 'Tom W.',
        phone: '(555) 017-2214',
        notes: ['Pre-approved, per caller', 'Free weekday evenings'],
      },
    },
    callsHeading: 'The calls an agent gets all day, handled',
    callsIntro:
      'It answers from the listing details and instructions you give it. Every buyer and seller lead reaches you with what they want and how to reach them.',
    calls: [
      { title: '"Is the house on Maple still available?"', text: 'Answers from the listing details you give it and takes the caller’s details for you.' },
      { title: '"Can I see it this weekend?"', text: 'Takes the showing request with the days and times that work and sends it to you to confirm.' },
      { title: '"What would my house sell for?"', text: 'Takes the address and timeline and passes on a seller lead. It never gives a valuation.' },
      { title: '"Are you working with buyers?"', text: 'Asks the questions you choose, like area, budget range and timing, and sends you the answers.' },
      { title: 'Calls from other agents', text: 'Takes the message and labels it, so it is easy to tell apart from new client leads.' },
      { title: 'Late-night listing browsers', text: 'The website chat answers listing questions at night and passes on the lead.' },
    ],
    planHeading: 'One plan, every listing. {price}.',
    planText: '{minutes} call minutes, website chat and a summary after every call. No setup fee, month to month.',
    faqs: [
      {
        q: 'Can it answer questions about my listings?',
        a: 'Yes, from the details you give it, like beds, baths, price and open house times. Send us changes when a listing updates and we update it.',
      },
      {
        q: 'Will it tell sellers what their home is worth?',
        a: 'No. It takes the address, timeline and reason for selling and sends you the lead, so the valuation conversation stays with you.',
      },
      {
        q: 'Can it book showings into my calendar?',
        a: 'Not on this plan. It takes the showing request and sends it to you to confirm. Calendar booking comes with our done-for-you plan.',
      },
    ],
    ctaHeading: 'Stay with your client. Every new lead still reaches you.',
    related: ['property-management', 'law-firms'],
  },

  {
    slug: 'property-management',
    name: 'Property management',
    titleName: 'Property Managers',
    audience: 'Property management companies and landlords',
    metaDescription:
      'Maintenance requests, rental inquiries and tenant questions answered day and night. Urgent repairs flagged at the top of the summary. {price} a month.',
    eyebrow: 'AI receptionist for property management',
    h1: 'Tenants call at all hours. Every call gets answered.',
    intro:
      'A leak at 2 AM, three people asking about the same vacancy, an owner who wants an update. Your receptionist answers in your company name, logs the request properly and sends it to you, with anything urgent clearly marked. Website chat too, for {price} a month.',
    example: {
      business: 'Oakview Property Management',
      time: 'Thu 11:42 PM',
      lines: [
        { who: 'receptionist', text: 'Oakview Property Management, after-hours line. What can I help with?' },
        { who: 'caller', text: "Water is dripping through my bathroom ceiling from the unit upstairs. It's getting worse." },
        {
          who: 'receptionist',
          text: "I'm marking this as an urgent maintenance request now. Can you give me your address and unit number, and is anyone home upstairs?",
        },
      ],
      summary: {
        sentAt: '11:45 PM',
        title: 'Urgent maintenance: leak from unit above',
        caller: 'Priya S.',
        phone: '(555) 015-6608',
        notes: ['Unit 2B, 412 Linden St', 'Upstairs tenant not answering'],
      },
    },
    callsHeading: 'The calls a property manager gets day and night, handled',
    callsIntro:
      'It answers from the policies and details you give it. Maintenance, leasing and owner calls each reach you as a clear, labeled message.',
    calls: [
      { title: '"My heat is out."', text: 'Takes the address, unit and problem, and marks it urgent using the rules you set for emergencies.' },
      { title: '"Is the two-bedroom still available?"', text: 'Shares the rent, deposit and pet policy you give it, and takes the prospect’s details.' },
      { title: '"How do I pay rent online?"', text: 'Points tenants to your portal and answers the payment questions you cover.' },
      { title: '"Can I schedule a viewing?"', text: 'Takes the request with the times that work and sends it to you to confirm.' },
      { title: 'Owner calls', text: 'Takes the owner’s name, property and message, labeled so it stands apart from tenant requests.' },
      { title: 'Rental searches at night', text: 'The website chat answers vacancy questions after hours and passes on the inquiry.' },
    ],
    planHeading: 'One plan for every door. {price}.',
    planText: '{minutes} call minutes, website chat and a summary after every call. No setup fee, month to month.',
    faqs: [
      {
        q: 'How does it handle maintenance emergencies?',
        a: 'You tell it what counts as an emergency, like active leaks, no heat or a lockout. It marks those urgent at the top of the summary and gives any safety steps you provide. Text alerts to your phone switch on once carrier registration is approved.',
      },
      {
        q: 'Can it log requests in our property software?',
        a: 'Not on this plan. Every request arrives as an email summary that your team can forward or copy into your system.',
      },
      {
        q: 'Can it answer questions about a specific vacancy?',
        a: 'Yes, from the details you give it, like rent, deposit, availability date and pet policy. Send us changes when a unit is leased and we update it.',
      },
    ],
    ctaHeading: 'Every tenant call answered, without carrying the phone to bed.',
    related: ['real-estate', 'contractors'],
  },

  {
    slug: 'med-spas',
    name: 'Med spas',
    titleName: 'Med Spas',
    audience: 'Medical spas and aesthetic clinics',
    metaDescription:
      'Treatment questions, consultation requests and pricing you choose to share, answered while your injectors are with clients. Chat included, {price} a month.',
    eyebrow: 'AI receptionist for med spas',
    h1: 'Your team is mid-treatment. New clients still get a warm welcome.',
    intro:
      'Injectors with clients, the front desk checking someone out, a full afternoon. Your receptionist answers in your spa’s name, explains the treatments you offer, gives the prices you choose to share and sends every consultation request to you. Website chat too, for {price} a month.',
    example: {
      business: 'Glow Aesthetics',
      time: 'Fri 3:18 PM',
      lines: [
        { who: 'receptionist', text: "Glow Aesthetics, our team is with clients right now. How can I help?" },
        { who: 'caller', text: "I've never had Botox before. Do I need a consultation first, and do you have evenings?" },
        {
          who: 'receptionist',
          text: "First-time clients start with a consultation with one of our injectors, and we have evening appointments on Thursdays. Can I take your name and number so the team can set that up?",
        },
      ],
      summary: {
        sentAt: '3:21 PM',
        title: 'Consultation request: first-time Botox, evenings',
        caller: 'Nina C.',
        phone: '(555) 018-4471',
        notes: ['New client', 'Prefers Thursday evening'],
      },
    },
    callsHeading: 'The calls a med spa gets all day, handled',
    callsIntro:
      'It answers from the treatment details you give it and never offers medical advice. Anything clinical goes to your team as a clear message.',
    calls: [
      { title: '"How much is lip filler?"', text: 'Gives the starting prices you choose to share, or explains that pricing is set at consultation.' },
      { title: '"Is there any downtime?"', text: 'Shares the general aftercare information you approve, and passes anything specific to your team.' },
      { title: '"I want to book a consultation."', text: 'Takes the treatment, preferred times and contact details, and emails you the request.' },
      { title: '"I have a reaction after my treatment."', text: 'Takes the details, marks it urgent and follows your instructions for after-care concerns.' },
      { title: '"Do you have any specials?"', text: 'Shares the current offers you give it and nothing more.' },
      { title: 'Evening website visitors', text: 'The website chat answers treatment questions late at night and passes on the request.' },
    ],
    planHeading: 'Same plan as every business. {price}.',
    planText: '{minutes} call minutes, website chat and a summary after every call. No setup fee, month to month.',
    faqs: [
      {
        q: 'Will it give medical advice about treatments?',
        a: 'No. It shares only the general information you approve and passes anything clinical, including concerns after a treatment, to your team as an urgent message.',
      },
      {
        q: 'Can it book into our spa software?',
        a: 'Not on this plan. It takes the consultation request and emails it to you, and in chat it can share your online booking link. Direct booking comes with our done-for-you plan.',
      },
      {
        q: 'Can it sound like our brand?',
        a: 'It uses your spa’s name, treatment names and the tone you ask for. You hear it on a test number before any client does.',
      },
    ],
    ctaHeading: 'Keep your focus on the client in the chair.',
    related: ['salons', 'dental'],
  },

  {
    slug: 'auto-repair',
    name: 'Auto repair shops',
    titleName: 'Auto Repair Shops',
    audience: 'Auto repair shops, mechanics and service centers',
    metaDescription:
      'Repair requests, status calls and shop questions answered while your techs are under the hood. Every call summarized to the service desk. {price} a month.',
    eyebrow: 'AI receptionist for auto repair shops',
    h1: 'Your techs are under the hood. Customers still get an answer.',
    intro:
      'Bays full, the service writer with a customer, a tow truck pulling in. Your receptionist answers in your shop’s name, takes the vehicle and the problem, answers the routine questions and sends the service desk a clear summary. Website chat too, for {price} a month.',
    example: {
      business: 'Summit Auto Care',
      time: 'Mon 8:05 AM',
      lines: [
        { who: 'receptionist', text: 'Summit Auto Care, the service desk is with a customer. How can I help?' },
        { who: 'caller', text: "My check engine light came on and the car is shaking when I idle. Can you look at it today?" },
        {
          who: 'receptionist',
          text: "I'll get that to the service desk now. What's the year, make and model, and the best number to reach you? Are you able to drive it in?",
        },
      ],
      summary: {
        sentAt: '8:08 AM',
        title: 'Repair request: check engine light, rough idle, wants today',
        caller: 'Dev P.',
        phone: '(555) 011-9035',
        notes: ['2016 Honda Accord', 'Can drive it in'],
      },
    },
    callsHeading: 'The calls a repair shop gets all day, handled',
    callsIntro:
      'It answers from what you tell it and never diagnoses a car or quotes a repair. Every call reaches the service desk with the vehicle and the problem.',
    calls: [
      { title: '"Is my car ready yet?"', text: 'Takes the name and vehicle and sends the service desk a status request to call back.' },
      { title: '"How much for brakes?"', text: 'Gives the starting prices you choose to share. It never quotes a repair it has not seen.' },
      { title: '"Can you fit me in today?"', text: 'Takes the vehicle, the problem and when they can drop it off, and sends the request.' },
      { title: '"Do you work on diesels?"', text: 'Answers from the makes and services you list.' },
      { title: '"What are your hours?"', text: 'Hours, location, drop-off and key box instructions, without pulling anyone off a job.' },
      { title: 'Website visitors after closing', text: 'The website chat answers the same questions at night and passes on the repair request.' },
    ],
    planHeading: 'One plan for your whole shop. {price}.',
    planText: '{minutes} call minutes, website chat and a summary after every call. No setup fee, month to month.',
    faqs: [
      {
        q: 'Can it tell customers if their car is ready?',
        a: 'Not on its own. It does not connect to your shop system. It takes the customer’s name and vehicle and sends the service desk a status request to call back.',
      },
      {
        q: 'Will it diagnose problems or quote repairs?',
        a: 'No. It takes the symptoms in the customer’s words and passes them on. It only gives prices you choose to share, like an oil change or inspection.',
      },
      {
        q: 'Can it book appointments?',
        a: 'Not on this plan. It takes the request with drop-off times and sends it to you to confirm. Calendar booking comes with our done-for-you plan.',
      },
    ],
    ctaHeading: 'Keep the bays moving. We will get the phone.',
    related: ['contractors', 'property-management'],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
