export interface Section {
    id:number,
    title:string,
    startDate:Date,
    endDate:Date,
    overview:string,
    details:string[],
    metrics:string[],
    tools:string[],
    skills:string[],

};

export const Sections : Array<Section> = [
    {
        id:1,
        "title": "Personal Injury Protection Modernization",
        "startDate" : new Date('5/1/2023'),
        "endDate":new Date("4/1/2024"),
        "overview":"Integrated Claim Portal web application and financial processing systems with a third-party vendor that processes personal injury protection claims. ",
        "details": [
            "60% coding 40% meeting wtih stakeholders to define requirements, create stories, create architectural diagrams, determine application design.",
            "Mapped vendors business domain to Pemco's business domain for medical treatment data.  By doing this we were able to use the existing web application for display and cut development time by months.",
            "Designed and built UI and workflows for display and capture of PIP data with React and Redux.",
            "Streamlined and automated payment processes",
            "Coordinated team of developers and business stakeholders to elicit requirements and negotiate timelines.",
            "Created documentation for development patterns and practices, system architecture, and maintenance of the application.",
            "Designed database schema for capture of new incoming and outgoing data"
        ],
        "metrics" : [
            "Automated payment of 300+ payments per day to medical providers and claimants eliminating 10+ hours of manual work per day",
            "Reduced data entry errors by 60%",
            "Eliminated data duplication.",
            "Reduced the manual work required by Personal Injury adjusters by 1000+ hours per month.",
            "Cut length of open medical claims by 50%"
        ],
        "tools" : [
            'Visual studio', 
            'SQL Server',
            'ReactJS',
            'Redux',
            'Webpack 5',
            '.NET webapi',
            'C#',
            'Python',
            'Poweshell'
        ],
        "skills" : ["Event driven architecture", "Micro-kernal architecture"]
    },
    {
        id:2,
        "title": "Property Authority Request",
        "startDate" :new Date("2/1/2023") ,
        "endDate":new Date("4/1/2023"),
        "overview":"Created and implemented process for property adjusters to request increased payment authority when working property claims.",
        "details": [
            "Designed and built UI/UX using React and Redux.",
            "Automated data entry from internal and external sources.",
            "Automated approval process between adjusters and managers.",
            "Reduced the time needed to create requests from an hour to less than 1 minute.  ",
            "Automated generation of documentation and outgoing customer communications removing manual processes completely.  ",
            "Designed an intuitive User interface requiring little to no training for adjusters."

        ],
        "metrics" : [
            
        ],
        "tools" : [],
        "skills" : []
    },
    {
        id:3,
        "title": "Total Loss Worksheet",
        "startDate" :new Date("11/1/2022") ,
        "endDate":new Date("1/1/2023"),
        "overview":"Standardized the process of determining the value of a total loss by gathering all the applicable data within our system and from our third-party vendors.",
        "details": [
            "Ingested external data on asynchronously to ingest and prefill data reducing the time spent by adjusters from 2 hours t0 10 minutes.  ",
            "Generated reports to document the determined value of the total loss, inform the claimant, and reduced the time for the claimant to receive payment.  ",
            "Streamlined and automated the payment process for claims adjusters. ",
            "Designed and built the UI/UX for this new process using React and Redux.  "
        ],
        "metrics" : [
            
        ],
        "tools" : [],
        "skills" : []
    },
    {
        id:4,
        "title": "Batch Autopayment Vendor Integration",
        "startDate" :new Date("6/1/2022") ,
        "endDate":new Date("10/1/2022"),
        "overview":"Onboarded existing vendors payments and receipts to our Batch Autopayment system.  ",
        "details": [
            "Created scalable system using event driven architecture, queueing for asynchonous messages and guaranteed delivery",
            "Domain specific modules for rapid development and deployment.",
            "Elicited requirements from the business and vendors to process payments made to and coming from vendors.  ",
            "Created workflows to handle all payments that could be automated with zero touch by claims adjusters.  ",
            "Created workflows to streamline payments for adjusters when manual intervention was required.  ",
            "Reduced manual hours spent by adjusters from 1000+ hours per month to 10 hours per month.  "
        ],
        "metrics" : [
            "Asynchronously process 1000's of payments per hour."
        ],
        "tools" : ["VSCode", "Powershell", "Visual Studio", "RabitMQ", "Pester"],
        "skills" : ["Domain driven design", "Unit testing", "SQL Views/Sprocs/Query", "Database Schema Design"]
    },
    {
        id:5,
        "title": "Salvage and Subrogation Batch Autopayment",
        "startDate" :new Date("2/1/2021"),
        "endDate":new Date("5/1/2022"),
        "overview":"Designed and built a batch payment system to automate salvage and subrogation incoming and outgoing payments to PEMCOs 3rd party vendors.  ",
        "details": [
            "This effort saved 1000+ hours per month of manual work by claims adjusters by automating manual data entry, customer interactions, and business process validation.   "
        ],
        "metrics" : [
            
        ],
        "tools" : [],
        "skills" : []
    },
    {
        id:6,
        "title": "Auto Physical Damage",
        "startDate" :new Date("6/1/2020" ),
        "endDate":new Date("1/1/2021"),
        "overview":"Integrated 3rd party vendor’s vehicle repair system into claim portal application and streamlined processes to improve adjuster productivity and reduce data issues.  ",
        "details": [
            "Designed new workflows working closely with the business stakeholders to marry the vendors process with PEMCOs process.",
            "Created an intuitive, simple, and attractive UI to guide users through the workflow eliminating confusion and a need for training.  ",
            "Implemented RESTful API endpoints for data exchange with internal and external systems.",
            "Designed UI/UX for data exchange between PEMCO and the Vendor’s systems.",
            "Elicited requirements to create stories for the backlog.  ",
            "Worked with the mainframe team, vendor IT team, and other internal applications teams to integrate features throughout the PEMCO ecosystem ",
            "Removed interactions by adjusters in 5 systems to have one point of interaction increasing productivity by 3 times. ",
            "Decreased time spent by adjusters managing a claim from 30 hours 5 hours per month.  ",
            "Decreased time to close a claim from 6 months to 3 months."
        ],
        "metrics" : [
            
        ],
        "tools" : [],
        "skills" : []
    },
    {
        id:7,
        "title": "Process Financials",
        "startDate" :new Date("10/1/2019" ),
        "endDate":new Date("5/1/2020"),
        "overview":"Created a new web UI for our financials using React and Redux.  ",
        "details": [
            "Designed a system that was intuitive, aesthetically pleasing, and increased adjuster productivity.  ",
            "Implemented new processes and workflows that were not possible with the previous system.  ",
            "Automated generation of financial reports for claimants and audit agencies.  ",
            "Reduced number of clicks to make a payment from 20 to 4.  "
        ],
        "metrics" : [
            
        ],
        "tools" : [],
        "skills" : []
    },
    {
        id:8,
        "title": "Claim Portal",
        "startDate" :new Date("1/1/2015" ),
        "endDate":new Date("9/1/2019"),
        "overview":"A unified claim portal for claims adjusters to perform all their duties over the lifetime of a claim.  ",
        "details": [
            "Created React component library for reuse across teams and projects.",
            "Created universal styling across the application using BootstrapCSS.",
            "Scalable front-end and back-end infrastructure.  ",
            "Integrated 15 disparate systems into one unified web portal.  ",
            "Defined and created views into the claims file to allow adjusters to analyze claim data in a meaningful manner depending on their role and current task.  ",
            "Streamlined and automated adjuster work flows to reduce time spent on manual tasks.  ",
            "Implemented claim file history to track all actions throughout the lifetime of the claim.  ",
            "Created consistent look and feel across the claim portal web application.  ",
            "Implemented Diary and Notification system to allow adjusters to track their past, current, and future work and share this information with other members to the claims team.  ",
            "Automated incoming and outgoing email to index and ingest emails into the claim file. "
        ],
        "metrics" : [
            
        ],
        "tools" : [],
        "skills" : []
    }
];

