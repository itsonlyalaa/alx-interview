#!/usr/bin/python3
"""prime game"""
def isWinner(x, nums):
    """A function that does the prime game"""
    if not nums or x < 1:
        return None
    n = max(nums)
    flter = [True for _ in range (max(n + 1, 2))]
    for i in range(2, int(pow(n, 0.5)) + 1):
        if not flter[i]:
            continue
        for j in range(i * i, n + 1, i):
            flter[j] = False
    flter[0] = flter[1] = False
    y = 0
    for i in range(len(flter)):
        if flter[i]:
            y += 1
        flter[i] = y
    player = 0
    for n in nums:
        player += flter[n] % 2 == 1
    if player * 2 == len(nums):
        return None
    if player * 2 > len(nums):
        return "Maria"
    return "Ben"
