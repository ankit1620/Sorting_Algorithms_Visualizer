// // Asynchronous MergeSort function
// async function MergeSort(delay = 600) {
//   // Setting Time complexities
//   document.getElementById("Time_Worst").innerText = "Worst Case: O(N log N)";
//   document.getElementById("Time_Average").innerText = "Average Case: Θ(N log N)";
//   document.getElementById("Time_Best").innerText = "Best Case: Ω(N log N)";

//   // Setting Space complexity
//   document.getElementById("Space_Worst").innerText = "Worst Case: O(N)";

//   // Get all bars
//   var bars = document.querySelectorAll(".bar");

//   // Convert NodeList to Array to safely manipulate
//   bars = Array.from(bars);

//   // Start merge sort
//   await mergeSortHelper(bars, 0, bars.length - 1, delay);

//   // After sorting, enable UI elements or perform final actions
//   enable();
// }

// // Helper function for Merge Sort
// async function mergeSortHelper(bars, left, right, delay) {
//   if (left < right) {
//       var mid = Math.floor((left + right) / 2);

//       // Recursively sort the two halves
//       await mergeSortHelper(bars, left, mid, delay);
//       await mergeSortHelper(bars, mid + 1, right, delay);

//       // Merge the sorted halves
//       await merge(bars, left, mid, right, delay);
//   }
// }

// // Merge function for merging two sorted subarrays
// async function merge(bars, left, mid, right, delay) {
//   var n1 = mid - left + 1;
//   var n2 = right - mid;

//   // Create temporary arrays for left and right halves
//   var leftArr = bars.slice(left, mid + 1);
//   var rightArr = bars.slice(mid + 1, right + 1);

//   var i = 0, j = 0;
//   var k = left;

//   while (i < n1 && j < n2) {
//       // Change color for comparison
//       leftArr[i].style.backgroundColor = "#FF4949";
//       rightArr[j].style.backgroundColor = "#FF4949";

//       // Wait for delay
//       await new Promise(resolve => setTimeout(resolve, delay));

//       // Compare values
//       var value1 = Number(leftArr[i].childNodes[0].innerText);
//       var value2 = Number(rightArr[j].childNodes[0].innerText);

//       if (value1 <= value2) {
//           // Update height and text content
//           bars[k].style.height = leftArr[i].style.height;
//           bars[k].childNodes[0].innerText = leftArr[i].childNodes[0].innerText;
//           i++;
//       } else {
//           // Update height and text content
//           bars[k].style.height = rightArr[j].style.height;
//           bars[k].childNodes[0].innerText = rightArr[j].childNodes[0].innerText;
//           j++;
//       }
//       k++;
//   }

//   // Copy remaining elements of leftArr[], if any
//   while (i < n1) {
//       bars[k].style.height = leftArr[i].style.height;
//       bars[k].childNodes[0].innerText = leftArr[i].childNodes[0].innerText;
//       i++;
//       k++;
//   }

//   // Copy remaining elements of rightArr[], if any
//   while (j < n2) {
//       bars[k].style.height = rightArr[j].style.height;
//       bars[k].childNodes[0].innerText = rightArr[j].childNodes[0].innerText;
//       j++;
//       k++;
//   }

//   // Reset color of sorted section
//   for (var x = left; x <= right; x++) {
//       bars[x].style.backgroundColor = "#13CE66";
//   }
// }


// Asynchronous MergeSort function
async function MergeSort(delay = 600) {
  // Setting Time complexities
  document.getElementById("Time_Worst").innerText = "Worst Case: O(N log N)";
  document.getElementById("Time_Average").innerText = "Average Case: Θ(N log N)";
  document.getElementById("Time_Best").innerText = "Best Case: Ω(N log N)";

  // Setting Space complexity
  document.getElementById("Space_Worst").innerText = "Worst Case: O(N)";

  // Get all bars
  var bars = document.querySelectorAll(".bar");

  // Convert NodeList to Array to safely manipulate
  bars = Array.from(bars);

  // Start merge sort
  await mergeSortHelper(bars, 0, bars.length - 1, delay);

  // After sorting, enable UI elements or perform final actions
  enable();
}

// Helper function for Merge Sort
async function mergeSortHelper(bars, left, right, delay) {
  if (left < right) {
    var mid = Math.floor((left + right) / 2);

    // Recursively sort the two halves
    await mergeSortHelper(bars, left, mid, delay);
    await mergeSortHelper(bars, mid + 1, right, delay);

    // Merge the sorted halves
    await merge(bars, left, mid, right, delay);
  }
}

// Merge function for merging two sorted subarrays
async function merge(bars, left, mid, right, delay) {
  var tempArray = [];

  var i = left, j = mid + 1;
  var k = left;

  while (i <= mid && j <= right) {
    // Change color for comparison
    bars[i].style.backgroundColor = "#FF4949";
    bars[j].style.backgroundColor = "#FF4949";

    // Wait for delay
    await new Promise(resolve => setTimeout(resolve, delay));

    // Compare values
    var value1 = Number(bars[i].childNodes[0].innerText);
    var value2 = Number(bars[j].childNodes[0].innerText);

    if (value1 <= value2) {
      // Update height and text content
      tempArray.push(bars[i].cloneNode(true));
      i++;
    } else {
      // Update height and text content
      tempArray.push(bars[j].cloneNode(true));
      j++;
    }
  }

  // Copy remaining elements from left half, if any
  while (i <= mid) {
    tempArray.push(bars[i].cloneNode(true));
    i++;
  }

  // Copy remaining elements from right half, if any
  while (j <= right) {
    tempArray.push(bars[j].cloneNode(true));
    j++;
  }

  // Copy sorted elements back to original bars array
  for (var index = left; index <= right; index++) {
    bars[index].style.height = tempArray[index - left].style.height;
    bars[index].childNodes[0].innerText = tempArray[index - left].childNodes[0].innerText;
    bars[index].style.backgroundColor = "#13CE66";
  }
}
