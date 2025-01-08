<!-- !doctype lets the browser know what file type the code should be read in.
 If no doctype is specified then the browser will try to guess-->

 <!--HTML attributes provide additional information about HTML elements. They are always included in the 
 opening tag and usually come in name/value pairs like name="value". these will show up as pink here-->
<!DOCTYPE html>
<html>
    <!-- head provides the document with essential document information, like data from other files
     or page titles -->
    <head>
        <!--the title element determines what text will show on your browser window-->
        <title>Danielle's Portfolio</title>
        <!--the link element allows us to pull data from another file to the html page, 
        like styling data from a .css file or interactive elements from an .json file-->
        <link rel="stylesheet" href="LinktreeProject_Styling.css">
    </head>
    <!-- the body element contains all the content that will be displayed on the webpage-->
    <!--In CSS, a class is a selector that allows you to apply styles to multiple 
     elements on a web page. Classes are defined in a CSS file and can be applied 
     to HTML elements using the class attribute.-->
    <body class="purple-text">
    <!-- the img element allows us to display an image using a local file or url-->
    <!-- The id attribute in HTML is used to specify a unique identifier for an 
     HTML element, which allows us to use it's ID as a selector in our 
     stylingsheet-->
    <img src="logo.jpeg" height="200" width="200" id="picture">
    <!--Interactive webpages often use buttons to react to clicks from visitors. 
    However, without more information, a button tag is useless. To react to clicks 
    from visitors, a button tag needs the onclick attribute.-->
    <button onmouseover="show()" onmouseleave="hide()">Secret Knowledge</button> 
    <p id="secret"></p>
    <!-- the h1 element is a heading element that is used to define the heading on the page. 6 different headings
    are available from h1 to h6, and change size and formatting to indicate levels of importance-->
        <h1>Danielle's Portfolio</h1>
        <!-- the p element is used to define a paragraph of text-->
        <p>This is a locally hosted webpage I will be using to document my learning journey through HTML, CSS and JavaScript! <br>
        This page will be updated to include each new element I add to my repetoir. </p>
        <h2>Socials</h2>
        <h3>
            <!-- the a or "anchor" element allows us to embed data like hyperlinks into text-->
            <a href="https://bsky.app/profile/danielleisme.bsky.social">Main Account</a>
        </h3>
        <p>This is my main Bluesky account. I don't post on there but feel free to follow me if you 
            like your feed getting flooded by wlw artists hehe</p>
        <h3>
            <a href="https://bsky.app/profile/anyablack.bsky.social">Web Dev Account</a>
        </h3>
        <p>I will be using this account to document my learning journey in web development. Thinking 
            of updating it either every other day or on a weekly basis</p>
        <h2>Skills I Have Learnt</h2>
        <p><ul>HTML Elements<br>
        HTML attributes (href, img, rel, height, width)
        Empty Elements (img, br, doctype)</ul>
        <ul>CSS selectors, borders, margins, padding, alignment, classes, IDs, font, colors, 
            shorthand properties, link displays</ul>
        <ul>JavaScript functions, variables, operators, compariosons logical expressions, 
            if/else statements</ul>
        </p>

        <h2>Miles to Kilometer Converter</h2>
        <p>This converter is an exercise in logical functions using JavaScript.<br><br></p>
        <input type="text" id="input" placeholder="Please type a number" required>
        <select id="unitSelect" type="text">
            <option value="milesToKm">Miles to Kilometers</option>
            <option value="kmToMiles">Kilometers to Miles</option>
        </select>
        <button onclick="convert()">Convert!</button>
        <button onclick="clearString()">Clear!</button>
        <p id="result"></p>

    <!--The <script> tag in HTML is used to embed or reference executable JavaScript code within 
        an HTML document.-->
    <!--The src attribute specifies the URL of an external script file. 
    If you want to use an external script, put the name of the script 
    file in the src (source) attribute of the <script> tag-->
    <script src="script.js"></script>
    </body>
</html>
