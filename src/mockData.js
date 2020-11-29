import AskMeFirst from "./assets/AskMeFirst.png";
import DaddyCatchBaby from "./assets/DaddyCatchBaby.png";
import DaddyCutCord from "./assets/DaddyCutCord.png";
import DelayBath from "./assets/DelayBath.png";
import DelayedCordClamping from "./assets/DelayedCordClamping.png";
import DelayedExams from "./assets/DelayedExams.png";
import DimLights from "./assets/DimLights.png";
import DoNotCutMe from "./assets/DoNotCutMe.png";

export const mockPreferences = [
    {
        imageSrc: AskMeFirst,
        tags: ['tag1', 'tag2'],
        title: "Ask me First preference"
    },
    {
        imageSrc: DaddyCatchBaby,
        tags: ['tag1', 'tag2'],
        title: "Daddy Catch Baby preference"
    },
    {
        imageSrc: DaddyCutCord,
        tags: ['tag1', 'tag2'],
        title: "Daddy Cut Cord preference"
    },
    {
        imageSrc: DelayBath,
        tags: ['tag1', 'tag2'],
        title: "Delay Bath preference"
    },
    {
        imageSrc: DelayedCordClamping,
        tags: ['tag1', 'tag2'],
        title: "Delayed Cord Clamping preference"
    },
    {
        imageSrc: DelayedExams,
        tags: ['tag1', 'tag2'],
        title: "Delayed Exams preference"
    },
    {
        imageSrc: DimLights,
        tags: ['tag1', 'tag2'],
        title: "Dim Lights preference"
    },
    {
        imageSrc: DoNotCutMe,
        tags: ['tag1', 'tag2'],
        title: "Do Not cut me preference"
    },
]

export const mockPlan = {
    "id": 8,
    "displayOrder": 0,
    "name": "Secondary Updated Plan",
    "title": "If things don't go as planned, I'm happy with this",
    "layoutItems": [
        {
            "x": 1,
            "y": 1,
            "width": 5,
            "height": 4,
            "imageId": 5,
            "itemText": "The second vowel of the alphabet..."
        },
        {
            "x": 4,
            "y": 1,
            "width": 5,
            "height": 4,
            "imageId": 26,
            "itemText": "The end of the road for me!"
        }
    ],
    "items": []
}

const mockPlans = [
    mockPlan
];