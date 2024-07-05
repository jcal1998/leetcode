function jump(nums: number[]): number {
    if (nums.length === 1) return 0
    let stepMax = 0
    let maxReachable = 0
    let counter = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + i > maxReachable) {
            maxReachable = nums[i] + i
        }

        if (i === stepMax) {
            stepMax = maxReachable
            counter++
            if (maxReachable >= nums.length - 1) break
        }
    }

    return counter
};