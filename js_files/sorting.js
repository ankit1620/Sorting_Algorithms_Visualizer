const container = document.querySelector(".data-container"); 

let user = false;
let inputDone = false;
function userClick() {
  user = true;
  inputDone = true;
  generatebars();
}


function reset() 
{
    location.reload();
    user = false;
    inputDone = false;
}

//take input from arr_sz to change number of bars
let arr_size=document.getElementById("arr_sz")
let num= parseInt(arr_size.value);




// function to generate bars 
function generatebars(num =20) {
  
  //Remove Previous Childnodes (bars) if any

  while(container.hasChildNodes()){
    container.removeChild(container.firstChild);
  }   
  
  if (user) {
    if (inputDone) {
      inputDone = false;
    //   let container = document.getElementById("container");
      const user_arr_size = Number(prompt("Enter array Size"));
      // inp_as.value=arraySize;
      // update_only_array_size();
      if (user_arr_size<=0) {
        alert("Enter a valid Number");
        reset();
        return;
      }
      for (let i = 0; i < user_arr_size; i++) {
          const UserInput = Number(prompt(`Enter the ${i + 1} element`));
          if (UserInput<=0) {
            alert("Enter a valid Number");
            reset();
            return;
          }
            // set width of bars
          let max_width;
          if(window.outerWidth > 600){
            max_width = 600;

          }
          else{
            max_width = 300;

          }

            const bar = document.createElement("div"); 
            // To add class "bar" to "div" 
            bar.classList.add("bar"); 
            // Provide height to the bar 
            bar.style.height = `${UserInput * 3}px`; 
            // Translate the bar towards positive X axis 
            // bar.style.width=`${(max_width+5)/user_arr_size}px`; //set the width of individual bars
            bar.style.width=`${(container.offsetWidth)/user_arr_size}px`; //set the width of individual bars

            
            // let container_width=document.querySelector(".data-container").offsetWidth;
            // let width =container_width/user_arr_size  ;
            let width =container.offsetWidth/user_arr_size  ;
            bar.style.transform = `translateX(${i * (width)  }px)`;
            // To create element "label" 
            const barLabel = document.createElement("label"); 
            // To add class "bar_id" to "label" 
            barLabel.classList.add("bar_id"); 
            // Assign UserInput to "label" 
            barLabel.innerHTML = UserInput;
            // if width of bar is too small then don't show the innerHTML value
            if(width<26){
              barLabel.style.display="none";
            } 
            // Append "Label" to "div" 
            bar.appendChild(barLabel); 
            // Append "div" to "data-container div" 
            container.appendChild(bar);
      
        
        }
   
    }
  }
    else{
  //for loop to generate 20 bars 
  for (let i = 0; i < num; i += 1) {
      // set width of bars
      let max_width;
      if(window.outerWidth > 600){
         max_width = 600;

      }
      else{
        max_width = 300;

      }
    // To generate random values from 1 to 100 
    const value = Math.floor(Math.random() * 100) + 1;  
    // To create element "div" 
    const bar = document.createElement("div"); 
    // To add class "bar" to "div" 
    bar.classList.add("bar"); 
    // Provide height to the bar 
    bar.style.height = `${value * 3}px`; 
    // Translate the bar towards positive X axis 
    bar.style.width=`${((container.offsetWidth)/num)}px`; 
    // let container_width=document.querySelector(".data-container").offsetWidth;
    //         let width =container_width/num  ;
    let width =container.offsetWidth/num  ;
    bar.style.transform = `translateX(${i * (width)  }px)`;
    // To create element "label" 
    const barLabel = document.createElement("label"); 
    // To add class "bar_id" to "label" 
    barLabel.classList.add("bar_id"); 
    // Assign value to "label" 
    barLabel.innerHTML = value;
    // if width of bar is too small then don't show the innerHTML value
    if(width<26){
      barLabel.style.display="none";
    } 
    // Append "Label" to "div" 
    bar.appendChild(barLabel); 
    // Append "div" to "data-container div" 
    container.appendChild(bar); 
  } 
}
//Setting Time complexities
document.getElementById("Time_Worst").innerText="Worst Case: ";
document.getElementById("Time_Average").innerText="Average Case: ";
document.getElementById("Time_Best").innerText="Best Case: ";

//Setting Space complexity
document.getElementById("Space_Worst").innerText="Worst Case: ";
} 

    //Promise to swap two bars 
function swap(el1, el2) { 
    return new Promise((resolve) => { 
  
        // For exchanging styles of two bars 
        var temp = el1.style.transform; 
        el1.style.transform = el2.style.transform; 
        el2.style.transform = temp; 
        
        window.requestAnimationFrame(function() { 
  
            // For waiting for .25 sec 
            setTimeout(() => { 
                container.insertBefore(el2, el1); 
                resolve(); 
            }, 250); 
        }); 
    }); 
} 
 
// function swap(el1, el2) {
//   // container.insertBefore(el2, el1); 
//   var temp = el1.style.transform; 
//         el1.style.transform = el2.style.transform; 
//         el2.style.transform = temp;
//         container.appendBefore(el2, el1); 

        
// }
  
// Call "generatebars" function 
generatebars(); // this is used to generate bars when website first time load or any time referesh
  
// function to generate new random array  
 function generate() 
{ 
  
  generatebars(parseInt(arr_size.value));
 } 
  

 //  function to disable the button 
function disable() 
{ 
  // To disable the button "Generate New Array" 
  document.getElementById("Button1").disabled = true; 
  document.getElementById("Button1").style.backgroundColor = "#b2bec3"; 

  // To disable the button "User Input Array" 
  document.getElementById("UserArray").disabled = true; 
  document.getElementById("UserArray").style.backgroundColor = "#b2bec3"; 
  
  // To disable the button "Bubble Sort" 
  document.getElementById("Button2").disabled = true; 
  document.getElementById("Button2").style.backgroundColor = "#b2bec3";
  
  // To disable the button "Selection Sort" 
  document.getElementById("Button3").disabled = true; 
  document.getElementById("Button3").style.backgroundColor = "#b2bec3";

  // To disable the button "Quick Sort" 
  document.getElementById("Button4").disabled = true; 
  document.getElementById("Button4").style.backgroundColor = "#b2bec3";

  // To disable the button "Insertion Sort" 
  document.getElementById("Button5").disabled = true; 
  document.getElementById("Button5").style.backgroundColor = "#b2bec3";  
  
   // To disable the button "Merge Sort" 
   document.getElementById("Button6").disabled = true; 
   document.getElementById("Button6").style.backgroundColor = "#b2bec3"; 
   
    // To disable the button "Heap Sort" 
  document.getElementById("Button7").disabled = true; 
  document.getElementById("Button7").style.backgroundColor = "#b2bec3";  
}

//  function to enable the button 
function enable() 
{ 
  // To enable the button "Generate New Array" 
  document.getElementById("Button1").disabled = false; 
  document.getElementById("Button1").style.backgroundColor = "#6c757d"; 

  // To enable the button "User Input Array" 
  document.getElementById("UserArray").disabled = false; 
  document.getElementById("UserArray").style.backgroundColor = "#6c757d"; 
  
  // To enable the button "Bubble Sort" 
  document.getElementById("Button2").disabled = false; 
  document.getElementById("Button2").style.backgroundColor = "#212529";
  
  // To enable the button "Selection Sort" 
  document.getElementById("Button3").disabled = false; 
  document.getElementById("Button3").style.backgroundColor = "#212529";

  // To enable the button "Insertion Sort" 
  document.getElementById("Button4").disabled = false; 
  document.getElementById("Button4").style.backgroundColor = "#212529";

  // To enable the button "Quick Sort" 
  document.getElementById("Button5").disabled = false; 
  document.getElementById("Button5").style.backgroundColor = "#212529";

     // To enable the button "Merge Sort" 
     document.getElementById("Button6").disabled = false; 
     document.getElementById("Button6").style.backgroundColor = "#212529"; 
     
      // To enable the button "Heap Sort" 
    document.getElementById("Button7").disabled = false; 
    document.getElementById("Button7").style.backgroundColor = "#212529"; 
}


// fghfhfggfhjfh
// Function to calculate and set width of child divs
function setChildDivWidth() {
  // var parentWidth = document.getElementById('parentDiv').offsetWidth; // Get parent div width
  const containerWidth = document.querySelector(".data-container").offsetWidth; // Get parent div width
  var childDivs = document.querySelectorAll('.bar'); // Get all child divs
  
  var numDivs = childDivs.length; // Number of child divs
  
  // Calculate width for each child div
  var childWidth = (containerWidth / numDivs); // Adjust 20px for padding and margin

 
  // Apply width to each child div
  for (var i = 0; i < childDivs.length; i++) {
      childDivs[i].style.width = childWidth + 'px';
      childDivs[i].style.transform = `translateX(${i * (childWidth)  }px)`;
      if(childWidth<26){
        childDivs[i].childNodes[0].style.display="none";
      } 
      else{
        childDivs[i].childNodes[0].style.display="block";

      }
  }

  // let width =container.offsetWidth/num  ;
  // bar.style.transform = `translateX(${i * (width)  }px)`;
  
  // return childWidth;
}

// Initial call to set widths on page load
setChildDivWidth();

// Update widths on window resize
window.addEventListener('resize', function() {
  setChildDivWidth();
});
