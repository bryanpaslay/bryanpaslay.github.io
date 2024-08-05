export interface Entry {
    today:Date,
    subjects:Subject[],
};

export interface Subject {
    title:string,
    overview?:string,
    book?: Book,
    problems?: Problem[],
    tools?:string[],
    skills?:string[],
};

export interface Book{
    title:string,
    author:string
}

const bookCollection: {[key:string]: Book} = {
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
                title: "Leetcode problems",
                overview: "Minimum swaps ",
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
                overview: "Docker study",
                tools: ["Docker desktop"],
                skills: ["Containerization"]
            },
            {
                title: "Reading",
                book: bookCollection["BuidingMicroservices"],
                overview: "Read about different source control strategies Manyrepo vs Monorepo.  Different Deployment strategies for microservices.",
                tools: ["Kubernetes", "Git", ],
                skills: ["Containerization"]
            },
            {
                title: "Golf practice",
                overview: "Worked on getting weight on the back foot without swaying. Getting rotation in the backswing",
                tools: ["Driver","2-hybrid","7-iron"],
                skills: ["Weight shift", "Left arm close to body"]
            }
        ]  
    },
    {
        today:new Date('8/5/2024'),
        subjects :[
            {
                title:"Leet code problems",
                overview: "Question of the day",
                problems: [
                    {
                        name:"Kth Distinct String in an Array",
                        link:'https://leetcode.com/problems/kth-distinct-string-in-an-array/',
                        category:'Arrays',
                        language: 'Python'
                    }
                    
                ]
            },
            {
                title:'Website work',
                overview: 'Update the header and the menu to be responsive for mobile devices'
            }
        ]
    }
]