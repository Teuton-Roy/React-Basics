# React-Basics
A code repo for React Js Basics 


# Why React.Js 🤔?
    Mainly use For React Js is Single-Page-Application(SPA).
    Also use for Multi-Page-Application(MPA).

# What is Single-Page-Applications(SPA) 🤔?
    Single-Page-Applications(SPA) is a web application or web site that fits on a single web page with the goal of providing a more   fluid user experience.  

    for example: Gmail, Facebook, Twitter, Instagram, etc.

# What is Multi-Page-Applications(MPA) 🤔?
    Multi-Page-Applications(MPA) is a web application or web site that fits on a multiple web page with the goal of providing a more fluid   user experience.

    for example: Google, Youtube, etc.

# What is React.Js 🤔?
    React is a UI Library which is used to build components for Single-Page-Applications(SPA) and Multi-Page-Applications(MPA).  

# What is React.Js Components 🤔?
    React.Js Components is a reusable piece of code which is used to     build UI.

    Any component is nothing but HTML, CSS, and JavaScript.  
    But in React.Js, combined the HTML and JavaScript into a single file.
![Screenshot 2023-02-25 173216](https://user-images.githubusercontent.com/70527737/221356618-aeb7be6a-500a-4609-9a4c-95a3dbb37207.png)




# Setup React.Js Project 🤔?
    Dwonload Node.js from the following URL.
        https://nodejs.org/en/download/
    After that, install Node.js.

    1. Create a folder for your project.
    2. Open the folder in VS Code.
    3. Open the terminal(ctrl+shift+`) and type the following command.
        npx create-react-app my-app

    4. After the installation, type the following command.
        cd my-app

    5. After that, type the following command.
        npm start

    6. After that, open the browser and type the following URL.
        http://localhost:3000/
    
    For batter preference follow the URL.
        https://beta.reactjs.org/


# After create React.Js Project 🤔?
    After create React.Js Project, you can see the following files and folders.
    1. node_modules (never edit this folder)
    2. public (never edit this folder)
    3. src (edit this folder)
    4. .gitignore (never edit this file)
    5. package-lock.json (never edit this file)
    6. package.json (never edit this file)
    7. README.md
    image.png

    1. node_modules
        This folder contains all the dependencies of the project.
    
    2. public
        This folder contains the index.html file.
    
    3. src
        This folder contains the source code of the project.


![image](https://user-images.githubusercontent.com/70527737/221357882-ede2c3fe-55a5-483e-85dc-8f6df19e709b.png)

# After deleting unnecessary files from src and public..

![Screenshot 2023-02-25 183122](https://user-images.githubusercontent.com/70527737/221358349-b246b553-8b6a-4668-8b12-dbb4ed30ad08.png)


# React Component Hierarchy 🤔?
    React Component Hierarchy is a tree structure of React Components.  
    React Component Hierarchy is a parent-child relationship Or  
    React Component Hierarchy is a top-down relationship.  

    For example:  
    In App.js file, we have a parent component called App and child   component called Demo.  

    import './App.css';  

    //App is a parent component.//  
    function App() {  
    return (  
        <div className="App">  
        <div className="App-header">  
        Hello world!  
        <Demo></Demo> //Call Demo component like a tag.//   
        </div>  
        </div>  
    );  
    }  

    //Demo is a child component.//  
    function Demo() {  
    return (  
        <div className="App">  
        <div className="App-header">  
        Demo  
        </div>  
        </div>   
    );  
    }  

    export default App;  


# How to replece Text content and Attribute content with variable?  

    let name = "Teuton"  
    let className = "App-header"  

    function App() {  
        return (  
            <div className="App">  
            <div classname = {className}>  
            {name}  
            </div>  
            </div>  
        )  
    }   

# What is components?
    It a funtion() which return UI.
![components](https://user-images.githubusercontent.com/70527737/221405149-2c574635-7f52-4248-8c61-8e86c76d7a57.png)  


# How to create own componets and attach/export with App.js?
    1. Create a folder called components.  
    2. Create a file called (whatever you want,Like, video.js).  
    3. Create a function called Video.  
    4. Export the function video.  
    5. Import the function video in App.js.  
    6. Call the function video in App.js.  

Example:  

App.js  

    import Video from './components/video'  

    function App() {  
    return (  
        <div>  
        <div>  
            <h1>React Basics</h1>  
        </div>  
        <Video></Video>  
        </div>  
        
    );  
    }  
    export default App;  

video.js  

    function Video(){  
        return(  
            <div>  
                <h2>>Video</h2>  
            </div>  
        );  
    }  
    export default Video;  

# Multi component export?

video.js

    function Video(){
    return(
        <div>
            <h1>Video</h1>
        </div>
    );
    }

    function Thumb(){
        return(
            <div>
                <h1>Thumb</h1>
            </div>
        );
    }

    export {Video, Thumb}; 

App.js 

    import {Video, Thumb} from './components/video'

    function App() {
    return (
        <div>
        <div>
            <h1>React Basics</h1>
        </div>
        <Video></Video>
        <Thumb></Thumb>
        </div>
        
    );
    }

    export default App;

# Fragment?

    [<> </>]  
        function Video(){  
        return(  
            <>  
                <img src="https://cdn.pixabay.com/photo/2022/05/17/21/41/naruto-7203817__340.jpg" alt="" /> //Elements//  

                <div>  
                    naruto's photo  
                </div> //Emenets//   
            </>  
        );  
    }  

    export default Video;  

    but js object is like parent object.  
    Two individual object is not possible.  
    [  
        <>  
                //this is like parent object.  
        </>  
    ]    

# What is props in React.Js?
    Props is a short form of properties.  
    Props is a read-only data.  
    Props is a immutable data.  
    
# Some Rule and Regulations!!
![recap-1](https://user-images.githubusercontent.com/70527737/222655341-762ecb31-1237-41b0-86b5-a145dbd07a07.png)
![recap-2](https://user-images.githubusercontent.com/70527737/222655377-0992f436-3d28-43a3-8b71-78d598959ffe.png)
![recap-3](https://user-images.githubusercontent.com/70527737/222655407-0c4aa03d-e06e-4d81-8755-04f4290d60e5.png)
![recap-4](https://user-images.githubusercontent.com/70527737/222655447-436ad99f-cefc-4d0a-96e1-e096a81d8b66.png)
![recap-5](https://user-images.githubusercontent.com/70527737/222655510-134bbae1-2831-4d79-9527-f09b2dd1e1cf.png)

# can we set default props?
        App.js

        <Video 
        subscrribers="105K subscrribers" 
        profileImgSrc="image link" 
        <!-- channel="teuton.h"  -->
        views="100K" 
        time="3 weeks ago" 
        title="Node.Js bootcamp">
        </Video>
        
        Let's suppose we don't want to set channel name. so we can set default props.

            video.js

            function Video({title, channel='teuton.h', views, time, profileImgSrc, subscrribers}){
        return(
            <>
            <div className="container">
                <div className="pic">
                    <img src="http://placeimg.com/180/100/any" alt="img" />
                </div>
                <div className="title">
                    {title}
                </div>
                <div className="channel">
                <img src={profileImgSrc} alt="" srcset="" />{channel} <br/>{subscrribers}
                </div>
                {/* <div className="subscribers">
                    {subscrribers}
                </div> */}
                <div className="view">
                    {views} views <span>.</span> {time}
                </div>
            </div>
            </>
        );
    }

    export default Video; 

    channel='teuton.h' //default props//
    so if we don't set channel name, it will show teuton.h as default.

# What is React Hooks?
    React hooks are functions that let us into the React state and  
    lifecycle features from function components.  

    ** Only work in function components.  

# React Hook list:
    useState   useEffect   useContext   useReducer   useCallback   useMemo   useRef   useImperativeHandle   useLayoutEffect   useDebugValue.

# Basic Built-in hooks:  
    .Return a stateful value, and a function to update it - useState()  

    .Lets you perform side effects in function components - useEffect()  

    code like this:  

        import React, { useState } from 'react';  

        function Example(){  
            // useState always returns an array with two values.  
            // The first value is the current state, and the second is a function that lets you update it.  

            const [count, setCount] = useState(0);  

            return(  

            );  
        }    

# What is events in React.Js?
    An event is an action that could be triggered as a result of the user action or system generated event.   
    For example, a mouse click,   loading of a web page, pressing a key, window resizes, and other interactions are called events.  

![Screenshot 2023-03-12 180254](https://user-images.githubusercontent.com/70527737/224545015-a0051615-2566-42f8-8ac1-c6d583c5be6c.png)


# What is event handler in React.Js?
    An event handler is a function that is called when a specific event is triggered.    
    For example, when a user clicks on a button, the onClick event is   triggered and the event handler is called.  

# What is event Bubble in React.Js?
    Event bubbling is a mechanism in which an event is triggered on the innermost element and then propagated to outer elements one by one.   

    Stop using event bubbling:   
    1. e.stopPropagation()   
    Or, simply say event object.  

    2. e.preventDefault()  


# What is event object in React.Js?  
    An event object is an object that contains information about the event that has occurred.   
    For example, when a user clicks on a button, the onClick event is triggered and the event object is passed as a parameter to the event handler.  

# What is state in React.Js?  
    State is a data that is used to determine the behavior of a component.     
    For example, if a user clicks on a button, the state of the button is changed.  

# What is stateful component in React.Js?  
    A stateful component is a component that has a state.   
    For example, a button component is a stateful component because it   has a state that determines whether the button is clicked or not.  

![Screenshot 2023-03-16 160213](https://user-images.githubusercontent.com/70527737/225591427-fa66f624-e736-411d-ad92-b9aabe715784.png)
