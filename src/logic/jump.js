class Solution {
    // Function to check if we can reach the last index from the 0th index.
    canReach(arr) {
        let maxReach = 0;
        let n = arr.length;

        for (let i = 0; i < n; i++) {
            // If current index is beyond max reachable index
            if (i > maxReach) {
                return false;
            }

            // Update max reachable index
            maxReach = Math.max(maxReach, i + arr[i]);

            // If we can reach or cross last index
            if (maxReach >= n - 1) {
                return true;
            }
        }

        return false;
    }
}
