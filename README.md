# React-Basics
A code repo for React Js Basics 


# Why React.Js 🤔?
    Mainly use For React Js is Single-Page-Application(SPA).
    Also use for Multi-Page-Application(MPA).

# What is Single-Page-Applications(SPA) 🤔?
    Single-Page-Applications(SPA) is a web application or web site that   fits on a single web page with the goal of providing a more   fluid user experience.  

    for example: Gmail, Facebook, Twitter, Instagram, etc.

# What is Multi-Page-Applications(MPA) 🤔?
    Multi-Page-Applications(MPA) is a web application or web site that   fits on a multiple web page with the goal of providing a more fluid   user experience.

    for example: Google, Youtube, etc.

# What is React.Js 🤔?
    React is a UI Library which is used to build components for   Single-Page-Applications(SPA) and Multi-Page-Applications(MPA).  

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


# How to create own componets and attach with App.js?
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
