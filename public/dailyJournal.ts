export interface Entry {
    today:Date,
    subjects:Subject[],
};

export interface Subject {
    title:string,
    overview?:string[],
    book?: Book,
    problems?: Problem[],
    tools?:string[],
    skills?:string[],
};

export interface Book{
    title:string,
    author:string
}

const bookCollection =  {
    "BuidingMicroservices": {
        title:"Building Microservices: Designing Fine-Grained Systems",
        author:"Sam Newman"
    },
    "DomainDrivenDesign": {
        title:"Domain-Driven Design: Tackling Complexity in the Heart of Software",
        author:"Eric Evans"
    },
    "FundOfSoftwareArch": {
        title:"Fundamentals of Software Architecture: An Engineering Approach",
        author:"Mark Richards & Neal Ford"
    }
}

const categories = {
    "LeetCode": "LeetCode Problems",
    Tech_Reading: "Reading a technical book",
    'WebSite' : "Website enhancement & maintenance"
}

export interface Problem{
    name: string,
    link: string,
    language: string,
    category: string
}

const leetcodeCat = {
    TwoPointer: "Two Pointer",
    Arrays: "Arrays",
}

export const JournalEntries : Entry[]= [
    {
        today : new Date('8/2/2024'),
        subjects: [
            {
                title: categories.LeetCode,
                overview: ["Minimum swaps "],
                problems: [
                    {
                        name:"Minimum Swaps to Group All 1's Together II",
                        link:"https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/description/",
                        language: "python",
                        category: leetcodeCat.TwoPointer
                    }
                ],
            },
            {
                title:"Docker study",
                overview: ["Docker study"],
                tools: ["Docker desktop"],
                skills: ["Containerization"]
            },
            {
                title: categories.Tech_Reading,
                book: bookCollection["BuidingMicroservices"],
                overview: ["Read about different source control strategies Manyrepo vs Monorepo.","Different Deployment strategies for microservices."],
                tools: ["Kubernetes", "Git", ],
                skills: ["Containerization"]
            },
            {
                title: "Golf practice",
                overview: ["Worked on getting weight on the back foot without swaying. Getting rotation in the backswing"],
                tools: ["Driver","2-hybrid","7-iron"],
                skills: ["Weight shift", "Left arm close to body"]
            }
        ]  
    },
    {
        today:new Date('8/5/2024'),
        subjects :[
            {
                title:categories.LeetCode,
                overview: ["Question of the day", "Practice"],
                problems: [
                    {
                        name:"Kth Distinct String in an Array",
                        link:'https://leetcode.com/problems/kth-distinct-string-in-an-array/',
                        category:'Arrays, Greedy',
                        language: 'Python'
                    },
                    {
                        name:"Isomorphic Strings",
                        link:'https://leetcode.com/problems/isomorphic-strings/',
                        category:'HashSet',
                        language: 'Python'
                    }
                ]
            },
            {
                title:categories.WebSite,
                overview: [
                    'Update the header and the menu to be responsive for mobile devices',
                    'Get daily status page working'
                ]
            },
            {
                title:categories.Tech_Reading,
                book:bookCollection.DomainDrivenDesign,
                overview:['Chapter 4: Isolating the domain']
            },
        ]
    },
    {
        today:new Date('8/6/2024'),
        subjects :[
            {
                title:categories.LeetCode,
                overview: ["Question of the day", "Practice"],
                problems: [
                    {
                        name:"Minimum Number of Pushes to Type Word II",
                        link:'https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/',
                        category:'Arrays',
                        language: 'Python'
                    },
                ]
            },
            {
                title:categories.WebSite,
                overview: [
                    'Update daily journal',
                ]
            },
            {
                title:categories.Tech_Reading,
                book:bookCollection.DomainDrivenDesign,
                overview: [
                    'Chapter 5: A model expressed in software',
                    'Entities - Have a uniqueness about them that is beyond the data that makes them up',
                    'Value Objects - Defined by their data and interchangable',
                    'Services - '
                ]

            }
        ]
    }
]