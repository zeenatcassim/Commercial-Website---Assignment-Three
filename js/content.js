//This contains all the content that is added on the website through JavaScript

//About the API:
export const apiContent =[
    {
    id:1,
    title: "It is Easy to Sign Up",
    paragraph:"Signing up is as easy as just clicking few buttons. All you need is your email and you are ready to go. The best part is that you can do all this for Free! ",
    },
    {
    id:2,
    title: "Some Tips to get You Started",
    paragraph:"After signing up, you will receive you free API key at your dashboard. Now you have the option to use the documentation or the quick step guide. The quick step guide is great for quickly getting access to the url endpoints but the documentation gives a step by step overview on how to use the endpoints.",
    },
    {
    id: 3,
    title: "Link to the website",
    paragraph:'Access the Fixer API by clicking <a href="https://fixer.io/" target="_blank">here</a>',
    },
];

//Design:

//Wireframe theory Sections
export const wireframeSections =[
    {
        title: 'Initial Wireframes',
        paragraph: 'These are the wireframes that I initially made before choosing an API, they are low and mid fidelity.',

    },
    {
        title: 'Mid-Fidelity Wireframes',
        paragraph: 'These are the wireframes that I made after choosing an API. I started designing these wireframes to plan content placement and points of interaction.',
    },
    {
        title: 'High-Fidelity Wireframes',
        paragraph: 'Using the mid-fidelity wireframes, I added colour and more specific details to the website. These were aimed to replicate how the website will look for the final design.',
    },
];

//wireframe images
export const wireframeImages =[
    {
      image1: '../images/low-img-1.png',
      image2: '../images/low-img-2.jpg',
    },
    {
      image1: '../images/Mid fidelity wireframes.png',
      image2: '../images/Mid fidelity wireframes (1).png',
      image3: '../images/Mid fidelity wireframes (2).png',
      image4: '../images/Mid fidelity wireframes (3).png',
      image5: '../images/Mid fidelity wireframes (4).png',
    },
    {
        image1: '../images/High Fidelity Wireframes.png',
        image2: '../images/High Fidelity Wireframes (1).png',
        image3: '../images/High Fidelity Wireframes (2).png',
        image4: '../images/about - 2.png',
        image5: '../images/data viz-1.png',  
        image6: '../images/data viz-2.png',   
        image7: '../images/Desktop - 1 (1).png',
        image8: '../images/Desktop - 1.png',
        image9: '../images/homepage - 2.png',
        image10: '../images/homepage - 3.png',
        image11: '../images/homepage-1 (1).png',
        image12: '../images/homepage-1.png',

    }
];

//style guide
export const styleGuide = [
    { h3: 'Typography',
      p: 'I used the font Roboto flex for the text because it makes the letters thin which is easy on the eyes and good for readability. The font sizes are consistent throughout the webpages since I have not specified them in the CSS, rather I used the size that comes with the h1, h2, h3 and p tags. The only thing I did change was make the headings font lighter because they were looking to think in their default settings.',
    },
    {
        h3:'Colour Palette',
        img: '../images/colour palette.png',
        p:'This colour palette has varying shades of dark and light colours. It gives a nice balanced contrast for the content since there are warm colours, like papaya white and cold colours, like charcoal that co exist together. The contrast between all the colours can be used effectively to make interactive elements stand out against the cool and soft backgrounds'
    },
    {
        h3:'Branding(iconography)',
        p: 'The top left corner of the header has a simple logo that consists of a background accompanied by text. I did not want the header to empty and having a simple logo at this specific location is a good decision since this logo is the first thing the user will see when they click on the website ',
    },
    {
        h3:'Interactive Elements',
        p:'Buttons have one consistent design on the same webpage, this to indicate to the user that this is interactable and to establish a convention.',
    },
    {
        h3:'Design Decisions',
        p:'I have tried to balance the content by using the same padding throughout the webpages and all content is aligned to the left, since that is where the user will start reading. My aim was to make it easy for the user to follow along the content. However, all buttons are centred towards the middle of the relevant section they are part of. This is different because having a button towards the middle of that specific section will make the user realise that this button is related to the above section. '
    }
]

//Theory

export const essayContents = [
    {
        id:1,
        title:'Project Overview:',
        p1:'The data journalism piece I have chosen is ‘Can You Make Winter Less Dark?’ (FiveThirtyEight, 2022). The authors are Ryan Best, Monica Potts, Kaleigh Rogers, Paroma Soni and Amelia Thomson-DeVeaux. The source of this data journalism comes from the website ‘FiveThirtyEight’ and it was published on 22 December 2022. ',
        p2: 'The primary story of the data journalism is regarding the experience of using standard time and daylight-saving time in alternating months in America. Connected to this is a brief debate as to whether standard time or daylight-saving time should be permanently used, including the advantages and disadvantages that both have.  Before ending with a conclusion that discusses how and why, both daylight-saving time and standard time was introduced and the impact of changing clock settings to fit people’s schedules. ',

    },
    {
        id:2,
        title:'Data Visualization Techniques:',
        p1:'The data visualization consists of a heatmap but instead of using a table, it uses a map of America to show the values of time for sunrise and sunset for an area. The map separates all the different areas by its counties to give specific values for an area. The counties are all local governments in the different states of America',
        img1:'../images/img 1.png',
        p2:'Figure 1. Data Visualization that uses a heatmap over the region of the United States of America',
        p3:'This is extremely helpful since it gives detailed information about specific areas and the user can search for specific counties or hover over specific points of the map. ',
        img2:'../images/img 2.png',
        p4:'Figure 2. The information that gets displayed when user hovers above the map',
        p5:'Hovering over a point on the map shows the outline of the county, gives the name of it and the percentage of days that have sunrises at/before 7:30 am and sunsets at 5:30 pm along with the times for the recorded latest sunrises and earliest sunsets. ',
        p6:'However, this information changes depending on what filter options the user chooses to view.',
        img3:'../images/img 3.1.png',
        p7:'There is also an option to search for specific counties and find their information.',
        img4:'../images/img 4.png',
        p8:'The map also uses colour saturation between blue and yellow to denote sunrise and sunset. The shift in colour saturation correlates to the amount of daylight. Lighter yellows indicate more hours with daylight; later sunsets and earlier sunrises. Darker blues indicate fewer daylight hours, earlier sunsets and later sunrises. ',
        img5:'../images/img 5.png',
        p9:'Figure 4. The colour saturation system that denotes days that ranges from decreased to  increased hours of daylight', 
        p10:'This is useful because when clicking on a specific option, the data visualization filters the values and shows the user what they want to see. It helps to give detailed information about the area and what time it will be for sunrise and/or sunset according to the filtered time schedules. ',
        p11:'In addition to this is another heatmap that uses a table format, showing the effects of using daylight-saving time permanently throughout the year. Because it uses the same colour saturation system as above, the table allows users to easily understand how daylight distribution is affected under different clock settings.',
        img6:'../images/img 6.png',
        p12:'Figure 5. The Second Data Visualization uses a heatmap in a table format with same colour saturation system',
        p13:'Using heatmaps for this data visualization was a good choice. The decision to use a colour saturation system of yellow and blue to represent the different amounts of daylight visually communicates the distribution of daylight across different clock settings. The format of the map and table presents this data that can be easily understood by the user.',
        img7:'../images/img 7.png',
        p14:'Figure 6. Image showing the entire first data visualization that shows data with specific filter options chosen',
    },
    {
        id:3,
        title:'Interactivity and User Engagement:',
        p1:'The interactive elements of the visualization include hovering above points or areas of the map that results in a pop up appearing with the necessary information on the screen, refer to figure 2. The user can also filter the data to find specific details that they are looking for, refer to figures 3.1, 3.2 and 3.3.',
        p2:'Looking at the context of the data journalism piece, these interactive elements are suitable and appropriate. They are effective in the sense that the data gets filtered by the choices that the user makes. This is the interactivity; the user has a choice to hover above a certain colour of the map or to look specifically for counties with specific conditions, that causes the data visualization to change to show the user what they are looking for. This is effective because the user gets the information they are looking for in a clear and detailed format. ',
        p3:'After interaction, the user can process the data swiftly and interpret it to give it a meaning. It is necessary to be able to interact and process the data but the required data needs to be abstracted and presented clearly for the user to comprehend it (Li, 2020: 19). ',
        p4:'It is beneficial for the user’s interpretation that the convention of using the colours blue and yellow to denote days with longer hours of daylight is utilized in the data. This helps to better engage and comprehend the data effortlessly since the colour yellow is associated with the sun. The user then understands that areas on the map that is coloured yellow are days with longer hours of daylight and the opposite is true for the colour blue since blue is associated with night. Conventions are shared practices (Mailloux, 1983: 399) and they help with giving meanings to concepts which, in turn allows interpretation to occur (Mailloux, 1983:404). ',
        p5:'From my own experience with data visualizations, they all present data that the user is looking for in a manner that is clearly formatted. This has extended some influence on my analysis which leads me to believe that the data visualization effectively communicates with the user and encourages them to engage with it. ', 
    },
    {
        id:4,
        title:'UI/UX Design Principles:',    
        p1:'The visual structure of the data visualization has a map with filter options and a colour saturation bar above it and another table below it accompanied by few paragraphs. The map and table uses colour to signify values of the data. This is important to the visual structure because the contrast directs the user’s attention around the information. ',
        p2:'The design is simple and easy to understand. Because there is a map coloured in different shades of blue and yellow, the user understands that those values are applicable to those specifically coloured areas. This offers a reduced cognitive load since the information is presented as short headings and precise sentences that includes percentages or time values to explain details. This is also applicable to the hover function; the user does not get overwhelmed since they just need to hover above areas to get data about them. ',
        p3:'These User Interface principles have been applied in an effective manner to the visualization since it contributes to the data being presented in a clear and attractive format',
        p4:'Interacting with the visualization produces an experience, emerging from the visuals and functional aspects of it. Feedback occurs rapidly as user interacts with the data and this produces a positive emotion within the user (Hassenzahl & Tractinsky, 2006: 93 & 94). There is also a heavy reliance on colour to visualize data but the varying saturation of blue and yellow makes the visualization look attractive. This contributes to the aesthetics and feeds into the emotional usability aspect of User Experience (Hassenzahl & Tractinsky, 2006: 92 & 93). ',
        p5:'By not only grabbing attention, the user feels a satisfaction from looking at the different colours. In addition, the visualization responds and gives the user what they are looking for. Thus, the user experiences a range of positive emotions from looking at the visualization. ', 

    },
    {
        id:5,
        title:'Data driven storytelling:', 
        p1:'Narrative elements such as beginning, middle, end of a story structure and flow of story are present and they successfully communicate complex information that is being conveyed. This is vital for the user to understand the data and interpret it to gain new knowledge:',
        p2:'Beginning: The first paragraph introduces the setting and main conflict that explains the struggles changing clock settings during different months in an attempt to have days with longer hours of daylight to accommodate people’s schedules.',
        p3:'Middle: This is when the first data visualization is introduced to the user to interact with which leads them to understand the conflict. This visualization demonstrates the effects of different clock settings and informs what the actual times for sunrise and sunset are. Along with imparting an understanding, the interactivity can lead the user to look for specific details to try and solve the conflict on their own. This is effective since there should be a chance given to the user to try solving the problem on their own (Knaflic, 2015 :173). ',
        p4:'The situation is further developed by more additional contextual background information, such as advantages and disadvantages and much more. This includes another data visualization of a table, that strengthens the narrative since it shows what is currently happening and the possibilities of what can happen.',
        p5:'End: The narrative concludes without a definite solution instead commenting on the consequences of trying to restructure time. Importantly it ties back to the begging and imparts the user with new knowledge (Knaflic, 2015 :174).',
        p6:'Flow of story: There is a chronological order to the flow of story but the narrative is expressed in the manner that is contextually important such as having the conflict present first, then the visualization, lastly the advantages and disadvantages of both clock settings before it moves to the ending note of. ',
        p7:'Lessons learned: Data is understood clearly when it utilizes conventions and is present in a clear and precise manner',

    },
    {
        id:6,
        title:'Emotional Impact:',
        p1:'The tone is neutral and objective since it is not arguing for a point and the message is just to present information and spread awareness about the problem. This is made up by the layout in which content is centred in the middle. With the font being small and having the same weight. The only colour used is for the data visualizations and illustrations. Due to there not being many visual elements, there is more focus on the seriousness and factual information of the contents. ', 
    },
    {
        id:7,
        title:'Reference List:',
        p1:'Best, R., Potts, M., Rogers, K., Soni, P. & Thomas-DeVeaux, A. 2022. FiveThirtyEight. Can You Make Winter Less Dark?. Online. URL: https://projects.fivethirtyeight.com/daylight-saving-time/. 29 August 2024. ',
        p2:'Hassenzahl, M. and Tractinsky, N., 2006. User experience-a research agenda. Behaviour & information technology, 25(2), pp.91-97.',
        p3:'Knaflic, C.N., 2015. Chapter Seven: Lessons in Storytelling: Storytelling with data: A data visualization guide for business professionals. John Wiley & Sons, pp. 165 – 185.',
        p4:'Li, Q., 2020. Overview of data visualization. Embodying data: Chinese aesthetics, interactive visualization and gaming technologies, pp.17-47.',
        p5:'Mailloux, S., 1983. Convention and context. New Literary History, 14(2), pp.399-407.',
    }
]

export const workFlow = [
    {
        h3: 'Choosing an API',
        p: 'It took long to find an API. At first I considered using weather or flight ones but did not end up using them because they had big amounts of data and I was not sure how to make data visualizations out of them. I then found the Fixer API, when looking at the data I decided to make a bar graph using the latest endpoint and a conversion chart generator using the convert endpoint from the API.',
    },
    {
        h3: 'Wireframes',
        p: 'I first made mid fidelity wireframes without any colour to decide what content goes into which webpage and were to place them. I also planned the HTML and CSS structure along with the content hierarchy and alignment. After this, I was ready to find a colour scheme and to make my high fidelity wireframes. I decided which colours to use for the backgrounds and which to use for buttons or interactive elements. In this stage, I also checked the contrast between the text, interactive elements and background colours',
    },
    {
        h3: 'HTML and CSS for webpages',
        p: 'Using the high fidelity wireframes, I added the required HTML tags to communicate the content hierarchy I designed earlier on. I added class and id tags for the HTML tags so that I could use them in the CSS file to style the content',
    },
    {
        h3: 'JS to add content dynamically',
        p: 'I made a separate JS file, called content so that all the text for the theory and design webpages can be found in one file instead of having them spread around in different JS files. I imported the required arrays to the JS files specifically handling the functionality on the theory and design webpages and dynamically created new <p> tags and h3 or h4 tags for the text. There were times when I had to introduce a loop to go through all the arrays to display the neccesary information',
    },
    {
        h3: 'Data Visualizations',
        p: 'The two data visualizations I made were a bar graph and conversion chart generator. The bar graph is meant to show the current and latest value for up to 170 currency rates from around the world, hovering above the bars makes a tooltip below the graph visible showing the country name and specific rate value. The conversion chart generator was intended to have the user choose the currency they have, type in an amount and then choose the currency they want to convert their money into. The chart displays two bars for the two rates to highlight what the value of their money is in another currency ',
    },
   
]