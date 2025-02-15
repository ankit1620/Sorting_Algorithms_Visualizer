// Insertion Sort Algorithm Visualizer 

// Asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 600) {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="Worst Case: O(N^2)";
    document.getElementById("Time_Average").innerText="Average Case: Θ(N^2)";
    document.getElementById("Time_Best").innerText="Best Case: Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="Worst Case: O(1)";

    let bars = document.querySelectorAll(".bar");
    
    // Provide lightgreen colour to 0th bar
    bars[0].style.backgroundColor = "#13CE66";
    for (var i = 1; i < bars.length; i += 1) {
    
        // Assign i-1 to j
        var j = i - 1;
    
        // To store the integer value of ith bar to key
        var key = parseInt(bars[i].childNodes[0].innerHTML);
    
        // To store the ith bar height to height
        var height = bars[i].style.height;
        
    
        //Provide darkblue color to the ith bar
        bars[i].style.backgroundColor = "#ffd32a";
        
        // To pause the execution of code for 600 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, delay)
        );
    
        // For placing selected element at its correct position
        while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
            
        // Provide darkblue color to the jth bar
        bars[j].style.backgroundColor = "#ff4242";
            
        // For placing jth element over (j+1)th element
        bars[j + 1].style.height = bars[j].style.height;
        bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
    
        // Assign j-1 to j
        j = j - 1;
    
        // To pause the execution of code for 600 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, 600)
        );
            
        // Provide lightgreen color to the sorted part
        for(var k=i;k>=0;k--){
            bars[k].style.backgroundColor = "#13CE66";
        }
        }
    
        // Placing the selected element to its correct position
        bars[j + 1].style.height = height;
        bars[j + 1].childNodes[0].innerHTML = key;
        
        // To pause the execution of code for 600 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay)
        );
        
        // Provide light green color to the ith bar
        bars[i].style.backgroundColor = "#13CE66";
    }
    enable();
}


    // In this algorithm there is no need of swaping...