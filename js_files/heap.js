// Asynchronous HeapSort function
async function HeapSort(delay = 600) {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "Worst Case: O(N log N)";
    document.getElementById("Time_Average").innerText = "Average Case: Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Best Case: Ω(N log N)";
  
    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "Worst Case: O(1)";
  
    // Get all bars
    var bars = document.querySelectorAll(".bar");
  
    // Convert NodeList to Array to safely manipulate
    bars = Array.from(bars);
  
    // Start heap sort
    await heapSort(bars, delay);
  
    // After sorting, enable UI elements or perform final actions
    enable();
  }
  
  // Helper function for Heap Sort
  async function heapSort(bars, delay) {
    var n = bars.length;
  
    // Build heap (rearrange array)
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(bars, n, i, delay);
    }
  
    // One by one extract an element from heap
    for (var i = n - 1; i > 0; i--) {
      // Move current root to end
      swapElements(bars, 0, i);
  
      // Display bars after delay
      await displayBars(bars, delay);
  
      // Call max heapify on the reduced heap
      await heapify(bars, i, 0, delay);
      bars[i].style.backgroundColor = "#13CE66";
    }
    bars[0].style.backgroundColor = "#13CE66";
  }
  
  // To heapify a subtree rooted with node i which is an index in bars[]
  async function heapify(bars, n, i, delay) {
    var largest = i; // Initialize largest as root
    var left = 2 * i + 1; // left = 2*i + 1
    var right = 2 * i + 2; // right = 2*i + 2
  
    // Change color for comparison
    bars[i].style.backgroundColor = "#FF4949";
  
    // Wait for delay
    await new Promise(resolve => setTimeout(resolve, delay));
  
    // If left child is larger than root
    if (left < n && Number(bars[left].childNodes[0].innerText) > Number(bars[largest].childNodes[0].innerText)) {
      largest = left;
    }
  
    // If right child is larger than largest so far
    if (right < n && Number(bars[right].childNodes[0].innerText) > Number(bars[largest].childNodes[0].innerText)) {
      largest = right;
    }
  
    // If largest is not root
    if (largest !== i) {
      // Change color for swapping
      bars[largest].style.backgroundColor = "#FF4949";
      bars[i].style.backgroundColor = "#FF4949";
  
      // Swap bars[i] and bars[largest]
      swapElements(bars, i, largest);
  
      // Display bars after delay
      await displayBars(bars, delay);
  
      // Recursively heapify the affected sub-tree
      await heapify(bars, n, largest, delay);
    }
  
    // Reset color after comparison or swapping
    bars[i].style.backgroundColor = "#6b5b95";
  }
  
  // Function to swap two elements in bars array
  function swapElements(bars, i, j) {
    var tempHeight = bars[i].style.height;
    var tempText = bars[i].childNodes[0].innerText;
  
    bars[i].style.height = bars[j].style.height;
    bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
  
    bars[j].style.height = tempHeight;
    bars[j].childNodes[0].innerText = tempText;
  }
  
  // Function to display bars array after delay
  async function displayBars(bars, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  
  // Example usage:
  // Call HeapSort with a specified delay (in milliseconds)
  // HeapSort(1000);
  