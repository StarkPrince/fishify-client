for _ in range(int(input())):
    k, x = [int(x) for x in input().split()]
    x -= 1
    mx = int((-1 + (1 + 8 * x) ** 0.5) / 2) + 1
    if x >= k ** 2:
        print(2 * k - 1)
    elif k * (k + 1) >= x * 2:
        print(mx)
    else:
        z = x - ((k * (k + 1)) // 2) + 1
        alpha = ((k - 1) * k) // 2
        m = int((1 + (1 + 8 * (alpha - z)) ** 0.5) / 2)
        print(2 * k - m)
