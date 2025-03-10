# Chick-fi-Lingo 🐔🍟 (BoilerMake2025 Project)

Chick-fi-Lingo is a Chick-fil-A-themed ordering application designed to enhance accessibility for individuals who may not be fluent in English. Whether at the drive-thru or on a phone call, Chick-fi-Lingo’s AI-powered Lingo Bot could ensure a smooth and inclusive ordering experience by supporting multiple languages—even allowing users to switch languages mid-sentence. 

## Inspiration
Inspired by Purdue's infamous on-campus Chick-fil-A, we thought it would be great to create an AI bot named Lingo that interacts with users based on their orders. Lingo can handle multiple languages, so we combined Chick-fil-A with DuoLingo to come up with the name 'Chick-Fi-Lingo'!

## What it does
We aimed to provide a seamless front-end experience while handling multiple languages during the ordering process, ensuring that Lingo Bot offers its users a smooth and efficient ordering experience.

## How we built it
We used React, Typescript, CSS, HTML, for the frontend. For the backend we utilized the Llama 3.2 instruct model optimized by Unsloth. And we used Flask to bridge the gap between the frontend and backend.

## Challenges we ran into
We initially planned to implement a cloud-based backend using AWS but encountered limitations while training the model through SageMaker. As it was our first time working with AWS and AI/ML, this led to unexpected challenges. We also attempted to utilize access to a supercomputer given to hackathon members by Purdue RCAC, however we were unable to get approved in time. Ultimately, we used the Llama 3.2 instruct model optimized by Unsloth for the backend functionality.

## Accomplishments that we're proud of
Despite facing unexpected challenges, we gained valuable insights, particularly in backend development, and enhanced the website’s aesthetics and engagement through TypeScript. This was also our first time integrating AI into our projects, and we learned tons!

## What we learned
We gained hands-on experience with the basics of AI/ML, and learned how to interlink the backend and frontend, and, as this was our first full-stack development project with AI implementation, we encountered valuable learning opportunities throughout the process.

## What's next for Chick-fi-Lingo
In our eyes, the real-world application of Chick-fi-Lingo is in drive-thrus and ordering by phone, where individuals who are less comfortable ordering in English can feel free to order in any language they want - even switching languages mid-sentence! Looking ahead, we aim to use more powerful AI models which will allow for better language understanding and quicker response times. Additionally, we plan to develop a model trained on specific keywords and datasets. Launching Chick-Fi-Lingo at Purdue's Chick-fil-A could also present a great business opportunity, as it would help international students feel less pressured when ordering, with Lingo Bot offering support in any language.

# How to Run
## Use Node 
```
git clone https://github.com/chanhochriskim/boilermake2025
cd boilermake2025
```

## Frontend
```
cd frontend
npm install
npm start
```

## Backend
```
cd backend
python app.py
```

## Local Host
navigate to https://localhost:3000/
