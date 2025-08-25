/*SEARCH COURSES: Home page Search Box*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
let AvailableKeywords = ["certificate", "diploma", "bit", "bcom"];
var inputBox, resultsBox;

function AssignElements() { //This function is triggred after the body of the html page is formed, otherwise it tries to assign elements before they are created.
    inputBox = document.getElementById("inputBox"); //Links with the inputbox div in the html file
    resultsBox = document.querySelector(".result-box"); //Links with the resultbox div in the html file
}

function FilterSearch() { //A function that is excecuted with every keypress on the inputbox
    let result = []; //A new array is formed where filtered results based on what is typed will be stored
    let input = inputBox.value;
    if (input.length) {
        //An arrow function that filters the CourseOption array to find the new results array
        result = AvailableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase()); //Filters the original array according to input being added in input-box (in lower case)
        });
    }
    display(result);

    if (!result.length) //there is no result
    {
        resultsBox.innerHTML = ''; //If there is no results, the dropdown must be hidden
    }
}

function display(array) {
    var content = array.map((list) => { //Loops through each item in the array
        return "<li onclick=selectInput(this)>" + list + "</li>"; //Returns the items as list items to the html
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML; //Displays the list item in the input-box when clicked
    resultsBox.innerHTML = ''; //Hides the entire result box when a list item is clicked
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////


/*ELEMENTS AND COURSE INFO: Second page*/
let years = ["year1", "year2", "year3", "year4"];
const yearfunc = [togglehide0, togglehide1, togglehide2, togglehide3];
const yearsvalue = ["firstyear", "secondyear", "thirdyear", "fourthyear"];
let subyearArray = {
    "0Ysub": ["Math", "Programming", "Computer Architecture"],
    "1Ysub": ["Math", "Programming", "Computer Architecture"],
    "2Ysub": ["Math", "Programming", "Computer Architecture"],
    "3Ysub": ["Math", "Programming", "Computer Architecture"]
};

function togglehide0() {
    let eid = document.getElementById("firstyear");
    eid.style.display = (eid.style.display === "none") ? "block" : "none";
}

function togglehide1() {
    let eid = document.getElementById("secondyear");
    eid.style.display = (eid.style.display === "none") ? "block" : "none";
}

function togglehide2() {
    let eid = document.getElementById("thirdyear");
    eid.style.display = (eid.style.display === "none") ? "block" : "none";
}

function togglehide3() {
    let eid = document.getElementById("fourthyear");
    eid.style.display = (eid.style.display === "none") ? "block" : "none";
}

function subject1link() {
    window.open('https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html');
}

function downloadfile() {
    window.open('./files/WPR 281 Study Guide [2024] v1.4.pdf');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////// MARCO SHE SHIT
const Certificate = {
    Credits: 131,
    CourseDuration: 1,
    Location1: "Pretoria Campus",
    Location2: "Kempton Park Campus",
    CourseStartDate: new Date("1 September 2024"),
    Title: "National Certificate: Information Technology(Systems Development)",
    Overview: "Our certificate programmes offer an affordable option to quickly launch your IT career. They also serve as a stepping stone into one of our other programmes if you did not meet the necessary entry requirements.",
    
}

const Diploma = {
    Credits: 360,
    CourseDuration: 3,
    Location1: "Pretoria Campus",
    Location2: "Kempton Park Campus",
    CourseStartDate: new Date("1 October 2024"),
    Title: "Diploma in Information Technology",
    Overview: "Our Diploma in Information Technology consists of a generic foundation phase and a specialisation phase. The foundation phase gives insight into the field of information technology, while the specialisation phase is career oriented. This academic programme will transform you into a well-rounded professional through a strong focus on knowledge, execution, and professional and practical skills. You will also have the incredible opportunity to complete 6 months of in-service training at an external company or in a simulated work environment.",
    
}

const BIT = {
    Credits: 360,
    CourseDuration: 3,
    Location1: "Pretoria Campus",
    Location2: "Kempton Park Campus",
    CourseStartDate: new Date("1 November 2024"),
    Title: "Bachelor of Information Technology",
    Overview: "This IT degree focuses on information systems modules and will provide you with foundational knowledge in software engineering and business intelligence. You will cover an extensive range of topics, from mobile and wireless networks to artificial intelligence and intelligent systems.",
    
}

const BCOM = {
    Credits: 506,
    CourseDuration: 4,
    Location1: "Pretoria Campus",
    Location2: "Kempton Park Campus",
    CourseStartDate: new Date("1 December 2024"),
    Title: "Bachelor of Computing",
    Overview: "You will gain sound theoretical knowledge grounded in real-world applications. Furthermore, the practical assignments and projects you will complete are congruent with daily practices in the working world, providing you with business-specific and soft skills. These skills include communication skills, customer satisfaction training, the ability to work as part of a team, and the ability to teach others.",
    
}

function StoreValue(course) {
    //If the function was triggered from one of the title card buttons, the paramater will be filled in with the value of the title card. 
    //And the variable only needs to store what title card has been clicked.
    if (course != '') //One of the title card buttons was clicked
    {
        localStorage.setItem("CourseChosenStored", course);
        window.open("../CourseInfo/Courseinfo.html");
        window.close("../SearchCourses/SearchCourse.html");
    }
    //The search bar button was used, and the value of the input needs to be validated, and stored if it is one of the accepted courses
    else//The search-bar button was clicked, the value for the paramater is ''; The input needs to be validated.
    {
        let inputBox = document.getElementById("inputBox"); 
        let input = inputBox.value;
        if (AvailableKeywords.includes(input.toLowerCase()))
        {
            localStorage.setItem("CourseChosenStored", input);
            window.open("../CourseInfo/Courseinfo.html");
            window.close("../SearchCourses/SearchCourse.html");
        }
        else if(input != "")
        {
            alert(`Unfortunately, we do not offer ${input}, please ensure you are searching for one of our offerd courses. (BIT,BCOM,Certificate,Diploma)`)
        }
        else
        {
            alert(`Please fill in the input, with the course you are looking for`)
        }
    }
}

function CourseInfoLoad(course) {
    let duration = document.getElementById("detduration");
    let credits = document.getElementById("detcredits");
    let location1 = document.getElementById("detloc1");
    let location2 = document.getElementById("detloc2");
    let startdate = document.getElementById("startdate");
    let CourseTitle = document.getElementById("courseTitle");
    let CourseOverview = document.getElementById("overviewtxt");

    switch (course.toLowerCase()) {
        case "bcom": 
        {
            duration.innerHTML = `${BCOM.CourseDuration} years`;
            credits.innerHTML = `<b>Credits: </b>${BCOM.Credits}`;
            location1.innerHTML = `${BCOM.Location1}`;
            location2.innerHTML = `${BCOM.Location2}`;
            startdate.innerHTML = `${BCOM.CourseStartDate}`;
            CourseTitle.innerHTML = `${BCOM.Title}`;
            CourseOverview.innerHTML = `${BCOM.Overview}`;
            

            years = ["year 1", "year 2", "year 3", "year 4"];
            subyearArray["0Ysub"] = ["Academic writing181", "Computer architechture181", "Database development181", "Information systems181", "Linear programming181"];
            subyearArray["1Ysub"] = ["Database developement281", "Information systems281", "Project management281", "Internet of things281", "Mathematics281"];
            subyearArray["2Ysub"] = ["Database developement381", "Research methods381", "Machine learning381", "Software engineering381", "User experience design381"];
            subyearArray["3Ysub"] = ["Applied IT481", "Applied IT482", "Dissertation481"];
            break;
        }

        case "bit": 
        {
            duration.innerHTML = `${BIT.CourseDuration} years`;
            credits.innerHTML = `<b>Credits: </b>${BIT.Credits}`;
            location1.innerHTML = `${BIT.Location1}`;
            location2.innerHTML = `${BIT.Location2}`;
            startdate.innerHTML = `${BIT.CourseStartDate}`;
            CourseTitle.innerHTML = `${BIT.Title}`;
            CourseOverview.innerHTML = `${BIT.Overview}`;

            years = ["year 1", "year 2", "year 3"];
            subyearArray["0Ysub"] = ["Academic writing171", "Computer architechture171", "Database development171", "Information systems171", "Programming171"];
            subyearArray["1Ysub"] = ["Database developement221", "Enterprise systems271", "Ethics271", "Project management271", "Statistics271"];
            subyearArray["2Ysub"] = ["Database developement371", "Business Intelegence371", "Data analytics371", "Software engineering371", "User experience design381"];
            break;
        }

        case "diploma": 
        {
            duration.innerHTML = `${Diploma.CourseDuration} years`;
            credits.innerHTML = `<b>Credits: </b>${Diploma.Credits}`;
            location1.innerHTML = `${Diploma.Location1}`;
            location2.innerHTML = `${Diploma.Location2}`;
            startdate.innerHTML = `${Diploma.CourseStartDate}`;
            CourseTitle.innerHTML = `${Diploma.Title}`;
            CourseOverview.innerHTML = `${Diploma.Overview}`;

            years = ["year 1", "year 2", "year 3"];
            subyearArray["0Ysub"] = ["Business communication161", "Computer architechture161", "Database concepts161", "End user computing161", "Programming161"];
            subyearArray["1Ysub"] = ["Database developement261", "Enterprise systems261", "IT law and ethics261", "Project management 261"];
            subyearArray["2Ysub"] = ["Programming261", "Programming262", "Software testing261", "Web Programming261", "User experience design261"];
            break;
        }

        case "certificate": 
        {
            duration.innerHTML = `${Certificate.CourseDuration} years`;
            credits.innerHTML = `<b>Credits: </b>${Certificate.Credits}`;
            location1.innerHTML = `${Certificate.Location1}`;
            location2.innerHTML = `${Certificate.Location2}`;
            startdate.innerHTML = `${Certificate.CourseStartDate}`;
            CourseTitle.innerHTML = `${Certificate.Title}`;
            CourseOverview.innerHTML = `${Certificate.Overview}`;
    
            years = ["year 1"];
            subyearArray["0Ysub"] = ["Mathematics151", "Computer architechture151", "Database development151", "English communication151", "Programming151"];
            break;
        }

        // default:
        // {
        //     alert("An unexpected error has occured, please try again later.");
        //     clearElements();
        // }
    }
}

function OnLoad(){//This function is created because both the functions it contains must be called in the same event
    CourseInfoLoad(localStorage.getItem("CourseChosenStored"));
    buildElements();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buildElements() {
    if (window.location.href.includes('Info')) {
        if (document.querySelector('.divcourses')) {
            console.log("Elements already created.");
            return;
        }

        let i = 0;
        years.forEach(function (yrs) {
            var divcourses = document.createElement("div");
            divcourses.className = "divcourses";

            var yearfolders = document.createElement("button");
            yearfolders.className = "yearfolders";
            yearfolders.textContent = `${yrs}`;
            yearfolders.addEventListener("click", yearfunc[i]);

            var divyears = document.createElement("div");
            divyears.className = "divyears";
            divyears.setAttribute("id", yearsvalue[i]);
            divyears.setAttribute("style", "display: none");

            let key = `${i}Ysub`;
            let subjects = subyearArray[key];

            if (subjects) {
                subjects.forEach(subject => {
                    var divalign = document.createElement("div");
                    divalign.className = "alignmid";

                    var btnsubj = document.createElement("button");
                    btnsubj.textContent = subject;
                    btnsubj.className = "folderedbtn";

                    var btndownload = document.createElement("button");
                    btndownload.textContent = "Download";
                    btndownload.className = "folderedbtn";
                    btndownload.addEventListener("click", downloadfile);

                    var btnVideo = document.createElement("button");
                    btnVideo.textContent = "Watch Video";
                    btnVideo.className = "folderedbtn";
                    btnVideo.addEventListener("click", subject1link);

                    var btnmarkdone = document.createElement("button");
                    btnmarkdone.textContent = "Done";
                    btnmarkdone.className = "folderedbtn";
                    btnmarkdone.classList.add("inactive");
                    btnmarkdone.addEventListener("click", function() {
                        toggleMarkDoneColor(btnmarkdone);
                    });

                    divalign.appendChild(btnsubj);
                    divalign.appendChild(btndownload);
                    divalign.appendChild(btnVideo);
                    divalign.appendChild(btnmarkdone);

                    divyears.appendChild(divalign);
                });

                   
            } else {
                console.warn(`No subjects found for key: ${key}`);
            }

            divcourses.appendChild(yearfolders);
            divcourses.appendChild(divyears);
            document.body.appendChild(divcourses);
            i++;
        });

    };
}

function toggleMarkDoneColor(button) {

    button.classList.toggle('active');
    button.classList.toggle('inactive');
}


function clearElements() {
    const existingElements = document.querySelectorAll('.divcourses');
    existingElements.forEach(element => element.remove());
    window.open("../SearchCourses/SearchCourse.html");
    window.close("./CourseInfo/Courseinfo.html");
}



function Enrol(){

    

    switch (localStorage.getItem("CourseChosenStored")) {
        case "bit":
            localStorage.setItem("Coursedatekey", '2024/11/01 00:00');
            break;

        case "bcom":
            localStorage.setItem("Coursedatekey", '2024/12/01 00:00');
            break;

        case "diploma":
            localStorage.setItem("Coursedatekey", '2024/10/01 00:00');
            break;

        case "certificate":
            localStorage.setItem("Coursedatekey", '2024/09/01 00:00');
            break;
    
        default:
            break;
    }
    window.open("../Enrolment/Enrolment.html")
    window.close("./CourseInfo/Courseinfo.html");
}



function getdates()
{
    let startTime = new Date(); 
    let endTime = new Date(localStorage.getItem("Coursedatekey"));
    
    return{
        start:startTime,
        end:endTime
    }
}

function getMinutesBetweenDates(startTime, endTime) {
    let diff = endTime.getTime() - startTime.getTime();

    let result = (diff / 60000);

    return (Math.abs(result));
}

function converthrs(diff)
{
    let hr = diff / 60;
    let hrtomin = diff - (60 * Math.floor(hr));

    let res = "There are " + Math.floor(hr/24) + " days, " + Math.floor(hr % 24) + " hours and " + Math.floor(hrtomin) + " minutes left untill the course starts";

    return res;
}

function timer()
{
    let start = getdates().start;
    let end = getdates().end;

    let diff = getMinutesBetweenDates(start, end);

    let res = converthrs(diff);

    let timeele = document.getElementById("timer");
    timeele.innerHTML = res;
}

function CallTimer(){
    window.setInterval(function(){
       timer();
      }, 5000);
}

function OnEnrolementLoad(){
    CallTimer();

    let CaptionElem = document.getElementById("FormCaption");
    CaptionElem.innerHTML = `Enrolment for ${localStorage.getItem("CourseChosenStored")} course`;
}

function BackCourse(){
    window.open("../CourseInfo/Courseinfo.html");
    window.close("Enrolment.html")
}

/////////////////////////////////////////////////Enrolment processes
function ValidateInputs(){
    let pass1Elem = document.getElementById("Password1");
    let pass2Elem = document.getElementById("Password2");
    let EnrolElem = document.getElementById("Enrol");

    let password1 = pass1Elem.value;
    let password2 = pass2Elem.value;

    if(password1 === "" || password2 === "")
    {
        alert("Please fill in the Password and Confirm Password fields");
        pass1Elem.style.color = "Red";
        pass2Elem.style.color = "Red";
        pass1Elem.type = "text";
        pass2Elem.type = "text";
        EnrolElem.type = "button";  
    }
    else
    {
        if(password1 === password2)
        {
            pass1Elem.style.color = "Green";
            pass2Elem.style.color = "Green";
            EnrolElem.type = "submit";
        }
        else 
        {
            alert("Passwords do not match.");
            pass1Elem.style.color = "Red";
            pass2Elem.style.color = "Red";
            pass1Elem.type = "text";
            pass2Elem.type = "text";
            EnrolElem.type = "button";  
        }    
    }
}
